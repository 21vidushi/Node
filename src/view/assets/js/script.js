
const body = document.body;
const themeInput = document.getElementById("themeInput");
const darkTheme = localStorage.getItem("darkTheme");

// change theme on load
if(darkTheme==="true"){
    body.classList.add("dark");
    themeInput.checked=true;
}else{
    body.classList.remove("dark");
    themeInput.checked=false;
}

// change theme on click
function themeSwitcher(e){
    if(themeInput.checked){
        body.classList.add("dark");
        localStorage.setItem("darkTheme", true);
    }else{
        body.classList.remove("dark");
        localStorage.setItem("darkTheme", false);
    }
    console.log(darkTheme);
}

const progressBar = document.getElementById("progress-bar");
const counter = document.getElementById("counter");

let time = 60;

// time counter
setInterval(()=>{
    if(time <= 0){
        time=60;
    }
    time-=1;
    counter.innerText = time;
    progressBar.style.background = `conic-gradient(#3dc6c1 ${time/60*100}%, #ddd ${100 - time/60*100}%)`;
},[1000])

// assets/js/script.js

// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch data from your backend API
//     fetch('/api/tickers')
//         .then(response => response.json())
//         .then(data => {
//             // Update the content of the data-container div with the fetched data
//             console.log(data.data);
//             const name = document.getElementById('name');
//             const last = document.getElementById('last');
//             const sell = document.getElementById('sell');
//             const buy = document.getElementById('buy');
//             const volume = document.getElementById('volume');
//             const base_unit = document.getElementById('base-unit');

//             // Assuming your API response is an object with a property 'value'
//             name.innerHTML = `<p> ${data.data[0].name}</p>`;
//             last.innerHTML = `<p> ₹${data.data[0].last}</p>`;
//             buy.innerHTML = `₹${data.data[0].buy}`;
//             sell.innerHTML = `₹${data.data[0].sell}`;
//             volume.innerHTML = `${data.data[0].volume}`;
//             base_unit.innerHTML = `${data.data[0].base_unit}`;
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// });


// assets/js/script.js

document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from your backend API
    fetch('/api/tickers')
        .then(response => response.json())
        .then(data => {
            // Update the content of the table body with the fetched data
            const tableBody = document.querySelector('tbody');

            // Clear existing table rows
            tableBody.innerHTML = '';

            // Iterate through the array and create rows for each data entry
            data.data.forEach((entry, index) => {
                const row = document.createElement('tr');
        console.log(entry);
                // Add data to each column
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>
                        <a href="#" >
                           
                            ${entry.name}
                        </a>
                    </td>
                    <td id="last">₹${entry.last.toLocaleString()}</td>
                    <td>₹${entry.buy.toLocaleString()} / ₹${entry.sell.toLocaleString()}</td>
                    <td class="${entry.volume < 0 ? 'loss' : 'profit'}">${entry.volume}</td>
                    <td class="${entry.volume < 0 ? 'loss' : 'profit'}">${entry.base_unit}</td>
                `;

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
// Function to format numbers with commas after the first five digits
function formatNumberWithCommas(number) {
    return number.toLocaleString(undefined, { maximumSignificantDigits: 6, useGrouping: true });
}
