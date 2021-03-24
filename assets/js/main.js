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