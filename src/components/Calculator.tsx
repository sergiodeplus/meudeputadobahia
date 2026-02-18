
import React, { useState } from 'react';
import { ArrowRight, RefreshCcw, AlertTriangle, UserX, ChevronDown, ChevronUp } from 'lucide-react';
import { DEPUTIES } from '../data';
import { Deputy } from '../types';
import { DeputyImage } from './DeputyImage';

type RiskCategory = 'clt' | 'inss' | 'servicos' | 'etica' | 'humanos';

export const Calculator: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [userRisks, setUserRisks] = useState<RiskCategory[]>([]);

  const questions = [
    {
      text: "Você trabalha com carteira assinada (CLT) ou busca emprego?",
      category: 'clt' as RiskCategory,
      options: [
        { text: "Sim, sou CLT ou estou desempregado", value: 30, addRisk: true },
        { text: "Não, sou PJ / Empresário", value: 0, addRisk: false },
        { text: "Sou Servidor Público", value: 10, addRisk: false }
      ]
    },
    {
      text: "Você depende exclusivamente do INSS para se aposentar?",
      category: 'inss' as RiskCategory,
      options: [
        { text: "Sim, totalmente", value: 30, addRisk: true },
        { text: "Parcialmente", value: 15, addRisk: true },
        { text: "Não, tenho previdência privada", value: 0, addRisk: false }
      ]
    },
    {
      text: "Você utiliza o SUS, Universidades Federais ou Escolas Públicas?",
      category: 'servicos' as RiskCategory,
      options: [
        { text: "Sim, frequentemente", value: 20, addRisk: true },
        { text: "Raramente", value: 10, addRisk: true },
        { text: "Não, uso tudo privado", value: 0, addRisk: false }
      ]
    },
    {
      text: "Você repudia o apoio a conflitos internacionais (Gaza) e interferência externa (Trump)?",
      category: 'humanos' as RiskCategory,
      options: [
        { text: "Sim, repudio totalmente", value: 25, addRisk: true },
        { text: "Não me importo com política externa", value: 0, addRisk: false }
      ]
    },
    {
      text: "Você concorda que políticos presos devem continuar recebendo salário?",
      category: 'etica' as RiskCategory,
      options: [
        { text: "Absolutamente Não", value: 20, addRisk: true },
        { text: "Depende do caso", value: 0, addRisk: false }
      ]
    }
  ];

  const handleAnswer = (value: number, addRisk: boolean, category: RiskCategory) => {
    setScore(score + value);
    if (addRisk) {
      setUserRisks([...userRisks, category]);
    }
    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setScore(0);
    setUserRisks([]);
  };

  // Lógica de Cruzamento de Dados
  const getEnemiesByCategory = (category: RiskCategory) => {
    let targetProposals: string[] = [];
    let title = "";

    switch (category) {
      case 'clt':
        targetProposals = ["Reforma Trabalhista", "Terceirização", "Trabalho aos Domingos"];
        title = "Votaram para REDUZIR seus Direitos Trabalhistas";
        break;
      case 'inss':
        targetProposals = ["Reforma da Previdência"];
        title = "Votaram para DIFICULTAR sua Aposentadoria";
        break;
      case 'servicos':
        targetProposals = ["PEC do Teto dos Gastos", "Entrega do Pré-Sal"];
        title = "Votaram para CONGELAR verbas da Saúde e Educação";
        break;
      case 'humanos':
        targetProposals = ["Apoio a Israel (Gaza)", "Apoio a Donald Trump", "Acordos Israel"];
        title = "Apoiaram intervenções externas e conflitos (Gaza/Trump)";
        break;
      case 'etica':
        targetProposals = ["PEC da Blindagem", "Soltura Chiquinho Brazão"];
        title = "Votaram pela IMPUNIDADE de Políticos";
        break;
    }

    // Filtra deputados que votaram SIM nessas pautas
    const enemies = DEPUTIES.filter(deputy =>
      deputy.votes.some(vote =>
        targetProposals.some(prop => vote.proposal.includes(prop) && vote.againstWorkers)
      )
    );

    // Remove duplicatas e retorna
    return { title, list: enemies };
  };

  if (step < questions.length) {
    return (
      <div className="p-6 max-w-lg mx-auto min-h-[60vh] flex flex-col justify-center">
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="font-mono text-xs text-red uppercase tracking-widest font-bold">Calculadora de Impacto</span>
            <span className="font-mono text-xs text-ink/40">Questão {step + 1}/{questions.length}</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-black mt-2 leading-tight">
            {questions[step].text}
          </h2>
          <div className="w-full bg-ink/10 h-1.5 mt-6">
            <div className="bg-red h-full transition-all duration-300 ease-out" style={{ width: `${((step) / questions.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="grid gap-3">
          {questions[step].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt.value, opt.addRisk, questions[step].category)}
              className="group w-full text-left p-5 border-2 border-ink/10 hover:border-ink hover:bg-ink hover:text-paper transition-all font-sans font-medium text-lg flex justify-between items-center"
            >
              {opt.text}
              <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // TELA DE RESULTADOS
  const scoreColor = score > 60 ? 'text-red' : score > 30 ? 'text-amber' : 'text-green';
  const riskLevel = score > 60 ? "ALTO RISCO" : score > 30 ? "RISCO MODERADO" : "BAIXO RISCO";

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto animate-fade-in pb-12">

      {/* Header do Resultado */}
      <div className="bg-paper border-b-4 border-ink pb-6 mb-8 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-paper px-4 py-1 font-mono text-xs uppercase tracking-widest font-bold">
          Resultado da Análise
        </div>

        <div className={`font-serif font-black text-6xl mt-6 mb-2 ${scoreColor}`}>
          {score}%
        </div>
        <h3 className="font-mono text-lg font-bold uppercase tracking-widest mb-4">
          Seu Índice de Vulnerabilidade Parlamentar é <span className={`${scoreColor}`}>{riskLevel}</span>
        </h3>

        <p className="font-sans text-sm text-ink/70 max-w-md mx-auto leading-relaxed">
          Baseado nas suas respostas, cruzamos seus interesses com os votos reais dos deputados. Abaixo estão os parlamentares que agiram diretamente contra você.
        </p>
      </div>

      {/* Lista de Algozes */}
      <div className="space-y-8">
        {userRisks.length > 0 ? (
          userRisks.map((risk) => {
            const data = getEnemiesByCategory(risk);
            if (data.list.length === 0) return null;

            return (
              <div key={risk} className="bg-white border border-ink/10 shadow-sm overflow-hidden">
                <div className="bg-ink/5 p-3 border-b border-ink/10 flex items-center gap-2">
                  <UserX size={16} className="text-red" />
                  <h4 className="font-serif font-bold text-lg leading-none text-ink">
                    {data.title}
                  </h4>
                </div>

                {/* Scroll Horizontal de Deputados */}
                <div className="flex overflow-x-auto p-4 gap-3 scrollbar-hide">
                  {data.list.map(deputy => (
                    <div key={deputy.id} className="min-w-[100px] w-[100px] flex flex-col items-center text-center group">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-red/20 group-hover:border-red transition-colors flex items-center justify-center relative bg-ink/5">
                        <DeputyImage
                          src={deputy.image}
                          alt={deputy.name}
                          fallbackInitial={deputy.name.charAt(0)}
                          party={deputy.party}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="text-[10px] font-black uppercase leading-tight mb-1 truncate w-full">
                        {deputy.name}
                      </div>
                      <div className="text-[9px] font-mono text-ink/50 bg-ink/5 px-1 rounded">
                        {deputy.party}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-red/5 text-red text-[10px] font-mono uppercase text-center py-1 tracking-wider">
                  {data.list.length} parlamentares encontrados nesta categoria
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-green/10 border border-green p-6 text-center">
            <h4 className="font-serif font-bold text-xl text-green-800 mb-2">Você está relativamente seguro</h4>
            <p className="text-sm text-green-900">
              Seu perfil não foi diretamente atacado pelas principais pautas destrutivas recentes, ou você tem privilégios que o protegem das decisões do parlamento.
            </p>
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={reset}
          className="bg-ink text-paper px-8 py-3 font-mono uppercase font-bold text-sm hover:bg-red transition-colors inline-flex items-center gap-2"
        >
          <RefreshCcw size={14} /> Refazer Análise
        </button>
      </div>

    </div>
  );
};
