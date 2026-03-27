// DOM

document.addEventListener('DOMContentLoaded' , () => {
    
    //Var Global
    //objeto no html (sol lua)
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHtml = document.documentElement;
    // Var para menu Hamburguer
    const menuHamburger = document.getElementById('menuHamburger');
    const menuMobile = document.getElementById('menuMobile');

    const icon = menuHamburger?.querySelector('i');


    //Função mudar a cor do tema (dark / light)

    function changeTheme() {
        // Tema atual
        const currentTheme = rootHtml.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';
        
        rootHtml.setAttribute('data-theme', isDark ? 'light' : 'dark');
        // troca do icone
        toggleTheme.classList.toggle('bi-sun' , !isDark)
        toggleTheme.classList.toggle('bi-moon' , isDark);

    } 

    if(toggleTheme) {
        toggleTheme.addEventListener('click', changeTheme);
    }

    //Alternar menu mobile e icone
    function toggleMenu() {
        const isOpen = menuMobile.classList.toggle('active');
        //condicao

        if(icon) {
            icon.classList.toggle('bi-list', !isOpen);
            icon.classList.toggle('bi-x-lg', isOpen);
        }
    }

    if (menuHamburger) {
        menuHamburger.addEventListener('click', toggleMenu);    
    }
});
