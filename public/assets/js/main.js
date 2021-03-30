const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');

    // GUARDAMOS EL MODO EN LOCAL STORAGE

    if(document.body.classList.contains('light')){
        localStorage.setItem('light-mode', 'true');
    }else{
        localStorage.setItem('light-mode', 'false');
    };
});

    // OBTENEMOS EL MODO ACTUAL

if(localStorage.getItem('light-mode') === 'true'){
    document.body.classList.add('light');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('light');
    btnSwitch.classList.remove('active');
};

// TYPED //
const typed = new Typed('.typed', {
    strings: [
        '<i class="disfrute">Juegos</i>',
        '<i class="disfrute">Noticias</i>',
        '<i class="disfrute">Entretenimiento</i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '_', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});