import React from "react";
import { Link, useParams} from "react-router-dom";

function CardsForm({ formData, setFormData, submit, showCancelButton }) {
  const changeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

const {deckId} = useParams()
console.log(deckId)

  return (
    <form>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          name="front"
          className="form-control"
          placeholder="Front side of card"
          onChange={changeHandler}
          value={formData.front}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          name="back"
          placeholder="Back side of card"
          className="form-control"
          onChange={changeHandler}
          value={formData.back}
        ></textarea>
      </div>

      {/* so here we create a showCancelButton Prop in line 4 and pass it here, set it if true , then show cancel button
      if its false, then show done button - in the editCards.js <form> section, we set it to true so in the edit cards page 
      always show "cancel" button and the addcards page shows "done" button */}

      {/* Diff of prop inside function vs const prop????????????????????/ */}
      {showCancelButton ? (
        <Link to="/">
          <button value="Cancel" className="btn btn-secondary mx-3">
            Cancel
          </button>
        </Link>
      ) : (
        <Link to={`/decks/${deckId}`}>
            {/* using useParams in line 9 and 10 to get access to deckId page info*/}
        < button value="Cancel" className="btn btn-secondary mx-3">Done</button>
        </Link>
      )}

      <button className="btn btn-primary mx-2" onClick={submit}>
        Save
      </button>
    </form>

    //  Add card functionality 
    // must have a form with Done and Save button and it should work like this : 
    // If the user clicks Save, a new card is created and associated with the relevant deck. 
    // Then the form is cleared and the process for adding a card is restarted. 
    // If the user clicks Done, the user is taken to the Deck screen. 
    // In this multiple cards can be added in a deck.
  );
}

export default CardsForm;
