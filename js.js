
class Lankytojas{

    constructor(vardas, pavarde, kortelesNr, adresas, telNr) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.kortelesNr = kortelesNr;
        this.adresas = adresas;
        this.telNr = telNr;
        this.paimtosknygos = [];
    }
    get userInfo(){
        return "\n"+this.vardas+" "+this.pavarde+"\n"+"Korteles Nr: "+this.kortelesNr+"\n"+"Adresas: "+this.adresas+
            "\n"+"Tel nr: "+this.telNr;
    }
    get skaitoKnygas(){
       console.log(this.vardas+" "+this.pavarde+" šiuo metu skaito šias knygas: ")
        for (let i = 0; i < this.paimtosknygos.length; i++){
           console.log(this.paimtosknygos[i])}
    }
    set knygos(knyga){
        this.paimtosknygos.push(knyga);
    }
}

const Antanas = new Lankytojas("Antanas", "Antanaitis","652398",
    "Šviesos g 15", "+37065555555",);
const Marija = new Lankytojas("Marija", "Kazlauskaitė","215435",
    "Studentų g 56","+37069999999");
const Petras = new Lankytojas("Petras", "Petraitis", "985312",
    "Volterio g 152","+37061212121");

Antanas.knygos = 'G. Chapman "Penkios meilės kalbos"';
Antanas.knygos = 'D. Trockij "Kol aš nesu aŠ"';
Antanas.knygos = 'P. Jurkevičius "Dėl skonio ginčijamasi"';
Marija.knygos = 'B. Sruoga "Dievų miškas"';
Marija.knygos = 'W. Dirie "Dykumų gėlė"';
Marija.knygos = 'Ch. Habersack "Šiaušius ir Lokys"';
Marija.knygos = 'V.M. Putinas "Altorių šešėly"';
Marija.knygos = 'E. Mackevičienė "Drabužių konstravimas"';
Petras.knygos = 'J. Marcinkevičius "Grybų karas"';
Petras.knygos = 'J. Marcinkevičius "Voro vestuvės"';
Petras.knygos = 'H. Radauskas "Visi eilėraščiai"';
Antanas.knygos = 'Nauja knyga';


//console.log(Antanas.userInfo);
Antanas.skaitoKnygas
console.log("\n");
//console.log(Marija.userInfo);
Marija.skaitoKnygas
console.log("\n");
//console.log(Petras.userInfo);
Petras.skaitoKnygas
