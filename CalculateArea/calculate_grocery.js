let groc1;
let groc2;
let groc3;

function calculateTotal(){
    groc1 = parseFloat(document.getElementById("groc1").value);
    groc2 = parseFloat(document.getElementById("groc2").value);
    groc3 = parseFloat(document.getElementById("groc3").value);

    let total = groc1 + groc2 + groc3;

    document.getElementById("result2").innerText = `The total amount is:$ ${total}`;
}