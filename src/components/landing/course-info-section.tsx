export function CourseInfoSection() {
    return (
        <section id="course-info" className="py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-primary sm:text-4xl">O que é o MINI CURSO MÉTODO MILITAR™?</h2>
                        <p className="mt-6 text-lg text-foreground/80">
                            É um mini curso intensivo que condensa as técnicas de treinamento K9 (usadas por cães militares e policiais) em um formato <span className="font-bold">simples e prático para tutores comuns</span>.
                        </p>
                        <p className="mt-4 text-lg text-foreground/80">
                            Esqueça teorias complexas e aulas longas. Aqui você tem <span className="font-bold">vídeo-aulas curtas e diretas ao ponto</span>, mostrando o que fazer e como fazer. Além disso, você recebe um <span className="font-bold">PDF completo</span> para consultar sempre que precisar.
                        </p>
                    </div>
                     <div className="order-1 lg:order-2 flex justify-center">
                        <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
                            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13-4-4-4 4M12 22V9"/><path d="M20 13h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4v 능력치"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
