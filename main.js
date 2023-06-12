
function calculateDaysBetweenDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = Math.abs(end.getTime() - start.getTime());
  const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return days;
}


let thePrincipalAmount = 0;
let firstInterimPayment = 0;
let secondInterimPayment = 0;
let thirdInterimPayment = 0;
let fourthInterimPayment = 0;
let fifthInterimPayment = 0;
let firstDate
let stringFirstDate
let secondDate 
let stringSecondDate 
let thirdDate   
let stringThirdDate
let fourthDate
let stringFourthDate
let fifthDate
let stringFifthDate
let sixthDate
let stringSixthDate
let startToFirstInterim = 0;
let firstToSecondInterim = 0;
let secondToThirdInterim = 0;
let thirdToFourthInterim = 0;
let fourthToFifthInterim = 0;
let theInterest = 0;
let theOffer = 0;
let assessedBill = 0;
let assessedBillDate
let theEquation
let offer21Date 
let exclusiveOfferAmount;
let offerInterest =0;
let fullDays = 0;
let firstPeriod = 0;
let secondPeriod = 0;
let thirdPeriod = 0;
let fourthPeriod = 0;
let fifthPeriod = 0;
let sixthPeriod = 0;
let originalOffer = 0;
let firstPeriodInterest=0;
let secondPeriodInterest=0;
let thirdPeriodInterest=0;
let fourthPeriodInterest=0;
let fifthPeriodInterest = 0;
let sixthPeriodInterest = 0;
let interestIncBill = 0;
let billInterest = 0;
let assessedInterest = 0;
let billAssessedFigure = 0;


document.getElementById('firstInterimDetails').style.display = 'none'
document.getElementById('secondInterimDetails').style.display = 'none'
document.getElementById('thirdInterimDetails').style.display = 'none'
document.getElementById('fourthInterimDetails').style.display = 'none'
//document.getElementById('fifthInterimDetails').style.display = 'none'
document.getElementById('theOffer').style.display = 'none'

let showFrontPage = document.getElementById('showFrontPage')
showFrontPage.style.display = 'none'

let billAnswers = document.getElementById('billAnswers');
billAnswers.style.display = 'none';

let reStart = document.getElementById('reStart');
reStart.style.display = 'none';

let askAboutBill = document.getElementById('askAboutBill')
askAboutBill.style.display = 'none'

let headInterim = document.getElementById('headInterim');
headInterim.style.display = 'none'

let billQuestions = document.getElementById('billQuestions');


let originalDate = document.getElementById('originalDate');
let originalDateButton = document.getElementById('originalDateButton');
let originalDateDisplay = document.getElementById('originalDateDisplay');


originalDate.addEventListener('keydown', function(event) {
  if (event.key === 'Enter'){
  logDate()
  }
});

function logDate(){
  let inputDate = originalDate.value;
  let date = new Date(inputDate);
  stringFirstDate = date.toLocaleDateString('en-US', {
    day : 'numeric',
    month : 'long',
    year : 'numeric'
  })
  originalDateDisplay.innerHTML = stringFirstDate;
  firstDate = originalDate.value
  originalDate.value = ''
  checkInputFields()
}

originalDateButton.addEventListener('click', logDate);

let interest = document.getElementById('interest');
let interestButton = document.getElementById('interestButton');
let interestDisplay = document.getElementById('interestDisplay');

function logInterest(){
  interestDisplay.innerHTML = interest.value + '%';
  let thestringValue = interest.value;
  interest.value = ''
  theInterest = parseFloat(thestringValue)
  //console.log(typeof theInterest)
checkInputFields()
}

interestButton.addEventListener('click', logInterest);

let principal = document.getElementById('thePrincipal');
let originalPrincipalButton = document.getElementById('originalPrincipalButton');
let originalPrincipalDisplay = document.getElementById('originalPrincipalDisplay');

function logPrincipal(){
  thePrincipalAmount = principal.value;
  let formattedNumber = Number(thePrincipalAmount).toLocaleString()
  originalPrincipalDisplay.innerHTML = '£' + formattedNumber;
  principal.value = ''
  checkInputFields()
}

principal.addEventListener('keydown', function(event) {
  if (event.key === 'Enter'){
  logPrincipal()
  
  }
});

function checkInputFields() {
  if (thePrincipalAmount > 0 && firstDate !== undefined ) {
    showFrontPage.style.display = 'block';
  } else {
    showFrontPage.style.display = 'none';
  }
}

showFrontPage.addEventListener('click', () => {
  let formattedNumber = Number(thePrincipalAmount).toLocaleString()
  document.getElementById('frontPage').style.display = 'none'
  headInterim.style.display = 'block'
  document.getElementById('firstInterimDetails').style.display = 'block'
  document.getElementById('showPrincipalDetails').innerHTML = 
  `<h1>Costs claimed</h1>
  <p>Total costs claimed: £${formattedNumber}</p> 
  <p>Interest Rate: ${theInterest}% </p> 
  <p>Original Date from which interest runs: ${stringFirstDate} </p> 
  `
})

