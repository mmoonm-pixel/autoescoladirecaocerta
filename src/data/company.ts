export interface PracticalPlan {
  id: string;
  name: string;
  badge?: string;
  lessons: number;
  description: string;
  price: string;
  popular?: boolean;
}

export interface PracticalPlanAB {
  id: string;
  name: string;
  badge?: string;
  carLessons: number;
  motoLessons: number;
  totalLessons: number;
  price: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: boolean;
}

export interface CourseItem {
  id: string;
  title: string;
  subtitle?: string;
  features: string[];
  ctaText: string;
}

export interface BenefitItem {
  headline: string;
  subline: string;
}

export const COMPANY_DATA = {
  name: 'Autoescola Direção Certa',
  shortName: 'Direção Certa',
  slogan: 'Seu caminho certo para conquistar sua habilitação.',
  subSlogan: '1ª habilitação, aulas práticas, categoria AB e cursos profissionalizantes em Maceió.',
  address: {
    street: 'Av. Siqueira Campos, 976',
    neighborhood: 'Prado',
    city: 'Maceió',
    state: 'AL',
    cep: '57010-002',
    full: 'Av. Siqueira Campos, 976 - Prado, Maceió – AL, 57010-002',
    googleMapsUrl: 'https://maps.google.com/?q=Av.+Siqueira+Campos,+976+-+Prado,+Macei%C3%B3+-+AL,+57010-002',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.0452331502447!2d-35.7538804!3d-9.6644265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145a33a1e2f9d%3A0xb35e39665bc7f4c0!2sAv.%20Siqueira%20Campos%2C%20976%20-%20Prado%2C%20Macei%C3%B3%20-%20AL%2C%2057010-002!5e0!3m2!1spt-BR!2sbr!4v1711000000000!5m2!1spt-BR!2sbr'
  },
  phone: {
    display: '(82) 98744-6151',
    raw: '5582987446151',
    whatsappUrl: 'https://wa.me/5582987446151',
    catalogUrl: 'https://wa.me/c/558287446151',
  },
  email: 'cfcdirecaocertamcz@gmail.com',
  instagram: {
    handle: '@autoescoladirecaocerta7',
    url: 'https://instagram.com/autoescoladirecaocerta7',
  },
  hours: [
    { period: 'Manhã', hours: '08:00 – 11:30' },
    { period: 'Tarde', hours: '13:00 – 18:00' },
  ],
  hoursFormatted: '08:00 – 11:30 | 13:00 – 18:00',
  logo: {
    sourceUrl: 'https://ibb.co/jk4fZJS5',
    directUrl: '/logo.png',
    local: '/logo.png',
    alt: 'Logo Autoescola Direção Certa',
  },
  heroMedia: {
    sourceUrl: 'https://ibb.co/20kFDtVq',
    directUrl: 'https://i.ibb.co/TDgwV8jc/IMG-6914.jpg',
    local: '/hero.jpg',
    alt: 'Autoescola Direção Certa Maceió',
  },
  heroDesktopMedia: {
    sourceUrl: 'https://ibb.co/0pWDXCxG',
    directUrl: 'https://i.ibb.co/mrYDB93c/A5-E58-C9-F-B55-B-41-D6-A873-C04-C60-A5-CDC6.png',
    local: '/hero_desktop.png',
    alt: 'Autoescola Direção Certa Maceió - Banner Oficial',
  },
};

export const HERO_MEDIA_URL = 'https://ibb.co/20kFDtVq';
export const HERO_DESKTOP_MEDIA_URL = 'https://ibb.co/0pWDXCxG';

