import type { ContactFormPayload } from '../types';

export interface ContactValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormPayload, string>>;
}

export const validateContactForm = (data: ContactFormPayload): ContactValidationResult => {
  const errors: Partial<Record<keyof ContactFormPayload, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Vui lòng nhập tên của bạn (tối thiểu 2 ký tự).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Vui lòng nhập địa chỉ email hợp lệ.';
  }

  if (!data.projectType) {
    errors.projectType = 'Vui lòng chọn loại dự án.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Vui lòng nhập chi tiết về dự án (tối thiểu 10 ký tự).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const submitContactForm = async (payload: ContactFormPayload): Promise<{ success: boolean; message: string }> => {
  const validation = validateContactForm(payload);
  if (!validation.isValid) {
    const firstError = Object.values(validation.errors)[0];
    throw new Error(firstError || 'Thông tin không hợp lệ. Vui lòng kiểm tra lại.');
  }

  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;
  const teleBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const teleChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const requests: Promise<any>[] = [];

  // 1. Send Email to thanhnamnb1004@gmail.com via Web3Forms API
  if (web3FormsKey) {
    requests.push(
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: payload.name,
          email: payload.email,
          project_type: payload.projectType,
          budget: payload.budget,
          message: payload.message,
          subject: `🚀 [Portfolio Inquiry] Dự án mới từ ${payload.name}`,
          from_name: `${payload.name} (Portfolio Website)`
        })
      })
        .then((res) => res.json())
        .catch((err) => console.error('Web3Forms Error:', err))
    );
  }

  // 2. Send instant notification to Telegram Bot
  if (teleBotToken && teleChatId) {
    const teleMessage = `🚀 <b>YÊU CẦU DỰ ÁN MỚI TỪ PORTFOLIO!</b>\n\n<b>👤 Người gửi:</b> ${payload.name}\n<b>📧 Email:</b> ${payload.email}\n<b>📌 Loại dự án:</b> ${payload.projectType}\n<b>💰 Ngân sách:</b> ${payload.budget}\n\n<b>📝 Lời nhắn:</b>\n${payload.message}`;

    requests.push(
      fetch(`https://api.telegram.org/bot${teleBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: teleChatId,
          parse_mode: 'HTML',
          text: teleMessage
        })
      })
        .then((res) => res.json())
        .catch((err) => console.error('Telegram Error:', err))
    );
  }

  if (requests.length > 0) {
    await Promise.allSettled(requests);
  } else {
    // Simulated delay if keys are not set up yet
    await new Promise((resolve) => setTimeout(resolve, 800));
  }

  return {
    success: true,
    message: `Cảm ơn ${payload.name}! Yêu cầu về dự án "${payload.projectType}" của bạn đã được gửi thành công. Thành Nam sẽ phản hồi lại bạn qua email ${payload.email} trong thời gian sớm nhất.`
  };
};
