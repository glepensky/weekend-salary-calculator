function submitForm(event) {
    event.preventDefault();
    console.log('submit Form');

    // Find the input field and assign the value to our variable.
    let firstNameVal = document.querySelector('#firstName-input').value;
    let lastNameVal = document.querySelector('#lastName-input').value;
    let idVal = document.querySelector('#idNumber-input').value;
    let titleVal = document.querySelector('#title-input').value;
    let annualSalaryVal = document.querySelector('#annualSalary-input').value;

    // Check if the input for annualSalaryVal is valid
    if (isNaN(parseFloat(annualSalaryVal))) {
        alert('Please enter a valid number for Annual Salary.');
        return;
    }

    let employeeTable = document.querySelector('#employeeData');

    let formattedAnnualSalary = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(annualSalaryVal);

    employeeTable.innerHTML += `
    <tr>
    <td>${firstNameVal}</td>
    <td>${lastNameVal}</td>
    <td>${idVal}</td>
    <td>${titleVal}</td>
    <td>${formattedAnnualSalary}</td>
    <td><button onClick="removeRow(event)">Delete</button></td>
    </tr>   
    `;

    // Clear the input fields after submission
    document.querySelector('#firstName-input').value = '';
    document.querySelector('#lastName-input').value = '';
    document.querySelector('#idNumber-input').value = '';
    document.querySelector('#title-input').value = '';
    document.querySelector('#annualSalary-input').value = '';

    calculateTotalMonthly();
}

function calculateTotalMonthly() {
    let annualSalaryElements = document.querySelectorAll('#employeeData tbody tr td:nth-child(5)');
    let totalAnnual = 0;

    annualSalaryElements.forEach((element) => {
        let annualSalary = +element.textContent.replace(/[^\d.-]/g, ''); // Remove currency formatting
        totalAnnual += annualSalary;
    });

    let totalMonthly = totalAnnual / 12;

    let totalMonthlyElement = document.querySelector('#totalMonthlyValue');
    totalMonthlyElement.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(totalMonthly);
}

function removeRow(event) {
    event.target.closest('tr').remove();
    calculateTotalMonthly();
}
