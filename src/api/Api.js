import {
    _getAllRooms,
} from './_Database.js'

//****************************************/
// 1. Hole alle Räume mit Navigationsdaten
//****************************************/
export function getAllRooms() {
    return Promise.all([
        _getAllRooms(),
    ]).then((rooms) => ({
        rooms,
    }))
}