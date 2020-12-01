
    
/**
* * 新增请求
* * 新增请求
*/
        
export function addRequest(option){
    return request.post(`/design/community/layout/addRequest`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDesignCommunityLayoutGetInfo(option){
    return request.get(`/design/community/layout/getInfo/${option.id}`, option)
}
    

    
/**
* * 列表请求
* * 列表请求
*/
        
export function getList(option){
    return request.post(`/design/community/layout/getList`, option)
}
    

    
/**
* * 分页查询
* * 分页查询
*/
        
export function getPage(option){
    return request.post(`/design/community/layout/getPage`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function updateRequest(option){
    return request.post(`/design/community/layout/updateRequest`, option)
}
    

