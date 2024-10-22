function calculerPaiementMensuel() {
    // Récupérer les valeurs saisies par l'utilisateur
    let montantPret = parseFloat(document.getElementById("montant").value);
    let tauxInteretAnnuel = parseFloat(document.getElementById("taux").value);
    let dureeAnnee = parseInt(document.getElementById("duree").value);

    // Validation des champs
    if (isNaN(montantPret) || montantPret <= 0) {
        alert("Veuillez entrer un montant de prêt valide.");
        return;
    }
    if (isNaN(tauxInteretAnnuel) || tauxInteretAnnuel <= 0) {
        alert("Veuillez entrer un taux d'intérêt annuel valide.");
        return;
    }
    if (isNaN(dureeAnnee) || dureeAnnee <= 0) {
        alert("Veuillez entrer une durée en années valide.");
        return;
    }

    // Calculer le taux d'intérêt mensuel et la durée en mois
    let tauxInteretMensuel = (tauxInteretAnnuel / 100) / 12;
    let nombreTotalPaiements = dureeAnnee * 12;

    // Calculer le paiement mensuel en utilisant la formule d'amortissement
    let paiementMensuel = montantPret * (tauxInteretMensuel * Math.pow(1 + tauxInteretMensuel, nombreTotalPaiements)) / (Math.pow(1 + tauxInteretMensuel, nombreTotalPaiements) - 1);

    // Afficher le résultat dans l'élément <p>
    document.getElementById("resultat").textContent = "Votre paiement mensuel est de : " + paiementMensuel.toFixed(2) + " €";
}
