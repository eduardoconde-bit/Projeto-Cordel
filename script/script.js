let dateSystem = new Date();

function load() { //Carrega os objetos e chama a função dinamicTheme()
    bodyPage = document.getElementById('body-page');
    main = document.getElementsByTagName('main');
    headerPage = document.getElementById('top');
    wrapper = document.getElementById('wrapper-content-main');
    text = document.getElementsByClassName('text-block');
    link = document.getElementsByClassName('link-basic');
    textFooter = document.getElementsByClassName('text-footer');
    footer = document.getElementById('footer');
}

function darkTheme() { //Função muda tema do site
    if(dateSystem.getHours() >= 18 || (dateSystem.getHours() < 6))  {
        main[0].style.padding = '0 4px 0';
        bodyPage.style.backgroundColor = 'var(--background-page-dark)';
        headerPage.style.backgroundColor = 'var(--header-dark)';
        headerPage.style.marginBottom = '1px';
        headerPage.style.boxShadow = '0px 1px 3px var(--header-box-shadow)';
        wrapper.style.backgroundColor = 'var(--background-page-dark)';
        wrapper.style.border = '1px solid var(--wrapper-border-dark)';
        footer.style.backgroundColor = 'var(--color1)';
        textFooter[0].style.color = '#000';
        for(let cont = 0; cont < text.length; cont++) {
            text[cont].style.color = 'var(--color1)';//texto das sections
        }

        for(let cont = 0; cont < text.length; cont++) {
            link[cont].style.color = 'var(--color-link-dark)'; //Cor links
        }
    }
}

function lightTheme() { //Função muda tema do site
    if(dateSystem.getHours() >= 18 || (dateSystem.getHours() < 6))  {
        main[0].style.padding = '0';
        bodyPage.style.backgroundColor = 'var(--background-page)';
        headerPage.style.backgroundColor = 'var(--color2)';
        headerPage.style.marginBottom = '0';
        headerPage.style.boxShadow = 'none';
        wrapper.style.backgroundColor = 'var(--color1)';
        wrapper.style.border = 'none';
        footer.style.backgroundColor = 'var(--color2)';
        textFooter[0].style.color = 'var(--color1)';
        for(let cont = 0; cont < text.length; cont++) {
            text[cont].style.color = 'var(--color2)';//texto das sections
        }

        for(let cont = 0; cont < text.length; cont++) {
            link[cont].style.color = 'var(--color1)'; //Cor links
        }
    }
}