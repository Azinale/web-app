import React from "react";
import MyHelloChild from "./MyHelloChild";
// import FunctionHello from "./FunctionHello";
import AddComponent from "./Addcomponent";
class MyForm extends React.Component{
    state ={
        
        arrjob: [
            {id: "job1",
            des: "dev", 
            salary: "100000",
            },
            
            {id: "job2",
                des: "ops", 
                salary: "30000",
            },

            {id: "job3",
                des: "tool", 
                salary: "1000",
            }
        ]
    }
     
    addNewJob = (job) =>{
        console.log(">>>> check: ", job)
        this.setState({
            arrjob: [...this.state.arrjob, job]
        })
    }

    deleteJob = (job) =>{
        console.log(">>>> check: ",job)
        let currentJob = this.state.arrjob;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrjob: currentJob
        })
    }

    render(){
        return(
            <>
            {/* truyen cho thang con ham addnewjob */}
            <AddComponent addNewJob = {this.addNewJob}
                deleteJob = {this.deleteJob}
            />
            <MyHelloChild
                arrjob  = {this.state.arrjob}
                deleteJob = {this.deleteJob}
            />
            </>
            
        )
     }
    
}

export default MyForm;