originalPrincipalButton.addEventListener('click', logPrincipal);

let firstInterimAmount = document.getElementById('firstInterimAmount');
let firstInterimDate = document.getElementById('firstInterimDate');
let firstInterimDisplay = document.getElementById('firstInterimDisplay'); 
let firstInterimButton = document.getElementById('firstInterimButton');

let firstInterimButton2 = document.getElementById('firstInterimButton2');

function logFirstInterim(){
  if (firstInterimAmount.value !== '' && firstInterimDate.value !== ''){ 
    secondDate = firstInterimDate.value;
    let date = new Date(secondDate);
    stringSecondDate = date.toLocaleDateString('en-US', {
      day : 'numeric',
      month : 'long',
      year : 'numeric'
      
    })

  startToFirstInterim = calculateDaysBetweenDates(firstDate, secondDate);
  let formattedNumber = Number(firstInterimAmount.value).toLocaleString()
  firstInterimDisplay.innerHTML = `<div class = 'interimRecord'>First Interim Payment : £ ${formattedNumber}   paid on  ${stringSecondDate} </div>`;
  firstInterimPayment = firstInterimAmount.value;
  firstInterimAmount.value = ''
  firstInterimDate.value = ''
}}


firstInterimButton.addEventListener('click', function() {
  if (firstInterimAmount.value !== '' && firstInterimDate.value !== ''){ 
  logFirstInterim() 
  document.getElementById('firstInterimDetails').style.display = 'none'
  document.getElementById('secondInterimDetails').style.display = 'block'
  }
})


firstInterimButton2.addEventListener('click', function() {
  logFirstInterim()
  document.getElementById('firstInterimDetails').style.display = 'none'
  document.getElementById('theOffer').style.display = 'block'
})

let secondInterimAmount = document.getElementById('secondInterimAmount');
let secondInterimDate = document.getElementById('secondInterimDate');
let secondInterimDisplay = document.getElementById('secondInterimDisplay');
let secondInterimButton = document.getElementById('secondInterimButton');
let secondInterimButton2 = document.getElementById('secondInterimButton2');

function logSecondInterim(){
  
  if (secondInterimAmount.value !== '' && secondInterimDate.value !== ''){ 
    thirdDate = secondInterimDate.value;
    firstToSecondInterim = calculateDaysBetweenDates(secondDate, thirdDate);
    let date = new Date(thirdDate);
    stringThirdDate = date.toLocaleDateString('en-US', {
      day : 'numeric',
      month : 'long',
      year : 'numeric'
    })
    let formattedNumber = Number(secondInterimAmount.value).toLocaleString()
    
  secondInterimDisplay.innerHTML = 
  `<div class = 'interimRecord'>Second Interim Payment : £ ${formattedNumber}   paid on  ${stringThirdDate} </div>`;
  secondInterimPayment = secondInterimAmount.value;
  secondInterimAmount.value = ''
  secondInterimDate.value = ''
}}

secondInterimButton.addEventListener('click', function() {
  if (secondInterimAmount.value !== '' && secondInterimDate.value !== ''){ 
  logSecondInterim() 
  document.getElementById('secondInterimDetails').style.display = 'none'
  document.getElementById('thirdInterimDetails').style.display = 'block'
}})

secondInterimButton2.addEventListener('click', function() {
  logSecondInterim()
  document.getElementById('secondInterimDetails').style.display = 'none'
  document.getElementById('theOffer').style.display = 'block'
})

let thirdInterimAmount = document.getElementById('thirdInterimAmount');
let thirdInterimDate = document.getElementById('thirdInterimDate');
let thirdInterimDisplay = document.getElementById('thirdInterimDisplay');
let thirdInterimButton = document.getElementById('thirdInterimButton');
let thirdInterimButton2 = document.getElementById('thirdInterimButton2');

function logThirdInterim(){
  if (thirdInterimAmount.value !== '' && thirdInterimDate.value !== ''){ 
    fourthDate = thirdInterimDate.value;
    secondToThirdInterim = calculateDaysBetweenDates(thirdDate, fourthDate);
    let date = new Date(fourthDate);
    stringFourthDate = date.toLocaleDateString('en-US', {
      day : 'numeric',
      month : 'long',
      year : 'numeric'
    })
    let formattedNumber = Number(thirdInterimAmount.value).toLocaleString()
  thirdInterimDisplay.innerHTML = 
  `<div class = 'interimRecord'>Third Interim Payment : £ ${formattedNumber}   paid on  ${stringFourthDate} </div>`;
  thirdInterimPayment = thirdInterimAmount.value;
  thirdInterimAmount.value = ''
  thirdInterimDate.value = ''
}}

thirdInterimButton.addEventListener('click', function() {
  if (thirdInterimAmount.value !== '' && thirdInterimDate.value !== ''){ 
  logThirdInterim()
  document.getElementById('thirdInterimDetails').style.display = 'none'
  document.getElementById('fourthInterimDetails').style.display = 'block'
}})

