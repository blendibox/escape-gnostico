"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Generate random stars
    const starsContainer = document.getElementById("stars")

    if (starsContainer) {
      for (let i = 0; i < 200; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.left = Math.random() * 100 + "%"
        star.style.top = Math.random() * 100 + "%"
        star.style.animationDelay = Math.random() * 3 + "s"
        starsContainer.appendChild(star)
      }
    }

    // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault()

    const href = anchor.getAttribute("href")
    if (!href) return

    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  })
})

    // Intersection Observer animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).style.opacity = "1"
          ;(entry.target as HTMLElement).style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    document
      .querySelectorAll(".mystery-card, .testimonial, .faq-item")
      .forEach(el => {
        const element = el as HTMLElement
        element.style.opacity = "0"
        element.style.transform = "translateY(30px)"
        element.style.transition = "all 0.6s ease-out"
        observer.observe(element)
      })
  }, [])

  return (
    <>
      <div className="galaxy-bg"></div>
      <div className="stars" id="stars"></div>

      {/* HERO */}
      <section className="hero">
        <div className="mystical-symbol">
          <svg viewBox="0 0 200 200">
            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#b8930f" />
              </linearGradient>
            </defs>

            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="url(#goldGrad)"
              strokeWidth="8"
              opacity="0.8"
            />

            <path
              d="M100,40 L110,70 L140,70 L115,90 L125,120 L100,100 L75,120 L85,90 L60,70 L90,70 Z"
              fill="url(#goldGrad)"
              stroke="url(#goldGrad)"
              strokeWidth="2"
              opacity="0.9"
            />

            {/* Planetary dots */}
            {[
              [100, 30],
              [150, 60],
              [170, 100],
              [150, 140],
              [100, 170],
              [50, 140],
              [30, 100]
            ].map((pos, i) => (
              <circle
                key={i}
                cx={pos[0]}
                cy={pos[1]}
                r="5"
                fill="#d4af37"
                opacity="0.6"
              />
            ))}
          </svg>
        </div>

        <h1>Escape Gnóstico</h1>
        <p className="subtitle">
          O Conhecimento Proibido das Sete Esferas Planetárias
        </p>
        <p className="hero-description">
          Descubra os segredos ancestrais que foram ocultados por milênios.
          Aprenda as palavras de poder e os sinais sagrados que atravessam as
          barreiras arcontícas e libertam a alma da prisão cósmica.
        </p>

        <a href="#comprar" className="cta-primary">
          Despertar Agora
        </a>
      </section>

      {/* O QUE VOCÊ VAI DESCOBRIR */}
      <section className="section">
        <h2 className="section-title">O Que Você Vai Descobrir</h2>

        <div className="mysteries-grid">
          {[
            ["🌙", "As Sete Esferas", "Mapeamento completo das armadilhas planetárias e como cada arconte mantém as almas prisioneiras em ciclos infinitos de reencarnação."],
            ["🔮", "Palavras de Poder", "As senhas secretas e nomes sagrados que os gnósticos antigos usavam para passar pelos guardiões de cada esfera planetária."],
            ["⚡", "Técnicas de Preparação", "Práticas diárias para desenvolver a consciência necessária para manter lucidez durante a passagem post-mortem."],
            ["📜", "Textos Ancestrais", "Conexões profundas com Pistis Sophia, Apócrifo de João, Descida de Inanna e outros textos sagrados perdidos."],
            ["🗝️", "O Demiurgo Revelado", "Por que Sol e Saturno são adorados pelas elites ocultas e como essa adoração mantém o sistema de controle."],
            ["✨", "Além da Ogdóade", "O que existe além do oitavo céu, como alcançar o Pleroma verdadeiro e reunir-se com a Sophia restaurada."]
          ].map((item, i) => (
            <div key={i} className="mystery-card">
              <span className="mystery-icon">{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

    {/* THE SEVEN SPHERES */}
<section className="section">
  <h2 className="section-title">Atravesse as Sete Esferas</h2>

  <p
    style={{
      textAlign: "center",
      fontSize: "1.3rem",
      marginBottom: "2rem",
      maxWidth: "800px",
      marginLeft: "auto",
      marginRight: "auto"
    }}
  >
    Cada esfera planetária é uma camada de ilusão progressivamente mais sutil.
    Aprenda a reconhecer e superar cada arconte guardião.
  </p>

  <div className="spheres-container">
    {[
      "☽\nLUA\nSelene",
      "☿\nMERCÚRIO\nNaas",
      "♀\nVÊNUS\nAstarte",
      "☉\nSOL\nDemiurgo",
      "♂\nMARTE\nSamael",
      "♃\nJÚPITER\nSabaoth",
      "♄\nSATURNO\nIaldabaoth"
    ].map((sphere, i) => (
      <div
        key={i}
        className="sphere"
        style={{ animationDelay: `${i * 0.5}s`, whiteSpace: "pre-line" }}
      >
        {sphere}
      </div>
    ))}
  </div>
</section>

<section
  className="section"
  style={{
    background:
      "linear-gradient(135deg, rgba(74, 26, 94, 0.3), rgba(45, 74, 123, 0.2))",
    padding: "5rem 2rem"
  }}
>
  <h2 className="section-title">
    Por Que Esse Conhecimento Foi Ocultado
  </h2>

  <div style={{ maxWidth: "900px", margin: "0 auto" }}>
    <p
      style={{
        fontSize: "1.3rem",
        lineHeight: 2,
        textAlign: "center",
        marginBottom: "2rem"
      }}
    >
      Durante séculos, as religiões institucionais trabalharam para destruir os textos gnósticos.
      Por quê? Porque eles revelam a verdade sobre a prisão cósmica e o caminho de escape.
    </p>

    <div className="testimonial">
      A Igreja primitiva declarou os gnósticos como hereges supremos e queimou suas bibliotecas.
      Os textos de Nag Hammadi só sobreviveram porque foram enterrados no deserto egípcio em 367 d.C.
      <div className="testimonial-author">
        — Elaine Pagels, historiadora de religiões
      </div>
    </div>

    <p
      style={{
        fontSize: "1.2rem",
        lineHeight: 2,
        textAlign: "center",
        marginTop: "3rem"
      }}
    >
      Esse conhecimento ameaça os sistemas de controle porque ensina que você não precisa de intermediários,
      sacerdotes ou salvadores externos.{" "}
      <strong style={{ color: "var(--ethereal-gold)" }}>
        A gnose está dentro de você.
      </strong>
    </p>
  </div>
</section>

<section className="section">
  <h2 className="section-title">Para Quem É Este Livro</h2>

  <div style={{ maxWidth: "800px", margin: "0 auto" }}>
    <div className="mystery-card" style={{ margin: "2rem 0" }}>
      <h3 style={{ marginBottom: "1.5rem" }}>
        Este livro é para você se:
      </h3>

      <ul
        style={{
          fontSize: "1.2rem",
          lineHeight: 2,
          listStyle: "none",
          padding: 0
        }}
      >
        <li>✦ Sempre sentiu que algo está fundamentalmente errado com a realidade</li>
        <li>✦ Questiona as narrativas religiosas tradicionais</li>
        <li>✦ Estuda ocultismo, esoterismo ou gnosticismo</li>
        <li>✦ Quer entender Sol e Saturno em simbologias ocultas</li>
        <li>✦ Busca preparação consciente para a transição post-mortem</li>
        <li>✦ Reconhece padrões arcontícos nas estruturas de poder</li>
        <li>✦ Está pronto para conhecimentos que não podem ser "desconhecidos"</li>
      </ul>
    </div>

    <div
      className="mystery-card"
      style={{
        margin: "2rem 0",
        background: "rgba(139, 0, 0, 0.2)",
        borderColor: "rgba(255, 69, 0, 0.5)"
      }}
    >
      <h3 style={{ color: "#ff6347", marginBottom: "1rem" }}>
        ⚠️ Aviso Importante
      </h3>

      <p style={{ fontSize: "1.1rem" }}>
        Este não é um livro de autoajuda espiritual.
        É um mapa técnico baseado em textos gnósticos ancestrais.
        Se busca conforto, este não é seu caminho.
        Se busca verdade, bem-vindo.
      </p>
    </div>
  </div>
</section>

<section
  className="section"
  style={{ background: "rgba(74, 26, 94, 0.2)" }}
>
  <h2 className="section-title">O Que Dizem Os Leitores</h2>

  <div className="testimonial">
    Finalmente um texto que conecta todos os pontos.
    <div className="testimonial-author">
      — Marcus V., estudioso de hermetismo
    </div>
  </div>

  <div className="testimonial">
    Depois de 15 anos estudando gnosticismo, este é o mapeamento mais completo.
    <div className="testimonial-author">
      — Ana L., pesquisadora de religiões comparadas
    </div>
  </div>

  <div className="testimonial">
    Comprei por curiosidade sobre Saturno nas elites.
    <div className="testimonial-author">
      — Rafael S., investigador de simbologias ocultas
    </div>
  </div>
</section>

<section className="section">
  <h2 className="section-title">Perguntas Frequentes</h2>

  {[
    ["📖 Em qual formato é o livro?", "E-book em PDF de alta qualidade com 80+ páginas."],
    ["🔐 É seguro comprar?", "Sim! Utilizamos plataformas com certificação internacional."],
    ["⏰ Quanto tempo tenho acesso?", "Acesso vitalício."],
    ["🎓 Preciso de conhecimento prévio?", "Não necessariamente, mas ajuda."],
    ["🌍 Funciona em qualquer país?", "Sim! Produto digital acessível globalmente."]
  ].map((faq, i) => (
    <div key={i} className="faq-item">
      <div className="faq-question">{faq[0]}</div>
      <div className="faq-answer">{faq[1]}</div>
    </div>
  ))}
</section>

      {/* PRICE */}
      <section className="price-section" id="comprar">
        <div className="price-container">
          <h2 className="section-title">Acesso Imediato</h2>

          <div className="price">
            <span className="price-old">R$ 197,00</span>
            <br />
            R$ 47,00
          </div>

          <a href="https://pay.hotmart.com/A104565880R" className="cta-primary">
            Garantir Minha Cópia Agora
          </a>

          <div className="guarantee">
            <div className="guarantee-icon">🛡️</div>
            <strong>Garantia Incondicional de 7 Dias</strong>
            <br />
            Se por qualquer motivo você não ficar satisfeito,
            devolvemos 100% do seu investimento.
          </div>
        </div>
      </section>

      <footer>
        <p>© 2024 Escape Gnóstico - Todos os direitos reservados</p>
        <p style={{ marginTop: "1rem" }}>
          "Aquele que encontrou o mundo e se tornou rico, que renuncie ao mundo."
          <br />— Evangelho de Tomé, Logion 110
        </p>
      </footer>
    </>
  )
}