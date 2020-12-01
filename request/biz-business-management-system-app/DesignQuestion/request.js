
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteRequest(option){
    return request.post(`/design/question/deleteRequest`, option)
}
    

    
/**
* * admin问题列表请求
* * admin问题列表请求
*/
        
export function getAdminList(option){
    return request.post(`/design/question/getAdminList`, option)
}
    

    
/**
* * 问题列表请求
* * 问题列表请求
*/
        
export function getList(option){
    return request.post(`/design/question/getList`, option)
}
    

    
/**
* * 问题分页查询
* * 问题分页查询
*/
        
export function getPage(option){
    return request.post(`/design/question/getPage`, option)
}
    

    
/**
* * 获取问题详情请求
* * 获取问题详情请求
*/
        
export function getDesignQuestionGetQuestionInfo(option){
    return request.get(`/design/question/getQuestionInfo/${option.id}`, option)
}
    

    
/**
* * 导入数据请求
* * 导入数据请求
*/
        
export function importDataRequest(option){
    return request.post(`/design/question/importDataRequest`, option)
}
    

    
/**
* * 新增问题请求
* * 新增问题请求
*/
        
export function insertQuestionRequest(option){
    return request.post(`/design/question/insertQuestionRequest`, option)
}
    

    
/**
* * 新增规则请求
* * 新增规则请求
*/
        
export function insertRuleRequest(option){
    return request.post(`/design/question/insertRuleRequest`, option)
}
    

    
/**
* * 更新问题请求
* * 更新问题请求
*/
        
export function updateQuestionRequest(option){
    return request.post(`/design/question/updateQuestionRequest`, option)
}
    

    
/**
* * 修改问题顺序请求
* * 修改问题顺序请求
*/
        
export function updateQuestionSeqRequest(option){
    return request.post(`/design/question/updateQuestionSeqRequest`, option)
}
    

    
/**
* * 修改规则请求(每次修改后端将删除先前所存储数据，后重新保存前端所传数据)
* * 修改规则请求(每次修改后端将删除先前所存储数据，后重新保存前端所传数据)
*/
        
export function updateRuleRequest(option){
    return request.post(`/design/question/updateRuleRequest`, option)
}
    

