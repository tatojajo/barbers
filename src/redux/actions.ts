import { BarberItem } from "../@types/general"
import { APPACTIONS } from "./actionTypes"

export const SAVE_BARBERS_DATA = 'SAVE_BARBERS_DATA'
export const BARBER_DETAILS = 'BARBER_DETAILS'



export const saveBarbersData = (barbers: BarberItem): APPACTIONS => ({
    type: SAVE_BARBERS_DATA,
    barbers
})

export const barberDetails = (barber:BarberItem):APPACTIONS=>({
    type:BARBER_DETAILS,
    barber
})

