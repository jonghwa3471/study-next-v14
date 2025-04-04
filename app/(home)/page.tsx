import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return await (await fetch(API_URL)).json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
