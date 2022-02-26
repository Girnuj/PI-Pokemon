import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/index.jsx";
import { getPokemonDetail } from "../Redux/Actions";
import "./Detalles.css";

const Detalles = () => {
  const { id } = useParams();
  const getId = useSelector((state) => state.pokemonDetail[0]);

  //   console.log(getId)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(id));
  }, [dispatch, id]);

  if (getId) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="cardDetalles">
            {/* <h2>{name}</h2> */}
            <div className="img_card">
              <img src={getId.image} alt="name" />
            </div>
            <div className="content">
              <h2>{getId.name}</h2>
              <p>Largo: {getId.height} cm</p>
              <p>Peso: {getId.weight} Kg</p>
              <p>Vida: {getId.hp}</p>
              <p>Ataque: {getId.attack}</p>
              <p>Defensa: {getId.defense}</p>
              <p>Velocidad: {getId.speed}</p>

              
              
            </div>
          </div>
        </div>


       </>
    );
  } else return null;
};

export default Detalles;