import Link from "next/link"
import { createMovie } from "../actions"
import DisplayModal from "./modal"
import MovieCreateForm from "./movieCreateForm"


const SideMenu = ({categories}) => {
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then(movies => {
        console.log(JSON.stringify(movies))
    })
    modal.handleClose();
  }

  return (
    <div>
       <DisplayModal
       ref={ele => modal = ele}
       hasSubmit={false} >
         <MovieCreateForm handleFormSubmit={handleCreateMovie} />
       </DisplayModal>
       <h1 className="my-4">Shop Name</h1>
        <div className="list-group">
          { categories.map(category => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <a className="list-group-item">{category.name}</a>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default SideMenu