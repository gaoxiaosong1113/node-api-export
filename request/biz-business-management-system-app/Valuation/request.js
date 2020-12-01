
    
/**
* * 模板启用/禁用 
* * 模板启用/禁用 
*/
        
export function putValuationEnable(option){
    return request.put(`/valuation/enable/${option.id}`, option)
}
    

    
/**
* * 获取计价类型列表请求
* * 获取计价类型列表请求
*/
        
export function getValuationList(option){
    return request.get(`/valuation/getValuationList`, option)
}
    

    
/**
* * 获取计价模板列表请求
* * 获取计价模板列表请求
*/
        
export function getValuationTemplateList(option){
    return request.get(`/valuation/getValuationTemplateList`, option)
}
    

    
/**
* * 创建请求
* * 创建请求
*/
        
export function insert(option){
    return request.post(`/valuation/insert`, option)
}
    

    
/**
* * 分页请求
* * 分页请求
*/
        
export function page(option){
    return request.post(`/valuation/page`, option)
}
    

    
/**
* * 模板详情请求
* * 模板详情请求
*/
        
export function getValuationTemplateDetail(option){
    return request.get(`/valuation/template/detail/${option.id}`, option)
}
    

    
/**
* * 模板创建请求
* * 模板创建请求
*/
        
export function insert(option){
    return request.post(`/valuation/template/insert`, option)
}
    

    
/**
* * 模板分页请求
* * 模板分页请求
*/
        
export function page(option){
    return request.post(`/valuation/template/page`, option)
}
    

    
/**
* * 模板编辑请求
* * 模板编辑请求
*/
        
export function putValuationTemplateUpdate(option){
    return request.put(`/valuation/template/update/${option.id}`, option)
}
    

    
/**
* * 模板删除请求
* * 模板删除请求
*/
        
export function deleteValuationTemplate(option){
    return request.delete(`/valuation/template/${option.id}`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function putValuation(option){
    return request.put(`/valuation/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteValuation(option){
    return request.delete(`/valuation/${option.id}`, option)
}
    

