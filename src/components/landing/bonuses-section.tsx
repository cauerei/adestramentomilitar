
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gift, Users } from 'lucide-react';

export function BonusesSection() {
    const bonusRecipe = PlaceHolderImages.find(p => p.id === 'bonusRecipe');
    const bonusAnxiety = PlaceHolderImages.find(p => p.id === 'bonusAnxiety');
  
  return (
    <section id="bonuses" className="bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">E Ainda: Bônus Exclusivos Para Acelerar Seus Resultados</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Comprando hoje, você leva também estes presentes para cuidar ainda melhor do seu cão.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <Card className="flex flex-col bg-background text-center">
            <CardHeader>
              <CardTitle>Bônus #1: Receitas Caseiras Naturais</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Alimentação saudável e saborosa para seu cão.</p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col bg-background text-center">
            <CardHeader>
              <CardTitle>Bônus #2: Guia de Ansiedade Canina</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Técnicas para acalmar seu cão e evitar o estresse.</p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center justify-center bg-primary text-center text-primary-foreground lg:col-span-1 md:col-span-2">
            <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Users className="h-8 w-8 text-primary-foreground" />
                </div>
              <CardTitle className="text-2xl">Acesso ao Grupo <span className="text-accent">EXCLUSIVO</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p>Troque experiências, tire dúvidas e compartilhe suas vitórias com outros tutores e com nossa equipe de suporte.</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
