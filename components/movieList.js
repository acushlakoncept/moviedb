import Link from "next/link";
import { Card } from "react-bootstrap";


const MovieList = ({ movies }) => {

  const shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return (
    <>
     { movies.map(movie => (
          <div key={movie.id} className="col-lg-4 col-md-6 mb-4">   
            <Card className="h-100">
              <Link href={`/movies/${movie.id}`}>
                <a><Card.Img variant="top" src={movie.image} /></a>
              </Link>
              <Card.Body>
                <Card.Title> 
                  <Link href={`/movies/${movie.id}`}>
                  <a href="#">{movie.name}</a>
                  </Link>
                </Card.Title>
                <div><em>{movie.genre}</em></div>
                <Card.Text>
                  {shorten(movie.description, 100)}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{movie.rating}</small>
              </Card.Footer>
            </Card>
          </div>
     ))

     }
    </>
  )
}

export default MovieList;