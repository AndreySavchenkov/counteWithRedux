const ADD_COUNT = 'ADD_COUNT'
const ADD_NAME = 'ADD_NAME'
const SHOW_NAME = 'SHOW_NAME'

export type countReducer = {
    count: number
    name: string
    showName: string
}

type addCountAT = {
    type: 'ADD_COUNT',
}
type addNameAT = {
    type: 'ADD_NAME'
    name: string
}
type showNameAC = {
    type: 'SHOW_NAME'
}

type ActionType = addCountAT | addNameAT | showNameAC

const initialState: countReducer = {
    count: 3,
    name: '',
    showName: '',
}

export const countReducer = (state: countReducer = initialState , action: ActionType):countReducer => {
    switch (action.type) {
        case ADD_COUNT:
            let sum = state.count + 1
            return {...state, count: sum}
        case ADD_NAME:
            return {...state, name: action.name}
        case SHOW_NAME:
            return {...state, showName: state.name}
        default:
            return state
    }
}

export const addCountAC = ():addCountAT => { return{type: 'ADD_COUNT'}}
export const addNameAC = (name: string) => {return{type: 'ADD_NAME', name}}
export const showNameAC = () => {return{type: 'SHOW_NAME'}}