// Serviços oficiais da Autoescola Direção Certa
export const OFFICIAL_SERVICES: ServiceItem[] = [
  {
    id: 'primeira-habilitacao',
    number: '01',
    title: '1ª HABILITAÇÃO',
    subtitle: 'Categorias A, B e AB',
    description: 'Processo completo de formação para condutores de moto, carro ou ambos com suporte do início ao fim.',
    highlight: true,
  },
  {
    id: 'classificacao',
    number: '02',
    title: 'CLASSIFICAÇÃO',
    subtitle: 'Mudança e adição de categoria',
    description: 'Amplie suas possibilidades de condução com processos otimizados de classificação de CNH.',
  },
  {
    id: 'cursos-profissionalizantes',
    number: '03',
    title: 'CURSOS PROFISSIONALIZANTES',
    subtitle: 'Capacitação especializada',
    description: 'Cursos regulamentados que qualificam você para o mercado profissional de transporte de cargas e pessoas.',
    highlight: true,
  },
  {
    id: 'aulas-particulares',
    number: '04',
    title: 'AULAS PARTICULARES',
    subtitle: 'Foco nas suas necessidades',
    description: 'Treinamento personalizado com instrutores pacientes para aperfeiçoar manobras, baliza e trânsito real.',
  },
  {
    id: 'aulas-habilitados',
    number: '05',
    title: 'AULAS PARA HABILITADOS',
    subtitle: 'Perca o medo de dirigir',
    description: 'Metodologia acolhedora e prática para quem já tem CNH e deseja recuperar a confiança ao volante.',
  },
  {
    id: 'horarios-flexiveis',
    number: '06',
    title: 'HORÁRIOS FLEXÍVEIS',
    subtitle: 'Adapte à sua rotina',
    description: 'Aulas programadas no período da manhã ou tarde para você aprender sem comprometer seus estudos ou trabalho.',
  },
];

// 1ª Habilitação — Categorias
export const HABILITACAO_CATEGORIES = [
  {
    id: 'A',
    name: 'CATEGORIA A',
    vehicle: 'Moto',
    badge: 'Duas Rodas',
    description: 'Habilitação para condução de motocicletas, motonetas e ciclomotores.',
    features: [
      'Treinamento em circuito prático',
      'Instrutores especializados',
      'Equilíbrio e segurança',
    ],
    whatsappMsg: 'Olá! Gostaria de saber mais sobre a 1ª Habilitação Categoria A (Moto) na Autoescola Direção Certa.',
  },
  {
    id: 'B',
    name: 'CATEGORIA B',
    vehicle: 'Carro',
    badge: 'Veículos Leves',
    description: 'Habilitação para condução de automóveis e veículos leves.',
    features: [
      'Veículos com ar-condicionado',
      'Duplo comando de pedais',
      'Treino em trânsito e baliza',
    ],
    whatsappMsg: 'Olá! Gostaria de saber mais sobre a 1ª Habilitação Categoria B (Carro) na Autoescola Direção Certa.',
  },
  {
    id: 'AB',
    name: 'CATEGORIA AB',
    vehicle: 'Carro + Moto',
    badge: 'Mais Completa',
    description: 'Formação unificada para condução de automóveis e motocicletas com máxima economia.',
    features: [
      'Processo unificado e ágil',
      'Maior custo-benefício',
      'Habilitação completa',
    ],
    whatsappMsg: 'Olá! Gostaria de saber mais sobre a 1ª Habilitação Categoria AB (Carro + Moto) na Autoescola Direção Certa.',
    popular: true,
  },
];

// Planos de Aulas Práticas
export const PRACTICAL_PLANS: PracticalPlan[] = [
  {
    id: 'bronze',
    name: 'PLANO BRONZE',
    lessons: 2,
    description: 'Ideal para revisão rápida',
    price: 'R$ 180,00',
  },
  {
    id: 'prata',
    name: 'PLANO PRATA',
    lessons: 4,
    description: 'Mais confiança para a prova',
    price: 'R$ 320,00',
  },
  {
    id: 'ouro',
    name: 'PLANO OURO',
    lessons: 6,
    description: 'Evolução completa na direção',
    price: 'R$ 460,00',
    popular: true,
  },
  {
    id: 'diamante',
    name: 'PLANO DIAMANTE',
    lessons: 8,
    description: 'Preparação avançada',
    price: 'R$ 560,00',
  },
  {
    id: 'esmeralda',
    name: 'PLANO ESMERALDA',
    lessons: 10,
    description: 'Treinamento intensivo para alta performance',
    price: 'R$ 650,00',
  },
  {
    id: 'rubi',
    name: 'PLANO RUBI',
    lessons: 15,
    description: 'Mais prática, mais segurança, melhor resultado',
    price: 'R$ 900,00',
  },
  {
    id: 'pro',
    name: 'PLANO PRO',
    lessons: 20,
    description: 'Treinamento completo para máxima preparação',
    price: 'R$ 1.100,00',
  },
];

