
    
/**
* * 新建请求
* * 新建请求
*/
        
export function add(option){
    return request.post(`/active/topic/add`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/active/topic/page`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getActiveTopic(option){
    return request.get(`/active/topic/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putActiveTopic(option){
    return request.put(`/active/topic/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteActiveTopic(option){
    return request.delete(`/active/topic/${option.id}`, option)
}
    

