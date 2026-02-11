import React from 'react';
import { NavItem, Vertical, Feature, Stat, Client, ComplianceItem } from './types';
import { Globe, Award, ShieldCheck, TrendingUp, Briefcase, Factory, Wheat, HardHat, Warehouse, Users } from 'lucide-react';

export const COMPANY_NAME = "UGTES";
export const COMPANY_FULL_NAME = "United Global Traders & Engineers";
export const DOMAIN = "ugtes.com";
export const CONTACT_EMAIL = "info@ugtes.com";
export const CONTACT_PHONE = "+91 9315590249";
export const ADDRESS = "501, Prateek The Royal Cliff, Ghaziabad";
// Replace 'YOUR_FORM_ID' with your actual Formspree form ID
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
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop', // Global Trade / Shipping container
    title: 'Your Global Partner in Trade & Engineering',
    subtitle: 'Expertly navigating the realms of global trade and sophisticated engineering solutions.',
    cta: 'Our Verticals'
  },
  {
    image: 'https://images.unsplash.com/photo-1516937941348-c09e554b98e5?q=80&w=2070&auto=format&fit=crop', // Industrial Gears / Engineering Mechanics
    title: 'Engineering Global Progress',
    subtitle: 'Providing reliability, operational continuity, and cost-effectiveness for critical industrial sectors.',
    cta: 'View Equipment'
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop', // Construction/Structure
    title: 'Diverse Capabilities',
    subtitle: 'From Pre-Engineered Buildings (PEB) to Skilled Manpower and Agro-Commodities.',
    cta: 'Learn More'
  }
];

export const BUSINESS_VERTICALS: Vertical[] = [
  {
    id: 'agro',
    title: 'Agro-Commodity Exports',
    shortDescription: 'Exporter of Indian-origin agricultural commodities committed to consistent quality.',
    fullDescription: 'UGTE is an exporter of Indian-origin agricultural commodities, committed to consistent quality and timely delivery. We ensure strict adherence to international and destination country regulations, providing our clients with reliable supply chains. Our capabilities include direct sourcing from mills, customized packaging (bulk, bags), and rigorous quality inspection.',
    image: 'https://drive.google.com/thumbnail?id=1pTHtP38QSB3fTSKeMEkvuc6CvO95iaZP&sz=w2000',
    features: [
      'Basmati & Non-Basmati Rice',
      'Refined & Raw Sugar (ICUMSA grades)',
      'Pulses (Toor, Moong, Urad, Chickpeas)',
      'FSSAI & APEDA Compliant offerings'
    ],
    icon: <Wheat className="w-6 h-6" />
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment & Spares',
    shortDescription: 'Comprehensive range of equipment ensuring reliability for critical sectors.',
    fullDescription: 'We provide a comprehensive range of equipment and spares essential for critical industrial sectors. Our focus is on ensuring reliability, operational continuity, and cost-effectiveness for our clients. Focused industries include Sugar Plants, Refineries, Hydro/Thermal Power Plants, Cement Plants, and Steel Mills.',
    image: 'https://drive.google.com/thumbnail?id=1oU33cXte2KxcE2TGA8EebA-KRcjZQB4C&sz=w2000',
    features: [
      'Pumps, Motors, Valves, Gearboxes',
      'Heat Exchangers, Tanks, Conveyors',
      'MCC, PCC, Control Panels (PLC/SCADA)',
      'Mechanical & Electrical Spares for O&M'
    ],
    icon: <Factory className="w-6 h-6" />
  },
  {
    id: 'peb',
    title: 'Pre-Engineered Buildings (PEB)',
    shortDescription: 'Bespoke design engineering and supply of Pre-Engineered Buildings.',
    fullDescription: 'UGTES offers bespoke design engineering and supply of Pre-Engineered Buildings, meticulously tailored to meet specific project functional and structural requirements, ensuring optimal performance and durability. We provide complete EPC solutions including site survey, budgeting, and 3-D modelling.',
    image: 'https://drive.google.com/thumbnail?id=1K5g3xDwtqlMx4nEynmKbcygkJUL8tfKb&sz=w2000',
    features: [
      'Industrial Sheds, Workshops & Warehouses',
      'Logistics Facilities & Factory Buildings',
      'Turbo-vents, Louvers, Skylights',
      'In-house Manufacturing Facility'
    ],
    icon: <Warehouse className="w-6 h-6" />
  },
  {
    id: 'manpower',
    title: 'Skilled Manpower Services',
    shortDescription: 'Engineers, administrators, and skilled technicians for major industrial sectors.',
    fullDescription: 'We offer manpower services constituting a team of Engineers, administrators, skilled, and semi-skilled staff for all major industrial sectors, builders, and contractors. We offer flexible project-based deployment for both short-term and long-term needs.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop', // Workers with helmets and blueprints
    features: [
      'Mechanical, Electrical, Civil Engineers',
      'CS & IT Engineers & Supervisors',
      'Mechanics, Welders, Fabricators',
      'Construction Labor & Maintenance Techs'
    ],
    icon: <Users className="w-6 h-6" />
  }
];

