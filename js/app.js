window.onload = function () {
	// Global Variables
	let seconds = 00;
	let tens = 00;
	// Select minutes and seconds
	let appendTens = document.getElementById("tens");
	let appendSeconds = document.getElementById("seconds");
	// Select Start, Stop, and Reset buttons
	let buttonStart = document.getElementById("btn-start");
	let buttonStop = document.getElementById("btn-stop");
	let buttonReset = document.getElementById("btn-reset");
	let Interval;

	// Start Event Handler Start Button
	buttonStart.onclick = function () {
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	};

	// Start Event Handler Stop Button
	buttonStop.onclick = function () {
		clearInterval(Interval);
	};
	// Start Event Handler Reset Button
	buttonReset.onclick = function () {
		tens = "00";
		seconds = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;
	};

	// Start Timer
	function startTimer() {
		tens++;

		if (tens <= 9) {
			appendTens.innerHTML = "0" + tens;
		}

		if (tens > 9) {
			appendTens.innerHTML = tens;
		}

		if (tens > 99) {
			console.log("seconds");
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			tens = 0;
			appendTens.innerHTML = "0" + 0;
		}

		if (seconds > 9) {
			appendSeconds.innerHTML = seconds;
		}
	}
};
