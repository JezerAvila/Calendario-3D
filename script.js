// Cargar la barra de navegación
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Código de la barra de navegación que depende de la carga
            const toggleBtn = document.querySelector('.navbar__btn__toggle');
            const toggleBtnIcon = document.querySelector('.navbar__btn__toggle i');
            const dropDownMenu = document.querySelector('.dropdown__menu');

            toggleBtn.onclick = function () {
                dropDownMenu.classList.toggle('open');
                const isOpen = dropDownMenu.classList.contains('open');

                toggleBtnIcon.classList = isOpen
                    ? 'fa-solid fa-xmark'
                    : 'fa-solid fa-bars';
            };
        });
});


/* ============================
      Tema claro/obscuro 
===============================*/

function ModoOscuro() {
    var body = document.body;
    var switchModo = document.getElementById("switchModo");
    var animacionLogoRuta = document.getElementById("animacionLogoRuta");
    var animacionGamingRuta = document.getElementById("animacionGamingRuta");

    // Guardar el estado del modo oscuro en el almacenamiento local
    localStorage.setItem("modoOscuroActivado", switchModo.checked);

    if (switchModo.checked) {
        body.classList.add("mode-oscuro");
        animacionLogoRuta.src = "animaciones/TorneObscuro.mp4";
        animacionGamingRuta.src = "animaciones/gamingObscuro.mp4";
    } else {
        body.classList.remove("mode-oscuro");
        animacionLogoRuta.src = "animaciones/TorneClaro.mp4";
        animacionGamingRuta.src = "animaciones/gamingClaro.mp4";
    }

    // Actualizar y reproducir el nuevo video logo
    var animacionLogo = document.getElementById("animacionLogo");
    animacionLogo.load(); // Cargar el nuevo video
    animacionLogo.play(); // Reproducir el nuevo video

    // Actualizar y reproducir el nuevo video gaming
    var animacionGaming = document.getElementById("animacionGaming");
    animacionGaming.load(); // Cargar el nuevo video
    animacionGaming.play(); // Reproducir el nuevo video
}

// Al cargar la página, verificar y aplicar el modo oscuro si está activado en el almacenamiento local
document.addEventListener("DOMContentLoaded", function() {
  var modoOscuroActivado = localStorage.getItem("modoOscuroActivado");
  var switchModo = document.getElementById("switchModo");
  if (modoOscuroActivado === "true") {
      switchModo.checked = true;
      ModoOscuro();
  }
});

  /* ============================
        cambio de idioma 
===============================*/

  function CambiarIdioma() {
    var botonIdioma = document.getElementById('boton-lenguaje');
    var esElements = document.querySelectorAll('.es');
    var enElements = document.querySelectorAll('.en');

    if (botonIdioma.classList.contains('es-activo')) {
        esElements.forEach(function(element) {
            element.style.display = 'none';
        });
        enElements.forEach(function(element) {
            element.style.display = 'inline';
        });
        botonIdioma.classList.remove('es-activo');
    } else {
        esElements.forEach(function(element) {
            element.style.display = 'inline';
        });
        enElements.forEach(function(element) {
            element.style.display = 'none';
        });
        botonIdioma.classList.add('es-activo');
    }
  }


/* solucion propuesta por chatgpt pero no me funciono */



/* 
// Función para cargar y inicializar la barra de navegación
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            initializeNavbar();
        });
}

// Función para inicializar la barra de navegación
function initializeNavbar() {
    const toggleBtn = document.querySelector('.navbar__btn__toggle');
    const toggleBtnIcon = document.querySelector('.navbar__btn__toggle i');
    const dropDownMenu = document.querySelector('.dropdown__menu');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };
}

// Cargar la barra de navegación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", loadNavbar);
 */

document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate');
    generateBtn.addEventListener('click', generateCalendar);

    function generateCalendar() {
        const year = document.getElementById('year').value;
        const font = document.getElementById('font').value;
        const bgColor = document.getElementById('bgcolor').value;
        const textColor = document.getElementById('textcolor').value;

        const calendarContainer = document.getElementById('calendar-container');
        calendarContainer.innerHTML = '';

        for (let month = 0; month < 12; month++) {
            const monthDiv = document.createElement('div');
            monthDiv.classList.add('month');
            monthDiv.style.fontFamily = font;
            monthDiv.style.backgroundColor = bgColor;
            monthDiv.style.color = textColor;

            const monthNameDiv = document.createElement('div');
            monthNameDiv.classList.add('month-name');
            monthNameDiv.innerText = new Date(year, month).toLocaleString('default', { month: 'long' });

            const weekdaysDiv = document.createElement('div');
            weekdaysDiv.classList.add('weekdays');
            const weekdays = ['D','L', 'M', 'M', 'J', 'V', 'S'];
            weekdays.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.innerText = day;
                weekdaysDiv.appendChild(dayDiv);
            });

            const daysDiv = document.createElement('div');
            daysDiv.classList.add('days');
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDay; i++) {
                const emptyDiv = document.createElement('div');
                daysDiv.appendChild(emptyDiv);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.innerText = day;
                dayDiv.addEventListener('click', function() {
                    dayDiv.classList.toggle('marked');
                    dayDiv.style.backgroundColor = textColor;
                    dayDiv.style.color = bgColor; 
                });
                daysDiv.appendChild(dayDiv);
            }

            monthDiv.appendChild(monthNameDiv);
            monthDiv.appendChild(weekdaysDiv);
            monthDiv.appendChild(daysDiv);
            calendarContainer.appendChild(monthDiv);
        }


         // Mostrar la ventana emergente después de generar el calendario
        setTimeout(() => {
            alert('Marca las fechas importantes, dando clic sobre cada una.');
        }, 0);
        
    }
});



