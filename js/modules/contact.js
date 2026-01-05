/**
 * Contact Module
 * Gerencia o formulário de contato com Web3Forms
 */

// export function initContactForm() {}

/**
 * Processa o envio do formulário via Web3Forms
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Coleta os dados do formulário
    const formData = new FormData(form);
    
    // Validação básica
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;
    
    if (!validateForm({ name, email, message })) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    // Estado de loading
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            form.reset();
        } else {
            throw new Error(result.message || 'Erro ao enviar');
        }
    } catch (error) {
        showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');
        console.error('Erro no formulário:', error);
    } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
}

/**
 * Valida os dados do formulário
 */
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!data.name || data.name.trim().length < 2) {
        return false;
    }
    
    if (!data.email || !emailRegex.test(data.email)) {
        return false;
    }
    
    if (!data.message || data.message.trim().length < 10) {
        return false;
    }
    
    return true;
}

/**
 * Exibe notificação para o usuário
 */
function showNotification(message, type = 'info') {
    // Remove notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Cria nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Estilos inline (você pode mover para CSS)
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#00cec9' : type === 'error' ? '#d63031' : '#6c5ce7'};
        color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        animation: slideUp 0.3s ease;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(notification);

    // Botão fechar
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}
