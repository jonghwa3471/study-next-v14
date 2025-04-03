import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await (await fetch(`${API_URL}/${id}`)).json();
  return response;
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await (await fetch(`${API_URL}/${id}/videos`)).json();
  return response;
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("==============");
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");
  return <h1>{movie.title}</h1>;
}
