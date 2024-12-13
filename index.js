const countdownElement = document.getElementById('countdown');

// Fecha objetivo (13 de diciembre)
const targetDate = new Date('December 13, 2024 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        countdownElement.innerHTML = "Al fiiiiiiiiiin :333333 feli cumpleaño linda <3 espero la pase super bonito la quiero muchio <333";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Actualiza el contador cada segundo
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
