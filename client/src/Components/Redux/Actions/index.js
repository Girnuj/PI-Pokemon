import axios from "axios";
export const GET_POKEMONS = "getPokemons";
export const CLEAN_ONE_POKEMON = "cleanOnePokemon";
export const SET_LOADING = "setLoading";
export const UPDATE_POKEMONS = "updatePokemons";
export const SORT_POKEMONS = "sortPokemons";
export const SORT_POKEMONS_ATTACK = "sortPokemonsAttack";
export const GET_POKEMON_BY_NAME = "getPokemonByName";
export const FILTER_TYPE_POKEMONS = "filterTypePokemons";
export const GET_POKEMONDETAIL = "getPokemonDetail";
export const GET_TYPES = "getTypes";
export const POST_POKEMON = "postPokemon";

// export function getPokemons() {
//   return function (dispatch) {
//     return axios.get(`http://localhost:3001/pokemons/`).then((json) => {
//       dispatch({ type: GET_POKEMONS, payload: json });
//     });
//   };
// }

export function getPokemons(){
  return async function (dispatch){
      try {
          let response = await axios.get('http://localhost:3001/pokemons/');
  
          return dispatch({
              type: GET_POKEMONS,
              payload: response.data
          })
      } catch (error) {
          console.log(error);
      }
  }
}

// export function getPokemonByName(name) {
//     return async function (dispatch) {
//       return await axios
//       .get(`http://localhost:3001/pokemons?name=${name}`)
//       .then((json) => {
//         dispatch({ type: GET_POKEMON_BY_NAME, payload: json });
//         })
//     };
// }

export function getPokemonByName(name){
  return async function (dispatch){
      try {
          let response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
          return dispatch({
              type: GET_POKEMON_BY_NAME,
              payload: response.data
          })
      } catch (error) {
          console.log(error);
      }
  }
}

export function getTypes() {
    return async function (dispatch) {
      return await axios.get(`http://localhost:3001/types/`).then((json) => {
        dispatch({ type: GET_TYPES, payload: json });
      });
    };
}

export function getPokemonDetail(id) {
    return async function (dispatch) {
      return await axios
        .get(`http://localhost:3001/pokemons/${id}`)
        .then((json) => {
          dispatch({ type: GET_POKEMONDETAIL, payload: json });
        });
    };
}

export function cleanOnePokemon(value) {
  return {
    type: CLEAN_ONE_POKEMON,
    payload: value,
  };
}
export function setLoading(value) {
  return {
    type: SET_LOADING,
    payload: value,
  };
}
export function updatePokemons(value) {
  return {
    type: UPDATE_POKEMONS,
    payload: value,
  };
}
export function sortPokemons(value) {
  return {
    type: SORT_POKEMONS,
    payload: value,
  };
}
export function sortPokemonsAttack(value) {
  return {
    type: SORT_POKEMONS_ATTACK,
    payload: value,
  };
}

export function filterTypePokemons(data) {
  return {
    type: FILTER_TYPE_POKEMONS,
    payload: data,
  };
}