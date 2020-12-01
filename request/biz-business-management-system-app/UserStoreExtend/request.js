
    
/**
* * 新建请求
* * 新建请求
*/
        
export function add(option){
    return request.post(`/user/store/extend/add`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getDetail(option){
    return request.get(`/user/store/extend/getDetail`, option)
}
    

    
/**
* * 获取图片请求
* * 获取图片请求
*/
        
export function getPic(option){
    return request.get(`/user/store/extend/getPic`, option)
}
    

    
/**
* * 添加图片请求
* * 添加图片请求
*/
        
export function insertPicList(option){
    return request.post(`/user/store/extend/insertPicList`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/user/store/extend/page`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function putUserStoreExtend(option){
    return request.put(`/user/store/extend/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteUserStoreExtend(option){
    return request.delete(`/user/store/extend/${option.id}`, option)
}
    

