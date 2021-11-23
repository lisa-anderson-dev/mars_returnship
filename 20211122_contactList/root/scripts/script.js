class Contact {
    #fullName;
    #email;
    #city;
    #country;

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

let contactProps = ["fullName", "email", "city", "country"];

function addContact() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    if (!fullName) 
        alert("Full Name is a required field.");
    else if (!email) 
        alert("Email is a required field.");
    else {
        let newContact = new Contact();
        newContact.fullName = fullName;
        newContact.email = email;
        newContact.city = city;
        newContact.country = country;
        buildContactList(newContact);
    }   
}

function buildContactList(newContact) {
    let contactTable = document.getElementById("contactList");
    let numRows = document.querySelectorAll("#contactList tr").length;
    let row = contactTable.insertRow(numRows);
    for (let i = 0; i < contactProps.length; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = newContact[contactProps[i]];
    }
    document.getElementById("addContactForm").reset();
}