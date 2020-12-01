
    
/**
* * 审核通过订单请求
* * 审核通过订单请求
*/
        
export function approval(option){
    return request.put(`/standard/order/approval`, option)
}
    

    
/**
* * 确认收款请求
* * 确认收款请求
*/
        
export function receivables(option){
    return request.put(`/standard/order/receivables`, option)
}
    

    
/**
* * 驳回订单请求
* * 驳回订单请求
*/
        
export function reject(option){
    return request.put(`/standard/order/reject`, option)
}
    

