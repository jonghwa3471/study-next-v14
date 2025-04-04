"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => router.push(`/movies/${id}`);
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>
        {title.length > 20 ? `${title.slice(0, 20)}..` : title}
      </Link>
    </div>
  );
}
