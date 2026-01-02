# Meu Portfólio

Site de portfólio profissional para apresentação de currículo, projetos e conquistas.

## 📁 Estrutura do Projeto

```
portfólio/
├── index.html              # Página principal
├── css/
│   ├── style.css           # Estilos base e variáveis
│   ├── components/         # Componentes reutilizáveis
│   │   ├── buttons.css     # Estilos dos botões
│   │   ├── navbar.css      # Estilos da navegação
│   │   └── cards.css       # Estilos dos cards
│   └── sections/           # Estilos por seção
│       ├── hero.css        # Seção inicial
│       ├── about.css       # Seção sobre
│       ├── resume.css      # Seção currículo
│       ├── projects.css    # Seção projetos
│       ├── achievements.css # Seção conquistas
│       ├── contact.css     # Seção contato
│       └── footer.css      # Rodapé
├── js/
│   ├── main.js             # Arquivo principal
│   ├── config.js           # Configurações
│   ├── modules/            # Módulos JavaScript
│   │   ├── navbar.js       # Lógica da navegação
│   │   ├── resume.js       # Lógica das abas
│   │   ├── scroll.js       # Efeitos de scroll
│   │   └── contact.js      # Formulário de contato
│   └── utils/
│       └── helpers.js      # Funções auxiliares
└── assets/
    └── images/
        ├── profile.jpg     # Sua foto
        ├── favicon.png     # Ícone do site
        └── projects/       # Imagens dos projetos
```

## 🚀 Como Usar

1. **Personalize suas informações:**
   - Edite o `index.html` com seu nome, email, telefone
   - Atualize o `js/config.js` com suas configurações

2. **Adicione suas imagens:**
   - Coloque sua foto em `assets/images/profile.jpg`
   - Adicione imagens dos projetos em `assets/images/projects/`

3. **Atualize os links:**
   - Substitua os links `#` pelos seus links reais (GitHub, LinkedIn, etc.)

4. **Publique:**
   - Faça upload para GitHub Pages, Vercel, Netlify ou seu servidor

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    --accent-color: #00cec9;
    /* ... */
}
```

### Fontes
A fonte padrão é "Poppins". Para mudar, edite o link no `index.html`.

## 📱 Responsivo

O site é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

---

Desenvolvido com ❤️
