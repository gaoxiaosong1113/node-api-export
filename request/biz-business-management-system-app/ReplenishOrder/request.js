
    
/**
* * 新家装审核通过请求
* * 新家装审核通过请求
*/
        
export function branderApproved(option){
    return request.put(`/replenish/order/branderApproved`, option)
}
    

    
/**
* * 新家装审核驳回请求
* * 新家装审核驳回请求
*/
        
export function branderReject(option){
    return request.put(`/replenish/order/branderReject`, option)
}
    

    
/**
* * 新家装提交订单请求
* * 新家装提交订单请求
*/
        
export function branderSubmitOrder(option){
    return request.put(`/replenish/order/branderSubmitOrder`, option)
}
    

    
/**
* * 确认付款请求
* * 确认付款请求
*/
        
export function confirmPayment(option){
    return request.put(`/replenish/order/confirmPayment`, option)
}
    

    
/**
* * 确认收款请求
* * 确认收款请求
*/
        
export function confirmReceipt(option){
    return request.put(`/replenish/order/confirmReceipt`, option)
}
    

    
/**
* * 经销商审核通过请求
* * 经销商审核通过请求
*/
        
export function distributorApproved(option){
    return request.put(`/replenish/order/distributorApproved`, option)
}
    

    
/**
* * 经销商关闭订单请求
* * 经销商关闭订单请求
*/
        
export function distributorClose(option){
    return request.put(`/replenish/order/distributorClose`, option)
}
    

    
/**
* * 经销商驳回请求
* * 经销商驳回请求
*/
        
export function distributorReject(option){
    return request.put(`/replenish/order/distributorReject`, option)
}
    

    
/**
* * 获取订单详情请求
* * 获取订单详情请求
*/
        
export function getDetailed(option){
    return request.post(`/replenish/order/getDetailed`, option)
}
    

    
/**
* * 获取所有家装单请求
* * 获取所有家装单请求
*/
        
export function homeOrderList(option){
    return request.post(`/replenish/order/homeOrderList`, option)
}
    

    
/**
* * 新建经销商变更单请求
* * 新建经销商变更单请求
*/
        
export function insert(option){
    return request.post(`/replenish/order/insert`, option)
}
    

    
/**
* * 材料列表请求
* * 材料列表请求
*/
        
export function itemPage(option){
    return request.post(`/replenish/order/itemPage`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/replenish/order/page`, option)
}
    

    
/**
* * 报价请求
* * 报价请求
*/
        
export function quote(option){
    return request.put(`/replenish/order/quote`, option)
}
    

    
/**
* * 重新报价请求
* * 重新报价请求
*/
        
export function requote(option){
    return request.put(`/replenish/order/requote`, option)
}
    

    
/**
* * 重新提交请求
* * 重新提交请求
*/
        
export function resubmit(option){
    return request.put(`/replenish/order/resubmit`, option)
}
    

    
/**
* * 确认签收请求
* * 确认签收请求
*/
        
export function sign(option){
    return request.put(`/replenish/order/sign`, option)
}
    

    
/**
* * 提交订单请求
* * 提交订单请求
*/
        
export function submitOrder(option){
    return request.put(`/replenish/order/submitOrder`, option)
}
    

    
/**
* * 转换材料列表请求
* * 转换材料列表请求
*/
        
export function transformationItem(option){
    return request.post(`/replenish/order/transformationItem`, option)
}
    

    
/**
* * 修改经销商变更单请求
* * 修改经销商变更单请求
*/
        
export function update(option){
    return request.put(`/replenish/order/update`, option)
}
    

