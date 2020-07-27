// Navigation Mobile Menu Functions

function myFunction() {
    var x = document.getElementsByClassName('main-nav')[0];
    if (window.innerWidth >= 699) {
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  }

  function yourFunction() {
    var x = document.getElementsByClassName('main-nav')[0];
    if (window.innerWidth <= 698) {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  }

  function mySubmenuFunction() {
    var x = document.getElementsByClassName('dropdown-content')[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function mySubmenuFunction2() {
    var x = document.getElementsByClassName('dropdown-content2')[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function mySubmenuFunction3() {
    var x = document.getElementsByClassName('dropdown-content3')[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//Tuition Calculator JavaScript

//Declaring Const, Let, & Var

const dailyRate = 35;

let infantWeekly = 160;
let youngToddlerWeekly = 150;
let oldToddlerWeekly = 140;
let preschoolWeekly = 130;
let schoolAgeWeekly = 100;

var tuitionRateTotal = 0;
var numberOfDays = 0;
var numberOfInfants = 0;
var numberOfYoungToddlers = 0;
var numberOfOlderToddlers = 0;
var numberOfPreschoolers = 0;
var numberOfSchoolAge = 0;



//Pre-setting the Tuition Calculator

document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;

document.getElementById("numberOfDays").innerHTML = numberOfDays;

document.getElementById("numberOfInfants").innerHTML = numberOfInfants;

document.getElementById("numberOfYoungToddlers").innerHTML = numberOfYoungToddlers;

document.getElementById("numberOfOldToddlers").innerHTML = numberOfOlderToddlers;

document.getElementById("numberOfPreschoolers").innerHTML = numberOfPreschoolers;

document.getElementById("numberOfSchoolAge").innerHTML = numberOfSchoolAge;



//Declaring Functions for Daily Rates

function addDailyRate() {
  tuitionRateTotal += dailyRate;
  numberOfDays += 1;
  document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
  document.getElementById("numberOfDays").innerHTML = numberOfDays;
}

function minusDailyRate() {
    tuitionRateTotal -= dailyRate;
    numberOfDays -= 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfDays").innerHTML = numberOfDays;
}



//Declaring Functions for Infant Tuition Rates

function addInfantWeekly() {
    tuitionRateTotal += infantWeekly;
    numberOfInfants += 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfInfants").innerHTML = numberOfInfants;
}

  function minusInfantWeekly() {
    tuitionRateTotal -= infantWeekly;
    numberOfInfants -= 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfInfants").innerHTML = numberOfInfants;
}



//Declaring Functions for Young Toddlers Tuition Rates

function addYoungToddlerWeekly() {
    tuitionRateTotal += youngToddlerWeekly;
    numberOfYoungToddlers += 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfYoungToddlers").innerHTML = numberOfYoungToddlers;
}

  function minusYoungToddlerWeekly() {
    tuitionRateTotal -= youngToddlerWeekly;
    numberOfYoungToddlers -= 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfYoungToddlers").innerHTML = numberOfYoungToddlers;
}



//Declaring Functions for Older Toddlers Tuition Rates

function addOldToddlerWeekly() {
    tuitionRateTotal += oldToddlerWeekly;
    numberOfOlderToddlers += 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfOldToddlers").innerHTML = numberOfOlderToddlers;
}

function minusOldToddlerWeekly() {
    tuitionRateTotal -= oldToddlerWeekly;
    numberOfOlderToddlers -= 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfOldToddlers").innerHTML = numberOfOlderToddlers;
}



//Declaring Functions for Preschoolers Tuition Rates

function addPreschoolWeekly() {
    tuitionRateTotal += preschoolWeekly;
    numberOfPreschoolers += 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfPreschoolers").innerHTML = numberOfPreschoolers;
}

function minusPreschoolWeekly() {
    tuitionRateTotal -= preschoolWeekly;
    numberOfPreschoolers -= 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfPreschoolers").innerHTML = numberOfPreschoolers;
}



//Declaring Functions for School-aged Tuition Rates

function addSchoolAgeWeekly() {
    tuitionRateTotal += schoolAgeWeekly;
    numberOfSchoolAge += 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfSchoolAge").innerHTML = numberOfSchoolAge;
}

function minusSchoolAgeWeekly() {
    tuitionRateTotal -= schoolAgeWeekly;
    numberOfSchoolAge -= 1;
    document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
    document.getElementById("numberOfSchoolAge").innerHTML = numberOfSchoolAge;
}



//Declaring Function to 

function printClicks() {
  document.getElementById("outputCalc").innerHTML = "$" + tuitionRateTotal;
}