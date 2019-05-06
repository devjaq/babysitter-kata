"use strict";

const formClick = () => {
  let formFamily = document.getElementById('family');
  let formStart = document.getElementById('start');
  let formEnd = document.getElementById('end');
 
  calculateCharge(formFamily.value, formStart.value, formEnd.value);
  let totalDisplay = document.getElementById('total');
  totalDisplay.innerText = `Total charge = ${calculateCharge(formFamily.value, formStart.value, formEnd.value)}`;
}