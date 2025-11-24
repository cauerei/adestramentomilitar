import { PawPrint } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-4 md:py-6">
      <div className="container mx-auto flex items-center justify-center px-4">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <PawPrint className="h-8 w-8" />
          <span className="font-headline text-xl font-bold">MÉTODO MILITAR™</span>
        </Link>
      </div>
    </header>
  );
}
