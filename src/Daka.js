import React from 'react'
import {connect} from 'react-redux'
import * as action from './a'
class Daka extends React.Component{
    render(){
        return <div>
            {this.props.data}
            <button onClick={this.props.addnum}>+</button>
        </div>
    }
}
var jgr=(e)=>{
    return {
        data:e.b
    }
}
export default connect(jgr,action)(Daka)