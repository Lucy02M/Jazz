//get event date
var countDownDate = new Date("Jul 29, 2023 21:30:00").getTime();

//set countdown
var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    "<div class='tiempos'>" +
    days +
    "<p class='tiempoT'>Dias</p></div>" +
    "<div class='tiempos'>" +
    hours +
    "<p class='tiempoT'>Horas</p></div>" +
    "<div class='tiempos'>" +
    minutes +
    "<p class='tiempoT'>Minutos</p></div>" +
    "<div class='tiempos'>" +
    seconds +
    "<p class='tiempoT'>Segundos</p></div>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Es hoy";
  }
}, 1000);

//audio button and toggle
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
  let imgAudio = document.getElementById("audioImg");
  if (imgAudio.innerHTML === "volume_up") {
    imgAudio.innerHTML = "volume_down";
  } else {
    imgAudio.innerHTML = "volume_up";
  }
}

myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};

//display gift
function regalar() {
  let regalo = document.getElementById("regalo");
  let pedirRegalo = document.getElementById("pedirRegalo");
  let text = document.getElementById("giftTextRemove");
  let giftCard = document.getElementById("giftCard");
  pedirRegalo.style.display = "flex";
  let clickImg = document.getElementById("click");
  clickImg.style.display = "none";
  regalo.style.marginLeft = "0em";
  text.style.display = "none";
}

//hide gift
function remove() {
  let text = document.getElementById("giftTextRemove");
  pedirRegalo.style.display = "none";
  text.style.display = "block";
  giftCard.style.paddingBottom = "0";
}

//copy text button
function copyText() {
  let cvuNum = document.getElementById("cvu");
  navigator.clipboard.writeText(cvuNum.innerHTML);
  let copyBtn = document.getElementById("copy");
  copyBtn.style.filter = "opacity(30%)";
}
