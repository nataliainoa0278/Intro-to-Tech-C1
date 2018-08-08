function getFormValue() {
	var a = document.getElementById("fname").value;
	var b = document.getElementById("lname").value;
	var c = document.getElementById("display");

	c.innerHTML = a + b;

}