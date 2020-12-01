
    
/**
* * getCash
* * 
*/
        
export function getCash(option){
    return request.post(`/pays/getCash`, option)
}
    

    
/**
* * payCallBack
* * 
*/
        
export function payCallBack(option){
    return request.post(`/pays/payCallBack`, option)
}
    

