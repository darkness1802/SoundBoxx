import { atom } from "recoil"


export var currentPlaying = atom({
    key: 'currentPlaying',
    default: {}
})

export var queue = atom({
    key: 'queue',
    default: []
})