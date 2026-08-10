import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import Layout from './Layouts/Layout';

createInertiaApp({
  title: (title) => title ? `${title} - APATAM@E` : 'APATAM@E — Agence Institutional & Développement Durable',
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });
    const page = pages[`./pages/${name}.jsx`].default;
    page.layout = page.layout || ((pageContent) => <Layout>{pageContent}</Layout>);
    return page;
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
  progress: {
    color: '#daa520',
  },
});
