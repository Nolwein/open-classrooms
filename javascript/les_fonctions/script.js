let score = 0

let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}

if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listeMots.length)
} else {
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            score++
        }
    }
    console.log("Votre score est de " + score + " sur " + listePhrases.length)
}
