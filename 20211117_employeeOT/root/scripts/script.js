function Employee(employeeId, fullName, position) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.position = position;
    this.baseSalary = 0;
    this.otRate = 0;
};

function JrDeveloper(employeeId, fullName) {
    Employee.call(this, employeeId, fullName, "jr");
    this.baseSalary = 2000;
    this.otRate = 50;
}

function MidDeveloper(employeeId, fullName) {
    Employee.call(this, employeeId, fullName, "mid");
    this.baseSalary = 3000;
    this.otRate = 75;
}

function SrDeveloper(employeeId, fullName) {
    Employee.call(this, employeeId, fullName, "sr");
    this.baseSalary = 4000;
    this.otRate = 100;
}

function Manager(employeeId, fullName) {
    Employee.call(this, employeeId, fullName, "mgr");
    this.baseSalary = 5000;
    this.otRate = 125;
}

function createDevTeam() {
    let jr = new JrDeveloper(1, "Jenny Junior");
    let mid = new MidDeveloper(2, "Madeline Mid");
    let sr = new SrDeveloper(3, "Sonia Senior");
    let mgr = new Manager(4, "Monica Manager");
    return [jr, mid, sr, mgr];
}

let team = createDevTeam();
let employee = team[0];
let displayProp = ["employeeId", "fullName", "position"];
let fieldNames = {
    "employeeId": "Employee ID",
    "fullName": "Full Name", 
    "position": "Position", 
    "baseSalary": "Base Salary", 
    "otRate": "Overtime Rate"
};
let positionNames = {
    "jr": "Jr. Developer",
    "mid": "Mid Developer",
    "sr": "Sr. Developer",
    "mgr": "Manager"
};

function buildTable() {
    let employeeTable = document.getElementById("employeeTable");
    let cell;
    let row = employeeTable.insertRow(0);
    for (let i = 0; i < displayProp.length; i++) {
        cell = row.insertCell(i).outerHTML = "<th>" + fieldNames[displayProp[i]] + "</th>"; 
    }
    for (let i = 0; i < team.length; i++) {
        let row = employeeTable.insertRow(i + 1);
        row.id = "row" + i;
        row.onclick = function() {
            let id = parseInt(this.id.slice(-1));
            employee = team[id];
            let contents = "";
            for (let prop in employee) {
                let propValue = prop == "position" ? positionNames[employee[prop]] : employee[prop];
                if (prop == "baseSalary" || prop == "otRate") propValue = "$" + propValue + ".00";        
                contents += "<li><label for='" + prop + "'>" + fieldNames[prop] +": </label><input type='text' id='" + prop + "' name='" + prop + "' value='" + propValue + "' readonly></li>";
            };
            contents += "<li><label for='otHours'>How much overtime (in hours) did you work this month?</label><input type='number' id='otHours' name='otHours' value=0></li><li><label for='total'>Total Salary:</label><input type='text' id='total' name='total' value=$" + employee["baseSalary"] + ".00 readonly></li>";
            document.getElementById("detailList").innerHTML = contents;
            document.getElementById("employeeDetails").style.visibility = "visible";
        };
        for (let j = 0; j < displayProp.length; j++) {
            let cell = row.insertCell(j);
            if (displayProp[j] == "position") cell.innerHTML = positionNames[team[i]["position"]];
            else cell.innerHTML = team[i][displayProp[j]];
        }
    }
}

function calcTotal() {
    let hours = document.getElementById("otHours").value;
    let salary = document.getElementById("total");
    let total = hours * employee.otRate + employee.baseSalary;
    salary.value = "$" + total + ".00";
    salary.style.visibility = "visible";
}
    
buildTable();