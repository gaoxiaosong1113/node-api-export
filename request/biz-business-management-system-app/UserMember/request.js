
    
/**
* * 新建请求
* * 新建请求
*/
        
export function member(option){
    return request.post(`/user/member`, option)
}
    

    
/**
* * 批量删除
* * 批量删除
*/
        
export function batchDelete(option){
    return request.delete(`/user/member/batchDelete`, option)
}
    

    
/**
* * 更换绑定手机号请求
* * 更换绑定手机号请求
*/
        
export function changeBindingPhone(option){
    return request.put(`/user/member/changeBindingPhone`, option)
}
    

    
/**
* * 删除推荐人员请求
* * 删除推荐人员请求
*/
        
export function delRecommendMember(option){
    return request.put(`/user/member/delRecommendMember`, option)
}
    

    
/**
* * 部门列表请求
* * 部门列表请求
*/
        
export function department(option){
    return request.get(`/user/member/department`, option)
}
    

    
/**
* * 禁用请求
* * 禁用请求
*/
        
export function disableUpdate(option){
    return request.put(`/user/member/disableUpdate`, option)
}
    

    
/**
* * 下移推荐人员请求
* * 下移推荐人员请求
*/
        
export function downRecommendMember(option){
    return request.put(`/user/member/downRecommendMember`, option)
}
    

    
/**
* * 启用推荐人员请求
* * 启用推荐人员请求
*/
        
export function enableRecommendMember(option){
    return request.put(`/user/member/enableRecommendMember`, option)
}
    

    
/**
* * 启用请求
* * 启用请求
*/
        
export function enableUpdate(option){
    return request.put(`/user/member/enableUpdate`, option)
}
    

    
/**
* * 获取个人信息请求
* * 获取个人信息请求
*/
        
export function getPersonalInfo(option){
    return request.get(`/user/member/getPersonalInfo`, option)
}
    

    
/**
* * 获取推荐人员请求
* * 获取推荐人员请求
*/
        
export function getRecommendMember(option){
    return request.get(`/user/member/getRecommendMember`, option)
}
    

    
/**
* * 获取可选择人员请求
* * 获取可选择人员请求
*/
        
export function getSelectableMember(option){
    return request.get(`/user/member/getSelectableMember`, option)
}
    

    
/**
* * 新增推荐人员请求
* * 新增推荐人员请求
*/
        
export function insertRecommendMember(option){
    return request.post(`/user/member/insertRecommendMember`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/user/member/page`, option)
}
    

    
/**
* * 推荐人员分页请求
* * 推荐人员分页请求
*/
        
export function pageRecommendMember(option){
    return request.post(`/user/member/pageRecommendMember`, option)
}
    

    
/**
* * 岗位列表请求
* * 岗位列表请求
*/
        
export function position(option){
    return request.get(`/user/member/position`, option)
}
    

    
/**
* * 密码验证请求
* * 密码验证请求
*/
        
export function pwdCheck(option){
    return request.get(`/user/member/pwdCheck`, option)
}
    

    
/**
* * 重置密码请求
* * 重置密码请求
*/
        
export function resetPassword(option){
    return request.put(`/user/member/resetPassword`, option)
}
    

    
/**
* * 角色列表请求
* * 角色列表请求
*/
        
export function role(option){
    return request.get(`/user/member/role`, option)
}
    

    
/**
* * 发送手机验证码请求
* * 发送手机验证码请求
*/
        
export function sendMessages(option){
    return request.post(`/user/member/sendMessages`, option)
}
    

    
/**
* * 置底推荐人员请求
* * 置底推荐人员请求
*/
        
export function setBottomRecommendMember(option){
    return request.put(`/user/member/setBottomRecommendMember`, option)
}
    

    
/**
* * 置顶推荐人员请求
* * 置顶推荐人员请求
*/
        
export function setTopRecommendMember(option){
    return request.put(`/user/member/setTopRecommendMember`, option)
}
    

    
/**
* * 门店列表请求
* * 门店列表请求
*/
        
export function store(option){
    return request.get(`/user/member/store`, option)
}
    

    
/**
* * 禁用推荐人员请求
* * 禁用推荐人员请求
*/
        
export function unenableRecommendMember(option){
    return request.put(`/user/member/unenableRecommendMember`, option)
}
    

    
/**
* * 上移推荐人员请求
* * 上移推荐人员请求
*/
        
export function upRecommendMember(option){
    return request.put(`/user/member/upRecommendMember`, option)
}
    

    
/**
* * 修改邮箱请求
* * 修改邮箱请求
*/
        
export function updateEmail(option){
    return request.put(`/user/member/updateEmail`, option)
}
    

    
/**
* * 修改密码请求
* * 修改密码请求
*/
        
export function updatePassword(option){
    return request.put(`/user/member/updatePassword`, option)
}
    

    
/**
* * 修改推荐人员请求
* * 修改推荐人员请求
*/
        
export function updateRecommendMember(option){
    return request.put(`/user/member/updateRecommendMember`, option)
}
    

    
/**
* * 校验未完成任务请求
* * 校验未完成任务请求
*/
        
export function verifyIncompleteTask(option){
    return request.post(`/user/member/verifyIncompleteTask`, option)
}
    

    
/**
* * 获取仓库地址
* * 获取仓库地址
*/
        
export function warehouse(option){
    return request.get(`/user/member/warehouse`, option)
}
    

    
/**
* * 获取请求
* * 获取请求
*/
        
export function getUserMember(option){
    return request.get(`/user/member/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteUserMember(option){
    return request.delete(`/user/member/${option.id}`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function {userId}(option){
    return request.put(`/user/member/{userId}`, option)
}
    

