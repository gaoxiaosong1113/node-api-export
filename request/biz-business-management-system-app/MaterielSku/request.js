
    
/**
* * 生成SKU请求
* * 生成SKU请求
*/
        
export function createSkuList(option){
    return request.post(`/materiel/sku/createSkuList`, option)
}
    

    
/**
* * 获取SKU请求
* * 获取SKU请求
*/
        
export function getSkuList(option){
    return request.get(`/materiel/sku/getSkuList`, option)
}
    

    
/**
* * 根据sku_code获取sku供应商集合
* * 根据sku_code获取sku供应商集合
*/
        
export function getSkuSupplies(option){
    return request.get(`/materiel/sku/getSkuSupplies`, option)
}
    

    
/**
* * 获取某个商品sku
* * 获取某个商品sku
*/
        
export function {skuCode}(option){
    return request.get(`/materiel/sku/{skuCode}`, option)
}
    
/**
* * 更新sku信息请求
* * 更新sku信息请求
*/
        
export function {skuCode}(option){
    return request.put(`/materiel/sku/{skuCode}`, option)
}
    

