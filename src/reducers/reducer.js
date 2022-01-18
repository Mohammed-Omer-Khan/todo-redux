const initialState = {
  tasks: [],
  addTask: false,
};

const websiteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_ADD_TASK':
      return {
        ...state,
        addTask: true,
        tasks: payload
      };
    default:
      return state
  }
};
export default websiteReducer;