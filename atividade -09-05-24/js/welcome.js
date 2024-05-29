document.addEventListener("DOMContentLoaded", function() {
    const portals = document.querySelectorAll(".portal");
    portals.forEach(portal => {
        portal.addEventListener("click", function() {
            const selectedPortal = this.querySelector(".portal-label").textContent;
            alert(`Entrando em ${selectedPortal}!`);

            
            document.body.removeAttribute("style");
            document.querySelector(".welcome-container").removeAttribute("style");
            document.querySelector("h1").removeAttribute("style");
            document.querySelector(".portal-selection").removeAttribute("style");

            
            if (selectedPortal === "Forgotten Realms") {
                document.body.style.backgroundImage = "url('imgs/forgotten_bg.jpg')"; 
                document.querySelector(".welcome-container").style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
            } else if (selectedPortal === "Night City") {
                document.body.style.backgroundColor = "#000000"; 
                document.querySelector(".welcome-container").style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
                document.querySelector("h1").style.color = "#1ee5ff"; 
                document.querySelector(".portal-selection").style.transform = "rotateY(180deg)"; 
            } else if (selectedPortal === "Dota 2") {
                document.body.style.backgroundColor = "#141414"; 
                document.querySelector(".welcome-container").style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
                document.querySelector("h1").style.color = "#ff8c00"; 
                document.querySelector(".portal-selection").style.filter = "grayscale(100%)"; 
            }
        });
    });
});
