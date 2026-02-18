import React from 'react';
import { ALERTS } from '../data';
import { Clock } from 'lucide-react';

export const Alerts: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="font-serif font-bold text-2xl mb-6 border-b border-ink/20 pb-2">
        Últimas Atualizações
      </h2>
      <div className="space-y-6">
        {ALERTS.map(alert => (
          <div key={alert.id} className="flex gap-4 group">
             <div className="flex flex-col items-center pt-1">
               <div className={`w-3 h-3 rounded-full ${alert.type === 'urgent' ? 'bg-red' : 'bg-ink'}`}></div>
               <div className="w-0.5 h-full bg-ink/10 mt-2 group-last:hidden"></div>
             </div>
             <div className="pb-6">
               <div className="font-mono text-[10px] text-ink/50 uppercase tracking-widest flex items-center gap-1 mb-1">
                 <Clock size={10} /> {alert.date}
               </div>
               <h3 className="font-serif font-bold text-lg leading-tight mb-2 group-hover:text-red transition-colors">
                 {alert.title}
               </h3>
               <p className="font-sans text-sm text-ink/80 leading-relaxed">
                 {alert.description}
               </p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};