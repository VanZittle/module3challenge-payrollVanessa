// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  let keepAdding = true;
  
  while (keepAdding){
    let employee = {};

    const userName = window.prompt("Add employee's name");
    if (userName === "" || !isNaN(userName)){
      return window.alert("Please enter a valid choice");
    }else employee.firstName = userName;

    const userLastName = window.prompt("Add employee's last name");
    if (userLastName === "" || !isNaN(userLastName)){
      return window.alert("Please enter a valid choice");
    }else employee.lastName = userLastName;
    
    const userSalary = window.prompt("Add employee's average salary");
    if (isNaN(userSalary)){
      window.alert("Please enter a valid choice");
    }else employee.salary = Number(userSalary);
      
    employeesArray.push(employee);
    
    const addAnother = window.confirm("Add another employee?")
    
    if (addAnother === false) return employeesArray;
      
  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sumSalary = 0;
  for (let index = 0; index < employeesArray.length; index++) {
    sumSalary = sumSalary + employeesArray [index].salary 
  }
  console.log(`The average salary between our ${employeesArray.length} employees is ${sumSalary / employeesArray.length}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = Math.floor(Math.random()*employeesArray.length);

  console.log(`This month's winner is ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
