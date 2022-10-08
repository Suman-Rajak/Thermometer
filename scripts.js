//<span id="thermoico" class="fa"></span>

//Here we are using unicodes of fontawesome, instead of the icon


const tempload = () => {
    let temp = document.getElementById('thermoico');
    let thermo = document.getElementById('thermo');
    temp.innerHTML = "&#xf2cb";


    //Changing the icon after 1 second

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "rgb(224, 224, 154)";
        thermo.innerHTML = "25%";
        thermo.style.color = "rgb(224, 224, 154)";

    }, 1000);

    //Changing the icon after 2 second

    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "rgb(210, 210, 90)";
        thermo.innerHTML = "50%";
        thermo.style.color = "rgb(210, 210, 90)";
    }, 2000);

    //Changing the icon after 3 second

    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "rgb(230, 139, 36)";
        thermo.innerHTML = "75%";
        thermo.style.color = "rgb(230, 139, 36)";
    }, 3000);

    //Changing the icon after 4 second

    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "rgb(231, 106, 106)";
        thermo.innerHTML = "100%";
        thermo.style.color="rgb(231, 106, 106)";
    }, 4000);

    setTimeout(() => {
        temp.innerHTML = "&#xf2cb";
        temp.style.color = "white";
        thermo.innerHTML = "0%";
        thermo.style.color="white";
    }, 5000);
}

tempload();

setInterval(tempload, 5000);

// 4000 ms = 4s por function ses hole 5s = 5000 ms e ami abar function ke call korbo and eta infinity loop e cholte thakbe.
