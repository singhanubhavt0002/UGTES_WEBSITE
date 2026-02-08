import React from 'react';
import { NavItem, Vertical, Feature, Stat, Client, ComplianceItem } from './types';
import { Globe, Award, ShieldCheck, TrendingUp, Briefcase, Factory, Wheat, HardHat, Warehouse } from 'lucide-react';

export const COMPANY_NAME = "UGTES";
export const COMPANY_FULL_NAME = "United Global Traders and Engineers";
export const DOMAIN = "ugtes.com";
export const CONTACT_EMAIL = "info@ugtes.com";
export const CONTACT_PHONE = "+91 88263 52089";
export const ADDRESS = "501, Prateek The Royal Cliff, Ghaziabad";
// Replace 'YOUR_FORM_ID' with your actual Formspree form ID (e.g., from https://formspree.io/)
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xlglvwdo";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { 
    label: 'Business Verticals', 
    path: '/verticals',
    subItems: [
      { label: 'Agro-Commodity Exports', path: '/verticals#agro' },
      { label: 'Industrial Equipment', path: '/verticals#industrial' },
      { label: 'Pre-Engineered Buildings', path: '/verticals#peb' },
      { label: 'Skilled Manpower', path: '/verticals#manpower' },
    ]
  },
  { label: 'Why UGTE?', path: '/why-us' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Global Trade & Engineering',
    subtitle: 'From India to the World. Your trusted partner in Agro-Commodities and Industrial Solutions.',
    cta: 'Our Verticals'
  },
  {
    image: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Industrial Equipment & Spares',
    subtitle: 'Supplying pumps, valves, and motors to Power, Cement, and Sugar industries.',
    cta: 'View Equipment'
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Infrastructure & Manpower',
    subtitle: 'Pre-Engineered Buildings (PEB) and skilled technical manpower for global projects.',
    cta: 'Learn More'
  }
];

export const BUSINESS_VERTICALS: Vertical[] = [
  {
    id: 'agro',
    title: 'Agro-Commodity Exports',
    shortDescription: 'Premium quality food products sourced directly from Indian farms.',
    fullDescription: 'We specialize in the export of high-quality agricultural commodities, ensuring food safety and compliance with global standards (FSSAI/APEDA). Our sourcing network covers the finest agricultural belts in India.',
    image: 'https://i.postimg.cc/QdrFmqr9/Agro.png',
    features: [
      'Refined & Raw Sugar (ICUMSA 45/100/150)',
      'Premium Basmati & Non-Basmati Rice',
      'Pulses (Toor, Moong, Chana)',
      'APEDA & FSSAI Compliant Supply Chain'
    ],
    icon: <Wheat className="w-6 h-6" />
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment & Spares',
    shortDescription: 'Critical machinery for Sugar, Power, and Cement industries.',
    fullDescription: 'We provide end-to-end engineering supply solutions. Our product range caters to heavy industries including Sugar, Water/Wastewater treatment, Power Generation, Cement, and Steel plants.',
    image: 'https://i.postimg.cc/8PbjcSLJ/Gemini-Generated-Image-iydprfiydprfiydp.png',
    features: [
      'Industrial Pumps & High-Pressure Valves',
      'Heavy Duty Gearboxes & Motors',
      'MCC Panels & Automation Systems',
      'Specialized Spares for Power & Cement Plants'
    ],
    icon: <Factory className="w-6 h-6" />
  },
  {
    id: 'peb',
    title: 'Pre-Engineered Buildings (PEB)',
    shortDescription: 'Modern structural solutions for warehouses and logistics.',
    fullDescription: 'Expert design, fabrication, and erection of Pre-Engineered Buildings. We offer cost-effective and durable structural steel solutions tailored for industrial and commercial needs.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: [
      'Industrial Warehouses & Factories',
      'Logistics Parks & Distribution Centers',
      'Cold Storage Facilities',
      'Rapid Fabrication & Installation'
    ],
    icon: <Warehouse className="w-6 h-6" />
  },
  {
    id: 'manpower',
    title: 'Skilled Manpower Services',
    shortDescription: 'Deploying qualified technical workforce for global projects.',
    fullDescription: 'We bridge the talent gap by providing vetted, skilled, and certified manpower for construction, engineering, and maintenance projects globally.',
    image: 'https://i.postimg.cc/mkt8Dw66/Gemini-Generated-Image-lyke79lyke79lyke.png',
    features: [
      'Civil & Mechanical Construction Labor',
      'Fabrication Technicians & Welders',
      'Industrial Electricians & Instrument Techs',
      'Project Managers & Site Supervisors'
    ],
    icon: <HardHat className="w-6 h-6" />
  }
];

export const STRENGTHS: Feature[] = [
  {
    id: 's1',
    title: 'Diversified Capability',
    description: 'A unique blend of trading excellence and engineering prowess under one roof.',
    icon: <Globe className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's2',
    title: 'Export & Logistics',
    description: 'Deep expertise in handling complex global logistics and cross-border trade compliance.',
    icon: <TrendingUp className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's3',
    title: 'Strong Sourcing Base',
    description: 'Direct relationships with manufacturers and farmers ensuring competitive pricing.',
    icon: <Factory className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's4',
    title: 'Flexible Commercial Models',
    description: 'Adaptable engagement models tailored to client financial and operational needs.',
    icon: <Briefcase className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's5',
    title: 'Technical Understanding',
    description: 'Engineers leading the trade ensures correct specifications and reduced downtime.',
    icon: <Award className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's6',
    title: 'Quality Commitment',
    description: 'Zero compromise on quality, backed by rigorous inspection and compliance checks.',
    icon: <ShieldCheck className="w-8 h-8 text-accent-500" />
  }
];

export const CLIENTS: Client[] = [
  { name: 'Reliance Industries' },
  { name: 'Larsen & Toubro (L&T)' },
  { name: 'Blue Star' },
  { name: 'Artson Engineering' },
  { name: 'Parle (CM Unit)' },
  { name: 'ATV Projects' },
  { name: 'Fernas (OPAL Project)' },
  { name: 'Bhusan Steel' }
];

export const COMPLIANCE_LIST: ComplianceItem[] = [
  { label: 'IEC Code', value: 'Import Export Code Registered' },
  { label: 'GST', value: 'Goods & Services Tax Compliant' },
  { label: 'MSME / UDYAM', value: 'Registered Enterprise' },
  { label: 'Food Safety', value: 'FSSAI & APEDA Registered' },
  { label: 'Labor Law', value: 'Statutory Labour Compliance Adhered' }
];

export const STATS: Stat[] = [
  { label: 'Business Verticals', value: '4', suffix: '' },
  { label: 'Countries Served', value: '25', suffix: '+' },
  { label: 'Repeat Clients', value: '85', suffix: '%' },
  { label: 'Experience', value: '15', suffix: ' Yrs' },
];