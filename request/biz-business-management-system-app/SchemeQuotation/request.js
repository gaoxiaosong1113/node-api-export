
    
/**
* * 报价清单page请求
* * 报价清单page请求
*/
        
export function getPage(option){
    return request.post(`/scheme/quotation/getPage`, option)
}
    

    
/**
* * 获取报价清单详情请求
* * 获取报价清单详情请求
*/
        
export function getSchemeQuotationGetQuotation(option){
    return request.get(`/scheme/quotation/getQuotation/${option.id}`, option)
}
    

    
/**
* * 获取清单列表请求
* * 获取清单列表请求
*/
        
export function getQuotationList(option){
    return request.get(`/scheme/quotation/getQuotationList`, option)
}
    

    
/**
* * 获取清单树形列表请求
* * 获取清单树形列表请求
*/
        
export function getQuotationTreeList(option){
    return request.get(`/scheme/quotation/getQuotationTreeList`, option)
}
    

    
/**
* * 新增请求
* * 新增请求
*/
        
export function insertQuotation(option){
    return request.post(`/scheme/quotation/insertQuotation`, option)
}
    

    
/**
* * 批量更新/新增方案清单列表请求
* * 批量更新/新增方案清单列表请求
*/
        
export function insertSpaceAndQuotationlist(option){
    return request.post(`/scheme/quotation/insertSpaceAndQuotationlist`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function putSchemeQuotationUpdateQuotation(option){
    return request.put(`/scheme/quotation/updateQuotation/${option.id}`, option)
}
    

    
/**
* * 批量更新/新增方案清单列表请求
* * 批量更新/新增方案清单列表请求
*/
        
export function updateQuotationList(option){
    return request.post(`/scheme/quotation/updateQuotationList`, option)
}
    

