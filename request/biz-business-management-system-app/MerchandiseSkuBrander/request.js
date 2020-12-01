
    
/**
* * 批量删除请求
* * 批量删除请求
*/
        
export function batchDelete(option){
    return request.delete(`/merchandise/sku/brander/batchDelete`, option)
}
    

    
/**
* * 批量下架请求
* * 批量下架请求
*/
        
export function batchDowner(option){
    return request.put(`/merchandise/sku/brander/batchDowner`, option)
}
    

    
/**
* * 批量上架请求
* * 批量上架请求
*/
        
export function batchUpper(option){
    return request.put(`/merchandise/sku/brander/batchUpper`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDetail(option){
    return request.get(`/merchandise/sku/brander/getDetail`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/merchandise/sku/brander/page`, option)
}
    

    
/**
* * 更新请求(标签管理)
* * 更新请求(标签管理)
*/
        
export function updateFourth(option){
    return request.put(`/merchandise/sku/brander/updateFourth`, option)
}
    

    
/**
* * 更新table2页面请求
* * 更新table2页面请求
*/
        
export function updateSecond(option){
    return request.put(`/merchandise/sku/brander/updateSecond`, option)
}
    

    
/**
* * 更新table3请求（供应信息：1-供应链；2-品牌商。根据类型不同编辑字段不同）
* * 更新table3请求（供应信息：1-供应链；2-品牌商。根据类型不同编辑字段不同）
*/
        
export function updateThird(option){
    return request.put(`/merchandise/sku/brander/updateThird`, option)
}
    

