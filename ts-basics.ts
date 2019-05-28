/* import { Person } from "./person"; */
//console.log(document.getElementById('btn'));
//console.log(document.getElementsByTagName('input')[1]);
class Person {
    name: string;
    lastName: string;
    age: number;
    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}

let btnvariable = document.getElementById('btn');
btnvariable.setAttribute("disabled", "true");
btnvariable.textContent = "Bitte geben Sie Ihren Namen und Alter ein";


var inName = document.getElementsByTagName('input')[0];
var inLastName = document.getElementsByTagName('input')[1];
var inAge = document.getElementsByTagName('input')[2];
var outPar = document.getElementById("out");

function checkInput(ev): void {
    console.log("checkInput() aufgerufen");
    /* nur Zahlen zulassen */
    if (!(ev.keyCode >= 48 && ev.keyCode <= 57)) {
        inAge.value = "";
    } else if
        (inName.value != "") {
        btnvariable.textContent = "OK";
        btnvariable.removeAttribute("disabled");
        //.setAttribute("disabled","false");
        //war egal, dass false gestellt wurde. wenn disabled steht, mit beliebigem Wert ist der Button disabled

    }
}


let tlnArray: Array<Person> = [];

function myFirstTsFct(): void {
    console.log("myFirstTsFct() funktioniert");
    /* nur gültiges Alter zulassen */

    //console.log("inpValue: " + inpValue);
    /* if (isNaN(inpValue)) {
        //immer not a number, weil aus dem Browser alles als string kommt
        console.log("isNaN(inpValue)");
    } else {
        console.log("else");
    } */
    //var err: string;
    /* SYNTAX: try { if () throw ""} catch (error) {} finally {} */
    try {
        if (+inAge.value < 5) throw "Teilnahme erst ab 5 Jahre möglich";
        if (+inAge.value > 99) throw "Zur Teilnahme nicht berechtigt";
        if (inAge.value == "") throw "Sie habe keine Eingabe getätigt";
    } catch (err) {
        outPar.textContent = "Meldung von error: " + err;
        this.err = err;
    } finally {
        if (+inAge.value >= 5 && +inAge.value <= 99) {
            outPar.textContent = "Sie sind in der Teilnehmerliste drin";
        }
        /* if (this.err) {
            inAge.value = "";
            this.err = "";
        } else {
            setTimeout("out.textContent = 'Willkommen bei userem Event';", 2000);
        } */
    }
    if (inName.validity.valid == true && inLastName.validity.valid == true && inAge.validity.valid == true && tlnArray.length < 5) {
        var p: Person = { name: inName.value, lastName: inLastName.value, age: +inAge.value };
        /* in der Zeile tiefer gehen Objekte p in das Array rein */
        tlnArray[tlnArray.length] = p;
        document.getElementById("counter").textContent = String(tlnArray.length);
    } else {
        if(inName.validity.valid == false || inLastName.validity.valid == false || inAge.validity.valid == false){
            document.getElementById("out").textContent = "Bitte alle Felder ausfüllen";
        }
        if (tlnArray.length >= 5) {
            document.getElementById('counter').textContent = "Die Teilnehmeranzahl erreicht";
            outPar.textContent = "";
            btnvariable.setAttribute("disabled", "true");
        }
    }

/* let counter = 
counter.textContent */
let list = document.getElementById('teilnehmer');
list.innerHTML = "";
for (let el of tlnArray) {
    list.innerHTML += '<li contentEditable="true" onkeypress="checkLI(event, this)">' + el.name.toUpperCase() + " " + el.lastName.toUpperCase() + ", " + el.age + " alt" + '</li>';
}
}

function checkLI(argEvent, argElem){
    if(argEvent.keyCode == 13){
        if(argElem.value == ""){
            let liArray = document.getElementsByTagName('li');
            for (let iter = 0; iter <= liArray.length; iter++){
                if (liArray[iter].value == ""){}

            }
            


            }

        }

    }

}