
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


  // Activity Log functionality
const taskTitle = button.closest('.bg-blue-50').querySelector('.taskTitle').textContent;
const currentTime = new Date().toLocaleTimeString();
const activityMessage = `You have completed the task <strong>${taskTitle}</strong> at ${currentTime}`;

  const newActivity = document.createElement('p');
  newActivity.innerHTML = activityMessage;
  newActivity.classList.add('p-4', 'opacity-70', 'font-normal', 'bg-blue-50', 'rounded-lg', 'm-4', 'w-60');
  activityLog.appendChild(newActivity);


    if (parseInt(taskAssigned.textContent) === 0) {
      alert("Congratulations! You have completed all the tasks");
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

// Clear History Button Functionality
const historyClean = document.getElementById('historyClean');

  historyClean.addEventListener('click', function () {

  const activityMessages = activityLog.querySelectorAll('p');

  activityMessages.forEach(message => {
    message.remove();
  });
});

