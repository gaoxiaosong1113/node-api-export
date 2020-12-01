
    
/**
* * 新建请求
* * 新建请求
*/
        
export function org(option){
    return request.post(`/member/role/org`, option)
}
    

    
/**
* * 获取机构请求
* * 获取机构请求
*/
        
export function getOrg(option){
    return request.post(`/member/role/org/getOrg`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/member/role/org/page`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getMemberRoleOrg(option){
    return request.get(`/member/role/org/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putMemberRoleOrg(option){
    return request.put(`/member/role/org/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteMemberRoleOrg(option){
    return request.delete(`/member/role/org/${option.id}`, option)
}
    

