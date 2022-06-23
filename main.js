class Buch {
    constructor(Farbe, Verlag, Autor, Preis, Titel, Anzahl) {
        this.Farbe = "Farbe"
        this.Verlag = "Verlag"
        this.Autor = "Autor"
        this.Preis = "Preis"
        this.Titel = "Titel"
        this.Anzahl = "Anzahl"
    }

    verfuegbar() {
        if (this.Anzahl < 1) {
            console.log("Es ist kein Buch mehr vorhanden")
        } else {
            console.log("Es ist noch mindestens 1 Buch vorhanden")
        }
    }
    verkauft() {
        this.Anzahl = this.Anzahl - 1
    }
}
function neuesBuch() {
    buch = new Buch ("", "", "","","")
}

let lager = []

function init() {
    let buch1 = new Buch("Schwarz", "Duden", "J.K. Rowling", "19.99€","Harry Otter")
    lager.push(buch1)
    let buch2 = new Buch("Weiß", "Cornelsen", "Hr. Fricke", "299,99€","Informatik für Anfänger")
    lager.push(buch2)
    let buch3 = new Buch("Orange", "Hamburger Lesehefte", "Georg büchner", "14,99€", "Woyzeck")
    lager.push(buch3)
    let buch4 = new Buch("Gelb", "Duden", "Jonas Körner", "9,99€", "Tafelwerk")
    lager.push(buch4)
}

function lagerListe(){
    console.log(lager)
}

init()
lagerListe()
