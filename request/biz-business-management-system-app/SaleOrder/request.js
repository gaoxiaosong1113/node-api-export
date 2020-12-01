
    
/**
* * 审核通过订单请求
* * 审核通过订单请求
*/
        
export function approval(option){
    return request.put(`/sale/order/approval`, option)
}
    

    
/**
* * 获取品牌商请求
* * 获取品牌商请求
*/
        
export function branderList(option){
    return request.post(`/sale/order/branderList`, option)
}
    

    
/**
* * 确认订单请求
* * 确认订单请求
*/
        
export function confirm(option){
    return request.put(`/sale/order/confirm`, option)
}
    

    
/**
* * 创建发货单请求
* * 创建发货单请求
*/
        
export function createInvoice(option){
    return request.post(`/sale/order/createInvoice`, option)
}
    

    
/**
* * 完成请求
* * 完成请求
*/
        
export function done(option){
    return request.put(`/sale/order/done`, option)
}
    

    
/**
* * 初审通过订单请求
* * 初审通过订单请求
*/
        
export function firstApproval(option){
    return request.put(`/sale/order/firstApproval`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDetailed(option){
    return request.get(`/sale/order/getDetailed`, option)
}
    

    
/**
* * 获取发货单详情请求
* * 获取发货单详情请求
*/
        
export function getInvoiceDetailed(option){
    return request.get(`/sale/order/getInvoiceDetailed`, option)
}
    

    
/**
* * 获取驳回原因请求
* * 获取驳回原因请求
*/
        
export function getReason(option){
    return request.get(`/sale/order/getReason`, option)
}
    

    
/**
* * 获取家装订单方案附件请求
* * 获取家装订单方案附件请求
*/
        
export function getSchemeResource(option){
    return request.get(`/sale/order/getSchemeResource`, option)
}
    

    
/**
* * 获取发货分页请求
* * 获取发货分页请求
*/
        
export function invoicePage(option){
    return request.post(`/sale/order/invoicePage`, option)
}
    

    
/**
* * 获取发货单明细请求
* * 获取发货单明细请求
*/
        
export function invoiceSku(option){
    return request.post(`/sale/order/invoiceSku`, option)
}
    

    
/**
* * 物料清单请求
* * 物料清单请求
*/
        
export function material(option){
    return request.get(`/sale/order/material`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/sale/order/page`, option)
}
    

    
/**
* * 支付请求
* * 支付请求
*/
        
export function pay(option){
    return request.put(`/sale/order/pay`, option)
}
    

    
/**
* * 支付复核请求
* * 支付复核请求
*/
        
export function payReview(option){
    return request.put(`/sale/order/payReview`, option)
}
    

    
/**
* * 确认收款请求
* * 确认收款请求
*/
        
export function receivables(option){
    return request.put(`/sale/order/receivables`, option)
}
    

    
/**
* * 驳回订单请求
* * 驳回订单请求
*/
        
export function reject(option){
    return request.put(`/sale/order/reject`, option)
}
    

    
/**
* * 确认发货请求
* * 确认发货请求
*/
        
export function sendMaterial(option){
    return request.put(`/sale/order/sendMaterial`, option)
}
    

    
/**
* * 获取采购单树形请求
* * 获取采购单树形请求
*/
        
export function skuTree(option){
    return request.post(`/sale/order/skuTree`, option)
}
    

    
/**
* * 获取当前组织的子组织请求
* * 获取当前组织的子组织请求
*/
        
export function storeList(option){
    return request.post(`/sale/order/storeList`, option)
}
    

    
/**
* * 提交请求
* * 提交请求
*/
        
export function submmit(option){
    return request.put(`/sale/order/submmit`, option)
}
    

    
/**
* * 财务审核通过订单请求
* * 财务审核通过订单请求
*/
        
export function twiceApproval(option){
    return request.put(`/sale/order/twiceApproval`, option)
}
    

