import livingImg from '../assets/images/luxury_apartment_living_1789843329463.jpg';
import suiteImg from '../assets/images/apartment_master_suite_1789843341250.jpg';
import balconyImg from '../assets/images/apartment_balcony_gourmet_1789843352486.jpg';
import { Amenity, ApartmentSpec, FaqItem, FloorPlan, GalleryImage } from '../types';

export const FORM_URL = 'https://forms.gle/cWYRoUiVcntdmMQZ9';

export const APARTMENT_INFO = {
  name: 'Residencial Lumina Privilège',
  tagline: 'O ápice da sofisticação e bem-estar no coração dos Jardins',
  priceFormatted: 'R$ 3.850.000',
  condoFee: 'R$ 2.400 / mês',
  iptu: 'R$ 980 / mês',
  location: 'Rua Bela Cintra, Jardins — São Paulo, SP',
  status: 'Pronto para Morar',
  deliveryYear: 'Imóvel Novo — Nunca Habitado',
  whatsappDirect: '5511999998888',
  highlights: [
    '218 m² privativos com planta inteligente',
    '3 amplas suítes com persianas automatizadas',
    'Varanda gourmet com churrasqueira integrada ao living',
    '3 vagas de garagem determinadas + depósito privativo',
    'Hall privativo com elevador biométrico codificado'
  ]
};

export const APARTMENT_SPECS: ApartmentSpec[] = [
  {
    icon: 'Maximize',
    label: 'Área Privativa',
    value: '218 m²',
    detail: 'Planta livre sem pilares centrais'
  },
  {
    icon: 'BedDouble',
    label: 'Dormitórios',
    value: '3 Suítes',
    detail: 'Master com walk-in closet e hidro'
  },
  {
    icon: 'Car',
    label: 'Vagas de Garagem',
    value: '3 Vagas',
    detail: 'Demarcadas + ponto para carro elétrico'
  },
  {
    icon: 'Flame',
    label: 'Varanda Gourmet',
    value: 'Churrasqueira',
    detail: 'Integrada à cozinha e ao living'
  },
  {
    icon: 'Sun',
    label: 'Posição Solar',
    value: 'Face Norte',
    detail: 'Iluminação natural e ventilação cruzada'
  },
  {
    icon: 'ShieldCheck',
    label: 'Segurança',
    value: '24 Horas',
    detail: 'Guarita blindada e controle biométrico'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    title: 'Living Integrado com Pé-Direito Duplo',
    category: 'living',
    url: livingImg,
    description: 'Sala de estar ampla com acabamentos em mármore travertino e janelas do chão ao teto com vista para a copa das árvores.'
  },
  {
    id: '2',
    title: 'Suíte Master com Closet',
    category: 'suite',
    url: suiteImg,
    description: 'Espaço íntimo refinado, marcenaria planejada, iluminação indireta aconchegante e persianas motorizadas black-out.'
  },
  {
    id: '3',
    title: 'Varanda Gourmet & Lounge Externo',
    category: 'gourmet',
    url: balconyImg,
    description: 'Varanda generosa com churrasqueira a carvão, espaço para mesa de 8 lugares e lounge externo com vista para o pôr do sol.'
  },
  {
    id: '4',
    title: 'Cozinha Gourmet com Ilha em Quartzo',
    category: 'gourmet',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Bancada em quartzo calacatta, cuba dupla em inox, cooktop embutido e integração funcional com a copa e área gourmet.'
  },
  {
    id: '5',
    title: 'Sala de Banho Suíte Master',
    category: 'suite',
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80',
    description: 'Banheiro revestido em porcelanato nobre, banheira de imersão freestanding, bancada dupla e chuveiro duplo no teto.'
  },
  {
    id: '6',
    title: 'Piscina de Borda Infinita com Deck Solarium',
    category: 'lazer',
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    description: 'Piscina aquecida semiolímpica com raia de 25m, prainha infantil, deck molhado e espreguiçadeiras com paisagismo exuberante.'
  },
  {
    id: '7',
    title: 'Fachada Contemporânea com Arquitetura Autoral',
    category: 'fachada',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Projeto assinado por renomado escritório de arquitetura, com brises de madeira, vidro reflexivo e jardins suspensos.'
  },
  {
    id: '8',
    title: 'Fitness Center com Equipamentos de Alta Performance',
    category: 'lazer',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    description: 'Academia completa climatizada, sala de pilates e yoga com equipamentos de ponta e vista para o jardim privativo.'
  }
];

