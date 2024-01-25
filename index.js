

function generatePoem(event){
    event.preventDefault();
    
    new Typewriter('.poem', {
        strings: "lalalalal",
        autoStart: true,
        delay:1,
        cursor: "",
      });

    }


let poemFormElement = document.querySelector("#generator");
poemFormElement.addEventListener("submit", generatePoem);