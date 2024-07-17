import { act } from "react";
import { toast } from "react-toastify";

const initState = {
    user: [
        {
            id: 1,
            name:"quy"
        },
        {
            id: 2,
            name:"yoooo"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'DELETE_USER':
            try {
                let user = state.user
                user = user.filter(item => item.id !== action.payload.id)
                toast.success("DELETED")
                return {
                    ...state, user
                }
            } catch (error) {
                toast.error("NOTHING HERE")
            }
            break
        case 'ADD':
            try {
                let id = Math.floor(Math.random() * 100)
                let users = {
                    id: id,
                    name: `user-${id}`
                }
                return {
                    ...state,user: [...state.user, users]
                }

            } catch (error) {
                toast.error("SOMTHING WRONG")
            }
            return state;
            break
        default:
            return state;
    }


    
}
export default rootReducer;