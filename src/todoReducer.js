export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.payload) return { ...t, completed: !t.completed };
          return t;
        }),
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
}