// Pacotes AB — Carro + Moto
export const PRACTICAL_PLANS_AB: PracticalPlanAB[] = [
  {
    id: 'ab-bronze',
    name: 'BRONZE',
    carLessons: 2,
    motoLessons: 2,
    totalLessons: 4,
    price: 'R$ 340,00',
  },
  {
    id: 'ab-prata',
    name: 'PRATA',
    carLessons: 4,
    motoLessons: 4,
    totalLessons: 8,
    price: 'R$ 620,00',
  },
  {
    id: 'ab-ouro',
    name: 'OURO',
    carLessons: 6,
    motoLessons: 6,
    totalLessons: 12,
    price: 'R$ 880,00',
    popular: true,
  },
  {
    id: 'ab-diamante',
    name: 'DIAMANTE',
    carLessons: 8,
    motoLessons: 8,
    totalLessons: 16,
    price: 'R$ 1.060,00',
  },
  {
    id: 'ab-esmeralda',
    name: 'ESMERALDA',
    carLessons: 10,
    motoLessons: 10,
    totalLessons: 20,
    price: 'R$ 1.200,00',
  },
  {
    id: 'ab-rubi',
    name: 'RUBI',
    carLessons: 15,
    motoLessons: 15,
    totalLessons: 30,
    price: 'R$ 1.700,00',
  },
  {
    id: 'ab-pro',
    name: 'PRO',
    carLessons: 20,
    motoLessons: 20,
    totalLessons: 40,
    price: 'R$ 2.100,00',
  },
];

// Cursos Profissionalizantes
export const PROFESSIONAL_COURSES: CourseItem[] = [
  {
    id: 'transporte-cargas',
    title: 'TRANSPORTE DE CARGAS',
    features: [
      'Dirija com segurança',
      'Mais oportunidades',
      'Mercado em alta',
    ],
    ctaText: 'Quero saber mais',
  },
  {
    id: 'transporte-passageiros',
    title: 'TRANSPORTE DE PASSAGEIROS',
    features: [
      'Seja um motorista profissional',
      'Mais valorização',
      'Novas possibilidades',
    ],
    ctaText: 'Quero saber mais',
  },
  {
    id: 'mopp',
    title: 'MOPP',
    subtitle: 'Transporte de Produtos Perigosos',
    features: [
      'Atue com segurança',
      'Curso obrigatório para a função',
      'Diferencial no mercado',
    ],
    ctaText: 'Quero saber mais',
  },
  {
    id: 'motofrete',
    title: 'MOTOFRETE',
    features: [
      'Mais agilidade',
      'Mais ganhos',
      'Mais liberdade',
      'Seja seu próprio chefe',
    ],
    ctaText: 'Quero saber mais',
  },
];

// Benefícios
export const BENEFITS_LIST: BenefitItem[] = [
  { headline: 'MAIS OPORTUNIDADES', subline: 'no mercado' },
  { headline: 'MAIOR POTENCIAL', subline: 'de ganhos' },
  { headline: 'VALORIZAÇÃO', subline: 'profissional' },
  { headline: 'SEGURANÇA', subline: 'e qualificação' },
  { headline: 'CONFIANÇA', subline: 'que gera resultados' },
];

export const FAQ_LIST = [
  {
    question: 'Qual a idade mínima para iniciar o processo de habilitação?',
    answer: 'Para dar entrada na 1ª habilitação (Categorias A, B ou AB), é necessário ter no mínimo 18 anos completos na data de abertura do processo.'
  },
  {
    question: 'Quais documentos são necessários para a matrícula?',
    answer: 'Você precisará de RG ou documento oficial com foto, CPF regularizado e comprovante de residência atualizado em seu nome ou no de seus responsáveis.'
  },
  {
    question: 'Como funcionam os pacotes de aulas práticas?',
    answer: 'Oferecemos planos de 2 até 20 aulas para carro ou moto, além de pacotes combinados AB de 4 até 40 aulas, com horários flexíveis das 08h às 11h30 e das 13h às 18h.'
  },
  {
    question: 'Quais os cursos profissionalizantes disponíveis?',
    answer: 'Ministramos os cursos oficiais de Transporte de Cargas, Transporte de Passageiros, MOPP (Produtos Perigosos) e Motofrete para habilitar você no mercado de trabalho.'
  },
  {
    question: 'Onde a Autoescola Direção Certa está localizada em Maceió?',
    answer: 'Estamos localizados na Av. Siqueira Campos, 976, no bairro Prado, em Maceió – AL (CEP 57010-002).'
  }
];
