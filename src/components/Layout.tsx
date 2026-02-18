
import React, { useState, useEffect } from 'react';
import { Menu, Search, Share2, AlertTriangle, X, Download, Smartphone } from 'lucide-react';
import { ALERTS } from '../data';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosHint, setShowIosHint] = useState(false);

  useEffect(() => {
    // Detect iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIos(ios);

    // Detect Install Prompt (Android/Desktop)
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosHint(true);
      return;
    }

    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBtn(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans max-w-2xl mx-auto shadow-2xl bg-paper min-h-screen border-x border-ink/10 relative">
      {/* Masthead */}
      <header className="bg-ink text-paper pt-4 pb-2 border-b-4 border-red sticky top-0 z-50 shadow-md">
        <div className="px-4 flex justify-between items-center mb-4 border-b border-paper/20 pb-2">
          <div className="text-[10px] font-mono tracking-widest uppercase text-paper/60">
            Bahia, Brasil
          </div>
          <div className="flex items-center gap-3">
             {/* Install Button */}
             {(showInstallBtn || (isIos && !window.matchMedia('(display-mode: standalone)').matches)) && (
                <button 
                  onClick={handleInstallClick}
                  className="bg-paper text-ink px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 hover:bg-red hover:text-white transition-colors animate-pulse"
                >
                  <Download size={10} /> Instalar App
                </button>
             )}
             <div className="text-[10px] font-mono tracking-widest uppercase text-paper/60">
                {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
             </div>
          </div>
        </div>
        
        <div className="text-center px-4 mb-4">
          <h1 className="font-serif text-4xl md:text-5xl font-black tracking-tighter leading-none mb-1">
            Meu Deputado BA
          </h1>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-paper/70">
            Transparência · Verdade · Cidadania
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center space-x-1 font-mono text-xs border-t border-paper/20 pt-2 px-2 overflow-x-auto scrollbar-hide">
          {[
            { id: 'feed', label: 'Início' },
            { id: 'proposals', label: 'Pautas' },
            { id: 'calculator', label: 'Calculadora' },
            { id: 'alerts', label: 'Alertas' },
            { id: 'about', label: 'Sobre' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 uppercase tracking-wider font-bold transition-colors whitespace-nowrap ${
                activeTab === item.id 
                  ? 'bg-paper text-ink' 
                  : 'text-paper/60 hover:text-paper'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-red text-white py-2 px-4 overflow-hidden flex items-center shadow-inner relative z-40">
        <span className="bg-white text-red text-[9px] font-black uppercase px-2 py-0.5 mr-3 tracking-wider shrink-0 z-10">
          Urgente
        </span>
        <div className="overflow-hidden w-full">
          <div className="animate-ticker inline-block whitespace-nowrap text-xs font-bold font-sans">
             {ALERTS[0].date}: {ALERTS[0].title} — {ALERTS[0].description} &nbsp;&nbsp;&nbsp; /// &nbsp;&nbsp;&nbsp; {ALERTS[1].date}: {ALERTS[1].title} — {ALERTS[1].description}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow relative z-0">
        {children}
      </main>

      {/* iOS Installation Hint Modal */}
      {showIosHint && (
        <div className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur flex items-center justify-center p-6" onClick={() => setShowIosHint(false)}>
          <div className="bg-paper p-6 rounded shadow-2xl max-w-sm text-center relative" onClick={e => e.stopPropagation()}>
             <button onClick={() => setShowIosHint(false)} className="absolute top-2 right-2 text-ink/50 hover:text-red">
               <X size={20} />
             </button>
             <Smartphone size={48} className="mx-auto text-red mb-4" />
             <h3 className="font-serif font-bold text-xl mb-2">Instalar no iPhone</h3>
             <p className="font-sans text-sm text-ink/80 mb-4">
               Para instalar este app no seu iPhone:
             </p>
             <ol className="text-left text-sm font-sans space-y-2 bg-ink/5 p-4 rounded mb-4">
               <li className="flex gap-2"><Share2 size={16} /> 1. Toque no botão <strong>Compartilhar</strong> na barra inferior do Safari.</li>
               <li className="flex gap-2"><Download size={16} /> 2. Role para cima e selecione <strong>"Adicionar à Tela de Início"</strong>.</li>
             </ol>
             <button onClick={() => setShowIosHint(false)} className="bg-ink text-paper w-full py-3 font-bold uppercase text-xs tracking-widest hover:bg-red transition-colors">
               Entendi
             </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-ink text-paper/50 py-8 px-6 text-center border-t border-ink font-mono text-xs">
        <p className="mb-2 uppercase tracking-widest">Meu Deputado BA © 2026</p>
        <p className="text-[10px] max-w-xs mx-auto leading-relaxed opacity-60">
          Dados extraídos de fontes públicas (STF, TSE, Câmara). A condição de investigado não equivale a culpa.
        </p>
      </footer>
    </div>
  );
};
