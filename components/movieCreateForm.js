import { useState } from "react"
import { Button } from "react-bootstrap"


const MovieCreateForm = ({handleFormSubmit, isInitialData, submitBtnText}) => {

  const defaultData = {
    name: "",
    description: "",
    rating: "",
    image: "",
    cover: "",
    longDesc: "",
  }

  const formData = isInitialData ? {...isInitialData} : defaultData

  const [form, setForm] = useState(formData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleGenreChange = (e) => {
    const { options } = e.target
    const selectedGenres = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedGenres.push(options[i].value)
      }
    }
    setForm({ ...form, genre: selectedGenres.toString() })
  }

  const submitForm = (e) => {
    handleFormSubmit({...form})
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
        onChange={handleChange} 
        type="text"
        value={form.name}
        className="form-control" 
        name="name" 
        id="name" 
        aria-describedby="emailHelp" 
        placeholder="Lord of the Rings" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
        onChange={handleChange} type="text"
        value={form.description} 
        className="form-control" 
        name="description" 
        id="description" 
        placeholder="Somewhere in Middle-earth..." />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
        onChange={handleChange} 
          value={form.rating}
          type="number" max="5" min="0" 
          className="form-control" 
          name="rating" 
          id="rating" 
          placeholder="3" />
        <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
        onChange={handleChange} type="text"
        value={form.image} 
        className="form-control" 
        name="image" 
        id="image" 
        placeholder="http://....." />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
        onChange={handleChange} type="text"
        value={form.cover} 
        className="form-control" 
        name="cover" 
        id="cover" 
        placeholder="http://......" />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
        onChange={handleChange}
        value={form.longDesc} 
        className="form-control" 
        name="longDesc" 
        id="longDesc" 
        rows="3"></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
        onChange={handleGenreChange}
         multiple className="form-control" name="genre" id="genre">
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <Button 
        className="my-3"
        variant="primary" onClick={submitForm}>
            {submitBtnText || 'Create Movie'}
      </Button>
    </form>
  )
}

export default MovieCreateForm