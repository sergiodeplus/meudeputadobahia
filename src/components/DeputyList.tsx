
import React, { useState, useMemo } from 'react';
import { Deputy } from '../types';
import { DEPUTIES } from '../data';
import { DeputyImage } from './DeputyImage';
import { Filter, Search, AlertOctagon, CheckCircle2, Info, ThumbsDown, Gavel, TrendingDown } from 'lucide-react';

interface DeputyListProps {
  onSelect: (deputy: Deputy) => void;
}

export const DeputyList: React.FC<DeputyListProps> = ({ onSelect }) => {
  const [filter, setFilter] = useState<'all' | 'federal' | 'estadual' | 'investigado' | 'worst_parties'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Identifica partidos com média de integridade baixa (< 5)
  const worstParties = useMemo(() => {
    const stats: Record<string, { sum: number; count: number }> = {};
    DEPUTIES.forEach(d => {
      // Normaliza o nome do partido (remove UF se houver, ex: PL-RJ -> PL)
      const p = d.party.split('-')[0].trim();
      if (!stats[p]) stats[p] = { sum: 0, count: 0 };
      stats[p].sum += d.integrityScore;
      stats[p].count++;
    });

    return Object.entries(stats)
      .filter(([_, data]) => (data.sum / data.count) < 5) // Média abaixo de 5 (Zona de Alerta)
      .map(([party]) => party);
  }, []);

  const filteredDeputies = DEPUTIES.filter(d => {
    const matchesFilter = filter === 'all'
      ? true
      : filter === 'investigado'
        ? (d.status === 'investigado' || d.status === 'preso')
        : filter === 'worst_parties'
          ? worstParties.includes(d.party.split('-')[0].trim())
          : d.type === filter;

    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.headline.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  }).sort((a, b) => {
    // Ordena primeiro por integridade (menor score aparece primeiro, pois é o foco "jornalístico")
    if (a.integrityScore !== b.integrityScore) {
      return a.integrityScore - b.integrityScore;
    }
    // Depois por ordem alfabética
    return a.name.localeCompare(b.name);
  });

  const getScoreColor = (score: number) => {
    if (score <= 3) return 'text-red border-red';
    if (score <= 6) return 'text-amber border-amber';
    return 'text-green border-green';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'preso': return <span className="bg-red text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider flex items-center gap-1"><AlertOctagon size={10} /> Preso</span>;
      case 'investigado': return <span className="bg-amber text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider flex items-center gap-1"><AlertOctagon size={10} /> Investigado</span>;
      case 'citado': return <span className="bg-ink/10 text-ink px-2 py-0.5 text-[9px] font-black uppercase tracking-wider flex items-center gap-1"><Info size={10} /> Citado</span>;
      case 'votou_contra': return <span className="bg-ink text-paper px-2 py-0.5 text-[9px] font-black uppercase tracking-wider flex items-center gap-1"><ThumbsDown size={10} /> Votou Contra o Povo</span>;
      default: return <span className="bg-green text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider flex items-center gap-1"><CheckCircle2 size={10} /> Ficha Limpa</span>;
    }
  };

  const filterOptions = [
    { id: 'all', label: 'Todos', icon: null },
    { id: 'federal', label: 'Federais', icon: null },
    { id: 'estadual', label: 'Estaduais', icon: null },
    { id: 'worst_parties', label: 'Piores Partidos', icon: <TrendingDown size={12} /> },
    { id: 'investigado', label: 'Investigados', icon: <AlertOctagon size={12} /> },
  ];

  return (
    <div className="p-4 min-h-[50vh]">
      {/* Controls */}
      <div className="mb-6 space-y-3 sticky top-0 bg-paper/95 backdrop-blur z-30 py-2 border-b border-ink/10">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-ink/40" size={16} />
          <input
            type="text"
            placeholder="Buscar por nome, partido ou crime..."
            className="w-full bg-white border border-ink/20 pl-10 pr-4 py-2 font-sans text-sm focus:outline-none focus:border-ink"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtros em Grid/Wrap para remover rolagem horizontal */}
        <div className="flex flex-wrap gap-2 pb-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id as any)}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider border transition-colors flex items-center justify-center gap-2 flex-grow md:flex-grow-0 ${filter === opt.id ? 'bg-ink text-paper border-ink font-bold shadow-md' : 'bg-white text-ink border-ink/20 hover:border-ink'
                }`}
            >
              {opt.icon && opt.icon}
              {opt.label}
            </button>
          ))}
        </div>

        {filter === 'worst_parties' && (
          <div className="text-[10px] font-mono text-red bg-red/5 p-2 border-l-2 border-red animate-fade-in">
            <span className="font-bold">⚠️ MÉDIA DE INTEGRIDADE CRÍTICA</span>
            <br />
            Exibindo apenas deputados de partidos com nota média abaixo de 5.0.
            <br />
            <span className="opacity-70 mt-1 block">Partidos listados: {worstParties.join(', ')}.</span>
          </div>
        )}
      </div>

      {/* Grid */}
      <div className="grid gap-4">
        {filteredDeputies.map(deputy => (
          <div
            key={deputy.id}
            onClick={() => onSelect(deputy)}
            className="group bg-white border-b border-ink/20 pb-4 cursor-pointer transition-all hover:bg-paper-dark/30 hover:pl-2 relative overflow-hidden"
          >
            {/* Efeito de destaque para presos/investigados graves */}
            {deputy.status === 'preso' && (
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                <div className="absolute top-[10px] -right-[22px] rotate-45 bg-red text-white text-[8px] font-black uppercase py-0.5 px-6 shadow-sm">
                  ALERTA
                </div>
              </div>
            )}

            <div className="flex gap-4 items-start">
              {/* Avatar Placeholder */}
              <div className="w-14 h-14 shrink-0 border border-ink/10 overflow-hidden relative">
                <DeputyImage
                  src={deputy.image}
                  alt={deputy.name}
                  fallbackInitial={deputy.name.charAt(0)}
                  party={deputy.party}
                  className="w-full h-full"
                />
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-serif font-bold text-lg leading-tight group-hover:underline decoration-red decoration-2 underline-offset-2 pr-2">
                      {deputy.name}
                    </h3>
                    <p className="text-[10px] font-mono uppercase text-ink/50 tracking-wide mt-0.5">
                      {deputy.party} • {deputy.type}
                    </p>
                  </div>
                  <div className={`flex flex-col items-center border-2 px-1.5 py-0.5 min-w-[3rem] ${getScoreColor(deputy.integrityScore)}`}>
                    <span className="font-serif font-black text-xl leading-none">{deputy.integrityScore}</span>
                    <span className="text-[7px] uppercase font-bold tracking-tighter">Score</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {getStatusBadge(deputy.status)}
                  {deputy.processes.length > 0 && (
                    <span className="bg-ink/5 text-ink border border-ink/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                      <Gavel size={10} /> {deputy.processes.length} {deputy.processes.length === 1 ? 'Processo' : 'Processos'}
                    </span>
                  )}
                </div>

                <p className="font-sans text-sm text-ink/80 leading-snug line-clamp-2">
                  {deputy.headline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDeputies.length === 0 && (
        <div className="text-center py-12 text-ink/40 font-mono text-sm border-2 border-dashed border-ink/10 bg-white/50">
          <p className="mb-2">Nenhum deputado encontrado.</p>
          <p className="text-xs">Tente ajustar os filtros ou buscar por outro nome.</p>
        </div>
      )}

      <div className="mt-8 text-center text-[10px] font-mono text-ink/30 uppercase">
        Exibindo {filteredDeputies.length} parlamentares
      </div>
    </div>
  );
};
