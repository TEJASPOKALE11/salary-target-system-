document.getElementById('employeeForm').addEventListener('submit', addEmployee);

let employees = [];

function addEmployee(event) {
    event.preventDefault();

    const name = document.getElementById('employeeName').value;
    const salary = parseFloat(document.getElementById('employeeSalary').value);
    const target = parseFloat(document.getElementById('salaryTarget').value);

    const employee = {
        name: name,
        salary: salary,
        target: target
    };

    employees.push(employee);
    displayEmployees();

    // Clear form
    document.getElementById('employeeForm').reset();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);

        const salaryCell = document.createElement('td');
        salaryCell.textContent = employee.salary;
        row.appendChild(salaryCell);

        const targetCell = document.createElement('td');
        targetCell.textContent = employee.target;
        row.appendChild(targetCell);

        employeeList.appendChild(row);
    });
}
