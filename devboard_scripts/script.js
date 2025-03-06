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

