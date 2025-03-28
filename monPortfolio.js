
        // Menu mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fermer le menu lorsqu'un lien est cliqué
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Animation au scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Validation du formulaire
        function validationFormulaire(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Récupération des champs
    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const sujet = document.getElementById("sujet");
    const message = document.getElementById("message");
    let isValid = true;
  
    // Réinitialisation des messages d'erreur
    document.querySelectorAll(".error-message").forEach(msg => msg.remove());
  
    // Fonction pour afficher un message d'erreur
    function afficherErreur(champ, message) {
      const errorMessage = document.createElement("span");
      errorMessage.className = "error-message";
      errorMessage.textContent = message;
      champ.parentNode.appendChild(errorMessage);
      champ.style.borderColor = "#f44336";
      isValid = false;
    }
  
    // Validation Prénom
    if (prenom.value.trim() === "") {
      afficherErreur(prenom, "Veuillez saisir votre prénom.");
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/.test(prenom.value)) {
      afficherErreur(prenom, "Le prénom ne doit contenir que des lettres.");
    } else {
      prenom.style.borderColor = "#4CAF50";
    }
  
    // Validation Nom
    if (nom.value.trim() === "") {
      afficherErreur(nom, "Veuillez saisir votre nom.");
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/.test(nom.value)) {
      afficherErreur(nom, "Le nom ne doit contenir que des lettres.");
    } else {
      nom.style.borderColor = "#4CAF50";
    }
  
    // Validation Sujet
    if (sujet.value.trim() === "") {
      afficherErreur(sujet, "Veuillez indiquer votre sujet.");
    } else if (sujet.value.length < 5) {
      afficherErreur(sujet, "Le sujet doit contenir au moins 5 caractères.");
    } else {
      sujet.style.borderColor = "#4CAF50";
    }
  
    // Validation Message
    if (message.value.trim() === "") {
      afficherErreur(message, "Veuillez écrire votre message.");
    } else if (message.value.length < 10) {
      afficherErreur(message, "Le message doit contenir au moins 10 caractères.");
    } else {
      message.style.borderColor = "#4CAF50";
    }
  
    // Si tout est valide
    if (isValid) {
      alert("Formulaire soumis avec succès !");
      document.formulaireContact.submit(); // Soumission du formulaire
    }
  }