
    
/**
* * 删除请求
* * 删除请求
*/
        
export function delete(option){
    return request.delete(`/merchandise/delete`, option)
}
    

    
/**
* * 请求获取商品属性
* * 请求获取商品属性
*/
        
export function getAttribute(option){
    return request.get(`/merchandise/getAttribute`, option)
}
    

    
/**
* * 获取品牌列表
* * 获取品牌列表
*/
        
export function getBrandList(option){
    return request.get(`/merchandise/getBrandList`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDetail(option){
    return request.get(`/merchandise/getDetail`, option)
}
    

    
/**
* * 请求获取商品标签
* * 请求获取商品标签
*/
        
export function getLabel(option){
    return request.get(`/merchandise/getLabel`, option)
}
    

    
/**
* * 获取商品类型
* * 获取商品类型
*/
        
export function getMerchandiseClass(option){
    return request.get(`/merchandise/getMerchandiseClass`, option)
}
    

    
/**
* * 获取商品图片
* * 获取商品图片
*/
        
export function getPicList(option){
    return request.get(`/merchandise/getPicList`, option)
}
    

    
/**
* * 获取产品信息
* * 获取产品信息
*/
        
export function (option){
    return request.post(`/merchandise/getProduct/`, option)
}
    

    
/**
* * 获取产品类目树
* * 获取产品类目树
*/
        
export function getProductCategory(option){
    return request.get(`/merchandise/getProductCategory`, option)
}
    

    
/**
* * 获取产品库
* * 获取产品库
*/
        
export function getProductLibraries(option){
    return request.get(`/merchandise/getProductLibraries`, option)
}
    

    
/**
* * 获取产品sku列表请求
* * 获取产品sku列表请求
*/
        
export function {productId}(option){
    return request.get(`/merchandise/getProductSkus/{productId}`, option)
}
    

    
/**
* * 获取供应商列表
* * 获取供应商列表
*/
        
export function getSuppliersList(option){
    return request.get(`/merchandise/getSuppliersList`, option)
}
    

    
/**
* * 获取产品子商品
* * 获取产品子商品
*/
        
export function getmerchandiseChildren(option){
    return request.get(`/merchandise/getmerchandiseChildren`, option)
}
    

    
/**
* * 新建请求
* * 新建请求
*/
        
export function insert(option){
    return request.post(`/merchandise/insert`, option)
}
    

    
/**
* * 获取商品类目请求
* * 获取商品类目请求
*/
        
export function merchandiseCategory(option){
    return request.get(`/merchandise/merchandiseCategory`, option)
}
    

    
/**
* * 商品类目树请求
* * 商品类目树请求
*/
        
export function merchandiseCategoryTree(option){
    return request.get(`/merchandise/merchandiseCategoryTree`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/merchandise/page`, option)
}
    

    
/**
* * 更新商品第一个table页请求(基本信息)
* * 更新商品第一个table页请求(基本信息)
*/
        
export function updateFirst(option){
    return request.put(`/merchandise/updateFirst`, option)
}
    

    
/**
* * 更新请求(标签管理)
* * 更新请求(标签管理)
*/
        
export function updateFourth(option){
    return request.put(`/merchandise/updateFourth`, option)
}
    

    
/**
* * 更新table2页面请求
* * 更新table2页面请求
*/
        
export function updateSecond(option){
    return request.put(`/merchandise/updateSecond`, option)
}
    

    
/**
* * 更新table3请求（供应信息）
* * 更新table3请求（供应信息）
*/
        
export function updateThird(option){
    return request.put(`/merchandise/updateThird`, option)
}
    

