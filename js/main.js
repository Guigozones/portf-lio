/**
 * Main JavaScript File
 * Portfolio Website
 * 
 * Este arquivo importa e inicializa todos os módulos
 */

import { initNavbar } from './modules/navbar.js';
import { initResumeTabs } from './modules/resume.js';
import { initScrollEffects } from './modules/scroll.js';
// import { initContactForm } from './modules/contact.js';

// Inicializa todos os módulos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initResumeTabs();
    initScrollEffects();
    // initContactForm();
    
    console.log('Portfolio carregado com sucesso!');
});
