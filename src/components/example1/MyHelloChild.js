/* eslint-disable array-callback-return */
import React from "react";
// import '../styles/button.scss'
class MyHelloChild extends React.Component{
    // state={
    //     name:"QUY",
    //     company: ""
    //     //state cap nhat realtime
    // }

    state ={
        showJobs: false
    } 

    handleOnChangeCompany = (event) => {
        this.setState({
            company: event.target.value
        })
    }

    handleClickEvent = () =>{
        alert("just gimme your monney")
    }


    handleShowEvent=()=>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleClickDelete=(job)=>{
        console.log(job)
        alert("deleted");
        this.props.deleteJob(job)
    }
 render(){
    let { arrjob} = this.props;
    let {showJobs} = this.state;
    let check = showJobs === true ? 'show = true' : 'show = false';
    console.log(check);
    return(
        <>
        {showJobs === false ? 
            <div>
                <button className="button" onClick={()=>this.handleShowEvent()}>show</button>
            </div>
        :
            <>
                {/* <div className="first">
                    ayeeee yo, {firstName} - {age} - {address} 
                </div> */}
                
                <div className="jobList">
                {
                    arrjob.map((item,index)=>{
                        if(item.salary>5000){
                        return(
                            <div key={item.id}>
                                { item.des} - {item.salary} <> </> <span onClick={()=>this.handleClickDelete(item)}>x</span>
                            </div>
                        )
                        }
                    })
                }

                </div>
                <div><button className="button" onClick={()=>this.handleShowEvent()}>hide</button></div>
            </>
        }
        </>
        
    )
 }
}

export default MyHelloChild;