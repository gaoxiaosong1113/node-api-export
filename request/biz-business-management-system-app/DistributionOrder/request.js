
    
/**
* * 获取订单详情请求
* * 获取订单详情请求
*/
        
export function getDetailed(option){
    return request.get(`/distribution/order/getDetailed`, option)
}
    

    
/**
* * 出库请求
* * 出库请求
*/
        
export function outhousing(option){
    return request.put(`/distribution/order/outhousing`, option)
}
    

    
/**
* * 获取配送单包请求
* * 获取配送单包请求
*/
        
export function packageList(option){
    return request.post(`/distribution/order/packageList`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/distribution/order/page`, option)
}
    

    
/**
* * 取消出库请求
* * 取消出库请求
*/
        
export function unouthousing(option){
    return request.put(`/distribution/order/unouthousing`, option)
}
    

    
/**
* * 取消入库请求
* * 取消入库请求
*/
        
export function unwarehousing(option){
    return request.put(`/distribution/order/unwarehousing`, option)
}
    

    
/**
* * 入库请求
* * 入库请求
*/
        
export function warehousing(option){
    return request.put(`/distribution/order/warehousing`, option)
}
    

