
    
/**
* * 关闭项目请求
* * 关闭项目请求
*/
        
export function close(option){
    return request.put(`/deliver/order/close`, option)
}
    

    
/**
* * 确认完工请求
* * 确认完工请求
*/
        
export function complete(option){
    return request.put(`/deliver/order/complete`, option)
}
    

    
/**
* * 获取订单详情请求
* * 获取订单详情请求
*/
        
export function getDetailed(option){
    return request.get(`/deliver/order/getDetailed`, option)
}
    

    
/**
* * 获取交付单问题反馈请求
* * 获取交付单问题反馈请求
*/
        
export function getFeedback(option){
    return request.get(`/deliver/order/getFeedback`, option)
}
    

    
/**
* * 获取交付单交付日志请求
* * 获取交付单交付日志请求
*/
        
export function getLog(option){
    return request.get(`/deliver/order/getLog`, option)
}
    

    
/**
* * 获取材料信息请求
* * 获取材料信息请求
*/
        
export function getMaterial(option){
    return request.get(`/deliver/order/getMaterial`, option)
}
    

    
/**
* * 获取交付单调整记录请求
* * 获取交付单调整记录请求
*/
        
export function getOperation(option){
    return request.get(`/deliver/order/getOperation`, option)
}
    

    
/**
* * 获取交付单方案附件请求
* * 获取交付单方案附件请求
*/
        
export function getSchemeResource(option){
    return request.get(`/deliver/order/getSchemeResource`, option)
}
    

    
/**
* * 获取交付单工人请求
* * 获取交付单工人请求
*/
        
export function getWorker(option){
    return request.get(`/deliver/order/getWorker`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/deliver/order/page`, option)
}
    

    
/**
* * 复工请求
* * 复工请求
*/
        
export function returnToWork(option){
    return request.put(`/deliver/order/returnToWork`, option)
}
    

    
/**
* * 停工请求
* * 停工请求
*/
        
export function stoppage(option){
    return request.put(`/deliver/order/stoppage`, option)
}
    

    
/**
* * 未派工原因请求
* * 未派工原因请求
*/
        
export function wpgyyList(option){
    return request.post(`/deliver/order/wpgyyList`, option)
}
    

    
/**
* * 异常原因请求
* * 异常原因请求
*/
        
export function ycyyList(option){
    return request.post(`/deliver/order/ycyyList`, option)
}
    

