
    
/**
* * 获取3d方案分页请求
* * 获取分页请求
*/
        
export function getSchemePage(option){
    return request.post(`/design/community/scheme/getSchemePage`, option)
}
    

    
/**
* * 解析bom
* * 解析bom
*/
        
export function postSchemeBomTransformSingle(option){
    return request.post(`/scheme/bomTransformSingle/${option.id}`, option)
}
    

    
/**
* * 解析bom2.0
* * 解析bom2.0
*/
        
export function postSchemeBomTransformSingleModified(option){
    return request.post(`/scheme/bomTransformSingleModified/${option.id}`, option)
}
    

    
/**
* * 对比工艺库商品数据
* * 获取分页请求
*/
        
export function compareSkuData(option){
    return request.post(`/scheme/compareSkuData`, option)
}
    

    
/**
* * 创建bom&amp;IPD
* * 创建bom&amp;IPD
*/
        
export function postSchemeCreateBomBatchAndIpd(option){
    return request.post(`/scheme/createBomBatchAndIpd/${option.id}`, option)
}
    

    
/**
* * 获取图纸
* * 获取图纸
*/
        
export function postSchemeCreateSchemeDrawing(option){
    return request.post(`/scheme/createSchemeDrawing/${option.id}`, option)
}
    

    
/**
* * 创建totalbatch
* * 创建totalbatch
*/
        
export function postSchemeCreateTotalBatchSingle(option){
    return request.post(`/scheme/createTotalBatchSingle/${option.id}`, option)
}
    

    
/**
* * 获取totalbatch结果
* * 获取totalbatch结果
*/
        
export function postSchemeGetTotalBatchResult(option){
    return request.post(`/scheme/getTotalBatchResult/${option.id}`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/scheme/page`, option)
}
    

