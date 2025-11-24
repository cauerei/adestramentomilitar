import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import { Heart, ThumbsUp, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Lucas Mendonça',
    location: 'São Paulo, SP',
    text: '“Eu já tinha tentado vários métodos e nada funcionava. No 3º dia aplicando o Método Militar meu cachorro parou de me arrastar no passeio. Surreal o resultado! Recomendo demais!”',
    imageUrl: 'https://i.ibb.co/Cp9Mcypw/images-7.webp',
    imageHint: 'man portrait',
    reactions: [
      <ThumbsUp key="thumb" className="h-5 w-5 fill-blue-600 text-blue-600" />,
    ]
  },
  {
    name: 'Rafael Antunes',
    location: 'Belo Horizonte, MG',
    text: '“Meu cachorro era super ansioso e não obedecia nada. Em menos de 7 dias ele virou outro! O módulo de ansiedade vale ouro. Melhor compra que fiz esse ano.”',
    imageUrl: 'https://i.ibb.co/TDxDDbyP/qm2eo6qvlot51-1.webp',
    imageHint: 'man happy',
    reactions: [
      <ThumbsUp key="thumb" className="h-5 w-5 fill-blue-600 text-blue-600" />,
    ]
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Resultados Reais de Alunos Reais</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Veja o que os tutores que aplicaram o Método Militar estão dizendo.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
             <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-lg shadow-xl">
                <div className="relative w-full" style={{paddingTop: '177.78%' /* 9:16 Aspect Ratio */}}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/Qy9mdsz4L7A?autoplay=0&rel=0" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex gap-3 rounded-lg bg-background p-4 shadow-sm">
                <Avatar>
                  <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="rounded-xl bg-secondary/50 p-3">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60 -mt-1">{testimonial.location}</p>
                    <p className="mt-2 text-foreground/90">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center gap-4 px-3 pt-1 text-sm font-medium text-foreground/60">
                    <div className="flex items-center gap-1">
                      {testimonial.reactions}
                    </div>
                    <span>Responder</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center">
            <Button asChild size="lg" className="h-14 bg-accent text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-accent/90">
                <a href="#cta">QUERO TREINAR MEU CACHORRO AGORA!</a>
            </Button>
            <div className="mt-3">
                 <Image 
                    src="https://i.ibb.co/G6DpPsD/DM-20250624235520-015.webp"
                    alt="Pagamento seguro"
                    width={250}
                    height={35}
                />
            </div>
        </div>
      </div>
    </section>
  );
}