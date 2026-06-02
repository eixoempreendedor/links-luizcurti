import Image from "next/image";

type LinkItem = {
  label: string;
  description: string;
  href: string;
  highlight?: boolean;
  badge?: string;
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  links: LinkItem[];
};

const SECTIONS: Section[] = [
  {
    id: "trabalhar-comigo",
    title: "Trabalhar comigo",
    subtitle: "Turmas presenciais. Mão na massa!",
    links: [
      {
        label: "DESAFIO EMPREENDEDOR — FORMOSA-GO",
        description: "7 meses trabalhando juntos.",
        href: "https://desafioempreendedorformosa.luizcurti.com.br",
        highlight: true,
        badge: "TURMA ABERTA",
      },
      {
        label: "WHATSAPP DIRETO",
        description: "Pra quem já decidiu conversar.",
        href: "https://wa.me/5561981726782",
      },
    ],
  },
  {
    id: "entrar-no-eixo",
    title: "Entrar no Eixo",
    subtitle: "O sistema. Acesso aberto.",
    links: [
      {
        label: "DIAGNÓSTICO DE POSTURA FINANCEIRA — 2 MIN",
        description:
          "Onde tá o dinheiro vazando na sua empresa. 2 minutos, gratuito.",
        href: "https://tally.so/r/9qoJ55",
        highlight: true,
        badge: "COMECE AQUI",
      },
    ],
  },
];

const COMING_SOON: string[] = [
  "Desafio Empreendedor Brasília",
  "Desafio Empreendedor Itumbiara",
  "Desafio Empreendedor Alexânia",
];

export default function LinksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12">
      {/* FOTO + NOME + TAGLINE */}
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
          Construindo o sistema operacional do empresário brasileiro.
          <br />
          Sem palestra. Lado a lado.
        </p>
      </div>

      {/* BLOCOS */}
      <div className="mt-10 flex w-full max-w-sm flex-col gap-10">
        {SECTIONS.map((section) => (
          <section key={section.id} className="flex flex-col gap-3">
            {/* HEADER DO BLOCO */}
            <div className="border-b border-gold/30 pb-2">
              <h2 className="font-heading text-sm tracking-[0.25em] text-gold uppercase">
                {section.title}
              </h2>
              <p className="mt-0.5 text-xs text-gray-text">{section.subtitle}</p>
            </div>

            {/* CARDS DO BLOCO */}
            {section.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block w-full border px-5 py-4 text-center transition-all ${
                  link.highlight
                    ? "border-gold bg-gold/10 hover:bg-gold/20 hover:shadow-lg hover:shadow-gold/20"
                    : "border-gray-muted/30 bg-black-soft hover:border-gold hover:shadow-lg hover:shadow-gold/10"
                }`}
              >
                <p
                  className={`font-heading text-lg tracking-wider uppercase ${
                    link.highlight ? "text-gold" : "text-white"
                  }`}
                >
                  {link.badge && (
                    <span className="mr-2 inline-block rounded-sm bg-gold px-2 py-0.5 align-middle text-[10px] font-bold tracking-widest text-black">
                      {link.badge}
                    </span>
                  )}
                  {link.label}
                </p>
                <p className="mt-1 text-xs text-gray-text">{link.description}</p>
              </a>
            ))}
          </section>
        ))}

        {/* VAGAS EM BREVE — sombra, não clicável */}
        <section className="flex flex-col gap-3 opacity-40">
          <div className="border-b border-gray-muted/15 pb-2">
            <h2 className="font-heading text-sm tracking-[0.25em] text-gray-muted uppercase">
              Vagas em Breve
            </h2>
          </div>
          {COMING_SOON.map((item) => (
            <div
              key={item}
              className="w-full border border-dashed border-gray-muted/20 px-5 py-4 text-center select-none"
            >
              <p className="font-heading text-lg tracking-wider text-gray-muted uppercase">
                {item}
              </p>
            </div>
          ))}
        </section>
      </div>

      {/* FOOTER */}
      <div className="mt-12 flex items-center gap-4">
        <a
          href="https://instagram.com/luizcurti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-muted transition-colors hover:text-gold"
        >
          @luizcurti
        </a>
      </div>

      {/* BARRA DOURADA */}
      <div className="fixed bottom-0 left-0 h-[3px] w-full bg-gold" />
    </main>
  );
}
