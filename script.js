// Função para copiar a chave PIX
async function copiarPix() {
    const pixKeyInput = document.getElementById('pixKey');
    const textToCopy = pixKeyInput.value; // Pega o texto do input
    const copyButton = document.getElementById('copyButton');

    try {
        // Usa a API moderna para copiar para a área de transferência
        await navigator.clipboard.writeText(textToCopy);
        
        // Feedback visual: muda o texto e a cor do botão
        copyButton.textContent = 'Copiado!';
        copyButton.classList.add('copied');

        // Volta ao normal após 2 segundos
        setTimeout(() => {
            copyButton.textContent = 'Copiar PIX';
            copyButton.classList.remove('copied');
        }, 2000); 

    } catch (err) {
        console.error('Falha ao copiar:', err);
        alert('Não foi possível copiar a chave PIX. Tente manualmente.');
    }
}