export const AMENITIES: Amenity[] = [
  {
    icon: 'Waves',
    title: 'Piscina Aquecida & Deck Molhado',
    description: 'Raia de 25 metros, piscina infantil, solarium e lounge de descanso cercado por exuberante paisagismo.',
    tag: 'Clube Exclusivo'
  },
  {
    icon: 'Dumbbell',
    title: 'Fitness Center Climatizado',
    description: 'Aparelhos de musculação e cárdio de última geração, espaço reservado para pilates funcional e personal trainer.',
    tag: 'Saúde & Bem-Estar'
  },
  {
    icon: 'Sparkles',
    title: 'SPA & Sauna Seca / Úmida',
    description: 'Espaço relax com sala de massagem, jacuzzi de hidromassagem aquecida e salas de vapor para descompressão.',
    tag: 'Relaxamento'
  },
  {
    icon: 'Wine',
    title: 'Salão de Festas & Espaço Gourmet',
    description: 'Mobiliário assinado, adega climatizada, cozinha de apoio completa para banquetes e recepções de alto padrão.',
    tag: 'Celebrações'
  },
  {
    icon: 'Briefcase',
    title: 'Coworking Privativo & Sala de Reuniões',
    description: 'Estações individuais de trabalho com internet dedicada de fibra óptica e sala de conferências isolada acusticamente.',
    tag: 'Produtividade'
  },
  {
    icon: 'Smile',
    title: 'Brinquedoteca & Playground Lúdico',
    description: 'Área infantil segura, monitorada por câmeras e com brinquedos pedagógicos sustentáveis em madeira tratada.',
    tag: 'Família'
  },
  {
    icon: 'Dog',
    title: 'Pet Place & Espaço Pet Care',
    description: 'Área cercada com gramado para recreação pet e estação para banho e secagem pós-passeio.',
    tag: 'Pet Friendly'
  },
  {
    icon: 'Shield',
    title: 'Portaria Blindada & Segurança Avançada',
    description: 'Guarita nível III-A, clausura para pedestres e veículos, biometria facial e gerador full que atende as unidades.',
    tag: 'Segurança Total'
  }
];

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: 'planta-1',
    name: 'Opção 1: Planta 3 Suítes + Home Office (Padrão)',
    area: '218 m² privativos',
    bedrooms: '3 Suítes',
    suites: 'Suíte Master com Closet Duplo + 2 Suítes Plenas',
    parking: '3 vagas demarcadas + Depósito no Subsolo',
    description: 'Perfeita para famílias que buscam privacidade total com suítes isoladas da área social, além de um home office silencioso e área de serviço independente com dependência de funcionários.',
    features: [
      'Living para 3 ambientes integrado à varanda',
      'Suíte master com 28m² e hidromassagem',
      'Varanda gourmet com churrasqueira a carvão e bancada de apoio',
      'Lavabo social de apoio',
      'Elevador privativo com acesso biométrico',
      'Área técnica dedicada para ar-condicionado multi-split VRF'
    ]
  },
  {
    id: 'planta-2',
    name: 'Opção 2: Planta Living Expandido (2 Super Suítes)',
    area: '218 m² privativos',
    bedrooms: '2 Super Suítes',
    suites: 'Suíte Master Expandida + Suíte Júnior',
    parking: '3 vagas demarcadas + Depósito no Subsolo',
    description: 'Ideal para quem privilegia receber amigos e familiares, com living estendido de mais de 75m² contíguo à varanda panorâmica e closet senhor e senhora privativo.',
    features: [
      'Living panorâmico ampliado com espaço para adega e lounge bar',
      'Suíte Master Dupla com 2 closets independentes',
      'Banheiro master com cubas e duchas duplas de teto',
      'Cozinha com conceito aberto e ilha central gourmet',
      'Despensa espaçosa e prataria planejada',
      'Varanda fechada com cortina de vidro retrátil'
    ]
  }
];

export const NEIGHBORHOOD_POINTS = [
  { name: 'Clube Paulistano', time: '4 min a pé', category: 'Lazer & Esportes' },
  { name: 'Rua Oscar Freire (Boutiques & Cafés)', time: '5 min a pé', category: 'Gastronomia & Compras' },
  { name: 'Colégio Dante Alighieri', time: '6 min de carro', category: 'Educação' },
  { name: 'Hospital Sírio-Libanês / Albert Einstein', time: '8 min de carro', category: 'Saúde' },
  { name: 'Parque Ibirapuera', time: '7 min de carro', category: 'Natureza & Lazer' },
  { name: 'Restaurantes Michelin (D.O.M, Fasano, Maní)', time: '3 a 6 min', category: 'Alta Gastronomia' }
];

export const FAQS: FaqItem[] = [
  {
    question: 'O imóvel está pronto para morar ou em construção?',
    answer: 'O Residencial Lumina Privilège é um imóvel novo, recém-entregue e nunca habitado. As chaves estão disponíveis para entrega imediata após a conclusão do processo de aquisição e aprovação cadastral.'
  },
  {
    question: 'Como faço para agendar uma visita presencial?',
    answer: 'Basta clicar no botão "Tenho Interesse" nesta página e preencher o breve formulário. Nossa equipe de corretores especialistas entrará em contato em menos de 15 minutos pelo WhatsApp para alinhar o melhor dia e horário para a sua visita com recepção exclusiva.'
  },
  {
    question: 'Quais são as condições de pagamento e financiamento aceitas?',
    answer: 'Aceitamos financiamento com todos os principais bancos (Itaú, Bradesco, Santander, Caixa, BTG Pactual) com taxas de crédito imobiliário especiais. Também analisamos propostas com fluxo direto com a incorporadora e permuta de imóvel de menor valor após avaliação técnica.'
  },
  {
    question: 'As vagas de garagem são livres ou presas? Há ponto para carro elétrico?',
    answer: 'Todas as 3 vagas são determinadas, livres e de fácil manobra. Cada unidade conta com infraestrutura individual de medição para carregador de veículos elétricos (Wallbox) na vaga privativa.'
  },
  {
    question: 'Qual é o valor estimado de condomínio e IPTU?',
    answer: 'O condomínio mensal está fixado em R$ 2.400,00 (já incluindo a manutenção completa do lazer, gerador, portaria blindada e segurança patrimonial 24h). O IPTU anual proporcional é de aproximadamente R$ 980,00 por parcela.'
  }
];
