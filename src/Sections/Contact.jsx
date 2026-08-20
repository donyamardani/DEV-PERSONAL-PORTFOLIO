import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTranslation } from 'react-i18next';
import Button from '../Components/Button';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'fa';

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.info_labels.email'),
      value: "donya.mardani88@gmail.com",
      href: "mailto:donya.mardani88@gmail.com",
    },
    {
      icon: Phone,
      label: t('contact.info_labels.phone'),
      value: "+989155791755",
      href: "tel:+989155791755",
    },
    {
      icon: MapPin,
      label: t('contact.info_labels.location'),
      value: t('contact.info_values.location'),
      href: "#",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(t('contact.status.error_config'));
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: t('contact.status.success'),
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: error.text || error.message || t('contact.status.error_default'),
      });
    }
    
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            {t('contact.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            {t('contact.headline_main')}{' '}
            <span className="font-serif font-medium text-white">
              {t('contact.headline_italic')}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.labels.name')}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t('contact.placeholders.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.labels.email')}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t('contact.placeholders.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.labels.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder={t('contact.placeholders.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="resize-none w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <Button className="w-full flex items-center justify-center gap-2" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? (
                  <span>{t('contact.button.sending')}</span>
                ) : (
                  <>
                    <span>{t('contact.button.send')}</span>
                    <Send className={`w-5 h-5 ${isRtl ? '-scale-x-100' : ''}}`} />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">{t('contact.info_title')}</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    href={item.href}
                    key={i}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground truncate">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shrink-0" />
                <span className="font-medium text-foreground">{t('contact.availability.title')}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('contact.availability.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}