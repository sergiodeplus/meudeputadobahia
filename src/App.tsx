
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { DeputyList } from './components/DeputyList';
import { Calculator } from './components/Calculator';
import { Alerts } from './components/Alerts';
import { Proposals } from './components/Proposals';
import { DeputyProfile } from './components/DeputyProfile';
import { Deputy } from './types';
import { ExternalLink, Search, BookOpen, Scale, FileText, ShieldCheck } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('feed');
  const [selectedDeputy, setSelectedDeputy] = useState<Deputy | null>(null);

  const transparencyTools = [
    { name: "Portal da Câmara dos Deputados", url: "https://camara.leg.br", desc: "Votações, presenças, emendas e declarações de bens" },
    { name: "Assembleia Legislativa da Bahia", url: "https://al.ba.gov.br", desc: "Votações e atividade parlamentar estadual" },
    { name: "Tribunal Superior Eleitoral", url: "https://tse.jus.br", desc: "Declarações de bens e filiação partidária" },
    { name: "Congresso em Foco", url: "https://congressoemfoco.uol.com.br", desc: "Investigações e processos de parlamentares" },
    { name: "Portal da Transparência", url: "https://portaltransparencia.gov.br", desc: "Fiscalização de emendas parlamentares" },
    { name: "DIAP (Quem foi Quem)", url: "https://quemfoiquem.org.br", desc: "Histórico de votações em temas trabalhistas" },
    { name: "Supremo Tribunal Federal", url: "https://portal.stf.jus.br", desc: "Consulta processual pública" },
  ];

  const sources = [
    "Metrópoles — Coluna de Mirelle Pinheiro (coberturas da Operação Overclean, 2024–2026)",
    "CartaCapital — Coberturas do caso Binho Galinha (2025)",
    "Jornal de Brasília — Coberturas do caso Binho Galinha",
    "Congresso em Foco — Levantamento de parlamentares com processos criminais (2024)",
    "Brasil de Fato — Votos na Reforma da Previdência (2019) e lista de eleitos (2022)",
    "CUT — Central Única dos Trabalhadores — Campanha #VotouNãoVolta (2017–2022)",
    "BNews — Coberturas da Operação Overclean e da PEC da Blindagem (2025)",
    "Bahia Notícias — STF e caso Binho Galinha (2025–2026)",
    "Wikipedia — Lista de parlamentares da Bahia e deputados estaduais da 20ª legislatura",
    "Portal da Câmara dos Deputados — Votações nominais em plenário",
    "Assembleia Legislativa da Bahia (al.ba.gov.br) — Informações sobre deputados estaduais",
    "NDMais — Jordana do BBB 26 e gabinete de Elmar Nascimento (jan/2026)"
  ];

  const legalBasis = [
    {
      law: "Lei de Acesso à Informação (12.527/2011)",
      desc: "Garante a qualquer cidadão o acesso a dados públicos dos governos federal, estadual e municipal. A publicidade é a regra; o sigilo, a exceção."
    },
    {
      law: "Constituição Federal (Art. 5º e 220)",
      desc: "Assegura a liberdade de expressão e de imprensa, vedando qualquer forma de censura de natureza política, ideológica e artística."
    },
    {
      law: "Princípio da Publicidade (Art. 37 CF)",
      desc: "A administração pública deve obedecer aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência."
    },
    {
      law: "Interesse Público Preponderante",
      desc: "O STF entende que agentes públicos possuem uma esfera de privacidade reduzida em relação aos seus atos, prevalecendo o direito da sociedade de fiscalizar."
    }
  ];

  const getPageTitle = () => {
    switch (activeTab) {
      case 'feed': return 'Lista de Políticos | Meu Deputado BA';
      case 'calculator': return 'Calculadora de Riscos | Meu Deputado BA';
      case 'proposals': return 'Principais Votações | Meu Deputado BA';
      case 'alerts': return 'Alertas Recentes | Meu Deputado BA';
      case 'about': return 'Sobre o Projeto | Meu Deputado BA';
      default: return 'Meu Deputado BA - Transparência Parlamentar';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return <DeputyList onSelect={setSelectedDeputy} />;
      case 'calculator':
        return <Calculator />;
      case 'proposals':
        return <Proposals />;
      case 'alerts':
        return <Alerts />;
      case 'about':
        return (
          <div className="p-6 max-w-lg mx-auto font-sans pb-12">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-black mb-4 leading-tight">Sobre o Projeto</h2>
              <p className="font-sans text-sm leading-relaxed mb-4 text-ink/80">
                O <strong className="font-black text-ink">Meu Deputado BA</strong> é uma iniciativa independente para expor, de forma clara e visual, a atuação dos parlamentares da Bahia.
              </p>
              <p className="font-sans text-sm leading-relaxed mb-6 text-ink/80">
                Usamos dados públicos do STF, TSE e Câmara dos Deputados para calcular índices de integridade e mostrar quem realmente defende os interesses da população.
              </p>
            </div>

            {/* Seção de Fiscalização */}
            <div className="bg-white border-2 border-ink p-5 shadow-[4px_4px_0px_0px_rgba(192,57,43,1)] relative mb-8">
              <div className="absolute -top-3 left-4 bg-ink text-paper px-3 py-1 text-[10px] font-mono uppercase tracking-widest font-bold">
                Utilidade Pública
              </div>

              <h3 className="font-serif font-bold text-xl mb-1 mt-2">
                Como Fiscalizar Seus Representantes
              </h3>
              <p className="font-mono text-xs text-ink/60 uppercase tracking-widest mb-6 border-b border-ink/10 pb-2">
                Ferramentas de Transparência — Acesso Gratuito
              </p>

              <ul className="space-y-4">
                {transparencyTools.map((tool, idx) => (
                  <li key={idx} className="group">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:bg-ink/5 transition-colors p-2 -mx-2 rounded"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-red underline decoration-red/30 underline-offset-2 group-hover:decoration-red transition-all">
                          {tool.name}
                        </span>
                        <ExternalLink size={12} className="text-ink/40" />
                      </div>
                      <p className="text-xs text-ink/70 leading-snug font-sans">
                        {tool.desc}
                      </p>
                      <div className="text-[9px] font-mono text-ink/30 mt-1 truncate">
                        {tool.url.replace('https://', '')}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Base Legal */}
            <div className="mb-8">
              <h3 className="font-serif font-bold text-lg border-b-2 border-ink/10 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck size={18} /> Base Legal do Monitoramento
              </h3>
              <div className="grid gap-3">
                {legalBasis.map((item, idx) => (
                  <div key={idx} className="bg-ink/5 p-3 border-l-2 border-ink/20">
                    <h4 className="font-bold text-xs font-mono uppercase text-red mb-1">{item.law}</h4>
                    <p className="text-xs text-ink/80 leading-snug font-sans text-justify">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seção de Fontes Consultadas */}
            <div className="mt-8">
              <h3 className="font-serif font-bold text-lg border-b-2 border-ink/10 pb-2 mb-4 uppercase tracking-wider flex items-center gap-2">
                <BookOpen size={18} /> Fontes Consultadas
              </h3>
              <p className="text-xs text-ink/60 mb-4 font-serif italic">
                Este relatório foi elaborado com base nas seguintes fontes públicas e matérias jornalísticas:
              </p>
              <ul className="space-y-3">
                {sources.map((source, idx) => (
                  <li key={idx} className="text-xs font-sans text-ink/80 leading-snug pl-3 border-l-2 border-red/30 hover:border-red transition-colors">
                    {source}
                  </li>
                ))}
              </ul>
            </div>

            {/* Aviso Legal */}
            <div className="mt-8 p-4 bg-ink/5 border-l-4 border-ink/20 font-sans text-xs leading-relaxed text-ink/70 text-justify">
              <div className="flex items-center gap-2 mb-2 font-bold uppercase tracking-wider text-ink/50 font-mono">
                <Scale size={14} /> Aviso Legal
              </div>
              <p>
                Documento elaborado em fevereiro de 2026, com base em informações públicas disponíveis. Este relatório não constitui opinião jurídica. Para verificar processos específicos, consulte os portais públicos dos tribunais. A condição de investigado ou réu não equivale a culpa — todos têm direito ao contraditório, ampla defesa e presunção de inocência.
              </p>
            </div>

            <div className="mt-12 bg-ink text-paper p-4 font-mono text-xs text-center opacity-80">
              Versão 1.1.0 • Atualizado Fev/2026
            </div>
          </div>
        );
      default:
        return <DeputyList onSelect={setSelectedDeputy} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content="Acompanhe mandatos, processos e votações dos parlamentares da Bahia. Transparência para o seu voto." />
      </Helmet>
      {renderContent()}

      {/* Modal */}
      {selectedDeputy && (
        <DeputyProfile
          deputy={selectedDeputy}
          onClose={() => setSelectedDeputy(null)}
        />
      )}
    </Layout>
  );
}

export default App;
