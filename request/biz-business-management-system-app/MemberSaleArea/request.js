
    
/**
* * 新建请求
* * 新建请求
*/
        
export function saleArea(option){
    return request.post(`/member/saleArea`, option)
}
    

    
/**
* * 删除请求之前查询关联门店和经销商请求
* * 删除请求之前查询关联门店和经销商请求
*/
        
export function getMemberSaleAreaBeforeDelete(option){
    return request.get(`/member/saleArea/beforeDelete/${option.id}`, option)
}
    

    
/**
* * 请求树形结构
* * 请求树形结构
*/
        
export function getTree(option){
    return request.post(`/member/saleArea/getTree`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/member/saleArea/page`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getMemberSaleArea(option){
    return request.get(`/member/saleArea/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putMemberSaleArea(option){
    return request.put(`/member/saleArea/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteMemberSaleArea(option){
    return request.delete(`/member/saleArea/${option.id}`, option)
}
    

