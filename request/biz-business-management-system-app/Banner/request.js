
    
/**
* * 新建请求
* * 新建请求
*/
        
export function add(option){
    return request.post(`/banner/add`, option)
}
    

    
/**
* * 获取图片列表
* * 获取图片列表
*/
        
export function getBannerList(option){
    return request.get(`/banner/getBannerList`, option)
}
    

    
/**
* * 排序请求
* * 排序请求
*/
        
export function updateSeq(option){
    return request.put(`/banner/updateSeq`, option)
}
    

    
/**
* * 更新请求
* * 更新请求
*/
        
export function putBanner(option){
    return request.put(`/banner/${option.id}`, option)
}
    
/**
* * 删除请求
* * 删除请求
*/
        
export function deleteBanner(option){
    return request.delete(`/banner/${option.id}`, option)
}
    

