
    
/**
* * 创建退款订单请求
* * 创建退款订单请求
*/
        
export function addRefund(option){
    return request.put(`/refund/order/addRefund`, option)
}
    

    
/**
* * 审核通过订单请求
* * 审核通过订单请求
*/
        
export function approval(option){
    return request.put(`/refund/order/approval`, option)
}
    

    
/**
* * 关闭订单请求
* * 关闭订单请求
*/
        
export function closeOrder(option){
    return request.get(`/refund/order/closeOrder`, option)
}
    

    
/**
* * 获取订单详情请求
* * 获取订单详情请求
*/
        
export function getDetail(option){
    return request.get(`/refund/order/getDetail`, option)
}
    

    
/**
* * 获取退款单分页列表请求
* * 获取退款单分页列表请求
*/
        
export function getRefundPage(option){
    return request.post(`/refund/order/getRefundPage`, option)
}
    

    
/**
* * 驳回订单请求
* * 驳回订单请求
*/
        
export function reject(option){
    return request.put(`/refund/order/reject`, option)
}
    

