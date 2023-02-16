var date = document.getElementById('currentDay').textContent = moment().format("MMM Do YY");
var currentHour = document.getElementById('currentHour').textContent = moment().format('LT');
var timeBlocks = document.querySelectorAll(".time-block");
timeBlocks.forEach(function(timeBlock) {
  var hour = parseInt(timeBlock.querySelector(".hour").textContent);
  if (hour < currentHour) {
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
});

var saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach(function(saveButton) {
  saveButton.addEventListener("click", function() {
    var textarea = saveButton.previousElementSibling;
    var key = textarea.id;
    var value = textarea.value;
    localStorage.setItem(key, value);
  });
});
for (var i = 9; i <= 17; i++) {
    var key = "data-" + i;
    var value = localStorage.getItem(key);
    var textarea = document.getElementById(key);
    if (textarea) {
      textarea.value = value;
    }
  }


