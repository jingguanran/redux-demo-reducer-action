import React from 'react';
import {connect} from 'react-redux'
import * as action from './action'

class Commit extends React.Component{
    submit(){
        this.props.add(this.refs.inputValue.value)
    }
    render(){
        return <div>
            <input ref="inputValue" type="text"/>
            <button onClick={this.submit.bind(this)}>+</button>
        </div>
    }
}
let jgr=(e)=>{
    return {
        data:e
    }
}

export default connect(jgr,action)(Commit)