import Link from "next/link"
import { useRouter } from "next/router"
import { createMovie } from "../actions"
import DisplayModal from "./modal"
import MovieCreateForm from "./movieCreateForm"


const SideMenu = ({categories, changeCategory, activeCategory}) => {
  let modal = null
  const router = useRouter();

  const handleCreateMovie = (movie) => {
    createMovie(movie).then(movies => {
      modal.handleClose();
      router.push("/")
    })
    
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
          { categories.map(cat => (
              <a 
              key={cat.id}
              onClick={() => changeCategory(cat.name)}
              className={`list-group-item ${activeCategory === cat.name ? 'active' : ''}`}>{cat.name}</a>
          ))}
        </div>
    </div>
  )
}

export default SideMenu