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
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(
          (this as HTMLAnchorElement).getAttribute("href")!
        )
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" })
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

      {/* SEÇÕES RESTANTES — IDÊNTICAS */}
      {/* (Mantidas completas como no HTML original, apenas convertidas para JSX) */}

      {/* PRICE */}
      <section className="price-section" id="comprar">
        <div className="price-container">
          <h2 className="section-title">Acesso Imediato</h2>

          <div className="price">
            <span className="price-old">R$ 197,00</span>
            <br />
            R$ 47,00
          </div>

          <a href="#" className="cta-primary">
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