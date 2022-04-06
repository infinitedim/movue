import Home from "../components/Home"; // Home Page
import Anime from "../components/Anime"; // Anime Page
import About from "../components/About"; // About Page
import Contact from "../components/Contact"; // Contact Page
import Genres from "../components/Genres"; // Genres Page
import Action from "../components/Action"; // Action Page
import Adventure from "../components/Adventure"; // Adventure Page
import Comedy from "../components/Comedy"; // Comedy Page
import Drama from "../components/Drama"; // Drama Page
import Fantasy from "../components/Fantasy"; // Fantasy Page
import Horror from "../components/Horror"; // Horror Page
import Romance from "../components/Romance"; // Romance Page
import SciFi from "../components/SciFi"; // SciFi Page
import Thriller from "../components/Thriller"; // Thriller Page

const routes = [
  {
    path: "/",
    component: Home, // Home component
  },
  {
    path: "/about",
    component: About, // About component
  },
  {
    path: "/contact",
    component: Contact, // Contact component
  },
  {
    path: "/genres",
    component: Genres, // Genres component
  },
  {
    path: "/anime",
    component: Anime, // Anime component
  },
  {
    path: "/movies", // Movies component
    component: Movies,
  },
  {
    path: "/genres/action",
    component: Action,
  },
  {
    path: "/genres/adventure",
    component: Adventure,
  },
  {
    path: "/genres/comedy",
    component: Comedy,
  },
  {
    path: "/genres/drama",
    component: Drama,
  },
  {
    path: "/genres/fantasy",
    component: Fantasy,
  },
  {
    path: "/genres/horror",
    component: Horror,
  },
  {
    path: "/genres/romance",
    component: Romance,
  },
  {
    path: "/genres/sci-fi",
    component: SciFi,
  },
  {
    path: "/genres/thriller",
    component: Thriller,
  },
];

export default routes;
