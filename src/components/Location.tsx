import React from 'react';
import { Clock, Navigation, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Location: React.FC = () => {
  return (
    <section id="contato" className="py-14 sm:py-20 bg-[#F5F5EE] relative overflow-hidden border-t border-[#0D0F14]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: INFORMAÇÕES DA UNIDADE */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full bg-[#F2C143]/20 border border-[#F2C143]/40">
                <MapPin className="w-3.5 h-3.5 text-[#0D0F14]" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#0D0F14] uppercase">
                  Maceió – Alagoas
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0D0F14] tracking-tight mb-3">
                ESTAMOS EM <span className="text-[#0D0F14] underline decoration-[#F2C143] decoration-4">MACEIÓ</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="w-12 h-1 bg-[#F2C143] mb-6 rounded-full" />

              <div className="space-y-4 mb-8">
                {/* Nome e Endereço */}
                <div className="p-4 rounded-2xl bg-white border border-[#0D0F14]/10 shadow-xs">
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-[#0D0F14] uppercase tracking-tight mb-1">
                    Autoescola Direção Certa
                  </h3>
                  <p className="text-xs sm:text-sm text-[#43403A] leading-relaxed">
                    Av. Siqueira Campos, 976<br />
                    Prado, Maceió – AL<br />
                    CEP: 57010-002
                  </p>
                </div>

                {/* Horários Oficiais Exatos */}
                <div className="p-4 rounded-2xl bg-white border border-[#0D0F14]/10 shadow-xs space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-[#0D0F14] text-xs uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4 text-[#F2C143]" />
                    <span>Horários de Atendimento:</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#43403A] font-semibold border-b border-[#0D0F14]/5 pb-1">
                    <span>Manhã:</span>
                    <span className="font-bold text-[#0D0F14]">08:00 – 11:30</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#43403A] font-semibold">
                    <span>Tarde:</span>
                    <span className="font-bold text-[#0D0F14]">13:00 – 18:00</span>
                  </div>
                </div>

                {/* Contatos Oficiais */}
                <div className="p-4 rounded-2xl bg-white border border-[#0D0F14]/10 shadow-xs space-y-2 text-xs">
                  <a
                    href={COMPANY_DATA.phone.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[#0D0F14] hover:text-[#E3C56A] transition-colors font-semibold"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#0D0F14]" />
                    <span>WhatsApp: {COMPANY_DATA.phone.display}</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="flex items-center gap-2.5 text-[#0D0F14] hover:text-[#E3C56A] transition-colors font-semibold"
                  >
                    <Mail className="w-4 h-4 text-[#0D0F14]" />
                    <span>E-mail: {COMPANY_DATA.email}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Botões de Ação */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  id="btn-abrir-mapa"
                  href={COMPANY_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-xs uppercase tracking-wider text-[#0D0F14] bg-[#F2C143] hover:bg-[#E3C56A] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#0D0F14]" />
                  <span>Abrir no Google Maps</span>
                </a>

                <a
                  href={COMPANY_DATA.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider text-[#F5F5EE] bg-[#0D0F14] hover:bg-[#050202] transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#F2C143]" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* LADO DIREITO: MAPA VISÍVEL EM MACEIÓ */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#0D0F14]/15 bg-[#050202] h-[360px] sm:h-[440px] lg:h-[480px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+Siqueira+Campos,+976+-+Prado,+Macei%C3%B3+-+AL,+57010-002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Autoescola Direção Certa - Av. Siqueira Campos, 976, Prado, Maceió - AL"
                  className="w-full h-full"
                />

                <div className="absolute inset-0 rounded-3xl border border-black/10 pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
