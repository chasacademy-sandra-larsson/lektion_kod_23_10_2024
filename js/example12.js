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
    
    
    colors.forEach(function(item, index) {
        const li = document.createElement("li");
        li.dataset.id = index;
        li.textContent = item;
        //console.log(li);
        ul.appendChild(li);
    })
   

    // Alternativ 1 - Lägg en eventlyssnare på alla li-element
    
    const listItems = document.querySelectorAll("li");

    console.log(listItems)

    listItems.forEach(function(item) {
       item.addEventListener("click", function() {
         console.log(`Du klickade på: `, item.textContent);
         console.log(`Du klickade på: `, item.dataset.id);
       })
    })
 

    
    // Alternativ 2 - Använd eventdelegation
    // Man lägger endast en eventlyssnare på parent och sen "delegerar ner vilket event som skedde"

    
    ul.addEventListener("click", function(event) {
        if(event.target.tagName === "LI") {
            console.log(event.target.textContent);
            console.log(event.target.dataset.id);
          }
    });



    });