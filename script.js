



function colorTextGreen(id) {
    document.getElementById(id).style.color = "green"
}

function colorTextRed(id) {
    document.getElementById(id).style.color = "red"
}



document.getElementById('mdp').addEventListener('input', checkConditionsMdp)
function checkConditionsMdp() {
    let mdp = document.getElementById('mdp').value
    function lengthOk(mdp) {
        return mdp.length >= 6;
    }
    function number(mdp) {
        return /[0-9]+/.test(mdp);
    }
    function specialeCar(mdp) {
        return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(mdp);
    }
    let isOk = true
    isOk = lengthOk(mdp) && number(mdp) && specialeCar(mdp)

    if (mdp === '') {
        document.getElementById('imgCheckMdp').style.display = 'none';
        document.getElementById('imgErrorMdp').style.display = 'none';
    } else {

        document.getElementById('imgCheckMdp').style.display = 'none';
        document.getElementById('imgErrorMdp').style.display = 'none';

        if (isOk) {
            document.getElementById('imgCheckMdp').style.display = 'block';
        } else {
            document.getElementById('imgErrorMdp').style.display = 'block';
        }
    }
}



document.getElementById('mdp').addEventListener('input', checkPwdLength)
function checkPwdLength() {

    let mdp = document.getElementById('mdp').value;
    let isOk = mdp.length >= 6

    if (mdp === '') {
        document.getElementById('nbCaracteres').style.color = 'white'
    }
    else if (isOk) {
        colorTextGreen('nbCaracteres')
    } else {
        colorTextRed('nbCaracteres')
    }

}



document.getElementById('mdp').addEventListener('input', checkNb)
function checkNb() {
    let mdp = document.getElementById('mdp').value;
    let isOk = /[0-9]/.test(mdp)

    if (mdp === '') {
        document.getElementById('chiffre').style.color = 'white'
    } else if (isOk) {
        colorTextGreen('chiffre')
    } else {
        colorTextRed('chiffre')
    }

}



document.getElementById('mdp').addEventListener('input', checkSpecial)
function checkSpecial() {
    let mdp = document.getElementById('mdp').value;
    let isOk = /[!@#$%^&*(),.?":{}|<>]/.test(mdp)


    if (mdp === '') {
        document.getElementById('symbole').style.color = 'white'
    }

    else if (isOk) {
        colorTextGreen('symbole')
    } else {
        colorTextRed('symbole')
    }


}




document.getElementById('email').addEventListener('input', checkEmail)
function checkEmail() {

    let email = document.getElementById('email').value;
    let isOk =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)


    if (email === '') {
        document.getElementById('imgCheckEmail').style.display = 'none';
        document.getElementById('imgErrorEmail').style.display = 'none';
    } else {

        document.getElementById('imgCheckEmail').style.display = 'none';
        document.getElementById('imgErrorEmail').style.display = 'none';

        if (isOk) {
            document.getElementById('imgCheckEmail').style.display = 'block';
        } else {
            document.getElementById('imgErrorEmail').style.display = 'block';
        }
    }
}




document.getElementById('nom').addEventListener('input', checkNom);
function checkNom() {
    let nom = document.getElementById('nom').value;
    let isOk = nom.length >= 3;


    if (nom === '') {
        document.getElementById('imgCheck').style.display = 'none';
        document.getElementById('imgError').style.display = 'none';
    } else {

        document.getElementById('imgCheck').style.display = 'none';
        document.getElementById('imgError').style.display = 'none';

        if (isOk) {
            document.getElementById('imgCheck').style.display = 'block';
        } else {
            document.getElementById('imgError').style.display = 'block';
        }
    }
}





document.getElementById('mdp').addEventListener('input', checkConfirmMdp)
document.getElementById('confirmMdp').addEventListener('input', checkConfirmMdp)
function checkConfirmMdp() {
    let mdp = document.getElementById('mdp').value;
    let confirmMdp = document.getElementById('confirmMdp').value;


    if (confirmMdp === '') {
        document.getElementById('imgErrorConfirmMdp').style.display = 'none';
        document.getElementById('imgCheckConfirmMdp').style.display = 'none';
    } else {

        if (mdp === confirmMdp) {
            document.getElementById('imgCheckConfirmMdp').style.display = 'block';
            document.getElementById('imgErrorConfirmMdp').style.display = 'none';
        } else {
            document.getElementById('imgCheckConfirmMdp').style.display = 'none';
            document.getElementById('imgErrorConfirmMdp').style.display = 'block';
        }
    }
}
document.getElementById('mdp').addEventListener('input', checkSecurity)
function checkSecurity() {
    let mdp = document.getElementById('mdp').value;
    let faible = mdp.length < 6
    let moyen = mdp.length >= 6 && mdp.length < 9
    let fort = mdp.length > 9

    if (mdp === '') {
        document.getElementById('blockFaible').style.display = 'none'
        document.getElementById('blockMoyen').style.display = 'none'
        document.getElementById('blockFort').style.display = 'none'

    } else if (faible) {
        document.getElementById('blockFaible').style.display = 'block'
    } else if (moyen) {
        document.getElementById('blockMoyen').style.display = 'block'
    } else if (fort) {
        document.getElementById('blockFort').style.display = 'block'

    }

}

document.getElementById('btnAnnul').addEventListener('click', reset)
function reset() {
document.getElementById('imgCheck').style.display = 'none'
    document.getElementById('imgError').style.display = 'none'
    document.getElementById('imgCheckEmail').style.display = 'none'
    document.getElementById('imgErrorEmail').style.display = 'none'
    document.getElementById('imgCheckMdp').style.display = 'none'
    document.getElementById('imgErrorMdp').style.display = 'none'
    document.getElementById('imgCheckConfirmMdp').style.display = 'none'
    document.getElementById('imgErrorConfirmMdp').style.display = 'none'
    document.getElementById('blockFort').style.display = 'none'
    document.getElementById('blockMoyen').style.display = 'none'
    document.getElementById('blockFaible').style.display = 'none'
    document.getElementById('symbole').style.color = 'white'
    document.getElementById('chiffre').style.color = 'white'
    document.getElementById('nbCaracteres').style.color = 'white'

}    
    


document.getElementById('formulaire').addEventListener('submit', formulaire)
    document.getElementById('btnValid').addEventListener('click', formulaire);
function formulaire() {
    
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let mdp = document.getElementById('mdp').value;
    let confirmMdp = document.getElementById('confirmMdp').value;

    let isOk = checkNom(nom) && checkEmail(email) && checkConditionsMdp(mdp) && checkConfirmMdp(mdp, confirmMdp);

    if (isOk) {
        window.location.href = 'se_connecter.html';
    } else {
        alert("Merci de corriger les erreurs dans le formulaire.");
    }

}


document.getElementById('btnValid').addEventListener('click', saveData)
function saveData() {
    console.log('Nom:', nom);
    console.log('Email:', email);
    console.log('Mot de passe:', mdp);

    const data = JSON.parse(localStorage.getItem("data")) || [];

    data.push({
        userName: nom,
        mail: email,
        motDePasse: pwd,
    });

    localStorage.setItem('data', JSON.stringify(data));
    console.log('Données enregistrées dans localStorage:', JSON.parse(localStorage.getItem("data")));
}
















