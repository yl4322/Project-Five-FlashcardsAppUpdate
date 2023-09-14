import React, { useState, useEffect } from 'react';
import {Link, } from "react-router-dom" 
// Chapter : Using Router, Switch, Route, and Link
import {listDecks} from '../utils/api';
// retreive data/function 
import {deleteDeck} from '../utils/api';
// using delete function from existing file


function Home(){ 
const [decks, setDecks] = useState([])  // useState from react

 useEffect(()=>{ // the effect hook chapter
   async function loadDecks(){
      const result = await listDecks() // fetch data from index.js under api folder
      setDecks(result)
   }  
   loadDecks()  
 },[decks.length]) 
// useEffect will update it every time adding something.
// but what does this ".length" do - this is the number of decks shwoing on home page
// useEffect gives "decks" the value 

 const handleDelete=(deckId)=>{
  if (window.confirm("Do you really want to delete this deck?")) { deleteDeck(deckId) // deckId info from '../utils/api'
    window.location.reload(false) //Reloads the current page.
  }
}
// router.push .. (alternative)

 return(
      <div>
      <Link to="./decks/new"> 
{/* react route link - reference on index.js file under Layout Folder */}
{/* this links to CreatDeck.js */}

         <button className="btn btn-secondary"> + Create Deck</button> 
        {/* creat deck button leads to this link*/}
      </Link>
     
{decks.map((deck, index)=>{
  return <div className="card m-3" key={index}>  
    
              <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
                 {/* bracket is just JSX rule */}
                <p className="card-text">{deck.description}</p>
                
                            
                <Link to={`decks/${deck.id}`} className="btn btn-secondary mx-1">View</Link>
                {/* the dollar $ is a string sign*/}

                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mx-1" >Study</Link>
                <button className="btn btn-danger mx-4" onClick={()=>handleDelete(deck.id)}>Delete</button>

              </div>
          </div>
})}
      </div>
       
    )
}

export default Home