const benefits = [
  {
    t: "Mais giro de estoque",
    d: "Coleções que vendem rápido porque seguem o que o mercado está pedindo agora.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5"><path fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="1.5" d="m12 12l8.073-4.625M12 12v9.25M12 12L7.963 9.688m12.11-2.313a3.17 3.17 0 0 0-1.165-1.156L16.25 4.696m3.823 2.679c.275.472.427 1.015.427 1.58v6.09a3.15 3.15 0 0 1-1.592 2.736l-5.316 3.046A3.2 3.2 0 0 1 12 21.25M3.926 7.375a3.14 3.14 0 0 0-.426 1.58v6.09c0 1.13.607 2.172 1.592 2.736l5.316 3.046A3.2 3.2 0 0 0 12 21.25M3.926 7.375a3.17 3.17 0 0 1 1.166-1.156l5.316-3.046a3.2 3.2 0 0 1 3.184 0l2.658 1.523M3.926 7.375l4.037 2.313m0 0l8.287-4.992"/>
      </svg>
    ),
  },
  {
    t: "Aumento de ticket médio",
    d: "Mix premium permite combinações e upsell natural na sua loja.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8H3v10h18V8h-1.5m-4-1a3 3 0 1 1-4 4.258M13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></svg>
    ),
  },
  {
    t: "Cliente engajado",
    d: "Novidade constante traz o cliente de volta toda semana.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#000000"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="#000000" d="M16 14a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 5-5h8Zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1Zm-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/></g></svg>
    ),
  },
  {
    t: "Redução de risco",
    d: "Padrão de qualidade rigoroso elimina troca e reclamação.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#000000"><g fill="#000000"><path d="M2.06 19.253a.5.5 0 0 0 .434.747h17.032a.5.5 0 0 0 .434-.747l-2.27-3.995a4.24 4.24 0 0 1-2.616-.557l1.874 3.3H5.072L11.01 7.548L13 11.05c.004-.953.324-1.83.86-2.534l-2.415-4.252a.5.5 0 0 0-.87 0z"/><path fill-rule="evenodd" d="M14.414 9.49a3.216 3.216 0 0 1 5.631 3.109L22 14.554l-1.3 1.3l-1.954-1.955a3.2 3.2 0 0 1-1.609.385A3.21 3.21 0 0 1 14 11.07m3.216 1.378a1.378 1.378 0 1 0 0-2.756a1.378 1.378 0 0 0 0 2.756" clip-rule="evenodd"/><path d="M14 11.07a3.2 3.2 0 0 1 .414-1.58zM10.25 17v-1.5h1.5V17zm.75-6a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 11 11"/></g></svg>
    ),
  },
  {
    t: "Previsibilidade real",
    d: "Você planeja o mês sabendo que a reposição chega no prazo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 12 12"><path fill="#000000" d="M4.954.433a1.48 1.48 0 0 1 1.98-.101l.112.101l.89.89l1.26.001a1.48 1.48 0 0 1 1.453 1.198l.02.138l.007.143l-.002 1.259l.893.892a1.48 1.48 0 0 1 .19 1.86l-.089.12l-.101.112l-.893.891l.001 1.258c0 .659-.432 1.224-1.056 1.415l-.136.035l-.142.023l-.144.007h-1.26l-.891.892a1.48 1.48 0 0 1-1.86.19l-.12-.089l-.112-.101l-.892-.893l-1.258.001A1.48 1.48 0 0 1 1.35 9.48l-.02-.139l-.006-.142V7.936l-.89-.89a1.48 1.48 0 0 1-.19-1.86l.088-.12l.101-.112l.89-.891l.001-1.26c0-.72.516-1.32 1.198-1.452l.139-.02l.142-.007h1.26l.891-.89zm1.394.711a.49.49 0 0 0-.618-.063l-.078.063L4.476 2.32H2.812a.49.49 0 0 0-.484.404l-.008.088v1.664L1.144 5.652a.49.49 0 0 0-.063.618l.063.078L2.32 7.524v1.674l.008.078a.49.49 0 0 0 .312.372l.083.023l.089.008l1.662-.001l1.178 1.178a.49.49 0 0 0 .618.063l.078-.063l1.178-1.178h1.633l.087-.002a.49.49 0 0 0 .407-.33l.02-.077l.006-.082l-.001-1.661l1.178-1.178a.49.49 0 0 0 .063-.618l-.063-.078l-1.178-1.178V2.812a.49.49 0 0 0-.402-.484l-.088-.008H7.524zm2.256 3.002a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L5.25 6.793l2.646-2.647a.5.5 0 0 1 .708 0"/></svg>
    ),
  },
  {
    t: "Atendimento próximo",
    d: "Um especialista que conhece sua loja, não um atendente diferente toda vez.",
    icon: (
      <svg
      xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="#000000" d="M2 11C2 5.477 6.477 1 12 1s10 4.477 10 10v5.154C22 17.8 20.58 19 19 19h-3v-8h4a8 8 0 1 0-16 0h4v8H6.063A2 2 0 0 0 8 20.5h1.564c.316-.453.841-.75 1.436-.75h2a1.75 1.75 0 1 1 0 3.5h-2c-.595 0-1.12-.297-1.436-.75H8a4 4 0 0 1-3.986-3.66C2.874 18.463 2 17.446 2 16.155V11Zm4 6v-4H4v3.154c0 .393.37.846 1 .846h1Zm14-4h-2v4h1c.63 0 1-.453 1-.846V13Z"/>
      </svg>
    ),
  },
];

