const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const title = document.getElementById("title");
const bg = document.querySelector(".bg");

let currentYear = new Date().getFullYear();

/* -------- 정보 입력 -------------- */
/* 이름 | 태어난 해 |생일 | 메세지 입력 */
let yourName = "김크크"; // 이름 입력
let yourBirthYear = 1999; // 태어난 해
let yourBirthday = "November 2"; // 생일 입력

/* 생일 축하 메세지 입력은 기본출력 뒤에 붙는 메세지
    기본 출력 : yourName의 00번째 생일을 축하해!!
    
    - 메세지 내 이모티콘 사용 가능(Mac 기준)
*/
let customMsg = "";
/* ------------------------------- */

let birthday = new Date(`${yourBirthday} ${currentYear} 00:00:00`);
let copyBD = birthday;
// 내년 날짜 표시
const nextYear = document.getElementById("nextYear");
const thisYear = birthday.getFullYear();

/* 기본 메세지 */
let primaryMsg = `${yourName}의 ${
    thisYear - yourBirthYear + 1
} 번째 생일을 축하해!`;

title.innerHTML = `${yourName}의 생일까지`;

nextYear.innerHTML = currentYear;

// 생일이 지나면, 내년 생일로 카운트 다운을 초기화한다.
function resetSetting(currentDate) {
    birthday = new Date(`${yourBirthday} ${currentYear + 1} 00:00:00`);

    // 오늘이 생일이면, 1일 지난 후 resetMsg
    if (copyBD.toDateString() === currentDate.toDateString()) {
        console.log("Happy Birthday!!!!!");

        nextYear.style.fontSize = "2.2rem";
        nextYear.style.color = "white";
        nextYear.innerHTML = primaryMsg + customMsg;
        setTimeout(() => resetMsg(), 86400000); // 하루가 지나면 메세지를 지우고, currentYear + 1년을 보여줌
    }
    // 오늘 생일이 아닌 경우
    else {
        console.log("Today is not your birthday");
        resetMsg();
    }
}

// 생일이 지나면, currentYear + 1년으로 메세지를 변경
function resetMsg() {
    nextYear.innerHTML = currentYear + 1;
    nextYear.style.fontSize = "200px";
    nextYear.style.color = "rgba(255, 255, 255, 0.315)";
}

// 남은 날짜 게산
function birthdayCounter() {
    const currentDate = new Date();
    const time = birthday - currentDate;

    if (time <= 0) {
        resetSetting(currentDate);
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

// 5초마다 배경 이미지 변경
function changeImg() {
    let imageIdx = Math.floor(Math.random() * 10);
    document.body.style.backgroundImage = `url("./image/background${imageIdx}.jpeg")`;
    setTimeout(changeImg, 5000);
}

// 이미지 변경시, Flicker 방지를 위한 preload
let images = [];
function preload() {
    for (let i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "./image/background0.jpeg",
    "./image/background1.jpeg",
    "./image/background2.jpeg",
    "./image/background3.jpeg",
    "./image/background4.jpeg",
    "./image/background5.jpeg",
    "./image/background6.jpeg",
    "./image/background7.jpeg",
    "./image/background8.jpeg",
    "./image/background9.jpeg"
);

// 1초마다 countdown 함수 실행
setInterval(birthdayCounter, 1000);
changeImg();
