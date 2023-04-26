const form = document.getElementById("form");
const result = document.getElementById("myTable")
const fnameInput = document.getElementById("fname");
const mnameInput = document.getElementById("mname");
const lnameInput = document.getElementById("lname");
const houseNoInput = document.getElementById("houseNo");
const streetInput = document.getElementById("street");
const cityInput = document.getElementById("city");
const postalInput = document.getElementById("postal");
const provinceInput = document.getElementById("province");
const ageInput = document.getElementById("age");
const contactNoInput = document.getElementById("contactNo");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const motherNameInput = document.getElementById("motherName");
const motherContactNoInput = document.getElementById("motherContactNo");
const motherAddressInput = document.getElementById("motherAddress");
const fatherNameInput = document.getElementById("fatherName");
const fatherContactNoInput = document.getElementById("fatherContactNo");
const fatherAddressInput = document.getElementById("fatherAddress");
const guardianNameInput = document.getElementById("guardianName");
const guardianContactNoInput = document.getElementById("guardianContactNo");
const guardianAddressInput = document.getElementById("guardianAddress");
const table = document.querySelector("table");
const tbody = document.querySelector("table tbody");

const clearBtn = document.getElementById("clearBtn");
const submitBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const updateBtn = document.getElementById("updateBtn");

updateBtn.style.display = "none";
deleteBtn.style.display = "none";

let INSERTEDCOUNT = 0;

let SELECTED = [];

function CreateTD(text) {
    const td = document.createElement("td");


    td.innerHTML = text;

    return td;
}

function CreateTR() {
    const tr = document.createElement("tr");

    INSERTEDCOUNT++;

    tr.setAttribute("data-id", "row-" + (INSERTEDCOUNT));

    return tr;
}

// IT WILL DISPLAY ALL DATA ON OUR FORM
function Display(TR) {
    // GET ALL TD
    const tds = TR.querySelectorAll("td");

    let _fname = tds[0].innerText;
    let _mname = tds[1].innerText;
    let _lname = tds[2].innerText;
    let _houseNo = tds[3].innerText;    
    let _street = tds[4].innerText;   
    let _city = tds[5].innerText;   
    let _postal = tds[6].innerText;   
    let _province = tds[7].innerText;   
    let _age = tds[8].innerText;   
    let _contactNo = tds[9].innerText;   
    let _height = tds[10].innerText;   
    let _weight = tds[11].innerText;   
    let _motherName = tds[12].innerText;   
    let _motherContactNo = tds[13].innerText;   
    let _motherAddress = tds[14].innerText;   
    let _fatherName = tds[15].innerText;   
    let _fatherContactNo = tds[16].innerText;   
    let _fatherAddress = tds[17].innerText;   
    let _guardianName = tds[18].innerText;   
    let _guardianContactNo = tds[19].innerText;   
    let _guardianAddress = tds[20].innerText;   

    fnameInput.value = _fname; 
    mnameInput.value = _mname;
    lnameInput.value = _lname;
    houseNoInput.value = _houseNo;
    streetInput.value = _street;
    cityInput.value = _city;
    postalInput.value = _postal;
    provinceInput.value = _province;
    ageInput.value = _age;
    contactNoInput.value = _contactNo;
    heightInput.value = _height;
    weightInput.value = _weight;
    motherNameInput.value = _motherName;
    motherContactNoInput.value = _motherContactNo;
    motherAddressInput.value = _motherAddress;
    fatherNameInput.value = _fatherName;
    fatherContactNoInput.value = _fatherContactNo;
    fatherAddressInput.value = _fatherAddress;
    guardianNameInput.value = _guardianName;
    guardianContactNoInput.value = _guardianContactNo;
    guardianAddressInput.value = _guardianAddress;
}

