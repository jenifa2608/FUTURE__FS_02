let total = 0;
let active = 0;

function addClient() {

  let name =
  document.getElementById("name").value;

  let phone =
  document.getElementById("phone").value;

  let email =
  document.getElementById("email").value;

  let company =
  document.getElementById("company").value;

  let status =
  document.getElementById("status").value;

  let notes =
  document.getElementById("notes").value;

  let list =
  document.getElementById("clientList");

  let card =
  document.createElement("div");

  card.className = "client-card";

  let statusClass = "";

  if(status === "New Lead") {
    statusClass = "new";
  }

  else if(status === "Pending") {
    statusClass = "pending";
  }

  else {
    statusClass = "completed";
  }

  card.innerHTML =

  "<strong>Client:</strong> " + name +

  "<br><strong>Phone:</strong> " + phone +

  "<br><strong>Email:</strong> " + email +

  "<br><strong>Company:</strong> " + company +

  "<br><strong>Notes:</strong> " + notes +

  "<br><span class='status " +
  statusClass + "'>" + status +
  "</span>" +

  "<br><button class='delete-btn' onclick='deleteClient(this)'>Delete</button>";

  list.appendChild(card);

  total++;
  active++;

  document.getElementById("totalClients").innerText = total;
  document.getElementById("activeClients").innerText = active;

}

function deleteClient(button) {

  button.parentElement.remove();

  total--;
  active--;

  document.getElementById("totalClients").innerText = total;
  document.getElementById("activeClients").innerText = active;

}

function searchClient() {

  let input =
  document.getElementById("search").value.toLowerCase();

  let cards =
  document.getElementsByClassName("client-card");

  for(let i = 0; i < cards.length; i++) {

    let text =
    cards[i].innerText.toLowerCase();

    if(text.includes(input)) {
      cards[i].style.display = "block";
    }

    else {
      cards[i].style.display = "none";
    }

  }

}
