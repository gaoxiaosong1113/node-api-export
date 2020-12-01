
    
/**
* * 删除组件关联商品类目请求
* * 删除组件关联商品类目请求
*/
        
export function deleteDesignComponentDeleteRelMerchandiseCategory(option){
    return request.delete(`/design/component/deleteRelMerchandiseCategory/${option.id}`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getDesignComponentGetDesignPart(option){
    return request.get(`/design/component/getDesignPart/${option.id}`, option)
}
    

    
/**
* * 查询获取设计组件list请求
* * 查询获取设计组件list请求
*/
        
export function getDesignPartList(option){
    return request.get(`/design/component/getDesignPartList`, option)
}
    

    
/**
* * 获取设计组件分页请求
* * 获取设计组件分页请求
*/
        
export function getDesignPartsPage(option){
    return request.post(`/design/component/getDesignPartsPage`, option)
}
    

    
/**
* * 获取设计组件关联sku分页请求
* * 获取设计组件关联sku分页请求
*/
        
export function getDesignPartsRelSkuPage(option){
    return request.post(`/design/component/getDesignPartsRelSkuPage`, option)
}
    

    
/**
* * 根据主体关联商品类目获取商品请求
* * 根据主体关联商品类目获取商品请求
*/
        
export function getDesignComponentGetMainPartRelMerchanandise(option){
    return request.get(`/design/component/getMainPartRelMerchanandise/${option.id}`, option)
}
    

    
/**
* * 更新/删除关联sku请求
* * 更新/删除关联sku请求
*/
        
export function postDesignComponentOperateRelSku(option){
    return request.post(`/design/component/operateRelSku/${option.id}`, option)
}
    

    
/**
* * 更新组件请求
* * 更新组件请求
*/
        
export function putDesignComponentUpdateDesignPart(option){
    return request.put(`/design/component/updateDesignPart/${option.id}`, option)
}
    

