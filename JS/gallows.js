let secreteWordDrawn
let secreteWordCategory

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
    secreteCategory = words [indexWord].category;

    console.log(secreteWord);
    console.log(secreteCategory);
}

