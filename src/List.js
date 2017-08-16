import React from 'react'
import * as action from './a'
import {connect} from 'react-redux'

class List extends React.Component{
    del(e){
        this.props.des(e)
    }
    render(){
        return <div>
            {this.props.data.map(e=><div>{e}<button onClick={this.del.bind(this,e)}>x</button></div>)}
        </div>
    }
}
var jgr=(e)=>{
    return {data:e.a}
}
export default connect(jgr,action)(List)