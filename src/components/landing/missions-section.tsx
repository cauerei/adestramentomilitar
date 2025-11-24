import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Crown, ListChecks, ThumbsUp, VolumeX, Footprints, HeartPulse, Target } from 'lucide-react';

const missions = [
  { icon: Crown, title: "Missão 1: Autoridade Silenciosa", description: "Aprenda a ser o líder que seu cão respeita, sem precisar levantar a voz." },
  { icon: ListChecks, title: "Missão 2: Comandos Base", description: "Domine os comandos essenciais que são a fundação da obediência." },
  { icon: ThumbsUp, title: "Missão 3: Reforço Positivo Militar", description: "Use recompensas de forma estratégica para acelerar o aprendizado." },
  { icon: VolumeX, title: "Missão 4: Correção de Latidos", description: "Entenda a causa e aplique a técnica para ter silêncio quando precisar." },
  { icon: Footprints, title: "Missão 5: Passeios Sem Puxões", description: "Transforme o passeio em um momento de prazer, não de estresse." },
  { icon: HeartPulse, title: "Missão 6: Ansiedade Zero", description: "Ensine seu cão a ficar calmo e confiante, mesmo quando sozinho." },
  { icon: Target, title: "Missão 7: Consolidação", description: "Garanta que o bom comportamento se torne um hábito permanente." },
];

export function MissionsSection() {
  return (
    <section id="missions" className="bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">As 7 Missões do Método Militar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Um passo a passo claro e objetivo para você seguir e ver resultados em tempo recorde.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <Card key={index} className="flex flex-col bg-background text-center">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <mission.icon className="h-8 w-8" />
                </div>
                <CardTitle>{mission.title}</CardTitle>
              </CardHeader>
              <CardDescription className="px-6 pb-6">
                {mission.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
