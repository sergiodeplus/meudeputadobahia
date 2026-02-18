
import React from 'react';
import { Deputy } from '../types';
import { DeputyImage } from './DeputyImage';
import { X, Share2, Gavel, FileWarning, ThumbsDown, History } from 'lucide-react';

interface DeputyProfileProps {
  deputy: Deputy;
  onClose: () => void;
}

export const DeputyProfile: React.FC<DeputyProfileProps> = ({ deputy, onClose }) => {
  const getScoreColor = (score: number) => {
    if (score <= 3) return 'text-red';
    if (score <= 6) return 'text-amber';
    return 'text-green';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none">
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={onClose} />

      <div className="bg-paper w-full max-w-lg h-[90vh] sm:h-[85vh] overflow-y-auto pointer-events-auto relative shadow-2xl flex flex-col animate-slide-up sm:rounded-t-lg border-t-8 border-red">

        {/* Header */}
        <div className="sticky top-0 bg-paper/95 backdrop-blur z-10 border-b border-ink/10 px-6 py-4 flex items-start gap-4">
          {/* Image in Header */}
          <div className="w-16 h-16 shrink-0 border-2 border-ink rounded-full overflow-hidden shadow-sm">
            <DeputyImage
              src={deputy.image}
              alt={deputy.name}
              fallbackInitial={deputy.name.charAt(0)}
              party={deputy.party}
              className="w-full h-full"
            />
          </div>
          <div className="flex-grow pt-1">
            <h2 className="font-serif font-black text-2xl leading-none mb-1">{deputy.name}</h2>
            <p className="font-mono text-xs text-ink/60 uppercase tracking-widest">{deputy.party} • {deputy.type}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-ink/5 rounded-full -mr-2">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">

          {/* Status & Score */}
          <div className="flex items-stretch gap-4">
            <div className="flex-1 bg-white p-4 border border-ink/10 shadow-sm">
              <div className="text-[10px] font-black uppercase tracking-widest text-ink/40 mb-1">Status</div>
              <div className="text-lg font-bold font-sans uppercase flex items-center gap-2">
                {deputy.status === 'preso' && <span className="text-red animate-pulse">🔴 Preso</span>}
                {deputy.status === 'investigado' && <span className="text-amber">⚠️ Investigado</span>}
                {deputy.status === 'citado' && <span className="text-ink/70">ℹ️ Citado</span>}
                {deputy.status === 'votou_contra' && <span className="text-ink font-black flex items-center gap-1"><ThumbsDown size={18} /> Votou Contra o Povo</span>}
                {deputy.status === 'limpo' && <span className="text-green">✅ Ficha Limpa</span>}
              </div>
            </div>
            <div className="bg-ink text-paper p-4 flex flex-col items-center justify-center min-w-[100px]">
              <span className={`font-serif font-black text-4xl ${getScoreColor(deputy.integrityScore)}`}>
                {deputy.integrityScore}<span className="text-base text-paper/50">/10</span>
              </span>
              <span className="text-[8px] uppercase tracking-widest mt-1">Integridade</span>
            </div>
          </div>

          {/* Headline */}
          <div className="font-serif text-xl italic font-bold leading-tight border-l-4 border-ink pl-4 py-1">
            "{deputy.headline}"
          </div>

          {/* Bio & Patrimony */}
          <div className="font-sans text-sm leading-relaxed text-ink/80 space-y-4">
            <p>{deputy.bio}</p>
            <div className="bg-white p-3 border border-ink/10 flex justify-between items-center font-mono text-xs">
              <span className="uppercase text-ink/50">Patrimônio Declarado</span>
              <span className="font-bold">{deputy.patrimony}</span>
            </div>
          </div>

          {/* Processes */}
          <div>
            <h3 className="font-mono font-bold text-xs uppercase tracking-widest border-b border-ink mb-4 pb-1 flex items-center gap-2">
              <Gavel size={14} /> Processos Judiciais
            </h3>
            {deputy.processes.length === 0 ? (
              <p className="text-sm text-ink/50 italic">Nenhum processo público encontrado.</p>
            ) : (
              <div className="space-y-4">
                {deputy.processes.map((proc, idx) => (
                  <div key={idx} className="bg-red/5 border-l-4 border-red p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-red font-sans">{proc.name}</span>
                      <span className="text-[9px] font-mono uppercase bg-red text-white px-2 py-0.5">{proc.status}</span>
                    </div>
                    <p className="text-xs text-ink/80 font-sans mb-1">{proc.type}</p>
                    <p className="text-sm text-ink leading-snug">{proc.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Votes */}
          {deputy.type === 'federal' && (
            <div>
              <h3 className="font-mono font-bold text-xs uppercase tracking-widest border-b border-ink mb-4 pb-1 flex items-center gap-2">
                <History size={14} /> Histórico de Votações & Pautas
              </h3>
              {deputy.votes.length === 0 ? (
                <p className="text-sm text-ink/50 italic">Nenhum registro de voto polêmico listado.</p>
              ) : (
                <div className="space-y-3">
                  {deputy.votes.map((vote, idx) => (
                    <div key={idx} className="flex gap-3 items-start border-b border-ink/10 pb-3 last:border-0 group">
                      <div className={`font-mono font-bold text-xs px-2 py-1 min-w-[3rem] text-center flex flex-col justify-center items-center ${vote.vote === 'SIM' ? 'bg-ink text-paper' : 'bg-paper border border-ink text-ink'
                        }`}>
                        <span>{vote.vote}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="font-bold text-sm mb-0.5">{vote.proposal}</div>
                          {vote.againstWorkers && (
                            <span className="text-[8px] bg-red/10 text-red border border-red/20 px-1.5 py-0.5 uppercase font-bold tracking-tight rounded-sm ml-2 shrink-0">
                              Contra o Povo
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-ink/70 leading-snug">{vote.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sources */}
          <div className="bg-ink/5 p-4 text-[10px] text-ink/60 font-mono leading-relaxed">
            <p className="mb-2 font-bold uppercase">Fontes:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Portal da Câmara dos Deputados</li>
              <li>Tribunal Superior Eleitoral (TSE)</li>
              <li>Supremo Tribunal Federal (STF) - Processos Públicos</li>
              <li>Metrópoles (Coluna Mirelle Pinheiro)</li>
              <li> Congresso em Foco & Agência Câmara</li>
            </ul>
          </div>

          {/* Action */}
          <button className="w-full bg-ink text-paper font-mono uppercase font-bold text-sm py-4 flex items-center justify-center gap-2 hover:bg-ink/90 transition-colors">
            <Share2 size={16} /> Compartilhar Ficha
          </button>
        </div>
      </div>
    </div>
  );
};
