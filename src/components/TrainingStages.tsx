import React from 'react';
import { BookOpen, Car, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from './Icons';
import { COMPANY_DATA } from '../data/company';

interface TrainingStagesProps {
  onOpenModal?: () => void;
  onSelectCategory?: (category: 'A' | 'B' | 'AB') => void;
}

interface StageCard {
  step: string;
  badge: string;
  title: string;
  desc: string;
  highlights: string[];
  icon: React.ElementType;
}

const STAGES: StageCard[] = [
  {
    step: '01',
    badge: 'FASE PREPARATÓRIA',
    title: 'FORMAÇÃO TEÓRICA',
    desc: 'Conteúdo completo com foco em legislação de trânsito, direção defensiva, primeiros socorros e mecânica básica.',
    highlights: ['Sala de aula estruturada', 'Simulados oficiais', 'Horários flexíveis em Maceió'],
    icon: BookOpen,
  },
  {
    step: '02',
    badge: 'PRÁTICA EM TRÂNSITO',
    title: 'FORMAÇÃO PRÁTICA',
    desc: 'Treinamento completo em vias urbanas de Maceió e circuito em pista de treinamento para motociclistas.',
    highlights: ['Veículos com duplo comando', 'Treino de baliza e manobras', 'Instrutores dedicados'],
    icon: Car,
  },
  {
    step: '03',
    badge: 'AVALIAÇÃO OFICIAL',
    title: 'ETAPAS EXIGIDAS',
    desc: 'Acompanhamento nos exames médicos, psicotécnicos e agendamento da prova prática oficial.',
    highlights: ['Suporte em toda a documentação', 'Agendamentos organizados', 'Apoio pré-exame'],
    icon: ShieldCheck,
  },
  {
    step: '04',
    badge: 'OBJETIVO ALCANÇADO',
    title: 'PRA CONQUISTAR SUA CNH',
    desc: 'Aprovação nas etapas e conquista da sua Permissão para Dirigir (PPD), pronto para guiar com independência.',
    highlights: ['Emissão da CNH', 'Independência para dirigir', 'Apoio da Direção Certa'],
    icon: Award,
  },
];

export const TrainingStages: React.FC<TrainingStagesProps> = ({
  onOpenModal,
}) => {
  return (
    <section
      id="etapas"
      className="pt-8 pb-12 sm:pt-10 sm:pb-16 bg-[#F5F5EE] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="mb-6 sm:mb-8 border-b border-[#0D0F14]/10 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full bg-[#F2C143]/20 border border-[#F2C143]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D0F14]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0D0F14]">
                Passo a Passo Transparente
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0D0F14] tracking-tight leading-none">
              O CAMINHO ATÉ <span className="text-[#0D0F14] underline decoration-[#F2C143] decoration-4">SUA CNH</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex items-center gap-2 text-xs font-mono text-[#43403A]"
          >
            <span>MACEIÓ – AL</span>
          </motion.div>
        </div>

        {/* CARDS DAS 4 ETAPAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STAGES.map((st, index) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white rounded-3xl p-6 border border-[#0D0F14]/10 shadow-xs flex flex-col justify-between hover:border-[#F2C143] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-black text-[#F2C143]">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0D0F14]/5 text-[#43403A]">
                      {st.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-[#F2C143]/15 flex items-center justify-center text-[#0D0F14] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-base font-extrabold uppercase text-[#0D0F14] tracking-tight mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-[#43403A] leading-relaxed mb-4">
                    {st.desc}
                  </p>

                  <div className="space-y-1.5 border-t border-[#0D0F14]/5 pt-3">
                    {st.highlights.map((hl) => (
                      <div key={hl} className="text-[11px] text-[#0D0F14]/80 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#F2C143]" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA INFERIOR */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-xs uppercase tracking-wider bg-[#0D0F14] text-[#F2C143] hover:bg-[#050202] transition-all cursor-pointer shadow-md"
          >
            <span>Iniciar Processo de Habilitação</span>
            <ArrowRight className="w-4 h-4 text-[#F2C143]" />
          </button>
        </div>

      </div>
    </section>
  );
};
