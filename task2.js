function showDashboard(){

document.querySelector(".login-page")
.style.display="none";

document.getElementById("dashboard")
.style.display="block";

}

function addClient(){

const name=
document.getElementById("clientName").value;

const project=
document.getElementById("clientProject").value;

if(name==="" || project===""){

alert("Please fill all fields");

return;

}

const table=
document.getElementById("clientTable");

const row=
table.insertRow();

row.innerHTML=`

<td>${name}</td>
<td>${project}</td>
<td>Active</td>

`;

document.getElementById("clientName").value="";
document.getElementById("clientProject").value="";

}
