if(document.getElementById('calcChart')) {
	// получение элементов формы
	const form = document.querySelector("form");
	const priceInput = document.getElementById("price");
	const firstPayInput = document.getElementById("firstPay");
	const creditTermInput = document.getElementById("creditTerm");
	const rateInput = document.getElementById("rate");
	
	// получение элементов отображения результата
	const summCredit = document.querySelector(".summCredit span");
	const summ = document.querySelector(".options .summ span");
	const finish_firstPay = document.querySelector(".options .firstPay span");
	const overPay = document.querySelector(".options .overPay span");
	const totalAmount = document.querySelector(".options .totalAmount span");
	const thePercentageOfOverpayment = document.querySelector(".options .thePercentageOfOverpayment span");
	const endingOfPayments = document.querySelector(".options .endingOfPayments span");
	const monthlyPayment_text = document.querySelector(".calcChart .calcChart_pay span");
	
	// finish_firstPay = 
	
	const ctx = document.getElementById('calcChart');
	let options = ''
	let calcChart = new Chart(ctx, options);
	calcChart.update();
	
	function calculate(event) {
	
		event.preventDefault();
	
		const price = parseFloat(priceInput.value);
		const firstPay = parseFloat(firstPayInput.value);
		const creditTerm = parseFloat(creditTermInput.value);
		const rate = parseFloat(rateInput.value);
	
		// рассчеты
		const summCreditValue = price - firstPay;
		const annualRate = rate / 100;
		const monthlyRate = annualRate / 12;
		const numberOfPayments = creditTerm * 12;
	
		const k =
			(monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
			(Math.pow(1 + monthlyRate, numberOfPayments) - 1);
		const monthlyPayment = summCreditValue * k;
	
		const overpayment = monthlyPayment * numberOfPayments - summCreditValue;
		const totalAmountPayments = summCreditValue + overpayment;
		const percentageOfOverpayment = (overpayment * 100) / summCreditValue;
	
		const currentDate = new Date();
		const endingDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + creditTerm * 12,
			currentDate.getDate()
		);
	  
		// отображение результатов
		monthlyPayment_text.textContent = monthlyPayment.toFixed(2);
		summCredit.textContent = summCreditValue.toFixed(2);
		summ.textContent = summCreditValue.toFixed(2);
		finish_firstPay.textContent = firstPay.toFixed(2);
		overPay.textContent = overpayment.toFixed(2);
		totalAmount.textContent = totalAmountPayments.toFixed(2);
		thePercentageOfOverpayment.textContent = percentageOfOverpayment.toFixed(2);
		endingOfPayments.textContent = endingDate.toLocaleDateString();
	
	  
		let options = {
			type: 'doughnut',
			options: {
				plugins: {
					legend: {display: false,},
				}
			},
			data: {
				labels: [
					'Сумма кредита',
					'Первоначальный взнос',
					'Переплата по кредиту'
				],
				datasets: [{
					label: false,
					data: [summCreditValue.toFixed(2), firstPay, overpayment.toFixed(2)],
					backgroundColor: [
						'rgb(149 206 90)',
						'rgb(54, 162, 235)',
						'rgb(237, 103, 85)'
					],
					hoverOffset: 4,
				}]
			}
		}
		
		calcChart.destroy();
		calcChart = new Chart(ctx, options);
	}
	document.addEventListener("DOMContentLoaded", calculate);
	// назначение обработчика события submit
	form.addEventListener("submit", calculate);
}

const catalog_price_metr = document.querySelectorAll('.price-metr span');
catalog_price_metr.forEach(function (element) {
  const amount = parseFloat(element.textContent.replace(/,/g, ""));
  const options = {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  };
  const formattedAmount = amount.toLocaleString("ru-RU", options);
  element.textContent = formattedAmount;
});


const catalog_price_main = document.querySelectorAll('.price-main');
catalog_price_main.forEach(function (element) {
  const amount = parseFloat(element.textContent.replace(/,/g, ""));
  const options = {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  };
  const formattedAmount = amount.toLocaleString("ru-RU", options);
  element.textContent = formattedAmount;
});


const projects_price_main = document.querySelectorAll('.price-container span');
projects_price_main.forEach(function (element) {
  const amount = parseFloat(element.textContent.replace(/,/g, ""));
  const options = {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  };
  const formattedAmount = amount.toLocaleString("ru-RU", options);
  element.textContent = formattedAmount;
});

const projects_price_min = document.querySelectorAll('.mainPrice span');
projects_price_min.forEach(function (element) {
  const amount = parseFloat(element.textContent.replace(/,/g, ""));
  const options = {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  };
  const formattedAmount = amount.toLocaleString("ru-RU", options);
  element.textContent = formattedAmount;
});

const projects_price_metr = document.querySelectorAll('.priceMetr span');
projects_price_metr.forEach(function (element) {
  const amount = parseFloat(element.textContent.replace(/,/g, ""));
  const options = {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  };
  const formattedAmount = amount.toLocaleString("ru-RU", options);
  element.textContent = formattedAmount;
});

var modal_form = document.getElementById('modal_form')
modal_form.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = modal_form.querySelector('.modal-title')
  var modalBodyInput = modal_form.querySelector('.modal-body input')

  modalTitle.textContent = recipient
  modalBodyInput.value = recipient
})