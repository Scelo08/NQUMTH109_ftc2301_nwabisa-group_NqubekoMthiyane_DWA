// scripts.js
/**
 * Adds a warning whenever one or both input fields are not filled.
 */
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const warning = document.querySelector("[data-warning]")

/**
 * Event listener for form submission.
 *
 * @param {Event} event - The submit event object.
 */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

/**
 * This checks if either dividend or divider is empty.
 *  */ 
if(!dividend || !divider){
    warning.innerText = "Division not performed. Both values are required in inputs. Try again.";
    result.innertext = ""; //result is cleared by setting result.innertext to an empty string.
}else{
    warning.innertext = ""; 
    result.innerText = Math.floor(dividend / divider);
}

/**
 * This checks if the divider is below zero and stops the calculation.
 */
if(divider < 0){
    warning.innerText = "Division not performed. Invalid number provided. Try again.";
    //result.innerText = "";

}else{
    warning.innerText = "";
    try {
        result.innerText = Math.floor(dividend / divider);
      } catch (error) {
        console.error("An error occurred:", error);
        console.error("Call stack:", error.stack);
      }
}
});
 
