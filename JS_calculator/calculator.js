var allKeys = document.querySelectorAll('input[type=button]');
var screen = document.getElementById('screen');



// Loop that iterates over every key
for (var i = 0; i < allKeys.length; i++) {

	// Adds a click event to a key
	allKeys[i].addEventListener('click', function() {

		var keyVal = this.value;

		// Evaluating function
		function evaluate() {
			var answer = eval(screen.value);
			
			if (screen.value == '') {
				screen.value = '';
			}

			else {
				screen.value = answer;
			}
		}

		// Clears the screen on C
		if (keyVal == 'C') {
			screen.value = '';
		}

		// Evaluates the problem
		else if (keyVal == '=') {
			evaluate();
		}

		// Integer or operator
		else {

			var screenValue = screen.value;
			var lastKey = screenValue.substr(screenValue.length - 1);

			// If the current and last pressed keys are operators (not integers),
			// remove the last key from the screen
			if (isNaN(lastKey) && isNaN(keyVal)) {
				screen.value = screenValue.substr(0, screenValue.length - 1);
			}

			// Adds integer or operator to the screen
			screen.value += keyVal;

		}
	});
}