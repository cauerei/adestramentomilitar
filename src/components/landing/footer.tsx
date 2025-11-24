import { PawPrint } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-card py-6">
            <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
                <div className="flex items-center justify-center gap-2">
                    <PawPrint className="h-5 w-5" />
                    <p>&copy; {currentYear} Método Militar™. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
