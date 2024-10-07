// Sélectionne tous les éléments que tu veux animer
const elements = document.querySelectorAll('section, img, h1, h2, p, a');

// Applique la classe 'fade-in' à chaque élément sélectionné
elements.forEach(element => {
    element.classList.add('fade-in');
});

// Fonction qui s'exécute lorsque les éléments apparaissent dans le champ de vision
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Ajoute la classe 'show' quand visible
            observer.unobserve(entry.target);   // Arrête d'observer une fois visible
        }
    });
}, {
    threshold: 0.1 // Se déclenche quand l'élément est visible à 10%
});

// Observer chaque élément
elements.forEach(element => {
    observer.observe(element);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Tous les champs sont obligatoires.');
        e.preventDefault();  // Empêche l'envoi si la validation échoue
    }

    // Validation supplémentaire du format de l'email, si nécessaire
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        e.preventDefault();
    }
});