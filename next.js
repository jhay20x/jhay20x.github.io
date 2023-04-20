const table = document.querySelector("table");
const tbody = document.querySelector("table tbody");

const addToTable = ({name,age,address}) => {
    const row = tbody.insertRow();

    const _name = row.insertCell(0);
    const _age = row.insertCell(1);
    const _address = row.insertCell(2);

    _name.innerHTML = name;
    _age.innerHTML = age;
    _address.innerHTML = address;
}

const updateTimer = () => {
    setInterval(function(){
        const newData = JSON.parse(localStorage.getItem("data"));
        const clearData = localStorage.getItem("clearData")

        if(newData) {
            addToTable(newData);
            localStorage.removeItem("data");
        }

        if(clearData) {
            tbody.innerHTML="";
            localStorage.removeItem("clearData");
        }
    }, 200)
}

updateTimer()