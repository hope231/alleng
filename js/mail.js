"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	const body = document.getElementById('body');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			body.classList.add('sending');
			let response = await fetch('send.php', {
				method: 'POST',
				body: formData
			}); 
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				body.classList.remove('sending');
			}else {
				alert("ошибака");
				body.classList.remove('sending');
			}
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('email')) {
				if (input.value === '')
 				{
					formAddError(input);
					error++;
				}
				if (input.value.length < 12)
 				{
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('error');
		input.classList.add('error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('error');
		input.classList.remove('error');
	}
});