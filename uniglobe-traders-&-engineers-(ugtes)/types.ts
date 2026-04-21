import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
}

export interface Vertical {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  icon?: React.ReactNode;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Client {
  name: string;
  logo?: string;
}

export interface ComplianceItem {
  label: string;
  value: string;
}

export interface Product {
  image: string;
  title: string;
  category: string;
  description: string;
}