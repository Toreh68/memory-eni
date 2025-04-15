function colorTextGreen(id) {
    document.getElementById(id).style.color = "green"
}

function colorTextRed(id) {
    document.getElementById(id).style.color = "red"
}

document.getElementById('mdp').addEventListener('input', checkPwdLength)
function checkPwdLength() {
    let mdp = document.getElementById('mdp').value;
    let isOk = mdp.length >= 6
    
    if (isOk) {
        colorTextGreen('nbCaracteres')
    } else {
        colorTextRed('nbCaracteres')
    }
    return isOk
}

document.getElementById('mdp').addEventListener('input', checkNb)
function checkNb(){
    let mdp = document.getElementById('mdp').value;
    let isOk = /[0-9]+/.test(mdp)

    if (isOk) {
        colorTextGreen('chiffre')
    } else {
        colorTextRed('chiffre')
    }
return isOk
}

document.getElementById('mdp').addEventListener('input', checkSpecial)
function checkSpecial(){
    let mdp = document.getElementById('mdp').value;
    let isOk = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(mdp)

    if (isOk) {
        colorTextGreen('caractScpecial')
    } else {
        colorTextRed('caractScpecial')
    }

    return isOk
}


document.getElementById('email').addEventListener('input', checkEmail)
function checkEmail(){
    let email = document.getElementById('email').value;
    let isOk = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    if (isOk) {
        colorTextGreen('emailValid')
    } else {
        colorTextRed('emailValid')
    }
    
    return isOk

}

document.getElementById('nom').addEventListener('input', checkNom)
function checkNom(){
    let mdp = document.getElementById('nom').value;
    let isOk = mdp.length >= 3
    
    if (isOk) {
        colorTextGreen('nomValid')
    } else{
        colorTextRed('nomValid')
    }

    

}

document.getElementById('confirmMdp').addEventListener('input', checkConfirmMdp)
function checkConfirmMdp(){
    let mdp = document.getElementById('mdp').value;
    let confirMdp = document.getElementById('confirmMdp').value
    if(confirMdp===mdp){
        colorTextGreen('confirmMdpSentence')
    }else{
        colorTextRed('confirmMdpSentence')
    }
}