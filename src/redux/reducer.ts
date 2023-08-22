import { BarberItem } from "../@types/general"
import { APPACTIONS } from "./actionTypes"
import { BARBER_DETAILS, SAVE_BARBERS_DATA } from "./actions"


type AppState = {
    barbers:BarberItem[]
    barber:BarberItem | null
}

const initialState:AppState = {
    barbers: [],
    barber: null
}

const reducer  = (state = initialState, action:APPACTIONS)=>{
    switch(action.type){
        case SAVE_BARBERS_DATA:{
            return {...state, barbers:action.barbers}
        }
        case BARBER_DETAILS:{
            return {...state, barber:action.barber}
        }
        default: return state
    }

}

export default reducer