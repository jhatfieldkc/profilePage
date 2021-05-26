var editProfile = document.querySelector("#edit");
var h1 = document.querySelector("#profileName");
var sideButtons1 = document.querySelector(".sideButtons1");
var sideButtons2 = document.querySelector(".sideButtons2");

var acceptFriend = document.querySelector("#accept1");
var denyFriend = document.querySelector("#reject1");

var acceptFriend = document.querySelector("#accept2");
var denyFriend = document.querySelector("#reject2");

var counter = document.querySelector("#counter1");
var counterAccept = document.querySelector("#counter2");

var counter1 = 1;
var counter2 = 418;

function edit() {
  h1.innerText = "any other name";
}

function accept1() {
  sideButtons1.remove();
  counter.innerText = counter1--;
  counterAccept.innerText = counter2++;
}

function reject1() {
  sideButtons1.remove();
  counter.innerText = counter1--;
}

function accept2() {
  sideButtons2.remove();
  counter.innerText = counter1--;
  counterAccept.innerText = counter2++;
}

function reject2() {
  sideButtons2.remove();
  counter.innerText = counter1--;
}
