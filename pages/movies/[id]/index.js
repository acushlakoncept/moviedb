
import { useRouter } from "next/router"
import { Button, Container } from "react-bootstrap"
import { getMovieById, deleteMovie } from "../../../actions"

const Movie = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props

  const handleDeleteMovie = id => {
    deleteMovie(id).then(movies => {
      router.push("/")
    })
  }

  return (
    <Container>
      <div className="container bg-light p-5">
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <hr className="my-4" />
      <p>{movie.genre}</p>
      <p>
        <Button
         onClick={() => router.push(`/movies/${id}/edit`)}
         variant="warning" >Edit</Button>
        <Button 
          onClick={() => handleDeleteMovie(movie.id)}
          variant="danger" className="ms-2">Delete</Button>
      </p>
      </div>
      <p className="desc-text">
        {movie.longDesc}
      </p>
      <style jsx>{`
        .desc-text {
          font-size: 21px;
        }
      `}</style>
    </Container>
  )
}


Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)

  return { movie }
}

export default Movie