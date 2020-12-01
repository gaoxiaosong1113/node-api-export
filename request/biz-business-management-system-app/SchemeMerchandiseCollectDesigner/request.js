
    
/**
* * 当前品牌商下所有经销商门店用户
* * 当前品牌商下所有经销商门店用户
*/
        
export function getDeisgnerList(option){
    return request.get(`/scheme/merchandise/collect/designer/getDeisgnerList`, option)
}
    

    
/**
* * 分页请求
* * 分页请求
*/
        
export function getPage(option){
    return request.post(`/scheme/merchandise/collect/designer/getPage`, option)
}
    

    
/**
* * 新增商品收藏请求
* * 新增商品收藏请求
*/
        
export function insert(option){
    return request.post(`/scheme/merchandise/collect/designer/insert`, option)
}
    

    
/**
* * 修改商品收藏请求
* * 修改商品收藏请求
*/
        
export function update(option){
    return request.post(`/scheme/merchandise/collect/designer/update`, option)
}
    

