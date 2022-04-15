const cookieBox = document.querySelector(".cookie-banner"),
acceptBtn = cookieBox.querySelector(".submit-all");
saveBtn = cookieBox.querySelector(".save-btn");
checkbox = document.querySelector("#analitici");

//console.log(checkbox.checked);
//se la checkbox è spuntata, genera il cookie
function functionAnalitici() {
    if (checkbox.checked == true) {
        console.log("cookie generato");
        document.cookie = "analitici=valore; max-age="+60*60*24*30;
    }else {
        document.cookie = "analitici= ; max-age="+0*0*0*0;
        console.log("cookie cancellato");
    }
}

//expires=Tue, 19 Jan 2038 03:14:07 GMT

//salva le checkbox selezionate
saveBtn.onclick = ()=>{
    cookieBox.classList.add("hide");
}

//accetta tutti
acceptBtn.onclick = () => {
    //setta tutti i cookie
    document.cookie = "analitici=valore; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "marketing=valore2; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "necessari=valore3; max-age=" + 60 * 60 * 24 * 30;
    if(document.cookie){// se quello sopra si setta
        cookieBox.classList.add("hide"); //nascondi il box quando vengono settatu i cookie
    }else{
        alert("Cookie can't be set"); // se non vengono settati mostra errore
    }
}

let checkCookie = document.cookie.indexOf("analitici=valore");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
