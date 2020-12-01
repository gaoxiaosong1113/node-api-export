
    
/**
* * 变更单明细请求
* * 变更单明细请求
*/
        
export function changeList(option){
    return request.post(`/home/order/detail/changeList`, option)
}
    

    
/**
* * 删除手工单附件请求
* * 删除手工单附件请求
*/
        
export function deleteManualOrder(option){
    return request.delete(`/home/order/detail/deleteManualOrder`, option)
}
    

    
/**
* * 差异单请求
* * 差异单请求
*/
        
export function diffList(option){
    return request.post(`/home/order/detail/diffList`, option)
}
    

    
/**
* * 获取订单详情请求
* * 获取订单详情请求
*/
        
export function getDetailed(option){
    return request.get(`/home/order/detail/getDetailed`, option)
}
    

    
/**
* * 获取手工单附件请求
* * 获取手工单附件请求
*/
        
export function getManualOrderList(option){
    return request.get(`/home/order/detail/getManualOrderList`, option)
}
    

    
/**
* * 获取操作纪律请求
* * 获取操作纪律请求
*/
        
export function getRecord(option){
    return request.get(`/home/order/detail/getRecord`, option)
}
    

    
/**
* * 获取家装订单附件请求
* * 获取家装订单附件请求
*/
        
export function getResource(option){
    return request.get(`/home/order/detail/getResource`, option)
}
    

    
/**
* * 获取设计方案请求
* * 获取设计方案请求
*/
        
export function getScheme(option){
    return request.get(`/home/order/detail/getScheme`, option)
}
    

    
/**
* * 获取交付单方案附件请求
* * 获取交付单方案附件请求
*/
        
export function getSchemeResource(option){
    return request.get(`/home/order/detail/getSchemeResource`, option)
}
    

    
/**
* * 获取供应商列表请求
* * 获取供应商列表请求
*/
        
export function getSupplyList(option){
    return request.get(`/home/order/detail/getSupplyList`, option)
}
    

    
/**
* * 服务明细请求
* * 服务明细请求
*/
        
export function serviceList(option){
    return request.post(`/home/order/detail/serviceList`, option)
}
    

    
/**
* * 上传手工单请求
* * 上传手工单请求
*/
        
export function uploadManualOrder(option){
    return request.post(`/home/order/detail/uploadManualOrder`, option)
}
    

