const reducer = (state, action) => {
    switch (action.type){
        case 'add_item':
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
                ]
                
            }
        case 'toggle_completed':
            console.log(state)
            return { 
                ...state,
                list: state.list.map(item => {
                        if(item.id === action.payload) {
                            return {...item, completed: !item.completed}
                        }
                        return item;
                    })
            }
        case 'clear_completed':
            return {
                ...state,
                list: state.list.filter( item => {
                    return item.completed == false
                })
            }
        default:
            return state
    }
}

//initial state:
const list = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

const todo = {
    list: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export {reducer, todo}