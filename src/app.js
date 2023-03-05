/*
* File: app.js
* Author: Zsiga Gergely
* Copyright: 2023, Zsiga Gergely
* Group: Szoft I-2-E
* Date: 2023-03-05
* Github: https://github.com/zsi-ga/gepida.git
* Licenc: GNU GPL
*/

const tbody = document.querySelector("#tbody");


var empList = [
    { name: "cassis", size: 28, use: "offroad", price: 557900 },
    { name: "Alboin 900", size: 28, use: "trekking", price: 519900 },
    { name: "Asgard", size: 29, use: "technikás utak", price: 519900 },
    { name: "Ruga", size: 29, use: "hegyi", price: 372900 },
    { name: "Reptila", size: 28, use: "városi", price: 308900 },
    { name: "Sirmium", size: 29, use: "hegyi", price: 264900 }    
];


function createTable(){

    empList.forEach((emp) => {
        
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdSize = document.createElement("td");
        let tdUse = document.createElement("td");
        let tdPrice = document.createElement("td");

        tdName.textContent = emp.name;
        tdSize.textContent = emp.size;
        tdUse.textContent = emp.use;
        tdPrice.textContent = emp.price;


        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdSize);
        tr.append(tdUse);
        tr.append(tdPrice);

    });    
}; 

createTable();
