
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
});

document.querySelector(".menu-toggle").addEventListener("click", function(){
    document.querySelector('.nav-link2').classList.toggle("show");
})


// dark mode access 
const header=document.querySelector('.header')
const darkbutton=document.querySelector('#darkModeToggle')
const suitable=document.querySelector('.suitable-service')
const booking=document.querySelector('.booking')
const travel=document.querySelector('.holidaypack')
const menutoggle=document.querySelector('.menu-toggle')
darkbutton.addEventListener('click',()=>
    {
    header.classList.toggle('dark-mode')
    suitable.classList.toggle('dark-mode')
    booking.classList.toggle('dark-mode')
    travel.classList.toggle('dark-mode')
    menutoggle.classList.toggle('dark-mode')
})
// entering the stations name
const stations = [
    "Asansol",
    "Sealdah",
    "Howrah Junction",
    "Kolkata",
    "New Delhi",
    "Old Delhi Junction",
    "Mumbai CST",
    "Mumbai Central",
    "Chennai Central",
    "Chennai Egmore",
    "Kharagpur Junction",
    "Pune Junction",
    "Bangalore City Junction",
    "Secunderabad Junction",
    "Hyderabad Deccan",
    "Ahmedabad Junction",
    "Patna Junction",
    "Kanpur Central",
    "Lucknow Charbagh",
    "Gorakhpur Junction",
    "Varanasi Junction",
    "Prayagraj Junction",
    "Jaipur Junction",
    "Bhopal Junction",
    "Nagpur Junction",
    "Thiruvananthapuram Central",
    "Ernakulam Junction",
    "Madurai Junction",
    "Coimbatore Junction",
    "Visakhapatnam Junction",
    "Bhubaneswar",
    "Guwahati Junction",
    "Dibrugarh",
    "Silchar",
    "Ranchi Junction",
    "Tatanagar Junction",
    "Jodhpur Junction",
    "Udaipur City",
    "Surat",
    "Vadodara Junction",
    "Amritsar Junction",
    "Ludhiana Junction",
    "Dehradun",
    "Haridwar Junction",
    "Shimla",
    "Darjeeling"
];
 
function showSuggestions(inputElement,suggestionBoxId){
    let input = inputElement.value.toLowerCase();
    let suggestionBox = document.getElementById(suggestionBoxId);

if (input === "") {
    suggestionBox.style.display = "none";
    return;
}
let filteredStations = stations.filter(station => station.toLowerCase().startsWith(input));
let suggestionsHTML = "";
            filteredStations.forEach(station => {
                suggestionsHTML += `<div onclick="selectStation('${station}', '${inputElement.id}')">${station}</div>`;
            });
            if (suggestionsHTML) {
                suggestionBox.innerHTML = suggestionsHTML;
                suggestionBox.style.display = "block";
            } else {
                suggestionBox.style.display = "none";
            }
        }
        function selectStation(station, inputId) {
            document.getElementById(inputId).value = station;
            document.getElementById(inputId + "Suggestions").style.display = "none";
        }
        function searchTrains() {
            let source = document.getElementById("source").value;
            let destination = document.getElementById("destination").value;

            if (source === destination) {
                alert("Source and Destination cannot be the same.");
                return;
            }
            if (!source || !destination) {
                alert("Please enter both Source and Destination.");
                return;
            }

            alert(`Searching trains from ${source} to ${destination}...`);
        }

//   for voice search 
function startVoiceRecognition(inputId) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-IN"; // Set language to Indian English
    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById(inputId).value = transcript;
    };

    recognition.onerror = function(event) {
        console.error("Error occurred in recognition: " + event.error);
    };
}

