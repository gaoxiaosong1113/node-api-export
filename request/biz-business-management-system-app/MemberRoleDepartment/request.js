
    
/**
* * 新建请求
* * 新建请求
*/
        
export function department(option){
    return request.post(`/member/role/department`, option)
}
    

    
/**
* * 获取部门请求
* * 获取部门请求
*/
        
export function getDepartment(option){
    return request.post(`/member/role/department/getDepartment`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/member/role/department/page`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getMemberRoleDepartment(option){
    return request.get(`/member/role/department/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putMemberRoleDepartment(option){
    return request.put(`/member/role/department/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteMemberRoleDepartment(option){
    return request.delete(`/member/role/department/${option.id}`, option)
}
    

