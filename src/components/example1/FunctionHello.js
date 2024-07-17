/* eslint-disable array-callback-return */
import React from "react";



const FunctionHello = (props) =>{
    let {firstName, age, address, arrjob} = props;
    return(
        <>
        <div className="first">
        ayeeee yo, {firstName} - {age} - {address} 
         </div>
         <div className="jobList">
         {
            arrjob.map((item,index)=>{
                if(item.salary>500){
                return(
                    {age},
                    <div key={item.id}>
                        { item.des} - {item.salary} <> </> <span>x</span>
                    </div>
                )
                }
            })
         }

         </div>
        </>
        
    )
}

export default FunctionHello;