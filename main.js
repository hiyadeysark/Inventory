const button1 = document.getElementById("btn1"); 
const button2 = document.getElementById("btn2"); 
const button3 = document.getElementById("btn3"); 
const button4 = document.getElementById("btn4"); 
const button5 = document.getElementById("btn5"); 
const button6 = document.getElementById("btn6");


button1.addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('Power stone used');
  button1.style.display = "none";
});

button2.addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('Mind stone used');
  button2.style.display = "none";
});

button3.addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('Space stone used');
  button3.style.display = "none";
});


button4.addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('Reality stone used');
  button4.style.display = "none";
});

button5.addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('Time stone used');
  button5.style.display = "none";
});

button6.addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('Soul stone used');
  button6.style.display = "none";
});








