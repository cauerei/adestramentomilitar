import { CheckCircle2 } from 'lucide-react';

const expectations = [
  "Obediência real, que funciona dentro e fora de casa.",
  "Redução drástica de latidos excessivos e destruição de objetos.",
  "O fim dos puxões na guia durante os passeios.",
  "Um cão visivelmente mais calmo, seguro e feliz.",
  "Um vínculo de confiança e respeito muito mais forte entre vocês."
];

export function ExpectationsSection() {
  return (
    <section id="expectations" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">O Que Esperar em 7 Dias</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Seguindo o método, estas são as transformações que você pode esperar na primeira semana:
          </p>
          <ul className="mt-8 space-y-4 text-left">
            {expectations.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
