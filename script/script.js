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

    dynamicTheme();
}

function dynamicTheme() { //Função muda tema do site
    if(dateSystem.getHours() >= 18 || (dateSystem.getHours() < 6))  {
        main[0].style.padding = '0 4px 0';
        bodyPage.style.backgroundColor = '#222';
        headerPage.style.backgroundColor = '#111';
        headerPage.style.color = 'white';
        headerPage.style.marginBottom = '1px';
        headerPage.style.boxShadow = '0px 1px 3px #fff5';
        wrapper.style.backgroundColor = '#222';
        wrapper.style.border = '1px solid #fff7';
        footer.style.backgroundColor = '#fff';
        textFooter[0].style.color = '#000';
        for(let cont = 0; cont < text.length; cont++) {
            text[cont].style.color = '#fff';//texto das sections
        }

        for(let cont = 0; cont < text.length; cont++) {
            link[cont].style.color = '#daa520'; //Cor links
        }
    }
}