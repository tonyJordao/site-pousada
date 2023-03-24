// Função de máscara de telefone
function mascaraTelefone(telefone) {
    const texto = telefone.value;
    const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    telefone.value = telefoneFormatado;
}

// Adicionar evento de input ao campo de telefone
const campoTelefone = document.querySelector("form input:nth-child(3)");
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});

function enviarParaWhatsApp() {
    const nome = document.querySelector("form input:nth-child(1)").value;
    const email = document.querySelector("form input:nth-child(2)").value;
    const telefone = document.querySelector("form input:nth-child(3)").value;
    const mensagem = document.querySelector("form textarea").value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581998788122'; // Insira o número de telefone do WhatsApp aqui (apenas números)
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}