function Listen(TR) {
    // FIRST WE NEED TO SELECT OUR TABLE
    const table = result.querySelector("table");

    // NOW WE WILL USE "querySelectorAll" to Select of the elements base on our query
    const items = table.querySelectorAll("tbody tr");

    if (!items.length) return

    // WE WILL CREATE FUNCTION TO RESET ALL OF OUR ITEM
    // ACTIVE MEANS IT WILL BE HIGHLIGHTED, USING OUR CLASS and CSS
    const resetActive = function () {
        // LOOP THROUGH ALL OF ITEMS or TR
        for (const i of items) {
            // REMOVE THE CLASS ACTIVE, IT WILL REMOVE THE STYLE OF "active" CLASS
            i.classList.remove("active");
        }
    }

    // NOW CREATE A FUNCTION AGAIN TO CHANGE THE ACTIVE OR TO HIGHLIGHT A SPECIFIC ITEM
    const makeActive = function (item, bool) {
        // iF A bool IS TRUE, WE WILL ADD active CLASS
        if (bool) {
            item.classList.add("active");
        } else {
            // ELSE WE WILL REMOVE IT
            item.classList.remove("active");
        }
    }

    // HERE WE WILL UPDATE THE HIGHLIGHT OF THE ITEM BASE ON WHAT THE USER SELECTS
    const updateActives = () => {
        // RESET ALL OF THE HIGHLIGHTED FIRST
        resetActive();

        // THEN LOOP TO ALL SELECTED ITEMS
        for (const selectedItem of SELECTED) {
            // LOOP TO ALL ITEMS EVEN NOT SELECTED
            for (let i = 0; i < items.length; i++) {
                // EACH WE WILL GET ITS ATTRIBUTE ID
                const id = items[i].getAttribute("data-id");

                // IF THERE THE SAME THEN make it ACTIVE
                if (id === selectedItem) {
                    makeActive(items[i], true);
                }

            }
        }

        // NOW HERE IS THE EXAMPLE OF TERNARY CONDITIONAL STATEMENT

        //                        IF CONDITION          | RESULT IF TRUE | RESULT IF FALSE
        submitBtn.style.display = SELECTED.length === 0 ? "inline-block" : "none"; // display it if no selection
        updateBtn.style.display = SELECTED.length === 1 ? "inline-block" : "none"; // display if only one selection
        deleteBtn.style.display = SELECTED.length > 0 ? "inline-block" : "none"; // display if 1 or more selection


        // IF THERE IS NO SELECTION JUST RESET THE FORM
        if (SELECTED.length === 0) {
            form.reset();
        }
    }

    if (TR) {
        // ADD A CLICK LISTENER
        // WITH A EVENT PARAMETER
        TR.addEventListener("click", function (event) {
            // SELECT THE ATTRIBUTE data-id WHICH WE put on our getData.php

            const id = TR.getAttribute("data-id");

            // check if it is already on the array
            const isAlreadySelected = SELECTED.includes(id);

            // if it is already selected by user
            if (isAlreadySelected) {
                // CHECK IF USER CURRENTLY HOLDING SHIFT KEY
                // IF TRUllY IT IS, USER WANT TO UNSELECT ONE ITEM ONLY FROM ALL SELECTION
                if (event.shiftKey) {
                    SELECTED = SELECTED.filter((_id) => _id !== id);
                } else {
                    // ELSE RESET THE SELECTION, WITH THE CURRENT SELECTION
                    SELECTED = [id];
                }
            } else {
                // IF HOLDING THE SHIFT KEY
                if (event.shiftKey) {
                    // USER WANT'S TO SELECT MORE
                    // SO PUSH IT'S ID
                    SELECTED.push(id);
                } else {
                    // ELSE DO A NORMAL PUSH
                    SELECTED = [id];
                }

                // IF SELECTED ONE, DISPLAY IT
                Display(TR);
            }


            // THEN UPDATE IT BASE ON THE CURRENT SELECTION
            updateActives();
        });
    }

    updateActives();

}

function Delete() {
    
    // CONFIRM IF USER WANT'S TO CONTINUE THE ACTION
    const confirmAction = confirm("Do you really want to delete " + SELECTED.length + " items?");
    const table = result.querySelector("table");

    // NOW WE WILL USE "querySelectorAll" to Select of the elements base on our query
    const items = table.querySelectorAll("tbody tr");

    // CONFIRMED
    if (confirmAction) {
        // LOOP THROUH ITEMS
        for (const item of items) {
            const id = item.getAttribute("data-id");

            // AND FIND IF THE ID IS ON OUR ARRAY, ID'S COLLECTION OF SELECTION
            if (SELECTED.includes(id)) {
                // IF IT IS, REMOVE THE ELEMENT
                item.remove();
                
                SELECTED = SELECTED.filter((_id => _id !== id));

                let _id = id;

                console.log(_id);

                const deleteData = {_id};

                localStorage.setItem("deleteData", JSON.stringify(deleteData));
            }
        }
    }


    // RESET THE FORM
    form.reset();
    submitBtn.style.display = "inline-block";
    updateBtn.style.display = "none";    
    deleteBtn.style.display = "none";
    //alert('reset')

    Listen("");
}

