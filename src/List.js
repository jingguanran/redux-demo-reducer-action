import React from 'react';
import {connect} from 'react-redux'
import * as action from './action'
class List extends React.Component{
    componentDidMount(){
        this.props.post()
    }
    render(){
        return <div>
            {this.props.data.map(function(e){
                    return <div>{e.title}</div>
            })}
        </div>
    }
}
let jgr=(e)=>{
    return {
        data:e.a
    }
}

export default connect(jgr,action)(List)