function startLoading() {
   
    let progress = 0;
    let loader = document.getElementById("progressBar");
    let statusText = document.getElementById("statusText");
    let sButton = document.getElementById("startButton");

    sButton.disabled = true;

    let interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            statusText.textContent = "Loading completat!";
            sButton.disabled = false;
            return;
        }

        progress++; 
        loader.style.width = progress + "%"; 
        statusText.textContent = `Progress: ${progress}%`; 
    }, 50); 
}

let sButton = document.getElementById("startButton");
sButton.addEventListener("click", startLoading);