// for search trains implementation 
const trainData = [
    {
        number:" 12384" ,
        name:"Asansol Sealdah Intercity Express",
        source: "Asansol",
        destination:"Sealdah",
        departure:"6:40",
        arrival: "10:45",
        duration: "4h 5m",
        type: "Superfast"
    },
    {
        number: "12301",
        name: "Rajdhani Express",
        source: "Sealdah",
        destination: "New Delhi",
        departure: "16:50",
        arrival: "10:30",
        duration: "17h 40m",
        type: "Rajdhani"
    },
    {
        number: "12302",
        name: "Sealdah Duronto Express",
        source: "Sealdah",
        destination: "New Delhi",
        departure: "18:30",
        arrival: "10:00",
        duration: "15h 30m",
        type: "Duronto"
    },
    {
        number: "12951",
        name: "Mumbai Rajdhani Express",
        source: "Mumbai Central",
        destination: "New Delhi",
        departure: "16:40",
        arrival: "08:35",
        duration: "15h 55m",
        type: "Rajdhani"
    },
    {
        number: "12952",
        name: "New Delhi Mumbai Rajdhani Express",
        source: "New Delhi",
        destination: "Mumbai Central",
        departure: "16:55",
        arrival: "08:35",
        duration: "15h 40m",
        type: "Rajdhani"
    },
    {
        number: "12623",
        name: "Chennai New Delhi Tamil Nadu Express",
        source: "Chennai Central",
        destination: "New Delhi",
        departure: "22:00",
        arrival: "06:30",
        duration: "32h 30m",
        type: "Superfast"
    },
    {
        number: "12624",
        name: "New Delhi Chennai Tamil Nadu Express",
        source: "New Delhi",
        destination: "Chennai Central",
        departure: "22:10",
        arrival: "06:40",
        duration: "32h 30m",
        type: "Superfast"
    },
    {
        number: "12801",
        name: "Purushottam Express",
        source: "Puri",
        destination: "New Delhi",
        departure: "21:50",
        arrival: "04:10",
        duration: "30h 20m",
        type: "Express"
    },
    {
        number: "12802",
        name: "Purushottam Express",
        source: "New Delhi",
        destination: "Puri",
        departure: "22:15",
        arrival: "05:30",
        duration: "31h 15m",
        type: "Express"
    },
    {
        number: "12903",
        name: "Golden Temple Mail",
        source: "Mumbai Central",
        destination: "Amritsar Junction",
        departure: "18:45",
        arrival: "07:30",
        duration: "36h 45m",
        type: "Superfast"
    },
    {
        number: "12904",
        name: "Golden Temple Mail",
        source: "Amritsar Junction",
        destination: "Mumbai Central",
        departure: "18:55",
        arrival: "07:35",
        duration: "36h 40m",
        type: "Superfast"
    },
    {
        number: "12985",
        name: "Jaipur Double Decker Express",
        source: "Delhi Sarai Rohilla",
        destination: "Jaipur Junction",
        departure: "17:35",
        arrival: "22:05",
        duration: "4h 30m",
        type: "Double Decker"
    },
    {
        number: "12986",
        name: "Delhi Sarai Rohilla Jaipur Double Decker Express",
        source: "Jaipur Junction",
        destination: "Delhi Sarai Rohilla",
        departure: "06:00",
        arrival: "10:35",
        duration: "4h 35m",
        type: "Double Decker"
    },
    {
        number: "12860",
        name: "Gitanjali Express",
        source: "Howrah Junction",
        destination: "Mumbai CST",
        departure: "13:50",
        arrival: "21:20",
        duration: "31h 30m",
        type: "Superfast"
    },
    {
        number: "12859",
        name: "Gitanjali Express",
        source: "Mumbai CST",
        destination: "Howrah Junction",
        departure: "06:00",
        arrival: "14:00",
        duration: "32h 00m",
        type: "Superfast"
    },
    {
        number: "12625",
        name: "Kerala Express",
        source: "Thiruvananthapuram Central",
        destination: "New Delhi",
        departure: "12:25",
        arrival: "13:15",
        duration: "48h 50m",
        type: "Superfast"
    },
    {
        number: "12626",
        name: "Kerala Express",
        source: "New Delhi",
        destination: "Thiruvananthapuram Central",
        departure: "11:25",
        arrival: "13:05",
        duration: "49h 40m",
        type: "Superfast"
    },
    {
        number: "15617",
        name: "Guwahati Dibrugarh Intercity Express",
        source: "Guwahati Junction",
        destination: "Dibrugarh",
        departure: "17:30",
        arrival: "05:30",
        duration: "12h 00m",
        type: "Express"
    },
    {
        number: "15618",
        name: "Dibrugarh Guwahati Intercity Express",
        source: "Dibrugarh",
        destination: "Guwahati Junction",
        departure: "17:15",
        arrival: "05:15",
        duration: "12h 00m",
        type: "Express"
    },
    {
        number: "12009",
        name: "Mumbai Ahmedabad Shatabdi Express",
        source: "Mumbai Central",
        destination: "Ahmedabad Junction",
        departure: "06:30",
        arrival: "12:45",
        duration: "6h 15m",
        type: "Shatabdi"
    },
    {
        number: "12010",
        name: "Ahmedabad Mumbai Shatabdi Express",
        source: "Ahmedabad Junction",
        destination: "Mumbai Central",
        departure: "15:10",
        arrival: "21:35",
        duration: "6h 25m",
        type: "Shatabdi"
    },
    
];

