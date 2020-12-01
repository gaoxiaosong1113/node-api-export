
    
/**
* * 批量删除请求
* * 批量删除请求
*/
        
export function batchDelete(option){
    return request.delete(`/merchandise/sku/batchDelete`, option)
}
    

    
/**
* * 批量下架请求
* * 批量下架请求
*/
        
export function batchDowner(option){
    return request.put(`/merchandise/sku/batchDowner`, option)
}
    

    
/**
* * 批量发布请求
* * 批量发布请求
*/
        
export function batchPublish(option){
    return request.put(`/merchandise/sku/batchPublish`, option)
}
    

    
/**
* * 批量上架请求
* * 批量上架请求
*/
        
export function batchUpper(option){
    return request.put(`/merchandise/sku/batchUpper`, option)
}
    

    
/**
* * 取消发布请求
* * 取消发布请求
*/
        
export function cancelPublish(option){
    return request.put(`/merchandise/sku/cancelPublish`, option)
}
    

    
/**
* * 停售请求
* * 停售请求
*/
        
export function disableSaleUpdate(option){
    return request.put(`/merchandise/sku/disableSaleUpdate`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDetail(option){
    return request.get(`/merchandise/sku/getDetail`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/merchandise/sku/page`, option)
}
    

    
/**
* * 启售请求
* * 启售请求
*/
        
export function saleEnableUpdate(option){
    return request.put(`/merchandise/sku/saleEnableUpdate`, option)
}
    

    
/**
* * 更新请求(标签管理)
* * 更新请求(标签管理)
*/
        
export function updateFourth(option){
    return request.put(`/merchandise/sku/updateFourth`, option)
}
    

    
/**
* * 更新table2页面请求
* * 更新table2页面请求
*/
        
export function updateSecond(option){
    return request.put(`/merchandise/sku/updateSecond`, option)
}
    

    
/**
* * 更新table3请求（供应信息）
* * 更新table3请求（供应信息）
*/
        
export function updateThird(option){
    return request.put(`/merchandise/sku/updateThird`, option)
}
    

