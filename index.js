const form = document.getElementById("form");
const ageInput = document.getElementById("age")
const nameInput = document.getElementById("name")
const addressInput = document.getElementById("address")
const table = document.querySelector("table")
const tbody = document.querySelector("table tbody")
const clearBtn = document.getElementById("clear")

function addToTable({name, age, address}){
    const row = tbody.insertRow();

    const _name = row.insertCell(0);
    const _age = row.insertCell(1);
    const _address = row.insertCell(2);

    _name.innerHTML = name;
    _age.innerHTML = age;
    _address.innerHTML = address;
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const name = nameInput.value;
    const age = ageInput.value;
    const address = addressInput.value;

    const data = {name,age,address};

    addToTable(data)

    localStorage.setItem("data", JSON.stringify(data));

    form.reset();
})

clearBtn.addEventListener('click', function(){
    localStorage.setItem("clearData", true);
    form.reset();
    tbody.innerHTML = "";
})