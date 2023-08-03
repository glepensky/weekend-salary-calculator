

function submitForm(event) {
    event.preventDefault();
    console.log('submit Form');

    //Find the input field and assign the value to our variable.
    let firstNameVal = document.querySelector('#firstName-input').value
    let lastNameVal = document.querySelector('#lastName-input').value
    let idVal = document.querySelector('#idNumber-input').value
    let titleVal = document.querySelector('#title-input').value
    let annualSalaryVal = document.querySelector('#annualSalary-input').value
    console.log('my vals' , firstNameVal, lastNameVal, idVal, titleVal, annualSalaryVal);

    let employeeTable = document.querySelector('#employeeData');

    let formattedAnnualSalary = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(annualSalaryVal);

    employeeTable.innerHTML +=`
    <tr>
    <td>${firstNameVal}</td>
    <td>${lastNameVal}</td>
    <td>${idVal}</td>
    <td>${titleVal}</td>
    <td>${formattedAnnualSalary}</td>
    <td><button onClick="removeRow(event)">Delete</button></td>
    </tr>   
    `;
    // currentIndex += 1

    // if (tempVal > highTemp) {
    //     highTemp = tempVal;
    //     document.querySelector("#high-temp").innerHTML = highTemp
    //     if (tempVal > tooHigh) {
    //         document.querySelector("#high-temp").style.backgroundColor = "red"
    //     }else if(tempVal <= tooHigh){
    //     }else {
    //         console.log("Something wrong in color assignment");
    //     }
    // }else{
    //     console.log("something went wrong");
    // }
}

function removeRow(event){
    event.target.closest('tr').remove();
}