import {http} from "./config";

export default{
    all:(value)=>{
        return http.get(value)
    },
    
}
