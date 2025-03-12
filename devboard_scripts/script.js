// question page to previous page 

function back2Desk() {
  window.history.back();
}


// Showing recent date dynamically
const recentDate = new Date();
const daysOfWeek = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

const recentDay = daysOfWeek[recentDate.getDay()];

const formattedDate = recentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

document.getElementById('day').textContent = recentDay + ' ,';
document.getElementById('date').textContent = formattedDate;



// dynamic background
function changeBg() {
  document.body.style.backgroundColor = randomColor();
}

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// cards button functionality

const completeButtons = document.querySelectorAll('.completeButton');
const taskAssigned = document.querySelector('#taskAssigned');
const navbarCount = document.querySelector('.navbarCount');
const activityLog = document.querySelector('#activityLog');

completeButtons.forEach(button => {
  button.addEventListener('click', function () {
   
    alert('Board updated successfully');

    let currentTaskAssigned = parseInt(taskAssigned.textContent);
    taskAssigned.textContent = currentTaskAssigned - 1;

    
    let currentNavbarCount = parseInt(navbarCount.textContent);
    navbarCount.textContent = currentNavbarCount + 1;

    updateButtonState(button);
    if (parseInt(taskAssigned.textContent) === 0) {
      alert("You have completed all the tasks");
    }



  });
});

function updateButtonState(button) {
  button.textContent = "Completed";
  button.disabled = true;
  button.style.backgroundColor = "#d1d5db";
  button.style.color = "#6B7280";
  button.style.opacity = "0.5";
  button.classList.add('cursor-not-allowed');
}
