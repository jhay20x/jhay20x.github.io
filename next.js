const resultNext = document.getElementById("myTable")
const tableNext = document.querySelector("table");
const trNext = document.querySelector("tr");
const tbodyNext = document.querySelector("table tbody");

let INSERTEDCOUNT = 0;

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

const addToTable = ({_fname,_mname,_lname,_houseNo,_street,_city,_postal,_province,_age,_contactNo,
    _height,_weight,_motherName,_motherContactNo,_motherAddress,_fatherName,_fatherContactNo,
    _fatherAddress,_guardianName,_guardianContactNo,_guardianAddress}) => {

    // tr.setAttribute("data-id", _id);

    const tr = CreateTR();

    tr.appendChild(CreateTD(_fname));
    tr.appendChild(CreateTD(_mname));
    tr.appendChild(CreateTD(_lname));
    tr.appendChild(CreateTD(_houseNo));
    tr.appendChild(CreateTD(_street));
    tr.appendChild(CreateTD(_city));
    tr.appendChild(CreateTD(_postal));
    tr.appendChild(CreateTD(_province));
    tr.appendChild(CreateTD(_age));
    tr.appendChild(CreateTD(_contactNo));
    tr.appendChild(CreateTD(_height));
    tr.appendChild(CreateTD(_weight));
    tr.appendChild(CreateTD(_motherName));
    tr.appendChild(CreateTD(_motherContactNo));
    tr.appendChild(CreateTD(_motherAddress));
    tr.appendChild(CreateTD(_fatherName));
    tr.appendChild(CreateTD(_fatherContactNo));
    tr.appendChild(CreateTD(_fatherAddress));
    tr.appendChild(CreateTD(_guardianName));
    tr.appendChild(CreateTD(_guardianContactNo));
    tr.appendChild(CreateTD(_guardianAddress));

    tbodyNext.appendChild(tr);


    // const fname = row.insertCell(0);
    // const mname = row.insertCell(1);
    // const lname = row.insertCell(2);
    // const houseNo = row.insertCell(3);
    // const street = row.insertCell(4);
    // const city = row.insertCell(5);
    // const postal = row.insertCell(6);
    // const province = row.insertCell(7);
    // const age = row.insertCell(8);
    // const contactNo = row.insertCell(9);
    // const height = row.insertCell(10);
    // const weight = row.insertCell(11);
    // const motherName = row.insertCell(12);
    // const motherContactNo = row.insertCell(13);
    // const motherAddress = row.insertCell(14);
    // const fatherName = row.insertCell(15);
    // const fatherContactNo = row.insertCell(16);
    // const fatherAddress = row.insertCell(17);
    // const guardianName = row.insertCell(18);
    // const guardianContactNo = row.insertCell(19);
    // const guardianAddress = row.insertCell(20);
    
    // fname.innerHTML = _fname;
    // mname.innerHTML = _mname;
    // lname.innerHTML = _lname;
    // houseNo.innerHTML = _houseNo;
    // street.innerHTML = _street;
    // city.innerHTML = _city;
    // postal.innerHTML = _postal;
    // province.innerHTML = _province;
    // age.innerHTML = _age;
    // contactNo.innerHTML = _contactNo;
    // height.innerHTML = _height;
    // weight.innerHTML = _weight;
    // motherName.innerHTML = _motherName;
    // motherContactNo.innerHTML = _motherContactNo;
    // motherAddress.innerHTML = _motherAddress;
    // fatherName.innerHTML = _fatherName;
    // fatherContactNo.innerHTML = _fatherContactNo;
    // fatherAddress.innerHTML = _fatherAddress;
    // guardianName.innerHTML = _guardianName;
    // guardianContactNo.innerHTML = _guardianContactNo;
    // guardianAddress.innerHTML = _guardianAddress;
}

const updatetable = ({_id,_fname,_mname,_lname,_houseNo,_street,_city,_postal,_province,_age,_contactNo,
    _height,_weight,_motherName,_motherContactNo,_motherAddress,_fatherName,_fatherContactNo,
    _fatherAddress,_guardianName,_guardianContactNo,_guardianAddress}) => {
    const tableNext = resultNext.querySelector("table");

    const items = tableNext.querySelectorAll("tbody tr")

    for (const item of items){
        const id = item.getAttribute("data-id");

        if (id === _id){
            const tds = item.querySelectorAll("td");

            tds[0].innerText = _fname
            tds[1].innerText = _mname
            tds[2].innerText = _lname
            tds[3].innerText = _houseNo
            tds[4].innerText = _street
            tds[5].innerText = _city
            tds[6].innerText = _postal
            tds[7].innerText = _province
            tds[8].innerText = _age
            tds[9].innerText = _contactNo
            tds[10].innerText = _height
            tds[11].innerText = _weight
            tds[12].innerText = _motherName
            tds[13].innerText = _motherContactNo
            tds[14].innerText = _motherAddress
            tds[15].innerText = _fatherName
            tds[16].innerText = _fatherContactNo
            tds[17].innerText = _fatherAddress
            tds[18].innerText = _guardianName
            tds[19].innerText = _guardianContactNo
            tds[20].innerText = _guardianAddress
        }        
    }
}

const deleteTable = ({_id}) => {
    const tableNext = resultNext.querySelector("table");  

    const items = tableNext.querySelectorAll("tbody tr");

    for (const item of items) {
        const id = item.getAttribute("data-id");

        if(id === _id) {
            item.remove();

            console.log(_id);
        }
    }
}

const updateTimer = () => {
    setInterval(function(){
        const newData = JSON.parse(localStorage.getItem("data"));
        const clearData = localStorage.getItem("clearData");
        const updateData = JSON.parse(localStorage.getItem("updatedata"));
        const deleteData = JSON.parse(localStorage.getItem("deleteData"));

        if(newData) {
            addToTable(newData);
            localStorage.removeItem("data");
        }

        if(clearData) {
            tbodyNext.innerHTML="";
            localStorage.removeItem("clearData");
        }
        
        if(updateData) {
            updatetable(updateData)
            localStorage.removeItem("updatedata");
        }

        if(deleteData) {
            deleteTable(deleteData)
            localStorage.removeItem("deleteData")
        }
    }, 200)
}

updateTimer()