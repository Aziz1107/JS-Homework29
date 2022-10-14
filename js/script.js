const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')


function clock() {

    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`

    // innerHTML - это свойство, которое позволяет получить или изменить содержимое HTML-элемента.

    hoursNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    // ! рекурсия - функция вызывает саму себя

    setTimeout(() => {
        clock()
    }, 1000);
}


clock()

// setTimeout(() => {
//     console.log('hello');
// }, 5000);


// setInterval(() => {
//     console.log('hello');
// }, 2000)

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')

// console.log(tabsItem);
// console.log(tabsContentItem);

tabsItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeAndAddActiveClass(item, tabsItem)
        removeAndAddActiveClass(tabsContentItem[i], tabsContentItem)
    })
})

function removeAndAddActiveClass(element, arr) {
    arr.forEach(item => {
        item.classList.remove('active')
    })
    element.classList.add('active')
}

var stopwatchHours = document.querySelector(".stopwatch__hours");
var stopwatchMinutes = document.querySelector(".stopwatch__minutes");
var stopwatchSeconds = document.querySelector(".stopwatch__seconds");
var stopwatchBtn = document.querySelectorAll(".stopwatch__btn");
var startTimeOutSecondIndicator = document.querySelector(".tabsLink__span");

function timeOutSecond() {
    stopwatchSeconds.innerHTML++;
    if (stopwatchSeconds.innerHTML === "60") {
      stopwatchSeconds.innerHTML = "0";
      stopwatchMinutes.innerHTML ++;
    }
    else if (stopwatchMinutes.innerHTML === "60") {
      stopwatchMinutes.innerHTML = "0";
      stopwatchHours.innerHTML ++;
    }
     setTimeout(() => {
      timeOutSecond()
    }, 1000);
  }

stopwatchBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === "start") {
        element.addEventListener("click", () => {
          timeOutSecond()
          element.innerHTML = "reset";
          startTimeOutSecondIndicator.classList.add("active");
        });
    } else if (element.innerHTML === "reset") {
        element.addEventListener("click", () => {
          element.innerHTML = "start";
          startTimeOutSecondIndicator.classList.remove("active_clear");
          stopwatchSeconds.innerHTML = "0";
          stopwatchMinutes.innerHTML = "0";
          stopwatchHours.innerHTML = "0";
        });
    }
    // stop сделаю потом, ибо я не знаю как остановить
  });
});