import React from 'react';

const serviceCards = [
  {
    icon: '💰',
    label: 'Portal Transparência',
    href: 'https://transparencia.betha.cloud/#/a59kfVVZtfZonHcU-LURqA==',
  },
  {
    icon: '🔁',
    label: 'Consignado',
    href: 'https://www.loja.serpro.gov.br/product/margemconsignavel',
  },
  {
    icon: '💙',
    label: 'Prova de Vida',
    href: '/pdfs/Prova-de-Vida-Passo-a-Passo.pdf',
  },
  {
    icon: '🤝',
    label: 'Código de Ética',
    href: '/pdfs/Codigo-de-Conduta-e-Etica-Profissional-vFinal.pdf',
  },
  {
    icon: '⚖️',
    label: 'Licitações',
    href: 'https://pncp.gov.br/app/buscar/todos?q=930065&pagina=1',
  },
  {
    icon: '⚖️',
    label: 'Dispensas',
    href: 'https://pncp.gov.br/app/buscar/todos?q=930065&pagina=1',
  },
  {
    icon: '👤',
    label: 'Área do Beneficiário',
    href: 'https://novowebplanipref.facilinformatica.com.br/',
  },
  {
    icon: '📄',
    label: 'Holerite / Informe',
    href: 'http://fopag3.braconsultoria.com.br:4000/sipweb/trabalhador/login/login.xhtml',
  },
];

const quickLinks = [
  { icon: '🖥️', title: 'Gestão' },
  { icon: '📚', title: 'Educação Previdenciária' },
  { icon: '☑️', title: 'Programas Institucionais' },
  { icon: '💲', title: 'Antecipação do 13º Salário' },
];

function App() {
  return (
    <>
      <header className="site-header">
        <div className="logo">
          IPREF
          <span>Instituto de Previdência dos Funcionários Públicos Municipais de Guarulhos</span>
          <span className="notice">
            {`Estamos enfrentando uma indisponibilidade temporária em nosso site. Durante esse período, algumas funcionalidades poderão apresentar instabilidade ou ficar momentaneamente indisponíveis.

Caso não consiga acessar a informação desejada, entre em contato com nossos canais de atendimento:

📧 faleconosco@iprefguarulhos.sp.gov.br
☎️ (11) 2461-6363`}
          </span>
        </div>
      </header>

      <section className="hero">
        <div className="banner">
          <div>
            <h1>Bem-vindo ao IPREF</h1>
            <p>
              Informação, transparência e serviços previdenciários em um só lugar para servidores,
              aposentados e pensionistas.
            </p>
          </div>
        </div>

        <div className="cards" aria-label="Serviços disponíveis">
          {serviceCards.map((card) => (
            <a className="card" href={card.href} target="_blank" rel="noreferrer" key={card.label}>
              <span className="icon" aria-hidden="true">{card.icon}</span>
              {card.label}
            </a>
          ))}
        </div>
      </section>

      <main>
        <section className="quick-list">
          <h2 className="section-title">🔗 Links de Acesso Rápido</h2>
          {quickLinks.map((link) => (
            <div className="quick-item" key={link.title}>
              <div className="quick-icon" aria-hidden="true">{link.icon}</div>
              <div>
                <strong>{link.title}</strong>
                <span>Clique e saiba mais</span>
              </div>
            </div>
          ))}
        </section>

        <section className="news-area">
          <h2 className="section-title">📰 Notícias em Destaque</h2>
          <div className="news-grid">
            <article className="news-card magazine-news">
              <h3>IPREF é notícia em revistas sobre previdência</h3>
            </article>
            <article className="news-card bidding-news">
              <h3>Transparência e participação na gestão pública</h3>
            </article>
          </div>
        </section>
      </main>

      <footer>© 2026 IPREF Guarulhos</footer>
    </>
  );
}

export default App;
