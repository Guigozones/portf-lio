/**
 * Configuration File
 * Configurações gerais do site
 */

export const CONFIG = {
    // Informações pessoais
    personalInfo: {
        name: 'Guilherme Oliveira de Menezes',
        title: 'Desenvolvedor Full Stack',
        email: 'guilhermeoliveira7962@gmail.com',
        phone: '(11) 96210-5555',
        location: 'Caxias, Maranhão - Brasil'
    },

    // Redes sociais (substitua pelos seus links)
    socialLinks: {
        github: 'https://github.com/seu-usuario',
        linkedin: 'https://linkedin.com/in/seu-usuario',
        figma: 'https://figma.com/@seu-usuario',
        youtube: 'https://youtube.com/@seu-canal',
        instagram: 'https://instagram.com/seu-usuario',
        whatsapp: 'https://wa.me/5511962105555'
    },

    // Configurações do site
    site: {
        title: 'Meu Portfólio',
        description: 'Portfólio de desenvolvimento web e mobile',
        language: 'pt-BR'
    },

    // Configurações de animação
    animation: {
        duration: 300,
        easing: 'ease'
    },

    // API endpoints (para formulário de contato, etc.)
    api: {
        contact: '/api/contact', // Substitua pelo seu endpoint
    }
};

export default CONFIG;
