// ===== POPUP =====
function pokazPopup(tresc) {
    document.getElementById("popupContent").innerHTML = tresc;
    document.getElementById("popup").style.display = "block";
}

function zamknijPopup() {
    document.getElementById("popup").style.display = "none";
}


// ===== FORMULARZ =====
document.getElementById("formularz").addEventListener("submit", function (e) {
    e.preventDefault();

    const osoba = {
        imie: document.getElementById("imie").value,
        nazwisko: document.getElementById("nazwisko").value,
        wiek: Number(document.getElementById("wiek").value)
    };

    // ALERT (opcjonalnie)
    alert(`
Obiekt: ${JSON.stringify(osoba)}
Dane: ${osoba.imie} ${osoba.nazwisko} ${osoba.wiek}
JSON: ${JSON.stringify(osoba)}
    `);

    // POPUP
    pokazPopup(`
        <b>Obiekt:</b> ${JSON.stringify(osoba)} <br>
        <b>Dane:</b> ${osoba.imie} ${osoba.nazwisko} ${osoba.wiek} <br>
        <b>JSON:</b> ${JSON.stringify(osoba)}
    `);
});


// ===== KLASA =====
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    wypisz() {
        const znak = this.imaginary >= 0 ? "+" : "-";
        return `${this.real} ${znak} ${Math.abs(this.imaginary)}i`;
    }

    module() {
        return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
    }
}


// ===== GENERATOR =====
function generujLiczby(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        const real = Math.floor(Math.random() * 21) - 10;
        const imag = Math.floor(Math.random() * 21) - 10;

        arr.push(new ComplexNumber(real, imag));
    }

    return arr;
}


// ===== FUNKCJA GŁÓWNA =====
function uruchom() {
    const liczby = generujLiczby(5);

    // wszystkie
    document.getElementById("all").innerHTML =
        liczby.map(l => l.wypisz()).join("<br>");

    // filter
    const dodatnie = liczby.filter(l => l.real > 0 && l.imaginary > 0);
    document.getElementById("positive").innerHTML =
        dodatnie.map(l => l.wypisz()).join("<br>");

    // map
    const zamienione = liczby.map(l => new ComplexNumber(l.imaginary, l.real));
    document.getElementById("swapped").innerHTML =
        zamienione.map(l => l.wypisz()).join("<br>");

    // suma
    const suma = liczby.reduce((acc, l) => acc + l.module(), 0);
    document.getElementById("sum").innerText = suma.toFixed(2);

    // min
    const min = liczby.reduce((min, l) =>
        l.module() < min ? l.module() : min,
        liczby[0].module()
    );
    document.getElementById("min").innerText = min.toFixed(2);

    // max
    const max = liczby.reduce((max, l) =>
        l.module() > max.module() ? l : max
    );
    document.getElementById("max").innerText = max.wypisz();
}