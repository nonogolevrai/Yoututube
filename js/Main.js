const Patate = document.querySelector(".circle");
Patate.addEventListener("click", 
                       (function(event)
                       {event.target.classList.toggle("circle-shadow")}))