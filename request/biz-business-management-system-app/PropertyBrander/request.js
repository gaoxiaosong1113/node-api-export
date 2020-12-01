
    
/**
* * 删除属性前请求
* * 删除属性前请求
*/
        
export function deletePropertyBranderDeleteBefore(option){
    return request.delete(`/property/brander/deleteBefore/${option.id}`, option)
}
    

    
/**
* * 删除属性值请求
* * 删除属性值请求
*/
        
export function deletePropertyBranderDeleteValue(option){
    return request.delete(`/property/brander/deleteValue/${option.id}`, option)
}
    

    
/**
* * 新建属性请求
* * 新建属性请求
*/
        
export function insert(option){
    return request.post(`/property/brander/insert`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/property/brander/page`, option)
}
    

    
/**
* * 设置属性值
* * 设置属性值
*/
        
export function setValue(option){
    return request.post(`/property/brander/setValue`, option)
}
    

    
/**
* * 删除请求
* * 删除请求
*/
        
export function deletePropertyBrander(option){
    return request.delete(`/property/brander/${option.id}`, option)
}
    

