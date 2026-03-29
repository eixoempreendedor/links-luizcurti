import Image from "next/image";

const LINKS = [
  {
    label: "OPERAÇÃO 7D",
    description: "Organize seu negócio em 7 dias",
    href: "https://operacao7d.luizcurti.com.br",
    highlight: false,
  },
  {
    label: "DESAFIO EMPREENDEDOR",
    description: "7 meses de trabalho real — Alexânia",
    href: "https://desafioempreendedoralexania.luizcurti.com.br",
    highlight: true,
  },
  {
    label: "EIXO CEO",
    description: "Consultoria individual para donos de empresa",
    href: "https://wa.me/556199319238?text=Quero%20saber%20mais%20sobre%20o%20Eixo%20CEO",
    highlight: false,
  },
  {
    label: "CONTEÚDO GRATUITO",
    description: "Artigo: 7 erros que donos de PME cometem",
    href: "#",
    highlight: false,
  },
];

export default function LinksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12">
      {/* FOTO + NOME */}
      <div className="flex flex-col items-center">
        <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-gold">
          <Image
            src="/images/luiz-perfil.png"
            alt="Luiz Curti"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <h1 className="mt-4 font-heading text-2xl tracking-wide text-white uppercase">
          Luiz Curti
        </h1>
        <p className="mt-1 text-sm text-gold">
          Consultor de Resultados Empresariais
        </p>
        <p className="mt-3 max-w-xs text-center text-sm leading-relaxed text-gray-text">
          Resultado exige compromisso e execução.
          <br />
          A maioria para por aí. Você não.
        </p>
      </div>

      {/* LINKS */}
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block w-full border px-5 py-4 text-center transition-all hover:shadow-lg ${
              link.highlight
                ? "border-gold bg-gold/10 hover:bg-gold/20 hover:shadow-gold/20"
                : "border-gray-muted/30 bg-black-soft hover:border-gold hover:shadow-gold/10"
            }`}
          >
            <p
              className={`font-heading text-lg tracking-wider uppercase ${
                link.highlight ? "text-gold" : "text-white"
              }`}
            >
              {link.label}
            </p>
            <p className="mt-1 text-xs text-gray-text">{link.description}</p>
          </a>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-10 flex items-center gap-4">
        <a
          href="https://instagram.com/luizcurti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-muted transition-colors hover:text-gold"
        >
          @luizcurti
        </a>
        <span className="text-gray-muted/30">|</span>
        <a
          href="https://wa.me/556199319238"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-muted transition-colors hover:text-gold"
        >
          WhatsApp
        </a>
      </div>

      {/* BARRA DOURADA */}
      <div className="fixed bottom-0 left-0 h-[3px] w-full bg-gold" />
    </main>
  );
}
