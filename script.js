function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");

/*
     Calculo: alcool / gasolina
    E se o resulado for menor que 0.7 compensa usar alcool
    */

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7){
        //Aqui compensa usra alcool
        textResult.innerHTML = "Compensa usar Ácool";
    } else{
        //Compensa usar gasolina
        textResult.innerHTML = "Compensa usar gasolina";
        
    }


    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput; 



    contentResult.classList.remove("hide")

}
