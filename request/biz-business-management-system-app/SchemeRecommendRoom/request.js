
    
/**
* * 新建请求
* * 新建请求
*/
        
export function room(option){
    return request.post(`/scheme/recommend/room`, option)
}
    

    
/**
* * 下移请求
* * 下移请求
*/
        
export function down(option){
    return request.put(`/scheme/recommend/room/down`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function list(option){
    return request.post(`/scheme/recommend/room/list`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getSchemeRecommendRoom(option){
    return request.get(`/scheme/recommend/room/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putSchemeRecommendRoom(option){
    return request.put(`/scheme/recommend/room/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteSchemeRecommendRoom(option){
    return request.delete(`/scheme/recommend/room/${option.id}`, option)
}
    

