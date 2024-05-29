const dataHasil = document.getElementById('hasil');


function perhitungan(){
    let angka1 = document.getElementById('first').value;
    let angka2 = document.getElementById('second').value;

    // Convert value to Number
    angka1 = Number(angka1);
    angka2 = Number(angka2);

    hasil = angka1 + angka2;

    dataHasil.innerHTML = `<h2>${hasil}</h2>`;
}