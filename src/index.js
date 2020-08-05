let contBarsClick = 0;
console.log(1)

function constructor() {
    const headerMobile = document.querySelector('#header-mobile p');
    headerMobile.addEventListener('click', handleBarsMobileClick);
    document.querySelector('body').addEventListener('load', handleOnload);

    setTimeout(() => {
        console.log(1)
        document.querySelector('#loading').style.opacity = '0';
        document.querySelector('main').style.display = 'block';
    }, 2000)
}

function handleBarsMobileClick() {
    const menu = document.querySelector('#header-mobile .container');
    if (contBarsClick % 2 === 0) {
        menu.style.display = 'block';
        contBarsClick++;
    } else {
        menu.style.display = 'none';
        contBarsClick++;
    }
}

function handleOnload() {
    console.log(1)
}

constructor();