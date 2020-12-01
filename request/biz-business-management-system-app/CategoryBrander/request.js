
    
/**
* * 第三方绑定类目请求
* * 第三方绑定类目请求
*/
        
export function putCategoryBranderBindingCaty(option){
    return request.put(`/category/brander/bindingCaty/${option.id}`, option)
}
    

    
/**
* * 获取绑定类目列表请求
* * 获取绑定类目列表请求
*/
        
export function bindingCatyList(option){
    return request.get(`/category/brander/bindingCatyList`, option)
}
    

    
/**
* * 商品类目树请求
* * 商品类目树请求
*/
        
export function getTree(option){
    return request.get(`/category/brander/getTree`, option)
}
    

    
/**
* * 商品类目新建请求
* * 商品类目新建请求
*/
        
export function insert(option){
    return request.post(`/category/brander/insert`, option)
}
    

    
/**
* * 类目编辑
* * 类目编辑
*/
        
export function update(option){
    return request.put(`/category/brander/update`, option)
}
    

    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteCategoryBrander(option){
    return request.delete(`/category/brander/${option.id}`, option)
}
    

