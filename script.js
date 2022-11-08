
function calcular(){
    const peso = parseFloat(document.querySelector("#weight").value)
    const altura = parseFloat(document.querySelector("#height").value)
    imc = peso / (altura*altura)

    imcf = imc.toFixed(2)

    alert(imcf)
}
