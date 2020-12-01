
    
/**
* * 新增请求
* * 新增请求
*/
        
export function addRequest(option){
    return request.post(`/design/community/addRequest`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDesignCommunityGetInfo(option){
    return request.get(`/design/community/getInfo/${option.id}`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getInfoByCode(option){
    return request.get(`/design/community/getInfoByCode`, option)
}
    

    
/**
* * 问题列表请求
* * 问题列表请求
*/
        
export function getList(option){
    return request.post(`/design/community/getList`, option)
}
    

    
/**
* * 分页查询
* * 分页查询
*/
        
export function getPage(option){
    return request.post(`/design/community/getPage`, option)
}
    

    
/**
* * 品牌商/经销商门店列表请求
* * 品牌商/经销商门店列表请求
*/
        
export function getStoreList(option){
    return request.get(`/design/community/getStoreList`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function updateRequest(option){
    return request.post(`/design/community/updateRequest`, option)
}
    

