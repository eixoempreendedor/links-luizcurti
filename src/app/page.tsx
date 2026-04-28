import Image from "next/image";

const LINKS = [
  {
    label: "DESAFIO EMPREENDEDOR — ALEXÂNIA",
    description: "7 meses de trabalho real — Primeira turma",
    href: "https://desafioempreendedoralexania.luizcurti.com.br",
    highlight: true,
  },
  {
    label: "EIXO EMPREENDEDOR — INSCREVA-SE",
    description: "Toda quinta no seu email — 1 caso BR + 1 framework + 1 microação. Plus: faça o Mapa Eixo Lite (5 min, gratuito).",
    href: "https://tools.eixoempreendedor.com.br",
    highlight: true,
    badge: "NOVO",
  },
  {
    label: "DESAFIO EMPREENDEDOR — BRASÍLIA",
    description: "Em breve",
    href: "#",
    highlight: false,
    disabled: true,
  },
  {
    label: "DESAFIO EMPREENDEDOR — ITUMBIARA",
    description: "Em breve",
    href: "https://desafioempreendedoritumbiara.luizcurti.com.br",
    highlight: false,
    disabled: true,
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
        {LINKS.map((link) => {
          const isDisabled = "disabled" in link && link.disabled;
          const Tag = isDisabled ? "div" : "a";
          const linkProps = isDisabled
            ? {}
            : { href: link.href, target: "_blank" as const, rel: "noopener noreferrer" };
          return (
            <Tag
              key={link.label}
              {...linkProps}
              className={`group block w-full border px-5 py-4 text-center transition-all ${
                isDisabled
                  ? "cursor-default border-gray-muted/15 bg-black-soft/50 opacity-50"
                  : link.highlight
                    ? "border-gold bg-gold/10 hover:bg-gold/20 hover:shadow-lg hover:shadow-gold/20"
                    : "border-gray-muted/30 bg-black-soft hover:border-gold hover:shadow-lg hover:shadow-gold/10"
              }`}
            >
              <p
                className={`font-heading text-lg tracking-wider uppercase ${
                  isDisabled
                    ? "text-gray-muted"
                    : link.highlight
                      ? "text-gold"
                      : "text-white"
                }`}
              >
                {"badge" in link && link.badge && (
                  <span className="mr-2 inline-block rounded-sm bg-gold px-2 py-0.5 align-middle text-[10px] font-bold tracking-widest text-black">
                    {link.badge}
                  </span>
                )}
                {link.label}
              </p>
              <p className={`mt-1 text-xs ${isDisabled ? "text-gray-muted/60 italic" : "text-gray-text"}`}>
                {link.description}
              </p>
            </Tag>
          );
        })}
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
          href="https://wa.me/5561981726782"
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
