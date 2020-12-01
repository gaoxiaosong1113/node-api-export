
    
/**
* * 列表请求
* * 列表请求
*/
        
export function getListRequest(option){
    return request.post(`/design/refinement/rule/getListRequest`, option)
}
    

    
/**
* * 获取组件分页请求
* * 获取组件分页请求
*/
        
export function getPage(option){
    return request.post(`/design/refinement/rule/getPage`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getDesignRefinementRuleGetRule(option){
    return request.get(`/design/refinement/rule/getRule/${option.id}`, option)
}
    

    
/**
* * 空间列表请求
* * 空间列表请求
*/
        
export function getSpaceListRequest(option){
    return request.post(`/design/refinement/rule/getSpaceListRequest`, option)
}
    

    
/**
* * importListToTemplate
* * 导入
*/
        
export function {templateId}(option){
    return request.post(`/design/refinement/rule/importListToTemplate/{templateId}`, option)
}
    

    
/**
* * 新增组件请求
* * 新增组件请求
*/
        
export function insertRule(option){
    return request.post(`/design/refinement/rule/insertRule`, option)
}
    

    
/**
* * 更新组件请求
* * 更新组件请求
*/
        
export function putDesignRefinementRuleUpdateRule(option){
    return request.put(`/design/refinement/rule/updateRule/${option.id}`, option)
}
    

