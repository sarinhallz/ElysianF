$(document).ready(function() {
    // Aplicando máscaras nos campos
    $('#cpf').inputmask('999.999.999-99');
    $('#rg').inputmask('99.999.999-9');
    $('#tel').inputmask('(99) 99999-9999');
});

document.getElementById('sg-form').addEventListener('submit', function(event) {
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confsenha').value;
    var termsChecked = document.getElementById('terms').checked;

    if (senha !== confirmarSenha) {
        document.getElementById('pass-error').textContent = 'As senhas não coincidem.';
        event.preventDefault();
    } else {
        document.getElementById('pass-error').textContent = '';
    }

    if (!termsChecked) {
        document.getElementById('terms-error').textContent = 'Você precisa concordar com os termos para se cadastrar.';
        event.preventDefault();
    } else {
        document.getElementById('terms-error').textContent = '';
    }
});