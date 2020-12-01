
    
/**
* * 选择添加商品请求
* * 选择添加商品请求
*/
        
export function add(option){
    return request.post(`/merchandise/brander/add`, option)
}
    

    
/**
* * 获取详情请求
* * 获取详情请求
*/
        
export function getDetail(option){
    return request.get(`/merchandise/brander/getDetail`, option)
}
    

    
/**
* * 新建请求
* * 新建请求
*/
        
export function insert(option){
    return request.post(`/merchandise/brander/insert`, option)
}
    

    
/**
* * 获取分页请求
* * 获取分页请求
*/
        
export function page(option){
    return request.post(`/merchandise/brander/page`, option)
}
    

    
/**
* * 获取添加商品的分页请求
* * 获取添加商品的分页请求
*/
        
export function selectPage(option){
    return request.post(`/merchandise/brander/selectPage`, option)
}
    

    
/**
* * 更新商品第一个table页请求(基本信息)
* * 更新商品第一个table页请求(基本信息)
*/
        
export function updateFirst(option){
    return request.put(`/merchandise/brander/updateFirst`, option)
}
    

    
/**
* * 更新请求(标签管理)
* * 更新请求(标签管理)
*/
        
export function updateFourth(option){
    return request.put(`/merchandise/brander/updateFourth`, option)
}
    

    
/**
* * 更新table2页面请求
* * 更新table2页面请求
*/
        
export function updateSecond(option){
    return request.put(`/merchandise/brander/updateSecond`, option)
}
    

    
/**
* * 更新table3请求（供应信息：pulishSource,1-供应链；2-品牌商。不同类型编辑的字段不同）
* * 更新table3请求（供应信息：pulishSource,1-供应链；2-品牌商。不同类型编辑的字段不同）
*/
        
export function updateThird(option){
    return request.put(`/merchandise/brander/updateThird`, option)
}
    

