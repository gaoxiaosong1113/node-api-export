
    
/**
* * 同步操作
* * 同步操作
*/
        
export function fetchAdminData(option){
    return request.post(`/scheme/merchandise/collect/brander/fetchAdminData`, option)
}
    

    
/**
* * 平台数据分页请求
* * 平台数据分页请求
*/
        
export function getAdminList(option){
    return request.post(`/scheme/merchandise/collect/brander/getAdminList`, option)
}
    

    
/**
* * 平台数据分页请求
* * 平台数据分页请求
*/
        
export function getAdminPage(option){
    return request.post(`/scheme/merchandise/collect/brander/getAdminPage`, option)
}
    

    
/**
* * 分页请求
* * 分页请求
*/
        
export function getPage(option){
    return request.post(`/scheme/merchandise/collect/brander/getPage`, option)
}
    

    
/**
* * 新增商品收藏请求
* * 新增商品收藏请求
*/
        
export function insert(option){
    return request.post(`/scheme/merchandise/collect/brander/insert`, option)
}
    

    
/**
* * 修改商品收藏请求
* * 修改商品收藏请求
*/
        
export function update(option){
    return request.post(`/scheme/merchandise/collect/brander/update`, option)
}
    

