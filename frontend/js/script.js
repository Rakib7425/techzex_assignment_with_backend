let btn = document.getElementById("signupBtn");

btn.addEventListener("click", () => {
	let name = document.getElementById("upName").value;
	let email = document.getElementById("upEmail").value;
	let password = document.getElementById("upPassword").value;
	const handdleSignup = async () => {
		let headersList = {
			Accept: "*/*",
			"Content-Type": "application/json",
		};

		let bodyContent = JSON.stringify({
			name: name,
			email: email,
			password: password,
		});

		let response = await fetch("http://localhost:8080/api/v1/user/register", {
			method: "POST",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.json();
		console.log(data);
		if (data.data) {
			alert(data.message);
		} else {
			alert(data.message);
		}
	};

	handdleSignup();
});
