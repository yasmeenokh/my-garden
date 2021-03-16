'use strict';

const MyGarden = function (name, img, season){
    this.name= name;
    this.img= `./img/${name.toLowerCase()}.jpeg`;
    this.season= season;
    MyGarden.all.push(this);

} 
MyGarden.all=[];



MyGarden.prototype.saveToLocalStorage = function(){
    localStorage.setItem('Flowers', JSON.stringify(MyGarden.all));     
}

const formElement = document.getElementById('ourForm');
const table = document.getElementById('table')
const tableElement= document.getElementById('tableBodyElement');
table.appendChild(tableElement);


function handelSubmit (event){
    event.preventDefault();
    let flower = new MyGarden (
        event.target.name.value,
        event.target.img.value,
        event.target.season.value
    )
    formElement.reset();
    flower.saveToLocalStorage();
    renderTable();
}

function renderTable(){
    if (localStorage.Flowers){
        let tempArray= JSON.parse(localStorage.getItem('Flowers')); 
        tableElement.innerHTML='';
        for (let i =0; i < tempArray.length; i++){

            const rowElement = document.createElement('tr');
            tableElement.appendChild(rowElement);

            const cellElement1 = document.createElement('td');
            // let img = img.setAttribute('src',  `./img/${tempArray[i].name}.jpeg`);
            // TextDecoder.appendChild.img
            rowElement.appendChild(cellElement1)
            cellElement1.textContent = tempArray[i].img;


            const cellElement2 = document.createElement('td')
            rowElement.appendChild(cellElement2)
            cellElement2.textContent = tempArray[i].name;

            const cellElement3 = document.createElement('td')
            rowElement.appendChild(cellElement3)
            cellElement3.textContent = tempArray[i].season;
        }
    }
}

const transferToLocalStorage = function() {
    if (localStorage.Flowers){
        let tempArray= JSON.parse(localStorage.getItem('Flowers'));
        for (let i= 0; i < tempArray.length ; i++){
            MyGarden.all.push(tempArray[i]);
        }
    }
{

}}




formElement.addEventListener('submit', handelSubmit); 
transferToLocalStorage();
renderTable();