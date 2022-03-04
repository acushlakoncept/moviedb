
import { useRouter } from "next/router"
import { Jumbotron, Button, Container } from "react-bootstrap"
import { getMovieById } from "../../actions"

const Movie = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props

  return (
    <Container>
      <div className="container bg-light p-5">
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <hr className="my-4" />
      <p>{movie.genre}</p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
      </div>
      <p className="desc-text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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