
import { Deputy, Alert } from './types';

export const DEPUTIES: Deputy[] = [
  // --- CASOS GRAVES (Presos, Investigados e Réus) ---
  {
    id: 100,
    name: "Binho Galinha",
    fullName: "Kléber Cristian Escolano de Almeida",
    party: "PRD",
    type: "estadual",
    status: "preso",
    integrityScore: 0,
    headline: "RÉU E PRESO PREVENTIVAMENTE. Acusado de chefiar milícia, tráfico e lavagem de dinheiro.",
    bio: "Deputado estadual (1º mandato). Apontado como líder de organização criminosa em Feira de Santana. Preso desde out/2025.",
    patrimony: "R$ 9.000.000,00 (Bloqueados) / R$ 200mi (Op.)",
    processes: [
      {
        name: "Op. El Patrón / Hybris",
        type: "Milícia e Lavagem",
        status: "Preso Preventivamente",
        description: "Liderança de milícia, jogo do bicho, agiotagem e receptação qualificada.",
        severity: "high"
      },
      {
        name: "Op. Estado Anômico",
        type: "Tráfico/Armas",
        status: "Denúncia",
        description: "Associação ao tráfico de drogas e comércio ilegal de armas.",
        severity: "high"
      }
    ],
    votes: [],
    history: [
      { year: "2023", role: "Deputado Estadual", party: "Patriota" },
      { year: "2024-Atual", role: "Deputado Estadual", party: "PRD (Suspenso)" }
    ]
  },
  {
    id: 51,
    name: "Lucio Vieira Lima",
    fullName: "Lucio Vieira Lima",
    party: "MDB",
    type: "federal",
    status: "investigado",
    integrityScore: 1,
    headline: "Caso do Bunker de R$ 51 milhões. Votou SIM na Reforma Trabalhista.",
    bio: "Ex-Deputado Federal. Irmão de Geddel Vieira Lima. Envolvido no escândalo das malas de dinheiro encontradas em apartamento em Salvador.",
    patrimony: "Bloqueado Judicialmente",
    processes: [
      {
        name: "Bunker dos R$ 51 Milhões",
        type: "Lavagem de Dinheiro",
        status: "Condenado STF",
        description: "Associação criminosa e lavagem de dinheiro no caso das malas encontradas em apartamento.",
        severity: "high"
      }
    ],
    votes: [
      { proposal: "Reforma Trabalhista (2017)", vote: "SIM", description: "Votou contra os direitos trabalhistas (CLT).", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos (2016)", vote: "SIM", description: "Congelou investimentos em saúde e educação por 20 anos.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal (2016)", vote: "SIM", description: "Votou a favor da entrega da exploração a empresas estrangeiras.", againstWorkers: true },
      { proposal: "Reforma da Previdência", vote: "AUSENTE", description: "Não votou em 2019 (não eleito), mas articulou a de 2017.", againstWorkers: false }
    ],
    history: [{ year: "2011-2019", role: "Deputado Federal", party: "MDB" }]
  },
  {
    id: 1,
    name: "Elmar Nascimento",
    fullName: "Elmar José Vieira Nascimento",
    party: "União Brasil",
    type: "federal",
    status: "investigado",
    integrityScore: 2,
    headline: "Citado em múltiplas fases da Op. Overclean. Votou SIM na Reforma Trabalhista.",
    bio: "3º mandato. 2º Vice-Presidente da Câmara. Base em Campo Formoso. Citado em esquema de R$ 1,4 bi.",
    patrimony: "Não publicado (Suspeita de ocultação)",
    processes: [
      {
        name: "Op. Overclean",
        type: "Fraude em Licitações",
        status: "Inquérito STF",
        description: "Desvio de emendas via Codevasf/DNOCS. Uso de aeronave de empresa investigada.",
        severity: "high"
      }
    ],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Dificultou aposentadoria.", againstWorkers: true },
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Flexibilizou direitos CLT.", againstWorkers: true },
      { proposal: "PEC da Blindagem", vote: "SIM", description: "Dificulta investigação de políticos.", againstWorkers: true },
      { proposal: "Soltura Chiquinho Brazão", vote: "SIM", description: "Votou para soltar acusado de mandar matar Marielle Franco.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos (2016)", vote: "SIM", description: "Congelou investimentos em saúde e educação.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal (2016)", vote: "SIM", description: "Favorável a empresas estrangeiras no petróleo.", againstWorkers: true }
    ],
    history: [{ year: "2014-Atual", role: "Deputado Federal", party: "União Brasil" }]
  },
  {
    id: 2,
    name: "Félix Mendonça Jr.",
    fullName: "Félix de Almeida Mendonça Júnior",
    party: "PDT",
    type: "federal",
    status: "investigado",
    integrityScore: 3,
    headline: "Alvo da Op. Overclean. Votou a favor da PEC da Blindagem (2025).",
    bio: "4º mandato. Além de investigado na Op. Overclean (R$ 24mi bloqueados), votou a favor da PEC que protege parlamentares de investigações.",
    patrimony: "R$ 3.000.000,00 (2022)",
    processes: [
      {
        name: "Op. Overclean",
        type: "Corrupção/Fraude",
        status: "Busca e Apreensão",
        description: "Investigação sobre direcionamento de emendas para prefeituras aliadas.",
        severity: "high"
      }
    ],
    votes: [
      { proposal: "PEC da Blindagem (set/2025)", vote: "SIM", description: "Votou a favor da blindagem parlamentar para dificultar investigações.", againstWorkers: true },
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou a favor da reforma.", againstWorkers: true }
    ],
    history: [{ year: "2011-Atual", role: "Deputado Federal", party: "PDT" }]
  },
  {
    id: 3,
    name: "Dal Barreto",
    fullName: "Junior Dal Barreto",
    party: "União Brasil",
    type: "federal",
    status: "investigado",
    integrityScore: 3,
    headline: "Alvo direto de buscas na Op. Overclean. Votou pela soltura de Brazão.",
    bio: "1º mandato. Apontado como integrante do núcleo político do esquema de desvios.",
    patrimony: "R$ 140.435 votos (2022)",
    processes: [
      {
        name: "Op. Overclean",
        type: "Busca e Apreensão",
        status: "Investigado",
        description: "Celular apreendido na 6ª fase. Ligação com operador Evandro Baldino.",
        severity: "high"
      }
    ],
    votes: [
       { proposal: "Soltura Chiquinho Brazão", vote: "SIM", description: "Votou para soltar acusado de mandar matar Marielle Franco.", againstWorkers: true }
    ],
    history: [{ year: "2023-Atual", role: "Deputado Federal", party: "União Brasil" }]
  },
  {
    id: 4,
    name: "Adolfo Menezes",
    fullName: "Adolfo Menezes",
    party: "PSD",
    type: "estadual",
    status: "citado",
    integrityScore: 5,
    headline: "Afastado da presidência da ALBA por liminar do STF.",
    bio: "Deputado Estadual. Afastado em fev/2025 por inconstitucionalidade na reeleição da mesa.",
    patrimony: "R$ 4.500.000,00",
    processes: [
      {
        name: "Ação Inconstitucionalidade",
        type: "Administrativo",
        status: "Afastado",
        description: "Afastado do cargo de Presidente da ALBA pelo Min. Gilmar Mendes.",
        severity: "medium"
      }
    ],
    votes: [],
    history: [{ year: "2018-Atual", role: "Deputado Estadual", party: "PSD" }]
  },
  {
    id: 36,
    name: "Capitão Alden",
    fullName: "Capitão Alden",
    party: "PL",
    type: "federal",
    status: "investigado",
    integrityScore: 4,
    headline: "Investigado por Fake News e atos antidemocráticos.",
    bio: "Base PL. Bolsonarista radical.",
    patrimony: "TSE",
    processes: [
      {
        name: "Inq. Fake News",
        type: "Desinformação",
        status: "Investigado",
        description: "Investigação sobre propagação de notícias falsas e atos antidemocráticos.",
        severity: "medium"
      }
    ],
    votes: [
      { proposal: "Trabalho aos Domingos", vote: "SIM", description: "Votou a favor do trabalho aos domingos sem adicional.", againstWorkers: true }
    ],
    history: []
  },

  // --- VOTARAM CONTRA OS TRABALHADORES (Previdência, Trabalhista, Blindagem) ---
  
  {
    id: 9,
    name: "Arthur Maia",
    fullName: "Arthur de Oliveira Maia",
    party: "União Brasil",
    type: "federal",
    status: "citado",
    integrityScore: 4,
    headline: "RELATOR da Reforma da Previdência. Votou SIM na Trabalhista e Teto.",
    bio: "Advogado. Foi relator da Reforma Administrativa e da Previdência.",
    patrimony: "R$ 6.200.000,00",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Relator do texto que endureceu regras.", againstWorkers: true },
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou a favor da retirada de direitos.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos sociais.", againstWorkers: true },
      { proposal: "Terceirização Irrestrita", vote: "SIM", description: "Votou a favor da terceirização total.", againstWorkers: true },
      { proposal: "Soltura Chiquinho Brazão", vote: "SIM", description: "Votou pela soltura.", againstWorkers: true }
    ],
    history: [{ year: "2011-Atual", role: "Deputado Federal", party: "União" }]
  },
  {
    id: 8,
    name: "Antônio Brito",
    fullName: "Antônio Brito",
    party: "PSD",
    type: "federal",
    status: "citado",
    integrityScore: 6,
    headline: "Votou SIM na Previdência e na PEC da Blindagem.",
    bio: "Líder do PSD. Defensor das Santas Casas. Citado em uso de aeronave de investigados.",
    patrimony: "Disponível no TSE",
    processes: [
      {
        name: "Op. Overclean",
        type: "Uso de Aeronave",
        status: "Citado",
        description: "Investigação sobre uso de avião do esquema para transporte de dinheiro/políticos.",
        severity: "medium"
      }
    ],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "PEC da Blindagem", vote: "SIM", description: "Votou a favor da blindagem.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos sociais.", againstWorkers: true }
    ],
    history: [{ year: "2011-Atual", role: "Deputado Federal", party: "PSD" }]
  },
  {
    id: 11,
    name: "Claudio Cajado",
    fullName: "Claudio Cajado",
    party: "PP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 4,
    headline: "Votou SIM na Reforma da Previdência, Trabalhista e Teto.",
    bio: "Deputado influente do PP. Base do 'Centrão'. Incluído por votar contra direitos em múltiplas legislaturas.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou a favor.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou saúde e educação.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal", vote: "SIM", description: "A favor de empresas estrangeiras.", againstWorkers: true }
    ],
    history: [{ year: "1999-Atual", role: "Deputado Federal", party: "PP" }]
  },
  {
    id: 22,
    name: "Paulo Azi",
    fullName: "Paulo Azi",
    party: "União Brasil",
    type: "federal",
    status: "votou_contra",
    integrityScore: 4,
    headline: "Votou SIM na Reforma da Previdência, Trabalhista e Soltura de Brazão.",
    bio: "Base do antigo DEM. Votos alinhados contra pautas trabalhistas.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos.", againstWorkers: true },
      { proposal: "Soltura Chiquinho Brazão", vote: "SIM", description: "Votou pela soltura.", againstWorkers: true }
    ],
    history: [{ year: "2015-Atual", role: "Deputado Federal", party: "União" }]
  },
  {
    id: 19,
    name: "Mário Negromonte Jr.",
    fullName: "Mário Negromonte Jr.",
    party: "PP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Votou contra trabalhadores (2017), Teto (2016) e Blindagem (2025).",
    bio: "Herdeiro político. Acumula votos negativos em diversas legislaturas.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "Reforma Trabalhista (2017)", vote: "SIM", description: "Votou contra direitos trabalhistas.", againstWorkers: true },
      { proposal: "PEC da Blindagem (set/2025)", vote: "SIM", description: "Votou pela impunidade de políticos.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos em saúde e educação.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal", vote: "SIM", description: "Votou a favor.", againstWorkers: true }
    ],
    history: [{ year: "2015-Atual", role: "Deputado Federal", party: "PP" }]
  },
  {
    id: 30,
    name: "Pastor Sargento Isidório",
    fullName: "Manoel Isidório",
    party: "Avante",
    type: "federal",
    status: "citado",
    integrityScore: 5,
    headline: "Votou SIM na Previdência. Fundação Dr. Jesus investigada.",
    bio: "Campeão de votos. Votou a favor da Reforma da Previdência.",
    patrimony: "R$ 550.000,00",
    processes: [
      {
        name: "Ação Civil",
        type: "Direitos Humanos",
        status: "Em andamento",
        description: "Investigação sobre a Fundação Dr. Jesus.",
        severity: "medium"
      }
    ],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 5,
    name: "Adolfo Viana",
    fullName: "Adolfo Viana",
    party: "PSDB",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou a favor da Reforma da Previdência.",
    bio: "Deputado federal. Incluído por votar a favor da Reforma da Previdência.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: [{ year: "2019-Atual", role: "Deputado Federal", party: "PSDB" }]
  },
  {
    id: 18,
    name: "Márcio Marinho",
    fullName: "Márcio Marinho",
    party: "Republicanos",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Ligado à Igreja Universal. Incluído por votar contra a aposentadoria.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: [{ year: "2007-Atual", role: "Deputado Federal", party: "Republicanos" }]
  },
  {
    id: 21,
    name: "Otto Alencar Filho",
    fullName: "Otto Alencar Filho",
    party: "PSD",
    type: "federal",
    status: "votou_contra",
    integrityScore: 6,
    headline: "Votou SIM na Previdência.",
    bio: "Filho do Senador Otto Alencar. Incluído por votar contra a aposentadoria.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: [{ year: "2019-Atual", role: "Deputado Federal", party: "PSD" }]
  },
  {
    id: 24,
    name: "Roberta Roma",
    fullName: "Roberta Roma",
    party: "PL",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou a favor da PEC da Blindagem.",
    bio: "Esposa de João Roma. Incluída por votar a favor da impunidade parlamentar.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "PEC da Blindagem", vote: "SIM", description: "Votou pela impunidade.", againstWorkers: true }
    ],
    history: [{ year: "2023-Atual", role: "Deputada Federal", party: "PL" }]
  },
  {
    id: 28,
    name: "João Carlos Bacelar",
    fullName: "João Carlos Bacelar (Jonga)",
    party: "PL",
    type: "federal",
    status: "votou_contra",
    integrityScore: 4,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Conhecido como Jonga Bacelar. Incluído por votar contra a aposentadoria.",
    patrimony: "Disponível no TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra trabalhadores.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos.", againstWorkers: true }
    ],
    history: [{ year: "2015-Atual", role: "Deputado Federal", party: "PL" }]
  },
  {
    id: 29,
    name: "Leur Lomanto Jr.",
    fullName: "Leur Lomanto Jr.",
    party: "União Brasil",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Acúmulo de votos contra o povo: Previdência, Blindagem e Brazão.",
    bio: "Base União. Acumula votos negativos em diversas pautas.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência (2019)", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "PEC da Blindagem (set/2025)", vote: "SIM", description: "Aprovou mecanismo que protege políticos.", againstWorkers: true },
      { proposal: "Soltura Chiquinho Brazão", vote: "SIM", description: "Votou pela soltura.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 32,
    name: "Charles Fernandes",
    fullName: "Charles Fernandes",
    party: "PSD",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Previdência.",
    bio: "Base PSD. Incluído por votar contra a aposentadoria.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 33,
    name: "Paulo Magalhães",
    fullName: "Paulo Magalhães",
    party: "PSD",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Previdência e Teto.",
    bio: "Base PSD. Incluído por votar contra a aposentadoria.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 34,
    name: "Raimundo Costa",
    fullName: "Raimundo Costa",
    party: "PL",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Previdência.",
    bio: "Base PL. Incluído por votar contra a aposentadoria.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 35,
    name: "Jose Rocha",
    fullName: "Jose Rocha",
    party: "União Brasil",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Previdência.",
    bio: "Base União. Incluído por votar contra a aposentadoria.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 40,
    name: "Alex Santana",
    fullName: "Alex Santana",
    party: "Republicanos",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Deputado Federal. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 41,
    name: "Abílio Santana",
    fullName: "Abílio Santana",
    party: "PL",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Ex-Deputado Federal. Pastor. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 42,
    name: "Cacá Leão",
    fullName: "Cacá Leão",
    party: "PP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência, Trabalhista e Teto.",
    bio: "Ex-Deputado Federal. Votou a favor das principais reformas contra trabalhadores.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou contra os direitos trabalhistas (CLT).", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou saúde e educação.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal", vote: "SIM", description: "Votou a favor.", againstWorkers: true },
      { proposal: "Terceirização Irrestrita", vote: "SIM", description: "Votou a favor.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 43,
    name: "Igor Kannário",
    fullName: "Igor Kannário",
    party: "União Brasil",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Ex-Deputado Federal. Cantor. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 44,
    name: "João Roma",
    fullName: "João Roma",
    party: "PL",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Ex-Deputado Federal. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 45,
    name: "José Nunes",
    fullName: "José Nunes",
    party: "PSD",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência e Teto.",
    bio: "Ex-Deputado Federal. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 46,
    name: "Dayane Pimentel",
    fullName: "Dayane Pimentel",
    party: "União Brasil",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Ex-Deputada Federal. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 47,
    name: "Ronaldo Carletto",
    fullName: "Ronaldo Carletto",
    party: "Avante",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Previdência, Trabalhista e Teto.",
    bio: "Ex-Deputado Federal. Votou a favor das Reformas da Previdência e Trabalhista.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true },
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou contra os direitos trabalhistas (CLT).", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou saúde e educação.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal", vote: "SIM", description: "Votou a favor.", againstWorkers: true },
      { proposal: "Terceirização Irrestrita", vote: "SIM", description: "Votou a favor.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 48,
    name: "Tito",
    fullName: "Carlos Tito",
    party: "PT",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Ex-Deputado Federal. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 49,
    name: "Uldurico Junior",
    fullName: "Uldurico Pinto Junior",
    party: "PSDB",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma da Previdência.",
    bio: "Ex-Deputado Federal. Votou a favor da Reforma da Previdência.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma da Previdência", vote: "SIM", description: "Votou contra os trabalhadores.", againstWorkers: true }
    ],
    history: []
  },
  // --- NOVAS INCLUSÕES (VOTARAM SIM NA TRABALHISTA 2017) ---
  {
    id: 50,
    name: "José Carlos Aleluia",
    fullName: "José Carlos Aleluia",
    party: "União Brasil",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma Trabalhista, Teto e Pré-Sal.",
    bio: "Ex-Deputado Federal. Votou a favor da Reforma Trabalhista que retirou direitos.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou contra os direitos trabalhistas (CLT).", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou saúde e educação.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal", vote: "SIM", description: "Votou a favor.", againstWorkers: true },
      { proposal: "Terceirização Irrestrita", vote: "SIM", description: "Votou a favor.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 52,
    name: "Tia Eron",
    fullName: "Eronildes Vasconcelos Carvalho",
    party: "Republicanos",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma Trabalhista (2017) e Teto.",
    bio: "Ex-Deputada Federal. Votou a favor da Reforma Trabalhista.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou contra os direitos trabalhistas (CLT).", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos.", againstWorkers: true },
      { proposal: "Terceirização Irrestrita", vote: "SIM", description: "Votou a favor.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 53,
    name: "Antônio Imbassahy",
    fullName: "Antônio Imbassahy",
    party: "PSDB",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma Trabalhista, Teto e Pré-Sal.",
    bio: "Ex-Deputado Federal e ex-Ministro. Votou a favor da Reforma Trabalhista.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou contra os direitos trabalhistas (CLT).", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou saúde e educação.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal", vote: "SIM", description: "Votou a favor.", againstWorkers: true },
      { proposal: "Terceirização Irrestrita", vote: "SIM", description: "Votou a favor.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 54,
    name: "João Gualberto",
    fullName: "João Gualberto",
    party: "PSDB",
    type: "federal",
    status: "votou_contra",
    integrityScore: 5,
    headline: "Votou SIM na Reforma Trabalhista, Teto e Pré-Sal.",
    bio: "Ex-Deputado Federal. Votou a favor da Reforma Trabalhista.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Reforma Trabalhista", vote: "SIM", description: "Votou contra os direitos trabalhistas (CLT).", againstWorkers: true },
      { proposal: "PEC do Teto dos Gastos", vote: "SIM", description: "Congelou investimentos.", againstWorkers: true },
      { proposal: "Entrega do Pré-Sal", vote: "SIM", description: "Votou a favor.", againstWorkers: true },
      { proposal: "Terceirização Irrestrita", vote: "SIM", description: "Votou a favor.", againstWorkers: true }
    ],
    history: []
  },

  // --- LISTA NACIONAL (ISRAEL / TRUMP) ---
  {
    id: 200,
    name: "Sóstenes Cavalcante",
    fullName: "Sóstenes Cavalcante",
    party: "PL-RJ",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Autor da moção de apoio a Trump e Presidiu acordos com Israel.",
    bio: "Deputado Federal (PL-RJ). Ativista central do alinhamento com a direita internacional.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Autor da moção de apoio.", againstWorkers: true },
      { proposal: "Acordos Israel", vote: "SIM", description: "Presidiu acordos durante conflito.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 201,
    name: "Filipe Barros",
    fullName: "Filipe Barros",
    party: "PL-PR",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Autor de moção pró-Israel e Presidente da CREDN (voto Trump).",
    bio: "Deputado Federal (PL-PR). Atuação focada em pautas ideológicas internacionais.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Autor da moção de apoio irrestrito.", againstWorkers: true },
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Voto favorável na CREDN.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 202,
    name: "Gustavo Gayer",
    fullName: "Gustavo Gayer",
    party: "PL-GO",
    type: "federal",
    status: "investigado",
    integrityScore: 1,
    headline: "Investigado por Fake News. Assinou moção Trump e integra Frente Israel.",
    bio: "Deputado Federal (PL-GO). Investigado pela PF (Op. Discalculia).",
    patrimony: "TSE",
    processes: [
      { name: "Op. Discalculia", type: "Desvio de Verba", status: "Investigado", description: "Desvio de cota parlamentar e falsificação.", severity: "high" }
    ],
    votes: [
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Assinou moção de apoio.", againstWorkers: true },
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Membro da Frente Parlamentar Brasil-Israel.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 203,
    name: "Marcel van Hattem",
    fullName: "Marcel van Hattem",
    party: "NOVO-RS",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Autor de moção pró-Israel e apoio ideológico a Trump.",
    bio: "Deputado Federal (NOVO-RS). Liderança da direita liberal.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Autor de moção contra Hamas/Palestina.", againstWorkers: true },
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Apoio ideológico declarado.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 204,
    name: "Luiz Philippe O. B.",
    fullName: "Luiz Philippe de Orléans e Bragança",
    party: "PL-SP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Subscritor de moção Trump e membro da CREDN.",
    bio: "Deputado Federal (PL-SP).",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Subscritor da moção.", againstWorkers: true },
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Alinhamento na comissão de relações exteriores.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 205,
    name: "Delegado Caveira",
    fullName: "Lenildo Mendes dos Santos",
    party: "PL-PA",
    type: "federal",
    status: "votou_contra",
    integrityScore: 2,
    headline: "Exibiu bandeira de Trump no plenário e integra Frente Israel.",
    bio: "Deputado Federal (PL-PA).",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Exibiu bandeira estrangeira no plenário.", againstWorkers: true },
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Membro da Frente Parlamentar.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 206,
    name: "Sargento Fahur",
    fullName: "Gilson Cardoso Fahur",
    party: "PSD-PR",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Exibiu bandeira de Trump e integra Frente Israel.",
    bio: "Deputado Federal (PSD-PR).",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Exibiu bandeira estrangeira no plenário.", againstWorkers: true },
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Membro da Frente Parlamentar.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 207,
    name: "Alexandre Ramagem",
    fullName: "Alexandre Ramagem",
    party: "PL-RJ",
    type: "federal",
    status: "investigado",
    integrityScore: 1,
    headline: "Investigado na 'Abin Paralela'. Votou moção Trump.",
    bio: "Deputado Federal (PL-RJ). Ex-diretor da ABIN.",
    patrimony: "TSE",
    processes: [
       { name: "Abin Paralela", type: "Espionagem Ilegal", status: "Investigado", description: "Monitoramento ilegal de autoridades e jornalistas.", severity: "high" }
    ],
    votes: [
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Votou a favor da moção.", againstWorkers: true },
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Membro da Frente Parlamentar.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 208,
    name: "General Girão",
    fullName: "Eliéser Girão Monteiro Filho",
    party: "PL-RN",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Votou moção Trump e integra Frente Israel.",
    bio: "Deputado Federal (PL-RN). General da reserva.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Votou a favor da moção.", againstWorkers: true },
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Membro da Frente Parlamentar.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 209,
    name: "Eduardo Bolsonaro",
    fullName: "Eduardo Nantes Bolsonaro",
    party: "PL-SP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 2,
    headline: "Ativista central Pró-Trump e Israel. Articulador internacional.",
    bio: "Deputado Federal (PL-SP). Filho de Jair Bolsonaro. Articula alianças de extrema-direita.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Ativista central da causa e moções.", againstWorkers: true },
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Ativista central da causa.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 210,
    name: "Paulo Bilynskyj",
    fullName: "Paulo Bilynskyj",
    party: "PL-SP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 2,
    headline: "Moções pró-Israel e ato com bandeira de Trump.",
    bio: "Deputado Federal (PL-SP). Delegado.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Autor/Apoiador de moções.", againstWorkers: true },
      { proposal: "Apoio a Donald Trump", vote: "SIM", description: "Ato com bandeira de Trump.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 211,
    name: "Adriana Ventura",
    fullName: "Adriana Ventura",
    party: "NOVO-SP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Autora de moção de pesar por Israel (2023).",
    bio: "Deputada Federal (NOVO-SP).",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Autora de moção de apoio a Israel.", againstWorkers: true }
    ],
    history: []
  },
  {
    id: 212,
    name: "Marcos Pereira",
    fullName: "Marcos Pereira",
    party: "Republicanos-SP",
    type: "federal",
    status: "votou_contra",
    integrityScore: 3,
    headline: "Autor da moção de repúdio ao Hamas e apoio a Israel.",
    bio: "Deputado Federal (Republicanos-SP). Bispo da IURD.",
    patrimony: "TSE",
    processes: [],
    votes: [
      { proposal: "Apoio a Israel (Gaza)", vote: "SIM", description: "Autor da moção principal de apoio.", againstWorkers: true }
    ],
    history: []
  }
];

export const ALERTS: Alert[] = [
  {
    id: 1,
    date: "13/02/2026",
    title: "Caso Binho Galinha",
    description: "STF (Min. Zanin) nega habeas corpus em fevereiro. Deputado segue preso.",
    type: "urgent"
  },
  {
    id: 2,
    date: "02/02/2026",
    title: "ALBA: Presidência",
    description: "Adolfo Menezes afastado por liminar do STF. Ivana Bastos assume.",
    type: "urgent"
  },
  {
    id: 3,
    date: "13/01/2026",
    title: "Op. Overclean - 9ª Fase",
    description: "PF cumpre busca no apartamento de Félix Mendonça Jr. R$ 24mi bloqueados.",
    type: "urgent"
  },
  {
    id: 4,
    date: "20/02/2026",
    title: "Relatório Transparência",
    description: "Novo relatório aponta 21,6% dos deputados com pendências judiciais.",
    type: "info"
  }
];
