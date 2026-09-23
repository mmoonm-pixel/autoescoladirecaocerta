import React from 'react';
import { Check, MapPin, Award, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { WhatsAppIcon } from './Icons';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-white border-y border-[#0D0F14]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal */}
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D0F14] bg-[#F2C143]/20 px-3 py-1 rounded-full border border-[#F2C143]">
            Tradição e Excelência em Maceió
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#0D0F14] mt-3 tracking-tight">
            Aprenda com quem é referência em <br className="hidden sm:block" />
            <span className="text-[#0D0F14] underline decoration-[#F2C143] decoration-4">Maceió – Alagoas</span>
          </h2>
        </div>

        {/* Grid em 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Coluna Esquerda: 3 Diferenciais */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F5EE] border border-[#0D0F14]/10 transition-all hover:border-[#F2C143]">
              <div className="w-8 h-8 rounded-full bg-[#0D0F14] text-[#F2C143] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-4 h-4 text-[#F2C143]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0D0F14] mb-1">
                  Segurança real para o trânsito urbano
                </h3>
                <p className="text-xs text-[#43403A] leading-relaxed">
                  Nosso compromisso é que você não apenas passe na prova, mas adquira autoconfiança e discernimento defensivo para dirigir em qualquer via.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F5EE] border border-[#0D0F14]/10 transition-all hover:border-[#F2C143]">
              <div className="w-8 h-8 rounded-full bg-[#0D0F14] text-[#F2C143] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-4 h-4 text-[#F2C143]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0D0F14] mb-1">
                  Assessoria completa em cada etapa
                </h3>
                <p className="text-xs text-[#43403A] leading-relaxed">
                  Acompanhamento de ponta a ponta: matrícula, agendamento de exames e datas de provas com todo o suporte de nossa equipe em Maceió.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F5F5EE] border border-[#0D0F14]/10 transition-all hover:border-[#F2C143]">
              <div className="w-8 h-8 rounded-full bg-[#0D0F14] text-[#F2C143] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-4 h-4 text-[#F2C143]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0D0F14] mb-1">
                  Instrutores pacientes e frota moderna
                </h3>
                <p className="text-xs text-[#43403A] leading-relaxed">
                  Profissionais credenciados com ampla experiência, didática calma e veículos confortáveis para você treinar com tranquilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Texto Institucional */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-sm sm:text-base text-[#0D0F14]/90 leading-relaxed">
              A <strong>Autoescola Direção Certa</strong> é uma instituição consolidada em Maceió – AL, dedicada exclusivamente à formação cidadã e técnica de condutores em 1ª habilitação, categorias A (Moto), B (Carro), AB (Carro + Moto) e cursos profissionalizantes regulamentados.
            </p>

            <p className="text-sm sm:text-base text-[#0D0F14]/90 leading-relaxed">
              Com sede estrategicamente localizada na Avenida Siqueira Campos, no bairro Prado, oferecemos infraestrutura acolhedora, horários flexíveis e atendimento humanizado para transformar seu sonho da CNH em realidade.
            </p>

            {/* Banner Institucional */}
            <div className="rounded-3xl overflow-hidden relative shadow-md border border-[#0D0F14]/10 bg-[#0D0F14] p-6 sm:p-8 text-[#F5F5EE]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F2C143]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#F2C143] uppercase">
                  Sede em Maceió – AL
                </span>
              </div>
              <p className="font-display font-black text-lg sm:text-xl uppercase text-[#F5F5EE] mb-1">
                Av. Siqueira Campos, 976 – Prado
              </p>
              <p className="text-xs text-[#F5F5EE]/70">
                Horários de Atendimento: 08:00 – 11:30 | 13:00 – 18:00
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_DATA.phone.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-xs font-extrabold text-[#0D0F14] bg-[#F2C143] hover:bg-[#E3C56A] shadow-md transition-all uppercase tracking-wider"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#0D0F14]" />
                <span>Conversar no WhatsApp</span>
              </a>
              <span className="text-xs text-[#43403A] font-medium">
                Atendimento rápido pela nossa equipe.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
