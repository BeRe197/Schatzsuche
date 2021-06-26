
//*********************************/
//Database - Räume
//*********************************/
//0 = Keine Tür
//X = Tür zu Raum X

export function _getAllRooms(){
    return new Promise((res, rej) => {
        setTimeout(() => res({...rooms}), 1200)
    })
}

let rooms = {
    1: {
        name:'Raum 1',
        roomnr:1,
        up: 0,
        down:0,
        left:7,
        right:2,
        exit:0,
        treasure:0
    },
    2: {
        name:'Raum 2',
        roomnr:2,
        up: 0,
        down:3,
        left:1,
        right:5,
        exit:0,
        treasure:0
    },
    3: {
        name:'Raum 3',
        roomnr:3,
        up: 2,
        down:0,
        left:0,
        right:4,
        exit:0,
        treasure:0
    },
    4: {
        name:'Raum 4',
        roomnr:4,
        up: 5,
        down:0,
        left:3,
        right:0,
        exit:0,
        treasure:0
    },
    5: {
        name:'Raum 5',
        roomnr:5,
        up: 6,
        down:4,
        left:2,
        right:0,
        exit:0,
        treasure:0
    },
    6: {
        name:'Raum 6',
        roomnr:6,
        up: 0,
        down:5,
        left:0,
        right:0,
        exit:1,
        treasure:0
    },
    7: {
        name:'Raum 7',
        roomnr:7,
        up: 0,
        down:8,
        left:0,
        right:1,
        exit:0,
        treasure:0
    },
    8: {
        name:'Raum 8',
        roomnr:8,
        up: 7,
        down:9,
        left:11,
        right:0,
        exit:0,
        treasure:0
    },
    9: {
        name:'Raum 9',
        roomnr:9,
        up: 8,
        down:0,
        left:10,
        right:0,
        exit:0,
        treasure:0
    },
    10: {
        name:'Raum 10',
        roomnr:10,
        up: 11,
        down:0,
        left:0,
        right:9,
        exit:0,
        treasure:0
    },
    11: {
        name:'Raum 11',
        roomnr:11,
        up: 0,
        down:10,
        left:12,
        right:8,
        exit:0,
        treasure:0
    },
    12: {
        name:'Raum 12',
        roomnr:12,
        up: 0,
        down:0,
        left:0,
        right:11,
        exit:0,
        treasure:1
    },
}
