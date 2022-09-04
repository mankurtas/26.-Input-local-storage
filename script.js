class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

function tableInfoDispaly() {
  const array = JSON.parse(localStorage.getItem("objects"));

  array.forEach((element) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = array.indexOf(element) + 1;
    let td2 = document.createElement("td");
    td2.innerHTML = element.name;
    let td3 = document.createElement("td");
    td3.innerHTML = element.surname;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    tbody.appendChild(row);
  });
}

const objectsArray = [];
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  const tempArray = value.split(" ");
  const person = new Person(tempArray[0], tempArray[1]);
  objectsArray.push(person);
  console.log(person);

  const personsFromLocalStorage = JSON.parse(localStorage.getItem("objects"));

  if (personsFromLocalStorage && personsFromLocalStorage.length) {
    localStorage.setItem(
      "objects",
      JSON.stringify([personsFromLocalStorage, objectsArray])
    );
  } else {
    localStorage.setItem("objects", JSON.stringify(objectsArray));
  }
  objectsArray.pop();
  tableInfoDispaly();

  //   console.log(objectsArray);

  //   localStorage.setItem("objects", JSON.stringify(objectsArray));

  //   tableInfoDispaly(personsFromLocalStorage);
  //   let x = JSON.parse(localStorage.getItem("objects"));
  //   console.log(typeof x);
  //   console.log(x);
});

//Toliau create tabel ir atvaizduoti info is localstorage 'objects' key

// const personsFromLocalStorage = JSON.parse(localStorage.getItem("objects"));

const table = document.createElement("table");

const th = document.createElement("thead");
const tbody = document.createElement("tbody");

table.appendChild(th);
table.appendChild(tbody);

document.querySelector("body").append(table);

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "#";

let heading_2 = document.createElement("th");
heading_2.innerHTML = "Name";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Surname";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);

th.appendChild(row_1);

tableInfoDispaly();
