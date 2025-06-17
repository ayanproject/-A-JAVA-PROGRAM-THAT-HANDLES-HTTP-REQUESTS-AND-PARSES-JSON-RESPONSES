# -A-JAVA-PROGRAM-THAT-HANDLES-HTTP-REQUESTS-AND-PARSES-JSON-RESPONSES

COMPANY: CODTECH IT SOLUTIONS

NAME: AYAN MONDAL

INTERN ID: CT06DL1393

DOMAIN: JAVA PROGRAMMING

DURATION: 6 WEEKS

MENTOR : NEELA SANTOSH

*DESCRIPTION* :

### **Project Title:**

**Write a Java Application That Consumes a Public REST API (e.g., Fetching Weather Data) and Displays the Data in a Structured Format**

### **Project Description:**

This project focuses on building a **Java-based application** that interacts with a **public RESTful API** to fetch real-time data—such as weather information—and display it in a structured and user-friendly format. The application demonstrates how to consume web services in Java, make HTTP requests, and parse **JSON responses** effectively. The backend is developed using **Java in IntelliJ IDEA**, while the frontend interface is crafted using **HTML, CSS, and JavaScript in Visual Studio Code**.

At the heart of the application is the use of Java libraries such as **`HttpURLConnection`**, **Apache HttpClient**, or **OkHttp** for making HTTP requests to a public REST API—commonly the **OpenWeatherMap API** or any similar free weather service. Once a request is made with the appropriate endpoint and API key, the application receives a **JSON response** containing current weather data like temperature, humidity, wind speed, city name, and weather conditions.

The application includes a **JSON parsing mechanism**, built using libraries such as **Gson** or **Jackson**, to extract relevant data fields from the JSON response. The parsed data is then mapped to a custom Java model class (e.g., `WeatherInfo`) for structured representation. This separation of concerns—between data fetching, parsing, and presentation—ensures clean code and ease of maintenance.

On the **frontend**, a simple and intuitive UI is created using HTML and styled with CSS. JavaScript is used to handle user input (e.g., entering a city name) and to display weather data returned by the backend. The frontend sends user queries to the backend through **RESTful endpoints**, implemented in Java using **Spring Boot** or **plain servlet-based architecture**.

The backend processes the user request, communicates with the third-party API, parses the JSON, and returns structured weather information to the frontend in a format like JSON or HTML. This architecture enables **real-time interaction**, where the user inputs a location and receives up-to-date weather details dynamically.

### Key Features:

* **REST API Integration:** Connects to a public API like OpenWeatherMap to fetch real-time weather data.
* **HTTP Request Handling:** Uses Java libraries (`HttpURLConnection`, OkHttp, or Apache HttpClient) to send requests.
* **JSON Parsing:** Utilizes Gson or Jackson to convert JSON responses into structured Java objects.
* **Frontend-Backend Communication:** Uses RESTful API endpoints for data exchange.
* **Responsive UI:** Displays the fetched weather data clearly using HTML/CSS and JavaScript.
* **Error Handling:** Includes basic error handling for network issues, invalid city names, and API errors.

### Technologies Used:

* **Backend:** Java, Gson/Jackson, REST API, IntelliJ IDEA
* **Frontend:** HTML, CSS, JavaScript, Visual Studio Code
* **APIs:** Public REST APIs (e.g., OpenWeatherMap)

### Conclusion:

This project provides hands-on experience in **web service integration**, **API consumption**, and **data processing in Java**. It is ideal for students and developers looking to understand real-world applications of Java in fetching and presenting dynamic data. The combination of Java backend with a modern frontend interface showcases how full-stack applications are built using minimal but effective technologies.

---
