import React from 'react';
import { Heart } from "lucide-react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaTelegram, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const socialLinks = [
  { icon: IoLogoGithub, href: "https://github.com/donyamardani", label: "GitHub" },
  { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/donya-mardani-293705383/", label: "Linkedin" },
  { icon: FaTelegram, href: "https://t.me/Donya_mardaniii", label: "Telegram" },
  { icon: FaInstagram, href: "https://www.instagram.com/donya__mardaniiii/", label: "Instagram" }
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#about", label: t('footer.links.about') },
    { href: "#projects", label: t('footer.links.projects') },
    { href: "#experience", label: t('footer.links.experience') },
    { href: "#contact", label: t('footer.links.contact') },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-start">
            <a href="#" className="text-xl font-bold tracking-tight">
              DM<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Donya Mardani. {t('footer.rights')}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}