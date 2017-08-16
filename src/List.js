import React from 'react'
import * as action from './a'
import {connect} from 'react-redux'

class List extends React.Component{
    render(){
        return <div>
            {this.props.data.map(e=><div>{e}</div>)}
        </div>
    }
}
var jgr=(e)=>{
    return {data:e.a}
}
export default connect(jgr,action)(List)