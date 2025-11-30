import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gift, Users, Star } from 'lucide-react';

export function BonusesSection() {
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
          <Card className="flex flex-col items-center bg-background text-center">
            <CardHeader className="items-center">
              <Gift className="mb-4 h-12 w-12 text-accent" />
              <CardTitle>Bônus #1: Receitas Caseiras Naturais</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between px-6 pb-6">
              <p>Alimentação saudável e saborosa para seu cão.</p>
              <p className="mt-4 font-bold text-accent">Valor real: R$ 67,00</p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center bg-background text-center">
            <CardHeader className="items-center">
              <Gift className="mb-4 h-12 w-12 text-accent" />
              <CardTitle>Bônus #2: Guia de Ansiedade Canina</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between px-6 pb-6">
              <p>Técnicas para acalmar seu cão e evitar o estresse.</p>
              <p className="mt-4 font-bold text-accent">Valor real: R$ 67,00</p>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center bg-background text-center">
            <CardHeader className="items-center">
              <Gift className="mb-4 h-12 w-12 text-accent" />
              <CardTitle>Bônus Extra: Acesso ao Grupo Exclusivo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between px-6 pb-6">
               <p>Troque experiências, tire dúvidas e compartilhe suas vitórias com outros tutores.</p>
               <p className="mt-4 font-bold text-accent">Valor real: R$ 49,00</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-accent sm:text-3xl">⭐ Hoje você leva TUDO isso totalmente de graça!</p>
            <p className="mt-2 text-foreground/70">(Oferta Especial de Hoje)</p>
            <p className="mt-1 text-sm text-foreground/60">Incluído gratuitamente com sua compra do MINI CURSO Método Militar™</p>
        </div>
      </div>
    </section>
  );
}
