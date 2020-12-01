
    
/**
* * 新建请求
* * 新建请求
*/
        
export function add(option){
    return request.post(`/user/department/add`, option)
}
    

    
/**
* * 请求树形结构
* * 请求树形结构
*/
        
export function getTree(option){
    return request.post(`/user/department/getTree`, option)
}
    

    
/**
* * 根据部门ID获取部门下用户请求
* * 根据部门ID获取部门下用户请求
*/
        
export function getUser(option){
    return request.post(`/user/department/getUser`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/user/department/page`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getUserDepartment(option){
    return request.get(`/user/department/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putUserDepartment(option){
    return request.put(`/user/department/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteUserDepartment(option){
    return request.delete(`/user/department/${option.id}`, option)
}
    

