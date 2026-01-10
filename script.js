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

async function copiarPix2() {
    const pixKeyInput2 = document.getElementById('pixKey2');
    const textToCopy2 = pixKeyInput2.value; // Pega o texto do input
    const copyButton2 = document.getElementById('copyButton2');

    try {
        // Usa a API moderna para copiar para a área de transferência
        await navigator.clipboard.writeText(textToCopy2);
        
        // Feedback visual: muda o texto e a cor do botão
        copyButton2.textContent = 'Copiado!';
        copyButton2.classList.add('copied');
        
        // Volta ao normal após 2 segundos
        setTimeout(() => {
            copyButton2.textContent = 'Copiar PIX';
            copyButton2.classList.remove('copied');
        }, 2000); 

    } catch (err) {
        console.error('Falha ao copiar:', err);
        alert('Não foi possível copiar a chave PIX. Tente manualmente.');
    }
}