function Update() {
    const table = result.querySelector("table");

    // NOW WE WILL USE "querySelectorAll" to Select of the elements base on our query
    const items = table.querySelectorAll("tbody tr");

    // DON'T CONTINUE IF THERE iS NO DATA INSIDE
    if (!items.length) return;

    for (const item of items) {
        const id = item.getAttribute("data-id");

        if (id === SELECTED[0]) {
            const tds = item.querySelectorAll("td");
            // UPDATE NEW VALUES

            tds[0].innerText = fnameInput.value
            tds[1].innerText = mnameInput.value
            tds[2].innerText = lnameInput.value
            tds[3].innerText = houseNoInput.value
            tds[4].innerText = streetInput.value
            tds[5].innerText = cityInput.value
            tds[6].innerText = postalInput.value
            tds[7].innerText = provinceInput.value
            tds[8].innerText = ageInput.value
            tds[9].innerText = contactNoInput.value
            tds[10].innerText = heightInput.value
            tds[11].innerText = weightInput.value
            tds[12].innerText = motherNameInput.value
            tds[13].innerText = motherContactNoInput.value
            tds[14].innerText = motherAddressInput.value
            tds[15].innerText = fatherNameInput.value
            tds[16].innerText = fatherContactNoInput.value
            tds[17].innerText = fatherAddressInput.value
            tds[18].innerText = guardianNameInput.value
            tds[19].innerText = guardianContactNoInput.value
            tds[20].innerText = guardianAddressInput.value
        }        
    }

    let _id = SELECTED[0];
    let _fname = fnameInput.value;
    let _mname = mnameInput.value;
    let _lname = lnameInput.value;
    let _houseNo = houseNoInput.value;    
    let _street = streetInput.value;   
    let _city = cityInput.value;   
    let _postal = postalInput.value;   
    let _province = provinceInput.value;   
    let _age = ageInput.value;   
    let _contactNo = contactNoInput.value;   
    let _height = heightInput.value;   
    let _weight = weightInput.value;   
    let _motherName = motherNameInput.value;   
    let _motherContactNo = motherContactNoInput.value;   
    let _motherAddress = motherAddressInput.value;   
    let _fatherName = fatherNameInput.value;   
    let _fatherContactNo = fatherContactNoInput.value;   
    let _fatherAddress = fatherAddressInput.value;   
    let _guardianName = guardianNameInput.value;   
    let _guardianContactNo = guardianContactNoInput.value;   
    let _guardianAddress = guardianAddressInput.value;  

    const updatedata = {_id,_fname,_mname,_lname,_houseNo,_street,_city,_postal,_province,_age,_contactNo,
        _height,_weight,_motherName,_motherContactNo,_motherAddress,_fatherName,_fatherContactNo,
        _fatherAddress,_guardianName,_guardianContactNo,_guardianAddress};  

    localStorage.setItem("updatedata", JSON.stringify(updatedata));
}

Listen();

// function addToTable({fname, age, houseNo}){
//     const row = tbody.insertRow();

//     const _name = row.insertCell(0);
//     const _age = row.insertCell(1);
//     const _address = row.insertCell(2);

//     _name.innerHTML = fname;
//     _age.innerHTML = age;
//     _address.innerHTML = houseNo;
// }

