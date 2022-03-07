import Router from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import { getMovieById, updateMovie } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

class EditMovie extends React.Component {


  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id)

    return { movie }
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then(updatedMovie => {
      Router.push(`/movies/${movie.id}`)
    })
  }


  render() {
    const { movie } = this.props
    return (
      <Container>
        <h1>Edit Movie</h1>
        <MovieCreateForm
        submitBtnText="Update Movie" 
        isInitialData={movie}
        handleFormSubmit={this.handleUpdateMovie}
         />
      </Container>
    );
  }
}

export default EditMovie;