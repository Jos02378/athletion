(function ($) {
	$.fn.niceNumber = function (options) {
		var defaults = {
			autoSize: true,
			autoSizeBuffer: 1,
			buttonDecrement: '-',
			buttonIncrement: '+',
			buttonPosition: 'around',

			/**
				callbackFunction
				@param {$input} currentInput - the input running the callback
				@param {number} amount - the amount after increase/decrease
				@param {object} settings - the passed niceNumber settings
			**/
			onDecrement: false,
			onIncrement: false,
		};
		var settings = $.extend(defaults, options);

		let basketball = document.querySelector(".basketball-label");
		let soccer = document.querySelector(".soccer-label");
		let badminton = document.querySelector(".badminton-label");
		let volleyball = document.querySelector(".volleyball-label");

		const options_box_sport = document.getElementById("options_box_sport");
		const optionsListSport = options_box_sport.querySelectorAll(".option");

		return this.each(function () {
			var currentInput = this,
				$currentInput = $(currentInput),
				maxValue = $currentInput.attr('max'),
				minValue = $currentInput.attr('min'),
				attrMax = null,
				attrMin = null;

			// Skip already initialized input
			if ($currentInput.attr('data-nice-number-initialized')) return;

			window.addEventListener("load", () => {
				attrMax = 10;
				attrMin = 6;
				currentInput.value = attrMin;
			})

			signupForm.addEventListener("submit", () => {
				attrMax = 10;
				attrMin = 6;
				currentInput.value = attrMin;
			})

			optionsListSport.forEach(option => {
				option.addEventListener("click", () => {
					sport_value = option.querySelector("input").value;
					if (sport_value == "basketball") {
						attrMax = 10;
						attrMin = 6;
						currentInput.value = attrMin;
					} else if (sport_value == "soccer") {
						attrMax = 22;
						attrMin = 14;
						currentInput.value = attrMin;
					} else if (sport_value == "badminton") {
						attrMax = 4;
						attrMin = 2;
						currentInput.value = attrMin;
					} else {
						attrMax = 12;
						attrMin = 8;
						currentInput.value = attrMin;
					}
				})
			})

			basketball.addEventListener("click", () => {
				attrMax = 10;
				attrMin = 6;
				currentInput.value = attrMin;
			})

			soccer.addEventListener("click", () => {
				attrMax = 22;
				attrMin = 14;
				currentInput.value = attrMin;
			})

			badminton.addEventListener("click", () => {
				attrMax = 4;
				attrMin = 2;
				currentInput.value = attrMin;
			})

			volleyball.addEventListener("click", () => {
				attrMax = 12;
				attrMin = 8;
				currentInput.value = attrMin;
			})


			// Handle max and min values
			if (
				maxValue !== undefined &&
				maxValue !== false
			) {
				attrMax = parseFloat(maxValue);
			}

			if (
				minValue !== undefined &&
				minValue !== false
			) {
				attrMin = parseFloat(minValue);
			}

			// Fix issue with initial value being < min
			if (attrMin && !currentInput.value) {
				$currentInput.val(attrMin);
			}

			// Generate container
			var $inputContainer = $('<div/>', {
				class: 'nice-number',
			}).insertAfter(currentInput);

			// Generate interval (object so it is passed by reference)
			var interval = {};

			// Generate buttons
			var $minusButton = $('<button/>')
				.attr('type', 'button')
				.html(settings.buttonDecrement)
				.on('mousedown mouseup mouseleave', function (event) {
					changeInterval(event.type, interval, function () {
						var currentValue = parseFloat($currentInput.val() || 0);
						if (
							attrMin == null ||
							attrMin < currentValue
						) {
							var newValue = currentValue - 2;
							$currentInput.val(newValue);
							if (settings.onDecrement) {
								settings.onDecrement(
									$currentInput,
									newValue,
									settings
								);
							}
						}
					});

					// Trigger the input event here to avoid event spam
					if (event.type == 'mouseup' || event.type == 'mouseleave') {
						$currentInput.trigger('input');
					}
				});

			var $plusButton = $('<button/>')
				.attr('type', 'button')
				.html(settings.buttonIncrement)
				.on('mousedown mouseup mouseleave', function (event) {
					changeInterval(event.type, interval, function () {
						var currentValue = parseFloat($currentInput.val() || 0);
						if (
							attrMax == null ||
							attrMax > currentValue
						) {
							var newValue = currentValue + 2;
							$currentInput.val(newValue);
							if (settings.onIncrement) {
								settings.onIncrement(
									$currentInput,
									newValue,
									settings
								);
							}
						}
					});

					// Trigger the input event here to avoid event spam
					if (event.type == 'mouseup' || event.type == 'mouseleave') {
						$currentInput.trigger('input');
					}
				});

			// Remember that we have initialized this input
			$currentInput.attr('data-nice-number-initialized', true);

			// Append elements
			switch (settings.buttonPosition) {
				case 'left':
					$minusButton.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					$currentInput.appendTo($inputContainer);
					break;
				case 'right':
					$currentInput.appendTo($inputContainer);
					$minusButton.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					break;
				case 'around':
				default:
					$minusButton.appendTo($inputContainer);
					$currentInput.appendTo($inputContainer);
					$plusButton.appendTo($inputContainer);
					break;
			}

			// Nicely size input
			if (settings.autoSize) {
				$currentInput.width(
					$currentInput.val().length + settings.autoSizeBuffer + 'ch'
				);
				$currentInput.on('keyup input', function () {
					$currentInput.animate({
							width: $currentInput.val().length +
								settings.autoSizeBuffer +
								'ch'
						},
						200
					);
				});
			}
		});
	};

	function changeInterval(eventType, interval, callback) {
		if (eventType == 'mousedown') {
			interval.timeout = setTimeout(function () {
				interval.actualInterval = setInterval(function () {
					callback();
				}, 100);
			}, 200);
			callback();
		} else {
			if (interval.timeout) {
				clearTimeout(interval.timeout);
			}
			if (interval.actualInterval) {
				clearInterval(interval.actualInterval);
			}
		}
	}
})(jQuery);