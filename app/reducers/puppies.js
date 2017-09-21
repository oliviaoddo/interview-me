// import axios from 'axios'

//INITIAL STATE
const initialState = {
  rescuer: {}
};

// ACTION TYPE CONSTANT
const GET_RESCUER = 'GET_RESCUER'
const CREATE_RESCUER = 'CREATE_RESCUER'
const EDIT_RESCUER = 'EDIT_RESCUER'

// ACTION CREATORS

const getRescuer = rescuer => {
  return {
    type: GET_RESCUER,
    rescuer
  };
};

const createRescuer = rescuer => {
  return {
    type: CREATE_RESCUER,
    rescuer
  };
};

const editRescuer = rescuer => {
  return {
    type: EDIT_RESCUER,
    rescuer
  };
};

// THUNKS

// export const fetchRescuer = id =>
//   dispatch =>
//   axios.get(`/api/rescuers/${id}`)
//   .then(res => res.data)
//   .then(rescuer => {
//     dispatch(getRescuer(rescuer))
//   })
//   .catch(err => console.log('fetch rescuer error', err))


// REDUCER

export default function reducer(state=initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_RESCUER:
    newState.rescuer = action.rescuer
    break
  case CREATE_RESCUER:
    newState.rescuer = action.rescuer
    break
  case EDIT_RESCUER:
    newState.rescuer = action.rescuer
    break
  default:
    return state
  }
  return newState
}
