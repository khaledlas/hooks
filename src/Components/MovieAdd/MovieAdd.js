import React, { useState } from "react";
import { message } from "react-message-popup";
// import { moviesData } from "../../Constants/Data";
import Modal from "./Modal";
import "./MovieAdd.css";
import useModal from "./useModal";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const MovieAdd = ({ handleMovie }) => {
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm,
  } = useModal();
  //Fonction qui affiche l'année en cours
  const getCurrentYear = () => {
    return new Date().getUTCFullYear();
  };
  // console.log(getCurrentYear());
  const [name, setName] = useState("");
  const [annee, setAnnee] = useState(getCurrentYear);
  const [rating, setRating] = useState(0);
  const [url, setUrl] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [category, setCategory] = useState("");

  let movie = {
    name: name,
    date: annee,
    rating: rating,
    image: url,
    description: synopsis,
    type: category,
  };
  // console.log("movies ", movie);
  return (
    <>
      <button className="modal-toggle" onClick={toggleRegistrationForm}>
        Ajoutez un film
      </button>
      <div className="movie-add-modal">
        <Modal
          isShowing={isRegistrationFormShowed}
          hide={toggleRegistrationForm}
          title="Renseignez la fiche du film"
        >
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nom du film"
                name="name"
                onSelect={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Catégorie"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            {/* <div>
              <DatePicker
                // name={this.props.name}
                // selected={annee}
                onChange={(e) => setAnnee(e.target.value)}
                // onBlur={this.handleBlur}
                showYearPicker
                placeholderText="Année de production"
                dateFormat={"yyyy"}
                value={annee}
              />
            </div> */}

            <div className="form-group">
              <input
                type="month"
                placeholder={getCurrentYear()}
                name="annee"
                onChange={(e) => setAnnee(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Synopsis"
                name="synopsis"
                onChange={(e) => setSynopsis(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="URL de l'affiche du film"
                name="url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="rating">
              <label for="rate">Donnez une note au film : </label>
              <select
                name="note"
                id="note"
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Validez"
                onClick={(e) => {
                  e.preventDefault();
                  handleMovie(movie);
                  toggleRegistrationForm();
                  // alert("Le film a bien été ajouté !");
                  message.success("Le film a bien été ajouté !", 4000);
                }}
              />
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default MovieAdd;
