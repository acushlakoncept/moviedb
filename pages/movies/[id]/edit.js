import React from "react";
import { Container } from "react-bootstrap";
import { getMovieById } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

class EditMovie extends React.Component {

  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id)

    return { movie }
  }

  // state = {
  //     movie: {
  //       name: "",
  //       description: "",
  //       rating: "",
  //       image: "",
  //       cover: "",
  //       longDesc: "",
  //     }
  // }


  // componentDidMount() {
  //   const { id } = this.props.query
  //   getMovieById(id).then(movie => {
  //     this.setState({ movie })
  //   })
  // }

  render() {
    const { movie } = this.props
    return (
      <Container>
        <h1>Edit Movie</h1>
        <MovieCreateForm isInitialData={movie} />
      </Container>
    );
  }
}

export default EditMovie;