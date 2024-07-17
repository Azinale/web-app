import React from 'react';


class AddComponent extends React.Component{

    state={
        des:'',
        salary:''
    }

    handleOnChangeJobDes = (event) => {
        this.setState({
            des: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnSubmit =  (event) =>{
        event.preventDefault();
        if(!this.state.des || !this.state.salary){
            alert("Enter somthing pls...")
            return;
        }
        alert("saved");
        console.log(">>> input of submit: ", this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random()*1000),
            des: this.state.des,
            salary: this.state.salary
        })
        // this.props.addNewJob('hello')
        this.setState({
            des: '',
            salary: '',
        })
        
    }
render(){
    return(
        <>
            <form>
            <label htmlFor="fname"> job des:</label><br/>
            <input type="text" onChange={(event)=> this.handleOnChangeJobDes(event)} value={this.state.des}/><br/>
            <label htmlFor="lname">salary:</label><br/>
            <input type="text" onChange={(event)=> this.handleOnChangeSalary(event)} value={this.state.salary}/><br/><br/>
            <input type="submit" value="Submit" onClick={(event)=>this.handleOnSubmit(event)}/>
            </form>
        </>
            
    )
}


}

export default AddComponent;