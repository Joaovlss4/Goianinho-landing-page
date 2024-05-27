const botaoLogin = document.getElementById('login');
const botaoSair = document.getElementById('sair');

const authenticated = localStorage.getItem('user');
if(authenticated) {
    botaoLogin.style.display = 'none';
    botaoSair.style.display = 'flex'
}
else {
    botaoLogin.style.display = 'flex';
    botaoSair.style.display = 'none';
}


botaoSair.addEventListener('click', function() {
    localStorage.removeItem('user');
    window.location.href = 'pages/LoginPage/login.html';
});
//