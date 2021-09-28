var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var Name = document.getElementById('error1');
var lName = document.getElementById('lName');
var phone = document.getElementById('error6');
var email = document.getElementById('error5');
var Pass = document.getElementById('Pass');
var school = document.getElementById('error3')
var lastName = document.getElementById('lastName');
let status = document.getElementById('status')
var date = document.getElementById('Date');
var age = document.getElementById('error4')
var Age = document.getElementById('Age');

var selectNumber = document.getElementById('selectPhone');
var gender = document.getElementById('selectGender');
var email = document.getElementById('selectEmail');
var password = document.getElementById('password');
var school = document.getElementById('selectSchool');
var selectCountry = document.getElementById('selectCountry');
var grade = document.getElementsByClassName('score');
var agePoint = document.getElementById('agePoint');
var countryPoint = document.getElementById('countryPoint');
var averagePoint = document.getElementById('averagePoint');
var button = document.getElementById('error2');
var address = document.getElementById('addRess');

var button = document.getElementById('btn');
var test = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var test_1 = "^(?=.{8,})";
var ageValue,
    result,
    result_1,
    result_2;



// basic information validation


function validateForm() {

    if (firstName.value == '' || firstName.value == null) {
        error1.innerHTML = ' Name Required';
        return false;
    } else {
        error1.innerHTML = '';
    }
    if (lastName.value == '' || lastName.value == null) {
        error1.innerHTML = ' Name Required';
        return false;
    } else {
        error1.innerHTML = '';
    }
    if (address.value == '' || address.value == null) {
        error2.innerHTML = 'Address Required';
        return false;

    } else {
        error2.innerHTML = '';
    }
    if (school.value == '' || school.value == null) {
        error3.innerHTML = 'Enter School Name';
        return false;
    } else {
        error3.innerHTML = '';
    }
    if (email.value == '' || email.value == null || !email.value.match(test)) {
        error5.innerHTML = 'Valid Email required';
        return false;
    } else {
        error5.innerHTML = '';
    }
    if (selectNumber.value == '' || selectNumber.value.length < 10 || selectNumber.value.length > 11) {
        error6.innerHTML = 'Invalid Phone Number';
        return false;
    } else {
        error6.innerHTML = '';
    }


    // subject validation
    var sub1 = document.getElementById('english');
    var sub2 = document.getElementById('maths');

    var sub3 = document.getElementById('subject_0');
    var sub4 = document.getElementById('subject_1');
    var sub5 = document.getElementById('subject_2');
    var sub6 = document.getElementById('subject_3');
    var sub7 = document.getElementById('subject_4');
    var sub8 = document.getElementById('subject_5');


    // score / grade addition

    var addGrade = parseInt(grade[0].value) + parseInt(grade[1].value) + parseInt(grade[2].value) + parseInt(grade[3].value) + parseInt(grade[4].value) + parseInt(grade[5].value) + parseInt(grade[6].value) + parseInt(grade[7].value);

    // average grade
    var totalGrade = Math.round(addGrade / 8);
    console.log(totalGrade)


    // grade condition

    if (totalGrade >= 90 && totalGrade <= 100) {
        result_2 = 150;
    } else
    if (totalGrade >= 85 && totalGrade <= 89) {
        result_2 = 140;
    } else if (totalGrade >= 75 && totalGrade <= 84) {
        result_2 = 120;
    } else if (totalGrade >= 65 && totalGrade <= 74) {
        result_2 = 100;
    } else if (totalGrade >= 60 && totalScore <= 64) {
        result_2 = 80;
    } else if (totalGrade >= 50 && totalGrade <= 59) {
        result_2 = 50;
    } else if (totalGrade >= 40 && totalGrade <= 49) {
        result_2 = 20;
    } else {
        result_2 = 10
    }
    console.log(totalGrade);




    // scholarship award condition

    var totalScore = result + result_1 + result_2;
    var check = 'Congratulations ' + firstName.value + ', ' + 'You have been awarded a Scholarship in Christian Academy.'
    var check_1 = 'Sorry ' + firstName.value + ', ' + 'You are not eligible for Scholarship in Christian Academy.'
    if (totalScore >= 180) {
        status.innerHTML = check;
    } else {
        status.innerHTML = check_1;
    }

    // breakDown
    agePoint.innerHTML = 'Age Point: ' + result;
    countryPoint.innerHTML = 'Country Point: ' + result_1;
    averagePoint.innerHTML = 'Average Grade Point: ' + result_2;

    myChart = new Chart(formChart, {
        type: 'pie',
        data: {
            labels: ['Age', 'Country', 'Average Grade'],
            datasets: [{
                data: [result, result_1, result_2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
            }, ],
        },
    });



}
let formChart = document.getElementById('myChart').getContext('2d');


let getDate = new Date();
console.log(getDate);
date.addEventListener('blur', function() {
    if (date === '' || date === null) {
        console.log('input invalid')
    } else {
        let dot = new Date();
        let newDate = new Date(date.value);
        console.log(newDate);
        let newYear = dot.getFullYear();
        let newerDate = newDate.getFullYear();
        let newAge = newYear - newerDate;
        Age.value = newAge;
        // console.log(result);

        // give point

        if (newAge >= 18 && newAge <= 24) {
            result = 100;
        }
        else if (newAge <= 17) {
            result = 10;
        }else if (newAge >= 25 && newAge <= 30) {
            result = 80;
        } else if (newAge >= 31 && newAge <= 35) {
            result = 50;
        } else if (newAge >= 36 && newAge <= 40) {
            result = 30;
        } else if (newAge == 41 || newAge > 41) {
            result = 10;
        }
        console.log(result);


    }
})
selectCountry.addEventListener('change', function() {
        console.log(selectCountry.value);
        console.log(result_1);

        if (selectCountry.value == '') {
            console.log('error')
        } else if (selectCountry.value == 'africa') {
            result_1 = 50;
        } else if (selectCountry.value == 'asia') {
            result_1 = 40;
        } else if (selectCountry.value == 'southAmerica') {
            result_1 = 30;
        } else if (selectCountry.value == 'northAmerica') {
            result_1 = 20;
        } else {
            result_1 < 20;
        }
    })
