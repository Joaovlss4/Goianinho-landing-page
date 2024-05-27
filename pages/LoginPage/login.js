(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: 'AIzaSyDEru7pgBQi_quVyzfKo0VzvdBWdhwLi84'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    document.addEventListener('DOMContentLoaded', function() {
        // Get Elements
        const txtEmail = document.getElementById("txtEmail");
        const txtPassword = document.getElementById("txtPassword");
        const btnLogin = document.getElementById("btnLogin");
        const btnSignup = document.getElementById("btnSignup");
        const loginCard = document.querySelector('.login-card');
        const registerCard = document.querySelector('.register-card');

        const registerTopo = document.getElementById('register');
        const loginTopo = document.getElementById('login');

        const authenticated = localStorage.getItem('user');
        if(authenticated) {
            registerTopo.style.display = 'none';
            loginTopo.style.display = 'none';
            
            window.location.href = '../../index.html';
        }

        console.log(btnSignup)

        // Inicialmente, esconder o formulário de registro
        registerCard.style.display = 'none';

        // Mostrar formulário de registro e esconder login
        document.querySelector('#register').addEventListener('click', function(e) {
            e.preventDefault();
            loginTopo.classList.remove('active');
            registerTopo.classList.add('active');
            loginCard.style.display = 'none';
            registerCard.style.display = 'block';
        });

        // Mostrar formulário de login e esconder registro
        document.querySelector('#login').addEventListener('click', function(e) {
            e.preventDefault();
            loginCard.style.display = 'block';
            registerCard.style.display = 'none';
            registerTopo.classList.remove('active');
            loginTopo.classList.add('active');
        });

        // Alternar para o formulário de registro ao clicar no botão "Registrar"
        btnSignup.addEventListener('click', function(e) {
            e.preventDefault();
            loginCard.style.display = 'none';
            registerCard.style.display = 'block';
        });

        // Alternar para o formulário de login ao clicar no botão "Login"
        btnLogin.addEventListener('click', function(e) {
            e.preventDefault();
            loginCard.style.display = 'block';
            registerCard.style.display = 'none';
        });

        // Add Login Event
        btnLogin.addEventListener('click', e => {
            const email = txtEmail.value;
            const password = txtPassword.value;

            const auth = firebase.auth();

            // Sign in with firebase auth
            auth.signInWithEmailAndPassword(email, password).then(user => {
                alert("Autenticado com sucesso!");
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = '../../index.html';
            }).catch(err => {
                alert(err.message);
            });
        });
        btnSignup.addEventListener('click', e => {
            const email = txtEmailRegister.value;
            const password = txtPasswordRegister.value;
            const confirmPassword = txtPasswordRegisterConfirm.value
            if(password !== confirmPassword) {
                alert("As senhas não são iguais!");
                return;
            }   

            const auth = firebase.auth();

            // Sign up with firebase auth
            auth.createUserWithEmailAndPassword(email, password).then(user => {
                alert("Registrado com sucesso!");
            }).catch(err => {
                alert(err.message);
            });
        }

        // Add Signup Event
       );
    });
}());
