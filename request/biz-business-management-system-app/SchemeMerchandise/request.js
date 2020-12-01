
    
/**
* * 品牌获取请求
* * 品牌获取请求
*/
        
export function getBrandList(option){
    return request.get(`/scheme/merchandise/getBrandList`, option)
}
    

    
/**
* * 获取商品详情接口
* * 获取商品详情接口
*/
        
export function getSchemeMerchandiseGetMerchandise(option){
    return request.get(`/scheme/merchandise/getMerchandise/${option.id}`, option)
}
    

    
/**
* * 商品sku分页请求
* * 商品sku分页请求
*/
        
export function getSkuPage(option){
    return request.post(`/scheme/merchandise/getSkuPage`, option)
}
    

    
/**
* * 根据3d类目获取sku属性list请求
* * 根据3d类目获取sku属性list请求
*/
        
export function getSkuPropertyList(option){
    return request.get(`/scheme/merchandise/getSkuPropertyList`, option)
}
    

    
/**
* * 分页查询商品数据请求
* * 分页查询商品数据请求
*/
        
export function page(option){
    return request.post(`/scheme/merchandise/page`, option)
}
    

