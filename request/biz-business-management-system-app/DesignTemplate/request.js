
    
/**
* * 品牌商复制模版数据
* * 品牌商复制模版数据
*/
        
export function copyPpsData(option){
    return request.post(`/design/template/copyPpsData`, option)
}
    

    
/**
* * 删除方案模板请求
* * 删除方案模板请求
*/
        
export function deleteDesignTemplateDeleteTemplate(option){
    return request.delete(`/design/template/deleteTemplate/${option.id}`, option)
}
    

    
/**
* * getSyncAdminList列表
* * list列表
*/
        
export function getSyncAdminList(option){
    return request.post(`/design/template/getSyncAdminList`, option)
}
    

    
/**
* * 获取方案模板详情请求
* * 获取方案模板详情请求
*/
        
export function getDesignTemplateGetTemplate(option){
    return request.get(`/design/template/getTemplate/${option.id}`, option)
}
    

    
/**
* * 查询获取方案模板分页请求
* * 查询获取方案模板分页请求
*/
        
export function getTemplatePage(option){
    return request.post(`/design/template/getTemplatePage`, option)
}
    

    
/**
* * 模板新增关联商品请求
* * 模板新增关联商品请求
*/
        
export function insertRelMerchanandise(option){
    return request.post(`/design/template/insertRelMerchanandise`, option)
}
    

    
/**
* * 新增方案模板请求
* * 新增方案模板请求
*/
        
export function insertTemplate(option){
    return request.post(`/design/template/insertTemplate`, option)
}
    

    
/**
* * list列表
* * list列表
*/
        
export function listRequest(option){
    return request.post(`/design/template/listRequest`, option)
}
    

    
/**
* * 同步
* * 同步
*/
        
export function syncRequest(option){
    return request.post(`/design/template/syncRequest`, option)
}
    

    
/**
* * 删除/设置默认关联商品请求 
* * 删除/设置默认关联商品请求 
*/
        
export function updateRelMerchandise(option){
    return request.put(`/design/template/updateRelMerchandise`, option)
}
    

    
/**
* * 更新模板状态请求
* * 更新模板状态请求
*/
        
export function putDesignTemplateUpdateStatus(option){
    return request.put(`/design/template/updateStatus/${option.id}`, option)
}
    

    
/**
* * 更新设计模板请求
* * 更新设计模板请求
*/
        
export function updateTemplate(option){
    return request.put(`/design/template/updateTemplate`, option)
}
    

