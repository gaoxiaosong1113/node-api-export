
    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/appointment/page`, option)
}
    

    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteAppointment(option){
    return request.delete(`/appointment/${option.id}`, option)
}
    

