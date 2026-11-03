export function showError(alert, message) {
	alert.textContent = message;
	alert.classList.add("alert--visible");

	setTimeout(() => {
		alert.classList.remove("alert--visible");
	}, 3000);
}
