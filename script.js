let events = [
    {
        name: "CodeSprint 2026",
        date: "March 20-21, 2026",
        venue: "Tech Park Auditorium"
    },
    {
        name: "InnovateX HackFest",
        date: "April 5, 2026",
        venue: "Innovation Hub Center"
    }
];

function displayEvents() {
    const list = document.getElementById("eventList");
    list.innerHTML = "";

    events.forEach((event, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
      <strong>${event.name}</strong><br>
      Date: ${event.date}<br>
      Venue: ${event.venue}<br><br>
      <button class="delete-btn">Delete</button>
    `;

        li.querySelector(".delete-btn").addEventListener("click", () => {
            removeEvent(index);
            console.log("deleted")
        });

        list.appendChild(li);
    });
}

function addEvent() {
    const name = document.getElementById("newName").value;
    const date = document.getElementById("newDate").value;
    const venue = document.getElementById("newVenue").value;

    if (!name || !date || !venue) {
        alert("Please fill all fields");
        return;
    }

    events.push({ name, date, venue });
    displayEvents();

    document.getElementById("newName").value = "";
    document.getElementById("newDate").value = "";
    document.getElementById("newVenue").value = "";
}

function removeEvent(index) {
    index = parseInt(index);
    if (confirm("Delete this event?")) {
        events.splice(index, 1);
        displayEvents();
    }
}