thirdInterimButton2.addEventListener('click', function() {
  logThirdInterim()
  document.getElementById('thirdInterimDetails').style.display = 'none'
  document.getElementById('theOffer').style.display = 'block'
})

let fourthInterimAmount = document.getElementById('fourthInterimAmount');
let fourthInterimDate = document.getElementById('fourthInterimDate');
let fourthInterimDisplay = document.getElementById('fourthInterimDisplay');
let fourthInterimButton = document.getElementById('fourthInterimButton');
let fourthInterimButton2 = document.getElementById('fourthInterimButton2');

function logFourthInterim(){
  if (fourthInterimAmount.value !== '' && fourthInterimDate.value !== ''){
    fifthDate = fourthInterimDate.value;
    thirdToFourthInterim = calculateDaysBetweenDates(fourthDate, fifthDate);
    let date = new Date(fifthDate);
    stringFifthDate = date.toLocaleDateString('en-US', {
      day : 'numeric',
      month : 'long',
      year : 'numeric'
    })
    let formattedNumber = Number(fourthInterimAmount.value).toLocaleString()
  fourthInterimDisplay.innerHTML = 
  `<div class = 'interimRecord'>Fourth Interim Payment : £ ${formattedNumber}   paid on  ${stringFifthDate} </div>`;
  fourthInterimPayment = fourthInterimAmount.value;
  fourthInterimAmount.value = ''
  fourthInterimDate.value = ''
}}

fourthInterimButton.addEventListener('click', function() {
  if (fourthInterimAmount.value !== '' && fourthInterimDate.value !== ''){
  logFourthInterim()
  document.getElementById('fourthInterimDetails').style.display = 'none'
  document.getElementById('theOffer').style.display = 'block'
}})

fourthInterimButton2.addEventListener('click', function() {
  logFourthInterim()
  document.getElementById('fourthInterimDetails').style.display = 'none'
  document.getElementById('theOffer').style.display = 'block'
})


let askAboutOffer = document.getElementById('askAboutOffer')
let interestInclusiveOfferAmount = document.getElementById('interestInclusiveOfferAmount');
let interestInclusiveOfferDate = document.getElementById('interestInclusiveOfferDate');
let interestInclusiveOfferButton = document.getElementById('interestInclusiveOfferButton');
let interestInclusiveOfferDisplay = document.getElementById('interestInclusiveOfferDisplay');
let noOfferButton = document.getElementById('noOfferButton');


function logInterestInclusiveOffer(){
  if (interestInclusiveOfferAmount.value !== '' && interestInclusiveOfferDate.value !== ''){
    let formattedNumber = Number(interestInclusiveOfferAmount.value).toLocaleString()
    let date = new Date(interestInclusiveOfferDate.value);
let stringOfferDate = date.toLocaleDateString('en-US', {
  day : 'numeric',
  month : 'long',
  year : 'numeric'
})
  interestInclusiveOfferDisplay.innerHTML = '£' + formattedNumber + ' offered  inclusive of interest on ' + stringOfferDate;
  let thestringValue = interestInclusiveOfferAmount.value;
  theOffer = parseFloat(thestringValue)
  offer21Date = interestInclusiveOfferDate.value;
interestInclusiveOfferAmount.value = ''
interestInclusiveOfferDate.value = ''
//console.log(theOffer)
//console.log(typeof theOffer)
askAboutOffer.style.display = 'none'
}}

interestInclusiveOfferButton.addEventListener('click', function() {
  logInterestInclusiveOffer()
  findExclusiveOffer.style.display = 'block'
  askAboutOffer.style.display = 'none'
})

noOfferButton.addEventListener('click', function() {
  askAboutOffer.style.display = 'none'
  document.getElementById('theOffer').style.display = 'none'
  askAboutBill.style.display = 'block'
})

let findExclusiveOffer = document.getElementById('findExclusiveOffer');
findExclusiveOffer.style.display = 'none'
let theExclusiveOffer = document.getElementById('theExclusiveOffer');

findExclusiveOffer.addEventListener('click', function() {
  checkExclusiveOffer()
  findExclusiveOffer.style.display = 'none'
  document.getElementById('askAboutOffer').style.display = 'none'
  askAboutBill.style.display = 'block'
  //billQuestions.style.display = 'block';
  console.log("help")
})

