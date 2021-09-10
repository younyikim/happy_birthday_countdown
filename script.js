const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let currentYear = new Date().getFullYear();
let birthday = new Date(`September 24 ${currentYear} 00:00:00`);
// let birthday = new Date(`September 10 ${currentYear} 20:51:50`);

// 내년 날짜 표시
const nextYear = document.getElementById("nextYear");
const thisYear = birthday.getFullYear();
nextYear.innerHTML = currentYear;

function resetYear() {
    birthday = new Date(`September 10 ${currentYear + 1} 19:46:00`);
    setTimeout(() => {
        nextYear.innerHTML = currentYear + 1
        nextYear.style.fontSize = "200px";
        nextYear.style.color = "rgba(255, 255, 255, 0.315)";
    }, 86400000);

}

function newYearCountdown(intervalId) {
    const currentDate = new Date();
    const time = birthday - currentDate;

    if (time <= 0) {
        nextYear.style.fontSize = "2.2rem";
        nextYear.style.color = "white";
        nextYear.innerHTML = `민영이의 ${thisYear - 1998 + 1}번째 생일을 축하해.늘 언니의 행복을 바라는 연이가.`;
        resetYear();
    } else {
        const day = Math.floor(time / 1000 / 60 / 60 / 24);
        const hour = Math.floor(time / 1000 / 60 / 60) % 24;
        const min = Math.floor(time / 1000 / 60) % 60;
        const sec = Math.floor(time / 1000) % 60;

        days.innerHTML = day;
        hours.innerHTML = hour >= 10 ? hour : "0" + hour;
        minutes.innerHTML = min >= 10 ? min : "0" + min;
        seconds.innerHTML = sec >= 10 ? sec : "0" + sec;
    }
}

// 1초마다 countdown 함수 실행
setInterval(newYearCountdown, 1000);
