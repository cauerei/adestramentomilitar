import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl lg:text-5xl">
            Pronto Para Começar a Transformação?
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Tenha acesso imediato a todo o material e comece hoje mesmo a construir uma relação de obediência e respeito com seu cão.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="text-lg font-medium">De <span className="line-through">R$147,00</span> por apenas:</p>
            <p>
              <span className="text-6xl font-bold text-accent">R$19,90</span>
              <span className="text-lg text-foreground/80"> (pagamento único)</span>
            </p>
            <div className="mt-4 flex w-full max-w-sm flex-col gap-3">
              <Button asChild size="lg" className="h-16 bg-accent text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                <a href="#">QUERO O MINI CURSO AGORA!</a>
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-foreground/60">
                <Lock className="h-4 w-4" />
                <span>Pagamento 100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
