const formData = {
    email: "", 
    message: "" 
}

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");


form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


populateText();

function handleSubmit(event) {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!email || !message) {
        alert("Fill please all fields");
        return;
    
}

    console.log("Submitted data:", formData);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
}


function populateText() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage) {
        const data = JSON.parse(savedMessage);

        form.email.value = data.email || "";
        form.message.value = data.message || "";
        formData.email = data.email || "";
        formData.message = data.message || "";
        }
    }