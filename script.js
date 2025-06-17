document.getElementById("weather-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const lat = document.getElementById("lat").value.trim();
    const lon = document.getElementById("lon").value.trim();
  
    if (!lat || !lon) {
      alert("Please provide both latitude and longitude.");
      return;
    }
  
    // Updated URL for external server (Spring Boot backend)
    fetch(`http://localhost:8080/weather?lat=${lat}&lon=${lon}`)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then(data => {
        document.getElementById("temp").textContent = data.temperature;
        document.getElementById("wind").textContent = data.windspeed;
        document.getElementById("code").textContent = data.weathercode;
        document.getElementById("time").textContent = data.time;
  
        document.getElementById("weather-result").classList.remove("hidden");
      })
      .catch(err => {
        alert("Error fetching weather. Check coordinates or server.");
        console.error(err);
      });
  });
  