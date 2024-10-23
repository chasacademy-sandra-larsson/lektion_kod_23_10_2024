// Hur kan jag veta vilket element jag klickar på?


document.addEventListener("DOMContentLoaded", function() {
    // Lägg till alla färgerna i listan "myList"
    
    const ul = document.getElementById("myList");
   
    
    const colors = [
        "Red", "Blue", "Green", "Yellow", "Orange", 
        "Purple", "Pink", "Brown", "Black", "White",
        "Gray", "Cyan", "Magenta", "Lime", "Indigo",
        "Violet", "Turquoise", "Gold", "Silver", "Maroon"
      ];
    
    
    colors.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        //console.log(li);
        ul.appendChild(li);
    })
    console.log(ul)

    // Alternativ 1 - Lägg en eventlyssnare på alla li-element
    
    
    // Alternativ 2 - Använd eventdelegation
 
    });