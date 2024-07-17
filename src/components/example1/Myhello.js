import React from "react";

class Myhello extends React.Component{
    state={
        name:"QUY",
        company: ""
        //state cap nhat realtime
    }

    handleOnChangeCompany = (event) => {
        this.setState({
            company: event.target.value
        })
    }

    handleClickEvent = () =>{
        alert("just gimme your monney")
    }
 render(){
    let name = "QUY";
    return(
        <>
        <div className="first">
        ayeeee yo, {name}
         </div>
    
         <div className="second">
         <input value={this.state.company} type="text" onChange={(event)=> this.handleOnChangeCompany(event)}/>
            hehe, {this.state.company}
         </div>
         <div className="third">
            <button onClick={()=> this.handleClickEvent()}>show image</button>
         </div>
        </>
        
    )
 }
}

export default Myhello;