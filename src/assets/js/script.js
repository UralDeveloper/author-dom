if (document.getElementById("calcChart")) {
  // получение элементов формы
  const form = document.querySelector(".calc_form");
  const priceInput = document.getElementById("price");
  const firstPayInput = document.getElementById("firstPay");
  const creditTermInput = document.getElementById("creditTerm");
  const rateInput = document.getElementById("rate");
  const btn_calc = document.querySelector(".calc_form .calc_btn");

  // получение элементов отображения результата
  const summCredit = document.querySelector(".summCredit span");
  const result_summ = document.querySelector(".calc-result_options .summ span");
  const result_firstPay = document.querySelector(".calc-result_options .firstPay span");
  const result_overPay = document.querySelector(".calc-result_options .overPay span");
  const result_totalAmount = document.querySelector(".calc-result_options .totalAmount span");
  const result_thePercentageOfOverpayment = document.querySelector(".calc-result_options .thePercentageOfOverpayment span");
  const result_endingOfPayments = document.querySelector(".calc-result_options .endingOfPayments span");
  const result_monthlyPayment_text = document.querySelector(".calcChart .calcChart_pay span");

  const ctx = document.getElementById("calcChart");
  let options = "";
  let calcChart = new Chart(ctx, options);
  calcChart.update();

  function range_price() {
    const sliderEl = document.querySelector("#range2");
    const priceInput = document.getElementById("price");

    sliderEl.setAttribute("min", 2000000);
    sliderEl.setAttribute("max", 100000000);
    sliderEl.setAttribute("value", parseInt(priceInput.value));

    const tempSliderValue = sliderEl.value;
    const progress = (tempSliderValue / sliderEl.max) * 100;
    sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;

    sliderEl.addEventListener("input", (event) => {
      if (sliderEl.value < 20000000) {
        sliderEl.setAttribute("step", 100000);
      } else {
        sliderEl.setAttribute("step", 1000000);
      }

      const tempSliderValue = event.target.value;
      priceInput.value = tempSliderValue;

      const progress = (tempSliderValue / sliderEl.max) * 100;
      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });

    priceInput.addEventListener("input", (event) => {
      sliderEl.value = priceInput.value;
      if (sliderEl.value < 20000000) {
        sliderEl.setAttribute("step", 100000);
      } else {
        sliderEl.setAttribute("step", 1000000);
      }

      const tempSliderValue = event.target.value;
      priceInput.value = tempSliderValue;

      const progress = (tempSliderValue / sliderEl.max) * 100;
      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });
  }

  function range_firstPay() {
    const sliderEl = document.querySelector("#firstPay_range");
    const priceInput = document.getElementById("firstPay");
    const priceMain = document.getElementById("price");

    // console.log(sliderEl);

    sliderEl.setAttribute("min", 0);
    sliderEl.setAttribute("max", priceMain.value);
    sliderEl.setAttribute("value", parseInt(priceInput.value));

    const tempSliderValue_2 = sliderEl.value;
    const progress = (tempSliderValue_2 / sliderEl.max) * 100;
    sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;

    sliderEl.addEventListener("input", (event) => {
      if (sliderEl.value < 20000000) {
        sliderEl.setAttribute("step", 100000);
      } else {
        sliderEl.setAttribute("step", 1000000);
      }

      const tempSliderValue_2 = event.target.value;
      priceInput.value = tempSliderValue_2;

      const progress = (tempSliderValue_2 / sliderEl.max) * 100;
      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });

    priceInput.addEventListener("input", (event) => {
      sliderEl.value = priceInput.value;

      if (sliderEl.value < 20000000) {
        sliderEl.setAttribute("step", 100000);
      } else {
        sliderEl.setAttribute("step", 1000000);
      }

      const tempSliderValue_2 = event.target.value;
      priceInput.value = tempSliderValue_2;

      const progress = (tempSliderValue_2 / sliderEl.max) * 100;
      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });
  }

  function range_creditTerm() {
    const sliderEl = document.querySelector("#creditTerm_range");
    const creditTerm = document.getElementById("creditTerm");

    // console.log(sliderEl);

    sliderEl.setAttribute("min", 1);
    sliderEl.setAttribute("max", 30);
    sliderEl.setAttribute("value", parseInt(creditTerm.value));

    const tempSliderValue_2 = sliderEl.value;
    const progress = (tempSliderValue_2 / sliderEl.max) * 100;
    sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;

    sliderEl.addEventListener("input", (event) => {
      const tempSliderValue_2 = event.target.value;
      creditTerm.value = tempSliderValue_2;

      const progress = (tempSliderValue_2 / sliderEl.max) * 100;

      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });

    creditTerm.addEventListener("input", (event) => {
      sliderEl.value = creditTerm.value;

      const tempSliderValue_2 = event.target.value;
      creditTerm.value = tempSliderValue_2;

      const progress = (tempSliderValue_2 / sliderEl.max) * 100;

      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });
  }

  function range_crate() {
    const sliderEl = document.querySelector("#rate_range");
    const rate = document.getElementById("rate");

    // console.log(sliderEl);

    sliderEl.setAttribute("min", 1);
    sliderEl.setAttribute("max", 30);
    sliderEl.setAttribute("value", parseInt(rate.value));

    const tempSliderValue_2 = sliderEl.value;
    const progress = (tempSliderValue_2 / sliderEl.max) * 100;
    sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;

    sliderEl.addEventListener("input", (event) => {
      const tempSliderValue_2 = event.target.value;
      rate.value = tempSliderValue_2;

      const progress = (tempSliderValue_2 / sliderEl.max) * 100;

      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });

    rate.addEventListener("input", (event) => {
      sliderEl.value = rate.value;

      const tempSliderValue_2 = event.target.value;
      rate.value = tempSliderValue_2;

      const progress = (tempSliderValue_2 / sliderEl.max) * 100;

      sliderEl.style.background = `linear-gradient(to right, #599bfe ${progress}%, #ced4da ${progress}%)`;
    });
  }

  function calculate(event) {
    event.preventDefault();

    range_price();
    range_firstPay();
    range_creditTerm();
    range_crate();

    let price = parseFloat(priceInput.value);
    let firstPay = parseFloat(firstPayInput.value);
    let minFirstPay = parseFloat(price * 0.2);
    let creditTerm = parseFloat(creditTermInput.value);
    let rate = parseFloat(rateInput.value);

    firstPayInput.setAttribute("max", priceInput.value);

    if (firstPay < minFirstPay) {
      minFirstPay = parseFloat(price * 0.2);
      firstPay = minFirstPay;
      firstPayInput.value = firstPay;
    } else if (firstPay > price) {
      minFirstPay = parseFloat(price * 0.2);
      firstPay = minFirstPay;
      firstPayInput.value = firstPay;
    }

    // рассчеты
    let summCreditValue = price - firstPayInput.value;
    let annualRate = rate / 100;
    let monthlyRate = annualRate / 12;
    let numberOfPayments = creditTerm * 12;

    let k =
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    let monthlyPayment = summCreditValue * k;

    let overpayment = monthlyPayment * numberOfPayments - summCreditValue;
    let totalAmountPayments = summCreditValue + overpayment;
    let percentageOfOverpayment = (overpayment * 100) / summCreditValue;

    let currentDate = new Date();
    let endingDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + creditTerm * 12,
      currentDate.getDate()
    );

    // отображение результатов
    // console.log(summCreditValue);
    summCredit.textContent = parseFloat(summCreditValue.toFixed(0));
    result_summ.textContent = parseFloat(summCreditValue.toFixed(0));
    result_firstPay.textContent = parseFloat(firstPay.toFixed(0));
    // result_overPay.textContent = ;
    result_totalAmount.textContent = totalAmountPayments.toFixed(0);
    result_thePercentageOfOverpayment.textContent =
      percentageOfOverpayment.toFixed(2) + " %";
    result_endingOfPayments.textContent = endingDate.toLocaleDateString();
    result_monthlyPayment_text.textContent = monthlyPayment.toFixed(0);

    const result_item = document.querySelectorAll(
      ".calc-result_item:not(.endingOfPayments, .thePercentageOfOverpayment) span, .summCredit span, .calcChart_pay span"
    );
    result_item.forEach(function (element) {
      const amount = parseFloat(element.textContent.replace(/,/g, ""));
      const options = {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 0,
      };
      const formattedAmount = amount.toLocaleString("ru-RU", options);
      element.textContent = formattedAmount;
    });

    let options = {
      type: "doughnut",
      options: {
        plugins: {
          legend: { display: false },
        },
      },
      data: {
        labels: [
          "Сумма кредита",
          "Первоначальный взнос",
          "Переплата по кредиту",
        ],
        datasets: [
          {
            label: false,
            data: [
              summCreditValue.toFixed(2),
              firstPay,
              overpayment.toFixed(2),
            ],
            backgroundColor: [
              "rgb(149 206 90)",
              "rgb(54, 162, 235)",
              "rgb(237, 103, 85)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    };

    calcChart.destroy();
    calcChart = new Chart(ctx, options);
  }
  document.addEventListener("DOMContentLoaded", calculate);
  // назначение обработчика события submit
  form.addEventListener("change", calculate);
  priceInput.addEventListener("input", range_price);
  firstPayInput.addEventListener("input", range_firstPay);
  creditTermInput.addEventListener("input", range_creditTerm);
  rateInput.addEventListener("input", range_crate);
}

const price_rub = document.querySelectorAll(".price_rub");
price_rub.forEach(function (element) {
  const amount = parseFloat(element.textContent.replace(/,/g, ""));
  const options = {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  };
  const formattedAmount = amount.toLocaleString("ru-RU", options);
  element.textContent = formattedAmount;
});

var modal_form = document.getElementById("modal_form");
modal_form.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute("data-bs-whatever");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = modal_form.querySelector(".modal-title");
  var modalBodyInput = modal_form.querySelector(".modal-body input");

  modalTitle.textContent = recipient;
  modalBodyInput.value = recipient;
});

if (document.querySelector(".map")) {
  const element = document.querySelector(".map"); // заменить .my-element на нужный селектор
  const dataAddress = element.getAttribute("data-address");
  fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=8455ac42-2e70-4bdb-ad09-201d179308d5&geocode=${dataAddress}`
  )
    .then((response) => response.text())
    .then((text) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, "application/xml");
      const pos = xmlDoc
        .getElementsByTagName("pos")[0]
        .childNodes[0].nodeValue.split(" ");
      const longitude = pos[0];
      const latitude = pos[1];
      initMap(longitude, latitude);
    });
  function initMap(longitude, latitude) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map("map", {
        center: [latitude, longitude],
        zoom: 18,
        behaviors: ["drag"],
        controls: ["zoomControl"],
      });

      var squareLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="placemark_layout_container"><div class="square_layout"><img src="assets/img/icons/bubble_map.png"></div></div>'
      );
      var myPlacemark = new ymaps.Placemark(
        [latitude, longitude],
        {
          hintContent: "Метка с прямоугольным HTML макетом",
        },
        {
          iconLayout: squareLayout,
          // Описываем фигуру активной области "Прямоугольник".
          iconShape: {
            // type: 'Rectangle',
            // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
            coordinates: [
              [-30, -30],
              [30, 30],
            ],
          },
        }
      );
      myMap.geoObjects.add(myPlacemark);
      myPlacemark.events
        .add("mouseenter", function (e) {
          e.get("target").options.set("preset", "islands#greenIcon");
        })
        .add("mouseleave", function (e) {
          e.get("target").options.unset("preset");
        });
    });
  }
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Воспроизведение видео
      entry.target.play();
    } else {
      // Пауза видео
      entry.target.pause();
    }
  });
});

// Получение элемента видео
const video = document.querySelector(".video-preview video");

// Добавление элемента в наблюдение
//   observer.observe(video);

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("[data-next-step]");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var step = this.getAttribute("data-next-step");
      var currentElement = document.querySelector(".quizModal-step.active");
      var nextElement = document.querySelector('[data-step="' + step + '"]');

      if (currentElement) {
        currentElement.classList.remove("active");
      }
      if (nextElement) {
        nextElement.classList.add("active");
      }
    });
  }
});

// Квиз
// Получаем все input с именем "thePresenceOfALandPlot"
const step_1 = document.querySelectorAll(
  ".quizModal-step input[name='thePresenceOfALandPlot']"
);
const step_1_answer = document.querySelector(
  '.quizModal-step form input[name="earth"]'
);
let btn_step_1 = document.querySelector('.btn_next[data-next-step="2"]');
step_1.forEach((element) => {
  element.addEventListener("change", function () {
    if (element.checked == true) {
      btn_step_1.removeAttribute("disabled");
    } else {
      btn_step_1.getAttribute("disabled", "disabled");
    }
    step_1_answer.value = "Наличие земельного участка: " + element.value;
  });
});

const step_2 = document.querySelectorAll(
  ".quizModal-step input[name='typeMaterial']"
);
const step_2_answer = document.querySelector(
  '.quizModal-step form input[name="material"]'
);
let btn_step_2 = document.querySelector('.btn_next[data-next-step="3"]');
let step_2_array = [];
step_2.forEach((element) => {
  element.addEventListener("change", function () {
    if (element.checked == true) {
      step_2_array.push(element.value);
      btn_step_2.removeAttribute("disabled");
    } else {
      const index = step_2_array.indexOf(element.value);
      if (index > -1) {
        step_2_array.splice(index, 1);
      }
    }
    if (step_2_array.length === 0) {
      btn_step_2.setAttribute("disabled", true);
    }
    step_2_answer.value = "Тип дома: " + step_2_array;
  });
});

const step_3 = document.querySelectorAll(
  ".quizModal-step input[name='home_size']"
);
const step_3_answer = document.querySelector('.quizModal-step form input[name="square"]');
let btn_step_3 = document.querySelector('.btn_next[data-next-step="4"]');
let step_3_array = [];

step_3.forEach((element) => {
  element.addEventListener("change", function () {
    if (element.checked == true) {
      step_3_array.push(element.value);
	  btn_step_3.removeAttribute("disabled");
    } else {
      const index = step_3_array.indexOf(element.value);
      if (index > -1) {
        step_3_array.splice(index, 1);
      }
    }
    if (step_3_array.length === 0) {
      btn_step_3.setAttribute("disabled", true);
    }
    step_3_answer.value = "Площадь дома: " + step_3_array;
  });
});

// const phoneInput = document.getElementById('inputTel');
// let btn_step_4 = document.querySelector('.btn_next.btn_send[data-next-step="5"]');
// const step_4_answer = document.querySelector('.quizModal-step form input[name="telfone"]');
// const maskOptions = {
// 	mask: '+{7}(000)000-00-00'
// };
// const mask = IMask(phoneInput, maskOptions);

// phoneInput.addEventListener('input', function(){
// 	if(phoneInput.value.length == 16) {
// 		btn_step_4.removeAttribute('disabled')
// 		step_4_answer.value = phoneInput.value
// 	} else {
// 		btn_step_4.setAttribute('disabled', true)
// 	}
// })
