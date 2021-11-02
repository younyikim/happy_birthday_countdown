const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const title = document.getElementById("title");
const bg = document.querySelector(".bg");

let currentYear = new Date().getFullYear();
let yourName = "민영언니";
let yourBirthday = "September 24";
let birthday = new Date(`${yourBirthday} ${currentYear} 00:00:00`);
title.innerHTML = `${yourName}의 생일까지`;

// 내년 날짜 표시
const nextYear = document.getElementById("nextYear");
const thisYear = birthday.getFullYear();
nextYear.innerHTML = currentYear;

// 생일이 지나면, 내년 생일로 카운트 다운을 초기화한다.
function resetYear() {
    birthday = new Date(`${yourBirthday} ${currentYear + 1} 00:00:00`);
    setTimeout(() => resetMsg(), 86400000); // 하루가 지나면 메세지를 지우고, currentYear + 1년을 보여줌
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
        nextYear.style.fontSize = "2.2rem";
        nextYear.style.color = "white";
        nextYear.innerHTML = `${yourName}이의 ${
            thisYear - 1998 + 1
        }번째 생일을 축하해. 오늘 하루 종일 행복하고, 재밌게 놀자! 무덤까지 함께하는거야 키키 사랑해!!! 연이가`;
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

// 5초마다 배경 이미지 변경
function changeImg() {
    let imageIdx = Math.floor(Math.random() * 10);
    document.body.style.backgroundImage = `url("./image/background${imageIdx}.jpg")`;
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
    "./image/background0.jpg",
    "./image/background1.jpg",
    "./image/background2.jpg",
    "./image/background3.jpg",
    "./image/background4.jpg",
    "./image/background5.jpg",
    "./image/background6.jpg",
    "./image/background7.jpg",
    "./image/background8.jpg",
    "./image/background9.jpg"
);

// 1초마다 countdown 함수 실행
setInterval(birthdayCounter, 1000);
changeImg();
