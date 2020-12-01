
    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDesignTemplateLayoutGetInfo(option){
    return request.get(`/design/template/layout/getInfo/${option.id}`, option)
}
    

    
/**
* * 查询list请求
* * 查询list请求
*/
        
export function getList(option){
    return request.post(`/design/template/layout/getList`, option)
}
    

    
/**
* * 查询分页请求
* * 查询分页请求
*/
        
export function getPage(option){
    return request.post(`/design/template/layout/getPage`, option)
}
    

    
/**
* * 新增请求
* * 新增请求
*/
        
export function insertInfo(option){
    return request.post(`/design/template/layout/insertInfo`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function updateInfo(option){
    return request.put(`/design/template/layout/updateInfo`, option)
}
    

