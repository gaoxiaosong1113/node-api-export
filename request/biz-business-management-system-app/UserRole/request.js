
    
/**
* * 新建请求
* * 新建请求
*/
        
export function role(option){
    return request.post(`/user/role`, option)
}
    

    
/**
* * 字段树形请求
* * 字段树形请求
*/
        
export function fieldTree(option){
    return request.get(`/user/role/fieldTree`, option)
}
    

    
/**
* * 用户分配角色列表请求
* * 用户分配角色列表请求
*/
        
export function geRoletList(option){
    return request.get(`/user/role/geRoletList`, option)
}
    

    
/**
* * 校验是否已被应用
* * 校验是否已被应用
*/
        
export function getUserRoleIfUsed(option){
    return request.get(`/user/role/ifUsed/${option.id}`, option)
}
    

    
/**
* * 列表请求
* * 列表请求
*/
        
export function list(option){
    return request.get(`/user/role/list`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/user/role/page`, option)
}
    

    
/**
* * 资源树形请求
* * 资源树形请求
*/
        
export function resourceTree(option){
    return request.get(`/user/role/resourceTree`, option)
}
    

    
/**
* * 保存角色资源关系
* * 保存角色资源关系
*/
        
export function saveRoleResource(option){
    return request.post(`/user/role/saveRoleResource`, option)
}
    

    
/**
* * 保存角色字段关系
* * 保存角色字段关系
*/
        
export function saveRolesField(option){
    return request.post(`/user/role/saveRolesField`, option)
}
    

    
/**
* * 启用禁用
* * 启用禁用
*/
        
export function putUserRoleUpdateEnabled(option){
    return request.put(`/user/role/updateEnabled/${option.id}`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getUserRole(option){
    return request.get(`/user/role/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putUserRole(option){
    return request.put(`/user/role/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteUserRole(option){
    return request.delete(`/user/role/${option.id}`, option)
}
    

