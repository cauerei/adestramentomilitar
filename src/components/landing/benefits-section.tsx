import { CheckCircle2, Book, ListChecks, HeartHandshake, Bot, Users, Star, ShieldCheck } from 'lucide-react';

const benefits = [
    { icon: Bot, text: "MINI CURSO" },
    { icon: Book, text: "Livro digital em PDF" },
    { icon: ListChecks, text: "Checklists de treino" },
    { icon: Star, text: "Bônus: Receitas Naturais para Cães" },
    { icon: Star, text: "Bônus: Guia Contra Ansiedade Canina" },
    { icon: Users, text: "Acesso ao grupo exclusivo de tutores" },
    { icon: HeartHandshake, text: "Acesso vitalício" },
    { icon: ShieldCheck, text: "Garantia de 7 dias" },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">O Que Você Vai Receber</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Um arsenal completo para transformar seu cão e sua relação com ele para sempre.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 text-left md:grid-cols-3 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <benefit.icon className="mt-1 h-6 w-6 shrink-0 text-accent" />
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
