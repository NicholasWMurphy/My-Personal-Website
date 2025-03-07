function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function updateTime() {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const time = date.toLocaleTimeString();
  const day = date.toLocaleDateString(undefined, options);
  document.getElementById('time').innerHTML = `Today is: ${day}, Current Time: ${time}`;
  document.getElementById('time2').innerHTML = `Today is: ${day}, Current Time: ${time}`;
}

setInterval(updateTime, 1000);
window.onload = function() {
  updateTime();
};







