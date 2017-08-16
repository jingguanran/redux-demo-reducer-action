import React from 'react'
import * as action from './a'
import {connect} from 'react-redux'

class List extends React.Component{
    abc(){
        this.props.add(this.refs.inpu.value)
        
    }
    render(){
        return <div>
            <input ref="inpu" type="text"/>
            <button onClick={this.abc.bind(this)}>+</button>
        </div>
    }
}
var jgr=(e)=>{
    return {data:e.a}
}
export default connect(jgr,action)(List)