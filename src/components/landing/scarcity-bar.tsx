import { Flame } from 'lucide-react';

export function ScarcityBar() {
  return (
    <div className="w-full bg-accent text-center text-accent-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 p-3 text-sm font-bold md:text-base">
        <Flame className="h-5 w-5 animate-pulse" />
        <span>OFERTA ESPECIAL DE HOJE — De <span className="line-through">R$147,00</span> por R$19,90 por tempo limitado!</span>
      </div>
    </div>
  );
}
