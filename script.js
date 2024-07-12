let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const salary = document.getElementById('salary').value;

    if (name && contact && salary) {
        const employee = {
            name: name,
            contact: contact,
            salary: parseFloat(salary),
            attendance: 0
        };
        employees.push(employee);
        displayEmployees();
        clearForm();
    } else {
        alert('Please fill all fields');
    }
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('salary').value = '';
}

function displayEmployees() {
    const table = document.getElementById('employee-table');
    table.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = table.insertRow();
        row.insertCell(0).innerText = employee.name;
        row.insertCell(1).innerText = employee.contact;
        row.insertCell(2).innerText = employee.salary;
        row.insertCell(3).innerHTML = `<button onclick="markAttendance(${index})">Mark Attendance</button> (${employee.attendance})`;
        row.insertCell(4).innerText = calculateMonthlySalary(employee.salary, employee.attendance);
    });
}

function markAttendance(index) {
    employees[index].attendance++;
    displayEmployees();
}

function calculateMonthlySalary(dailySalary, attendance) {
    const workingDays = 22; // Assuming 22 working days in a month
    return dailySalary * (attendance < workingDays ? attendance : workingDays);
}
