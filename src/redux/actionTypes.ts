import { BARBER_DETAILS, SAVE_BARBERS_DATA } from "./actions";
import { BarberItem } from "../@types/general";



type SAVE_BARBERS_DATA_ACTION = {
    type: typeof SAVE_BARBERS_DATA;
    barbers: BarberItem
}

type BARBER_DETAILS_ACTION = {
    type: typeof BARBER_DETAILS;
    barber: BarberItem
}

export type APPACTIONS = SAVE_BARBERS_DATA_ACTION | BARBER_DETAILS_ACTION