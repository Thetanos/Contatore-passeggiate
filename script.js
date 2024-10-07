let count = 0;
let isMoving = false;

// Carica data odierna e contatore locale
const todayDateElement = document.getElementById("today-date");
const walkCountElement = document.getElementById("walk-count");
const oldLady = document.getElementById("oldLady");

const today = new Date().toISOString().split('T')[0]; // Data odierna
todayDateElement.innerText = today;

// Funzione per ottenere e salvare il contatore delle passeggiate per la data corrente
function getWalkCountForDate(date) {
    return parseInt(localStorage.getItem(date) || '0');
}

function setWalkCountForDate(date, count) {
    localStorage.setItem(date, count);
}

// Inizializza il contatore con il valore salvato
count = getWalkCountForDate(today);
walkCountElement.innerText = count;

// Funzione per incrementare il contatore e aggiornare la visualizzazione
document.getElementById("add-walk-btn").addEventListener("click", () => {
    count++;
    walkCountElement.innerText = count;
    setWalkCountForDate(today, count);

    // Anima la vecchietta
    if (!isMoving) {
        isMoving = true;
        oldLady.classList.add("up");
        setTimeout(() => {
            oldLady.classList.remove("up");
            isMoving = false;
        }, 1000);
    }
});

// Calendario - Mostra quante passeggiate ci sono state in un giorno selezionato
calendarElement.addEventListener("change", () => {
    const selectedDate = calendarElement.value;
    const selectedCount = getWalkCountForDate(selectedDate);
    selectedDayCountElement.innerText = selectedCount;
});
