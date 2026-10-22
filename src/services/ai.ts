import { developerConfig } from '../data/developer';
import { skillsData } from '../data/skills';

export interface AIResponse {
  answer: string;
  suggestions: string[];
}

export const getAIResponse = async (userQuery: string): Promise<AIResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const query = userQuery.toLowerCase().trim();

  // Football, Hobbies & Personal life queries
  if (
    query.includes('bóng đá') ||
    query.includes('đá bóng') ||
    query.includes('thể thao') ||
    query.includes('giải') ||
    query.includes('vô địch') ||
    query.includes('nhì') ||
    query.includes('sở thích') ||
    query.includes('ngoài giờ') ||
    query.includes('hà nội')
  ) {
    return {
      answer: `⚽ **Thông tin ngoại khóa & Cuộc sống của Phạm Thành Nam:**\n\n- 🏆 **Bóng đá & Thể thao:** Nam có niềm đam mê đặc biệt với bóng đá! Đã từng cùng đồng đội xuất sắc đoạt **Vô địch giải bóng đá Khoa Công nghệ Thông tin (CNTT)** 1 lần và đạt danh hiệu **Nhì (Á quân) giải bóng đá toàn trường UTT**.\n- 📍 **Nơi ở & Làm việc:** Đang sinh sống, học tập và làm việc tại Hà Nội.`,
      suggestions: [
        'Kinh nghiệm lập trình Android của Nam?',
        'Kỹ năng công nghệ chính?',
        'Cách liên hệ với Nam?'
      ]
    };
  }

  // Personal info & Identity queries
  if (
    query.includes('ai') ||
    query.includes('tên') ||
    query.includes('nam') ||
    query.includes('phạm thành nam') ||
    query.includes('sinh') ||
    query.includes('2004') ||
    query.includes('15/10') ||
    query.includes('15102004') ||
    query.includes('quê') ||
    query.includes('ninh bình') ||
    query.includes('utt') ||
    query.includes('trường') ||
    query.includes('học') ||
    query.includes('cntt') ||
    query.includes('công ty') ||
    query.includes('kinh nghiệm')
  ) {
    return {
      answer: `👋 **Thông tin cá nhân về Phạm Thành Nam:**\n\n- 👤 **Họ và tên:** Phạm Thành Nam\n- 🎂 **Ngày sinh:** 15/10/2004\n- 🏡 **Quê quán:** Ninh Bình\n- 🎓 **Học vấn:** Trường Đại học Công nghệ Giao thông Vận tải (UTT) — Chuyên ngành Công nghệ Thông tin (CNTT)\n- 💼 **Công việc hiện tại:** Developer tại công ty công nghệ (Gần 1 năm kinh nghiệm thực tế)\n- 🏆 **Thành tích nổi bật:** Vô địch giải bóng đá Khoa CNTT & Nhì giải bóng đá toàn trường UTT!\n- 🚀 **Thế mạnh chuyên môn:** Phát triển & maintain ứng dụng Native Android (Kotlin, MVVM, Room DB, Retrofit), tối ưu Monetization (Google AdMob, In-App Purchases / IAP), kết hợp với Firebase & Web Frontend (ReactJS, TypeScript).`,
      suggestions: [
        'Sở thích bóng đá & giải thưởng của Nam?',
        'Kỹ năng công nghệ của Thành Nam?',
        'Các dự án Android & Web đã làm?'
      ]
    };
  }

  // Project queries
  if (query.includes('food') || query.includes('appfood') || query.includes('đồ ăn') || query.includes('đặt món') || query.includes('đồ án')) {
    return {
      answer: `🍔 **AppFood — Ứng dụng Đặt đồ ăn & Giao hàng (Đồ án xuất sắc tại UTT):**\n\nDự án ứng dụng Android Native do Phạm Thành Nam phát triển bằng Kotlin, MVVM, Room DB, Retrofit API và Firebase.\n- 🛵 **Tính năng nổi bật:** Tra cứu món ăn thông minh, chọn topping phong phú, giỏ hàng tự động tính toán chiết khấu, theo dõi đơn hàng thời gian thực, quản lý địa chỉ giao hàng và thông báo Push Notification.`,
      suggestions: ['Xem các dự án Android khác', 'Kỹ năng Android của Nam', 'Cách liên hệ với Nam?']
    };
  }

  if (query.includes('iptv') || query.includes('stream') || query.includes('video')) {
    return {
      answer: `Thành Nam đã phát triển **IPTV Player**, ứng dụng Android Native được xây dựng bằng Kotlin, MVVM architecture, Room DB, Retrofit và ExoPlayer. Ứng dụng phân tích cú pháp danh sách phát M3U/M3U8 phát trực tuyến HLS độ trễ thấp, danh mục yêu thích và đề xuất kênh.`,
      suggestions: ['Xem dự án Kawaii ScreenPet', 'Thành Nam làm được web gì?', 'Cách liên hệ với Thành Nam?']
    };
  }

  if (query.includes('pet') || query.includes('kawaii') || query.includes('overlay') || query.includes('desktop')) {
    return {
      answer: `Thành Nam đã phát triển **Kawaii ScreenPet**, ứng dụng Android dạng desktop-pet nổi trên màn hình. Sử dụng Android Foreground Service và WindowManager Overlay để hiển thị thú cưng hoạt hình tương tác mượt mà trên nền các ứng dụng khác.`,
      suggestions: ['Chi tiết dự án IPTV Player', 'Thành Nam thông thạo công nghệ gì?', 'Liên hệ nhận dự án']
    };
  }

  if (query.includes('spa') || query.includes('booking') || query.includes('calendar')) {
    return {
      answer: `Thành Nam xây dựng **Spa Booking Platform**, ứng dụng web đặt lịch dịch vụ full-stack bằng React, TypeScript, Tailwind CSS, Node.js, Express và MongoDB. Tích hợp lịch đặt theo thời gian thực và trang quản trị admin.`,
      suggestions: ['Dịch vụ backend của Thành Nam', 'Xem tất cả dự án', 'Báo giá phát triển web']
    };
  }

  // Skills & Tech Stack
  if (query.includes('skill') || query.includes('kỹ năng') || query.includes('tech') || query.includes('kotlin') || query.includes('react') || query.includes('stack') || query.includes('admob')) {
    const mobileSkills = skillsData.filter(s => s.category === 'Mobile').map(s => s.name).join(', ');
    const webSkills = skillsData.filter(s => s.category === 'Web').map(s => s.name).join(', ');
    const backendSkills = skillsData.filter(s => s.category === 'Backend').map(s => s.name).join(', ');

    return {
      answer: `Thành Nam chuyên sâu về cả Mobile và Web:\n- 📱 **Mobile & Monetization**: ${mobileSkills}\n- 💻 **Web Frontend**: ${webSkills}\n- ⚙️ **Backend & Database**: ${backendSkills}\n- 🛠️ **Công cụ**: Git, GitHub, Android Studio, VS Code, Postman.`,
      suggestions: ['Kinh nghiệm làm Android AdMob/IAP', 'Dịch vụ Thành Nam cung cấp', 'Bắt đầu dự án mới!']
    };
  }

  // Services & Freelance
  if (query.includes('build') || query.includes('service') || query.includes('dịch vụ') || query.includes('thuê') || query.includes('freelance') || query.includes('giá')) {
    return {
      answer: `Thành Nam cung cấp 3 nhóm dịch vụ chính:\n1. 📱 **Android App Development & Monetization**: Lập trình app Native Kotlin, tối ưu quảng cáo AdMob, tích hợp thanh toán IAP, Firebase và Room DB.\n2. 💻 **Web Development & Dashboards**: Xây dựng website ReactJS + TypeScript, Tailwind CSS, trang quản trị SaaS hiện đại.\n3. ⚙️ **Backend API & Database**: Thiết kế RESTful API Node.js + Express, MongoDB schema và xác thực bảo mật JWT.`,
      suggestions: ['Liên hệ với Thành Nam', 'Xem dự án tiêu biểu', 'Địa chỉ làm việc của Nam']
    };
  }

  // Contact
  if (query.includes('contact') || query.includes('liên hệ') || query.includes('email') || query.includes('sđt') || query.includes('địa chỉ')) {
    return {
      answer: `Bạn có thể liên hệ trực tiếp với Phạm Thành Nam qua **Trang Contact** trên website này hoặc gửi email về **${developerConfig.email}**.\n- 📍 **Địa chỉ:** ${developerConfig.address}\n- 💼 **Trạng thái:** ${developerConfig.status}!`,
      suggestions: ['Đến trang Liên Hệ', 'Dịch vụ của Thành Nam', 'Xem các dự án đã làm']
    };
  }

  // Generic context response
  return {
    answer: `Phạm Thành Nam (Sinh 15/10/2004, Quê Ninh Bình, Sinh viên CNTT trường UTT) là Android & Full-stack Web Developer đang làm việc tại công ty công nghệ với gần 1 năm kinh nghiệm. Nam chuyên về Kotlin native mobile apps, tích hợp AdMob Monetization & IAP, Firebase, React web apps và Node.js REST APIs.`,
    suggestions: [
      'Thành Nam là ai?',
      'Kinh nghiệm làm Android & AdMob',
      'Bộ công nghệ của Thành Nam',
      'Liên hệ nhận dự án'
    ]
  };
};
