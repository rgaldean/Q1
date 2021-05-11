document.addEventListener("DOMContentLoaded", () => {       
const URL = "https://rhymebrain.com/talk?function=hello";   
    
const wordRhym= () => {
    
const input = document.getElementById("RhymeBrainInput");
const word = input.value;
let str = " ";
let res = str.split(" ");
    
    function words (url) {
        if(this[url] === undefined) {
            fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((rhymData) => {
                console.log("fetching")
                this[url] = '(${rhymData.match})';
                document.getElementById("rhym.phrase").innerHTML = this[url];
            })
        } else {
            console.log(wordRhym)
            
            document.getElementById("rhym.phrase").innerHTML = this[url];
        }
    }
}
const surveyButton = document.getElementById("submit");
        surveyButton.addEventListener("click", () => {
});
    
});