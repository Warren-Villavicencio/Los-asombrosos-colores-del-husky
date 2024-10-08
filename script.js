function cambiarColor(color) {
    const husky = document.getElementById('husky');
    
    if (color === 'plomo') {
        husky.src = 'husky-plomo.png'; // Asegúrate de tener esta imagen
    } else if (color === 'cafe') {
        husky.src = 'husky-cafe.png'; // Asegúrate de tener esta imagen
    } else if (color === 'negro') {
        husky.src = 'husky-negro.png'; // Asegúrate de tener esta imagen
    } else {
        // Si no se pasa un color, se puede establecer un color por defecto
        husky.src = 'husky-plomo.png';
    }
}