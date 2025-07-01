// src/utils/validation.ts

// Define an interface for the form data to ensure type safety
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define an interface for the errors object
interface ContactFormErrors {
  name?: string; // Optional because an error might not exist for every field
  email?: string;
  subject?: string;
  message?: string;
}

export const validateContactForm = (formData: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  const { name, email, subject, message } = formData;

  // Name validation: Required and shouldn't be only numeric
  if (!name.trim()) {
    errors.name = "Name is required";
  } else if (/^\d+$/.test(name.trim())) {
    // Check if the name contains *only* digits
    errors.name = "Name cannot be only numeric";
  }
  // Note: You could add more complex name validation here if needed (e.g., no special characters)

  // Email validation: Required and valid format
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    // Standard regex for basic email format
    errors.email = "Email address is invalid";
  }
  // The previous regex already checks for the '@' and format. Just checking for '@' isn't enough for a valid email.

  // Subject validation: Required and minimum length (adjusted based on your original logic)
  if (!subject.trim()) {
    errors.subject = "Subject is required"; // Changed from "Message is required" to "Subject is required"
  } else if (subject.trim().length < 3) { // Example: minimum subject length, adjusted from 10 to a more typical subject length
    errors.subject = "Subject must be at least 3 characters long";
  }

  // Message validation: Required and minimum length
  if (!message.trim()) {
    errors.message = "Message is required";
  } else if (message.trim().length < 10) {
    // Example: minimum message length
    errors.message = "Message must be at least 10 characters long";
  }

  return errors;
};