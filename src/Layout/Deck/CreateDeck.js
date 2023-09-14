import React, { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { createDeck } from '../../utils/api'; //import function


function CreateDeck(){
const[formData, setFormData] = useState({
    name:"",
    description:""
})

const history = useHistory();

const changeHandler = ({target})=>(
   setFormData({
        ...formData,
        [target.name]: target.value,
      })
)

const handleSubmit = (event)=>{
    event.preventDefault()
    createDeck(formData)
    setFormData({ name:"",
    description:""})
    history.push("/")
}

// example of useHistory
//const saveCard =(event)=>{
//     event.preventDefault()
//     createCard(deckId, formData)

//     setFormData({front:"", back:""})
//     history.push(`/decks/${deckId}`)
// }



return (
    <div>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
    </ol>
    </nav>
    <h1>Create Deck</h1>
    <form>
    
    <div className="form-group">

        <label htmlFor="name">Name</label> <br></br> 
        <input name ="name" className="form-control"  type="text" placeholder="Deck Name" onChange={changeHandler} value={formData.name}></input>
     </div>   
     <div className="form-group">
        <label htmlFor="description" >Description</label> <br></br>
        <textarea name ="description" className="form-control" rows="4" placeholder="Brief description of the deck" onChange={changeHandler} value={formData.description}></textarea>
    </div>
        <Link to="/">
            <button value="Cancel" className="btn btn-secondary">Cancel</button>
        </Link>
       
            <button  className="btn btn-primary mx-2" onClick={handleSubmit}>Submit</button>
         {/* should use useHistory hook in react to navigate to diff places - see line 29*/}
       
        

    </form>

    </div>
)}

export default CreateDeck