const WHATSAPP_URL =
  "https://wa.me/5519999999999?text=" +
  encodeURIComponent("Já trabalho com semijoias e quero conhecer as peças e condições.");

  const SITE_URL = "https://atacadocirulli.com.br";

export default function App() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
  <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Principal">
    <a href="#top" className="flex items-center" aria-label="Atacado Cirulli">
      <img
  src="/logo-cirulli.png"
  alt="Atacado Cirulli"
  className="h-16 w-auto object-contain"
/>
    </a>
          <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-[6px] sm:gap-[8px] px-[16px] sm:px-[20px] py-[10px] rounded-[10px] gold-bg text-black font-bold text-[10px] sm:text-[14px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,174,174,0.35)]"
>
  <span className="sm:hidden">WhatsApp →</span>
  <span className="hidden sm:inline">Falar no WhatsApp →</span>
</a>
        </nav>
      </header>

      <section id="top" className="hero-bg relative overflow-hidden">

  <div className="max-w-[1280px] mx-auto px-[24px] pt-[80px] pb-[96px] md:pt-[120px] md:pb-[140px]">

    <div className="grid md:grid-cols-12 gap-[48px] md:gap-[64px] items-center">

      {/* ESQUERDA */}
      <div className="md:col-span-7">

        <span className="inline-block mb-[24px] text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-[color:var(--gold)]">
          Fornecedor estratégico • Limeira/SP
        </span>

        <h1 className="text-[38px] leading-[1.05] md:text-[72px] font-extrabold tracking-[-0.03em]">
          Mantenha seu estoque sempre atualizado com{" "}
          <span className="gold-text">
            semijoias que vendem
          </span>
        </h1>

        <p className="mt-[24px] max-w-[760px] text-[17px] leading-[1.7] md:text-[22px] text-[color:var(--muted-foreground)]">
          Variedade, qualidade e reposição ágil para quem já vive de vendas.
          Pare de depender de fornecedor que atrasa, repete coleção e trava o seu giro.
        </p>

        {/* CTAS */}
        <div className="mt-[40px] flex flex-col sm:flex-row gap-[16px]">

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[12px] md:px-[28px] md:py-[16px] rounded-[10px] gold-bg text-black font-bold text-[16px] md:text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,174,194,0.35)]"
          >
            Quero mais detalhes →
          </a>

          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-[10px] px-[28px] py-[16px] rounded-[10px] border border-[color:var(--border)] font-semibold text-[16px] hover:border-[color:var(--gold)] transition-all duration-300"
          >
            Ver como funciona
          </a>

        </div>

        {/* BENEFÍCIOS */}
        <div className="mt-[40px] flex flex-col sm:flex-row gap-y-[12px] sm:gap-x-[32px] text-[14px] text-[color:var(--muted-foreground)]">

          <span>✓ Coleções novas toda semana</span>

          <span>✓ Reposição em até 48h</span>

          <span>✓ Padrão de qualidade rigoroso</span>

        </div>
      </div>

      {/* DIREITA */}
      <div className="md:col-span-5 relative block">

        <div className="relative">

          <div
            aria-hidden
            className="absolute -left-[24px] -top-[24px] md:-left-[40px] md:-top-[40px] h-[110px] w-[110px] md:h-[160px] md:w-[160px] border border-[color:var(--gold)]/40"
          />

          <img
            src="/empreendedora.jpg"
            alt="Especialista em semijoias"
            width={1080}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="relative h-[420px] md:h-[720px] w-full rounded-[24px] object-cover shadow-2xl"
          />

          <div
            aria-hidden
            className="absolute -bottom-[20px] -right-[10px] md:-bottom-[24px] md:-right-[24px] rounded-[16px] bg-[color:var(--card)] px-[18px] py-[16px] md:px-[22px] md:py-[18px] text-[color:var(--foreground)] shadow-2xl"
          >

            <p className="font-display text-[15px] md:text-[18px] italic leading-[1.5]">
              "Depois de mais de 10 anos<br />
              no mercado, sei o que vende."
            </p>

            <p className="mt-[10px] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
              Patrícia — Especialista em Semijoias
            </p>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      <section className="border-y border-[color:var(--border)]/60 bg-[color:var(--card)]/40">

  <div className="max-w-[1280px] mx-auto px-[24px] py-[48px] md:py-[56px]">

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px] md:gap-[24px] text-center">

      {[
        { n: "+1.200", l: "lojistas atendidos" },
        { n: "+15 anos", l: "fornecendo semijoias" },
        { n: "98%", l: "de recompra mensal" },
      ].map((s) => (

        <div key={s.l}>

          <div className="text-[42px] leading-[1] md:text-[56px] font-extrabold gold-text">
            {s.n}
          </div>

          <div className="mt-[10px] text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-[color:var(--muted-foreground)] leading-[1.6]">
            {s.l}
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      <section className="max-w-[1280px] mx-auto px-[24px] py-[80px] md:py-[110px]">

  {/* HEADER */}
  <div className="text-center max-w-[760px] mx-auto mb-[56px] md:mb-[72px]">

    <h2 className="text-[34px] leading-[1.1] md:text-[52px] font-extrabold tracking-[-0.03em]">
      Lojistas que pararam de perder venda por falta de novidade
    </h2>

  </div>

  {/* DEPOIMENTOS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">

    {[
      {
        q: "Em 3 meses dobrei o ticket médio. Cliente vem na loja só pra ver o que chegou de novo.",
        a: "Camila R.",
        c: "Loja de semijoias — SP",
      },

      {
        q: "Qualidade absurda. Não tenho mais reclamação de cliente, e a reposição chega antes do que pedi.",
        a: "Patrícia M.",
        c: "Revendedora — MG",
      },

      {
        q: "Saí de um fornecedor que sumia. Aqui é parceria de verdade, com previsibilidade.",
        a: "Juliana T.",
        c: "Boutique — PR",
      },
    ].map((d) => (

      <article
        key={d.a}
        className="card-premium rounded-[20px] p-[28px] text-center md:text-left flex flex-col justify-between"
      >

        <div>

          <div
            className="text-[color:var(--gold)] mb-[16px] text-[18px]"
            aria-hidden="true"
          >
            ★★★★★
          </div>

          <p className="text-[16px] md:text-[17px] leading-[1.8]">
            "{d.q}"
          </p>

        </div>

        <footer className="mt-[28px] pt-[20px] border-t border-[color:var(--border)]/60 text-center md:text-left">

          <div className="font-bold text-[16px]">
            {d.a}
          </div>

          <div className="mt-[4px] text-[13px] uppercase tracking-[0.15em] text-[color:var(--muted-foreground)]">
            {d.c}
          </div>

        </footer>

      </article>

    ))}

  </div>

</section>

      <section className="bg-[color:var(--card)]/30 border-y border-[color:var(--border)]/60">
  <div className="max-w-[1280px] mx-auto px-[24px] py-[80px] grid md:grid-cols-2 gap-[48px] items-center">

    <div>
      <span className="text-[12px] font-bold tracking-[0.25em] text-[color:var(--gold)] uppercase">
        O problema real
      </span>

      <h2 className="mt-[16px] text-[32px] md:text-[42px] font-extrabold leading-[1.1]">
        Seu problema nunca foi vender. É o fornecedor.
      </h2>

      <p className="mt-[24px] text-[color:var(--muted-foreground)] text-[18px] leading-[1.7]">
        Estoque parado, coleção repetida, peça que escurece, reposição que demora.
        Cada falha do seu fornecedor é um cliente que não volta — e uma venda
        que vai pro concorrente.
      </p>
    </div>

    <ul className="space-y-[12px] max-w-[520px] ml-auto">

      {[
        "Estoque parado virou prejuízo certo no fim do mês",
        "Falta de novidade fez o cliente perder o interesse",
        "Peça com qualidade ruim acaba com a sua reputação",
        "Reposição lenta trava a venda na hora do sim",
      ].map((p) => (

        <li
          key={p}
          className="flex gap-[12px] card-premium rounded-[14px] p-[18px]"
        >
          <span
            className="text-[color:var(--gold)] text-[22px] font-bold"
            aria-hidden="true"
          >
            ✕
          </span>

          <span className="text-[16px] leading-[1.6]">
            {p}
          </span>
        </li>

      ))}

    </ul>
  </div>
</section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-[color:var(--gold)] uppercase">A solução</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Um fornecedor pensado para quem já vende</h2>
          <p className="mt-5 text-[color:var(--muted-foreground)] text-lg">
            Mix atualizado, tendência em primeira mão, qualidade auditada peça por peça e logística que acompanha o ritmo da sua loja.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
  {benefits.map((b) => {
    return (
      <article
  key={b.t}
  className="card-premium rounded-[20px] p-[28px] text-center md:text-left"
>
        <div className="w-[40px] h-[40px] rounded-[10px] gold-bg mb-[20px] flex items-center justify-center mx-auto md:mx-0">
          <div className="w-5 h-5 text-black">
            {b.icon}
</div>
</div>

      <h3 className="text-[22px] font-bold leading-[1.2]">{b.t}</h3>

      <p className="mt-[10px] text-[16px] leading-[1.7] text-[color:var(--muted-foreground)]">
        {b.d}
      </p>
    </article>
  );
})}

<div className="mt-[32px] md:mt-[48px] flex justify-center">
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-[24px] md:px-[32px] py-[12px] md:py-[16px] rounded-[10px] gold-bg text-black font-bold text-[14px] md:text-[16px] transition-all hover:-translate-y-1"
  >
    Quero mais detalhes →
  </a>
</div>

        </div>
      </section>

      <section className="bg-[color:var(--card)]/30 border-y border-[color:var(--border)]/60">

  <div className="max-w-[1280px] mx-auto px-[24px] py-[80px] md:py-[110px]">

    {/* HEADER */}
    <div className="text-center max-w-[760px] mx-auto mb-[56px] md:mb-[72px]">

      <span className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-[color:var(--gold)] uppercase">
        Por que Cirulli
      </span>

      <h2 className="mt-[16px] text-[34px] leading-[1.1] md:text-[52px] font-extrabold tracking-[-0.03em]">
        O que separa um fornecedor comum de um parceiro estratégico
      </h2>

    </div>

    {/* CONTEÚDO */}
    <div className="grid lg:grid-cols-2 gap-[48px] md:gap-[72px] items-center">

      {/* IMAGEM */}
      <div className="relative">

        <div
          aria-hidden
          className="absolute -left-[24px] -top-[24px] md:-left-[40px] md:-top-[40px] h-[110px] w-[110px] md:h-[160px] md:w-[160px] border border-[color:var(--gold)]/40"
        />

        <img
          src="/kit.jpg"
          alt="Kit de semijoias"
          width={1080}
          height={1600}
          fetchPriority="high"
          decoding="async"
          className="relative h-[340px] md:h-[720px] w-full rounded-[24px] object-cover shadow-2xl"
        />

      </div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 gap-[20px] md:gap-[24px]">

        {[
          {
            n: "01",
            t: "Coleções frequentes",
            d: "Novidade semanal. Seu cliente sempre encontra algo novo.",
          },

          {
            n: "02",
            t: "Padrão consistente",
            d: "Mesma qualidade no primeiro e no milésimo pedido.",
          },

          {
            n: "03",
            t: "Reposição inteligente",
            d: "Quem vende mais, repõe mais rápido. Sem fila.",
          },

          {
            n: "04",
            t: "Atendimento dedicado",
            d: "Suporte direto, sem robô e sem espera.",
          },

        ].map((d) => (

          <div
            key={d.n}
            className="card-premium rounded-[20px] p-[28px] text-center md:text-left"
          >

            <div className="flex justify-center md:justify-start">
              <div className="text-[38px] leading-none font-extrabold gold-text text-center md:text-left">
                {d.n}
              </div>
            </div>

            <h3 className="mt-[18px] text-[22px] leading-[1.2] font-bold">
              {d.t}
            </h3>

            <p className="mt-[10px] text-[16px] leading-[1.7] text-[color:var(--muted-foreground)]">
              {d.d}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section id="como-funciona" className="max-w-7xl mx-auto px-[16px] md:px-[24px] py-[60px] md:py-[100px]">
  <div className="text-center md:text-center mb-[40px] md:mb-[56px]">
    <span className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-[color:var(--gold)] uppercase">
      Como funciona
    </span>

    <h2 className="mt-[16px] md:mt-[20px] text-[28px] md:text-[40px] font-extrabold leading-tight">
      Simples como deveria ser
    </h2>
  </div>

  <ol className="grid grid-cols-1 md:grid-cols-4 gap-[16px] md:gap-[24px]">
    {[
      { t: "Escolha as peças", d: "Acesso ao catálogo completo com novidades atualizadas." },
      { t: "Receba com rapidez", d: "Logística eficiente para o Brasil todo." },
      { t: "Venda com confiança", d: "Padrão de qualidade que o seu cliente percebe." },
      { t: "Reponha sem burocracia", d: "Pedido recorrente em minutos, sem mínimos abusivos." },
    ].map((s, i) => (
      <li
        key={s.t}
        className="relative card-premium rounded-[12px] p-[20px] md:p-[28px] text-center md:text-left"
      >
        <div className="absolute -top-[14px] left-[20px] md:left-[28px] w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-full gold-bg flex items-center justify-center text-black font-extrabold text-[14px]">
          {i + 1}
        </div>

        <h3 className="mt-[14px] md:mt-[16px] text-[16px] md:text-[18px] font-bold">
          {s.t}
        </h3>

        <p className="mt-[8px] text-[13px] md:text-[14px] text-[color:var(--muted-foreground)] leading-relaxed">
          {s.d}
        </p>
      </li>
    ))}
  </ol>
</section>

      <section className="px-[16px] md:px-[24px] py-[60px] md:py-[100px]">
  <div className="max-w-5xl mx-auto rounded-[16px] md:rounded-[20px] p-[24px] md:p-[56px] text-center relative overflow-hidden border border-[color:var(--border)] bg-[color:var(--card)]">

    <div className="absolute inset-0 opacity-20 gold-bg blur-3xl" aria-hidden="true" />

    <div className="relative">
      <span className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-[color:var(--gold)] uppercase">
        Condição para novos parceiros
      </span>

      <h2 className="mt-[16px] md:mt-[20px] text-[26px] md:text-[48px] font-extrabold leading-tight">
        Comece com o que faz sentido para a sua loja
      </h2>

      <div className="mt-[32px] md:mt-[40px] grid grid-cols-1 sm:grid-cols-3 gap-[16px] md:gap-[24px] text-left">
        {[
          { t: "Pedido mínimo flexível", d: "Sem trava que inviabiliza o teste." },
          { t: "Coleções atualizadas", d: "Acesso imediato ao mix em alta." },
          { t: "Suporte contínuo", d: "Especialista acompanhando seu giro." },
        ].map((o) => (
          <div key={o.t} className="border-t-2 border-[color:var(--gold)] pt-[12px] md:pt-[16px]">
            <div className="font-bold text-[14px] md:text-[16px]">{o.t}</div>
            <div className="text-[12px] md:text-[14px] text-[color:var(--muted-foreground)] mt-[6px]">
              {o.d}
            </div>
          </div>
        ))}
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-[32px] md:mt-[48px] inline-flex items-center gap-3 px-[24px] md:px-[32px] py-[12px] md:py-[16px] rounded-[10px] gold-bg text-black font-bold text-[12px] md:text-[16px] transition-all hover:-translate-y-1"
      >
        Quero mais detalhes →
      </a>
    </div>
  </div>
</section>

      <section className="bg-[color:var(--card)]/30 border-y border-[color:var(--border)]/60">
  <div className="max-w-3xl mx-auto px-[16px] md:px-[24px] py-[60px] md:py-[100px]">

    <div className="text-center md:text-center mb-[40px] md:mb-[48px]">
      <span className="text-[11px] md:text-[12px] font-bold tracking-[0.25em] text-[color:var(--gold)] uppercase">
        Perguntas frequentes
      </span>

      <h2 className="mt-[16px] text-[26px] md:text-[36px] font-extrabold">
        Tudo que você precisa saber antes de começar
      </h2>
    </div>
          <div className="space-y-[10px] md:space-y-[12px]">
            {[
              { q: "Com que frequência saem coleções novas?", a: "Lançamos novidades toda semana, com coleções completas a cada mês para você sempre ter algo novo para mostrar." },
              { q: "Qual a garantia de qualidade das peças?", a: "Toda peça passa por inspeção antes do envio. Trabalhamos com banho de qualidade superior e garantia contra defeito de fabricação." },
              { q: "Quanto tempo demora a reposição?", a: "Pedidos de reposição saem em até 48h úteis. Lojistas ativos têm prioridade na fila." },
              { q: "Como funciona o atendimento?", a: "Você fala direto com um especialista pelo WhatsApp — sem robô, sem fila, sem trocar de atendente." },
              { q: "Eu já tenho fornecedor. Vale a pena testar?", a: "Justamente por isso. Você consegue comparar mix, qualidade e prazo sem comprometer o estoque atual — começando pequeno." },
            ].map((f) => (
        <details key={f.q} className="card-premium rounded-[10px] p-[16px] md:p-[20px]">
          <summary className="cursor-pointer font-bold text-[14px] md:text-[16px] flex justify-between items-center">
            <span>{f.q}</span>
            <span className="text-[color:var(--gold)] text-[18px] md:text-[20px]">+</span>
          </summary>

          <p className="mt-[12px] text-[13px] md:text-[14px] text-[color:var(--muted-foreground)] leading-relaxed">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Seu estoque não pode parar — <span className="gold-text">seu fornecedor também não.</span>
        </h2>
        <p className="mt-6 text-lg text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
          Fale agora com um especialista e descubra o mix, as condições e o ritmo de reposição que vão destravar o crescimento da sua loja.
        </p>
        <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-[28px] md:mt-[48px] inline-flex items-center justify-center gap-[8px] md:gap-[12px] px-[18px] md:px-[32px] py-[10px] md:py-[16px] rounded-[10px] gold-bg text-black font-bold text-[14px] md:text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,174,194,0.35)]"
>
  Quero conhecer a Cirulli →
</a>
      </section>

     <footer className="border-t border-[color:var(--border)]/60 bg-[color:var(--card)]/40">
  <div className="max-w-7xl mx-auto px-[16px] md:px-[24px] py-[40px] md:py-[60px] grid grid-cols-1 md:grid-cols-2 gap-[24px] items-end text-[12px] md:text-[14px] text-[color:var(--muted-foreground)]">

    {/* ESQUERDA - LOGO + TEXTO */}
    <div className="text-center md:text-left flex flex-col items-center md:items-start justify-end">
      <img
        src="/logo-cirulli.png"
        alt="Atacado Cirulli"
        className="h-[48px] md:h-[56px] w-auto object-contain"
      />

      <div className="mt-[8px]">
        Fornecedor de semijoias no atacado — Limeira/SP
      </div>
    </div>

    {/* DIREITA - WHATSAPP + COPYRIGHT (EMPILHADOS E ALINHADOS NA BASE) */}
    <div className="flex flex-col items-center md:items-end justify-end gap-[6px]">
      
      <a
  href={SITE_URL}
  className="text-[12px] md:text-[14px] hover:text-[color:var(--gold)] transition font-medium"
>
  Visite nosso site
</a>

      <span className="text-center md:text-right">
        © {new Date().getFullYear()} Atacado Cirulli. Todos os direitos reservados.
      </span>

    </div>

  </div>
</footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.37-1.67a11.86 11.86 0 0 0 5.67 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.39-8.44Zm-8.48 18.25h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.85 9.85 0 0 1-1.51-5.21c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.45-4.43 9.86-9.84 9.86Zm5.41-7.39c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" fill="currentColor"/>
        </svg>
      </a>
    </main>
  );
}
