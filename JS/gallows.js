let attempts = 6;
let dynamicList = [];
let secreteWord;
let WordCategory;

const words = [
    word001={
        name : "IRLANDA",
        category : "LUGARES"
    },
    word002={
        name : "QUARTO",
        category : "LUGARES"
    },
    word003={
        name : "BIBLIOTECA",
        category : "LUGARES"
    },
    word004={
        name : "ESCOLA",
        category : "LUGARES"
    },
    word005={
        name : "ESCRITORIO",
        category : "LUGARES"
    },
    word006={
        name : "ACADEMIA",
        category : "LUGARES"
    },
    word007={
        name : "SUPERMERCADO",
        category : "LUGARES"
    },
    word008={
        name : "HOSPITAL",
        category : "LUGARES"
    },
    word009={
        name : "HOTEL",
        category : "LUGARES"
    },
    word0010={
        name : "QUADRA",
        category : "LUGARES"
    },
    word0011={
        name : "BICICLETA",
        category : "TRANSPORTE"
    },
    word0012={
        name : "CARRO",
        category : "TRANSPORTE"
    },
    word0013={
        name : "AVIAO",
        category : "TRANSPORTE"
    },
    word0014={
        name : "PATINS",
        category : "TRANSPORTE"
    },
    word0015={
        name : "TREM",
        category : "TRANSPORTE"
    },
    word0016={
        name : "FOGUETE",
        category : "TRANSPORTE"
    },
    word0017={
        name : "NAVI0",
        category : "TRANSPORTE"
    },
    word0018={
        name : "MOTO",
        category : "TRANSPORTE"
    },
    word0019={
        name : "PATINETE",
        category : "TRANSPORTE"
    },
    word0020={
        name : "CAMINHAO",
        category : "TRANSPORTE"
    },
    word0021={
        name : "GATO",
        category : "ANIMAIS"
    },
    word0022={
        name : "LEAO",
        category : "ANIMAIS"
    },
    word0023={
        name : "CACHORRO",
        category : "ANIMAIS"
    },
    word0024={
        name : "MACACO",
        category : "ANIMAIS"
    },
    word0025={
        name : "BALEIA",
        category : "ANIMAIS"
    },
    word0026={
        name : "GOLFINHO",
        category : "ANIMAIS"
    },
    word0027={
        name : "COBRA",
        category : "ANIMAIS"
    },
    word0028={
        name : "ESCORPIAO",
        category : "ANIMAIS"
    },
    word0029={
        name : "TAMANDUA",
        category : "ANIMAIS"
    },
    word0030={
        name : "CROCODILO",
        category : "ANIMAIS"
    },
    word0031={
        name : "FRUTA",
        category : "COMIDA"
    },
    word0032={
        name : "DOCE",
        category : "COMIDA"
    },
    word0033={
        name : "SALADA",
        category : "COMIDA"
    },
    word0034={
        name : "ARROZ",
        category : "COMIDA"
    },
    word0035={
        name : "CHURROS",
        category : "COMIDA"
    },
    word0036={
        name : "PAMONHA",
        category : "COMIDA"
    },
    word0037={
        name : "PIPINO",
        category : "COMIDA"
    },
    word0038={
        name : "TOMATE",
        category : "COMIDA"
    },
    word0039={
        name : "FEIJOADA",
        category : "COMIDA"
    },
    word0040={
        name : "LASANHA",
        category : "COMIDA"
    }

];


createSecretWord();
function createSecretWord(){
    const indexWord = parseInt(Math.random() * words.length)

    secreteWord = words[indexWord].name;
    WordCategory = words [indexWord].category;

    console.log(secreteWord);
    console.log(WordCategory);
}

assembleWord();
function assembleWord(){
    const category = document.getElementById("category");
    category.innerHTML = WordCategory;

    const secretWordScreen = document.getElementById("secret-word");
    secretWordScreen.innerHTML = "";

    for(i = 0; i < secreteWord.length; i ++){
        if(dynamicList[i] == undefined){
            dynamicList[i] = "&nbsp;"
            secretWordScreen.innerHTML = secretWordScreen.innerHTML + "<div class='letter'>" + dynamicList[i] + "</div>"
        }
        else{
            secretWordScreen.innerHTML = secretWordScreen.innerHTML + "<div class='letter'>" + dynamicList[i] + "</div>"
        }
    }

}

function chosenKey(letter){
    document.getElementById("kay-" + letter).disabled = true;
    if (attempts > 0){
        changeStyle("kay-" + letter);
        compareList(letter);
        assembleWord();
    }

    
}

function changeStyle(kay){
    document.getElementById(kay).style.background = "#0A3871";
    document.getElementById(kay).style.color = "#ffffff";
}

function compareList(letter){
    const position = secreteWord.indexOf(letter)
    if(position < 0){
        attempts--
        imageAppears();

        if (attempts == 0)
        {
            openModal("OPS!!","Não foi dessa vez ... A palavra secreta era <br>" + secreteWord);
        }
        
    }
    else{
        for(i = 0; i < secreteWord.length; i++){

            if(secreteWord[i] == letter){
                dynamicList[i] = letter;
            }
        }
    }

    let win = true;

    for (i=0; i < secreteWord.length; i++){
        if (secreteWord[i] != dynamicList[i]){
        win = false;
        }
        
    } 
    if(win == true){

        openModal("PARABÉNS!","Você venceu ...");
            
    }
    
   
        
}

function imageAppears(){
    switch(attempts){
        case 5:
            document.getElementById("image").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("image").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("image").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("image").style.background = "url('./img/forca04.png')";
            break; 
        case 1:
            document.getElementById("image").style.background = "url('./img/forca06.png')";
            break;

        default:
            document.getElementById("image").style.background = "url('./img/forca.png')";
            break;
    }
}

function openModal(title, message){
    let modalTitle = document.getElementById("myModaltitle");
    modalTitle.innerText = title;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = message;


    $("#myModal").modal({
        show: true
    });
}

let btnRestart = document.querySelector("#btn-Restart")
btnRestart.addEventListener("click", function(){
    location.reload();
});