import { combineReducers } from "redux";
import {eventsReducer} from './events-reducer'


export const rootReducer = combineReducers({
    events: eventsReducer
    //редьюсер для юзера. хранпить данные для конретного юзера и ихменять их по необходимости
    // user:
})