import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { BenefitsBar } from './components/BenefitsBar';
import { ServicesCarousel } from './components/ServicesCarousel';
import { Categories } from './components/Categories';
import { PracticalPlans } from './components/PracticalPlans';
import { ProfessionalCourses } from './components/ProfessionalCourses';
import { TheoryPractice } from './components/TheoryPractice';
import { TrainingStages } from './components/TrainingStages';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { Location } from './components/Location';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { DrivingAtmosphere } from './components/DrivingAtmosphere';
import { InterestModal } from './components/InterestModal';
import { SmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<'A' | 'B' | 'AB'>('B');

  const handleOpenModal = (category: 'A' | 'B' | 'AB' = 'B') => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#0D0F14] text-[#F5F5EE] flex flex-col selection:bg-[#F2C143] selection:text-[#0D0F14] relative overflow-x-clip">
        
        {/* Sistema visual discreto de ambientação viária */}
        <DrivingAtmosphere />

        {/* 1. Header com Logo Oficial e Fundo Combinado */}
        <Header onOpenModal={() => handleOpenModal('B')} />

        <main className="flex-1 relative z-10">
          {/* 01 — HERO (Mídia Oficial Direção Certa + CTAs) */}
          <Hero onOpenModal={() => handleOpenModal('B')} />

          {/* 02 — MARQUEE DINÂMICO */}
          <InfiniteMarquee />

          {/* 03 — FAIXA DE BENEFÍCIOS */}
          <BenefitsBar />

          {/* 04 — SERVIÇOS: ENCONTRE O CAMINHO CERTO PARA VOCÊ (CARROSSEL) */}
          <ServicesCarousel />

          {/* 05 — 1ª HABILITAÇÃO (CATEGORIAS A, B, AB) */}
          <Categories onSelectCategory={(cat) => setModalCategory(cat)} />

          {/* 06 — PACOTES DE AULAS PRÁTICAS & PACOTES AB (COM BOTÃO CATÁLOGO) */}
          <PracticalPlans />

          {/* 07 — CURSOS PROFISSIONALIZANTES */}
          <ProfessionalCourses />

          {/* 08 — PREPARAÇÃO TEÓRICA E PRÁTICA */}
          <TheoryPractice />

          {/* 09 — CAMINHO ATÉ SUA CNH */}
          <TrainingStages
            onOpenModal={() => handleOpenModal(modalCategory)}
            onSelectCategory={(cat) => setModalCategory(cat)}
          />

          {/* 10 — SOBRE A AUTOESCOLA DIREÇÃO CERTA */}
          <About />

          {/* 11 — O QUE NOSSOS ALUNOS DIZEM (DEPOIMENTOS) */}
          <Reviews />

          {/* 12 — PERGUNTAS FREQUENTES */}
          <Faq />

          {/* 13 — LOCALIZAÇÃO & HORÁRIOS EM MACEIÓ */}
          <Location />

          {/* 14 — CTA FINAL */}
          <FinalCta />
        </main>

        {/* 15 — RODAPÉ COM MESMA LOGO, ENDEREÇO, LINKS E CTAS */}
        <Footer />

        {/* 16 — BOTÃO FLUTUANTE WHATSAPP (AMARELO + PRETO) */}
        <WhatsAppFloatingButton />

        {/* 17 — MODAL DE INTERESSE COM TRANSIÇÃO SUAVE */}
        <InterestModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialCategory={modalCategory}
        />
      </div>
    </SmoothScroll>
  );
}
