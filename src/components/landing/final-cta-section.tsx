import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

const includedItems = [
  { name: 'MINI CURSO Método Militar™ (vídeo + PDF)', value: 'R$ 97,00' },
  { name: 'Bônus #1: Receitas Caseiras Naturais', value: 'R$ 67,00' },
  { name: 'Bônus #2: Guia de Ansiedade Canina', value: 'R$ 67,00' },
  { name: 'Acesso ao Grupo Exclusivo de Tutores', value: 'R$ 49,00' },
  { name: 'Acesso vitalício ao conteúdo', value: 'R$ 49,00' },
];

export function FinalCtaSection() {
  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-lg border-2 border-dashed border-white bg-card p-8 shadow-2xl sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            
            <div className="flex flex-col gap-6 text-left">
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                O que você vai receber:
              </h2>
              <div className="space-y-4 text-foreground">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-border pb-2">
                    <span className="text-left">{item.name}</span>
                    <span className="font-semibold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-red-600 line-through decoration-2">De R$ 329,00</p>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-background p-6 text-foreground shadow-inner">
               <Image 
                  src="https://i.ibb.co/95NVdbW/Chat-GPT-Image-15-de-jul-de-2025-14-26-59.webp" 
                  alt="Mockup do curso Método Militar" 
                  width={300} 
                  height={300} 
                  className="rounded-md shadow-md"
               />
               <p className="mt-6 text-xl font-semibold text-primary">TOTAL:</p>
                <p className="my-1 text-6xl font-bold text-accent sm:text-7xl">
                  R$19,90
                </p>
                <p className="text-sm font-medium text-foreground/70">
                  Apenas hoje — oferta de Black Friday
                </p>
              
              <div className="mt-8 flex w-full flex-col items-center">
                 <Button asChild size="lg" className="h-16 w-full max-w-md animate-pulse-slow bg-accent text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                  <a href="https://www.ggcheckout.com/checkout/v2/OOOpjbjrg58qkA1qtJUZ" target="_blank" rel="noopener noreferrer">👉 QUERO O MÉTODO MILITAR AGORA!</a>
                </Button>
                <div className="mt-3 flex justify-center">
                  <Image 
                    src="https://i.ibb.co/G6DpPsD/DM-20250624235520-015.webp"
                    alt="Pagamento seguro"
                    width={250}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
