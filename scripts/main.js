/*----------------------Cambiar imagen--------------------------*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

/*-------------------Cambiar usuario en h1-----------------------*/

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/*crear función y valide para null*/
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) { //valido
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}


/*primera carga de página*/
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

/*evento clic*/
myButton.onclick = () => {
    setUserName();
};