export const STRENGTHS: Feature[] = [
  {
    id: 's1',
    title: 'Diversified Business Capability',
    description: 'A single point of contact for a broad spectrum of trading and engineering requirements, simplifying complex global operations.',
    icon: <Globe className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's2',
    title: 'Strong Sourcing & Vendor Network',
    description: 'Leveraging an extensive domestic network for reliable and high-quality sourcing of products and components.',
    icon: <Factory className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's3',
    title: 'Technical Understanding',
    description: 'Deep technical expertise in industrial requirements, ensuring suitable and efficient solutions for every project.',
    icon: <Award className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's4',
    title: 'Export & Logistics Expertise',
    description: 'Proficient handling of international documentation, customs, and logistics for seamless global delivery.',
    icon: <TrendingUp className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's5',
    title: 'Flexible Commercial Models',
    description: 'Tailored commercial and delivery models designed to align with client-specific needs and project timelines.',
    icon: <Briefcase className="w-8 h-8 text-accent-500" />
  },
  {
    id: 's6',
    title: 'Commitment to Quality',
    description: 'An enduring pledge to quality, transparency, and regulatory compliance in all aspects of our operations.',
    icon: <ShieldCheck className="w-8 h-8 text-accent-500" />
  }
];

export const CLIENTS: Client[] = [
  { 
    name: 'Reliance', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png' 
  },
  { 
    name: 'Larsen & Toubro', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T_Construction_logo.svg/2560px-L%26T_Construction_logo.svg.png' 
  },
  { 
    name: 'Blue Star', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Blue_Star_India_logo.svg/1200px-Blue_Star_India_logo.svg.png' 
  },
  { 
    name: 'Artson', 
    logo: 'https://placehold.co/400x120/ffffff/f59e0b?text=Artson' // Orange text placeholder to match branding
  },
  { 
    name: 'Parle', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Parle_Products_logo.svg/2560px-Parle_Products_logo.svg.png' 
  },
  { 
    name: 'ATV Projects', 
    logo: 'https://placehold.co/400x120/ffffff/0f172a?text=ATV+Projects' // Dark blue text
  },
  { 
    name: 'Fernas', 
    logo: 'https://placehold.co/400x120/ffffff/0369a1?text=FERNAS+OPAL' 
  },
  { 
    name: 'Bhushan Steel', 
    logo: 'https://placehold.co/400x120/ffffff/1d4ed8?text=Bhushan+Steel' 
  },
  { 
    name: 'Interarch', 
    logo: 'https://placehold.co/400x120/ffffff/dc2626?text=INTERARCH' // Red text
  }
];

export const COMPLIANCE_LIST: ComplianceItem[] = [
  { label: 'IEC Code', value: 'Import Export Code Registered' },
  { label: 'GST', value: 'Goods & Services Tax Compliant' },
  { label: 'MSME / UDYAM', value: 'Registered Enterprise' },
  { label: 'Food Safety', value: 'FSSAI & APEDA Registered' },
  { label: 'Labor Law', value: 'Statutory Labour Compliance Adhered' }
];