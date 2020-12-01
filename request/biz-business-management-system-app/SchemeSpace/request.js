
    
/**
* * 新增
* * 新增
*/
        
export function addSpace(option){
    return request.post(`/scheme/space/addSpace`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function putSchemeSpaceUpdate(option){
    return request.put(`/scheme/space/update/${option.id}`, option)
}
    

