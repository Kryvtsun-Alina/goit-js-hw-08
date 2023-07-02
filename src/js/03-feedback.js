const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', onHandlerInput);
const LOCALSTORAGE_KEY = "feedback-form-state";
const dataForm = {};
function onHandlerInput(evt) {
    evt.preventDefault();
    dataForm[evt.target.name] = evt.target.value;
    console.log(dataForm);
    saveDataToLocalStorage();  
}
function saveDataToLocalStorage() {
    const jsonData = JSON.stringify(dataForm);
  localStorage.setItem(LOCALSTORAGE_KEY, jsonData);
}