function searchTrains() {
    let source = document.getElementById("source").value.trim();
    let destination = document.getElementById("destination").value.trim();
    let date = document.getElementById("date").value;

    if (source === "" || destination === "" || date === "") {
        alert("Please fill all fields!");
        return;
    }
    let filteredTrains = trainData.filter(train => 
        train.source.toLowerCase() === source.toLowerCase() && 
        train.destination.toLowerCase() === destination.toLowerCase()
    );
    if (filteredTrains.length == 0) {
        filteredTrains = [{ number: "N/A", name: "No trains found", source: source, destination: destination, time: "N/A" }];
    }
    let newWindow = window.open("", "_blank");
    newWindow.document.write(`
      
<html>
    <head>
        <title>Train List</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #4CAF50; color: white; }
            .book-btn { 
                background-color: #ff6600; 
                color: white; 
                padding: 8px 15px; 
                border: none; 
                cursor: pointer; 
                font-size: 14px; 
                margin-top: 10px; 
                border-radius: 5px;
                display: block;
                width: 150px;
                margin: 10px auto;
            }
            .book-btn:hover { background-color: #cc5500; }
        </style>
    </head>
    <body>
        <h2>Available Trains</h2>
        <table>
            <tr>
                <th>Train Number</th>
                <th>Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Journey Duration</th>
                <th>Train Category</th>
                <th>Action</th>
            </tr>
            ${filteredTrains.map(train => `
                <tr>
                    <td>${train.number}</td>
                    <td>${train.name}</td>
                    <td>${train.source}</td>
                    <td>${train.destination}</td>
                    <td>${train.departure}</td>
                    <td>${train.arrival}</td>
                    <td>${train.duration}</td>
                    <td>${train.type}</td>
                    <td>
                        <button class="book-btn" onclick="bookTrain('${train.number}')">Book Now</button>
                    </td>
                </tr>
            `).join('')}
        </table>

        <script>
            function bookTrain(trainNumber) {
                alert("Redirecting to booking page for Train " + trainNumber);
                window.location.href = "booking.html?train=" + trainNumber; 
            }
        </script>
    </body>
</html>
`);

        
       
}



        



// Fare Breakdown Chart
const ctx = document.getElementById('fareChart').getContext('2d');
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Base Fare', 'Taxes', 'Service Charge'],
        datasets: [{
            data: [200, 50, 30],
            backgroundColor: ['blue', 'orange', 'green']
        }]
    }
});

// Weather Fetch
async function fetchWeather() {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric');
    let data = await response.json();
    document.getElementById('weatherInfo').innerText = `Delhi: ${data.main.temp}°C, ${data.weather[0].description}`;
}
fetchWeather();
