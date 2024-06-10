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



