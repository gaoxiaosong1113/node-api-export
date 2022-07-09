/*
    项目名称 default
    开发者 name<gaoxiaosong@croot.com,704041637@qq.com>
    部门：
    生成日期 2022-07-10 00:47:42
*/

import request from '@/request.js'

    
/**
* * token鉴权
* * 获取元信息-协同文档
* * 若无，返回null
*/
export const get = (option) => request.get(`/files/${option["fileId"]}`, option)
    

    
/**
* * token鉴权
* * 获取当前用户信息
* * 若无，返回null
*/
export const getCurrentInfo = (option) => request.get(`/users/current/info`, option)
    


    
/**
* * 产业详览-专利权利人信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/obligeeInfos/conditions`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/obligeeInfos/conditionsPage`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postObligeeInfo = (option) => request.post(`/obligeeInfos/obligeeInfo`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 添加
* * 添加
*/
export const putObligeeInfo = (option) => request.put(`/obligeeInfos/obligeeInfo`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postObligeeInfoSelective = (option) => request.post(`/obligeeInfos/obligeeInfoSelective`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putObligeeInfoSelective = (option) => request.put(`/obligeeInfos/obligeeInfoSelective`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postObligeeInfos = (option) => request.post(`/obligeeInfos/obligeeInfos`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 批量添加
* * 批量添加
*/
export const putObligeeInfos = (option) => request.put(`/obligeeInfos/obligeeInfos`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 根据主键获取ObligeeInfo
* * 若无，返回null
*/
export const get = (option) => request.get(`/obligeeInfos/${option["oiId"]}`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/obligeeInfos/${option["oiId"]}`, option)
    


    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/patentSummaryInfos/conditions`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/patentSummaryInfos/conditionsPage`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentSummaryInfo = (option) => request.post(`/patentSummaryInfos/patentSummaryInfo`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 添加
* * 添加
*/
export const putPatentSummaryInfo = (option) => request.put(`/patentSummaryInfos/patentSummaryInfo`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentSummaryInfoSelective = (option) => request.post(`/patentSummaryInfos/patentSummaryInfoSelective`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPatentSummaryInfoSelective = (option) => request.put(`/patentSummaryInfos/patentSummaryInfoSelective`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPatentSummaryInfos = (option) => request.post(`/patentSummaryInfos/patentSummaryInfos`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 批量添加
* * 批量添加
*/
export const putPatentSummaryInfos = (option) => request.put(`/patentSummaryInfos/patentSummaryInfos`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据主键获取PatentSummaryInfo
* * 若无，返回null
*/
export const get = (option) => request.get(`/patentSummaryInfos/${option["psiId"]}`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/patentSummaryInfos/${option["psiId"]}`, option)
    


    
/**
* * 产业详览-产业专利详情接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/industrialPatentInfos/conditions`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/industrialPatentInfos/conditionsPage`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postIndustrialPatentInfo = (option) => request.post(`/industrialPatentInfos/industrialPatentInfo`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 添加
* * 添加
*/
export const putIndustrialPatentInfo = (option) => request.put(`/industrialPatentInfos/industrialPatentInfo`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postIndustrialPatentInfoSelective = (option) => request.post(`/industrialPatentInfos/industrialPatentInfoSelective`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putIndustrialPatentInfoSelective = (option) => request.put(`/industrialPatentInfos/industrialPatentInfoSelective`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postIndustrialPatentInfos = (option) => request.post(`/industrialPatentInfos/industrialPatentInfos`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 批量添加
* * 批量添加
*/
export const putIndustrialPatentInfos = (option) => request.put(`/industrialPatentInfos/industrialPatentInfos`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 根据主键获取IndustrialPatentInfo
* * 若无，返回null
*/
export const get = (option) => request.get(`/industrialPatentInfos/${option["ipiId"]}`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/industrialPatentInfos/${option["ipiId"]}`, option)
    


    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/enterprisePatentRanks/conditions`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/enterprisePatentRanks/conditionsPage`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postEnterprisePatentRank = (option) => request.post(`/enterprisePatentRanks/enterprisePatentRank`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 添加
* * 添加
*/
export const putEnterprisePatentRank = (option) => request.put(`/enterprisePatentRanks/enterprisePatentRank`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postEnterprisePatentRankSelective = (option) => request.post(`/enterprisePatentRanks/enterprisePatentRankSelective`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putEnterprisePatentRankSelective = (option) => request.put(`/enterprisePatentRanks/enterprisePatentRankSelective`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postEnterprisePatentRanks = (option) => request.post(`/enterprisePatentRanks/enterprisePatentRanks`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 批量添加
* * 批量添加
*/
export const putEnterprisePatentRanks = (option) => request.put(`/enterprisePatentRanks/enterprisePatentRanks`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据主键获取EnterprisePatentRank
* * 若无，返回null
*/
export const get = (option) => request.get(`/enterprisePatentRanks/${option["eprId"]}`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/enterprisePatentRanks/${option["eprId"]}`, option)
    


    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/patentPermitTransactions/conditions`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/patentPermitTransactions/conditionsPage`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentPermitTransaction = (option) => request.post(`/patentPermitTransactions/patentPermitTransaction`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 添加
* * 添加
*/
export const putPatentPermitTransaction = (option) => request.put(`/patentPermitTransactions/patentPermitTransaction`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentPermitTransactionSelective = (option) => request.post(`/patentPermitTransactions/patentPermitTransactionSelective`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPatentPermitTransactionSelective = (option) => request.put(`/patentPermitTransactions/patentPermitTransactionSelective`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPatentPermitTransactions = (option) => request.post(`/patentPermitTransactions/patentPermitTransactions`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 批量添加
* * 批量添加
*/
export const putPatentPermitTransactions = (option) => request.put(`/patentPermitTransactions/patentPermitTransactions`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据主键获取PatentPermitTransaction
* * 若无，返回null
*/
export const get = (option) => request.get(`/patentPermitTransactions/${option["pltId"]}`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/patentPermitTransactions/${option["pltId"]}`, option)
    


    
/**
* * 概览-专利许可累计交易接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/cumulativeTransactions/conditions`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/cumulativeTransactions/conditionsPage`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postCumulativeTransaction = (option) => request.post(`/cumulativeTransactions/cumulativeTransaction`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 添加
* * 添加
*/
export const putCumulativeTransaction = (option) => request.put(`/cumulativeTransactions/cumulativeTransaction`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postCumulativeTransactionSelective = (option) => request.post(`/cumulativeTransactions/cumulativeTransactionSelective`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putCumulativeTransactionSelective = (option) => request.put(`/cumulativeTransactions/cumulativeTransactionSelective`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postCumulativeTransactions = (option) => request.post(`/cumulativeTransactions/cumulativeTransactions`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 批量添加
* * 批量添加
*/
export const putCumulativeTransactions = (option) => request.put(`/cumulativeTransactions/cumulativeTransactions`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 根据主键获取CumulativeTransaction
* * 若无，返回null
*/
export const get = (option) => request.get(`/cumulativeTransactions/${option["ctId"]}`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/cumulativeTransactions/${option["ctId"]}`, option)
    


    
/**
* * 概览-中国专利信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postChinaPatentInfo = (option) => request.post(`/chinaPatentInfos/chinaPatentInfo`, option)
    
/**
* * 概览-中国专利信息接口
* * 添加
* * 添加
*/
export const putChinaPatentInfo = (option) => request.put(`/chinaPatentInfos/chinaPatentInfo`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postChinaPatentInfoSelective = (option) => request.post(`/chinaPatentInfos/chinaPatentInfoSelective`, option)
    
/**
* * 概览-中国专利信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putChinaPatentInfoSelective = (option) => request.put(`/chinaPatentInfos/chinaPatentInfoSelective`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postChinaPatentInfos = (option) => request.post(`/chinaPatentInfos/chinaPatentInfos`, option)
    
/**
* * 概览-中国专利信息接口
* * 批量添加
* * 批量添加
*/
export const putChinaPatentInfos = (option) => request.put(`/chinaPatentInfos/chinaPatentInfos`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/chinaPatentInfos/conditions`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/chinaPatentInfos/conditionsPage`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 根据主键获取ChinaPatentInfo
* * 若无，返回null
*/
export const get = (option) => request.get(`/chinaPatentInfos/${option["cpiId"]}`, option)
    
/**
* * 概览-中国专利信息接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/chinaPatentInfos/${option["cpiId"]}`, option)
    


    
/**
* * 概览-中国地图飞线信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postChinaMapFlyline = (option) => request.post(`/chinaMapFlylines/chinaMapFlyline`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 添加
* * 添加
*/
export const putChinaMapFlyline = (option) => request.put(`/chinaMapFlylines/chinaMapFlyline`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postChinaMapFlylineSelective = (option) => request.post(`/chinaMapFlylines/chinaMapFlylineSelective`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putChinaMapFlylineSelective = (option) => request.put(`/chinaMapFlylines/chinaMapFlylineSelective`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postChinaMapFlylines = (option) => request.post(`/chinaMapFlylines/chinaMapFlylines`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 批量添加
* * 批量添加
*/
export const putChinaMapFlylines = (option) => request.put(`/chinaMapFlylines/chinaMapFlylines`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/chinaMapFlylines/conditions`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/chinaMapFlylines/conditionsPage`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 根据主键获取ChinaMapFlyline
* * 若无，返回null
*/
export const get = (option) => request.get(`/chinaMapFlylines/${option["cmfId"]}`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/chinaMapFlylines/${option["cmfId"]}`, option)
    


    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/industrialAllianceEnterpriseRanks/conditions`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/industrialAllianceEnterpriseRanks/conditionsPage`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postIndustrialAllianceEnterpriseRank = (option) => request.post(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRank`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 添加
* * 添加
*/
export const putIndustrialAllianceEnterpriseRank = (option) => request.put(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRank`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postIndustrialAllianceEnterpriseRankSelective = (option) => request.post(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRankSelective`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putIndustrialAllianceEnterpriseRankSelective = (option) => request.put(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRankSelective`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postIndustrialAllianceEnterpriseRanks = (option) => request.post(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRanks`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 批量添加
* * 批量添加
*/
export const putIndustrialAllianceEnterpriseRanks = (option) => request.put(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRanks`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据主键获取IndustrialAllianceEnterpriseRank
* * 若无，返回null
*/
export const get = (option) => request.get(`/industrialAllianceEnterpriseRanks/${option["iaerId"]}`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/industrialAllianceEnterpriseRanks/${option["iaerId"]}`, option)
    


    
/**
* * 概览-代理服务机构专利量排名接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postAgencyRanking = (option) => request.post(`/agencyRankings/agencyRanking`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 添加
* * 添加
*/
export const putAgencyRanking = (option) => request.put(`/agencyRankings/agencyRanking`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postAgencyRankingSelective = (option) => request.post(`/agencyRankings/agencyRankingSelective`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putAgencyRankingSelective = (option) => request.put(`/agencyRankings/agencyRankingSelective`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postAgencyRankings = (option) => request.post(`/agencyRankings/agencyRankings`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 批量添加
* * 批量添加
*/
export const putAgencyRankings = (option) => request.put(`/agencyRankings/agencyRankings`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/agencyRankings/conditions`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/agencyRankings/conditionsPage`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据主键获取AgencyRanking
* * 若无，返回null
*/
export const get = (option) => request.get(`/agencyRankings/${option["arId"]}`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/agencyRankings/${option["arId"]}`, option)
    


    
/**
* * 概览-全球专利信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/globalPatentInfos/conditions`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/globalPatentInfos/conditionsPage`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postGlobalPatentInfo = (option) => request.post(`/globalPatentInfos/globalPatentInfo`, option)
    
/**
* * 概览-全球专利信息接口
* * 添加
* * 添加
*/
export const putGlobalPatentInfo = (option) => request.put(`/globalPatentInfos/globalPatentInfo`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postGlobalPatentInfoSelective = (option) => request.post(`/globalPatentInfos/globalPatentInfoSelective`, option)
    
/**
* * 概览-全球专利信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putGlobalPatentInfoSelective = (option) => request.put(`/globalPatentInfos/globalPatentInfoSelective`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postGlobalPatentInfos = (option) => request.post(`/globalPatentInfos/globalPatentInfos`, option)
    
/**
* * 概览-全球专利信息接口
* * 批量添加
* * 批量添加
*/
export const putGlobalPatentInfos = (option) => request.put(`/globalPatentInfos/globalPatentInfos`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 根据主键获取GlobalPatentInfo
* * 若无，返回null
*/
export const get = (option) => request.get(`/globalPatentInfos/${option["gpiId"]}`, option)
    
/**
* * 概览-全球专利信息接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/globalPatentInfos/${option["gpiId"]}`, option)
    


    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postChinaEuropeComparison = (option) => request.post(`/chinaEuropeComparisons/chinaEuropeComparison`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 添加
* * 添加
*/
export const putChinaEuropeComparison = (option) => request.put(`/chinaEuropeComparisons/chinaEuropeComparison`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postChinaEuropeComparisonSelective = (option) => request.post(`/chinaEuropeComparisons/chinaEuropeComparisonSelective`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putChinaEuropeComparisonSelective = (option) => request.put(`/chinaEuropeComparisons/chinaEuropeComparisonSelective`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postChinaEuropeComparisons = (option) => request.post(`/chinaEuropeComparisons/chinaEuropeComparisons`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 批量添加
* * 批量添加
*/
export const putChinaEuropeComparisons = (option) => request.put(`/chinaEuropeComparisons/chinaEuropeComparisons`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/chinaEuropeComparisons/conditions`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/chinaEuropeComparisons/conditionsPage`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 查询近十年中-欧美专利情况信息
* * 查询近十年中-欧美专利情况信息
*/
export const postQueryDecade = (option) => request.post(`/chinaEuropeComparisons/queryDecade`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据主键获取ChinaEuropeComparison
* * 若无，返回null
*/
export const get = (option) => request.get(`/chinaEuropeComparisons/${option["cecId"]}`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/chinaEuropeComparisons/${option["cecId"]}`, option)
    


    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/patentApplicationInfos/conditions`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/patentApplicationInfos/conditionsPage`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentApplicationInfo = (option) => request.post(`/patentApplicationInfos/patentApplicationInfo`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 添加
* * 添加
*/
export const putPatentApplicationInfo = (option) => request.put(`/patentApplicationInfos/patentApplicationInfo`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentApplicationInfoSelective = (option) => request.post(`/patentApplicationInfos/patentApplicationInfoSelective`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPatentApplicationInfoSelective = (option) => request.put(`/patentApplicationInfos/patentApplicationInfoSelective`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPatentApplicationInfos = (option) => request.post(`/patentApplicationInfos/patentApplicationInfos`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 批量添加
* * 批量添加
*/
export const putPatentApplicationInfos = (option) => request.put(`/patentApplicationInfos/patentApplicationInfos`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据地区获取近十年专利信息
* * 若无，返回null
*/
export const getQueryDecade = (option) => request.get(`/patentApplicationInfos/queryDecade/${option["region"]}`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据地区获取近半年申请专利信息
* * 若无，返回null
*/
export const getQueryHalfYear = (option) => request.get(`/patentApplicationInfos/queryHalfYear/${option["region"]}`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据主键获取PatentApplicationInfo
* * 若无，返回null
*/
export const get = (option) => request.get(`/patentApplicationInfos/${option["paiId"]}`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/patentApplicationInfos/${option["paiId"]}`, option)
    


    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/newEnergyTransactions/conditions`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/newEnergyTransactions/conditionsPage`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postNewEnergyTransaction = (option) => request.post(`/newEnergyTransactions/newEnergyTransaction`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 添加
* * 添加
*/
export const putNewEnergyTransaction = (option) => request.put(`/newEnergyTransactions/newEnergyTransaction`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postNewEnergyTransactionSelective = (option) => request.post(`/newEnergyTransactions/newEnergyTransactionSelective`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putNewEnergyTransactionSelective = (option) => request.put(`/newEnergyTransactions/newEnergyTransactionSelective`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postNewEnergyTransactions = (option) => request.post(`/newEnergyTransactions/newEnergyTransactions`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 批量添加
* * 批量添加
*/
export const putNewEnergyTransactions = (option) => request.put(`/newEnergyTransactions/newEnergyTransactions`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据主键获取NewEnergyTransaction
* * 若无，返回null
*/
export const get = (option) => request.get(`/newEnergyTransactions/${option["netId"]}`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/newEnergyTransactions/${option["netId"]}`, option)
    


    
/**
* * 运营-知识产权交易分类分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/propertyTransactionClassifications/conditions`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/propertyTransactionClassifications/conditionsPage`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPropertyTransactionClassification = (option) => request.post(`/propertyTransactionClassifications/propertyTransactionClassification`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 添加
* * 添加
*/
export const putPropertyTransactionClassification = (option) => request.put(`/propertyTransactionClassifications/propertyTransactionClassification`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPropertyTransactionClassificationSelective = (option) => request.post(`/propertyTransactionClassifications/propertyTransactionClassificationSelective`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPropertyTransactionClassificationSelective = (option) => request.put(`/propertyTransactionClassifications/propertyTransactionClassificationSelective`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPropertyTransactionClassifications = (option) => request.post(`/propertyTransactionClassifications/propertyTransactionClassifications`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 批量添加
* * 批量添加
*/
export const putPropertyTransactionClassifications = (option) => request.put(`/propertyTransactionClassifications/propertyTransactionClassifications`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 根据主键获取PropertyTransactionClassification
* * 若无，返回null
*/
export const get = (option) => request.get(`/propertyTransactionClassifications/${option["ptcId"]}`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/propertyTransactionClassifications/${option["ptcId"]}`, option)
    


    
/**
* * 运营-知识产权交易情况接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/intellectualPropertyTransactions/conditions`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/intellectualPropertyTransactions/conditionsPage`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postIntellectualPropertyTransaction = (option) => request.post(`/intellectualPropertyTransactions/intellectualPropertyTransaction`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 添加
* * 添加
*/
export const putIntellectualPropertyTransaction = (option) => request.put(`/intellectualPropertyTransactions/intellectualPropertyTransaction`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postIntellectualPropertyTransactionSelective = (option) => request.post(`/intellectualPropertyTransactions/intellectualPropertyTransactionSelective`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putIntellectualPropertyTransactionSelective = (option) => request.put(`/intellectualPropertyTransactions/intellectualPropertyTransactionSelective`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postIntellectualPropertyTransactions = (option) => request.post(`/intellectualPropertyTransactions/intellectualPropertyTransactions`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 批量添加
* * 批量添加
*/
export const putIntellectualPropertyTransactions = (option) => request.put(`/intellectualPropertyTransactions/intellectualPropertyTransactions`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 根据主键获取IntellectualPropertyTransaction
* * 若无，返回null
*/
export const get = (option) => request.get(`/intellectualPropertyTransactions/${option["iptId"]}`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/intellectualPropertyTransactions/${option["iptId"]}`, option)
    


    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/transfereeRegionalDistributions/conditions`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/transfereeRegionalDistributions/conditionsPage`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postTransfereeRegionalDistribution = (option) => request.post(`/transfereeRegionalDistributions/transfereeRegionalDistribution`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 添加
* * 添加
*/
export const putTransfereeRegionalDistribution = (option) => request.put(`/transfereeRegionalDistributions/transfereeRegionalDistribution`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postTransfereeRegionalDistributionSelective = (option) => request.post(`/transfereeRegionalDistributions/transfereeRegionalDistributionSelective`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putTransfereeRegionalDistributionSelective = (option) => request.put(`/transfereeRegionalDistributions/transfereeRegionalDistributionSelective`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postTransfereeRegionalDistributions = (option) => request.post(`/transfereeRegionalDistributions/transfereeRegionalDistributions`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 批量添加
* * 批量添加
*/
export const putTransfereeRegionalDistributions = (option) => request.put(`/transfereeRegionalDistributions/transfereeRegionalDistributions`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据主键获取TransfereeRegionalDistribution
* * 若无，返回null
*/
export const get = (option) => request.get(`/transfereeRegionalDistributions/${option["trdId"]}`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/transfereeRegionalDistributions/${option["trdId"]}`, option)
    


    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/enterprisePropertyTransactionRanks/conditions`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/enterprisePropertyTransactionRanks/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postEnterprisePropertyTransactionRank = (option) => request.post(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRank`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 添加
* * 添加
*/
export const putEnterprisePropertyTransactionRank = (option) => request.put(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRank`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postEnterprisePropertyTransactionRankSelective = (option) => request.post(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRankSelective`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putEnterprisePropertyTransactionRankSelective = (option) => request.put(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRankSelective`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postEnterprisePropertyTransactionRanks = (option) => request.post(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRanks`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 批量添加
* * 批量添加
*/
export const putEnterprisePropertyTransactionRanks = (option) => request.put(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRanks`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据主键获取EnterprisePropertyTransactionRank
* * 若无，返回null
*/
export const get = (option) => request.get(`/enterprisePropertyTransactionRanks/${option["eptrId"]}`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/enterprisePropertyTransactionRanks/${option["eptrId"]}`, option)
    


    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/registerAndMatchs/conditions`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/registerAndMatchs/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postRegisterAndMatch = (option) => request.post(`/registerAndMatchs/registerAndMatch`, option)
    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 添加
* * 添加
*/
export const putRegisterAndMatch = (option) => request.put(`/registerAndMatchs/registerAndMatch`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postRegisterAndMatchSelective = (option) => request.post(`/registerAndMatchs/registerAndMatchSelective`, option)
    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putRegisterAndMatchSelective = (option) => request.put(`/registerAndMatchs/registerAndMatchSelective`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postRegisterAndMatchs = (option) => request.post(`/registerAndMatchs/registerAndMatchs`, option)
    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 批量添加
* * 批量添加
*/
export const putRegisterAndMatchs = (option) => request.put(`/registerAndMatchs/registerAndMatchs`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 根据主键获取RegisterAndMatch
* * 若无，返回null
*/
export const get = (option) => request.get(`/registerAndMatchs/${option["ramId"]}`, option)
    
/**
* * 运营和重点项目-意向登记及撮合总量汇总接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/registerAndMatchs/${option["ramId"]}`, option)
    


    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/obligeeTechnicalFieldDistributions/conditions`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/obligeeTechnicalFieldDistributions/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postObligeeTechnicalFieldDistribution = (option) => request.post(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistribution`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 添加
* * 添加
*/
export const putObligeeTechnicalFieldDistribution = (option) => request.put(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistribution`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postObligeeTechnicalFieldDistributionSelective = (option) => request.post(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributionSelective`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putObligeeTechnicalFieldDistributionSelective = (option) => request.put(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributionSelective`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postObligeeTechnicalFieldDistributions = (option) => request.post(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributions`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 批量添加
* * 批量添加
*/
export const putObligeeTechnicalFieldDistributions = (option) => request.put(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributions`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据主键获取ObligeeTechnicalFieldDistribution
* * 若无，返回null
*/
export const get = (option) => request.get(`/obligeeTechnicalFieldDistributions/${option["otfdId"]}`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/obligeeTechnicalFieldDistributions/${option["otfdId"]}`, option)
    


    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/obligeeOrganTypeDistributions/conditions`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/obligeeOrganTypeDistributions/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postObligeeOrganTypeDistribution = (option) => request.post(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistribution`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 添加
* * 添加
*/
export const putObligeeOrganTypeDistribution = (option) => request.put(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistribution`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postObligeeOrganTypeDistributionSelective = (option) => request.post(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributionSelective`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putObligeeOrganTypeDistributionSelective = (option) => request.put(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributionSelective`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postObligeeOrganTypeDistributions = (option) => request.post(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributions`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 批量添加
* * 批量添加
*/
export const putObligeeOrganTypeDistributions = (option) => request.put(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributions`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据主键获取ObligeeOrganTypeDistribution
* * 若无，返回null
*/
export const get = (option) => request.get(`/obligeeOrganTypeDistributions/${option["ootdId"]}`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/obligeeOrganTypeDistributions/${option["ootdId"]}`, option)
    


    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/propertyTransactionDevelopmentTrends/conditions`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/propertyTransactionDevelopmentTrends/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPropertyTransactionDevelopmentTrend = (option) => request.post(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrend`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 添加
* * 添加
*/
export const putPropertyTransactionDevelopmentTrend = (option) => request.put(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrend`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPropertyTransactionDevelopmentTrendSelective = (option) => request.post(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrendSelective`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPropertyTransactionDevelopmentTrendSelective = (option) => request.put(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrendSelective`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPropertyTransactionDevelopmentTrends = (option) => request.post(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrends`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 批量添加
* * 批量添加
*/
export const putPropertyTransactionDevelopmentTrends = (option) => request.put(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrends`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 获取年度知识产权交易量
* * 获取年度知识产权交易量
*/
export const postQuery = (option) => request.post(`/propertyTransactionDevelopmentTrends/query`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 获取月度知识产权交易量
* * 获取月度知识产权交易量
*/
export const postQueryMonth = (option) => request.post(`/propertyTransactionDevelopmentTrends/queryMonth`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据主键获取PropertyTransactionDevelopmentTrend
* * 若无，返回null
*/
export const get = (option) => request.get(`/propertyTransactionDevelopmentTrends/${option["ptdtId"]}`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/propertyTransactionDevelopmentTrends/${option["ptdtId"]}`, option)
    


    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/keyProjectsPatentInfos/conditions`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/keyProjectsPatentInfos/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postKeyProjectsPatentInfo = (option) => request.post(`/keyProjectsPatentInfos/keyProjectsPatentInfo`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 添加
* * 添加
*/
export const putKeyProjectsPatentInfo = (option) => request.put(`/keyProjectsPatentInfos/keyProjectsPatentInfo`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postKeyProjectsPatentInfoSelective = (option) => request.post(`/keyProjectsPatentInfos/keyProjectsPatentInfoSelective`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putKeyProjectsPatentInfoSelective = (option) => request.put(`/keyProjectsPatentInfos/keyProjectsPatentInfoSelective`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postKeyProjectsPatentInfos = (option) => request.post(`/keyProjectsPatentInfos/keyProjectsPatentInfos`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 批量添加
* * 批量添加
*/
export const putKeyProjectsPatentInfos = (option) => request.put(`/keyProjectsPatentInfos/keyProjectsPatentInfos`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据主键获取KeyProjectsPatentInfo
* * 若无，返回null
*/
export const get = (option) => request.get(`/keyProjectsPatentInfos/${option["kppiId"]}`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/keyProjectsPatentInfos/${option["kppiId"]}`, option)
    


    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/patentTechnologys/conditions`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/patentTechnologys/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentTechnology = (option) => request.post(`/patentTechnologys/patentTechnology`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 添加
* * 添加
*/
export const putPatentTechnology = (option) => request.put(`/patentTechnologys/patentTechnology`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentTechnologySelective = (option) => request.post(`/patentTechnologys/patentTechnologySelective`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPatentTechnologySelective = (option) => request.put(`/patentTechnologys/patentTechnologySelective`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPatentTechnologys = (option) => request.post(`/patentTechnologys/patentTechnologys`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 批量添加
* * 批量添加
*/
export const putPatentTechnologys = (option) => request.put(`/patentTechnologys/patentTechnologys`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据主键获取PatentTechnology
* * 若无，返回null
*/
export const get = (option) => request.get(`/patentTechnologys/${option["ptId"]}`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/patentTechnologys/${option["ptId"]}`, option)
    


    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/patentOutputRanks/conditions`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/patentOutputRanks/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentOutputRank = (option) => request.post(`/patentOutputRanks/patentOutputRank`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 添加
* * 添加
*/
export const putPatentOutputRank = (option) => request.put(`/patentOutputRanks/patentOutputRank`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentOutputRankSelective = (option) => request.post(`/patentOutputRanks/patentOutputRankSelective`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPatentOutputRankSelective = (option) => request.put(`/patentOutputRanks/patentOutputRankSelective`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPatentOutputRanks = (option) => request.post(`/patentOutputRanks/patentOutputRanks`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 批量添加
* * 批量添加
*/
export const putPatentOutputRanks = (option) => request.put(`/patentOutputRanks/patentOutputRanks`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据主键获取PatentOutputRank
* * 若无，返回null
*/
export const get = (option) => request.get(`/patentOutputRanks/${option["porId"]}`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/patentOutputRanks/${option["porId"]}`, option)
    


    
/**
* * 重点项目-重点项目专利分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/patentDistributions/conditions`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/patentDistributions/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentDistribution = (option) => request.post(`/patentDistributions/patentDistribution`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 添加
* * 添加
*/
export const putPatentDistribution = (option) => request.put(`/patentDistributions/patentDistribution`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postPatentDistributionSelective = (option) => request.post(`/patentDistributions/patentDistributionSelective`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putPatentDistributionSelective = (option) => request.put(`/patentDistributions/patentDistributionSelective`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postPatentDistributions = (option) => request.post(`/patentDistributions/patentDistributions`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 批量添加
* * 批量添加
*/
export const putPatentDistributions = (option) => request.put(`/patentDistributions/patentDistributions`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 根据主键获取PatentDistribution
* * 若无，返回null
*/
export const get = (option) => request.get(`/patentDistributions/${option["pdId"]}`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/patentDistributions/${option["pdId"]}`, option)
    


    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/keyProjectsPatentOutputs/conditions`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/keyProjectsPatentOutputs/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postKeyProjectsPatentOutput = (option) => request.post(`/keyProjectsPatentOutputs/keyProjectsPatentOutput`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 添加
* * 添加
*/
export const putKeyProjectsPatentOutput = (option) => request.put(`/keyProjectsPatentOutputs/keyProjectsPatentOutput`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postKeyProjectsPatentOutputSelective = (option) => request.post(`/keyProjectsPatentOutputs/keyProjectsPatentOutputSelective`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putKeyProjectsPatentOutputSelective = (option) => request.put(`/keyProjectsPatentOutputs/keyProjectsPatentOutputSelective`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postKeyProjectsPatentOutputs = (option) => request.post(`/keyProjectsPatentOutputs/keyProjectsPatentOutputs`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 批量添加
* * 批量添加
*/
export const putKeyProjectsPatentOutputs = (option) => request.put(`/keyProjectsPatentOutputs/keyProjectsPatentOutputs`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据主键获取KeyProjectsPatentOutput
* * 若无，返回null
*/
export const get = (option) => request.get(`/keyProjectsPatentOutputs/${option["kppoId"]}`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/keyProjectsPatentOutputs/${option["kppoId"]}`, option)
    


    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*/
export const postConditions = (option) => request.post(`/newEnergyPatentDistributions/conditions`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据条件获取分页信息
* * 
*/
export const postConditionsPage = (option) => request.post(`/newEnergyPatentDistributions/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*/
export const postNewEnergyPatentDistribution = (option) => request.post(`/newEnergyPatentDistributions/newEnergyPatentDistribution`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 添加
* * 添加
*/
export const putNewEnergyPatentDistribution = (option) => request.put(`/newEnergyPatentDistributions/newEnergyPatentDistribution`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*/
export const postNewEnergyPatentDistributionSelective = (option) => request.post(`/newEnergyPatentDistributions/newEnergyPatentDistributionSelective`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*/
export const putNewEnergyPatentDistributionSelective = (option) => request.put(`/newEnergyPatentDistributions/newEnergyPatentDistributionSelective`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 批量删除
* * 通过主键列表批量删除
*/
export const postNewEnergyPatentDistributions = (option) => request.post(`/newEnergyPatentDistributions/newEnergyPatentDistributions`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 批量添加
* * 批量添加
*/
export const putNewEnergyPatentDistributions = (option) => request.put(`/newEnergyPatentDistributions/newEnergyPatentDistributions`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据主键获取NewEnergyPatentDistribution
* * 若无，返回null
*/
export const get = (option) => request.get(`/newEnergyPatentDistributions/${option["nepdId"]}`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据主键删除
* * 根据主键删除
*/
export const delete = (option) => request.delete(`/newEnergyPatentDistributions/${option["nepdId"]}`, option)
    

