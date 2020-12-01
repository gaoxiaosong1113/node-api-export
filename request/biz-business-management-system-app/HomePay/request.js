
    
/**
* * 获取账号余额
* * 获取账号余额
*/
        
export function getAccount(option){
    return request.get(`/home/pay/getAccount`, option)
}
    

    
/**
* * 账号流水分页请求
* * 账号流水分页请求
*/
        
export function getAccountFlows(option){
    return request.post(`/home/pay/getAccountFlows`, option)
}
    

    
/**
* * 支付请求
* * 支付请求
*/
        
export function getCash(option){
    return request.post(`/home/pay/getCash`, option)
}
    

    
/**
* * 获取收款记录分页请求
* * 获取收款记录分页请求
*/
        
export function getPayPage(option){
    return request.post(`/home/pay/getPayPage`, option)
}
    

    
/**
* * 支付回调请求
* * 支付回调请求
*/
        
export function payCallBack(option){
    return request.post(`/home/pay/payCallBack`, option)
}
    

    
/**
* * 退款请求
* * 退款请求
*/
        
export function payRefund(option){
    return request.post(`/home/pay/payRefund`, option)
}
    

    
/**
* * 提现请求
* * 提现请求
*/
        
export function withdraw(option){
    return request.get(`/home/pay/withdraw`, option)
}
    

    
/**
* * 中金支付请求
* * 中金支付请求
*/
        
export function zjPay(option){
    return request.post(`/home/pay/zjPay`, option)
}
    

