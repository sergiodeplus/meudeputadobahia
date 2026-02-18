import React from 'react';
import { AlertTriangle, TrendingDown, ShieldAlert, DollarSign, Briefcase, HeartPulse, Globe } from 'lucide-react';

export const Proposals: React.FC = () => {
  const proposals = [
    {
      title: "Reforma da Previdência",
      year: "2019",
      icon: <TrendingDown size={24} />,
      summary: "O fim da aposentadoria por tempo de contribuição e redução drástica dos valores.",
      official: "PEC 6/2019",
      impact: "Aumentou a idade mínima (65H/62M) e mudou o cálculo do benefício. Antes, descartavam-se as 20% piores contribuições (aumentando a média). Agora, considera-se tudo, puxando o valor para baixo. Quem ganha pouco trabalha até morrer; viúvas tiveram pensão cortada pela metade.",
      verdict: "Dificultou o acesso e reduziu o valor do benefício."
    },
    {
      title: "Reforma Trabalhista",
      year: "2017",
      icon: <Briefcase size={24} />,
      summary: "Retirada de direitos históricos da CLT e enfraquecimento da justiça do trabalho.",
      official: "Lei 13.467/2017",
      impact: "Criou o 'trabalho intermitente' (você fica à disposição, mas só recebe se for chamado, sem garantia de salário mínimo), permitiu que acordos individuais valham mais que a lei (o patrão impõe, você aceita), dificultou o acesso gratuito à Justiça do Trabalho e enfraqueceu os sindicatos.",
      verdict: "Precarizou o emprego e não gerou as vagas prometidas."
    },
    {
      title: "Teto dos Gastos",
      year: "2016",
      icon: <HeartPulse size={24} />,
      summary: "Congelamento de investimentos em Saúde e Educação por 20 anos.",
      official: "EC 95 (PEC 241/55)",
      impact: "Proibiu o governo de aumentar investimentos reais em áreas sociais acima da inflação. O resultado foi a precarização do SUS, falta de verbas para Universidades Federais, farmácia popular e merenda escolar, enquanto o pagamento de juros da dívida pública continuou sem limites.",
      verdict: "Sucateou o serviço público que o pobre utiliza."
    },
    {
      title: "PEC da Blindagem / Anistia",
      year: "2024/2025",
      icon: <ShieldAlert size={24} />,
      summary: "Mecanismos para proteger parlamentares criminosos de investigações.",
      official: "PEC 05/2021 (e variantes)",
      impact: "Propostas que visam impedir que a Polícia Federal investigue deputados sem autorização prévia da Câmara, dificultam prisões em flagrante e buscam anistiar políticos envolvidos em atos antidemocráticos ou crimes eleitorais. É a classe política legislando em causa própria.",
      verdict: "Garante a impunidade de políticos corruptos."
    },
    {
      title: "Entrega do Pré-Sal",
      year: "2016",
      icon: <DollarSign size={24} />,
      summary: "Fim da obrigatoriedade da Petrobras na exploração do petróleo.",
      official: "PL 4567/16",
      impact: "Abriu as portas para multinacionais estrangeiras explorarem nosso petróleo. Isso enfraqueceu a soberania energética e facilitou a política de preços dolarizados (PPI), que fez a gasolina e o gás de cozinha dispararem de preço nos anos seguintes.",
      verdict: "Entregou riqueza nacional e encareceu o combustível."
    },
    {
      title: "Soltura de Chiquinho Brazão",
      year: "2024",
      icon: <AlertTriangle size={24} />,
      summary: "Voto para libertar o mandante do assassinato de Marielle Franco.",
      official: "Votação em Plenário",
      impact: "A Câmara votou se mantinha ou não a prisão do deputado Chiquinho Brazão, acusado pela PF de mandar matar a vereadora Marielle Franco. Votar 'SIM' (pela soltura) significou compactuar com o assassinato político e a atuação de milícias no poder público.",
      verdict: "Cúmplice de milicianos e assassinos."
    },
    {
      title: "Apoio a Conflitos Externos (Gaza/Trump)",
      year: "2023-Atual",
      icon: <Globe size={24} />,
      summary: "Alinhamento ideológico com genocídio e extrema-direita internacional.",
      official: "Moções e Atos",
      impact: "Deputados que utilizam o mandato para apoiar ações militares de Israel contra civis palestinos ou pedir apoio a Donald Trump agem contra a tradição diplomática brasileira de paz e neutralidade, importando extremismo e validando violações de Direitos Humanos.",
      verdict: "Apoio à barbárie e submissão a interesses estrangeiros."
    }
  ];

  return (
    <div className="p-4 md:p-6 pb-12 max-w-2xl mx-auto">
      <div className="mb-8 border-b-4 border-ink pb-4">
        <h2 className="font-serif font-black text-3xl md:text-4xl leading-none mb-2 text-ink">
          Entenda as Votações
        </h2>
        <p className="font-sans text-sm text-ink/70 leading-relaxed max-w-lg">
          Os deputados listados como <span className="font-bold text-red">"Votou Contra o Povo"</span> apoiaram ativamente projetos que retiraram seus direitos. Abaixo, traduzimos o "juridiquês" para a realidade.
        </p>
      </div>

      <div className="space-y-6">
        {proposals.map((item, idx) => (
          <div key={idx} className="bg-paper border-2 border-ink shadow-[4px_4px_0px_0px_rgba(10,10,10,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(192,57,43,1)] transition-all duration-300 group overflow-hidden">
            
            {/* Header do Card */}
            <div className="bg-ink text-paper p-4 flex justify-between items-start">
              <div className="flex gap-3 items-center">
                <div className="text-red-500 bg-paper/10 p-2 rounded-full">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: "text-paper" })}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl leading-none">{item.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                    {item.official} • {item.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-5">
              <div className="mb-4">
                <p className="font-serif font-bold italic text-lg text-ink/80 mb-2 leading-tight">
                  "{item.summary}"
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-red/5 border-l-4 border-red p-3">
                  <h4 className="font-mono text-[10px] font-bold uppercase text-red mb-1">Impacto na sua vida</h4>
                  <p className="font-sans text-sm text-ink/90 leading-relaxed text-justify">
                    {item.impact}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-ink/10">
                   <AlertTriangle size={16} className="text-red" />
                   <span className="font-sans font-bold text-xs text-ink uppercase">
                     Veredito: {item.verdict}
                   </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-ink/5 p-6 text-center border border-dashed border-ink/20">
        <h4 className="font-serif font-bold text-xl mb-2">Por que isso importa?</h4>
        <p className="text-sm font-sans text-ink/70 leading-relaxed mb-4">
          Deputados que votam a favor dessas pautas geralmente são financiados por grandes empresários, bancos ou lobbies internacionais. Eles não dependem do SUS, não vão se aposentar pelo INSS e não têm seus direitos trabalhistas ameaçados.
        </p>
        <p className="font-bold text-red font-mono uppercase text-xs">
          Não reeleja quem vota contra você.
        </p>
      </div>
    </div>
  );
};
