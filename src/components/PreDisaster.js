import React, { useState } from "react";

const api = {
  key: "e1a55c5130c87695b603560a9a539101",
  base: "https://api.openweathermap.org/data/2.5/",
};

function PreDisaster() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchPressed = () => {
    if (search.trim() === "") {
      setError("Please enter a city or town name.");
      return;
    }

    setLoading(true);
    setError("");
    
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`City not found!`);
        }
        return res.json();
      })
      .then((result) => {
        setWeather(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Inline styles
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, Helvetica, sans-serif",
      backgroundColor: "#f0f0f0",
    },
    app: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#282c34",
      color: "white",
    },
    header: {
      marginBottom: "20px",
    },
    h1: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      border: "2px solid #ccc",
      borderRadius: "4px",
      marginRight: "10px",
      width: "250px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      color: "white",
      backgroundColor: "#61dafb",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#21a1f1",
    },
    p: {
      fontSize: "1.2rem",
      margin: "10px 0",
    },
    error: {
      color: "#ff4c4c",
      fontSize: "1rem",
      marginTop: "20px",
    },
    loading: {
      fontSize: "1.5rem",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Weather Predictor</h1>

        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={searchPressed}
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Search
          </button>
        </div>

        {loading && <p style={styles.loading}>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}

        {typeof weather.main !== "undefined" && !loading && !error ? (
          <div>
            <p style={styles.p}>{weather.name}</p>
            <p style={styles.p}>{weather.main.temp}°C</p>
            <p style={styles.p}>{weather.weather[0].main}</p>
            <p style={styles.p}>({weather.weather[0].description})</p>
          </div>
        ) : (
          !loading && !error && <p style={styles.p}>No weather data available</p>
        )}
      </header>
    </div>
  );
}

export default PreDisaster;