function checkExclusiveOffer() {
  let offerDays = calculateDaysBetweenDates(firstDate, offer21Date)
  if (offerDays  > 0 && startToFirstInterim === 0){
    console.log("zero")
    console.log(offerDays)
    firstPeriod = calculateDaysBetweenDates(firstDate, offer21Date)


firstPeriodInterest = theOffer - (theOffer/(1+(theInterest*firstPeriod/365/100)))
offerInterest = firstPeriodInterest 
originalOffer = (theOffer - offerInterest)
console.log("Original Offer:", originalOffer);
console.log("Offer Interest:", offerInterest);
theExclusiveOffer.innerHTML = 'The interest exclusive offer was worth £' + Number(originalOffer.toFixed(2)).toLocaleString() + ' and the interest at time of expiry was £' 
+ Number(offerInterest.toFixed(2)).toLocaleString + ' totalling an offer of £' + Number(theOffer.toFixed(2)).toLocaleString() 
}
//Number(myInterest.toFixed(2)).toLocaleString()
  else if (
    offerDays > startToFirstInterim  && startToFirstInterim > 0 
    &&
    (firstToSecondInterim === 0) || ((firstToSecondInterim + startToFirstInterim)>offerDays )
    ) {
    console.log("one")
    firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
    secondPeriod = calculateDaysBetweenDates(secondDate, offer21Date ) 

    firstPeriodInterest = theOffer - (theOffer/(1+(theInterest*firstPeriod/365/100)))

    secondPeriodInterest = (theOffer-firstPeriodInterest-firstInterimPayment) -
    (theOffer- firstPeriodInterest - firstInterimPayment)/(1+(theInterest * secondPeriod/365/100))

    offerInterest = firstPeriodInterest + secondPeriodInterest

  console.log(firstPeriodInterest);
  console.log(secondPeriodInterest);
  offerInterest = firstPeriodInterest + secondPeriodInterest
  originalOffer = (theOffer - offerInterest)
  console.log("Original Offer:", originalOffer);
  console.log("Offer Interest:", offerInterest);
  console.log("The Offer:", theOffer);
  theExclusiveOffer.innerHTML = 'The interest exclusive offer was worth £' + Number(originalOffer.toFixed(2)).toLocaleString() + ' and the interest at time of expiry was £' 
+ Number(offerInterest.toFixed(2)).toLocaleString() + ' totalling an offer of £' + Number(theOffer.toFixed(2)).toLocaleString() +". <br></br>" +
"The interest comprised of :  <br></br>" +
 '£' + Number(firstPeriodInterest.toFixed(2)).toLocaleString() +  " for " + firstPeriod + " days between " + firstDate + " and " + secondDate + " <br></br> " + 
 '£' + Number(secondPeriodInterest.toFixed(2)).toLocaleString() + " for " + secondPeriod + " days between " + secondDate + " and " + offer21Date
  }   
 else if (
  (startToFirstInterim + firstToSecondInterim < offerDays) 
  && 
  startToFirstInterim > 0 && firstToSecondInterim > 0 &&
  (secondToThirdInterim ===0 || (startToFirstInterim + firstToSecondInterim + secondToThirdInterim)>offerDays)
 ){
  console.log("two")
  let firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
  let secondPeriod = calculateDaysBetweenDates(secondDate, thirdDate)
  let thirdPeriod = calculateDaysBetweenDates(thirdDate, offer21Date)
  let firstPeriodInterest = (theInterest / 100) * firstPeriod / 365;
  let secondPeriodInterest = (theInterest / 100) * secondPeriod / 365;
  let thirdPeriodInterest = (theInterest / 100) * thirdPeriod / 365;
  let tolerance = 0.07;
  let calculatedOffer = 0;
  while (Math.abs(calculatedOffer - theOffer) >= tolerance) {
    originalOffer += 1;
    let firstBalance = originalOffer;
    let firstPeriodInterestAmount = firstBalance * firstPeriodInterest;
    let secondBalance = firstBalance + firstPeriodInterestAmount - firstInterimPayment;
    let secondPeriodInterestAmount = secondBalance * secondPeriodInterest;
    let thirdBalance = secondBalance + secondPeriodInterestAmount - secondInterimPayment;
    let thirdPeriodInterestAmount = thirdBalance * thirdPeriodInterest;
    calculatedOffer = firstBalance + firstPeriodInterestAmount + secondPeriodInterestAmount + thirdPeriodInterestAmount;
    console.log("Calculated Offer:", calculatedOffer);
    if (Math.abs(calculatedOffer - theOffer) <= tolerance){
      originalOffer = parseFloat(originalOffer.toFixed(2))
      let myInterest = theOffer - originalOffer
      console.log(originalOffer)
      theExclusiveOffer.innerHTML = 'The interest exclusive offer was worth £' + Number(originalOffer).toLocaleString() + ' and the interest at time of expiry was £' 
      + Number(myInterest.toFixed(2)).toLocaleString() + ' totalling an offer of £' + Number(theOffer).toLocaleString() +". <br></br>" +
      "The interest comprised of :  <br></br>" +
      "£" + Number(firstPeriodInterestAmount.toFixed(2)).toLocaleString() +  " for " + firstPeriod + " days between " + firstDate + " and " + secondDate + " <br></br> " + 
      "£" + Number(secondPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + secondPeriod + " days between " + secondDate + " and " + thirdDate + 
      " <br></br> " + "£" + Number(thirdPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + thirdPeriod + " days between " + thirdDate + " and " + offer21Date
      break;
    }
  }
}

else if (
  (thirdInterimPayment >0 && fourthInterimPayment ===0)
    //(startToFirstInterim + firstToSecondInterim + secondToThirdInterim < offerDays)
  //(startToFirstInterim + firstToSecondInterim + secondToThirdInterim) <= offerDays 
  //&& 
  //startToFirstInterim > 0 && firstToSecondInterim > 0 && secondToThirdInterim > 0 &&
  //(thirdToFourthInterim === 0 || (startToFirstInterim + firstToSecondInterim + secondToThirdInterim + thirdToFourthInterim)>offerDays)
  ) {
  console.log("three............")
  let firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
  let secondPeriod = calculateDaysBetweenDates(secondDate, thirdDate)
  let thirdPeriod = calculateDaysBetweenDates(thirdDate, fourthDate)
  let fourthPeriod = calculateDaysBetweenDates(fourthDate, offer21Date)  
  let firstPeriodInterest = (theInterest / 100) * firstPeriod / 365;
  let secondPeriodInterest = (theInterest / 100) * secondPeriod / 365;
  let thirdPeriodInterest = (theInterest / 100) * thirdPeriod / 365;
  let fourthPeriodInterest = (theInterest / 100) * fourthPeriod / 365;
  let calculatedOffer = 0;
  let tolerance = 0.72;
  while (Math.abs(calculatedOffer - theOffer) >= tolerance) {
    originalOffer += 1;
    let firstBalance = originalOffer;
    let firstPeriodInterestAmount = firstBalance * firstPeriodInterest;
    let secondBalance = firstBalance + firstPeriodInterestAmount - firstInterimPayment;
    let secondPeriodInterestAmount = secondBalance * secondPeriodInterest;
    let thirdBalance = secondBalance + secondPeriodInterestAmount - secondInterimPayment;
    let thirdPeriodInterestAmount = thirdBalance * thirdPeriodInterest;
    let fourthBalance = thirdBalance + thirdPeriodInterestAmount - thirdInterimPayment;
    let fourthPeriodInterestAmount = fourthBalance * fourthPeriodInterest;
    calculatedOffer = firstBalance + firstPeriodInterestAmount + secondPeriodInterestAmount + thirdPeriodInterestAmount + fourthPeriodInterestAmount;
    console.log("Calculated Offer:", calculatedOffer);
    if (Math.abs(calculatedOffer - theOffer) <= tolerance){
      originalOffer = parseFloat(originalOffer.toFixed(2))
      let myInterest = theOffer - originalOffer
      console.log(originalOffer)
      theExclusiveOffer.innerHTML = 'The interest exclusive offer was worth £' + Number(originalOffer).toLocaleString() + ' and the interest at time of expiry was £' 
      + Number(myInterest.toFixed(2)).toLocaleString() + ' totalling an offer of £' + Number(theOffer).toLocaleString() +". <br></br>" +
      "The interest comprised of :  <br></br>" +
      "£" + Number(firstPeriodInterestAmount.toFixed(2)).toLocaleString() +  " for " + firstPeriod + " days between " + firstDate + " and " + secondDate + " <br></br> " + 
      "£" + Number(secondPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + secondPeriod + " days between " + secondDate + " and " + thirdDate + 
      " <br></br> " + "£" + Number(thirdPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + thirdPeriod + " days between " + thirdDate + " and " + fourthDate +
      " <br></br> " + "£" + Number(fourthPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + fourthPeriod + " days between " + fourthDate + " and " + offer21Date;
      break;
    }
  }
}

else if 
  (fourthInterimPayment >0) {
console.log("four")
  let firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
  let secondPeriod = calculateDaysBetweenDates(secondDate, thirdDate)
  let thirdPeriod = calculateDaysBetweenDates( thirdDate, fourthDate)
  let fourthPeriod = calculateDaysBetweenDates(fourthDate, fifthDate)
  let fifthPeriod = calculateDaysBetweenDates(fifthDate, offer21Date)
  let firstPeriodInterest = (theInterest / 100) * firstPeriod / 365;
  let secondPeriodInterest = (theInterest / 100) * secondPeriod / 365;
  let thirdPeriodInterest = (theInterest / 100) * thirdPeriod / 365;
  let fourthPeriodInterest = (theInterest / 100) * fourthPeriod / 365;
  let fifthPeriodInterest = (theInterest / 100) * fifthPeriod / 365; 
  let calculatedOffer = 0;
  let tolerance = 0.7;
  while (Math.abs(calculatedOffer - theOffer) >= tolerance) {
    originalOffer += 1;
    let firstBalance = originalOffer;
    let firstPeriodInterestAmount = firstBalance * firstPeriodInterest;
    let secondBalance = firstBalance + firstPeriodInterestAmount - firstInterimPayment;
    let secondPeriodInterestAmount = secondBalance * secondPeriodInterest;
    let thirdBalance = secondBalance + secondPeriodInterestAmount - secondInterimPayment;
    let thirdPeriodInterestAmount = thirdBalance * thirdPeriodInterest;
    let fourthBalance = thirdBalance + thirdPeriodInterestAmount - thirdInterimPayment;
    let fourthPeriodInterestAmount = fourthBalance * fourthPeriodInterest;
    let fifthBalance = fourthBalance + fourthPeriodInterestAmount - fourthInterimPayment;
    let fifthPeriodInterestAmount = fifthBalance * fifthPeriodInterest;
    calculatedOffer = firstBalance + firstPeriodInterestAmount + secondPeriodInterestAmount + thirdPeriodInterestAmount + 
    fourthPeriodInterestAmount + fifthPeriodInterestAmount;
    console.log("Calculated Offer:", calculatedOffer);
    if (Math.abs(calculatedOffer - theOffer) <= tolerance){
      originalOffer = parseFloat(originalOffer.toFixed(2))
      let myInterest = theOffer - originalOffer
      console.log(originalOffer)
theExclusiveOffer.innerHTML = 'The interest exclusive offer was worth £' + Number(originalOffer).toLocaleString() + 
' and the interest at time of expiry was £' + Number(myInterest.toFixed(2)).toLocaleString() + 
' totalling an offer of £' + Number(theOffer).toLocaleString() +". <br></br>" +
"The interest comprised of :  <br></br>" + "£" + Number(firstPeriodInterestAmount.toFixed(2)).toLocaleString() +  
" for " + firstPeriod + " days between " + firstDate + " and " + secondDate + " <br></br> " + 
"£" + Number(secondPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + secondPeriod + 
" days between " + secondDate + " and " + thirdDate + " <br></br> " + "£" + 
Number(thirdPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + thirdPeriod + " days between " + 
thirdDate + " and " + fourthDate + " <br></br> " + "£" + Number(fourthPeriodInterestAmount.toFixed(2)).toLocaleString() +
" for " + fourthPeriod + " days between " + fourthDate + " and " + fifthDate + " <br></br> " + "£" +
Number(fifthPeriodInterestAmount.toFixed(2)).toLocaleString() + " for " + fifthPeriod + " days between " + 
fifthDate + " and " + offer21Date;
    break;
    }
  }
}

}


let billAssessedAmount = document.getElementById('billAssessedAmount');
let billAssessedDate = document.getElementById('billAssessedDate');
let billAssessedButton = document.getElementById('billAssessedButton');
let billAssessedDisplay = document.getElementById('billAssessedDisplay');

billAssessedButton.addEventListener('click', function() {
  logBillAssessed()
})

function logBillAssessed(){
  if (billAssessedAmount.value !== '' && billAssessedDate.value !== ''){
    assessedBill = billAssessedAmount.value;
    assessedBillDate = billAssessedDate.value;
  billAssessedAmount.value = ''
  billAssessedDate.value = ''
  console.log(assessedBill)
  billAssessedDisplay.innerHTML = 'Asessed at £' + Number(assessedBill).toLocaleString()
  
  billQuestions.style.display = 'none';
  billAnswers.style.display = 'block';
}}



let findInterestOnBill = document.getElementById('findInterestOnBill');
findInterestOnBill.addEventListener('click', function() {
  checkInterestOnBill()
  findInterestOnBill.style.display = 'none';
  billAssessedDisplay.style.display = 'none';

  reStart.style.display = 'block';
})



function checkInterestOnBill() {
  assessedBill = parseFloat(assessedBill);
  if (theOffer === 0 && firstInterimPayment ===0){
    let firstPeriod = calculateDaysBetweenDates(firstDate, assessedBillDate)
    firstPeriodInterest = assessedBill - (assessedBill/(1+(theInterest*firstPeriod/365/100)))
    assessedInterest = firstPeriodInterest
    document.getElementById('interestOnBillDisplay').innerHTML = 'Bill claimed as  £' + Number(thePrincipalAmount).toLocaleString() + '<br></br>' +
    'Bill assessed at : £'  + Number(assessedBill).toLocaleString()  + ' on  ' + assessedBillDate + '<br></br>' + 
    'Interest running from ' + firstDate + " to " + assessedBillDate + '<br></br>' +
    'Total interest : £' + Number(assessedInterest).toLocaleString() + '<br></br>' + 
    'Total payable : £' + (Number(assessedBill + assessedInterest).toLocaleString()) + '<br></br>' 
  }
 
else if (firstInterimPayment === 0 ** theOffer >0 ){
  let firstPeriod = calculateDaysBetweenDates(firstDate, assessedBillDate)
  firstPeriodInterest = assessedBill - (assessedBill/(1+(theInterest*firstPeriod/365/100)))
  assessedInterest = firstPeriodInterest
  console.log(firstPeriodInterest)
  document.getElementById('interestOnBillDisplay').innerHTML = 'Bill claimed as  £' + thePrincipalAmount + '<br></br>' +
  'Bill assessed at : £'  + Number(assessedBill).toLocaleString()  + ' on  ' + assessedBillDate + '<br></br>' + 
  'Interest running from ' + firstDate + " to " + assessedBillDate + '<br></br>' +
  'Total interest : £' +  Number(assessedInterest).toLocaleString() + '<br></br>' + 
  'Total payable : £' + Number(assessedBill + assessedInterest).toLocaleString() + '<br></br>' + 
  'The interest inclusive offer was worth £' + Number(originalOffer).toLocaleString() + ' on ' + offer21Date + ' therefore ' + (assessedBill < originalOffer? 'you have beaten the offer, congratulations' : 
  ' unfortunately you have not beaten the offer, sorry')
}
else if (firstInterimPayment > 0 && secondInterimPayment === 0){
  let firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
  let secondPeriod = calculateDaysBetweenDates(secondDate, assessedBillDate)
  firstPeriodInterest = assessedBill * (theInterest * firstPeriod/365/100)
  secondPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment) * (theInterest * secondPeriod/365/100)
  assessedInterest = firstPeriodInterest + secondPeriodInterest

  document.getElementById('interestOnBillDisplay').innerHTML = 'Bill claimed as  £' + thePrincipalAmount + '<br></br>' +
  'Bill assessed at : £'  + Number(assessedBill).toLocaleString()  + ' on  ' + assessedBillDate + '<br></br>' + 
  'Interest running from ' + firstDate + " to " + assessedBillDate + '<br></br>' +
  'Interest from ' + firstDate + " to " + secondDate + ' : ' + Number(firstPeriodInterest).toLocaleString() + '<br></br>' +
  'Interest from ' + secondDate + " to " + assessedBillDate + ' : ' + Number(secondPeriodInterest).toLocaleString() + '<br></br>' +
  'Total interest : £' +  Number(assessedInterest).toLocaleString() + '<br></br>' + 
  'Total payable : £' + Number(assessedBill + assessedInterest).toLocaleString() + '<br></br>' + 
  (theOffer > 0 ? 'The interest inclusive offer was worth £' + Number(originalOffer).toLocaleString() + ' on ' + offer21Date + ' therefore ' + (assessedBill < originalOffer? 'you have beaten the offer, congratulations' : 
  ' unfortunately you have not beaten the offer, sorry') : '')


} else if (secondInterimPayment > 0 && thirdInterimPayment === 0){
      let firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
      let secondPeriod = calculateDaysBetweenDates(secondDate, thirdDate)
      let thirdPeriod = calculateDaysBetweenDates(thirdDate, assessedBillDate)
      firstPeriodInterest = assessedBill * (theInterest * firstPeriod/365/100)
      secondPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment) * (theInterest * secondPeriod/365/100)
      thirdPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment-secondInterimPayment+secondPeriodInterest) * (theInterest * thirdPeriod/365/100)
      assessedInterest = firstPeriodInterest + secondPeriodInterest +  thirdPeriodInterest

      document.getElementById('interestOnBillDisplay').innerHTML = 'Bill claimed as  £' + thePrincipalAmount + '<br></br>' +
  'Bill assessed at : £'  + Number(assessedBill).toLocaleString()  + ' on  ' + assessedBillDate + '<br></br>' + 
  'Interest running from ' + firstDate + " to " + assessedBillDate + '<br></br>' +
  'Interest from ' + firstDate + " to " + secondDate + ' : ' + Number(firstPeriodInterest).toLocaleString() + '<br></br>' +
  'Interest from ' + secondDate + " to " + thirdDate + ' : ' + Number(secondPeriodInterest).toLocaleString() + '<br></br>' +
  'Interest from ' + thirdDate + " to " + assessedBillDate + ' : ' + Number(thirdPeriodInterest).toLocaleString() + '<br></br>' +
  'Total interest : £' +  Number(assessedInterest).toLocaleString() + '<br></br>' + 
  'Total payable : £' + (assessedBill + assessedInterest) + '<br></br>' + 
  (theOffer > 0 ? 'The interest inclusive offer was worth £' + Number(originalOffer).toLocaleString() + ' on ' + offer21Date + ' therefore ' + (assessedBill < originalOffer? 'you have beaten the offer, congratulations' : 
  ' unfortunately you have not beaten the offer, sorry') : '')

    
    } else if (thirdInterimPayment > 0 && fourthInterimPayment === 0){
      let firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
      let secondPeriod = calculateDaysBetweenDates(secondDate, thirdDate)
      let thirdPeriod = calculateDaysBetweenDates(thirdDate, fourthDate)
      let fourthPeriod = calculateDaysBetweenDates(fourthDate, assessedBillDate)

      firstPeriodInterest = assessedBill * (theInterest * firstPeriod/365/100)
      secondPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment) * (theInterest * secondPeriod/365/100)
      thirdPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment-secondInterimPayment+secondPeriodInterest) * (theInterest * thirdPeriod/365/100)
      fourthPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment-secondInterimPayment+secondPeriodInterest - thirdInterimPayment + thirdPeriodInterest) * (theInterest * fourthPeriod/365/100)
      assessedInterest = firstPeriodInterest + secondPeriodInterest +  thirdPeriodInterest + fourthPeriodInterest

      document.getElementById('interestOnBillDisplay').innerHTML = 'Bill claimed as  £' + thePrincipalAmount + '<br></br>' +
      'Bill assessed at : £'  + Number(assessedBill).toLocaleString()  + ' on  ' + assessedBillDate + '<br></br>' + 
      'Interest running from ' + firstDate + " to " + assessedBillDate + '<br></br>' +
      'Interest from ' + firstDate + " to " + secondDate + ' : ' + Number(firstPeriodInterest).toLocaleString() + '<br></br>' +
      'Interest from ' + secondDate + " to " + thirdDate + ' : ' + Number(secondPeriodInterest).toLocaleString() + '<br></br>' +
      'Interest from ' + thirdDate + " to " + fourthDate + ' : ' + Number(thirdPeriodInterest).toLocaleString() + '<br></br>' +
      'Interest from ' + fourthDate + " to " + assessedBillDate + ' : ' + Number(fourthPeriodInterest).toLocaleString() + '<br></br>' +
      'Total interest : £' +  Number(assessedInterest).toLocaleString() + '<br></br>' + 
      'Total payable : £' + (assessedBill + assessedInterest) + '<br></br>' + 
      (theOffer > 0 ? 'The interest inclusive offer was worth £' + Number(originalOffer).toLocaleString() + ' on ' + offer21Date + ' therefore ' + (assessedBill < originalOffer? 'you have beaten the offer, congratulations' : 
      ' unfortunately you have not beaten the offer, sorry') : '')

    } else if (fourthInterimPayment > 0){
      let firstPeriod = calculateDaysBetweenDates(firstDate, secondDate)
      let secondPeriod = calculateDaysBetweenDates(secondDate, thirdDate)
      let thirdPeriod = calculateDaysBetweenDates(thirdDate, fourthDate)
      let fourthPeriod = calculateDaysBetweenDates(fourthDate, fifthDate)
      let fifthPeriod = calculateDaysBetweenDates(fifthDate, assessedBillDate)
      
      firstPeriodInterest = assessedBill * (theInterest * firstPeriod/365/100)
      secondPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment) * (theInterest * secondPeriod/365/100)
      thirdPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment-secondInterimPayment+secondPeriodInterest) * (theInterest * thirdPeriod/365/100)
      fourthPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment-secondInterimPayment+secondPeriodInterest - thirdInterimPayment + thirdPeriodInterest) * (theInterest * fourthPeriod/365/100)
      fifthPeriodInterest = (assessedBill+firstPeriodInterest-firstInterimPayment-secondInterimPayment+secondPeriodInterest - thirdInterimPayment + thirdPeriodInterest - fourthInterimPayment + fourthPeriodInterest) * (theInterest * fifthPeriod/365/100)
      assessedInterest = firstPeriodInterest + secondPeriodInterest +  thirdPeriodInterest + fourthPeriodInterest + fifthPeriodInterest
      
      document.getElementById('interestOnBillDisplay').innerHTML = 'Bill claimed as  £' + thePrincipalAmount + '<br></br>' +
      'Bill assessed at : £'  + Number(assessedBill).toLocaleString()  + ' on  ' + assessedBillDate + '<br></br>' + 
      'Interest running from ' + firstDate + " to " + assessedBillDate + '<br></br>' +
      'Interest from ' + firstDate + " to " + secondDate + ' : ' + Number(firstPeriodInterest).toLocaleString() + '<br></br>' +
      'Interest from ' + secondDate + " to " + thirdDate + ' : ' + Number(secondPeriodInterest).toLocaleString() + '<br></br>' +
      'Interest from ' + thirdDate + " to " + fourthDate + ' : ' + Number(thirdPeriodInterest).toLocaleString() + '<br></br>' +
      'Interest from ' + fourthDate + " to " + fifthDate + ' : ' + Number(fourthPeriodInterest).toLocaleString() + '<br></br>' +
      'Interest from ' + fifthDate + " to " + assessedBillDate + ' : ' + Number(fifthPeriodInterest).toLocaleString() + '<br></br>' +
      'Total interest : £' +  Number(assessedInterest).toLocaleString() + '<br></br>' + 
      'Total payable : £' + Number(assessedBill + assessedInterest).toLocaleString()  + '<br></br>' + 
      (theOffer > 0 ? 'The interest inclusive offer was worth £' + Number(originalOffer).toLocaleString() + ' on ' + offer21Date + ' therefore ' + (assessedBill < originalOffer? 'you have beaten the offer, congratulations' : 
      ' unfortunately you have not beaten the offer, sorry') : '')
    }
  }
 

  
  reStart.addEventListener("click", function() {
    
    window.location.reload();
  });
