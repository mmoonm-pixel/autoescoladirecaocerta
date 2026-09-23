import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      id="whatsapp-floating-container"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Tooltip Desktop: “Fale com a Direção Certa” */}
      <div
        className={`hidden md:flex items-center pointer-events-auto bg-[#0D0F14] text-[#F2C143] text-xs font-black uppercase tracking-wider px-3.5 py-2 rounded-xl shadow-lg border border-[#F2C143]/30 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90'
        }`}
      >
        <span>Fale com a Direção Certa</span>
      </div>

      {/* Botão Flutuante em Amarelo + Preto com Pulso Discreto */}
      <a
        id="btn-whatsapp-float"
        href={COMPANY_DATA.phone.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Fale com a Autoescola Direção Certa no WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2C143] hover:bg-[#E3C56A] text-[#0D0F14] shadow-[0_8px_24px_rgba(13,15,20,0.4)] border-2 border-[#0D0F14] transition-all duration-300 hover:scale-105 active:scale-95 animate-brand-pulse cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#F2C143]/40"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0D0F14]" />

        {/* Ponto sutil preto de status ativo */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D0F14] opacity-50" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0D0F14] border border-[#F2C143]" />
        </span>
      </a>
    </aside>
  );
};
