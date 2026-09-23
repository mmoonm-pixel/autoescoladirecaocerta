import React from 'react';
import { PROFESSIONAL_COURSES, COMPANY_DATA, CourseItem } from '../data/company';
import { WhatsAppIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';
import { CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';

export const ProfessionalCourses: React.FC = () => {
  const handleCourseClick = (course: CourseItem) => {
    const message = `Olá! Vim pelo site da Autoescola Direção Certa e tenho interesse no curso de ${course.title}. Gostaria de mais informações.`;
    const url = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cursos" className="py-14 sm:py-20 bg-[#0D0F14] text-[#F5F5EE] border-b border-[#F2C143]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#F2C143]/15 border border-[#F2C143]/30">
              <Briefcase className="w-3.5 h-3.5 text-[#F2C143]" />
              <span className="font-mono text-xs font-bold tracking-widest text-[#F2C143] uppercase">
                Capacitação Especializada
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#F5F5EE]">
              TRANSFORME SUA CNH EM <span className="text-[#F2C143]">OPORTUNIDADE</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="text-xs sm:text-sm text-[#F5F5EE]/80 mt-2 font-medium">
              Cursos profissionalizantes que abrem portas para o seu futuro.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards de Cursos Profissionalizantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFESSIONAL_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-[#050202] rounded-3xl p-6 sm:p-7 border border-[#F2C143]/20 hover:border-[#F2C143]/60 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#F2C143]/15 border border-[#F2C143]/30 flex items-center justify-center text-[#F2C143] mb-4 group-hover:bg-[#F2C143] group-hover:text-[#0D0F14] transition-colors">
                  <Briefcase className="w-5 h-5" />
                </div>

                <h3 className="font-display text-lg sm:text-xl font-extrabold uppercase text-[#F5F5EE] tracking-tight mb-1">
                  {course.title}
                </h3>

                {course.subtitle && (
                  <p className="text-xs font-bold text-[#F2C143] mb-3">
                    “{course.subtitle}”
                  </p>
                )}

                <div className="space-y-2.5 my-5 border-t border-white/10 pt-4">
                  {course.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-[#F5F5EE]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#F2C143] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA: “Quero saber mais” -> Abrir WhatsApp */}
              <button
                type="button"
                onClick={() => handleCourseClick(course)}
                className="w-full py-3 px-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider bg-[#F2C143] hover:bg-[#E3C56A] text-[#0D0F14] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-4"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>{course.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
