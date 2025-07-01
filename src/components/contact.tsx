import React, { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

import { validateContactForm } from "../validation/validation";

import { type ContactFormData, type ContactFormErrors } from "..";


export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "success" | "error" | "validation_error" | null
  >(null);

  const EMAILJS_SERVICE_ID: string | undefined = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID: string | undefined = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY: string | undefined = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const isEmailJSConfigured: boolean = !!(
    EMAILJS_SERVICE_ID &&
    EMAILJS_TEMPLATE_ID &&
    EMAILJS_PUBLIC_KEY
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof ContactFormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    if (submitStatus) {
      setSubmitStatus(null);
      if (errors.form) {
        setErrors({ ...errors, form: undefined });
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    setErrors({});

    if (!isEmailJSConfigured) {
      setErrors({ form: "Contact form is not configured properly." });
      setSubmitStatus("error");
      return;
    }

    const validationErrors: ContactFormErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      if (form.current) {
        emailjs
          .sendForm(
            EMAILJS_SERVICE_ID as string,
            EMAILJS_TEMPLATE_ID as string,
            form.current,
            EMAILJS_PUBLIC_KEY as string
          )
          .then(
            (result) => {
              setSubmitStatus("success");
              setFormData({ name: "", email: "", subject: "", message: "" });
            },
            (error) => {
              setSubmitStatus("error");
              setErrors({
                form: "Failed to send message. Please try again later.",
              });
            }
          )
          .finally(() => {
            setIsSubmitting(false);
          });
      }
    } else {
      setSubmitStatus("validation_error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center
      py-16 px-4 bg-background-darker"
    >
      <span className="text-accent-teal font-mono text-base mr-2">
        04. What&apos;s Next?
      </span>
      <h2 className="text-3xl mt-4">Get In Touch</h2>
      <div className="mx-auto p-4 flex flex-col items-center w-full max-w-3xl">
        <div className="pb-8 text-center w-full">
          <p className="pt-6 text-text-muted">
            I&apos;m currently looking for new opportunities. Whether you have a
          </p>
          <p className="pb-6 text-text-muted">
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
        </div>
        {/* Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col w-full bg-background-dark p-8
          rounded-2xl"
          noValidate
        >
          {/* Container for Name and Email */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="py-2 text-text-muted" htmlFor="name">
                Name
              </label>
              <input
                className="form-input w-full"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="py-2 text-text-muted" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="form-input w-full"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject Input */}
          <div className="flex flex-col w-full mb-4">
            <label className="py-2 text-text-muted" htmlFor="subject">
              Subject
            </label>
            <input
              className="form-input w-full"
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.subject}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="py-2 text-text-muted" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="form-input w-full"
              name="message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          {/* Display Status Messages */}
          {submitStatus === "success" && (
            <p className="text-green-500 text-center mb-4" role="status">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && errors.form && (
            <p className="text-red-500 text-center mb-4" role="alert">
              {errors.form}
            </p>
          )}
          {submitStatus === "error" && !errors.form && (
            <p className="text-red-500 text-center mb-4" role="alert">
              Could not send message. Please try again.
            </p>
          )}
          {submitStatus === "validation_error" && (
            <p className="text-red-500 text-center mb-4" role="alert">
              Please fix the errors above before submitting.
            </p>
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className="btn-outline-accent mt-4 mx-auto"
            disabled={isSubmitting || !isEmailJSConfigured}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {!isEmailJSConfigured && (
            <p className="text-red-500 text-center text-sm mt-2" role="alert">
              Contact form is temporarily unavailable.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};