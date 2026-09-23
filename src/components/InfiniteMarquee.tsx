import React from 'react';

interface MarqueeItem {
  text: string;
  isGold?: boolean;
}

const ITEMS: MarqueeItem[] = [
  { text: 'AUTOESCOLA DIREÇÃO CERTA', isGold: true },
  { text: 'MACEIÓ – ALAGOAS' },
  { text: '1ª HABILITAÇÃO' },
  { text: 'AULAS PRÁTICAS CARRO & MOTO', isGold: true },
  { text: 'CURSOS PROFISSIONALIZANTES' },
  { text: '08:00–11:30 | 13:00–18:00', isGold: true },
  { text: '(82) 98744-6151' },
];

export const InfiniteMarquee: React.FC = () => {
  const repeatedItems = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="relative w-full bg-[#0D0F14] border-y border-[#F2C143]/20 overflow-hidden py-3 sm:py-3.5 select-none">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          <div className="flex items-center gap-8 sm:gap-12 px-6">
            {repeatedItems.map((item, i) => (
              <React.Fragment key={`marquee-1-${i}`}>
                <span
                  className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${
                    item.isGold ? 'text-[#F2C143]' : 'text-[#F5F5EE]'
                  }`}
                >
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2C143]" />
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-8 sm:gap-12 px-6" aria-hidden="true">
            {repeatedItems.map((item, i) => (
              <React.Fragment key={`marquee-2-${i}`}>
                <span
                  className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${
                    item.isGold ? 'text-[#F2C143]' : 'text-[#F5F5EE]'
                  }`}
                >
                  {item.text}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2C143]" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
