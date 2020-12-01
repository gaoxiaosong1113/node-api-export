
    
/**
* * 新建请求
* * 新建请求
*/
        
export function materiel(option){
    return request.post(`/materiel`, option)
}
    

    
/**
* * 批量删除请求
* * 批量删除请求
*/
        
export function batchDelete(option){
    return request.delete(`/materiel/batchDelete`, option)
}
    

    
/**
* * 批量下架请求
* * 批量下架请求
*/
        
export function batchDowner(option){
    return request.put(`/materiel/batchDowner`, option)
}
    

    
/**
* * 批量上架请求
* * 批量上架请求
*/
        
export function batchUpper(option){
    return request.put(`/materiel/batchUpper`, option)
}
    

    
/**
* * 停售请求
* * 停售请求
*/
        
export function disableSaleUpdate(option){
    return request.put(`/materiel/disableSaleUpdate`, option)
}
    

    
/**
* * 请求获取商品属性
* * 请求获取商品属性
*/
        
export function getAttribute(option){
    return request.get(`/materiel/getAttribute`, option)
}
    

    
/**
* * 获取物料详情请求
* * 获取物料详情请求
*/
        
export function getMaterielDetail(option){
    return request.get(`/materiel/getMaterielDetail`, option)
}
    

    
/**
* * 获取仓库地址请求
* * 获取仓库地址请求
*/
        
export function getWarehouseList(option){
    return request.get(`/materiel/getWarehouseList`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/materiel/page`, option)
}
    

    
/**
* * 启售请求
* * 启售请求
*/
        
export function saleEnableUpdate(option){
    return request.put(`/materiel/saleEnableUpdate`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function putMaterielUpdateTable1(option){
    return request.put(`/materiel/updateTable1/${option.id}`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function putMaterielUpdateTable2(option){
    return request.put(`/materiel/updateTable2/${option.id}`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getMateriel(option){
    return request.get(`/materiel/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putMateriel(option){
    return request.put(`/materiel/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteMateriel(option){
    return request.delete(`/materiel/${option.id}`, option)
}
    

