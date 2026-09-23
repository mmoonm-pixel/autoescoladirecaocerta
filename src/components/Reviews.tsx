import React, { useRef } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface StudentReview {
  id: number;
  name: string;
  category: string;
  date: string;
  rating: number;
  comment: string;
}

const REVIEWS_DATA: StudentReview[] = [
  {
    id: 1,
    name: 'Camila Rodrigues',
    category: 'Categoria B (Carro)',
    date: 'Aluna Aprovada',
    rating: 5,
    comment:
      'Passei de primeira na prova prática! Os instrutores da Direção Certa são muito pacientes no trânsito e o carro com ar-condicionado e direção leve ajudou muito nos treinos de baliza em Maceió. Recomendo demais!',
  },
  {
    id: 2,
    name: 'Lucas Nascimento',
    category: 'Categoria A (Moto)',
    date: 'Aluno Aprovado',
    rating: 5,
    comment:
      'A preparação para moto faz toda a diferença para treinar o circuito antes do exame oficial. O atendimento na sede do Prado foi rápido e me esclareceu todas as etapas do processo.',
  },
  {
    id: 3,
    name: 'Marcos Paulo Sousa',
    category: 'Categoria AB (Carro + Moto)',
    date: 'Aluno Aprovado',
    rating: 5,
    comment:
      'Fiz o pacote AB. As aulas foram super didáticas e economizei muito tempo unificando o processo. Equipe séria e muito profissional aqui em Maceió.',
  },
  {
    id: 4,
    name: 'Juliana Alves',
    category: 'Aulas para Habilitados',
    date: 'Aluna Aprovada',
    rating: 5,
    comment:
      'Tinha muito medo de dirigir depois de anos habilitada. O instrutor teve toda a paciência do mundo, me passou muita calma e confiança. Hoje estou dirigindo com tranquilidade pelo Prado e toda a cidade!',
  },
  {
    id: 5,
    name: 'Gabriel Mendonça',
    category: 'Curso Profissionalizante',
    date: 'Aluno Qualificado',
    rating: 5,
    comment:
      'Fiz o curso profissionalizante na Direção Certa. Conteúdo direto ao ponto, documentação ágil e suporte nota dez. Abriu novas portas para o meu trabalho.',
  },
];

export const Reviews: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="depoimentos" className="py-12 sm:py-16 bg-[#0D0F14] text-[#F5F5EE] border-b border-[#F2C143]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full bg-[#F2C143]/15 border border-[#F2C143]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2C143]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#F2C143]">
                  Depoimentos Reais
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#F5F5EE] tracking-tight">
                O QUE NOSSOS <span className="text-[#F2C143]">ALUNOS DIZEM</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.12}>
            <div className="flex items-center gap-2">
              <div className="flex text-[#F2C143]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F2C143]" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-[#F5F5EE]">
                5.0 • Maceió – AL
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Carrossel Horizontal Touch */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 touch-pan-x snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {REVIEWS_DATA.map((rv) => (
            <div
              key={rv.id}
              className="min-w-[85vw] sm:min-w-[340px] max-w-[380px] snap-start flex-shrink-0 bg-[#050202] rounded-3xl p-6 border border-[#F2C143]/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#F2C143]">
                    {[...Array(rv.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F2C143]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#F2C143] uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {rv.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#F5F5EE]/85 leading-relaxed italic mb-6">
                  “{rv.comment}”
                </p>
              </div>

              <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                <div>
                  <span className="font-display font-extrabold text-xs sm:text-sm text-[#F5F5EE] block">
                    {rv.name}
                  </span>
                  <span className="text-[11px] text-[#E3C56A]">
                    {rv.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
