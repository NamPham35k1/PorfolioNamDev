import type { ContactFormPayload } from '../types';

export interface ContactValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormPayload, string>>;
}

export const validateContactForm = (data: ContactFormPayload): ContactValidationResult => {
  const errors: Partial<Record<keyof ContactFormPayload, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter a valid name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project category.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide details about your project (at least 10 characters).';
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
    throw new Error(firstError || 'Validation failed. Please check form fields.');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: `Thank you ${payload.name}! Your message regarding "${payload.projectType}" has been received. Nam will respond to ${payload.email} shortly.`
  };
};
