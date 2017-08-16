import {NUMADD,ADD} from './actiontype'
export function add(e){
    return {
        type:ADD,
        item:e
    }
}
export function addnum(){
    return {
        type:NUMADD
    }
}