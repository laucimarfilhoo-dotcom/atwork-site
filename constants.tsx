import { MapPin, Mail, Building2, Users, FileText, Globe } from 'lucide-react';
import { Service, Plan, BlogPost } from './types';

export const COMPANY_NAME = "Atwork Office";
export const COMPANY_ADDRESS = "Rua Dr. Gilberto Studart, 55, Torre Sul - Sala 1018 - Cocó, Fortaleza-CE";
export const COMPANY_PHONE = "(85) 99129-1558";
export const COMPANY_EMAIL = "atendimento@atworkoffice.com.br";
export const WHATSAPP_LINK = "https://wa.me/5585991291558?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20da%20Atwork.";

export const SERVICES: Service[] = [
  {
    id: 'fiscal',
    title: 'Endereço Fiscal',
    description: 'Regularize sua empresa com um endereço prestigiado em Fortaleza para registro no CNPJ e órgãos públicos.',
    icon: FileText
  },
  {
    id: 'comercial',
    title: 'Endereço Comercial',
    description: 'Utilize nosso endereço em seu site, cartões de visita e materiais de marketing para transmitir credibilidade.',
    icon: MapPin
  },
  {
    id: 'correspondencia',
    title: 'Gestão de Correspondência',
    description: 'Recebemos, notificamos e armazenamos suas correspondências com total segurança e agilidade.',
    icon: Mail
  },
  {
    id: 'reuniao',
    title: 'Salas de Reunião',
    description: 'Espaços modernos e equipados para receber seus clientes e realizar reuniões presenciais quando precisar.',
    icon: Users
  },
  {
    id: 'virtual',
    title: 'Escritório Virtual',
    description: 'A solução completa que une endereço fiscal, comercial e atendimento telefônico personalizado.',
    icon: Building2
  },
  {
    id: 'coworking',
    title: 'Coworking',
    description: 'Estações de trabalho compartilhadas em ambiente climatizado e com internet de alta velocidade.',
    icon: Globe
  }
];

export const PLANS: Plan[] = [
  {
    id: 'annual',
    name: 'Fiscal Anual',
    price: 'R$ 50,00',
    period: '/mês*',
    features: [
      'Contrato Anual (R$ 600,00)',
      'Endereço Fiscal para CNPJ',
      'Endereço Comercial',
      'Notificação de Correspondência',
      'Desconto em Sala de Reunião'
    ],
    recommended: true
  },
  {
    id: 'monthly',
    name: 'Fiscal Mensal',
    price: 'R$ 100,00',
    period: '/mês',
    features: [
      'Pagamento Mensal',
      'Endereço Fiscal para CNPJ',
      'Endereço Comercial',
      'Notificação de Correspondência',
      'Gestão de Correspondência'
    ]
  },
  {
    id: 'coworking',
    name: 'Coworking + Virtual',
    price: 'R$ 400,00',
    period: '/mês',
    features: [
      'Estação de Coworking Liberada',
      '4h de Sala de Reunião Inclusas',
      'Endereço Fiscal e Comercial',
      'Internet de Alta Velocidade',
      'Café e Água'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Por que sua empresa precisa de um Endereço Fiscal em Fortaleza?',
    excerpt: 'Entenda a importância de separar o endereço residencial do empresarial e como isso impacta na credibilidade do seu negócio.',
    date: '15 Out 2023',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    category: 'Legislação'
  },
  {
    id: '2',
    title: 'Economize custos com um Escritório Virtual',
    excerpt: 'Descubra como reduzir despesas operacionais em até 70% migrando sua estrutura física para um escritório virtual no Cocó.',
    date: '22 Out 2023',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    category: 'Gestão'
  },
  {
    id: '3',
    title: 'Como abrir empresa no Ceará: Guia Rápido',
    excerpt: 'O passo a passo para regularizar seu negócio na Junta Comercial do Ceará e a importância do endereço fiscal nesse processo.',
    date: '05 Nov 2023',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    category: 'Empreendedorismo'
  }
];