import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative bg-background py-12 text-primary sm:py-16 lg:py-20"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Transforme seu cão em um soldado obediente em apenas 7 dias com o MINI CURSO MÉTODO MILITAR™
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Um mini curso prático com vídeo-aulas curtas, livro digital em PDF e acesso ao nosso grupo exclusivo de tutores. Chega de sofrer com desobediência.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xl font-medium text-foreground/60 line-through">De R$147,00</span>
                <p>
                  <span className="text-5xl font-bold text-accent">por R$19,90</span>
                </p>
              </div>
              <div className="mt-4 flex w-full max-w-sm flex-col items-center gap-3">
                <Button asChild size="lg" className="h-14 w-full bg-accent text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                  <a href="#cta">QUERO UM CÃO OBEDIENTE EM 7 DIAS!</a>
                </Button>
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
    </section>
  );
}
