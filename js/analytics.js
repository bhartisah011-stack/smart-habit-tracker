const totalHabits = 10;
const completedHabits = 7;

const completionPercent =
((completedHabits / totalHabits) * 100).toFixed(0);

document.getElementById("completionPercent").innerText =
completionPercent + "%";


// Weekly Chart
new Chart(document.getElementById("weeklyChart"), {
    type: "bar",
    data: {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets: [{
            label: "Habits Completed",
            data: [5,6,4,7,8,6,9],
            backgroundColor: "#d96b4f",
    borderColor: "#d96b4f",
    borderWidth: 2
        }]
    }
});


// Focus Hours Chart
new Chart(document.getElementById("focusChart"), {
    type: "line",
    data: {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets: [{
            label: "Focus Hours",
            data: [2,3,4,2,5,6,4],
            borderColor: "#d96b4f",
    backgroundColor: "#d96b4f",
    tension: 0.3
        }]
    }
});


// Mood Trend Chart
new Chart(document.getElementById("moodChart"), {
    type: "line",
    data: {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
        datasets: [{
            label: "Mood Rating",
            data: [3,4,2,5,4,5,4],
            borderColor: "#d96b4f",
    backgroundColor: "#d96b4f",
    tension: 0.3
        }]
    }
});