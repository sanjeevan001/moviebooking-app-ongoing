import React, { useState } from "react";

let screens = [
  {
    id: 2,
    time: "3pm",
    seats: [1, 1, 0, 1],
  },
  {
    id: 3,
    time: "6pm",
    seats: [0, 1, 0, 0],
  },
  {
    id: 4,
    time: "9pm",
    seats: [1, 0, 1, 1],
  },
];

const Movies = [
  {
    id: 1,
    title: "vijayyy",
    image:
      "https://stat5.bollywoodhungama.in/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-12-at-1.21.49-PM-1.jpeg",
  },
  {
    id: 2,
    title: "Sample Movie 1",
    image:
      "https://stat5.bollywoodhungama.in/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-12-at-1.21.49-PM-1.jpeg",
  },
  {
    id: 3,
    title: "Sample Movie 2",
    image:
      "https://stat5.bollywoodhungama.in/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-12-at-1.21.49-PM-1.jpeg",
  },
  {
    id: 4,
    title: "Sample Movie 3",
    image:
      "https://stat5.bollywoodhungama.in/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-12-at-1.21.49-PM-1.jpeg",
  },
];

function MovieBooking() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatsSelected = (index, clickedScreen) => {
    if (clickedScreen?.id !== selectedScreen?.id) {
      setSelectedSeats([index]);
      setSelectedScreen(clickedScreen);
      return;
    }
    setSelectedScreen(clickedScreen);
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((i) => i !== index));
    } else {
      setSelectedSeats((seats) => [...seats, index]);
    }
  };

  return (
    <div>
      <h2>MovieBooking</h2>
      <h2>Choose a movie</h2>
      <div className="Movie-section">
        {Movies.map((movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
          >
            <img className="image" src={movie.image} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <>
          <h2>Choose your screen</h2>
          <div className="screen-selection">
            {screens.map((screen) => (
              <div
                key={screen.id}
                className={`screen ${
                  selectedScreen?.id === screen.id ? "selected" : ""
                } ${screen.seats.includes(1) ? "available" : "booked"}`}
                onClick={() => handleSeatsSelected(screen.id, screen)}
              >
                {screen.time}
                {screen.id}

                <div>
                  {screen.seats.map((seat, index) => (
                    <div
                      key={index}
                      className={`seat ${seat ? "available" : "unavailable"} ${
                        selectedSeats.includes(index) &&
                        selectedScreen?.id === screen.id
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => {
                        if (seat) {
                          handleSeatsSelected(index, screen);
                        }
                      }}
                    >
                      <div className="seat-number">{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MovieBooking;
