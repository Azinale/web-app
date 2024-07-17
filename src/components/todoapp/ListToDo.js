import React from "react";
import "/home/quy/Documents/testJS/my-app/src/styles/listToDo.scss"
import AddToDo from "./AddToDo";
import DeleteToDo from "./DeleteToDo";
import { toast } from 'react-toastify';
import { some, isEmpty } from 'lodash'
import { eventWrapper } from "@testing-library/user-event/dist/utils";




class ListToDo extends React.Component{
    state = {
        ListToDo: [
            {
                id: "1", 
                work: "Play mlbb"
            },

            {
                id: "2", 
                work: "Play wuwa"
            },

            {
                id: "3", 
                work: "Play rd2"
            }
        ],
        editValue:{}
    }

    addNewToDo = (work) => {
        this.setState({
            ListToDo:[...this.state.ListToDo,work]
        })
        toast.success("Added")
    }
    deleteToDo = (work) => {
        let thisJob = this.state.ListToDo
        thisJob = thisJob.filter(item => item.id !== work.id)
        this.setState({
            ListToDo:thisJob
        })
    }
    handleCLickDelete = (work) => {
        this.deleteToDo(work)
        toast.success("deleted")
    }
    handleCLickEdit = (todo) => {

        let { editValue, ListToDo } = this.state
        
        let check = Object.keys(editValue).length === 0
        
        //use to save button 
        let todoCopy = [...ListToDo]
        if (check === false && editValue.id === todo.id) {

            let index = todoCopy.findIndex((item => item.id === todo.id))

            todoCopy[index].work = editValue.work
            console.log(index)
            this.setState({
                ListToDo: todoCopy,
                editValue: {}
            })
            toast.success("edit successful!!!!!")
            return;
        }


        //use for edit case
            this.setState({
                editValue: todo
            })
    }
    handleOnChange = (work) => {
        let editcopy = { ...this.state.editValue }
        editcopy.work = work.target.value
        this.setState({
            editValue: editcopy
        })
    }
    render() {
        let { ListToDo, editValue } = this.state;
        let check = Object.keys(editValue).length === 0
        
        return (
            <div className="list-container">
                <AddToDo addNewToDo={this.addNewToDo} />
                <div className="content">
                        {ListToDo && ListToDo.length > 0 &&
                            ListToDo.map((item, index) => {
                                return (
                                    <div className="todo-work" key={item.id}>
                                        {check === true ?
                                            <span> {index + 1}-{item.work} </span>
                                            :
                                            <>
                                                {editValue.id === item.id ?
                                                    < span > {index + 1} - <input value={editValue.work} onChange={(event)=>this.handleOnChange( event)}/></span>
                                                    :
                                                    <span> {index + 1}-{item.work} </span>
                                                }   
                                            </>
                                        }    
                                        <button className="edit" onClick={() => this.handleCLickEdit(item)}>
                                            {check === false && editValue.id === item.id ? 'Save' : 'Edit' }
                                        </button>
                                    <button className="delete" onClick={()=>this.handleCLickDelete(item)}>Delete</button>  
                                    </div>
                                )
                            })
                            
                    }
                </div>
            </div>
        )
    }
}
export default ListToDo;