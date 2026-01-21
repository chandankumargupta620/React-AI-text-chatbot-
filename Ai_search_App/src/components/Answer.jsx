import { useEffect, useState } from "react";
import { checkheading, replaceheading } from "../Helper";

const Answer = ({ ans ,index,totalAns,type}) => {
    let [heading, setheading] = useState(false);
    let [answer,setanswer]=useState(ans)
    useEffect(() => {
        if(checkheading(ans)){
            setheading(true);
            
            
        setanswer(replaceheading(ans));
        }
        
        
    }, []);
    
    
    return (
        <>
        {index==0 && totalAns>1?<span className=" pt-2  block font-bold text-zinc-300 ">{answer}</span> :heading ?
         <span className=" pt-2  block font-bold text-zinc-300 ">{answer}</span>:<span className={type=='q'?"pl-1":"pl-5"}>{answer}</span>}
         
        </>
    );
}
export default Answer