import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

export const HERO_MEDIA_URL = 'https://ibb.co/20kFDtVq';
const WHATSAPP_HERO_URL = 'https://wa.me/5582987446151';

interface HeroProps {
  onOpenModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="inicio"
      className="relative w-full bg-[#0D0F14] text-[#F5F5EE] pt-16 sm:pt-20 pb-8 sm:pb-12 select-none overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Iluminação sutil estática */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[#F2C143] blur-[160px]" />
      </div>

      <div className="w-full relative z-10 flex flex-col items-center">
        
        {/* IMAGEM COMPLETA DO HERO — SEM BORDAS, SEM MOLDURAS, SEM CANTOS ARREDONDADOS, SEM CORTES */}
        <div className="w-full flex justify-center px-0">
          <div className="w-full max-w-[540px] md:max-w-[620px] flex justify-center">
            <img
              src={COMPANY_DATA.heroMedia.directUrl}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== window.location.origin + COMPANY_DATA.heroMedia.local) {
                  target.src = COMPANY_DATA.heroMedia.local;
                }
              }}
              alt={COMPANY_DATA.heroMedia.alt}
              className="w-full h-auto object-contain block select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* SOMENTE O BOTÃO: "Quero iniciar minha habilitação" (pequeno, discreto, direto para o WhatsApp https://wa.me/5582987446151) */}
        <div className="w-full flex justify-center px-4 mt-3 sm:mt-4">
          <a
            href={WHATSAPP_HERO_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-hero-iniciar"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-extrabold text-xs sm:text-sm text-[#0D0F14] bg-[#F2C143] hover:bg-[#E3C56A] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Quero iniciar minha habilitação</span>
            <ArrowRight className="w-4 h-4 text-[#0D0F14]" />
          </a>
        </div>

      </div>
    </section>
  );
};
