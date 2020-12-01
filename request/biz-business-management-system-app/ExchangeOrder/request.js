
    
/**
* * 新家装第一次审核通过请求
* * 新家装第一次审核通过请求
*/
        
export function branderFirstApproved(option){
    return request.put(`/exchange/order/branderFirstApproved`, option)
}
    

    
/**
* * 新家装第一次审核驳回请求
* * 新家装第一次审核驳回请求
*/
        
export function branderFirstReject(option){
    return request.put(`/exchange/order/branderFirstReject`, option)
}
    

    
/**
* * 新家装再次提交请求
* * 新家装再次提交请求
*/
        
export function branderResubmitReject(option){
    return request.put(`/exchange/order/branderResubmitReject`, option)
}
    

    
/**
* * 新家装第二次审核通过请求
* * 新家装第二次审核通过请求
*/
        
export function branderSecondApproved(option){
    return request.put(`/exchange/order/branderSecondApproved`, option)
}
    

    
/**
* * 新家装第二次审核驳回请求
* * 新家装第二次审核驳回请求
*/
        
export function branderSecondReject(option){
    return request.put(`/exchange/order/branderSecondReject`, option)
}
    

    
/**
* * 新家装第三次审核驳回请求
* * 新家装第三次审核驳回请求
*/
        
export function branderThirdReject(option){
    return request.put(`/exchange/order/branderThirdReject`, option)
}
    

    
/**
* * 确认付款请求
* * 确认付款请求
*/
        
export function confirmPayment(option){
    return request.put(`/exchange/order/confirmPayment`, option)
}
    

    
/**
* * 经销商审核通过请求
* * 经销商审核通过请求
*/
        
export function distributorApproved(option){
    return request.put(`/exchange/order/distributorApproved`, option)
}
    

    
/**
* * 经销商关闭订单请求
* * 经销商关闭订单请求
*/
        
export function distributorClose(option){
    return request.put(`/exchange/order/distributorClose`, option)
}
    

    
/**
* * 经销商驳回请求
* * 经销商驳回请求
*/
        
export function distributorReject(option){
    return request.put(`/exchange/order/distributorReject`, option)
}
    

    
/**
* * 经销商重新提交请求
* * 经销商重新提交请求
*/
        
export function distributorResubmit(option){
    return request.put(`/exchange/order/distributorResubmit`, option)
}
    

    
/**
* * 经销商订单审核被驳回重新提交请求
* * 经销商订单审核被驳回重新提交请求
*/
        
export function distributorSecondResubmit(option){
    return request.put(`/exchange/order/distributorSecondResubmit`, option)
}
    

    
/**
* * 获取订单详情请求
* * 获取订单详情请求
*/
        
export function getDetailed(option){
    return request.get(`/exchange/order/getDetailed`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/exchange/order/page`, option)
}
    

    
/**
* * 确认签收请求
* * 确认签收请求
*/
        
export function sign(option){
    return request.put(`/exchange/order/sign`, option)
}
    

    
/**
* * 提交订单请求
* * 提交订单请求
*/
        
export function submitOrder(option){
    return request.put(`/exchange/order/submitOrder`, option)
}
    

