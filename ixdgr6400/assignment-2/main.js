"use strict";

//ONE

function clearActive() {
    for (var a in elements) for (var b in elements[a].classList) "active" === elements[a].classList[b] && elements[a].classList.remove("active");
}

function addActive(a) {
    elements[a].classList.add("active");
}

function printSequence(a) {
    for (var b = sequence[a], c = 0; c < b.length; c++) "1" === b[c] && addActive(c);
}

function stepSequence() {
    clearActive(), counter >= sequence.length && (counter = 0), printSequence(counter),
    document.getElementById("display").innerHTML = sequence[counter], counter++, setTimeout(stepSequence, frequency);
}

function intConverter(i){
  i=i>>>0;
  if(i==0 || i==1){
    return i;
  }
  else {
    return ((i%2) + 10 * intConverter(i/2));
  }
}

function addZero(k){
  if(k.length == 1){
    k = "000000" + k;
  } else
  if(k.length == 2){
    k = "00000" + k;
  } else
  if(k.length == 3){
    k = "0000" + k;
  } else
  if(k.length == 4){
    k = "000" + k;
  } else
  if(k.length == 5){
    k = "00" + k;
  } else
  if(k.length == 6){
    k = "0" + k;
  }
  return k;
}

/*
var frequency = 1e3, sequence = [ "000000", "000001", "000010", "000011", "000100", "000101", "000110", "000111", "001000", "001001", "001010", "001011", "001100", "001101", "001110", "001111", "010000", "010001", "010010", "010011", "010100", "010101", "010110", "010111", "011000", "011001", "011010", "011011", "011100", "011101", "011110", "011111", "100000", "100001", "100010", "100011", "100100", "100101", "100110", "100111", "101000", "101001", "101010", "101011", "101100", "101101", "101110", "101111", "110000", "110001", "110010", "110011", "110100", "110101", "110110", "110111", "111000", "111001", "111010", "111011", "111100", "111101", "111110", "111111" ], elements = document.getElementById("shape").getElementsByTagName("*"), counter = 0;
*/

var frequency = 1e3;
var sequence = [];
for (var j=0; j<128; j++){
  sequence[j] = addZero(intConverter(j).toString());
}
var elements = document.getElementById("shape").getElementsByTagName("*");
var counter = 0;

//TWO

function clearActive2() {
    for (var a in elements2) for (var b in elements2[a].classList) "active" === elements2[a].classList[b] && elements2[a].classList.remove("active");
}

function addActive2(a) {
    elements2[a].classList.add("active");
}

function printSequence2(a) {
    for (var b = sequence2[a], c = 0; c < b.length; c++) "1" === b[c] && addActive2(c);
}

function stepSequence2() {
    clearActive2(), counter2 >= sequence2.length && (counter2 = 0), printSequence2(counter2),
    document.getElementById("display2").innerHTML = sequence2[counter2], counter2++, setTimeout(stepSequence2, frequency2);
}

var frequency2 = 1e3, sequence2 = [ "1011111", "0001100", "0111011", "0111110", "1101100", "1110110", "1110111", "0011100", "1111111", "1111110"], elements2 = document.getElementById("shape2").getElementsByTagName("*"), counter2 = 0;

window.onload = function() {
    stepSequence();
    stepSequence2();
};