form.addEventListener('submit',function(e){
    //     alert("aweawe")
    //     e.preventDefault();

    //     const fname = fnameInput.value;
    //     const age = ageInput.value;
    //     const houseNo = houseNoInput.value;

    //     const data = {fname,age,houseNo};

    //     addToTable(data)

    // localStorage.setItem("data", JSON.stringify(data));

    // form.reset();

    if (fnameInput.value == "" || mnameInput.value == "" || lnameInput.value == "" ||
    houseNoInput.value == "" || streetInput.value == "" || cityInput.value == ""
    || postalInput.value == "" || provinceInput.value == "" || ageInput.value == ""
    || contactNoInput.value == "" || weightInput.value == "" || heightInput.value == ""
    || motherNameInput.value == "" || motherContactNoInput.value == "" || motherAddressInput.value == ""
    || fatherNameInput.value == "" || fatherContactNoInput.value == "" || fatherAddressInput.value == ""
    || guardianNameInput.value == "" || guardianContactNoInput.value == "" || guardianAddressInput.value == "") {
    alert("All fields must be filled out first before inserting.");
    e.preventDefault();
    }
    else{
        e.preventDefault();

        const tr = CreateTR();
    
        // CREATE TD EACH VALUES
        tr.appendChild(CreateTD(fnameInput.value));
        tr.appendChild(CreateTD(mnameInput.value));
        tr.appendChild(CreateTD(lnameInput.value));
        tr.appendChild(CreateTD(houseNoInput.value));
        tr.appendChild(CreateTD(streetInput.value));
        tr.appendChild(CreateTD(cityInput.value));
        tr.appendChild(CreateTD(postalInput.value));
        tr.appendChild(CreateTD(provinceInput.value));
        tr.appendChild(CreateTD(ageInput.value));
        tr.appendChild(CreateTD(contactNoInput.value));
        tr.appendChild(CreateTD(heightInput.value));
        tr.appendChild(CreateTD(weightInput.value));
        tr.appendChild(CreateTD(motherNameInput.value));
        tr.appendChild(CreateTD(motherContactNoInput.value));
        tr.appendChild(CreateTD(motherAddressInput.value));
        tr.appendChild(CreateTD(fatherNameInput.value));
        tr.appendChild(CreateTD(fatherContactNoInput.value));
        tr.appendChild(CreateTD(fatherAddressInput.value));
        tr.appendChild(CreateTD(guardianNameInput.value));
        tr.appendChild(CreateTD(guardianContactNoInput.value));
        tr.appendChild(CreateTD(guardianAddressInput.value));
    
        tbody.appendChild(tr);
        
        // const id = tr.getAttribute("data-id");

        // let _id = id;
        let _fname = fnameInput.value;
        let _mname = mnameInput.value;
        let _lname = lnameInput.value;
        let _houseNo = houseNoInput.value;    
        let _street = streetInput.value;   
        let _city = cityInput.value;   
        let _postal = postalInput.value;   
        let _province = provinceInput.value;   
        let _age = ageInput.value;   
        let _contactNo = contactNoInput.value;   
        let _height = heightInput.value;   
        let _weight = weightInput.value;   
        let _motherName = motherNameInput.value;   
        let _motherContactNo = motherContactNoInput.value;   
        let _motherAddress = motherAddressInput.value;   
        let _fatherName = fatherNameInput.value;   
        let _fatherContactNo = fatherContactNoInput.value;   
        let _fatherAddress = fatherAddressInput.value;   
        let _guardianName = guardianNameInput.value;   
        let _guardianContactNo = guardianContactNoInput.value;   
        let _guardianAddress = guardianAddressInput.value;  

        const data = {_fname,_mname,_lname,_houseNo,_street,_city,_postal,_province,_age,_contactNo,
            _height,_weight,_motherName,_motherContactNo,_motherAddress,_fatherName,_fatherContactNo,
            _fatherAddress,_guardianName,_guardianContactNo,_guardianAddress};       

        localStorage.setItem("data", JSON.stringify(data));
                    
        fnameInput.value = ""; 
        mnameInput.value = "";
        lnameInput.value = "";
        houseNoInput.value = "";
        streetInput.value = "";
        cityInput.value = "";
        postalInput.value = "";
        provinceInput.value = "";
        ageInput.value = "";
        contactNoInput.value = "";
        heightInput.value = "";
        weightInput.value = "";
        motherNameInput.value = "";
        motherContactNoInput.value = "";
        motherAddressInput.value = "";
        fatherNameInput.value = "";
        fatherContactNoInput.value = "";
        fatherAddressInput.value = "";
        guardianNameInput.value = "";
        guardianContactNoInput.value = "";
        guardianAddressInput.value = "";
    
        
        Listen(tr);
    }
})

clearBtn.addEventListener('click', function(){
    localStorage.setItem("clearData", true);
    form.reset();
    tbody.innerHTML = "";
})