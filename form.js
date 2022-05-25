const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const check = document.querySelector(".error");
const userList = document.querySelector("#users");


myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
        msg.style.display = "block"
        
    }else{
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // clear

        nameInput.value = "";
        emailInput.value = "";
    }

    
}
