import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './Icons';
import { COMPANY_DATA } from '../data/company';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'A' | 'B' | 'AB';
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'B',
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'A' | 'B' | 'AB'>(initialCategory);
  const [experience, setExperience] = useState<string>('Vou começar do zero');
  const [subject, setSubject] = useState<string>('Quero começar minha CNH');
  const [nameError, setNameError] = useState(false);

  // Sincronizar categoria inicial quando abrir
  useEffect(() => {
    if (isOpen) {
      setCategory(initialCategory);
      setNameError(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialCategory]);

  // Fechar com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) {
      setNameError(true);
      return;
    }

    const categoryLabel =
      category === 'A'
        ? 'A — Moto'
        : category === 'B'
        ? 'B — Carro'
        : 'AB — Carro + Moto';

    const message = `Olá! Meu nome é ${trimmedName}. Tenho interesse na categoria ${categoryLabel}. ${experience}. Gostaria de saber mais sobre ${subject}.`;
    const whatsappUrl = `${COMPANY_DATA.phone.whatsappUrl}?text=${encodeURIComponent(message)}`;

    // Abrir o WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Fechar o modal após abrir
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop translúcido escuro */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
          />

          {/* Janela do Modal */}
          <motion.div
            key="modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{
              duration: 0.36,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-[calc(100%-32px)] sm:w-full sm:max-w-xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#0D0F14]/20 flex flex-col overflow-hidden z-10"
          >
            {/* Header fixo do Modal em Amarelo + Preto */}
            <div className="bg-[#0D0F14] text-[#F5F5EE] p-5 sm:p-6 relative border-b-2 border-[#F2C143] shrink-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F2C143]" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#F2C143] uppercase">
                  Autoescola Direção Certa • Maceió – AL
                </span>
              </div>

              <h2
                id="modal-title"
                className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white pr-10"
              >
                Comece sua habilitação
              </h2>
              <p className="text-xs text-gray-300 mt-1 max-w-sm">
                Preencha os campos abaixo para receber atendimento imediato pelo WhatsApp oficial.
              </p>

              {/* Botão X para Fechar */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar formulário"
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-gray-300 hover:text-[#F2C143] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2C143] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo scrollável do formulário */}
            <motion.div
              data-lenis-prevent
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-y-auto overscroll-contain flex-1 p-5 sm:p-7 bg-[#F5F5EE]/80"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* CAMPO 1: Qual é o seu nome? */}
                <div>
                  <label
                    htmlFor="modal-input-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0D0F14] mb-1.5"
                  >
                    Qual é o seu nome? *
                  </label>
                  <input
                    id="modal-input-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError) setNameError(false);
                    }}
                    placeholder="Digite seu nome completo"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-[#0D0F14] text-sm focus:outline-none transition-all ${
                      nameError
                        ? 'border-red-500 ring-2 ring-red-200'
                        : 'border-[#0D0F14]/20 focus:ring-2 focus:ring-[#F2C143]'
                    }`}
                  />
                  {nameError && (
                    <span className="text-[11px] text-red-600 font-medium mt-1 block">
                      Por favor, informe seu nome para prosseguir.
                    </span>
                  )}
                </div>

                {/* CAMPO 2: Qual categoria você deseja? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0F14] mb-1.5">
                    Qual categoria você deseja?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'A' as const, label: 'A — Moto' },
                      { id: 'B' as const, label: 'B — Carro' },
                      { id: 'AB' as const, label: 'AB — Carro + Moto' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCategory(opt.id)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                          category === opt.id
                            ? 'bg-[#0D0F14] text-[#F2C143] border-[#0D0F14] shadow-xs ring-2 ring-[#F2C143]'
                            : 'bg-white text-[#0D0F14] border-[#0D0F14]/15 hover:border-[#0D0F14]'
                        }`}
                      >
                        {category === opt.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F2C143]" />
                        )}
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CAMPO 3: Você já dirige? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0F14] mb-1.5">
                    Você já dirige?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Já tenho alguma experiência',
                      'Ainda estou aprendendo',
                      'Vou começar do zero',
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setExperience(opt)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all text-center leading-snug cursor-pointer ${
                          experience === opt
                            ? 'bg-[#0D0F14] text-[#F2C143] border-[#0D0F14] shadow-xs font-semibold'
                            : 'bg-white text-[#0D0F14] border-[#0D0F14]/15 hover:border-[#0D0F14]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CAMPO 4: O que você gostaria de saber? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D0F14] mb-1.5">
                    O que você gostaria de saber?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Valores e formas de pagamento',
                      'Como funciona a habilitação',
                      'Quero começar minha CNH',
                      'Tenho outra dúvida',
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSubject(opt)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all text-left flex items-center justify-between cursor-pointer ${
                          subject === opt
                            ? 'bg-[#0D0F14] text-[#F2C143] border-[#0D0F14] shadow-xs font-semibold'
                            : 'bg-white text-[#0D0F14] border-[#0D0F14]/15 hover:border-[#0D0F14]'
                        }`}
                      >
                        <span>{opt}</span>
                        {subject === opt && (
                          <span className="w-2 h-2 rounded-full bg-[#F2C143] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BOTÃO FINAL: QUERO RECEBER INFORMAÇÕES */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="btn-enviar-interesse"
                    className="w-full py-3.5 px-6 rounded-2xl font-extrabold text-xs text-[#0D0F14] bg-[#F2C143] hover:bg-[#E3C56A] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider group"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#0D0F14]" />
                    <span>QUERO RECEBER INFORMAÇÕES</span>
                    <ArrowRight className="w-4 h-4 text-[#0D0F14] group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-center text-[#43403A] mt-2">
                    Atendimento direto pelo WhatsApp da Autoescola Direção Certa em Maceió.
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
