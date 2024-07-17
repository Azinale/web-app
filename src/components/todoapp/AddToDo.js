import React from "react";
import {  toast } from 'react-toastify';

class AddToDo extends React.Component{
    state = {
        work:''
    }
    handleAddEvent = (event) => {
        this.setState({
            work: event.target.value
        })
    }
    handeClickAdd = () => {
        if (!this.state.work) {
            toast.error("Nothing to add")
            return;
        }
        this.props.addNewToDo({
            id: Math.floor(Math.random() * 1000),
            work: this.state.work
        })

        this.setState({
            work: ""
        })
    }
    render() {
        return (
            <div className="add">
                <input type="text" onChange={(even)=>this.handleAddEvent(even)}/>
                <button type="button" className="add-button" onClick={(event) => this.handeClickAdd(event)}>
                    Add
                </button>
            </div>
        )
    }


}
export default AddToDo;