import {eventsList} from './itemsAction'

const InitialState ={
    events: []
}

export const eventsReducer = (state = InitialState, action) => { //eventsList
    //action - объект, который хранить тип экшна в зависимости от кторого выбирается как рэдьюсер будет изменять стор
    switch (action.type){
        case 'FETCH_EVENT':
            return{
                ...state,
                events: action.payload
            }
        default:
            return state
    }
}