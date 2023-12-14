const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');


function dark()
{
    header.style.background = '#222d66';
    header.style.transition = '1s';
    main.style.background = '#091242';
    main.style.transtion = '1s';
    footer.style.background = '#222d66';
    footer.style.transition = '1s';
}

function light()
{
    header.style.background = '#b5cce8';
    header.style.transition = '1s';
    main.style.background = '#7ca5d6';
    main.style.transtion = '1s';
    footer.style.background = '#b5cce8';
    footer.style.transition = '1s';
}








































console.log('Dark');