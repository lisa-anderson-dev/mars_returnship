class Contact {
    #fullName;
    #email;
    #city;
    #country;

    constructor(fullName, email, city, country) {
        this.#fullName = fullName;
        this.#email = email;
        this.#city = city;
        this.#country = country;
    }

    get fullName() {
        return this.#fullName;
    }

    set fullName(fullName) {
        this.#fullName = fullName;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get city() {
        return this.#city;
    }

    set city(city) {
        if (!city)
            this.#city = "";
        else
            this.#city = city;
    }

    get country() {
        return this.#country;
    }

    set country(country) {
        if (!country)
            this.#country = "";
        else
            this.#country = country;
    }
}

$("#submit").click(function() { processContact(); });

let contactProps = ["fullName", "email", "city", "country"];
let editRow = "";

function processContact() {
    let fullName = $("#fullName").val();
    let email = $("#email").val();
    let city = $("#city").val();
    let country = $("#country").val();
    if (!fullName) 
        alert("Full Name is a required field.");
    else if (!email) 
        alert("Email is a required field.");
    else {
        let contact = new Contact(fullName, email, city, country);
        if (editRow) {
            let children = editRow.children;
            for (let i = 0; i < children.length - 1; i++) {
                children[i].innerHTML = contact[contactProps[i]];
            }
        }
        else {
            buildContactList(contact);
        }
        $("#addContactForm").trigger("reset");
        editRow = "";
    }
}

function buildContactList(newContact) {
    let contactTable = document.getElementById("contactList");
    let numRows = document.querySelectorAll("#contactList tr").length;
    let row = contactTable.insertRow(numRows);
    for (let i = 0; i < contactProps.length + 1; i++) {
        let cell = row.insertCell(i);
        if (i == contactProps.length) {
            cell.className = "linkCell";
            cell.innerHTML = "<a href='#' onclick='displayEditContact(this.parentElement.parentElement)'>Edit</a>&ensp;<a href='#' onclick='deleteContact(this.parentElement.parentElement)'>Delete</a>"
        }
        else
            cell.innerHTML = newContact[contactProps[i]];
    }
}

function displayEditContact(row) {
    editRow = row;
    let children = row.children;
    let fieldArr = ["fullName", "email", "city", "country"];
    for (let i = 0; i < children.length - 1; i++) {
        $("#" + fieldArr[i]).val(children[i].innerHTML);
    }
}

function deleteContact(row) {
    let del = confirm("Are you sure you want to delete this contact?");
    if (del)
        row.remove();
}
