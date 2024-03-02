// Função para mostrar os Termos de Uso e esconder a Política de Privacidade
function showTerms() {
    document.getElementById('termsContent').classList.add('hidden');
    document.getElementById('termsContent').classList.remove('hidden');

    document.getElementById('termsContent').classList.remove('hidden');
    document.getElementById('privacyContent').classList.add('hidden');
}

// Função para mostrar a Política de Privacidade e esconder os Termos de Uso
function showPrivacyPolicy() {

    document.getElementById('termsContent').classList.add('hidden');
    document.getElementById('privacyContent').classList.remove('hidden');
}

document.getElementById("showTermsButton").addEventListener("click", showTerms);
document.getElementById("showPrivacyButton").addEventListener("click", showPrivacyPolicy);

    document.getElementById('privacyContent').classList.remove('hidden');
    document.getElementById('termsContent').classList.add('hidden');

// Associando as funções aos botões
document.getElementById("showTermsButton").addEventListener("click", showTerms);
document.getElementById("showPrivacyButton").addEventListener("click", showPrivacyPolicy);

