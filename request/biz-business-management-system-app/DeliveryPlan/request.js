
    
/**
* * 编辑/保存自定义工序请求
* * 编辑/保存自定义工序请求
*/
        
export function addDefineProcedure(option){
    return request.post(`/delivery/plan/addDefineProcedure`, option)
}
    

    
/**
* * 添加例外日期请求
* * 添加例外日期请求
*/
        
export function addHoliday(option){
    return request.post(`/delivery/plan/addHoliday`, option)
}
    

    
/**
* * 校验是否可调整请求
* * 校验是否可调整请求
*/
        
export function checkIfAdjustment(option){
    return request.get(`/delivery/plan/checkIfAdjustment`, option)
}
    

    
/**
* * 删除单个例外请求
* * 删除单个例外请求
*/
        
export function deleteHolidayById(option){
    return request.delete(`/delivery/plan/deleteHolidayById`, option)
}
    

    
/**
* * 删除指定工人及排期请求
* * 删除指定工人及排期请求
*/
        
export function deleteSchedule(option){
    return request.delete(`/delivery/plan/deleteSchedule`, option)
}
    

    
/**
* * 获取施工日历请求
* * 获取施工日历请求
*/
        
export function getCalendar(option){
    return request.get(`/delivery/plan/getCalendar`, option)
}
    

    
/**
* * 获取排除例外的日历区间请求
* * 获取排除例外的日历区间请求
*/
        
export function getCalendarInterval(option){
    return request.get(`/delivery/plan/getCalendarInterval`, option)
}
    

    
/**
* * 获取自定义工序请求
* * 获取自定义工序请求
*/
        
export function getDefineProcedure(option){
    return request.get(`/delivery/plan/getDefineProcedure`, option)
}
    

    
/**
* * 获取例外列表请求
* * 获取例外列表请求
*/
        
export function getHolidaysList(option){
    return request.get(`/delivery/plan/getHolidaysList`, option)
}
    

    
/**
* * 获取匹配的施工组织计划模板数据请求
* * 获取匹配的施工组织计划模板数据请求
*/
        
export function getMatchingPlanList(option){
    return request.get(`/delivery/plan/getMatchingPlanList`, option)
}
    

    
/**
* * 获取计划开结束时间请求
* * 获取计划开结束时间请求
*/
        
export function getPlanStartEndDate(option){
    return request.get(`/delivery/plan/getPlanStartEndDate`, option)
}
    

    
/**
* * 获取前置工序时间列表请求
* * 获取前置工序时间列表请求
*/
        
export function getPreProcedureDateList(option){
    return request.get(`/delivery/plan/getPreProcedureDateList`, option)
}
    

    
/**
* * 获取工种/工人列表请求
* * 获取工种/工人列表请求
*/
        
export function getProfessionAndWorkList(option){
    return request.get(`/delivery/plan/getProfessionAndWorkList`, option)
}
    

    
/**
* * 获取工种下拉列表请求
* * 获取工种下拉列表请求
*/
        
export function getProfessionList(option){
    return request.get(`/delivery/plan/getProfessionList`, option)
}
    

    
/**
* * 获取阶段请求
* * 获取阶段请求
*/
        
export function getStageList(option){
    return request.get(`/delivery/plan/getStageList`, option)
}
    

    
/**
* * 制定计划--保存工序请求
* * 制定计划--保存工序请求
*/
        
export function insertProcedureDrawUpPlan(option){
    return request.put(`/delivery/plan/insertProcedureDrawUpPlan`, option)
}
    

    
/**
* * 执行计划--保存工序请求
* * 执行计划--保存工序请求
*/
        
export function insertProcedureExecutePlan(option){
    return request.put(`/delivery/plan/insertProcedureExecutePlan`, option)
}
    

    
/**
* * 保存工作排期请求
* * 保存工作排期请求
*/
        
export function insertSchedule(option){
    return request.post(`/delivery/plan/insertSchedule`, option)
}
    

    
/**
* * 保存工人请求
* * 保存工人请求
*/
        
export function insertWorkers(option){
    return request.post(`/delivery/plan/insertWorkers`, option)
}
    

    
/**
* * 重置交付计划请求
* * 重置交付计划请求
*/
        
export function resetPlan(option){
    return request.delete(`/delivery/plan/resetPlan`, option)
}
    

    
/**
* * 提交施工组织计划请求
* * 提交施工组织计划请求
*/
        
export function submitPlan(option){
    return request.post(`/delivery/plan/submitPlan`, option)
}
    

    
/**
* * 保存计划开结束时间请求
* * 保存计划开结束时间请求
*/
        
export function updatePlanStartEndDate(option){
    return request.put(`/delivery/plan/updatePlanStartEndDate`, option)
}
    

