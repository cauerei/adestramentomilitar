import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-lg border-2 border-dashed border-primary bg-card p-8 text-center md:p-12">
            <ShieldCheck className="mx-auto h-20 w-20 text-primary" />
            <h2 className="mt-6 text-3xl font-bold text-primary sm:text-4xl">Garantia Incondicional de 7 Dias</h2>
            <p className="mt-6 text-xl text-foreground/80">
                Sua satisfação é nossa prioridade. Se, por qualquer motivo, você não ficar 100% satisfeito com o mini curso nos primeiros 7 dias, basta nos enviar um e-mail e nós devolveremos cada centavo do seu investimento. Sem perguntas, sem burocracia.
            </p>
            <p className="mt-4 font-semibold">O risco é todo nosso.</p>
        </div>
      </div>
    </section>
  );
}
