// DOM

document.addEventListener('DOMContentLoaded' , () => {
    
    //objeto no html (sol lua)
    const toggleTheme = document.getElementById('toggleTheme');
    const rootHtml = document.documentElement;

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

});
