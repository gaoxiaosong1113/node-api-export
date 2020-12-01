
    
/**
* * 新建请求
* * 新建请求
*/
        
export function warehouse(option){
    return request.post(`/member/warehouse`, option)
}
    

    
/**
* * 获取列表请求
* * 获取列表请求
*/
        
export function list(option){
    return request.post(`/member/warehouse/list`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/member/warehouse/page`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getMemberWarehouse(option){
    return request.get(`/member/warehouse/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putMemberWarehouse(option){
    return request.put(`/member/warehouse/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteMemberWarehouse(option){
    return request.delete(`/member/warehouse/${option.id}`, option)
}
    

