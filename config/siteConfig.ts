import { SiteData } from '../types/siteData';

export const defaultSiteData: SiteData = {
  id: 'local-site',
  domain: 'localhost',
  settings: {
    companyName: 'Geradores Brasil',
    slogan: 'Geradores de alta potência com instalação inclusa. Atendemos eventos, obras e indústrias.',
    logoUrl: 'https://geradoresbrasil.com.br/logo.png',
    contact: {
      phone: '(21) 2222-3333',
      whatsapp: '(21) 99999-8888',
      email: 'contato@geradoresbrasil.com.br',
      address: { street: 'Av. das Américas, 500', neighborhood: 'Barra da Tijuca', city: 'Rio de Janeiro', state: 'RJ', zipCode: '22000-000', country: 'BR' }
    },
    socialMedia: {
      instagram: 'https://instagram.com/geradoresbrasil',
      facebook: 'https://facebook.com/geradoresbrasil',
      googleMyBusiness: 'https://g.page/geradoresbrasil'
    },
    colors: { 
      primary: '#0ea5e9', // Sky 500
      secondary: '#64748b', // Slate 500
      accent: '#f59e0b', // Amber 500
      background: '#f8fafc', // Slate 50
      foreground: '#0f172a' // Slate 900
    },
    openingHours: 'Segunda a Sexta das 07:00 às 18:00',
    priceRange: '$$$',
  },
  pages: {
    home: {
      hero: { 
        title: 'Aluguel de Geradores no Rio de Janeiro: Atendimento Imediato', 
        subtitle: 'Sua operação não pode parar. Garantimos energia em até 2 horas com instalação inclusa, monitoramento 24h e frota própria. Atendemos emergências, eventos e obras.', 
        ctaText: 'Solicitar Orçamento Urgente', 
        ctaLink: '/contato',
        backgroundImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1920&auto=format&fit=crop'
      },
      about: { 
        title: 'Por que escolher a Geradores Brasil?', 
        description: 'Há mais de 10 anos atendendo Rio de Janeiro e região com excelência. Nossa missão é resolver seu problema de energia com rapidez, transparência e total garantia de funcionamento. Não deixamos você no escuro.', 
        highlights: [
          { icon: 'Clock', value: '24h', label: 'Plantão Técnico' },
          { icon: 'Users', value: '1.5k+', label: 'Clientes Atendidos' },
          { icon: 'Star', value: '4.9', label: 'Avaliação Média' },
          { icon: 'Shield', value: '100%', label: 'Garantia de Energia' }
        ] 
      },
      services: { title: 'Nossos Serviços', subtitle: 'Potência e confiabilidade: Soluções completas para sua residência, comércio ou indústria' },
      contact: { title: 'Fale Conosco Agora', subtitle: 'Orçamento grátis e sem compromisso. Equipe pronta para atender hoje!', formTitle: 'Garanta sua Energia Agora' },
    },
  },
  services: [
    { 
      id: '1', 
      slug: 'gerador-20kva', 
      name: 'Gerador 20kVA', 
      headline: 'Gerador 20kVA no Rio de Janeiro - Ideal para Pequenos Negócios', 
      description: 'Precisa de um gerador compacto e eficiente? O modelo de 20kVA é a solução perfeita para pequenos comércios, food trucks, e residências. A Geradores Brasil oferece equipamentos revisados, com baixo consumo de combustível e nível de ruído reduzido. Garantimos a instalação rápida para que você não perca vendas nem conforto.', 
      shortDescription: 'Ideal para comércios, residências e pequenos eventos. Baixo consumo e instalação rápida.', 
      benefits: ['Instalação em até 2 horas', 'Autonomia de 12 horas', 'Baixo nível de ruído', 'Cabeamento incluso'], 
      howItWorks: [
        { number: 1, title: 'Contato', description: 'Chame no WhatsApp e receba a cotação imediata.' },
        { number: 2, title: 'Logística', description: 'Entregamos e instalamos no seu endereço.' },
        { number: 3, title: 'Operação', description: 'Equipamento pronto para uso com tanque cheio.' }
      ], 
      faqs: [
        { question: 'O que o 20kVA suporta?', answer: 'Suporta ar-condicionado, geladeiras, computadores e iluminação básica.' },
        { question: 'Qual o consumo?', answer: 'Média de 3 a 4 litros por hora, dependendo da carga.' }
      ], 
      ctaText: 'Cotar 20kVA Agora',
      image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '2', 
      slug: 'gerador-50kva', 
      name: 'Gerador 50kVA', 
      headline: 'Gerador 50kVA Potente - Para Obras e Eventos Médios', 
      description: 'Segurança energética para sua obra ou evento corporativo. O gerador de 50kVA suporta múltiplos equipamentos simultâneos, garantindo estabilidade para som, iluminação e maquinário leve. Nossos técnicos realizam o dimensionamento de carga para garantir que nada falhe durante sua operação.', 
      shortDescription: 'Robustez para obras médias, restaurantes e eventos corporativos. Estabilidade garantida.', 
      benefits: ['Suporta picos de energia', 'Tanque de alta capacidade', 'Manutenção preventiva inclusa', 'Técnico de plantão'], 
      howItWorks: [
        { number: 1, title: 'Dimensionamento', description: 'Avaliamos sua carga para garantir o modelo certo.' },
        { number: 2, title: 'Instalação', description: 'Montagem completa com quadro de transferência.' },
        { number: 3, title: 'Suporte', description: 'Monitoramento remoto durante o uso.' }
      ], 
      faqs: [
        { question: 'Serve para solda?', answer: 'Sim, suporta máquinas de solda e betoneiras.' },
        { question: 'Precisa de operador?', answer: 'Opcional, mas oferecemos treinamento básico na entrega.' }
      ], 
      ctaText: 'Cotar 50kVA Agora',
      image: 'https://images.unsplash.com/photo-1581094794329-cd1096a7a5e1?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '3', 
      slug: 'gerador-100kva', 
      name: 'Gerador 100kVA', 
      headline: 'Gerador 100kVA Industrial - Alta Performance', 
      description: 'Energia ininterrupta para indústrias, supermercados e grandes edifícios. O gerador de 100kVA é projetado para regime contínuo ou de emergência. Com a Geradores Brasil, você tem a certeza de um equipamento moderno, com QTA (Quadro de Transferência Automática) que assume a carga em segundos após uma queda de energia.', 
      shortDescription: 'Alta capacidade para indústrias, mercados e condomínios. Acionamento automático.', 
      benefits: ['Acionamento automático (QTA)', 'Silenciado (carenado)', 'Monitoramento de telemetria', 'Contrato mensal flexível'], 
      howItWorks: [
        { number: 1, title: 'Visita Técnica', description: 'Análise local para instalação segura.' },
        { number: 2, title: 'Implantação', description: 'Instalação do QTA e testes de carga.' },
        { number: 3, title: 'Garantia', description: 'Manutenção full-service inclusa no contrato.' }
      ], 
      faqs: [
        { question: 'É cabinado?', answer: 'Sim, todos nossos modelos 100kVA são cabinados e silenciados.' },
        { question: 'Vocês abastecem?', answer: 'Podemos incluir gestão de abastecimento no contrato.' }
      ], 
      ctaText: 'Solicitar Orçamento 100kVA',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '4', 
      slug: 'gerador-250kva', 
      name: 'Gerador 250kVA', 
      headline: 'Gerador 250kVA - Potência Máxima para Grandes Demandas', 
      description: 'A solução definitiva para grandes eventos, hospitais e shopping centers. Nossos grupos geradores de 250kVA oferecem confiabilidade crítica. Trabalhamos com as melhores marcas do mercado (Caterpillar, Cummins), garantindo performance superior. Atendimento prioritário para locações deste porte.', 
      shortDescription: 'Potência crítica para hospitais, grandes eventos e shoppings. Confiabilidade total.', 
      benefits: ['Alta confiabilidade', 'Paralelismo disponível', 'Atendimento VIP 24h', 'Backup imediato'], 
      howItWorks: [
        { number: 1, title: 'Engenharia', description: 'Projeto elétrico temporário completo.' },
        { number: 2, title: 'Logística Pesada', description: 'Transporte com munck e posicionamento.' },
        { number: 3, title: 'Comissionamento', description: 'Testes rigorosos antes do início da operação.' }
      ], 
      faqs: [
        { question: 'Faz paralelismo?', answer: 'Sim, podemos somar potências conforme necessidade.' },
        { question: 'Qual o tamanho?', answer: 'Requer área externa ventilada de aprox. 4x1.5m.' }
      ], 
      ctaText: 'Solicitar Projeto 250kVA',
      image: 'https://images.unsplash.com/photo-1565515267326-b83321975e52?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '5', 
      slug: 'gerador-silencioso', 
      name: 'Gerador Silencioso', 
      headline: 'Gerador Silencioso para Filmagens e Áreas Residenciais', 
      description: 'Precisa de energia sem barulho? Nossa linha Silent é ideal para sets de filmagem, casamentos ao ar livre e obras noturnas em áreas residenciais. Tecnologia de isolamento acústico avançada que garante níveis de ruído abaixo de 75dB, permitindo a gravação de áudio direto ou o sono tranquilo dos vizinhos.', 
      shortDescription: 'Tecnologia Silent para filmagens e eventos noturnos. Ruído imperceptível.', 
      benefits: ['Super silenciado (<75dB)', 'Estabilidade para equipamentos sensíveis', 'Visual discreto', 'Cabos emborrachados'], 
      howItWorks: [
        { number: 1, title: 'Reserva', description: 'Agende com antecedência para garantir disponibilidade.' },
        { number: 2, title: 'Posicionamento', description: 'Instalamos onde o ruído incomode menos.' },
        { number: 3, title: 'Silêncio', description: 'Energia garantida sem atrapalhar seu som.' }
      ], 
      faqs: [
        { question: 'Atrapalha gravação?', answer: 'Não, é específico para audiovisual e eventos.' },
        { question: 'Tem fumaça?', answer: 'Baixa emissão, motores modernos eletrônicos.' }
      ], 
      ctaText: 'Cotar Gerador Silencioso',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop'
    },
    { 
      id: '6', 
      slug: 'gerador-eventos', 
      name: 'Gerador para Eventos', 
      headline: 'Energia para Eventos e Shows - O Show Não Pode Parar', 
      description: 'Especialistas em energia temporária para entretenimento. Oferecemos o kit completo: gerador, cabeamento protegido, passadeiras de segurança e quadros de distribuição. Nossa equipe acompanha o evento do início ao fim (stand-by) para garantir que luz e som funcionem perfeitamente. Experiência em casamentos, shows e feiras.', 
      shortDescription: 'Kit completo para eventos: gerador, cabos, passadeiras e técnico presencial.', 
      benefits: ['Técnico presencial (stand-by)', 'Passadeiras de segurança', 'Cabos extras inclusos', 'Backup de emergência'], 
      howItWorks: [
        { number: 1, title: 'Planejamento', description: 'Reunião técnica com produção do evento.' },
        { number: 2, title: 'Montagem', description: 'Instalação antecipada para passagem de som.' },
        { number: 3, title: 'Plantão', description: 'Técnico no local durante todo o evento.' }
      ], 
      faqs: [
        { question: 'Inclui combustível?', answer: 'Sim, entregamos tanque cheio para o período.' },
        { question: 'E se chover?', answer: 'Equipamentos preparados para uso ao tempo.' }
      ], 
      ctaText: 'Garantir Energia do Evento',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop'
    }
  ],
  locations: [
    { 
      id: '1', 
      slug: 'rio-de-janeiro-barra-da-tijuca', 
      neighborhood: 'Barra da Tijuca', 
      city: 'Rio de Janeiro', 
      headline: 'Aluguel de Geradores na Barra da Tijuca - Chegamos Rápido', 
      description: 'Sua empresa ou evento na Barra precisa de energia agora? Temos base técnica no bairro para atendimento expresso. Aluguel de geradores na Barra da Tijuca com o melhor preço e instalação imediata para condomínios, shoppings e eventos na orla. Solicite orçamento grátis.' 
    },
    { 
      id: '2', 
      slug: 'rio-de-janeiro-recreio', 
      neighborhood: 'Recreio', 
      city: 'Rio de Janeiro', 
      headline: 'Aluguel de Geradores no Recreio dos Bandeirantes', 
      description: 'Atendimento especializado para obras e eventos no Recreio. A Geradores Brasil oferece locação de equipamentos silenciosos ideais para a região residencial e casas de festas do bairro. Entrega rápida e suporte técnico 24h no Recreio.' 
    },
    { 
      id: '3', 
      slug: 'rio-de-janeiro-jacarepagua', 
      neighborhood: 'Jacarepaguá', 
      city: 'Rio de Janeiro', 
      headline: 'Aluguel de Geradores em Jacarepaguá e Região Olímpica', 
      description: 'Atendemos toda a extensão de Jacarepaguá, da Freguesia ao RioCentro. Soluções robustas para indústrias farmacêuticas, estúdios e grandes condomínios da região. Garanta a produtividade da sua empresa com nossos geradores de alta potência.' 
    },
    { 
      id: '4', 
      slug: 'rio-de-janeiro-centro', 
      neighborhood: 'Centro', 
      city: 'Rio de Janeiro', 
      headline: 'Aluguel de Geradores no Centro do Rio - Plantão 24h', 
      description: 'Atendimento corporativo para o Centro do Rio. Geradores para prédios comerciais, bancos e manutenções prediais programadas. Possuímos licenças para circulação e operação na área central, inclusive aos finais de semana e feriados.' 
    },
    { 
      id: '5', 
      slug: 'rio-de-janeiro-meier', 
      neighborhood: 'Méier', 
      city: 'Rio de Janeiro', 
      headline: 'Aluguel de Geradores no Méier e Zona Norte', 
      description: 'Referência em aluguel de geradores na Zona Norte. Do Méier a Madureira, levamos energia segura para seu comércio ou festa. Preços competitivos e facilidade de pagamento para comerciantes locais. Não perca mercadoria por falta de luz.' 
    },
    { 
      id: '6', 
      slug: 'rio-de-janeiro-niteroi', 
      neighborhood: 'Niterói', 
      city: 'Rio de Janeiro', 
      headline: 'Aluguel de Geradores em Niterói e Icaraí', 
      description: 'Atravessamos a ponte para te atender! Serviço completo de locação de geradores em Niterói, Icaraí e Região Oceânica. Frota exclusiva para atendimento do lado de lá da poça, garantindo pontualidade e excelência técnica.' 
    }
  ],
  seo: {
    defaultTitle: 'Geradores Brasil | Aluguel de Geradores em Rio de Janeiro',
    titleTemplate: '%s | Geradores Brasil',
    defaultDescription: 'Aluguel de geradores no RJ. 20kva a 500kva. Instalação inclusa. Solicite orçamento!',
    siteUrl: 'https://www.geradoresbrasil.com.br',
    ogImage: 'https://geradoresbrasil.com.br/og-image.jpg',
    schema: {
      type: 'LocalBusiness',
      aggregateRating: { ratingValue: '4.9', reviewCount: '584' }
    },
    pages: {
      home: {
        title: 'Geradores Brasil | Aluguel de Geradores em Rio de Janeiro',
        description: 'Aluguel de geradores no RJ. 20kva a 500kva. Instalação inclusa. Solicite orçamento!',
      },
      sobre: {
        title: 'Sobre Nós',
        description: 'Conheça a Geradores Brasil, especialista em aluguel de geradores em Rio de Janeiro.',
      },
      contato: {
        title: 'Contato',
        description: 'Entre em contato com a Geradores Brasil. Orçamento grátis para aluguel de geradores em Rio de Janeiro.',
      },
      servicos: {
        title: 'Nossos Serviços',
        description: 'Confira todos os serviços de aluguel de geradores oferecidos pela Geradores Brasil em Rio de Janeiro.',
      },
    },
  },
  media: { heroImages: [], serviceImages: {} },
};
