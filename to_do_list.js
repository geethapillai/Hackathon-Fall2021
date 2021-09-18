let date = new Date();
let todayDay = date.getDay();
let todayDate = date.getDate();
let dayButtons = []
getButtons();

populateDays(todayDay, todayDate);
function populateCalendar() {    
    populateDays(todayDay,todayDate);
}
function getButtons (){
   for (let i = 0; i < 7; i++) {
       dayButtons[i] = document.getElementById('btn' + (i + 1));
   }
}

function populateDays(day, date) {
    for (let i = 0; i < 7; i++) {
        dayButtons[i].innerHTML = date + i - day;
        if (day === i) {
            dayButtons[i].className = 'button_today';
        }
    }
}