import Types from '../../action/types';

const defaultState = {
    popular:{

    }
}
// popular:{
//     java:{
//         items:[] 
//         isLoading: false
//     }
//     ios:{
//         items:[] 
//         isLoading: false
//     }
// }
export default function onAction(state = defaultState, action) {
    // if (action.type==Types.POPULAR_LOAD_MORE_SUCCESS){
    //    const newState = JSON.parse(JSON.stringify(state));

    //   // newState[action.storeName]
    //     // newState.theme = action.theme
    //     // return newState;
    //   }
    //   return state;
    switch (action.type){
        case Types.POPULAR_LOAD_MORE_SUCCESS:
             return {
                 ...state,
                 [action.storeName]:{
                     ...state[action.storeName],
                     items:action.items,
                     isLoading:false
                 }
             }
             case Types.POPULAR_REFRESH:
                return {
                    ...state,
                    [action.storeName]:{
                        ...state[action.storeName],
                        isLoading:true
                    }
                }
                case Types.POPULAR_REFRESH_FAIL:
                    return {
                        ...state,
                        [action.storeName]:{
                            ...state[action.storeName],
                            isLoading:false
                        }
                    }             
        default:
             return state  
    }
}