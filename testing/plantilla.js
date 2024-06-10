const canvas = document.getElementById('dodecahedron-canvas');
const ctx = canvas.getContext('2d');

// Configuración inicial
let textColor = '#000000';
let backgroundColor = '#FFFFFF';
let fontFamily = 'Arial';
let backgroundImage = null;

// Función para dibujar una cara del dodecaedro
function drawFace(text, x, y, size) {
    ctx.save();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);

    if (backgroundImage) {
        ctx.drawImage(backgroundImage, x, y, size, size);
    }

    ctx.fillStyle = textColor;
    ctx.font = `20px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x + size / 2, y + size / 2);
    ctx.restore();
}

// Función para dibujar el dodecaedro completo
function drawDodecahedron() {
    const size = 100; // Tamaño de cada cara
    const faces = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibuja las caras en posiciones calculadas
    let x = 50, y = 50;
    faces.forEach((face, index) => {
        drawFace(face, x, y, size);
        x += size + 10;
        if ((index + 1) % 3 === 0) {
            x = 50;
            y += size + 10;
        }
    });
}

// Actualiza los colores y fuente según las entradas del usuario
document.getElementById('color').addEventListener('input', function() {
    textColor = this.value;
    drawDodecahedron();
});

document.getElementById('background').addEventListener('input', function() {
    backgroundColor = this.value;
    drawDodecahedron();
});

document.getElementById('font').addEventListener('change', function() {
    fontFamily = this.value;
    drawDodecahedron();
});

document.getElementById('background-image').addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            backgroundImage = img;
            drawDodecahedron();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
});

document.getElementById('print-button').addEventListener('click', function() {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Imprimir Calendario</title></head><body>');
    printWindow.document.write('<img src="' + canvas.toDataURL() + '"/>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});

// Dibuja el dodecaedro inicial
drawDodecahedron();
