var tableData = [];
const getUsers = async () => {
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};

	let response = await fetch("http://localhost:8080/api/v1/user/getAllUsers", {
		method: "GET",
		headers: headersList,
	});

	let data = await response.json();
	tableData = data.data.users;
	console.log(tableData);

	const table = document.getElementById("table-data");

	tableData.forEach((user) => {
		let newRow = document.createElement("tr");
		newRow.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                `;
		table.appendChild(newRow);
	});
};

getUsers();
