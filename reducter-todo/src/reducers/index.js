export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Study for Sprint',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Pass class',
        completed: false,
        id: 3892987591
    }
];
export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log(action.payload);
            return [...state, action.payload];
        case 'TOGGLE_TODO_STATUS':
            let newState = [...state];
            newState[action.payload.index].completed = !newState[action.payload.index].completed;
            return newState;
        case 'CLEAR_COMPLETED':
            let newState2 = state.filter(todo => !todo.completed);
            return newState2;
        default: return state;
    }
}