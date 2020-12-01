
    
/**
* * 审核方案请求
* * 审核方案请求
*/
        
export function auditScheme(option){
    return request.put(`/home/order/auditScheme`, option)
}
    

    
/**
* * 取消订单请求
* * 取消订单请求
*/
        
export function cancelOrder(option){
    return request.put(`/home/order/cancelOrder`, option)
}
    

    
/**
* * 取消提交方案请求
* * 取消提交方案请求
*/
        
export function cancelSubmitScheme(option){
    return request.put(`/home/order/cancelSubmitScheme`, option)
}
    

    
/**
* * 关闭订单请求
* * 关闭订单请求
*/
        
export function closeOrder(option){
    return request.put(`/home/order/closeOrder`, option)
}
    

    
/**
* * 收取变更款金额请求
* * 收取变更款金额请求
*/
        
export function collectChangeAmount(option){
    return request.put(`/home/order/collectChangeAmount`, option)
}
    

    
/**
* * 创建订单请求
* * 创建订单请求
*/
        
export function createOrder(option){
    return request.post(`/home/order/createOrder`, option)
}
    

    
/**
* * 指派人员请求
* * 指派人员请求
*/
        
export function designatedPersons(option){
    return request.post(`/home/order/designatedPersons`, option)
}
    

    
/**
* * 修改订单请求
* * 修改订单请求
*/
        
export function editOrder(option){
    return request.put(`/home/order/editOrder`, option)
}
    

    
/**
* * 获取当前使用版本方案信息请求
* * 获取当前使用版本方案信息请求
*/
        
export function getCurrentVersionScheme(option){
    return request.get(`/home/order/getCurrentVersionScheme`, option)
}
    

    
/**
* * 获取修改订单信息请求
* * 获取修改订单信息请求
*/
        
export function getEditOrderInfo(option){
    return request.get(`/home/order/getEditOrderInfo`, option)
}
    

    
/**
* * 获取订单款信息请求
* * 获取订单款信息请求
*/
        
export function getOrderFund(option){
    return request.get(`/home/order/getOrderFund`, option)
}
    

    
/**
* * 获取方案驳回原因请求
* * 获取方案驳回原因请求
*/
        
export function getSchemeRejectionReason(option){
    return request.get(`/home/order/getSchemeRejectionReason`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/home/order/page`, option)
}
    

    
/**
* * 支付请求
* * 支付请求
*/
        
export function payment(option){
    return request.put(`/home/order/payment`, option)
}
    

    
/**
* * 选择方案请求
* * 选择方案请求
*/
        
export function selectScheme(option){
    return request.put(`/home/order/selectScheme`, option)
}
    

    
/**
* * 签合同请求
* * 签合同请求
*/
        
export function signContract(option){
    return request.put(`/home/order/signContract`, option)
}
    

    
/**
* * 提交订单请求
* * 提交订单请求
*/
        
export function submitOrder(option){
    return request.put(`/home/order/submitOrder`, option)
}
    

    
/**
* * 提交方案请求
* * 提交方案请求
*/
        
export function submitScheme(option){
    return request.put(`/home/order/submitScheme`, option)
}
    

    
/**
* * 提交测绘数据请求
* * 提交测绘数据请求
*/
        
export function submitSurveyorData(option){
    return request.put(`/home/order/submitSurveyorData`, option)
}
    

