const movies = [
  { img: "/img1.png", heading: "Star X", topic: "Action" },
  { img: "/img2.png", heading: "Star Wars", topic: "Action Adventure" },
  { img: "/img3.png", heading: "Gray Man", topic: "Sci-fi" },
  { img: "/img4.png", heading: "House of Dragon", topic: "Adventure Suspense" },
  { img: "/img5.png", heading: "Joker", topic: "Drama" },
  { img: "/img6.png", heading: "Suicide Squad", topic: "Funny" },
  { img: "/img7.png", heading: "Inception", topic: "Sci-fi Horror" },

]
import Movie from "../components/Movie"
const Movies = () => {
  return (
    <div className="container bg-red-600 px-4 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-items-center">
      {
        movies &&
        movies.map((movie, index) => {
          return (
            <Movie
              key={index}
              img={movie.img}
              heading={movie.heading}
              topic={movie.topic}
            />
          )
        })
      }
    </div>
  )
}

export default Movies