const msgSecret = "minhamensagemsecreta";

function cifraMsg(msg, movement) {
    let modifiedMsg = msg.split('').map(char => {
        const charCodeMsg = char.charCodeAt(0);
        return String.fromCharCode(charCodeMsg + movement);
    })
    return modifiedMsg.join('');
}


function decifraMsg(msg, movement) {
    let modifiedMsg = msg.split('').map(char => {
        const charCodeMsg = char.charCodeAt(0);
        return String.fromCharCode(charCodeMsg - movement);
    })
    return modifiedMsg.join('');
}

console.log(msgSecret)

const msgCifrada = cifraMsg(msgSecret, 7);
console.log(msgCifrada);

const msgDecifrada = decifraMsg(msgCifrada, 7)
console.log(msgDecifrada)
