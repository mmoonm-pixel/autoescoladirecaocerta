import React from 'react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { MapPin, Mail, Phone, BookOpen, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Habilitação', href: '#habilitacao' },
    { name: 'Planos', href: '#planos' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer id="main-footer" className="bg-[#050202] text-[#F5F5EE]/80 pt-12 pb-8 border-t border-[#F2C143]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Coluna 1: Mesma Logo do Header */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block">
              <img
                src={COMPANY_DATA.logo.directUrl}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== window.location.origin + COMPANY_DATA.logo.local) {
                    target.src = COMPANY_DATA.logo.local;
                  }
                }}
                alt={COMPANY_DATA.logo.alt}
                className="h-12 w-auto object-contain rounded-xl"
              />
            </a>

            <p className="font-display font-bold text-base text-[#F5F5EE] tracking-tight">
              Autoescola Direção Certa
            </p>

            <p className="text-xs text-[#F5F5EE]/70 leading-relaxed max-w-sm">
              Seu caminho certo para conquistar sua habilitação. 1ª habilitação, aulas práticas, categoria AB e cursos profissionalizantes em Maceió.
            </p>

            {/* CTAs solicitados */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                id="footer-btn-whatsapp"
                href={COMPANY_DATA.phone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-[#0D0F14] bg-[#F2C143] hover:bg-[#E3C56A] transition-all shadow-md uppercase tracking-wider"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#0D0F14]" />
                <span>Falar pelo WhatsApp</span>
              </a>

              <a
                id="footer-btn-catalogo"
                href={COMPANY_DATA.phone.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#F5F5EE] border border-[#F2C143]/40 hover:bg-[#F2C143]/10 transition-all uppercase tracking-wider"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#F2C143]" />
                <span>Ver catálogo completo</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-[#F2C143]">
              Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#F5F5EE]/80 hover:text-[#F2C143] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Endereço e Contatos Oficiais */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-black uppercase tracking-widest text-[#F2C143]">
              Contato & Localização
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-[#F5F5EE]/80">
              <MapPin className="w-4 h-4 text-[#F2C143] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#F5F5EE]">Av. Siqueira Campos, 976</p>
                <p>Prado – Maceió/AL</p>
                <p className="text-[11px] text-[#F5F5EE]/60">CEP: 57010-002</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#F5F5EE]/80 pt-1">
              <Phone className="w-4 h-4 text-[#F2C143] shrink-0" />
              <a
                href={COMPANY_DATA.phone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C143] font-bold"
              >
                (82) 98744-6151
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#F5F5EE]/80">
              <Mail className="w-4 h-4 text-[#F2C143] shrink-0" />
              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="hover:text-[#F2C143]"
              >
                cfcdirecaocertamcz@gmail.com
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#F2C143] text-[#F5F5EE] hover:text-[#0D0F14] transition-colors text-xs font-bold"
                aria-label="Instagram da Autoescola Direção Certa"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@autoescoladirecaocerta7</span>
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#F5F5EE]/50">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Autoescola Direção Certa. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-3">
            <span>Maceió – AL</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 p-1.5 rounded-lg bg-white/5 hover:bg-[#F2C143] text-white hover:text-[#0D0F14] transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
