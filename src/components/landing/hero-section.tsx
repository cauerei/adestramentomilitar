import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('https://i.ibb.co/Y7tmhgK4/Design-sem-nome-37.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">
              Transforme seu cão em um soldado obediente em apenas 7 dias com o MINI CURSO MÉTODO MILITAR™
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Um mini curso prático com vídeo-aulas curtas, livro digital em PDF e acesso ao nosso grupo exclusivo de tutores. Chega de sofrer com desobediência.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-baseline gap-4">
                <span className="text-xl font-medium text-white/60 line-through">De R$147,00</span>
                <span className="text-5xl font-bold text-accent">por R$19,90</span>
              </div>
              <div className="mt-4 flex w-full max-w-sm flex-col gap-3">
                <Button asChild size="lg" className="h-14 bg-accent text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                  <a href="#cta">QUERO O MINI CURSO — R$19,90</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}