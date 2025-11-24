import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Juliana S.',
    location: 'São Paulo, SP',
    text: '“Incrível! No 2º dia meu cachorro já parou de puxar a guia. Parece mágica! O método é muito fácil de seguir.”',
    imageId: 'testimonial1',
    imageHint: 'person dog',
  },
  {
    name: 'Ricardo F.',
    location: 'Rio de Janeiro, RJ',
    text: '“Eu estava quase desistindo. Em 5 dias, os latidos excessivos diminuíram 90%. Recomendo para todos!”',
    imageId: 'testimonial2',
    imageHint: 'woman dog',
  },
  {
    name: 'Mariana C.',
    location: 'Belo Horizonte, MG',
    text: '“O melhor investimento que fiz. Em 7 dias completei as missões e hoje tenho um cão calmo e obediente. Obrigada!”',
    imageId: 'testimonial3',
    imageHint: 'man dog',
  },
];

export function TestimonialsSection() {
    const videoThumbnail = PlaceHolderImages.find(p => p.id === 'videoThumbnail');

  return (
    <section id="testimonials" className="bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Resultados Reais de Alunos Reais</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Veja o que os tutores que aplicaram o Método Militar estão dizendo.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            {videoThumbnail && (
                 <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-xl">
                    <Image
                        src={videoThumbnail.imageUrl}
                        alt={videoThumbnail.description}
                        width={1280}
                        height={720}
                        className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                        data-ai-hint={videoThumbnail.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <PlayCircle className="h-20 w-20 text-white/80 transition-all group-hover:text-white group-hover:scale-110" />
                    </div>
                </div>
            )}
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
              return (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {image && (
                        <Avatar>
                          <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-foreground/90">{testimonial.text}</p>
                    <div className="mt-2 flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
