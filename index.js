function createPoem(response){
console.log(response)
new Typewriter('.poem', {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    cursor: "",
  });

}



function generatePoem(event){
    event.preventDefault();

    

let instructionsInput = document.querySelector("#user-instruction")
let apiKey="ee030ced13bec32faetaa24oa4e6af48";
let prompt=`Generate a poem about ${instructionsInput.value}`;
let context="You are a creative and romantic AI assistant, your mission is to generate 4 line poem in basic html. Make sure to follow user instructions";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector(".poem")
poemElement.classList.remove("hidden")

axios.get(apiUrl).then(createPoem);
    
    new Typewriter('.poem', {
        strings: "Generating poem..",
        autoStart: true,
        delay:1,
        cursor: "",
      });

    }


let poemFormElement = document.querySelector("#generator");
poemFormElement.addEventListener("submit", generatePoem);