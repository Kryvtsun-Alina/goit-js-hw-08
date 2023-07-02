import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onHandlerInput, 500));
formEl.addEventListener('submit', onSubmitHandler);
const LOCALSTORAGE_KEY = "feedback-form-state";
let dataForm = {};

loadDataFromLocalStorage();

function onHandlerInput(evt) {
    evt.preventDefault();
    dataForm[evt.target.name] = evt.target.value;
    saveDataToLocalStorage();  
}

function saveDataToLocalStorage() {
    const jsonData = JSON.stringify(dataForm);
    localStorage.setItem(LOCALSTORAGE_KEY, jsonData);
}

function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
        dataForm = JSON.parse(savedData);
        fillFormFields();
    }
}

function fillFormFields() {
    for (let field in dataForm) {
        const inputField = formEl.querySelector(`[name="${field}"]`);
        if (inputField) {
            inputField.value = dataForm[field];
        }
    }
}

function onSubmitHandler(event) {
    event.preventDefault();
    console.log(dataForm);
    clearLocalStorage();
    formEl.reset();
}

function clearLocalStorage() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
}