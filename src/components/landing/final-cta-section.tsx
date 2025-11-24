import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

export function FinalCtaSection() {
  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-lg bg-card p-8 shadow-lg sm:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex justify-center">
               <Image 
                src="https://i.ibb.co/95NVdbW/Chat-GPT-Image-15-de-jul-de-2025-14-26-59.webp" 
                alt="Mockup do curso Método Militar"
                width={500}
                height={500}
                className="rounded-lg shadow-md"
                />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                Garanta Seu Acesso Agora Mesmo e Transforme Seu Cão em Apenas 7 Dias
              </h2>
              <p className="mt-2 text-lg font-semibold text-accent">
                Oferta especial de Black Friday — somente hoje.
              </p>

              <div className="mt-6 flex flex-col items-center gap-4 md:items-start">
                <div className="flex items-baseline gap-4">
                  <span className="text-xl font-medium text-foreground/60 line-through">De R$147,00</span>
                  <p className="flex flex-col items-center md:items-start">
                    <span className="text-base font-medium leading-none text-foreground/80">Por</span>
                    <span className="text-5xl font-bold text-accent sm:text-6xl">R$19,90</span>
                  </p>
                </div>
                <p className="font-semibold text-primary">pagamento único • acesso vitalício</p>
              </div>

              <div className="mt-8 flex w-full flex-col items-center md:items-start">
                 <Button asChild size="lg" className="h-16 w-full max-w-md bg-accent text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                  <a href="#cta-link">QUERO O MÉTODO MILITAR AGORA!</a>
                </Button>
                <div className="mt-3 flex justify-center md:justify-start">
                  <Image 
                    src="https://i.ibb.co/G6DpPsD/DM-20250624235520-015.webp"
                    alt="Pagamento seguro"
                    width={250}
                    height={35}
                  />
                </div>
                <div className="mt-6 space-y-2 text-left text-sm text-foreground/80 sm:text-base">
                    <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span>Pagamento 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span>Acesso imediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-accent" />
                        <span>Mini curso + PDF + bônus + grupo exclusivo</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
