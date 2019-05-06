"use strict";

const formClick = () => {
  let formFamily = document.getElementById('family');
  let formStart = document.getElementById('start');
  let formEnd = document.getElementById('end');

  // console.log(formFamily.value, formStart.value, formEnd.value);
  console.log(calculateCharge(formFamily.value, formStart.value, formEnd.value));
  
  calculateCharge(formFamily.value, formStart.value, formEnd.value);
  let totalDisplay = document.getElementById('total');
  totalDisplay.innerText = `Total charge = ${calculateCharge(formFamily.value, formStart.value, formEnd.value)}`;
}