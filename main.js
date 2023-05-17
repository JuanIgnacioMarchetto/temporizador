document.addEventListener("DOMContentLoaded", function() {
    // Reloj Analógico
    setInterval(updateClock, 1000);
  
    function updateClock() {
      const now = new Date();
      const hourHand = document.querySelector(".hour-hand");
      const minuteHand = document.querySelector(".minute-hand");
      const secondHand = document.querySelector(".second-hand");
  
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      const hourRotation = (hours * 30) + (minutes * 0.5);
      const minuteRotation = (minutes * 6) + (seconds * 0.1);
      const secondRotation = seconds * 6;
  
      hourHand.style.transform = `rotate(${hourRotation}deg)`;
      minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
      secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }
  
    // Temporizador de tiempo abierto
    let elapsedTime = 0;
    setInterval(updateTimer, 1000);
  
    function updateTimer() {
      elapsedTime++;
      const hours = Math.floor(elapsedTime / 3600);
      const minutes = Math.floor((elapsedTime % 3600) / 60);
      const seconds = elapsedTime % 60;
  
      const timerElement = document.getElementById("timer");
      timerElement.textContent = `Tiempo abierto: ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
  
    // Temporizador de tiempo conectado a la red Wi-Fi
    let wifiElapsedTime = 0;
    setInterval(updateWifiTimer, 1000);
  
    function updateWifiTimer() {
      wifiElapsedTime++;
      const hours = Math.floor(wifiElapsedTime / 3600);
      const minutes = Math.floor((wifiElapsedTime % 3600) / 60);
      const seconds = wifiElapsedTime % 60;
  
      const wifiTimerElement = document.getElementById("wifi-timer");
      wifiTimerElement.textContent = `Tiempo conectado a la red Wi-Fi: ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
  
    function padZero(number) {
      return number.toString().padStart(2, "0");
    }
  });