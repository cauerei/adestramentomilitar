import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const productMockup = PlaceHolderImages.find(p => p.id === 'productMockup');

  return (
    <section id="hero" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl lg:text-6xl">
              Transforme seu cão em um soldado obediente em apenas 7 dias com o MINI CURSO MÉTODO MILITAR™
            </h1>
            <p className="mt-6 text-lg text-foreground/80">
              Um mini curso prático com vídeo-aulas curtas, livro digital em PDF e acesso ao nosso grupo exclusivo de tutores. Chega de sofrer com desobediência.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <div className="flex items-baseline gap-4">
                <span className="text-xl font-medium text-foreground/60 line-through">De R$147,00</span>
                <span className="text-5xl font-bold text-accent">por R$19,90</span>
              </div>
              <div className="mt-4 flex w-full max-w-sm flex-col gap-3">
                <Button asChild size="lg" className="h-14 bg-accent text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                  <a href="#cta">QUERO O MINI CURSO — R$19,90</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {productMockup && (
              <Image
                src={productMockup.imageUrl}
                alt={productMockup.description}
                width={500}
                height={625}
                className="rounded-lg shadow-2xl"
                data-ai-hint={productMockup.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
