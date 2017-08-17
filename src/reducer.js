import {combineReducers} from 'redux'
function a(state=[{id:1,title:"news1"},{id:2,title:"news2"}],action){
    switch(action.type){
        case "SHOWDATA":
        return action.data
        case "ADD":
        return [...state,action.item];//[1,2,3,4]
        default:
        return state
    }
}
let s=[{id:1,title:"pinglun"},{id:2,title:"ding"}]
function b(state=s,action){
    switch(action.type){
        default:
        return state
    }
}
export default combineReducers({
    a,
    b
})