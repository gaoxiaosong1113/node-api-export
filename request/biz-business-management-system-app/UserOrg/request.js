
    
/**
* * 新建请求
* * 新建请求
*/
        
export function add(option){
    return request.post(`/user/org/add`, option)
}
    

    
/**
* * 品牌列表请求
* * 品牌列表请求
*/
        
export function allBrandList(option){
    return request.post(`/user/org/allBrandList`, option)
}
    

    
/**
* * 批量删除
* * 批量删除
*/
        
export function batchDelete(option){
    return request.put(`/user/org/batchDelete`, option)
}
    

    
/**
* * 品牌列表请求
* * 品牌列表请求
*/
        
export function brandList(option){
    return request.get(`/user/org/brandList`, option)
}
    

    
/**
* * 验证是否能删除
* * 验证是否能删除
*/
        
export function checkCanbeDel(option){
    return request.put(`/user/org/checkCanbeDel`, option)
}
    

    
/**
* * 批量禁用请求
* * 批量禁用请求
*/
        
export function disableUpdate(option){
    return request.put(`/user/org/disableUpdate`, option)
}
    

    
/**
* * 批量启用请求
* * 批量启用请求
*/
        
export function enableUpdate(option){
    return request.put(`/user/org/enableUpdate`, option)
}
    

    
/**
* * 获取对公账号请求
* * 获取对公账号请求
*/
        
export function getUserOrgGetAccount(option){
    return request.get(`/user/org/getAccount/${option.id}`, option)
}
    

    
/**
* * 获取当前品牌
* * 获取当前品牌
*/
        
export function getBrand(option){
    return request.get(`/user/org/getBrand`, option)
}
    

    
/**
* * 获取个人银行卡请求
* * 获取个人银行卡请求
*/
        
export function getUserOrgGetCard(option){
    return request.get(`/user/org/getCard/${option.id}`, option)
}
    

    
/**
* * 获取基本信息请求
* * 获取基本信息请求
*/
        
export function getDatil(option){
    return request.get(`/user/org/getDatil`, option)
}
    

    
/**
* * 获取联行号请求
* * 获取联行号请求
*/
        
export function getInterbank(option){
    return request.post(`/user/org/getInterbank`, option)
}
    

    
/**
* * 获取资质请求
* * 获取资质请求
*/
        
export function getUserOrgGetQualification(option){
    return request.get(`/user/org/getQualification/${option.id}`, option)
}
    

    
/**
* * 列表请求
* * 列表请求
*/
        
export function list(option){
    return request.get(`/user/org/list`, option)
}
    

    
/**
* * 组织禁用请求
* * 组织禁用请求
*/
        
export function orgDisable(option){
    return request.put(`/user/org/orgDisable`, option)
}
    

    
/**
* * 组织启用请求
* * 组织启用请求
*/
        
export function orgEnable(option){
    return request.put(`/user/org/orgEnable`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/user/org/page`, option)
}
    

    
/**
* * 品牌商门店列表请求
* * 品牌商门店列表请求
*/
        
export function ppsStoreList(option){
    return request.get(`/user/org/ppsStoreList`, option)
}
    

    
/**
* * 重置密码请求
* * 重置密码请求
*/
        
export function resetPssword(option){
    return request.put(`/user/org/resetPssword`, option)
}
    

    
/**
* * 设置对公账户请求
* * 设置对公账户请求
*/
        
export function setAccount(option){
    return request.put(`/user/org/setAccount`, option)
}
    

    
/**
* * 设置个人银行卡请求
* * 设置个人银行卡请求
*/
        
export function setBankCard(option){
    return request.put(`/user/org/setBankCard`, option)
}
    

    
/**
* * 设置企业资质请求
* * 设置企业资质请求
*/
        
export function setQualification(option){
    return request.put(`/user/org/setQualification`, option)
}
    

    
/**
* * 经销商门店列表请求
* * 经销商门店列表请求
*/
        
export function storeList(option){
    return request.get(`/user/org/storeList`, option)
}
    

    
/**
* * 个人银行卡解除绑定请求
* * 个人银行卡解除绑定请求
*/
        
export function unbindBankCard(option){
    return request.delete(`/user/org/unbindBankCard`, option)
}
    

    
/**
* * 更新负责人请求
* * 更新负责人请求
*/
        
export function updateContact(option){
    return request.put(`/user/org/updateContact`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getUserOrg(option){
    return request.get(`/user/org/${option.id}`, option)
}
    
/**
* * 更新请求
* * 更新请求
*/
        
export function putUserOrg(option){
    return request.put(`/user/org/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteUserOrg(option){
    return request.delete(`/user/org/${option.id}`, option)
}
    

