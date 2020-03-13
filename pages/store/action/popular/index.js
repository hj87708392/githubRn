import Types from '../types'
import DataStore from '../../../req/DataStore'

export function onLoadPopularData(storeName,url){
    return dispatch => {
        dispatch({type:Types.POPULAR_REFRESH,storeName:storeName})
        let dataStore = new DataStore();
       dataStore.fetchData(url)
            .then(data=>{
                dispatch({
                    type:Types.POPULAR_LOAD_MORE_SUCCESS,
                    items:data && data.data && data.data.items,
                    storeName,
                })
            })
            .catch(error => {
                console.log(console.error);
                dispatch({type:Types.POPULAR_LOAD_MORE_FAIL,storeName,error})    
            });
           
    }
}
