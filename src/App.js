import './App.scss';

import InfoCard from './components/InfoCard/InfoCard';
import Navbar from './components/Navbar/Navbar';

const logos = {
  "netflix": require("./logos/netflix.png"),
  "hulu": require("./logos/hulu.png"),
  "disney": require("./logos/disney.png"),
  "amazon": require("./logos/amazon.png"),
  "hbo": require("./logos/hbo.png"),
  "paramount": require("./logos/paramount.png")
}

function App() {
  const movies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      // cover: 'https://images8.alphacoders.com/118/1186452.jpg',
      logo: logos['netflix'],
      link: 'https://www.netflix.com',
      platform: 'netflix',
      watched: false
    },
    {
      id: 2,
      title: 'The Godfather',
      cover: 'https://images8.alphacoders.com/118/1186452.jpg',
      logo: logos['netflix'],
      link: 'https://www.netflix.com',
      platform: 'netflix',
      watched: true
    },
    {
      id: 3,
      title: 'The Dark Knight',
      cover: 'https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279',
      logo: logos['hulu'],
      link: 'https://www.hulu.com',
      platform: 'hulu',
      watched: false
    },
    {
      id: 4,
      title: 'The Godfather: Part II',
      cover: 'https://images8.alphacoders.com/118/1186452.jpg',
      logo: logos['disney'],
      link: 'https://www.netflix.com',
      platform: 'disney',
      watched: false
    },
    {
      id: 5,
      title: 'The Lord of the Rings',
      cover: 'https://images8.alphacoders.com/118/1186452.jpg',
      logo: logos['hbo'],
      link: 'https://www.netflix.com',
      platform: 'hbo',
      watched: false
    },
    {
      id: 6,
      title: 'Pulp Fiction',
      cover: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
      logo: logos['netflix'],
      link: 'https://www.netflix.com',
      platform: 'netflix',
      watched: false
    },
    {
      id: 7,
      title: 'The Good, the Bad and the Ugly',
      cover: 'https://images8.alphacoders.com/118/1186452.jpg',
      logo: logos['amazon'],
      link: 'https://www.netflix.com',
      platform: 'amazon',
      watched: true
    },
    {
      id: 8,
      title: 'The Lord of the Rings',
      cover: 'https://images8.alphacoders.com/118/1186452.jpg',
      logo: logos['paramount'],
      link: 'https://www.netflix.com',
      platform: 'paramount',
      watched: false
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <div className="movie-list">
        {movies.map(movie => (
          <InfoCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
