
    
/**
* * 新增
* * 新增
*/
        
export function addDataRequest(option){
    return request.post(`/design/rule/param/addDataRequest`, option)
}
    

    
/**
* * 详情
* * 详情
*/
        
export function getDetailRequest(option){
    return request.get(`/design/rule/param/getDetailRequest`, option)
}
    

    
/**
* * 列表请求
* * 列表请求
*/
        
export function getListRequest(option){
    return request.get(`/design/rule/param/getListRequest`, option)
}
    

    
/**
* * 分页请求
* * 分页请求
*/
        
export function getPageRequest(option){
    return request.post(`/design/rule/param/getPageRequest`, option)
}
    

    
/**
* * importListToTemplate
* * 导入
*/
        
export function {templateId}(option){
    return request.post(`/design/rule/param/importListToTemplate/{templateId}`, option)
}
    

    
/**
* * syncListToTemplate
* * 差异化同步
*/
        
export function {templateId}(option){
    return request.post(`/design/rule/param/syncListToTemplate/{templateId}`, option)
}
    

    
/**
* * 编辑
* * 编辑
*/
        
export function updateDataRequest(option){
    return request.post(`/design/rule/param/updateDataRequest`, option)
}
    

