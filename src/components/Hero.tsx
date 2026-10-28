import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_DATA, HERO_DESKTOP_MEDIA_URL } from '../data/company';

export const HERO_MEDIA_URL = 'https://ibb.co/20kFDtVq';
export { HERO_DESKTOP_MEDIA_URL };

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
        
        {/* ========================================================
            VERSÃO MOBILE (< 1024px): 100% PRESERVADA (SEM ALTERAÇÕES)
            ======================================================== */}
        <div className="w-full flex flex-col items-center lg:hidden">
          {/* IMAGEM COMPLETA DO HERO — SEM BORDAS, SEM MOLDURAS, SEM CANTOS ARREDONDADOS, SEM CORTES */}
          <div className="w-full flex justify-center px-0">
            <div className="w-full max-w-[540px] flex justify-center">
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

          {/* SOMENTE O BOTÃO MOBILE: "Quero iniciar minha habilitação" */}
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

        {/* ========================================================
            VERSÃO DESKTOP (>= 1024px): NOVO BANNER COMPLETO
            Referência visual: https://ibb.co/0pWDXCxG
            - Proporcional, sem distorções, sem cortes nos elementos principais
            - Logo, textos, carro e motocicleta 100% visíveis
            - Limpo, sem textos sobrepostos e sem botões cobrindo o banner
            - Clicável para WhatsApp com transição suave
            ======================================================== */}
        <div className="hidden lg:flex flex-col items-center w-full max-w-[1440px] px-6 xl:px-8">
          <a
            href={WHATSAPP_HERO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iniciar habilitação na Autoescola Direção Certa pelo WhatsApp"
            className="w-full block relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_50px_rgba(242,193,67,0.18)]"
          >
            <div
              className="w-full aspect-[1672/941] bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl relative overflow-hidden"
              style={{
                backgroundImage: `url(${COMPANY_DATA.heroDesktopMedia?.directUrl || '/hero_desktop.png'}), url('/hero_desktop.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Tag de imagem para acessibilidade, SEO e renderização garantida */}
              <img
                src={COMPANY_DATA.heroDesktopMedia?.directUrl || '/hero_desktop.png'}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== window.location.origin + '/hero_desktop.png') {
                    target.src = '/hero_desktop.png';
                  }
                }}
                alt={COMPANY_DATA.heroDesktopMedia?.alt || 'Autoescola Direção Certa - Banner Oficial Desktop'}
                className="w-full h-full object-cover rounded-2xl select-none"
                loading="eager"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
