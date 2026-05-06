"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]')

    const handleSmoothClick = (e: Event) => {
      e.preventDefault()

      const anchor = e.currentTarget as HTMLAnchorElement
      const targetId = anchor.getAttribute("href")

      if (!targetId || targetId === "#") return

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }

    smoothLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothClick)
    })

    const createMobileMenu = () => {
      const header = document.querySelector(".header")

      if (!header) return
      if (document.querySelector(".mobile-menu-btn")) return

      const mobileMenuBtn = document.createElement("button")
      mobileMenuBtn.classList.add("mobile-menu-btn")
      mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>'

      header.querySelector(".container")?.appendChild(mobileMenuBtn)

      const nav = document.querySelector(".nav")
      if (!nav) return

      const mobileNav = nav.cloneNode(true) as HTMLElement
      mobileNav.classList.add("mobile-nav")

      document.body.appendChild(mobileNav)

      mobileMenuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("active")
        mobileMenuBtn.classList.toggle("active")
      })

      mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileNav.classList.remove("active")
          mobileMenuBtn.classList.remove("active")
        })
      })
    }

    if (window.innerWidth <= 768) {
      createMobileMenu()
    }

    let mobileMenuCreated = window.innerWidth <= 768

    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".feature-card, .step, .testimonial, .pricing-card, .compare-item, .compare-divider, .before-after-cta, .features-image, .pricing-img img, .compare-image img, .cta-image"
      )

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isInViewport = rect.top <= window.innerHeight * 0.8

        if (isInViewport) {
          el.classList.add("animate")
        }
      })
    }

    const adjustTagsForMobile = () => {
      const tags = document.querySelectorAll<HTMLElement>(".tag")

      tags.forEach((tag) => {
        tag.style.display = window.innerWidth <= 768 ? "none" : "block"
      })
    }

    const handleResize = () => {
      if (window.innerWidth <= 768 && !mobileMenuCreated) {
        createMobileMenu()
        mobileMenuCreated = true
      }

      adjustTagsForMobile()
    }

    animateOnScroll()
    adjustTagsForMobile()

    window.addEventListener("scroll", animateOnScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      smoothLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothClick)
      })

      window.removeEventListener("scroll", animateOnScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/img/logo.svg" alt="MinhaGOO Logo" className="logo-img" />
          </div>

          <nav className="nav">
            <ul>
              <li>
                <a href="#beneficios">Benefícios</a>
              </li>
              <li>
                <a href="#como-funciona">Como Funciona</a>
              </li>
              <li>
                <a href="#planos">Planos</a>
              </li>
            </ul>

            <a
              href="https://api.whatsapp.com/send/?phone=554892226993&text=Olá!+Quero+saber+mais+sobre+a+MyGOO"
              className="button"
            >
              Comece Agora
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 style={{ maxWidth: 460 }}>
                Organize suas finanças com a Galinha dos Ovos de Ouro
              </h1>

              <p>
                Uma assistente financeira divertida que te ajuda a controlar
                gastos, economizar e botar muitos &quot;ovos de ouro&quot; para
                realizar seus sonhos. Tudo isso através de uma simples conversa
                no WhatsApp.
              </p>

              <div className="hero-cta">
                <a
                  href="https://api.whatsapp.com/send/?phone=554892226993&text=Olá!+Quero+saber+mais+sobre+a+MyGOO"
                  className="button"
                >
                  Experimente Grátis
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Pelo WhatsApp</span>
                </div>

                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Disponível</span>
                </div>

                <div className="stat">
                  <span className="stat-number">5min</span>
                  <span className="stat-label">Para Começar</span>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-tags">
                <span className="tag tag-top-left">Ovos de Ouro</span>
                <span className="tag tag-top-right">Economize Mais</span>
                <span className="tag tag-bottom-left">Metas Cumpridas</span>
                <span className="tag tag-bottom-right">Sem Complicação</span>
              </div>

              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="chat-header">
                    <span className="chat-avatar">
                      <i className="ph ph-chicken"></i>
                    </span>
                    <span className="chat-name">MinhaGOO</span>
                  </div>

                  <div className="chat-messages">
                    <div className="message received">
                      <p>Olá! Eu sou a GOO, sua galinha dos ovos de ouro! 🐔</p>
                    </div>

                    <div className="message received">
                      <p>
                        Vou te ajudar a economizar e juntar muitos ovos de ouro!
                        🥚💰
                      </p>
                    </div>

                    <div className="message sent">
                      <p>Oi GOO! Quero economizar R$500 este mês!</p>
                    </div>

                    <div className="message received">
                      <p>
                        Vamos lá! Vou te ajudar a botar este ovo de ouro!
                        Primeiro, vamos ver seus gastos... 📊
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="features">
          <div className="container">
            <h2 className="section-title">Bote seus &quot;ovos de ouro&quot; com a GOO</h2>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="ph ph-chart-line-up"></i>
                </div>
                <h3>Acompanhe seus Gastos</h3>
                <p>
                  Registre despesas e receitas com uma simples mensagem. A GOO
                  organiza tudo e mostra para onde seu dinheiro está indo.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="ph ph-egg"></i>
                </div>
                <h3>Acumule Ovos de Ouro</h3>
                <p>
                  Crie metas financeiras e acompanhe seu progresso. Nossa galinha
                  te ajuda a botar ovos de ouro para realizar seus sonhos.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="ph ph-bell-ringing"></i>
                </div>
                <h3>Lembretes Amigáveis</h3>
                <p>
                  Receba alertas sobre contas a pagar, gastos excessivos e dicas
                  para economizar diretamente da GOO.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="ph ph-feather"></i>
                </div>
                <h3>Assistente Motivadora</h3>
                <p>
                  Converse naturalmente com a GOO, que entende suas necessidades
                  financeiras e te incentiva a economizar com cacarejo de
                  motivação.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="before-after">
          <div className="container">
            <h2 className="section-title">
              Transforme sua vida financeira com a GOO
            </h2>

            <div className="compare-wrapper">
              <div className="compare-item">
                <div className="compare-image">
                  <img
                    src="/img/Antes_sad.png"
                    alt="Antes da MinhaGOO - Preocupação financeira"
                  />
                </div>

                <div className="compare-content">
                  <div className="compare-header">
                    <div className="compare-icon before">
                      <i className="ph ph-smiley-sad"></i>
                    </div>
                    <h3>Antes da MinhaGOO</h3>
                  </div>

                  <ul className="compare-list">
                    <li>
                      <i className="ph ph-x"></i> Contas atrasadas e juros
                      desnecessários
                    </li>
                    <li>
                      <i className="ph ph-x"></i> Sem controle sobre para onde
                      vai o dinheiro
                    </li>
                    <li>
                      <i className="ph ph-x"></i> Fins de mês sempre apertados
                    </li>
                    <li>
                      <i className="ph ph-x"></i> Aplicativos complicados que
                      você nunca usa
                    </li>
                    <li>
                      <i className="ph ph-x"></i> Sonhos e projetos sempre
                      adiados
                    </li>
                    <li>
                      <i className="ph ph-x"></i> Nenhum ovo de ouro para
                      realizar desejos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="compare-divider">
                <div className="arrow-icon">
                  <i className="ph ph-arrow-right"></i>
                </div>
              </div>

              <div className="compare-item">
                <div className="compare-image">
                  <img
                    src="/img/Depois_happy.png"
                    alt="Depois da MinhaGOO - Tranquilidade financeira"
                  />
                </div>

                <div className="compare-content">
                  <div className="compare-header">
                    <div className="compare-icon after">
                      <i className="ph ph-smiley"></i>
                    </div>
                    <h3>Depois da MinhaGOO</h3>
                  </div>

                  <ul className="compare-list">
                    <li>
                      <i className="ph ph-check"></i> Todas as contas em dia e
                      sob controle
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Visibilidade clara dos seus
                      gastos
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Mais dinheiro sobrando no
                      fim do mês
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Gerenciamento fácil pelo
                      WhatsApp
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Ovos de ouro acumulados
                      para realizar sonhos
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Motivação constante da GOO
                      para economizar
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="before-after-cta">
              <a
                href="https://api.whatsapp.com/send/?phone=554892226993&text=Olá!+Quero+saber+mais+sobre+a+MyGOO"
                className="button"
              >
                Comece sua Transformação
              </a>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="how-it-works">
          <div className="container">
            <h2 className="section-title">
              Simples de usar. Ovos de ouro garantidos.
            </h2>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Conheça a GOO</h3>
                  <p>
                    Adicione nossa galinha aos seus contatos e mande um
                    &quot;Olá&quot; para começar.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Registre suas finanças</h3>
                  <p>
                    Informe seus gastos e receitas com mensagens simples como
                    &quot;Gastei R$50 no mercado hoje&quot;.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Guarde seus ovos de ouro</h3>
                  <p>
                    Defina metas como &quot;Quero juntar R$5.000 para viajar em
                    dezembro&quot; e a GOO te ajudará a economizar.
                  </p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Receba insights da GOO</h3>
                  <p>
                    Nossa galinha analisa seus hábitos e oferece dicas
                    personalizadas para você economizar mais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <h2 className="section-title">
              O que nossos usuários dizem sobre a GOO
            </h2>

            <div className="testimonials-slider">
              <div className="testimonial">
                <p className="testimonial-text">
                  &quot;Finalmente consigo controlar minhas despesas sem
                  complicação. A GOO me motiva a economizar com seu jeito
                  divertido de dar dicas!&quot;
                </p>

                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Márcia Silva</h4>
                    <p>Professora, 42 anos</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <p className="testimonial-text">
                  &quot;Em apenas dois meses usando a MinhaGOO, consegui acumular
                  meus primeiros ovos de ouro e economizar R$600 por mês.&quot;
                </p>

                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>João Carlos</h4>
                    <p>Engenheiro, 38 anos</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <p className="testimonial-text">
                  &quot;A facilidade de usar pelo WhatsApp e as mensagens
                  motivacionais da GOO fizeram toda diferença. Agora estou
                  juntando meus ovos de ouro para realizar meu sonho!&quot;
                </p>

                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Amanda Costa</h4>
                    <p>Empresária, 35 anos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="pricing">
          <div className="container">
            <h2 className="section-title">
              Planos simples para você acumular ovos de ouro
            </h2>

            <div className="pricing-intro">
              <div className="pricing-text">
                <p>
                  Planos flexíveis que crescem junto com suas economias. A GOO
                  está pronta para ajudar você a transformar suas finanças de
                  forma simples e divertida.
                </p>
              </div>

              <div className="pricing-img">
                <img src="/img/Pricing.png" alt="GOO apresenta os planos" />
              </div>
            </div>

            <div className="pricing-cards">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Mensal</h3>

                  <div className="pricing-price">
                    <span className="currency">R$</span>
                    <span className="amount">29</span>
                    <span className="period">/mês</span>
                  </div>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      <i className="ph ph-check"></i> Registro ilimitado de
                      transações
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Relatórios personalizados
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Criação de metas
                      financeiras
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Lembretes de contas a
                      pagar
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Suporte 24/7 com a GOO
                    </li>
                  </ul>
                </div>

                <div className="pricing-cta">
                  <a
                    href="https://api.whatsapp.com/send/?phone=554892226993&text=Olá!+Quero+saber+mais+sobre+a+MyGOO"
                    className="button button-outline"
                  >
                    Assinar Agora
                  </a>
                </div>
              </div>

              <div className="pricing-card featured">
                <div className="pricing-badge">Mais Popular</div>

                <div className="pricing-header">
                  <h3>Anual</h3>

                  <div className="pricing-price">
                    <span className="currency">R$</span>
                    <span className="amount">19</span>
                    <span className="period">/mês</span>
                  </div>

                  <p className="pricing-save">Economize R$120 por ano</p>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li>
                      <i className="ph ph-check"></i> Tudo do plano mensal
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Análise avançada de gastos
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Previsão financeira
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Dicas exclusivas da GOO
                    </li>
                    <li>
                      <i className="ph ph-check"></i> Prioridade no atendimento
                    </li>
                  </ul>
                </div>

                <div className="pricing-cta">
                  <a
                    href="https://api.whatsapp.com/send/?phone=554892226993&text=Olá!+Quero+saber+mais+sobre+a+MyGOO"
                    className="button"
                  >
                    Assinar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Comece a acumular seus ovos de ouro hoje!</h2>
              <p>
                Experimente a GOO grátis por 7 dias. Não precisa de cartão de
                crédito.
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=554892226993&text=Olá!+Quero+saber+mais+sobre+a+MyGOO"
                className="button button-lg"
              >
                Começar Teste Grátis
              </a>
            </div>

            <div className="cta-image">
              <img
                src="/img/CTA.png"
                alt="GOO - Sua galinha dos ovos de ouro"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <img
                  src="/img/logo.svg"
                  alt="MinhaGOO Logo"
                  className="logo-img"
                />
              </div>

              <p>
                Sua galinha dos ovos de ouro no WhatsApp, ajudando você a
                economizar de forma divertida.
              </p>
            </div>

            <div className="footer-links">
              <h3>Navegação</h3>

              <ul>
                <li>
                  <a href="#beneficios">Benefícios</a>
                </li>
                <li>
                  <a href="#como-funciona">Como Funciona</a>
                </li>
                <li>
                  <a href="#planos">Planos</a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Legal</h3>

              <ul>
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Política de Cookies</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contato</h3>

              <p>
                <a href="https://api.whatsapp.com/send/?phone=5548991687574&text=Olá!+Preciso+de+ajuda+com+a+MinhaGOO">
                  WhatsApp: (54) 99168-7574
                </a>
              </p>

              <p>
                <a href="mailto:contato@minhagoo.com.br">
                  contato@minhagoo.com.br
                </a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 MinhaGOO. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}