import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';

interface HeaderProps {
  onOpenModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Habilitação', href: '#habilitacao' },
    { name: 'Planos', href: '#planos' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F2C143]/95 backdrop-blur-md py-2.5 shadow-md border-b border-[#0D0F14]/10'
          : 'bg-[#F2C143] py-3.5 border-b border-[#0D0F14]/5'
      } text-[#0D0F14]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Oficial — Completa, sem corte, sem fundo e perfeitamente integrada ao header */}
          <a
            href="#inicio"
            id="header-logo-link"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#0D0F14] rounded-lg transition-transform duration-200 hover:opacity-95"
            aria-label="Autoescola Direção Certa - Início"
          >
            <img
              src="/logo.png"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== window.location.origin + '/logo.png') {
                  target.src = '/logo.png';
                }
              }}
              alt={COMPANY_DATA.logo.alt}
              className="h-10 sm:h-12 w-auto max-w-[190px] sm:max-w-[230px] object-contain block select-none"
              loading="eager"
            />
          </a>

          {/* Menu Centralizado Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-xl text-xs font-bold tracking-wide text-[#0D0F14]/85 hover:text-[#0D0F14] hover:bg-[#0D0F14]/10 transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA à Direita Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={COMPANY_DATA.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-whatsapp"
              className="px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#0D0F14] hover:bg-[#050202] text-[#F5F5EE] shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#F2C143]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Botão Hamburger Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#0D0F14] hover:bg-[#0D0F14]/10 focus:outline-none focus:ring-2 focus:ring-[#0D0F14] transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Retrátil */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-[#F2C143] border-t border-[#0D0F14]/15 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-xl text-sm font-bold text-[#0D0F14] hover:bg-[#0D0F14]/10 uppercase tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-[#0D0F14]/15 space-y-2">
            <a
              href={COMPANY_DATA.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#0D0F14] text-[#F5F5EE] flex items-center justify-center gap-2 text-center shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#F2C143]" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href={COMPANY_DATA.phone.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#0D0F14]/30 text-[#0D0F14] hover:bg-[#0D0F14]/10 flex items-center justify-center text-center"
            >
              Ver catálogo completo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
