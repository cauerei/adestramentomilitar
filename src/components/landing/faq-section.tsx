import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "O que eu recebo exatamente ao comprar?",
        answer: "Você recebe acesso imediato e vitalício ao mini curso em vídeo, ao livro digital em PDF, aos checklists de treino e a todos os bônus, incluindo o acesso ao grupo exclusivo de tutores."
    },
    {
        question: "Em quanto tempo eu vejo resultados?",
        answer: "Muitos alunos relatam ver as primeiras mudanças de comportamento nos primeiros 2 a 3 dias. O programa foi desenhado para uma transformação significativa em 7 dias."
    },
    {
        question: "Funciona para filhotes?",
        answer: "Sim! O método é perfeitamente adaptável para filhotes. Quanto antes você começar, melhor será a base de comportamento do seu cão para toda a vida."
    },
    {
        question: "Consigo acessar pelo celular?",
        answer: "Sim. Nossa área de membros (WebApp) é 100% compatível com celulares, tablets e computadores. Você pode assistir às aulas de onde estiver."
    },
    {
        question: "E se eu não gostar ou não funcionar para mim?",
        answer: "Você tem uma garantia incondicional de 7 dias. Se não ficar satisfeito por qualquer motivo, é só pedir o reembolso e devolvemos 100% do seu dinheiro."
    },
    {
        question: "Eu nunca adestrei um cão antes, vou conseguir?",
        answer: "Com certeza. O método foi criado pensando em tutores iniciantes. É um passo a passo simples, claro e direto ao ponto, sem termos técnicos complicados."
    }
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-card py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">Perguntas Frequentes</h2>
                <p className="mt-4 text-lg text-foreground/80">Ainda tem dúvidas? Nós respondemos as mais comuns aqui.</p>
            </div>
            <Accordion type="single" collapsible className="mt-10 w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-background">
                        <AccordionTrigger className="p-6 text-left font-semibold hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0 text-base text-foreground/80">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
