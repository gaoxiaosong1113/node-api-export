
    
/**
* * 审核项目请求
* * 审核项目请求
*/
        
export function audit(option){
    return request.put(`/service/order/audit`, option)
}
    

    
/**
* * 验收项目请求
* * 验收项目请求
*/
        
export function check(option){
    return request.put(`/service/order/check`, option)
}
    

    
/**
* * 关闭项目请求
* * 关闭项目请求
*/
        
export function close(option){
    return request.put(`/service/order/close`, option)
}
    

    
/**
* * 获取变更单请求
* * 获取变更单请求
*/
        
export function getChangeOrder(option){
    return request.get(`/service/order/getChangeOrder`, option)
}
    

    
/**
* * 获取验收内容请求
* * 获取验收内容请求
*/
        
export function getCheckInfo(option){
    return request.post(`/service/order/getCheckInfo`, option)
}
    

    
/**
* * 获取服务单开工检查信息请求
* * 获取服务单开工检查信息请求
*/
        
export function getCheckMassage(option){
    return request.get(`/service/order/getCheckMassage`, option)
}
    

    
/**
* * 获取订单详情请求
* * 获取订单详情请求
*/
        
export function getDetailed(option){
    return request.get(`/service/order/getDetailed`, option)
}
    

    
/**
* * 获取现场情况请求
* * 获取现场情况请求
*/
        
export function getLog(option){
    return request.get(`/service/order/getLog`, option)
}
    

    
/**
* * 获取材料信息请求
* * 获取材料信息请求
*/
        
export function getMaterial(option){
    return request.get(`/service/order/getMaterial`, option)
}
    

    
/**
* * 获取材料包信息请求
* * 获取材料包信息请求
*/
        
export function getPackage(option){
    return request.get(`/service/order/getPackage`, option)
}
    

    
/**
* * 获取无法开工信息请求
* * 获取无法开工信息请求
*/
        
export function getUnableStart(option){
    return request.get(`/service/order/getUnableStart`, option)
}
    

    
/**
* * 获取服务单工人请求
* * 获取服务单工人请求
*/
        
export function getWorker(option){
    return request.get(`/service/order/getWorker`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/service/order/page`, option)
}
    

