
    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDetail(option){
    return request.get(`/merchandise/sku/dealer/getDetail`, option)
}
    

    
/**
* * 更新请求(标签管理)
* * 更新请求(标签管理)
*/
        
export function updateFourth(option){
    return request.put(`/merchandise/sku/dealer/updateFourth`, option)
}
    

    
/**
* * 更新table3请求（供应信息）
* * 更新table3请求（供应信息）
*/
        
export function updateThird(option){
    return request.put(`/merchandise/sku/dealer/updateThird`, option)
}
    

