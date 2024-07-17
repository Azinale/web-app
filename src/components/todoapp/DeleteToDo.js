import React from "react";

class DeleteToDo extends React.Component{

    render() {
        let { List } = this.props
        return (
            
            <button className="delete" onClick={()=>this.handleCLickDelete(List.props)}>Delete</button>
        )
    }
}
export default DeleteToDo;