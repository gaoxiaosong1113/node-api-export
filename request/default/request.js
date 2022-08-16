/*
    项目名称 default
    开发者 name<gaoxiaosong@croot.com,704041637@qq.com>
    部门：
    生成日期 2022-08-16 17:57:44
*/

import request from '@/request.js'

    
/**
* * token鉴权
* * 获取元信息-协同文档
* * 若无，返回null
*
* @fileId {string} fileId
*/
export const getFiles = (option) => request.get(`/files/${option["fileId"]}`, option)
    

    
/**
* * token鉴权
* * 获取当前用户信息
* * 若无，返回null
*

export const getUsersCurrentInfo = (option) => request.get(`/users/current/info`, option)
    


    
/**
* * 产业详览-专利权利人信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @oiId {string} 
* @oiIdLike {string} 
* @oiIdOrderByAsc {boolean} 
* @oiIdOrderByDesc {boolean} 
* @cumulative {string} 
* @cumulativeLike {string} 
* @cumulativeOrderByAsc {boolean} 
* @cumulativeOrderByDesc {boolean} 
* @obligeeNum {string} 
* @obligeeNumLike {string} 
* @obligeeNumOrderByAsc {boolean} 
* @obligeeNumOrderByDesc {boolean} 
* @patentOwnership {string} 
* @patentOwnershipLike {string} 
* @patentOwnershipOrderByAsc {boolean} 
* @patentOwnershipOrderByDesc {boolean} 
* @technicalClassification {string} 
* @technicalClassificationLike {string} 
* @technicalClassificationOrderByAsc {boolean} 
* @technicalClassificationOrderByDesc {boolean} 
*/
export const postObligeeInfosConditions = (option) => request.post(`/obligeeInfos/conditions`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 根据条件获取分页信息
* * 
*
* @obligeeInfoRequest {} obligeeInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postObligeeInfosConditionsPage = (option) => request.post(`/obligeeInfos/conditionsPage`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @obligeeInfo {} obligeeInfo
*/
export const postObligeeInfosObligeeInfo = (option) => request.post(`/obligeeInfos/obligeeInfo`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 添加
* * 添加
*
* @obligeeInfo {} obligeeInfo
*/
export const putObligeeInfosObligeeInfo = (option) => request.put(`/obligeeInfos/obligeeInfo`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @obligeeInfo {} obligeeInfo
*/
export const postObligeeInfosObligeeInfoSelective = (option) => request.post(`/obligeeInfos/obligeeInfoSelective`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @obligeeInfo {} obligeeInfo
*/
export const putObligeeInfosObligeeInfoSelective = (option) => request.put(`/obligeeInfos/obligeeInfoSelective`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postObligeeInfosObligeeInfos = (option) => request.post(`/obligeeInfos/obligeeInfos`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 批量添加
* * 批量添加
*
* @obligeeInfos {} obligeeInfos
*/
export const putObligeeInfosObligeeInfos = (option) => request.put(`/obligeeInfos/obligeeInfos`, option)
    

    
/**
* * 产业详览-专利权利人信息接口
* * 根据主键获取ObligeeInfo
* * 若无，返回null
*
* @oiId {string} oiId
*/
export const getObligeeInfos = (option) => request.get(`/obligeeInfos/${option["oiId"]}`, option)
    
/**
* * 产业详览-专利权利人信息接口
* * 根据主键删除
* * 根据主键删除
*
* @oiId {string} 主键
*/
export const deleteObligeeInfos = (option) => request.delete(`/obligeeInfos/${option["oiId"]}`, option)
    


    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @psiId {string} 
* @psiIdLike {string} 
* @psiIdOrderByAsc {boolean} 
* @psiIdOrderByDesc {boolean} 
* @patentTransfer {string} 
* @patentTransferLike {string} 
* @patentTransferOrderByAsc {boolean} 
* @patentTransferOrderByDesc {boolean} 
* @patentOpenLicense {string} 
* @patentOpenLicenseLike {string} 
* @patentOpenLicenseOrderByAsc {boolean} 
* @patentOpenLicenseOrderByDesc {boolean} 
* @cumulativeAmount {string} 
* @cumulativeAmountLike {string} 
* @cumulativeAmountOrderByAsc {boolean} 
* @cumulativeAmountOrderByDesc {boolean} 
* @averageAmount {string} 
* @averageAmountLike {string} 
* @averageAmountOrderByAsc {boolean} 
* @averageAmountOrderByDesc {boolean} 
* @enterprise {string} 
* @enterpriseLike {string} 
* @enterpriseOrderByAsc {boolean} 
* @enterpriseOrderByDesc {boolean} 
* @allianceEnterprise {string} 
* @allianceEnterpriseLike {string} 
* @allianceEnterpriseOrderByAsc {boolean} 
* @allianceEnterpriseOrderByDesc {boolean} 
* @mechanism {string} 
* @mechanismLike {string} 
* @mechanismOrderByAsc {boolean} 
* @mechanismOrderByDesc {boolean} 
* @effectiveIn {string} 
* @effectiveInLike {string} 
* @effectiveInOrderByAsc {boolean} 
* @effectiveInOrderByDesc {boolean} 
* @inventionAu {string} 
* @inventionAuLike {string} 
* @inventionAuOrderByAsc {boolean} 
* @inventionAuOrderByDesc {boolean} 
* @obligeeNum {string} 
* @obligeeNumLike {string} 
* @obligeeNumOrderByAsc {boolean} 
* @obligeeNumOrderByDesc {boolean} 
* @awardNum {string} 
* @awardNumLike {string} 
* @awardNumOrderByAsc {boolean} 
* @awardNumOrderByDesc {boolean} 
* @highvalueNum {string} 
* @highvalueNumLike {string} 
* @highvalueNumOrderByAsc {boolean} 
* @highvalueNumOrderByDesc {boolean} 
*/
export const postPatentSummaryInfosConditions = (option) => request.post(`/patentSummaryInfos/conditions`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据条件获取分页信息
* * 
*
* @patentSummaryInfoRequest {} patentSummaryInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPatentSummaryInfosConditionsPage = (option) => request.post(`/patentSummaryInfos/conditionsPage`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @patentSummaryInfo {} patentSummaryInfo
*/
export const postPatentSummaryInfosPatentSummaryInfo = (option) => request.post(`/patentSummaryInfos/patentSummaryInfo`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 添加
* * 添加
*
* @patentSummaryInfo {} patentSummaryInfo
*/
export const putPatentSummaryInfosPatentSummaryInfo = (option) => request.put(`/patentSummaryInfos/patentSummaryInfo`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @patentSummaryInfo {} patentSummaryInfo
*/
export const postPatentSummaryInfosPatentSummaryInfoSelective = (option) => request.post(`/patentSummaryInfos/patentSummaryInfoSelective`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @patentSummaryInfo {} patentSummaryInfo
*/
export const putPatentSummaryInfosPatentSummaryInfoSelective = (option) => request.put(`/patentSummaryInfos/patentSummaryInfoSelective`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPatentSummaryInfosPatentSummaryInfos = (option) => request.post(`/patentSummaryInfos/patentSummaryInfos`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 批量添加
* * 批量添加
*
* @patentSummaryInfos {} patentSummaryInfos
*/
export const putPatentSummaryInfosPatentSummaryInfos = (option) => request.put(`/patentSummaryInfos/patentSummaryInfos`, option)
    

    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据主键获取PatentSummaryInfo
* * 若无，返回null
*
* @psiId {string} psiId
*/
export const getPatentSummaryInfos = (option) => request.get(`/patentSummaryInfos/${option["psiId"]}`, option)
    
/**
* * 产业详览-产业专利汇总信息接口
* * 根据主键删除
* * 根据主键删除
*
* @psiId {string} 主键
*/
export const deletePatentSummaryInfos = (option) => request.delete(`/patentSummaryInfos/${option["psiId"]}`, option)
    


    
/**
* * 产业详览-产业专利详情接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @ipiId {string} 
* @ipiIdLike {string} 
* @ipiIdOrderByAsc {boolean} 
* @ipiIdOrderByDesc {boolean} 
* @parentId {string} 
* @parentIdLike {string} 
* @parentIdOrderByAsc {boolean} 
* @parentIdOrderByDesc {boolean} 
* @level {integer} 
* @levelOrderByAsc {boolean} 
* @levelOrderByDesc {boolean} 
* @patentName {string} 
* @patentNameLike {string} 
* @patentNameOrderByAsc {boolean} 
* @patentNameOrderByDesc {boolean} 
* @path {string} 
* @pathLike {string} 
* @pathOrderByAsc {boolean} 
* @pathOrderByDesc {boolean} 
* @module {string} 
* @moduleLike {string} 
* @moduleOrderByAsc {boolean} 
* @moduleOrderByDesc {boolean} 
* @value {integer} 
* @valueOrderByAsc {boolean} 
* @valueOrderByDesc {boolean} 
* @patentAbbreviation {string} 
* @patentAbbreviationLike {string} 
* @patentAbbreviationOrderByAsc {boolean} 
* @patentAbbreviationOrderByDesc {boolean} 
* @jsonData {string} 
* @jsonDataLike {string} 
* @jsonDataOrderByAsc {boolean} 
* @jsonDataOrderByDesc {boolean} 
* @patentQuantity {integer} 
* @patentQuantityOrderByAsc {boolean} 
* @patentQuantityOrderByDesc {boolean} 
* @percentage {string} 
* @percentageLike {string} 
* @percentageOrderByAsc {boolean} 
* @percentageOrderByDesc {boolean} 
* @picturePath {string} 
* @picturePathLike {string} 
* @picturePathOrderByAsc {boolean} 
* @picturePathOrderByDesc {boolean} 
*/
export const postIndustrialPatentInfosConditions = (option) => request.post(`/industrialPatentInfos/conditions`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 根据条件获取分页信息
* * 
*
* @industrialPatentInfoRequest {} industrialPatentInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postIndustrialPatentInfosConditionsPage = (option) => request.post(`/industrialPatentInfos/conditionsPage`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @industrialPatentInfo {} industrialPatentInfo
*/
export const postIndustrialPatentInfosIndustrialPatentInfo = (option) => request.post(`/industrialPatentInfos/industrialPatentInfo`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 添加
* * 添加
*
* @industrialPatentInfo {} industrialPatentInfo
*/
export const putIndustrialPatentInfosIndustrialPatentInfo = (option) => request.put(`/industrialPatentInfos/industrialPatentInfo`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @industrialPatentInfo {} industrialPatentInfo
*/
export const postIndustrialPatentInfosIndustrialPatentInfoSelective = (option) => request.post(`/industrialPatentInfos/industrialPatentInfoSelective`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @industrialPatentInfo {} industrialPatentInfo
*/
export const putIndustrialPatentInfosIndustrialPatentInfoSelective = (option) => request.put(`/industrialPatentInfos/industrialPatentInfoSelective`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postIndustrialPatentInfosIndustrialPatentInfos = (option) => request.post(`/industrialPatentInfos/industrialPatentInfos`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 批量添加
* * 批量添加
*
* @industrialPatentInfos {} industrialPatentInfos
*/
export const putIndustrialPatentInfosIndustrialPatentInfos = (option) => request.put(`/industrialPatentInfos/industrialPatentInfos`, option)
    

    
/**
* * 产业详览-产业专利详情接口
* * 根据主键获取IndustrialPatentInfo
* * 若无，返回null
*
* @ipiId {string} ipiId
*/
export const getIndustrialPatentInfos = (option) => request.get(`/industrialPatentInfos/${option["ipiId"]}`, option)
    
/**
* * 产业详览-产业专利详情接口
* * 根据主键删除
* * 根据主键删除
*
* @ipiId {string} 主键
*/
export const deleteIndustrialPatentInfos = (option) => request.delete(`/industrialPatentInfos/${option["ipiId"]}`, option)
    


    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @eprId {string} 
* @eprIdLike {string} 
* @eprIdOrderByAsc {boolean} 
* @eprIdOrderByDesc {boolean} 
* @enterpriseName {string} 
* @enterpriseNameLike {string} 
* @enterpriseNameOrderByAsc {boolean} 
* @enterpriseNameOrderByDesc {boolean} 
* @patentAuthorization {string} 
* @patentAuthorizationLike {string} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @validPatent {string} 
* @validPatentLike {string} 
* @validPatentOrderByAsc {boolean} 
* @validPatentOrderByDesc {boolean} 
* @readNewPatents {string} 
* @readNewPatentsLike {string} 
* @readNewPatentsOrderByAsc {boolean} 
* @readNewPatentsOrderByDesc {boolean} 
* @cumulativePermitAmount {string} 
* @cumulativePermitAmountLike {string} 
* @cumulativePermitAmountOrderByAsc {boolean} 
* @cumulativePermitAmountOrderByDesc {boolean} 
* @ranking {integer} 
* @rankingOrderByAsc {boolean} 
* @rankingOrderByDesc {boolean} 
* @patentName {string} 
* @patentNameLike {string} 
* @patentNameOrderByAsc {boolean} 
* @patentNameOrderByDesc {boolean} 
* @ipiId {string} 
* @ipiIdLike {string} 
* @ipiIdOrderByAsc {boolean} 
* @ipiIdOrderByDesc {boolean} 
*/
export const postEnterprisePatentRanksConditions = (option) => request.post(`/enterprisePatentRanks/conditions`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据条件获取分页信息
* * 
*
* @enterprisePatentRankRequest {} enterprisePatentRankRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postEnterprisePatentRanksConditionsPage = (option) => request.post(`/enterprisePatentRanks/conditionsPage`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @enterprisePatentRank {} enterprisePatentRank
*/
export const postEnterprisePatentRanksEnterprisePatentRank = (option) => request.post(`/enterprisePatentRanks/enterprisePatentRank`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 添加
* * 添加
*
* @enterprisePatentRank {} enterprisePatentRank
*/
export const putEnterprisePatentRanksEnterprisePatentRank = (option) => request.put(`/enterprisePatentRanks/enterprisePatentRank`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @enterprisePatentRank {} enterprisePatentRank
*/
export const postEnterprisePatentRanksEnterprisePatentRankSelective = (option) => request.post(`/enterprisePatentRanks/enterprisePatentRankSelective`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @enterprisePatentRank {} enterprisePatentRank
*/
export const putEnterprisePatentRanksEnterprisePatentRankSelective = (option) => request.put(`/enterprisePatentRanks/enterprisePatentRankSelective`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postEnterprisePatentRanksEnterprisePatentRanks = (option) => request.post(`/enterprisePatentRanks/enterprisePatentRanks`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 批量添加
* * 批量添加
*
* @enterprisePatentRanks {} enterprisePatentRanks
*/
export const putEnterprisePatentRanksEnterprisePatentRanks = (option) => request.put(`/enterprisePatentRanks/enterprisePatentRanks`, option)
    

    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据主键获取EnterprisePatentRank
* * 若无，返回null
*
* @eprId {string} eprId
*/
export const getEnterprisePatentRanks = (option) => request.get(`/enterprisePatentRanks/${option["eprId"]}`, option)
    
/**
* * 产业详览-龙头企业专利排行榜信息接口
* * 根据主键删除
* * 根据主键删除
*
* @eprId {string} 主键
*/
export const deleteEnterprisePatentRanks = (option) => request.delete(`/enterprisePatentRanks/${option["eprId"]}`, option)
    


    
/**
* * 新-logo墙
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @consortiumName {string} 
* @consortiumNameLike {string} 
* @consortiumNameOrderByAsc {boolean} 
* @consortiumNameOrderByDesc {boolean} 
* @patentNum {string} 
* @patentNumLike {string} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
* @prorortion {string} 
* @prorortionLike {string} 
* @prorortionOrderByAsc {boolean} 
* @prorortionOrderByDesc {boolean} 
*/
export const postCxLogosConditions = (option) => request.post(`/cxLogos/conditions`, option)
    

    
/**
* * 新-logo墙
* * 根据条件获取分页信息
* * 
*
* @cxLogoRequest {} cxLogoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxLogosConditionsPage = (option) => request.post(`/cxLogos/conditionsPage`, option)
    

    
/**
* * 新-logo墙
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxLogo {} cxLogo
*/
export const postCxLogosCxLogo = (option) => request.post(`/cxLogos/cxLogo`, option)
    
/**
* * 新-logo墙
* * 添加
* * 添加
*
* @cxLogo {} cxLogo
*/
export const putCxLogosCxLogo = (option) => request.put(`/cxLogos/cxLogo`, option)
    

    
/**
* * 新-logo墙
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxLogo {} cxLogo
*/
export const postCxLogosCxLogoSelective = (option) => request.post(`/cxLogos/cxLogoSelective`, option)
    
/**
* * 新-logo墙
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxLogo {} cxLogo
*/
export const putCxLogosCxLogoSelective = (option) => request.put(`/cxLogos/cxLogoSelective`, option)
    

    
/**
* * 新-logo墙
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxLogosCxLogos = (option) => request.post(`/cxLogos/cxLogos`, option)
    
/**
* * 新-logo墙
* * 批量添加
* * 批量添加
*
* @cxLogos {} cxLogos
*/
export const putCxLogosCxLogos = (option) => request.put(`/cxLogos/cxLogos`, option)
    

    
/**
* * 新-logo墙
* * 根据主键获取CxLogo
* * 若无，返回null
*
* @id {string} id
*/
export const getCxLogos = (option) => request.get(`/cxLogos/${option["id"]}`, option)
    
/**
* * 新-logo墙
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxLogos = (option) => request.delete(`/cxLogos/${option["id"]}`, option)
    


    
/**
* * 新-专利技术领域分布
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @patentTechnologyName {string} 
* @patentTechnologyNameLike {string} 
* @patentTechnologyNameOrderByAsc {boolean} 
* @patentTechnologyNameOrderByDesc {boolean} 
* @patentNum {integer} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
* @region {string} 
* @regionLike {string} 
* @regionOrderByAsc {boolean} 
* @regionOrderByDesc {boolean} 
*/
export const postCxTechnicalFieldDistributionsConditions = (option) => request.post(`/cxTechnicalFieldDistributions/conditions`, option)
    

    
/**
* * 新-专利技术领域分布
* * 根据条件获取分页信息
* * 
*
* @cxTechnicalFieldDistributionRequest {} cxTechnicalFieldDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxTechnicalFieldDistributionsConditionsPage = (option) => request.post(`/cxTechnicalFieldDistributions/conditionsPage`, option)
    

    
/**
* * 新-专利技术领域分布
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxTechnicalFieldDistribution {} cxTechnicalFieldDistribution
*/
export const postCxTechnicalFieldDistributionsCxTechnicalFieldDistribution = (option) => request.post(`/cxTechnicalFieldDistributions/cxTechnicalFieldDistribution`, option)
    
/**
* * 新-专利技术领域分布
* * 添加
* * 添加
*
* @cxTechnicalFieldDistribution {} cxTechnicalFieldDistribution
*/
export const putCxTechnicalFieldDistributionsCxTechnicalFieldDistribution = (option) => request.put(`/cxTechnicalFieldDistributions/cxTechnicalFieldDistribution`, option)
    

    
/**
* * 新-专利技术领域分布
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxTechnicalFieldDistribution {} cxTechnicalFieldDistribution
*/
export const postCxTechnicalFieldDistributionsCxTechnicalFieldDistributionSelective = (option) => request.post(`/cxTechnicalFieldDistributions/cxTechnicalFieldDistributionSelective`, option)
    
/**
* * 新-专利技术领域分布
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxTechnicalFieldDistribution {} cxTechnicalFieldDistribution
*/
export const putCxTechnicalFieldDistributionsCxTechnicalFieldDistributionSelective = (option) => request.put(`/cxTechnicalFieldDistributions/cxTechnicalFieldDistributionSelective`, option)
    

    
/**
* * 新-专利技术领域分布
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxTechnicalFieldDistributionsCxTechnicalFieldDistributions = (option) => request.post(`/cxTechnicalFieldDistributions/cxTechnicalFieldDistributions`, option)
    
/**
* * 新-专利技术领域分布
* * 批量添加
* * 批量添加
*
* @cxTechnicalFieldDistributions {} cxTechnicalFieldDistributions
*/
export const putCxTechnicalFieldDistributionsCxTechnicalFieldDistributions = (option) => request.put(`/cxTechnicalFieldDistributions/cxTechnicalFieldDistributions`, option)
    

    
/**
* * 新-专利技术领域分布
* * 根据主键获取CxTechnicalFieldDistribution
* * 若无，返回null
*
* @id {string} id
*/
export const getCxTechnicalFieldDistributions = (option) => request.get(`/cxTechnicalFieldDistributions/${option["id"]}`, option)
    
/**
* * 新-专利技术领域分布
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxTechnicalFieldDistributions = (option) => request.delete(`/cxTechnicalFieldDistributions/${option["id"]}`, option)
    


    
/**
* * 新-中国专利信息
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @patentApplication {integer} 
* @patentApplicationOrderByAsc {boolean} 
* @patentApplicationOrderByDesc {boolean} 
* @patentAuthorization {integer} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @validPatent {integer} 
* @validPatentOrderByAsc {boolean} 
* @validPatentOrderByDesc {boolean} 
* @effectiveInvention {integer} 
* @effectiveInventionOrderByAsc {boolean} 
* @effectiveInventionOrderByDesc {boolean} 
* @provinceName {string} 
* @provinceNameLike {string} 
* @provinceNameOrderByAsc {boolean} 
* @provinceNameOrderByDesc {boolean} 
*/
export const postCxChinaPatentInfosConditions = (option) => request.post(`/cxChinaPatentInfos/conditions`, option)
    

    
/**
* * 新-中国专利信息
* * 根据条件获取分页信息
* * 
*
* @cxChinaPatentInfoRequest {} cxChinaPatentInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxChinaPatentInfosConditionsPage = (option) => request.post(`/cxChinaPatentInfos/conditionsPage`, option)
    

    
/**
* * 新-中国专利信息
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxChinaPatentInfo {} cxChinaPatentInfo
*/
export const postCxChinaPatentInfosCxChinaPatentInfo = (option) => request.post(`/cxChinaPatentInfos/cxChinaPatentInfo`, option)
    
/**
* * 新-中国专利信息
* * 添加
* * 添加
*
* @cxChinaPatentInfo {} cxChinaPatentInfo
*/
export const putCxChinaPatentInfosCxChinaPatentInfo = (option) => request.put(`/cxChinaPatentInfos/cxChinaPatentInfo`, option)
    

    
/**
* * 新-中国专利信息
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxChinaPatentInfo {} cxChinaPatentInfo
*/
export const postCxChinaPatentInfosCxChinaPatentInfoSelective = (option) => request.post(`/cxChinaPatentInfos/cxChinaPatentInfoSelective`, option)
    
/**
* * 新-中国专利信息
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxChinaPatentInfo {} cxChinaPatentInfo
*/
export const putCxChinaPatentInfosCxChinaPatentInfoSelective = (option) => request.put(`/cxChinaPatentInfos/cxChinaPatentInfoSelective`, option)
    

    
/**
* * 新-中国专利信息
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxChinaPatentInfosCxChinaPatentInfos = (option) => request.post(`/cxChinaPatentInfos/cxChinaPatentInfos`, option)
    
/**
* * 新-中国专利信息
* * 批量添加
* * 批量添加
*
* @cxChinaPatentInfos {} cxChinaPatentInfos
*/
export const putCxChinaPatentInfosCxChinaPatentInfos = (option) => request.put(`/cxChinaPatentInfos/cxChinaPatentInfos`, option)
    

    
/**
* * 新-中国专利信息
* * 根据主键获取CxChinaPatentInfo
* * 若无，返回null
*
* @id {string} id
*/
export const getCxChinaPatentInfos = (option) => request.get(`/cxChinaPatentInfos/${option["id"]}`, option)
    
/**
* * 新-中国专利信息
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxChinaPatentInfos = (option) => request.delete(`/cxChinaPatentInfos/${option["id"]}`, option)
    


    
/**
* * 新-中国地图飞线信息
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @placeLeave {string} 
* @placeLeaveLike {string} 
* @placeLeaveOrderByAsc {boolean} 
* @placeLeaveOrderByDesc {boolean} 
* @placeGoal {string} 
* @placeGoalLike {string} 
* @placeGoalOrderByAsc {boolean} 
* @placeGoalOrderByDesc {boolean} 
* @transferVolume {string} 
* @transferVolumeLike {string} 
* @transferVolumeOrderByAsc {boolean} 
* @transferVolumeOrderByDesc {boolean} 
* @transferTimeStart {string} 
* @transferTimeEnd {string} 
* @transferTimeOrderByAsc {boolean} 
* @transferTimeOrderByDesc {boolean} 
*/
export const postCxChinaMapFlylinesConditions = (option) => request.post(`/cxChinaMapFlylines/conditions`, option)
    

    
/**
* * 新-中国地图飞线信息
* * 根据条件获取分页信息
* * 
*
* @cxChinaMapFlylineRequest {} cxChinaMapFlylineRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxChinaMapFlylinesConditionsPage = (option) => request.post(`/cxChinaMapFlylines/conditionsPage`, option)
    

    
/**
* * 新-中国地图飞线信息
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxChinaMapFlyline {} cxChinaMapFlyline
*/
export const postCxChinaMapFlylinesCxChinaMapFlyline = (option) => request.post(`/cxChinaMapFlylines/cxChinaMapFlyline`, option)
    
/**
* * 新-中国地图飞线信息
* * 添加
* * 添加
*
* @cxChinaMapFlyline {} cxChinaMapFlyline
*/
export const putCxChinaMapFlylinesCxChinaMapFlyline = (option) => request.put(`/cxChinaMapFlylines/cxChinaMapFlyline`, option)
    

    
/**
* * 新-中国地图飞线信息
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxChinaMapFlyline {} cxChinaMapFlyline
*/
export const postCxChinaMapFlylinesCxChinaMapFlylineSelective = (option) => request.post(`/cxChinaMapFlylines/cxChinaMapFlylineSelective`, option)
    
/**
* * 新-中国地图飞线信息
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxChinaMapFlyline {} cxChinaMapFlyline
*/
export const putCxChinaMapFlylinesCxChinaMapFlylineSelective = (option) => request.put(`/cxChinaMapFlylines/cxChinaMapFlylineSelective`, option)
    

    
/**
* * 新-中国地图飞线信息
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxChinaMapFlylinesCxChinaMapFlylines = (option) => request.post(`/cxChinaMapFlylines/cxChinaMapFlylines`, option)
    
/**
* * 新-中国地图飞线信息
* * 批量添加
* * 批量添加
*
* @cxChinaMapFlylines {} cxChinaMapFlylines
*/
export const putCxChinaMapFlylinesCxChinaMapFlylines = (option) => request.put(`/cxChinaMapFlylines/cxChinaMapFlylines`, option)
    

    
/**
* * 新-中国地图飞线信息
* * 根据主键获取CxChinaMapFlyline
* * 若无，返回null
*
* @id {string} id
*/
export const getCxChinaMapFlylines = (option) => request.get(`/cxChinaMapFlylines/${option["id"]}`, option)
    
/**
* * 新-中国地图飞线信息
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxChinaMapFlylines = (option) => request.delete(`/cxChinaMapFlylines/${option["id"]}`, option)
    


    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @transferQuantity {integer} 
* @transferQuantityOrderByAsc {boolean} 
* @transferQuantityOrderByDesc {boolean} 
* @permitNum {integer} 
* @permitNumOrderByAsc {boolean} 
* @permitNumOrderByDesc {boolean} 
* @transferAmount {string} 
* @transferAmountLike {string} 
* @transferAmountOrderByAsc {boolean} 
* @transferAmountOrderByDesc {boolean} 
* @licenseAmount {string} 
* @licenseAmountLike {string} 
* @licenseAmountOrderByAsc {boolean} 
* @licenseAmountOrderByDesc {boolean} 
*/
export const postCxIndustrialPatentTransfersConditions = (option) => request.post(`/cxIndustrialPatentTransfers/conditions`, option)
    

    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 根据条件获取分页信息
* * 
*
* @cxIndustrialPatentTransferRequest {} cxIndustrialPatentTransferRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxIndustrialPatentTransfersConditionsPage = (option) => request.post(`/cxIndustrialPatentTransfers/conditionsPage`, option)
    

    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxIndustrialPatentTransfer {} cxIndustrialPatentTransfer
*/
export const postCxIndustrialPatentTransfersCxIndustrialPatentTransfer = (option) => request.post(`/cxIndustrialPatentTransfers/cxIndustrialPatentTransfer`, option)
    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 添加
* * 添加
*
* @cxIndustrialPatentTransfer {} cxIndustrialPatentTransfer
*/
export const putCxIndustrialPatentTransfersCxIndustrialPatentTransfer = (option) => request.put(`/cxIndustrialPatentTransfers/cxIndustrialPatentTransfer`, option)
    

    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxIndustrialPatentTransfer {} cxIndustrialPatentTransfer
*/
export const postCxIndustrialPatentTransfersCxIndustrialPatentTransferSelective = (option) => request.post(`/cxIndustrialPatentTransfers/cxIndustrialPatentTransferSelective`, option)
    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxIndustrialPatentTransfer {} cxIndustrialPatentTransfer
*/
export const putCxIndustrialPatentTransfersCxIndustrialPatentTransferSelective = (option) => request.put(`/cxIndustrialPatentTransfers/cxIndustrialPatentTransferSelective`, option)
    

    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxIndustrialPatentTransfersCxIndustrialPatentTransfers = (option) => request.post(`/cxIndustrialPatentTransfers/cxIndustrialPatentTransfers`, option)
    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 批量添加
* * 批量添加
*
* @cxIndustrialPatentTransfers {} cxIndustrialPatentTransfers
*/
export const putCxIndustrialPatentTransfersCxIndustrialPatentTransfers = (option) => request.put(`/cxIndustrialPatentTransfers/cxIndustrialPatentTransfers`, option)
    

    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 根据主键获取CxIndustrialPatentTransfer
* * 若无，返回null
*
* @id {string} id
*/
export const getCxIndustrialPatentTransfers = (option) => request.get(`/cxIndustrialPatentTransfers/${option["id"]}`, option)
    
/**
* * 新-产业专利转让及许可数量及金额趋势
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxIndustrialPatentTransfers = (option) => request.delete(`/cxIndustrialPatentTransfers/${option["id"]}`, option)
    


    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @month {integer} 
* @monthOrderByAsc {boolean} 
* @monthOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @financingAmount {string} 
* @financingAmountLike {string} 
* @financingAmountOrderByAsc {boolean} 
* @financingAmountOrderByDesc {boolean} 
*/
export const postCxIndustrialPledgeFinancingsConditions = (option) => request.post(`/cxIndustrialPledgeFinancings/conditions`, option)
    

    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 根据条件获取分页信息
* * 
*
* @cxIndustrialPledgeFinancingRequest {} cxIndustrialPledgeFinancingRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxIndustrialPledgeFinancingsConditionsPage = (option) => request.post(`/cxIndustrialPledgeFinancings/conditionsPage`, option)
    

    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxIndustrialPledgeFinancing {} cxIndustrialPledgeFinancing
*/
export const postCxIndustrialPledgeFinancingsCxIndustrialPledgeFinancing = (option) => request.post(`/cxIndustrialPledgeFinancings/cxIndustrialPledgeFinancing`, option)
    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 添加
* * 添加
*
* @cxIndustrialPledgeFinancing {} cxIndustrialPledgeFinancing
*/
export const putCxIndustrialPledgeFinancingsCxIndustrialPledgeFinancing = (option) => request.put(`/cxIndustrialPledgeFinancings/cxIndustrialPledgeFinancing`, option)
    

    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxIndustrialPledgeFinancing {} cxIndustrialPledgeFinancing
*/
export const postCxIndustrialPledgeFinancingsCxIndustrialPledgeFinancingSelective = (option) => request.post(`/cxIndustrialPledgeFinancings/cxIndustrialPledgeFinancingSelective`, option)
    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxIndustrialPledgeFinancing {} cxIndustrialPledgeFinancing
*/
export const putCxIndustrialPledgeFinancingsCxIndustrialPledgeFinancingSelective = (option) => request.put(`/cxIndustrialPledgeFinancings/cxIndustrialPledgeFinancingSelective`, option)
    

    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxIndustrialPledgeFinancingsCxIndustrialPledgeFinancings = (option) => request.post(`/cxIndustrialPledgeFinancings/cxIndustrialPledgeFinancings`, option)
    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 批量添加
* * 批量添加
*
* @cxIndustrialPledgeFinancings {} cxIndustrialPledgeFinancings
*/
export const putCxIndustrialPledgeFinancingsCxIndustrialPledgeFinancings = (option) => request.put(`/cxIndustrialPledgeFinancings/cxIndustrialPledgeFinancings`, option)
    

    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 根据主键获取CxIndustrialPledgeFinancing
* * 若无，返回null
*
* @id {string} id
*/
export const getCxIndustrialPledgeFinancings = (option) => request.get(`/cxIndustrialPledgeFinancings/${option["id"]}`, option)
    
/**
* * 新-产业知识产权质押融资额发展趋势
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxIndustrialPledgeFinancings = (option) => request.delete(`/cxIndustrialPledgeFinancings/${option["id"]}`, option)
    


    
/**
* * 新-代理机构Top5
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @agencyName {string} 
* @agencyNameLike {string} 
* @agencyNameOrderByAsc {boolean} 
* @agencyNameOrderByDesc {boolean} 
* @patentNum {integer} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
*/
export const postCxAgencysConditions = (option) => request.post(`/cxAgencys/conditions`, option)
    

    
/**
* * 新-代理机构Top5
* * 根据条件获取分页信息
* * 
*
* @cxAgencyRequest {} cxAgencyRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxAgencysConditionsPage = (option) => request.post(`/cxAgencys/conditionsPage`, option)
    

    
/**
* * 新-代理机构Top5
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxAgency {} cxAgency
*/
export const postCxAgencysCxAgency = (option) => request.post(`/cxAgencys/cxAgency`, option)
    
/**
* * 新-代理机构Top5
* * 添加
* * 添加
*
* @cxAgency {} cxAgency
*/
export const putCxAgencysCxAgency = (option) => request.put(`/cxAgencys/cxAgency`, option)
    

    
/**
* * 新-代理机构Top5
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxAgency {} cxAgency
*/
export const postCxAgencysCxAgencySelective = (option) => request.post(`/cxAgencys/cxAgencySelective`, option)
    
/**
* * 新-代理机构Top5
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxAgency {} cxAgency
*/
export const putCxAgencysCxAgencySelective = (option) => request.put(`/cxAgencys/cxAgencySelective`, option)
    

    
/**
* * 新-代理机构Top5
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxAgencysCxAgencys = (option) => request.post(`/cxAgencys/cxAgencys`, option)
    
/**
* * 新-代理机构Top5
* * 批量添加
* * 批量添加
*
* @cxAgencys {} cxAgencys
*/
export const putCxAgencysCxAgencys = (option) => request.put(`/cxAgencys/cxAgencys`, option)
    

    
/**
* * 新-代理机构Top5
* * 根据主键获取CxAgency
* * 若无，返回null
*
* @id {string} id
*/
export const getCxAgencys = (option) => request.get(`/cxAgencys/${option["id"]}`, option)
    
/**
* * 新-代理机构Top5
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxAgencys = (option) => request.delete(`/cxAgencys/${option["id"]}`, option)
    


    
/**
* * 新-代理机构服务评分（南网）
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @agencyName {string} 
* @agencyNameLike {string} 
* @agencyNameOrderByAsc {boolean} 
* @agencyNameOrderByDesc {boolean} 
* @zhsl {string} 
* @zhslLike {string} 
* @zhslOrderByAsc {boolean} 
* @zhslOrderByDesc {boolean} 
* @dlnl {string} 
* @dlnlLike {string} 
* @dlnlOrderByAsc {boolean} 
* @dlnlOrderByDesc {boolean} 
* @hyjy {string} 
* @hyjyLike {string} 
* @hyjyOrderByAsc {boolean} 
* @hyjyOrderByDesc {boolean} 
* @dlajzl {string} 
* @dlajzlLike {string} 
* @dlajzlOrderByAsc {boolean} 
* @dlajzlOrderByDesc {boolean} 
* @zhnl {string} 
* @zhnlLike {string} 
* @zhnlOrderByAsc {boolean} 
* @zhnlOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postCxAgencyServiceScoresConditions = (option) => request.post(`/cxAgencyServiceScores/conditions`, option)
    

    
/**
* * 新-代理机构服务评分（南网）
* * 根据条件获取分页信息
* * 
*
* @cxAgencyServiceScoreRequest {} cxAgencyServiceScoreRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxAgencyServiceScoresConditionsPage = (option) => request.post(`/cxAgencyServiceScores/conditionsPage`, option)
    

    
/**
* * 新-代理机构服务评分（南网）
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxAgencyServiceScore {} cxAgencyServiceScore
*/
export const postCxAgencyServiceScoresCxAgencyServiceScore = (option) => request.post(`/cxAgencyServiceScores/cxAgencyServiceScore`, option)
    
/**
* * 新-代理机构服务评分（南网）
* * 添加
* * 添加
*
* @cxAgencyServiceScore {} cxAgencyServiceScore
*/
export const putCxAgencyServiceScoresCxAgencyServiceScore = (option) => request.put(`/cxAgencyServiceScores/cxAgencyServiceScore`, option)
    

    
/**
* * 新-代理机构服务评分（南网）
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxAgencyServiceScore {} cxAgencyServiceScore
*/
export const postCxAgencyServiceScoresCxAgencyServiceScoreSelective = (option) => request.post(`/cxAgencyServiceScores/cxAgencyServiceScoreSelective`, option)
    
/**
* * 新-代理机构服务评分（南网）
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxAgencyServiceScore {} cxAgencyServiceScore
*/
export const putCxAgencyServiceScoresCxAgencyServiceScoreSelective = (option) => request.put(`/cxAgencyServiceScores/cxAgencyServiceScoreSelective`, option)
    

    
/**
* * 新-代理机构服务评分（南网）
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxAgencyServiceScoresCxAgencyServiceScores = (option) => request.post(`/cxAgencyServiceScores/cxAgencyServiceScores`, option)
    
/**
* * 新-代理机构服务评分（南网）
* * 批量添加
* * 批量添加
*
* @cxAgencyServiceScores {} cxAgencyServiceScores
*/
export const putCxAgencyServiceScoresCxAgencyServiceScores = (option) => request.put(`/cxAgencyServiceScores/cxAgencyServiceScores`, option)
    

    
/**
* * 新-代理机构服务评分（南网）
* * 根据主键获取CxAgencyServiceScore
* * 若无，返回null
*
* @id {string} id
*/
export const getCxAgencyServiceScores = (option) => request.get(`/cxAgencyServiceScores/${option["id"]}`, option)
    
/**
* * 新-代理机构服务评分（南网）
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxAgencyServiceScores = (option) => request.delete(`/cxAgencyServiceScores/${option["id"]}`, option)
    


    
/**
* * 新-全球专利信息
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @patentApplication {integer} 
* @patentApplicationOrderByAsc {boolean} 
* @patentApplicationOrderByDesc {boolean} 
* @patentAuthorization {integer} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @validPatent {integer} 
* @validPatentOrderByAsc {boolean} 
* @validPatentOrderByDesc {boolean} 
* @effectiveInvention {integer} 
* @effectiveInventionOrderByAsc {boolean} 
* @effectiveInventionOrderByDesc {boolean} 
* @countryName {string} 
* @countryNameLike {string} 
* @countryNameOrderByAsc {boolean} 
* @countryNameOrderByDesc {boolean} 
*/
export const postCxGlobalPatentInfosConditions = (option) => request.post(`/cxGlobalPatentInfos/conditions`, option)
    

    
/**
* * 新-全球专利信息
* * 根据条件获取分页信息
* * 
*
* @cxGlobalPatentInfoRequest {} cxGlobalPatentInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxGlobalPatentInfosConditionsPage = (option) => request.post(`/cxGlobalPatentInfos/conditionsPage`, option)
    

    
/**
* * 新-全球专利信息
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxGlobalPatentInfo {} cxGlobalPatentInfo
*/
export const postCxGlobalPatentInfosCxGlobalPatentInfo = (option) => request.post(`/cxGlobalPatentInfos/cxGlobalPatentInfo`, option)
    
/**
* * 新-全球专利信息
* * 添加
* * 添加
*
* @cxGlobalPatentInfo {} cxGlobalPatentInfo
*/
export const putCxGlobalPatentInfosCxGlobalPatentInfo = (option) => request.put(`/cxGlobalPatentInfos/cxGlobalPatentInfo`, option)
    

    
/**
* * 新-全球专利信息
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxGlobalPatentInfo {} cxGlobalPatentInfo
*/
export const postCxGlobalPatentInfosCxGlobalPatentInfoSelective = (option) => request.post(`/cxGlobalPatentInfos/cxGlobalPatentInfoSelective`, option)
    
/**
* * 新-全球专利信息
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxGlobalPatentInfo {} cxGlobalPatentInfo
*/
export const putCxGlobalPatentInfosCxGlobalPatentInfoSelective = (option) => request.put(`/cxGlobalPatentInfos/cxGlobalPatentInfoSelective`, option)
    

    
/**
* * 新-全球专利信息
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxGlobalPatentInfosCxGlobalPatentInfos = (option) => request.post(`/cxGlobalPatentInfos/cxGlobalPatentInfos`, option)
    
/**
* * 新-全球专利信息
* * 批量添加
* * 批量添加
*
* @cxGlobalPatentInfos {} cxGlobalPatentInfos
*/
export const putCxGlobalPatentInfosCxGlobalPatentInfos = (option) => request.put(`/cxGlobalPatentInfos/cxGlobalPatentInfos`, option)
    

    
/**
* * 新-全球专利信息
* * 根据主键获取CxGlobalPatentInfo
* * 若无，返回null
*
* @id {string} id
*/
export const getCxGlobalPatentInfos = (option) => request.get(`/cxGlobalPatentInfos/${option["id"]}`, option)
    
/**
* * 新-全球专利信息
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxGlobalPatentInfos = (option) => request.delete(`/cxGlobalPatentInfos/${option["id"]}`, option)
    


    
/**
* * 新-南方电网专利被许可单位地区分布
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @region {string} 
* @regionLike {string} 
* @regionOrderByAsc {boolean} 
* @regionOrderByDesc {boolean} 
* @province {string} 
* @provinceLike {string} 
* @provinceOrderByAsc {boolean} 
* @provinceOrderByDesc {boolean} 
* @assigneeNum {string} 
* @assigneeNumLike {string} 
* @assigneeNumOrderByAsc {boolean} 
* @assigneeNumOrderByDesc {boolean} 
*/
export const postCxLicensedRegionalDistributionsConditions = (option) => request.post(`/cxLicensedRegionalDistributions/conditions`, option)
    

    
/**
* * 新-南方电网专利被许可单位地区分布
* * 根据条件获取分页信息
* * 
*
* @cxLicensedRegionalDistributionRequest {} cxLicensedRegionalDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxLicensedRegionalDistributionsConditionsPage = (option) => request.post(`/cxLicensedRegionalDistributions/conditionsPage`, option)
    

    
/**
* * 新-南方电网专利被许可单位地区分布
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxLicensedRegionalDistribution {} cxLicensedRegionalDistribution
*/
export const postCxLicensedRegionalDistributionsCxLicensedRegionalDistribution = (option) => request.post(`/cxLicensedRegionalDistributions/cxLicensedRegionalDistribution`, option)
    
/**
* * 新-南方电网专利被许可单位地区分布
* * 添加
* * 添加
*
* @cxLicensedRegionalDistribution {} cxLicensedRegionalDistribution
*/
export const putCxLicensedRegionalDistributionsCxLicensedRegionalDistribution = (option) => request.put(`/cxLicensedRegionalDistributions/cxLicensedRegionalDistribution`, option)
    

    
/**
* * 新-南方电网专利被许可单位地区分布
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxLicensedRegionalDistribution {} cxLicensedRegionalDistribution
*/
export const postCxLicensedRegionalDistributionsCxLicensedRegionalDistributionSelective = (option) => request.post(`/cxLicensedRegionalDistributions/cxLicensedRegionalDistributionSelective`, option)
    
/**
* * 新-南方电网专利被许可单位地区分布
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxLicensedRegionalDistribution {} cxLicensedRegionalDistribution
*/
export const putCxLicensedRegionalDistributionsCxLicensedRegionalDistributionSelective = (option) => request.put(`/cxLicensedRegionalDistributions/cxLicensedRegionalDistributionSelective`, option)
    

    
/**
* * 新-南方电网专利被许可单位地区分布
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxLicensedRegionalDistributionsCxLicensedRegionalDistributions = (option) => request.post(`/cxLicensedRegionalDistributions/cxLicensedRegionalDistributions`, option)
    
/**
* * 新-南方电网专利被许可单位地区分布
* * 批量添加
* * 批量添加
*
* @cxLicensedRegionalDistributions {} cxLicensedRegionalDistributions
*/
export const putCxLicensedRegionalDistributionsCxLicensedRegionalDistributions = (option) => request.put(`/cxLicensedRegionalDistributions/cxLicensedRegionalDistributions`, option)
    

    
/**
* * 新-南方电网专利被许可单位地区分布
* * 根据主键获取CxLicensedRegionalDistribution
* * 若无，返回null
*
* @id {string} id
*/
export const getCxLicensedRegionalDistributions = (option) => request.get(`/cxLicensedRegionalDistributions/${option["id"]}`, option)
    
/**
* * 新-南方电网专利被许可单位地区分布
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxLicensedRegionalDistributions = (option) => request.delete(`/cxLicensedRegionalDistributions/${option["id"]}`, option)
    


    
/**
* * 新-南方电网对外许可专利数量及金额
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @patentNum {string} 
* @patentNumLike {string} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
* @tradingVolume {string} 
* @tradingVolumeLike {string} 
* @tradingVolumeOrderByAsc {boolean} 
* @tradingVolumeOrderByDesc {boolean} 
*/
export const postCxPatentLicenseInfosConditions = (option) => request.post(`/cxPatentLicenseInfos/conditions`, option)
    

    
/**
* * 新-南方电网对外许可专利数量及金额
* * 根据条件获取分页信息
* * 
*
* @cxPatentLicenseInfoRequest {} cxPatentLicenseInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxPatentLicenseInfosConditionsPage = (option) => request.post(`/cxPatentLicenseInfos/conditionsPage`, option)
    

    
/**
* * 新-南方电网对外许可专利数量及金额
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentLicenseInfo {} cxPatentLicenseInfo
*/
export const postCxPatentLicenseInfosCxPatentLicenseInfo = (option) => request.post(`/cxPatentLicenseInfos/cxPatentLicenseInfo`, option)
    
/**
* * 新-南方电网对外许可专利数量及金额
* * 添加
* * 添加
*
* @cxPatentLicenseInfo {} cxPatentLicenseInfo
*/
export const putCxPatentLicenseInfosCxPatentLicenseInfo = (option) => request.put(`/cxPatentLicenseInfos/cxPatentLicenseInfo`, option)
    

    
/**
* * 新-南方电网对外许可专利数量及金额
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentLicenseInfo {} cxPatentLicenseInfo
*/
export const postCxPatentLicenseInfosCxPatentLicenseInfoSelective = (option) => request.post(`/cxPatentLicenseInfos/cxPatentLicenseInfoSelective`, option)
    
/**
* * 新-南方电网对外许可专利数量及金额
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxPatentLicenseInfo {} cxPatentLicenseInfo
*/
export const putCxPatentLicenseInfosCxPatentLicenseInfoSelective = (option) => request.put(`/cxPatentLicenseInfos/cxPatentLicenseInfoSelective`, option)
    

    
/**
* * 新-南方电网对外许可专利数量及金额
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxPatentLicenseInfosCxPatentLicenseInfos = (option) => request.post(`/cxPatentLicenseInfos/cxPatentLicenseInfos`, option)
    
/**
* * 新-南方电网对外许可专利数量及金额
* * 批量添加
* * 批量添加
*
* @cxPatentLicenseInfos {} cxPatentLicenseInfos
*/
export const putCxPatentLicenseInfosCxPatentLicenseInfos = (option) => request.put(`/cxPatentLicenseInfos/cxPatentLicenseInfos`, option)
    

    
/**
* * 新-南方电网对外许可专利数量及金额
* * 根据主键获取CxPatentLicenseInfo
* * 若无，返回null
*
* @id {string} id
*/
export const getCxPatentLicenseInfos = (option) => request.get(`/cxPatentLicenseInfos/${option["id"]}`, option)
    
/**
* * 新-南方电网对外许可专利数量及金额
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxPatentLicenseInfos = (option) => request.delete(`/cxPatentLicenseInfos/${option["id"]}`, option)
    


    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @ipc {string} 
* @ipcLike {string} 
* @ipcOrderByAsc {boolean} 
* @ipcOrderByDesc {boolean} 
* @publishNum {string} 
* @publishNumLike {string} 
* @publishNumOrderByAsc {boolean} 
* @publishNumOrderByDesc {boolean} 
* @dealNum {string} 
* @dealNumLike {string} 
* @dealNumOrderByAsc {boolean} 
* @dealNumOrderByDesc {boolean} 
*/
export const postCxOpenLicenseTechnicalDistributionsConditions = (option) => request.post(`/cxOpenLicenseTechnicalDistributions/conditions`, option)
    

    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 根据条件获取分页信息
* * 
*
* @cxOpenLicenseTechnicalDistributionRequest {} cxOpenLicenseTechnicalDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxOpenLicenseTechnicalDistributionsConditionsPage = (option) => request.post(`/cxOpenLicenseTechnicalDistributions/conditionsPage`, option)
    

    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxOpenLicenseTechnicalDistribution {} cxOpenLicenseTechnicalDistribution
*/
export const postCxOpenLicenseTechnicalDistributionsCxOpenLicenseTechnicalDistribution = (option) => request.post(`/cxOpenLicenseTechnicalDistributions/cxOpenLicenseTechnicalDistribution`, option)
    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 添加
* * 添加
*
* @cxOpenLicenseTechnicalDistribution {} cxOpenLicenseTechnicalDistribution
*/
export const putCxOpenLicenseTechnicalDistributionsCxOpenLicenseTechnicalDistribution = (option) => request.put(`/cxOpenLicenseTechnicalDistributions/cxOpenLicenseTechnicalDistribution`, option)
    

    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxOpenLicenseTechnicalDistribution {} cxOpenLicenseTechnicalDistribution
*/
export const postCxOpenLicenseTechnicalDistributionsCxOpenLicenseTechnicalDistributionSelective = (option) => request.post(`/cxOpenLicenseTechnicalDistributions/cxOpenLicenseTechnicalDistributionSelective`, option)
    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxOpenLicenseTechnicalDistribution {} cxOpenLicenseTechnicalDistribution
*/
export const putCxOpenLicenseTechnicalDistributionsCxOpenLicenseTechnicalDistributionSelective = (option) => request.put(`/cxOpenLicenseTechnicalDistributions/cxOpenLicenseTechnicalDistributionSelective`, option)
    

    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxOpenLicenseTechnicalDistributionsCxOpenLicenseTechnicalDistributions = (option) => request.post(`/cxOpenLicenseTechnicalDistributions/cxOpenLicenseTechnicalDistributions`, option)
    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 批量添加
* * 批量添加
*
* @cxOpenLicenseTechnicalDistributions {} cxOpenLicenseTechnicalDistributions
*/
export const putCxOpenLicenseTechnicalDistributionsCxOpenLicenseTechnicalDistributions = (option) => request.put(`/cxOpenLicenseTechnicalDistributions/cxOpenLicenseTechnicalDistributions`, option)
    

    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 根据主键获取CxOpenLicenseTechnicalDistribution
* * 若无，返回null
*
* @id {string} id
*/
export const getCxOpenLicenseTechnicalDistributions = (option) => request.get(`/cxOpenLicenseTechnicalDistributions/${option["id"]}`, option)
    
/**
* * 新-南方电网开放许可专利技术领域分布
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxOpenLicenseTechnicalDistributions = (option) => request.delete(`/cxOpenLicenseTechnicalDistributions/${option["id"]}`, option)
    


    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @obligee {string} 
* @obligeeLike {string} 
* @obligeeOrderByAsc {boolean} 
* @obligeeOrderByDesc {boolean} 
* @patentQuantity {integer} 
* @patentQuantityOrderByAsc {boolean} 
* @patentQuantityOrderByDesc {boolean} 
* @technicalClassification1 {string} 
* @technicalClassification1Like {string} 
* @technicalClassification1OrderByAsc {boolean} 
* @technicalClassification1OrderByDesc {boolean} 
* @technicalClassification2 {string} 
* @technicalClassification2Like {string} 
* @technicalClassification2OrderByAsc {boolean} 
* @technicalClassification2OrderByDesc {boolean} 
*/
export const postCxObligeeTechnicalFieldDistributionsConditions = (option) => request.post(`/cxObligeeTechnicalFieldDistributions/conditions`, option)
    

    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 根据条件获取分页信息
* * 
*
* @cxObligeeTechnicalFieldDistributionRequest {} cxObligeeTechnicalFieldDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxObligeeTechnicalFieldDistributionsConditionsPage = (option) => request.post(`/cxObligeeTechnicalFieldDistributions/conditionsPage`, option)
    

    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxObligeeTechnicalFieldDistribution {} cxObligeeTechnicalFieldDistribution
*/
export const postCxObligeeTechnicalFieldDistributionsCxObligeeTechnicalFieldDistribution = (option) => request.post(`/cxObligeeTechnicalFieldDistributions/cxObligeeTechnicalFieldDistribution`, option)
    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 添加
* * 添加
*
* @cxObligeeTechnicalFieldDistribution {} cxObligeeTechnicalFieldDistribution
*/
export const putCxObligeeTechnicalFieldDistributionsCxObligeeTechnicalFieldDistribution = (option) => request.put(`/cxObligeeTechnicalFieldDistributions/cxObligeeTechnicalFieldDistribution`, option)
    

    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxObligeeTechnicalFieldDistribution {} cxObligeeTechnicalFieldDistribution
*/
export const postCxObligeeTechnicalFieldDistributionsCxObligeeTechnicalFieldDistributionSelective = (option) => request.post(`/cxObligeeTechnicalFieldDistributions/cxObligeeTechnicalFieldDistributionSelective`, option)
    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxObligeeTechnicalFieldDistribution {} cxObligeeTechnicalFieldDistribution
*/
export const putCxObligeeTechnicalFieldDistributionsCxObligeeTechnicalFieldDistributionSelective = (option) => request.put(`/cxObligeeTechnicalFieldDistributions/cxObligeeTechnicalFieldDistributionSelective`, option)
    

    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxObligeeTechnicalFieldDistributionsCxObligeeTechnicalFieldDistributions = (option) => request.post(`/cxObligeeTechnicalFieldDistributions/cxObligeeTechnicalFieldDistributions`, option)
    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 批量添加
* * 批量添加
*
* @cxObligeeTechnicalFieldDistributions {} cxObligeeTechnicalFieldDistributions
*/
export const putCxObligeeTechnicalFieldDistributionsCxObligeeTechnicalFieldDistributions = (option) => request.put(`/cxObligeeTechnicalFieldDistributions/cxObligeeTechnicalFieldDistributions`, option)
    

    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 根据主键获取CxObligeeTechnicalFieldDistribution
* * 若无，返回null
*
* @id {string} id
*/
export const getCxObligeeTechnicalFieldDistributions = (option) => request.get(`/cxObligeeTechnicalFieldDistributions/${option["id"]}`, option)
    
/**
* * 新-各技术分类TOP5权利人技术分布
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxObligeeTechnicalFieldDistributions = (option) => request.delete(`/cxObligeeTechnicalFieldDistributions/${option["id"]}`, option)
    


    
/**
* * 新-各技术分类专利总体情况
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @patentApplication {integer} 
* @patentApplicationOrderByAsc {boolean} 
* @patentApplicationOrderByDesc {boolean} 
* @patentAuthorization {integer} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @technicalClassification1 {string} 
* @technicalClassification1Like {string} 
* @technicalClassification1OrderByAsc {boolean} 
* @technicalClassification1OrderByDesc {boolean} 
*/
export const postCxPatentOverallsConditions = (option) => request.post(`/cxPatentOveralls/conditions`, option)
    

    
/**
* * 新-各技术分类专利总体情况
* * 根据条件获取分页信息
* * 
*
* @cxPatentOverallRequest {} cxPatentOverallRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxPatentOverallsConditionsPage = (option) => request.post(`/cxPatentOveralls/conditionsPage`, option)
    

    
/**
* * 新-各技术分类专利总体情况
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentOverall {} cxPatentOverall
*/
export const postCxPatentOverallsCxPatentOverall = (option) => request.post(`/cxPatentOveralls/cxPatentOverall`, option)
    
/**
* * 新-各技术分类专利总体情况
* * 添加
* * 添加
*
* @cxPatentOverall {} cxPatentOverall
*/
export const putCxPatentOverallsCxPatentOverall = (option) => request.put(`/cxPatentOveralls/cxPatentOverall`, option)
    

    
/**
* * 新-各技术分类专利总体情况
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentOverall {} cxPatentOverall
*/
export const postCxPatentOverallsCxPatentOverallSelective = (option) => request.post(`/cxPatentOveralls/cxPatentOverallSelective`, option)
    
/**
* * 新-各技术分类专利总体情况
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxPatentOverall {} cxPatentOverall
*/
export const putCxPatentOverallsCxPatentOverallSelective = (option) => request.put(`/cxPatentOveralls/cxPatentOverallSelective`, option)
    

    
/**
* * 新-各技术分类专利总体情况
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxPatentOverallsCxPatentOveralls = (option) => request.post(`/cxPatentOveralls/cxPatentOveralls`, option)
    
/**
* * 新-各技术分类专利总体情况
* * 批量添加
* * 批量添加
*
* @cxPatentOveralls {} cxPatentOveralls
*/
export const putCxPatentOverallsCxPatentOveralls = (option) => request.put(`/cxPatentOveralls/cxPatentOveralls`, option)
    

    
/**
* * 新-各技术分类专利总体情况
* * 根据主键获取CxPatentOverall
* * 若无，返回null
*
* @id {string} id
*/
export const getCxPatentOveralls = (option) => request.get(`/cxPatentOveralls/${option["id"]}`, option)
    
/**
* * 新-各技术分类专利总体情况
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxPatentOveralls = (option) => request.delete(`/cxPatentOveralls/${option["id"]}`, option)
    


    
/**
* * 新-各技术分类专利类型分布
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @technicalClassification {string} 
* @technicalClassificationLike {string} 
* @technicalClassificationOrderByAsc {boolean} 
* @technicalClassificationOrderByDesc {boolean} 
* @level {string} 
* @levelLike {string} 
* @levelOrderByAsc {boolean} 
* @levelOrderByDesc {boolean} 
* @patentQuantity {string} 
* @patentQuantityLike {string} 
* @patentQuantityOrderByAsc {boolean} 
* @patentQuantityOrderByDesc {boolean} 
* @technicalClassification1 {string} 
* @technicalClassification1Like {string} 
* @technicalClassification1OrderByAsc {boolean} 
* @technicalClassification1OrderByDesc {boolean} 
*/
export const postCxPatentTypeDistributionsConditions = (option) => request.post(`/cxPatentTypeDistributions/conditions`, option)
    

    
/**
* * 新-各技术分类专利类型分布
* * 根据条件获取分页信息
* * 
*
* @cxPatentTypeDistributionRequest {} cxPatentTypeDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxPatentTypeDistributionsConditionsPage = (option) => request.post(`/cxPatentTypeDistributions/conditionsPage`, option)
    

    
/**
* * 新-各技术分类专利类型分布
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentTypeDistribution {} cxPatentTypeDistribution
*/
export const postCxPatentTypeDistributionsCxPatentTypeDistribution = (option) => request.post(`/cxPatentTypeDistributions/cxPatentTypeDistribution`, option)
    
/**
* * 新-各技术分类专利类型分布
* * 添加
* * 添加
*
* @cxPatentTypeDistribution {} cxPatentTypeDistribution
*/
export const putCxPatentTypeDistributionsCxPatentTypeDistribution = (option) => request.put(`/cxPatentTypeDistributions/cxPatentTypeDistribution`, option)
    

    
/**
* * 新-各技术分类专利类型分布
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentTypeDistribution {} cxPatentTypeDistribution
*/
export const postCxPatentTypeDistributionsCxPatentTypeDistributionSelective = (option) => request.post(`/cxPatentTypeDistributions/cxPatentTypeDistributionSelective`, option)
    
/**
* * 新-各技术分类专利类型分布
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxPatentTypeDistribution {} cxPatentTypeDistribution
*/
export const putCxPatentTypeDistributionsCxPatentTypeDistributionSelective = (option) => request.put(`/cxPatentTypeDistributions/cxPatentTypeDistributionSelective`, option)
    

    
/**
* * 新-各技术分类专利类型分布
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxPatentTypeDistributionsCxPatentTypeDistributions = (option) => request.post(`/cxPatentTypeDistributions/cxPatentTypeDistributions`, option)
    
/**
* * 新-各技术分类专利类型分布
* * 批量添加
* * 批量添加
*
* @cxPatentTypeDistributions {} cxPatentTypeDistributions
*/
export const putCxPatentTypeDistributionsCxPatentTypeDistributions = (option) => request.put(`/cxPatentTypeDistributions/cxPatentTypeDistributions`, option)
    

    
/**
* * 新-各技术分类专利类型分布
* * 根据主键获取CxPatentTypeDistribution
* * 若无，返回null
*
* @id {string} id
*/
export const getCxPatentTypeDistributions = (option) => request.get(`/cxPatentTypeDistributions/${option["id"]}`, option)
    
/**
* * 新-各技术分类专利类型分布
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxPatentTypeDistributions = (option) => request.delete(`/cxPatentTypeDistributions/${option["id"]}`, option)
    


    
/**
* * 新-各技术分类图
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @parentId {string} 
* @parentIdLike {string} 
* @parentIdOrderByAsc {boolean} 
* @parentIdOrderByDesc {boolean} 
* @level {integer} 
* @levelOrderByAsc {boolean} 
* @levelOrderByDesc {boolean} 
* @technicalClassification {string} 
* @technicalClassificationLike {string} 
* @technicalClassificationOrderByAsc {boolean} 
* @technicalClassificationOrderByDesc {boolean} 
* @technicalClassification1 {string} 
* @technicalClassification1Like {string} 
* @technicalClassification1OrderByAsc {boolean} 
* @technicalClassification1OrderByDesc {boolean} 
* @value {integer} 
* @valueOrderByAsc {boolean} 
* @valueOrderByDesc {boolean} 
* @patentQuantity {integer} 
* @patentQuantityOrderByAsc {boolean} 
* @patentQuantityOrderByDesc {boolean} 
* @percentage {string} 
* @percentageLike {string} 
* @percentageOrderByAsc {boolean} 
* @percentageOrderByDesc {boolean} 
*/
export const postCxTechnicalClassificationsConditions = (option) => request.post(`/cxTechnicalClassifications/conditions`, option)
    

    
/**
* * 新-各技术分类图
* * 根据条件获取分页信息
* * 
*
* @cxTechnicalClassificationRequest {} cxTechnicalClassificationRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxTechnicalClassificationsConditionsPage = (option) => request.post(`/cxTechnicalClassifications/conditionsPage`, option)
    

    
/**
* * 新-各技术分类图
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxTechnicalClassification {} cxTechnicalClassification
*/
export const postCxTechnicalClassificationsCxTechnicalClassification = (option) => request.post(`/cxTechnicalClassifications/cxTechnicalClassification`, option)
    
/**
* * 新-各技术分类图
* * 添加
* * 添加
*
* @cxTechnicalClassification {} cxTechnicalClassification
*/
export const putCxTechnicalClassificationsCxTechnicalClassification = (option) => request.put(`/cxTechnicalClassifications/cxTechnicalClassification`, option)
    

    
/**
* * 新-各技术分类图
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxTechnicalClassification {} cxTechnicalClassification
*/
export const postCxTechnicalClassificationsCxTechnicalClassificationSelective = (option) => request.post(`/cxTechnicalClassifications/cxTechnicalClassificationSelective`, option)
    
/**
* * 新-各技术分类图
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxTechnicalClassification {} cxTechnicalClassification
*/
export const putCxTechnicalClassificationsCxTechnicalClassificationSelective = (option) => request.put(`/cxTechnicalClassifications/cxTechnicalClassificationSelective`, option)
    

    
/**
* * 新-各技术分类图
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxTechnicalClassificationsCxTechnicalClassifications = (option) => request.post(`/cxTechnicalClassifications/cxTechnicalClassifications`, option)
    
/**
* * 新-各技术分类图
* * 批量添加
* * 批量添加
*
* @cxTechnicalClassifications {} cxTechnicalClassifications
*/
export const putCxTechnicalClassificationsCxTechnicalClassifications = (option) => request.put(`/cxTechnicalClassifications/cxTechnicalClassifications`, option)
    

    
/**
* * 新-各技术分类图
* * 根据主键获取CxTechnicalClassification
* * 若无，返回null
*
* @id {string} id
*/
export const getCxTechnicalClassifications = (option) => request.get(`/cxTechnicalClassifications/${option["id"]}`, option)
    
/**
* * 新-各技术分类图
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxTechnicalClassifications = (option) => request.delete(`/cxTechnicalClassifications/${option["id"]}`, option)
    


    
/**
* * 新-各技术分类权利人有效专利量排行
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @enterpriseName {string} 
* @enterpriseNameLike {string} 
* @enterpriseNameOrderByAsc {boolean} 
* @enterpriseNameOrderByDesc {boolean} 
* @patentQuantity {string} 
* @patentQuantityLike {string} 
* @patentQuantityOrderByAsc {boolean} 
* @patentQuantityOrderByDesc {boolean} 
* @technicalClassification1 {string} 
* @technicalClassification1Like {string} 
* @technicalClassification1OrderByAsc {boolean} 
* @technicalClassification1OrderByDesc {boolean} 
* @obligeeType {string} 
* @obligeeTypeLike {string} 
* @obligeeTypeOrderByAsc {boolean} 
* @obligeeTypeOrderByDesc {boolean} 
* @patentApplication {string} 
* @patentApplicationLike {string} 
* @patentApplicationOrderByAsc {boolean} 
* @patentApplicationOrderByDesc {boolean} 
* @patentAuthorization {string} 
* @patentAuthorizationLike {string} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postCxObligeePatentVolumesConditions = (option) => request.post(`/cxObligeePatentVolumes/conditions`, option)
    

    
/**
* * 新-各技术分类权利人有效专利量排行
* * 根据条件获取分页信息
* * 
*
* @cxObligeePatentVolumeRequest {} cxObligeePatentVolumeRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxObligeePatentVolumesConditionsPage = (option) => request.post(`/cxObligeePatentVolumes/conditionsPage`, option)
    

    
/**
* * 新-各技术分类权利人有效专利量排行
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxObligeePatentVolume {} cxObligeePatentVolume
*/
export const postCxObligeePatentVolumesCxObligeePatentVolume = (option) => request.post(`/cxObligeePatentVolumes/cxObligeePatentVolume`, option)
    
/**
* * 新-各技术分类权利人有效专利量排行
* * 添加
* * 添加
*
* @cxObligeePatentVolume {} cxObligeePatentVolume
*/
export const putCxObligeePatentVolumesCxObligeePatentVolume = (option) => request.put(`/cxObligeePatentVolumes/cxObligeePatentVolume`, option)
    

    
/**
* * 新-各技术分类权利人有效专利量排行
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxObligeePatentVolume {} cxObligeePatentVolume
*/
export const postCxObligeePatentVolumesCxObligeePatentVolumeSelective = (option) => request.post(`/cxObligeePatentVolumes/cxObligeePatentVolumeSelective`, option)
    
/**
* * 新-各技术分类权利人有效专利量排行
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxObligeePatentVolume {} cxObligeePatentVolume
*/
export const putCxObligeePatentVolumesCxObligeePatentVolumeSelective = (option) => request.put(`/cxObligeePatentVolumes/cxObligeePatentVolumeSelective`, option)
    

    
/**
* * 新-各技术分类权利人有效专利量排行
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxObligeePatentVolumesCxObligeePatentVolumes = (option) => request.post(`/cxObligeePatentVolumes/cxObligeePatentVolumes`, option)
    
/**
* * 新-各技术分类权利人有效专利量排行
* * 批量添加
* * 批量添加
*
* @cxObligeePatentVolumes {} cxObligeePatentVolumes
*/
export const putCxObligeePatentVolumesCxObligeePatentVolumes = (option) => request.put(`/cxObligeePatentVolumes/cxObligeePatentVolumes`, option)
    

    
/**
* * 新-各技术分类权利人有效专利量排行
* * 根据主键获取CxObligeePatentVolume
* * 若无，返回null
*
* @id {string} id
*/
export const getCxObligeePatentVolumes = (option) => request.get(`/cxObligeePatentVolumes/${option["id"]}`, option)
    
/**
* * 新-各技术分类权利人有效专利量排行
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxObligeePatentVolumes = (option) => request.delete(`/cxObligeePatentVolumes/${option["id"]}`, option)
    


    
/**
* * 新-各技术分类龙头企业授权量排行
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @enterpriseName {string} 
* @enterpriseNameLike {string} 
* @enterpriseNameOrderByAsc {boolean} 
* @enterpriseNameOrderByDesc {boolean} 
* @patentAuthorization {integer} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @technicalClassification1 {string} 
* @technicalClassification1Like {string} 
* @technicalClassification1OrderByAsc {boolean} 
* @technicalClassification1OrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postCxEnterprisePatentRanksConditions = (option) => request.post(`/cxEnterprisePatentRanks/conditions`, option)
    

    
/**
* * 新-各技术分类龙头企业授权量排行
* * 根据条件获取分页信息
* * 
*
* @cxEnterprisePatentRankRequest {} cxEnterprisePatentRankRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxEnterprisePatentRanksConditionsPage = (option) => request.post(`/cxEnterprisePatentRanks/conditionsPage`, option)
    

    
/**
* * 新-各技术分类龙头企业授权量排行
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxEnterprisePatentRank {} cxEnterprisePatentRank
*/
export const postCxEnterprisePatentRanksCxEnterprisePatentRank = (option) => request.post(`/cxEnterprisePatentRanks/cxEnterprisePatentRank`, option)
    
/**
* * 新-各技术分类龙头企业授权量排行
* * 添加
* * 添加
*
* @cxEnterprisePatentRank {} cxEnterprisePatentRank
*/
export const putCxEnterprisePatentRanksCxEnterprisePatentRank = (option) => request.put(`/cxEnterprisePatentRanks/cxEnterprisePatentRank`, option)
    

    
/**
* * 新-各技术分类龙头企业授权量排行
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxEnterprisePatentRank {} cxEnterprisePatentRank
*/
export const postCxEnterprisePatentRanksCxEnterprisePatentRankSelective = (option) => request.post(`/cxEnterprisePatentRanks/cxEnterprisePatentRankSelective`, option)
    
/**
* * 新-各技术分类龙头企业授权量排行
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxEnterprisePatentRank {} cxEnterprisePatentRank
*/
export const putCxEnterprisePatentRanksCxEnterprisePatentRankSelective = (option) => request.put(`/cxEnterprisePatentRanks/cxEnterprisePatentRankSelective`, option)
    

    
/**
* * 新-各技术分类龙头企业授权量排行
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxEnterprisePatentRanksCxEnterprisePatentRanks = (option) => request.post(`/cxEnterprisePatentRanks/cxEnterprisePatentRanks`, option)
    
/**
* * 新-各技术分类龙头企业授权量排行
* * 批量添加
* * 批量添加
*
* @cxEnterprisePatentRanks {} cxEnterprisePatentRanks
*/
export const putCxEnterprisePatentRanksCxEnterprisePatentRanks = (option) => request.put(`/cxEnterprisePatentRanks/cxEnterprisePatentRanks`, option)
    

    
/**
* * 新-各技术分类龙头企业授权量排行
* * 根据主键获取CxEnterprisePatentRank
* * 若无，返回null
*
* @id {string} id
*/
export const getCxEnterprisePatentRanks = (option) => request.get(`/cxEnterprisePatentRanks/${option["id"]}`, option)
    
/**
* * 新-各技术分类龙头企业授权量排行
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxEnterprisePatentRanks = (option) => request.delete(`/cxEnterprisePatentRanks/${option["id"]}`, option)
    


    
/**
* * 新-开放许可专利交易额分布
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @tradingVolumeRange {string} 
* @tradingVolumeRangeLike {string} 
* @tradingVolumeRangeOrderByAsc {boolean} 
* @tradingVolumeRangeOrderByDesc {boolean} 
* @permitNum {integer} 
* @permitNumOrderByAsc {boolean} 
* @permitNumOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postCxOpeningPermitTransactionsConditions = (option) => request.post(`/cxOpeningPermitTransactions/conditions`, option)
    

    
/**
* * 新-开放许可专利交易额分布
* * 根据条件获取分页信息
* * 
*
* @cxOpeningPermitTransactionRequest {} cxOpeningPermitTransactionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxOpeningPermitTransactionsConditionsPage = (option) => request.post(`/cxOpeningPermitTransactions/conditionsPage`, option)
    

    
/**
* * 新-开放许可专利交易额分布
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxOpeningPermitTransaction {} cxOpeningPermitTransaction
*/
export const postCxOpeningPermitTransactionsCxOpeningPermitTransaction = (option) => request.post(`/cxOpeningPermitTransactions/cxOpeningPermitTransaction`, option)
    
/**
* * 新-开放许可专利交易额分布
* * 添加
* * 添加
*
* @cxOpeningPermitTransaction {} cxOpeningPermitTransaction
*/
export const putCxOpeningPermitTransactionsCxOpeningPermitTransaction = (option) => request.put(`/cxOpeningPermitTransactions/cxOpeningPermitTransaction`, option)
    

    
/**
* * 新-开放许可专利交易额分布
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxOpeningPermitTransaction {} cxOpeningPermitTransaction
*/
export const postCxOpeningPermitTransactionsCxOpeningPermitTransactionSelective = (option) => request.post(`/cxOpeningPermitTransactions/cxOpeningPermitTransactionSelective`, option)
    
/**
* * 新-开放许可专利交易额分布
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxOpeningPermitTransaction {} cxOpeningPermitTransaction
*/
export const putCxOpeningPermitTransactionsCxOpeningPermitTransactionSelective = (option) => request.put(`/cxOpeningPermitTransactions/cxOpeningPermitTransactionSelective`, option)
    

    
/**
* * 新-开放许可专利交易额分布
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxOpeningPermitTransactionsCxOpeningPermitTransactions = (option) => request.post(`/cxOpeningPermitTransactions/cxOpeningPermitTransactions`, option)
    
/**
* * 新-开放许可专利交易额分布
* * 批量添加
* * 批量添加
*
* @cxOpeningPermitTransactions {} cxOpeningPermitTransactions
*/
export const putCxOpeningPermitTransactionsCxOpeningPermitTransactions = (option) => request.put(`/cxOpeningPermitTransactions/cxOpeningPermitTransactions`, option)
    

    
/**
* * 新-开放许可专利交易额分布
* * 根据主键获取CxOpeningPermitTransaction
* * 若无，返回null
*
* @id {string} id
*/
export const getCxOpeningPermitTransactions = (option) => request.get(`/cxOpeningPermitTransactions/${option["id"]}`, option)
    
/**
* * 新-开放许可专利交易额分布
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxOpeningPermitTransactions = (option) => request.delete(`/cxOpeningPermitTransactions/${option["id"]}`, option)
    


    
/**
* * 新-知识产权交易发展趋势
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @tradingVolume {integer} 
* @tradingVolumeOrderByAsc {boolean} 
* @tradingVolumeOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @month {integer} 
* @monthOrderByAsc {boolean} 
* @monthOrderByDesc {boolean} 
* @dateStart {string} 
* @dateEnd {string} 
* @dateOrderByAsc {boolean} 
* @dateOrderByDesc {boolean} 
*/
export const postCxPropertyTransactionDevelopmentTrendsConditions = (option) => request.post(`/cxPropertyTransactionDevelopmentTrends/conditions`, option)
    

    
/**
* * 新-知识产权交易发展趋势
* * 根据条件获取分页信息
* * 
*
* @cxPropertyTransactionDevelopmentTrendRequest {} cxPropertyTransactionDevelopmentTrendRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxPropertyTransactionDevelopmentTrendsConditionsPage = (option) => request.post(`/cxPropertyTransactionDevelopmentTrends/conditionsPage`, option)
    

    
/**
* * 新-知识产权交易发展趋势
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxPropertyTransactionDevelopmentTrend {} cxPropertyTransactionDevelopmentTrend
*/
export const postCxPropertyTransactionDevelopmentTrendsCxPropertyTransactionDevelopmentTrend = (option) => request.post(`/cxPropertyTransactionDevelopmentTrends/cxPropertyTransactionDevelopmentTrend`, option)
    
/**
* * 新-知识产权交易发展趋势
* * 添加
* * 添加
*
* @cxPropertyTransactionDevelopmentTrend {} cxPropertyTransactionDevelopmentTrend
*/
export const putCxPropertyTransactionDevelopmentTrendsCxPropertyTransactionDevelopmentTrend = (option) => request.put(`/cxPropertyTransactionDevelopmentTrends/cxPropertyTransactionDevelopmentTrend`, option)
    

    
/**
* * 新-知识产权交易发展趋势
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxPropertyTransactionDevelopmentTrend {} cxPropertyTransactionDevelopmentTrend
*/
export const postCxPropertyTransactionDevelopmentTrendsCxPropertyTransactionDevelopmentTrendSelective = (option) => request.post(`/cxPropertyTransactionDevelopmentTrends/cxPropertyTransactionDevelopmentTrendSelective`, option)
    
/**
* * 新-知识产权交易发展趋势
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxPropertyTransactionDevelopmentTrend {} cxPropertyTransactionDevelopmentTrend
*/
export const putCxPropertyTransactionDevelopmentTrendsCxPropertyTransactionDevelopmentTrendSelective = (option) => request.put(`/cxPropertyTransactionDevelopmentTrends/cxPropertyTransactionDevelopmentTrendSelective`, option)
    

    
/**
* * 新-知识产权交易发展趋势
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxPropertyTransactionDevelopmentTrendsCxPropertyTransactionDevelopmentTrends = (option) => request.post(`/cxPropertyTransactionDevelopmentTrends/cxPropertyTransactionDevelopmentTrends`, option)
    
/**
* * 新-知识产权交易发展趋势
* * 批量添加
* * 批量添加
*
* @cxPropertyTransactionDevelopmentTrends {} cxPropertyTransactionDevelopmentTrends
*/
export const putCxPropertyTransactionDevelopmentTrendsCxPropertyTransactionDevelopmentTrends = (option) => request.put(`/cxPropertyTransactionDevelopmentTrends/cxPropertyTransactionDevelopmentTrends`, option)
    

    
/**
* * 新-知识产权交易发展趋势
* * 根据主键获取CxPropertyTransactionDevelopmentTrend
* * 若无，返回null
*
* @id {string} id
*/
export const getCxPropertyTransactionDevelopmentTrends = (option) => request.get(`/cxPropertyTransactionDevelopmentTrends/${option["id"]}`, option)
    
/**
* * 新-知识产权交易发展趋势
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxPropertyTransactionDevelopmentTrends = (option) => request.delete(`/cxPropertyTransactionDevelopmentTrends/${option["id"]}`, option)
    


    
/**
* * 新-知识产权交易额分布
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @tradingVolumeRange {string} 
* @tradingVolumeRangeLike {string} 
* @tradingVolumeRangeOrderByAsc {boolean} 
* @tradingVolumeRangeOrderByDesc {boolean} 
* @patentNum {integer} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postCxIntellectualPropertyDistributionsConditions = (option) => request.post(`/cxIntellectualPropertyDistributions/conditions`, option)
    

    
/**
* * 新-知识产权交易额分布
* * 根据条件获取分页信息
* * 
*
* @cxIntellectualPropertyDistributionRequest {} cxIntellectualPropertyDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxIntellectualPropertyDistributionsConditionsPage = (option) => request.post(`/cxIntellectualPropertyDistributions/conditionsPage`, option)
    

    
/**
* * 新-知识产权交易额分布
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxIntellectualPropertyDistribution {} cxIntellectualPropertyDistribution
*/
export const postCxIntellectualPropertyDistributionsCxIntellectualPropertyDistribution = (option) => request.post(`/cxIntellectualPropertyDistributions/cxIntellectualPropertyDistribution`, option)
    
/**
* * 新-知识产权交易额分布
* * 添加
* * 添加
*
* @cxIntellectualPropertyDistribution {} cxIntellectualPropertyDistribution
*/
export const putCxIntellectualPropertyDistributionsCxIntellectualPropertyDistribution = (option) => request.put(`/cxIntellectualPropertyDistributions/cxIntellectualPropertyDistribution`, option)
    

    
/**
* * 新-知识产权交易额分布
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxIntellectualPropertyDistribution {} cxIntellectualPropertyDistribution
*/
export const postCxIntellectualPropertyDistributionsCxIntellectualPropertyDistributionSelective = (option) => request.post(`/cxIntellectualPropertyDistributions/cxIntellectualPropertyDistributionSelective`, option)
    
/**
* * 新-知识产权交易额分布
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxIntellectualPropertyDistribution {} cxIntellectualPropertyDistribution
*/
export const putCxIntellectualPropertyDistributionsCxIntellectualPropertyDistributionSelective = (option) => request.put(`/cxIntellectualPropertyDistributions/cxIntellectualPropertyDistributionSelective`, option)
    

    
/**
* * 新-知识产权交易额分布
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxIntellectualPropertyDistributionsCxIntellectualPropertyDistributions = (option) => request.post(`/cxIntellectualPropertyDistributions/cxIntellectualPropertyDistributions`, option)
    
/**
* * 新-知识产权交易额分布
* * 批量添加
* * 批量添加
*
* @cxIntellectualPropertyDistributions {} cxIntellectualPropertyDistributions
*/
export const putCxIntellectualPropertyDistributionsCxIntellectualPropertyDistributions = (option) => request.put(`/cxIntellectualPropertyDistributions/cxIntellectualPropertyDistributions`, option)
    

    
/**
* * 新-知识产权交易额分布
* * 根据主键获取CxIntellectualPropertyDistribution
* * 若无，返回null
*
* @id {string} id
*/
export const getCxIntellectualPropertyDistributions = (option) => request.get(`/cxIntellectualPropertyDistributions/${option["id"]}`, option)
    
/**
* * 新-知识产权交易额分布
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxIntellectualPropertyDistributions = (option) => request.delete(`/cxIntellectualPropertyDistributions/${option["id"]}`, option)
    


    
/**
* * 新-联合体单位专利Top10
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
* @consortiumName {string} 
* @consortiumNameLike {string} 
* @consortiumNameOrderByAsc {boolean} 
* @consortiumNameOrderByDesc {boolean} 
* @patentNum {integer} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
*/
export const postCxConsortiumPatentsConditions = (option) => request.post(`/cxConsortiumPatents/conditions`, option)
    

    
/**
* * 新-联合体单位专利Top10
* * 根据条件获取分页信息
* * 
*
* @cxConsortiumPatentRequest {} cxConsortiumPatentRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxConsortiumPatentsConditionsPage = (option) => request.post(`/cxConsortiumPatents/conditionsPage`, option)
    

    
/**
* * 新-联合体单位专利Top10
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxConsortiumPatent {} cxConsortiumPatent
*/
export const postCxConsortiumPatentsCxConsortiumPatent = (option) => request.post(`/cxConsortiumPatents/cxConsortiumPatent`, option)
    
/**
* * 新-联合体单位专利Top10
* * 添加
* * 添加
*
* @cxConsortiumPatent {} cxConsortiumPatent
*/
export const putCxConsortiumPatentsCxConsortiumPatent = (option) => request.put(`/cxConsortiumPatents/cxConsortiumPatent`, option)
    

    
/**
* * 新-联合体单位专利Top10
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxConsortiumPatent {} cxConsortiumPatent
*/
export const postCxConsortiumPatentsCxConsortiumPatentSelective = (option) => request.post(`/cxConsortiumPatents/cxConsortiumPatentSelective`, option)
    
/**
* * 新-联合体单位专利Top10
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxConsortiumPatent {} cxConsortiumPatent
*/
export const putCxConsortiumPatentsCxConsortiumPatentSelective = (option) => request.put(`/cxConsortiumPatents/cxConsortiumPatentSelective`, option)
    

    
/**
* * 新-联合体单位专利Top10
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxConsortiumPatentsCxConsortiumPatents = (option) => request.post(`/cxConsortiumPatents/cxConsortiumPatents`, option)
    
/**
* * 新-联合体单位专利Top10
* * 批量添加
* * 批量添加
*
* @cxConsortiumPatents {} cxConsortiumPatents
*/
export const putCxConsortiumPatentsCxConsortiumPatents = (option) => request.put(`/cxConsortiumPatents/cxConsortiumPatents`, option)
    

    
/**
* * 新-联合体单位专利Top10
* * 根据主键获取CxConsortiumPatent
* * 若无，返回null
*
* @id {string} id
*/
export const getCxConsortiumPatents = (option) => request.get(`/cxConsortiumPatents/${option["id"]}`, option)
    
/**
* * 新-联合体单位专利Top10
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxConsortiumPatents = (option) => request.delete(`/cxConsortiumPatents/${option["id"]}`, option)
    


    
/**
* * 新-联合体单位类别构成
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @type {string} 
* @typeLike {string} 
* @typeOrderByAsc {boolean} 
* @typeOrderByDesc {boolean} 
* @enterpriseNum {integer} 
* @enterpriseNumOrderByAsc {boolean} 
* @enterpriseNumOrderByDesc {boolean} 
*/
export const postCxConsortiumTypesConditions = (option) => request.post(`/cxConsortiumTypes/conditions`, option)
    

    
/**
* * 新-联合体单位类别构成
* * 根据条件获取分页信息
* * 
*
* @cxConsortiumTypeRequest {} cxConsortiumTypeRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxConsortiumTypesConditionsPage = (option) => request.post(`/cxConsortiumTypes/conditionsPage`, option)
    

    
/**
* * 新-联合体单位类别构成
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxConsortiumType {} cxConsortiumType
*/
export const postCxConsortiumTypesCxConsortiumType = (option) => request.post(`/cxConsortiumTypes/cxConsortiumType`, option)
    
/**
* * 新-联合体单位类别构成
* * 添加
* * 添加
*
* @cxConsortiumType {} cxConsortiumType
*/
export const putCxConsortiumTypesCxConsortiumType = (option) => request.put(`/cxConsortiumTypes/cxConsortiumType`, option)
    

    
/**
* * 新-联合体单位类别构成
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxConsortiumType {} cxConsortiumType
*/
export const postCxConsortiumTypesCxConsortiumTypeSelective = (option) => request.post(`/cxConsortiumTypes/cxConsortiumTypeSelective`, option)
    
/**
* * 新-联合体单位类别构成
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxConsortiumType {} cxConsortiumType
*/
export const putCxConsortiumTypesCxConsortiumTypeSelective = (option) => request.put(`/cxConsortiumTypes/cxConsortiumTypeSelective`, option)
    

    
/**
* * 新-联合体单位类别构成
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxConsortiumTypesCxConsortiumTypes = (option) => request.post(`/cxConsortiumTypes/cxConsortiumTypes`, option)
    
/**
* * 新-联合体单位类别构成
* * 批量添加
* * 批量添加
*
* @cxConsortiumTypes {} cxConsortiumTypes
*/
export const putCxConsortiumTypesCxConsortiumTypes = (option) => request.put(`/cxConsortiumTypes/cxConsortiumTypes`, option)
    

    
/**
* * 新-联合体单位类别构成
* * 根据主键获取CxConsortiumType
* * 若无，返回null
*
* @id {string} id
*/
export const getCxConsortiumTypes = (option) => request.get(`/cxConsortiumTypes/${option["id"]}`, option)
    
/**
* * 新-联合体单位类别构成
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxConsortiumTypes = (option) => request.delete(`/cxConsortiumTypes/${option["id"]}`, option)
    


    
/**
* * 新-运营中心营收
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @revenue {string} 
* @revenueLike {string} 
* @revenueOrderByAsc {boolean} 
* @revenueOrderByDesc {boolean} 
*/
export const postCxOperationCenterRevenuesConditions = (option) => request.post(`/cxOperationCenterRevenues/conditions`, option)
    

    
/**
* * 新-运营中心营收
* * 根据条件获取分页信息
* * 
*
* @cxOperationCenterRevenueRequest {} cxOperationCenterRevenueRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxOperationCenterRevenuesConditionsPage = (option) => request.post(`/cxOperationCenterRevenues/conditionsPage`, option)
    

    
/**
* * 新-运营中心营收
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxOperationCenterRevenue {} cxOperationCenterRevenue
*/
export const postCxOperationCenterRevenuesCxOperationCenterRevenue = (option) => request.post(`/cxOperationCenterRevenues/cxOperationCenterRevenue`, option)
    
/**
* * 新-运营中心营收
* * 添加
* * 添加
*
* @cxOperationCenterRevenue {} cxOperationCenterRevenue
*/
export const putCxOperationCenterRevenuesCxOperationCenterRevenue = (option) => request.put(`/cxOperationCenterRevenues/cxOperationCenterRevenue`, option)
    

    
/**
* * 新-运营中心营收
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxOperationCenterRevenue {} cxOperationCenterRevenue
*/
export const postCxOperationCenterRevenuesCxOperationCenterRevenueSelective = (option) => request.post(`/cxOperationCenterRevenues/cxOperationCenterRevenueSelective`, option)
    
/**
* * 新-运营中心营收
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxOperationCenterRevenue {} cxOperationCenterRevenue
*/
export const putCxOperationCenterRevenuesCxOperationCenterRevenueSelective = (option) => request.put(`/cxOperationCenterRevenues/cxOperationCenterRevenueSelective`, option)
    

    
/**
* * 新-运营中心营收
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxOperationCenterRevenuesCxOperationCenterRevenues = (option) => request.post(`/cxOperationCenterRevenues/cxOperationCenterRevenues`, option)
    
/**
* * 新-运营中心营收
* * 批量添加
* * 批量添加
*
* @cxOperationCenterRevenues {} cxOperationCenterRevenues
*/
export const putCxOperationCenterRevenuesCxOperationCenterRevenues = (option) => request.put(`/cxOperationCenterRevenues/cxOperationCenterRevenues`, option)
    

    
/**
* * 新-运营中心营收
* * 根据主键获取CxOperationCenterRevenue
* * 若无，返回null
*
* @id {string} id
*/
export const getCxOperationCenterRevenues = (option) => request.get(`/cxOperationCenterRevenues/${option["id"]}`, option)
    
/**
* * 新-运营中心营收
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxOperationCenterRevenues = (option) => request.delete(`/cxOperationCenterRevenues/${option["id"]}`, option)
    


    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @patentVolume {integer} 
* @patentVolumeOrderByAsc {boolean} 
* @patentVolumeOrderByDesc {boolean} 
* @tradingVolume {string} 
* @tradingVolumeLike {string} 
* @tradingVolumeOrderByAsc {boolean} 
* @tradingVolumeOrderByDesc {boolean} 
*/
export const postCxNewEnergyPatentOperationsConditions = (option) => request.post(`/cxNewEnergyPatentOperations/conditions`, option)
    

    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 根据条件获取分页信息
* * 
*
* @cxNewEnergyPatentOperationRequest {} cxNewEnergyPatentOperationRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxNewEnergyPatentOperationsConditionsPage = (option) => request.post(`/cxNewEnergyPatentOperations/conditionsPage`, option)
    

    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxNewEnergyPatentOperation {} cxNewEnergyPatentOperation
*/
export const postCxNewEnergyPatentOperationsCxNewEnergyPatentOperation = (option) => request.post(`/cxNewEnergyPatentOperations/cxNewEnergyPatentOperation`, option)
    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 添加
* * 添加
*
* @cxNewEnergyPatentOperation {} cxNewEnergyPatentOperation
*/
export const putCxNewEnergyPatentOperationsCxNewEnergyPatentOperation = (option) => request.put(`/cxNewEnergyPatentOperations/cxNewEnergyPatentOperation`, option)
    

    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxNewEnergyPatentOperation {} cxNewEnergyPatentOperation
*/
export const postCxNewEnergyPatentOperationsCxNewEnergyPatentOperationSelective = (option) => request.post(`/cxNewEnergyPatentOperations/cxNewEnergyPatentOperationSelective`, option)
    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxNewEnergyPatentOperation {} cxNewEnergyPatentOperation
*/
export const putCxNewEnergyPatentOperationsCxNewEnergyPatentOperationSelective = (option) => request.put(`/cxNewEnergyPatentOperations/cxNewEnergyPatentOperationSelective`, option)
    

    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxNewEnergyPatentOperationsCxNewEnergyPatentOperations = (option) => request.post(`/cxNewEnergyPatentOperations/cxNewEnergyPatentOperations`, option)
    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 批量添加
* * 批量添加
*
* @cxNewEnergyPatentOperations {} cxNewEnergyPatentOperations
*/
export const putCxNewEnergyPatentOperationsCxNewEnergyPatentOperations = (option) => request.put(`/cxNewEnergyPatentOperations/cxNewEnergyPatentOperations`, option)
    

    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 根据主键获取CxNewEnergyPatentOperation
* * 若无，返回null
*
* @id {string} id
*/
export const getCxNewEnergyPatentOperations = (option) => request.get(`/cxNewEnergyPatentOperations/${option["id"]}`, option)
    
/**
* * 新-近五年南方电网新能源专利运营发展情况
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxNewEnergyPatentOperations = (option) => request.delete(`/cxNewEnergyPatentOperations/${option["id"]}`, option)
    


    
/**
* * 新-近五年知识产权流动单位Top
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
* @obligee {string} 
* @obligeeLike {string} 
* @obligeeOrderByAsc {boolean} 
* @obligeeOrderByDesc {boolean} 
* @outflow {integer} 
* @outflowOrderByAsc {boolean} 
* @outflowOrderByDesc {boolean} 
* @inflow {integer} 
* @inflowOrderByAsc {boolean} 
* @inflowOrderByDesc {boolean} 
*/
export const postCxIntellectualPropertyFlowUnitsConditions = (option) => request.post(`/cxIntellectualPropertyFlowUnits/conditions`, option)
    

    
/**
* * 新-近五年知识产权流动单位Top
* * 根据条件获取分页信息
* * 
*
* @cxIntellectualPropertyFlowUnitRequest {} cxIntellectualPropertyFlowUnitRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxIntellectualPropertyFlowUnitsConditionsPage = (option) => request.post(`/cxIntellectualPropertyFlowUnits/conditionsPage`, option)
    

    
/**
* * 新-近五年知识产权流动单位Top
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxIntellectualPropertyFlowUnit {} cxIntellectualPropertyFlowUnit
*/
export const postCxIntellectualPropertyFlowUnitsCxIntellectualPropertyFlowUnit = (option) => request.post(`/cxIntellectualPropertyFlowUnits/cxIntellectualPropertyFlowUnit`, option)
    
/**
* * 新-近五年知识产权流动单位Top
* * 添加
* * 添加
*
* @cxIntellectualPropertyFlowUnit {} cxIntellectualPropertyFlowUnit
*/
export const putCxIntellectualPropertyFlowUnitsCxIntellectualPropertyFlowUnit = (option) => request.put(`/cxIntellectualPropertyFlowUnits/cxIntellectualPropertyFlowUnit`, option)
    

    
/**
* * 新-近五年知识产权流动单位Top
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxIntellectualPropertyFlowUnit {} cxIntellectualPropertyFlowUnit
*/
export const postCxIntellectualPropertyFlowUnitsCxIntellectualPropertyFlowUnitSelective = (option) => request.post(`/cxIntellectualPropertyFlowUnits/cxIntellectualPropertyFlowUnitSelective`, option)
    
/**
* * 新-近五年知识产权流动单位Top
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxIntellectualPropertyFlowUnit {} cxIntellectualPropertyFlowUnit
*/
export const putCxIntellectualPropertyFlowUnitsCxIntellectualPropertyFlowUnitSelective = (option) => request.put(`/cxIntellectualPropertyFlowUnits/cxIntellectualPropertyFlowUnitSelective`, option)
    

    
/**
* * 新-近五年知识产权流动单位Top
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxIntellectualPropertyFlowUnitsCxIntellectualPropertyFlowUnits = (option) => request.post(`/cxIntellectualPropertyFlowUnits/cxIntellectualPropertyFlowUnits`, option)
    
/**
* * 新-近五年知识产权流动单位Top
* * 批量添加
* * 批量添加
*
* @cxIntellectualPropertyFlowUnits {} cxIntellectualPropertyFlowUnits
*/
export const putCxIntellectualPropertyFlowUnitsCxIntellectualPropertyFlowUnits = (option) => request.put(`/cxIntellectualPropertyFlowUnits/cxIntellectualPropertyFlowUnits`, option)
    

    
/**
* * 新-近五年知识产权流动单位Top
* * 根据主键获取CxIntellectualPropertyFlowUnit
* * 若无，返回null
*
* @id {string} id
*/
export const getCxIntellectualPropertyFlowUnits = (option) => request.get(`/cxIntellectualPropertyFlowUnits/${option["id"]}`, option)
    
/**
* * 新-近五年知识产权流动单位Top
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxIntellectualPropertyFlowUnits = (option) => request.delete(`/cxIntellectualPropertyFlowUnits/${option["id"]}`, option)
    


    
/**
* * 新-近十年专利专利许可及转让情况
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @licensedNum {string} 
* @licensedNumLike {string} 
* @licensedNumOrderByAsc {boolean} 
* @licensedNumOrderByDesc {boolean} 
* @transferNum {string} 
* @transferNumLike {string} 
* @transferNumOrderByAsc {boolean} 
* @transferNumOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @region {string} 
* @regionLike {string} 
* @regionOrderByAsc {boolean} 
* @regionOrderByDesc {boolean} 
*/
export const postCxPatentLicenseTransfersConditions = (option) => request.post(`/cxPatentLicenseTransfers/conditions`, option)
    

    
/**
* * 新-近十年专利专利许可及转让情况
* * 根据条件获取分页信息
* * 
*
* @cxPatentLicenseTransferRequest {} cxPatentLicenseTransferRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxPatentLicenseTransfersConditionsPage = (option) => request.post(`/cxPatentLicenseTransfers/conditionsPage`, option)
    

    
/**
* * 新-近十年专利专利许可及转让情况
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentLicenseTransfer {} cxPatentLicenseTransfer
*/
export const postCxPatentLicenseTransfersCxPatentLicenseTransfer = (option) => request.post(`/cxPatentLicenseTransfers/cxPatentLicenseTransfer`, option)
    
/**
* * 新-近十年专利专利许可及转让情况
* * 添加
* * 添加
*
* @cxPatentLicenseTransfer {} cxPatentLicenseTransfer
*/
export const putCxPatentLicenseTransfersCxPatentLicenseTransfer = (option) => request.put(`/cxPatentLicenseTransfers/cxPatentLicenseTransfer`, option)
    

    
/**
* * 新-近十年专利专利许可及转让情况
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentLicenseTransfer {} cxPatentLicenseTransfer
*/
export const postCxPatentLicenseTransfersCxPatentLicenseTransferSelective = (option) => request.post(`/cxPatentLicenseTransfers/cxPatentLicenseTransferSelective`, option)
    
/**
* * 新-近十年专利专利许可及转让情况
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxPatentLicenseTransfer {} cxPatentLicenseTransfer
*/
export const putCxPatentLicenseTransfersCxPatentLicenseTransferSelective = (option) => request.put(`/cxPatentLicenseTransfers/cxPatentLicenseTransferSelective`, option)
    

    
/**
* * 新-近十年专利专利许可及转让情况
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxPatentLicenseTransfersCxPatentLicenseTransfers = (option) => request.post(`/cxPatentLicenseTransfers/cxPatentLicenseTransfers`, option)
    
/**
* * 新-近十年专利专利许可及转让情况
* * 批量添加
* * 批量添加
*
* @cxPatentLicenseTransfers {} cxPatentLicenseTransfers
*/
export const putCxPatentLicenseTransfersCxPatentLicenseTransfers = (option) => request.put(`/cxPatentLicenseTransfers/cxPatentLicenseTransfers`, option)
    

    
/**
* * 新-近十年专利专利许可及转让情况
* * 根据主键获取CxPatentLicenseTransfer
* * 若无，返回null
*
* @id {string} id
*/
export const getCxPatentLicenseTransfers = (option) => request.get(`/cxPatentLicenseTransfers/${option["id"]}`, option)
    
/**
* * 新-近十年专利专利许可及转让情况
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxPatentLicenseTransfers = (option) => request.delete(`/cxPatentLicenseTransfers/${option["id"]}`, option)
    


    
/**
* * 新-近十年专利趋势
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @applicationVolume {integer} 
* @applicationVolumeOrderByAsc {boolean} 
* @applicationVolumeOrderByDesc {boolean} 
* @authorizedQuantity {integer} 
* @authorizedQuantityOrderByAsc {boolean} 
* @authorizedQuantityOrderByDesc {boolean} 
* @year {integer} 
* @yearOrderByAsc {boolean} 
* @yearOrderByDesc {boolean} 
* @region {string} 
* @regionLike {string} 
* @regionOrderByAsc {boolean} 
* @regionOrderByDesc {boolean} 
*/
export const postCxPatentTrendsConditions = (option) => request.post(`/cxPatentTrends/conditions`, option)
    

    
/**
* * 新-近十年专利趋势
* * 根据条件获取分页信息
* * 
*
* @cxPatentTrendRequest {} cxPatentTrendRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxPatentTrendsConditionsPage = (option) => request.post(`/cxPatentTrends/conditionsPage`, option)
    

    
/**
* * 新-近十年专利趋势
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentTrend {} cxPatentTrend
*/
export const postCxPatentTrendsCxPatentTrend = (option) => request.post(`/cxPatentTrends/cxPatentTrend`, option)
    
/**
* * 新-近十年专利趋势
* * 添加
* * 添加
*
* @cxPatentTrend {} cxPatentTrend
*/
export const putCxPatentTrendsCxPatentTrend = (option) => request.put(`/cxPatentTrends/cxPatentTrend`, option)
    

    
/**
* * 新-近十年专利趋势
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxPatentTrend {} cxPatentTrend
*/
export const postCxPatentTrendsCxPatentTrendSelective = (option) => request.post(`/cxPatentTrends/cxPatentTrendSelective`, option)
    
/**
* * 新-近十年专利趋势
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxPatentTrend {} cxPatentTrend
*/
export const putCxPatentTrendsCxPatentTrendSelective = (option) => request.put(`/cxPatentTrends/cxPatentTrendSelective`, option)
    

    
/**
* * 新-近十年专利趋势
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxPatentTrendsCxPatentTrends = (option) => request.post(`/cxPatentTrends/cxPatentTrends`, option)
    
/**
* * 新-近十年专利趋势
* * 批量添加
* * 批量添加
*
* @cxPatentTrends {} cxPatentTrends
*/
export const putCxPatentTrendsCxPatentTrends = (option) => request.put(`/cxPatentTrends/cxPatentTrends`, option)
    

    
/**
* * 新-近十年专利趋势
* * 根据主键获取CxPatentTrend
* * 若无，返回null
*
* @id {string} id
*/
export const getCxPatentTrends = (option) => request.get(`/cxPatentTrends/${option["id"]}`, option)
    
/**
* * 新-近十年专利趋势
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxPatentTrends = (option) => request.delete(`/cxPatentTrends/${option["id"]}`, option)
    


    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @id {string} 
* @idLike {string} 
* @idOrderByAsc {boolean} 
* @idOrderByDesc {boolean} 
* @unitName {string} 
* @unitNameLike {string} 
* @unitNameOrderByAsc {boolean} 
* @unitNameOrderByDesc {boolean} 
* @patentVolume {integer} 
* @patentVolumeOrderByAsc {boolean} 
* @patentVolumeOrderByDesc {boolean} 
* @money {string} 
* @moneyLike {string} 
* @moneyOrderByAsc {boolean} 
* @moneyOrderByDesc {boolean} 
* @month {integer} 
* @monthOrderByAsc {boolean} 
* @monthOrderByDesc {boolean} 
*/
export const postCxNewEnergyOpeningPermitsConditions = (option) => request.post(`/cxNewEnergyOpeningPermits/conditions`, option)
    

    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 根据条件获取分页信息
* * 
*
* @cxNewEnergyOpeningPermitRequest {} cxNewEnergyOpeningPermitRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCxNewEnergyOpeningPermitsConditionsPage = (option) => request.post(`/cxNewEnergyOpeningPermits/conditionsPage`, option)
    

    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cxNewEnergyOpeningPermit {} cxNewEnergyOpeningPermit
*/
export const postCxNewEnergyOpeningPermitsCxNewEnergyOpeningPermit = (option) => request.post(`/cxNewEnergyOpeningPermits/cxNewEnergyOpeningPermit`, option)
    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 添加
* * 添加
*
* @cxNewEnergyOpeningPermit {} cxNewEnergyOpeningPermit
*/
export const putCxNewEnergyOpeningPermitsCxNewEnergyOpeningPermit = (option) => request.put(`/cxNewEnergyOpeningPermits/cxNewEnergyOpeningPermit`, option)
    

    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cxNewEnergyOpeningPermit {} cxNewEnergyOpeningPermit
*/
export const postCxNewEnergyOpeningPermitsCxNewEnergyOpeningPermitSelective = (option) => request.post(`/cxNewEnergyOpeningPermits/cxNewEnergyOpeningPermitSelective`, option)
    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cxNewEnergyOpeningPermit {} cxNewEnergyOpeningPermit
*/
export const putCxNewEnergyOpeningPermitsCxNewEnergyOpeningPermitSelective = (option) => request.put(`/cxNewEnergyOpeningPermits/cxNewEnergyOpeningPermitSelective`, option)
    

    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCxNewEnergyOpeningPermitsCxNewEnergyOpeningPermits = (option) => request.post(`/cxNewEnergyOpeningPermits/cxNewEnergyOpeningPermits`, option)
    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 批量添加
* * 批量添加
*
* @cxNewEnergyOpeningPermits {} cxNewEnergyOpeningPermits
*/
export const putCxNewEnergyOpeningPermitsCxNewEnergyOpeningPermits = (option) => request.put(`/cxNewEnergyOpeningPermits/cxNewEnergyOpeningPermits`, option)
    

    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 根据主键获取CxNewEnergyOpeningPermit
* * 若无，返回null
*
* @id {string} id
*/
export const getCxNewEnergyOpeningPermits = (option) => request.get(`/cxNewEnergyOpeningPermits/${option["id"]}`, option)
    
/**
* * 新-近半年南方电网新能源专利开放许可发展情况
* * 根据主键删除
* * 根据主键删除
*
* @id {string} 主键
*/
export const deleteCxNewEnergyOpeningPermits = (option) => request.delete(`/cxNewEnergyOpeningPermits/${option["id"]}`, option)
    


    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @pltId {string} 
* @pltIdLike {string} 
* @pltIdOrderByAsc {boolean} 
* @pltIdOrderByDesc {boolean} 
* @ageLimit {string} 
* @ageLimitLike {string} 
* @ageLimitOrderByAsc {boolean} 
* @ageLimitOrderByDesc {boolean} 
* @permittedTransactions {string} 
* @permittedTransactionsLike {string} 
* @permittedTransactionsOrderByAsc {boolean} 
* @permittedTransactionsOrderByDesc {boolean} 
* @permittedAmount {string} 
* @permittedAmountLike {string} 
* @permittedAmountOrderByAsc {boolean} 
* @permittedAmountOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postPatentPermitTransactionsConditions = (option) => request.post(`/patentPermitTransactions/conditions`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据条件获取分页信息
* * 
*
* @patentPermitTransactionRequest {} patentPermitTransactionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPatentPermitTransactionsConditionsPage = (option) => request.post(`/patentPermitTransactions/conditionsPage`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @patentPermitTransaction {} patentPermitTransaction
*/
export const postPatentPermitTransactionsPatentPermitTransaction = (option) => request.post(`/patentPermitTransactions/patentPermitTransaction`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 添加
* * 添加
*
* @patentPermitTransaction {} patentPermitTransaction
*/
export const putPatentPermitTransactionsPatentPermitTransaction = (option) => request.put(`/patentPermitTransactions/patentPermitTransaction`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @patentPermitTransaction {} patentPermitTransaction
*/
export const postPatentPermitTransactionsPatentPermitTransactionSelective = (option) => request.post(`/patentPermitTransactions/patentPermitTransactionSelective`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @patentPermitTransaction {} patentPermitTransaction
*/
export const putPatentPermitTransactionsPatentPermitTransactionSelective = (option) => request.put(`/patentPermitTransactions/patentPermitTransactionSelective`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPatentPermitTransactionsPatentPermitTransactions = (option) => request.post(`/patentPermitTransactions/patentPermitTransactions`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 批量添加
* * 批量添加
*
* @patentPermitTransactions {} patentPermitTransactions
*/
export const putPatentPermitTransactionsPatentPermitTransactions = (option) => request.put(`/patentPermitTransactions/patentPermitTransactions`, option)
    

    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据主键获取PatentPermitTransaction
* * 若无，返回null
*
* @pltId {string} pltId
*/
export const getPatentPermitTransactions = (option) => request.get(`/patentPermitTransactions/${option["pltId"]}`, option)
    
/**
* * 概览-专利许可期限、金额分布接口
* * 根据主键删除
* * 根据主键删除
*
* @pltId {string} 主键
*/
export const deletePatentPermitTransactions = (option) => request.delete(`/patentPermitTransactions/${option["pltId"]}`, option)
    


    
/**
* * 概览-专利许可累计交易接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @ctId {string} 
* @ctIdLike {string} 
* @ctIdOrderByAsc {boolean} 
* @ctIdOrderByDesc {boolean} 
* @tradingVolume {string} 
* @tradingVolumeLike {string} 
* @tradingVolumeOrderByAsc {boolean} 
* @tradingVolumeOrderByDesc {boolean} 
* @transactionAmount {string} 
* @transactionAmountLike {string} 
* @transactionAmountOrderByAsc {boolean} 
* @transactionAmountOrderByDesc {boolean} 
*/
export const postCumulativeTransactionsConditions = (option) => request.post(`/cumulativeTransactions/conditions`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 根据条件获取分页信息
* * 
*
* @cumulativeTransactionRequest {} cumulativeTransactionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postCumulativeTransactionsConditionsPage = (option) => request.post(`/cumulativeTransactions/conditionsPage`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @cumulativeTransaction {} cumulativeTransaction
*/
export const postCumulativeTransactionsCumulativeTransaction = (option) => request.post(`/cumulativeTransactions/cumulativeTransaction`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 添加
* * 添加
*
* @cumulativeTransaction {} cumulativeTransaction
*/
export const putCumulativeTransactionsCumulativeTransaction = (option) => request.put(`/cumulativeTransactions/cumulativeTransaction`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @cumulativeTransaction {} cumulativeTransaction
*/
export const postCumulativeTransactionsCumulativeTransactionSelective = (option) => request.post(`/cumulativeTransactions/cumulativeTransactionSelective`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @cumulativeTransaction {} cumulativeTransaction
*/
export const putCumulativeTransactionsCumulativeTransactionSelective = (option) => request.put(`/cumulativeTransactions/cumulativeTransactionSelective`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postCumulativeTransactionsCumulativeTransactions = (option) => request.post(`/cumulativeTransactions/cumulativeTransactions`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 批量添加
* * 批量添加
*
* @cumulativeTransactions {} cumulativeTransactions
*/
export const putCumulativeTransactionsCumulativeTransactions = (option) => request.put(`/cumulativeTransactions/cumulativeTransactions`, option)
    

    
/**
* * 概览-专利许可累计交易接口
* * 根据主键获取CumulativeTransaction
* * 若无，返回null
*
* @ctId {string} ctId
*/
export const getCumulativeTransactions = (option) => request.get(`/cumulativeTransactions/${option["ctId"]}`, option)
    
/**
* * 概览-专利许可累计交易接口
* * 根据主键删除
* * 根据主键删除
*
* @ctId {string} 主键
*/
export const deleteCumulativeTransactions = (option) => request.delete(`/cumulativeTransactions/${option["ctId"]}`, option)
    


    
/**
* * 概览-中国专利信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @chinaPatentInfo {} chinaPatentInfo
*/
export const postChinaPatentInfosChinaPatentInfo = (option) => request.post(`/chinaPatentInfos/chinaPatentInfo`, option)
    
/**
* * 概览-中国专利信息接口
* * 添加
* * 添加
*
* @chinaPatentInfo {} chinaPatentInfo
*/
export const putChinaPatentInfosChinaPatentInfo = (option) => request.put(`/chinaPatentInfos/chinaPatentInfo`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @chinaPatentInfo {} chinaPatentInfo
*/
export const postChinaPatentInfosChinaPatentInfoSelective = (option) => request.post(`/chinaPatentInfos/chinaPatentInfoSelective`, option)
    
/**
* * 概览-中国专利信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @chinaPatentInfo {} chinaPatentInfo
*/
export const putChinaPatentInfosChinaPatentInfoSelective = (option) => request.put(`/chinaPatentInfos/chinaPatentInfoSelective`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postChinaPatentInfosChinaPatentInfos = (option) => request.post(`/chinaPatentInfos/chinaPatentInfos`, option)
    
/**
* * 概览-中国专利信息接口
* * 批量添加
* * 批量添加
*
* @chinaPatentInfos {} chinaPatentInfos
*/
export const putChinaPatentInfosChinaPatentInfos = (option) => request.put(`/chinaPatentInfos/chinaPatentInfos`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @cpiId {string} 
* @cpiIdLike {string} 
* @cpiIdOrderByAsc {boolean} 
* @cpiIdOrderByDesc {boolean} 
* @gpiId {string} 
* @gpiIdLike {string} 
* @gpiIdOrderByAsc {boolean} 
* @gpiIdOrderByDesc {boolean} 
* @patentApplication {string} 
* @patentApplicationLike {string} 
* @patentApplicationOrderByAsc {boolean} 
* @patentApplicationOrderByDesc {boolean} 
* @patentAuthorization {string} 
* @patentAuthorizationLike {string} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @validPatent {string} 
* @validPatentLike {string} 
* @validPatentOrderByAsc {boolean} 
* @validPatentOrderByDesc {boolean} 
* @effectiveInvention {string} 
* @effectiveInventionLike {string} 
* @effectiveInventionOrderByAsc {boolean} 
* @effectiveInventionOrderByDesc {boolean} 
* @provinceId {string} 
* @provinceIdLike {string} 
* @provinceIdOrderByAsc {boolean} 
* @provinceIdOrderByDesc {boolean} 
* @provinceName {string} 
* @provinceNameLike {string} 
* @provinceNameOrderByAsc {boolean} 
* @provinceNameOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
* @applicationChange {string} 
* @applicationChangeLike {string} 
* @applicationChangeOrderByAsc {boolean} 
* @applicationChangeOrderByDesc {boolean} 
*/
export const postChinaPatentInfosConditions = (option) => request.post(`/chinaPatentInfos/conditions`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 根据条件获取分页信息
* * 
*
* @chinaPatentInfoRequest {} chinaPatentInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postChinaPatentInfosConditionsPage = (option) => request.post(`/chinaPatentInfos/conditionsPage`, option)
    

    
/**
* * 概览-中国专利信息接口
* * 根据主键获取ChinaPatentInfo
* * 若无，返回null
*
* @cpiId {string} cpiId
*/
export const getChinaPatentInfos = (option) => request.get(`/chinaPatentInfos/${option["cpiId"]}`, option)
    
/**
* * 概览-中国专利信息接口
* * 根据主键删除
* * 根据主键删除
*
* @cpiId {string} 主键
*/
export const deleteChinaPatentInfos = (option) => request.delete(`/chinaPatentInfos/${option["cpiId"]}`, option)
    


    
/**
* * 概览-中国地图飞线信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @chinaMapFlyline {} chinaMapFlyline
*/
export const postChinaMapFlylinesChinaMapFlyline = (option) => request.post(`/chinaMapFlylines/chinaMapFlyline`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 添加
* * 添加
*
* @chinaMapFlyline {} chinaMapFlyline
*/
export const putChinaMapFlylinesChinaMapFlyline = (option) => request.put(`/chinaMapFlylines/chinaMapFlyline`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @chinaMapFlyline {} chinaMapFlyline
*/
export const postChinaMapFlylinesChinaMapFlylineSelective = (option) => request.post(`/chinaMapFlylines/chinaMapFlylineSelective`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @chinaMapFlyline {} chinaMapFlyline
*/
export const putChinaMapFlylinesChinaMapFlylineSelective = (option) => request.put(`/chinaMapFlylines/chinaMapFlylineSelective`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postChinaMapFlylinesChinaMapFlylines = (option) => request.post(`/chinaMapFlylines/chinaMapFlylines`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 批量添加
* * 批量添加
*
* @chinaMapFlylines {} chinaMapFlylines
*/
export const putChinaMapFlylinesChinaMapFlylines = (option) => request.put(`/chinaMapFlylines/chinaMapFlylines`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @cmfId {string} 
* @cmfIdLike {string} 
* @cmfIdOrderByAsc {boolean} 
* @cmfIdOrderByDesc {boolean} 
* @placeLeave {string} 
* @placeLeaveLike {string} 
* @placeLeaveOrderByAsc {boolean} 
* @placeLeaveOrderByDesc {boolean} 
* @placeGoal {string} 
* @placeGoalLike {string} 
* @placeGoalOrderByAsc {boolean} 
* @placeGoalOrderByDesc {boolean} 
* @transferVolume {string} 
* @transferVolumeLike {string} 
* @transferVolumeOrderByAsc {boolean} 
* @transferVolumeOrderByDesc {boolean} 
* @transferTimeStart {string} 
* @transferTimeEnd {string} 
* @transferTimeOrderByAsc {boolean} 
* @transferTimeOrderByDesc {boolean} 
*/
export const postChinaMapFlylinesConditions = (option) => request.post(`/chinaMapFlylines/conditions`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 根据条件获取分页信息
* * 
*
* @chinaMapFlylineRequest {} chinaMapFlylineRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postChinaMapFlylinesConditionsPage = (option) => request.post(`/chinaMapFlylines/conditionsPage`, option)
    

    
/**
* * 概览-中国地图飞线信息接口
* * 根据主键获取ChinaMapFlyline
* * 若无，返回null
*
* @cmfId {string} cmfId
*/
export const getChinaMapFlylines = (option) => request.get(`/chinaMapFlylines/${option["cmfId"]}`, option)
    
/**
* * 概览-中国地图飞线信息接口
* * 根据主键删除
* * 根据主键删除
*
* @cmfId {string} 主键
*/
export const deleteChinaMapFlylines = (option) => request.delete(`/chinaMapFlylines/${option["cmfId"]}`, option)
    


    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @iaerId {string} 
* @iaerIdLike {string} 
* @iaerIdOrderByAsc {boolean} 
* @iaerIdOrderByDesc {boolean} 
* @enterpriseName {string} 
* @enterpriseNameLike {string} 
* @enterpriseNameOrderByAsc {boolean} 
* @enterpriseNameOrderByDesc {boolean} 
* @applicationVolume {string} 
* @applicationVolumeLike {string} 
* @applicationVolumeOrderByAsc {boolean} 
* @applicationVolumeOrderByDesc {boolean} 
* @authorizedQuantity {string} 
* @authorizedQuantityLike {string} 
* @authorizedQuantityOrderByAsc {boolean} 
* @authorizedQuantityOrderByDesc {boolean} 
*/
export const postIndustrialAllianceEnterpriseRanksConditions = (option) => request.post(`/industrialAllianceEnterpriseRanks/conditions`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据条件获取分页信息
* * 
*
* @industrialAllianceEnterpriseRankRequest {} industrialAllianceEnterpriseRankRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postIndustrialAllianceEnterpriseRanksConditionsPage = (option) => request.post(`/industrialAllianceEnterpriseRanks/conditionsPage`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @industrialAllianceEnterpriseRank {} industrialAllianceEnterpriseRank
*/
export const postIndustrialAllianceEnterpriseRanksIndustrialAllianceEnterpriseRank = (option) => request.post(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRank`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 添加
* * 添加
*
* @industrialAllianceEnterpriseRank {} industrialAllianceEnterpriseRank
*/
export const putIndustrialAllianceEnterpriseRanksIndustrialAllianceEnterpriseRank = (option) => request.put(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRank`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @industrialAllianceEnterpriseRank {} industrialAllianceEnterpriseRank
*/
export const postIndustrialAllianceEnterpriseRanksIndustrialAllianceEnterpriseRankSelective = (option) => request.post(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRankSelective`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @industrialAllianceEnterpriseRank {} industrialAllianceEnterpriseRank
*/
export const putIndustrialAllianceEnterpriseRanksIndustrialAllianceEnterpriseRankSelective = (option) => request.put(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRankSelective`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postIndustrialAllianceEnterpriseRanksIndustrialAllianceEnterpriseRanks = (option) => request.post(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRanks`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 批量添加
* * 批量添加
*
* @industrialAllianceEnterpriseRanks {} industrialAllianceEnterpriseRanks
*/
export const putIndustrialAllianceEnterpriseRanksIndustrialAllianceEnterpriseRanks = (option) => request.put(`/industrialAllianceEnterpriseRanks/industrialAllianceEnterpriseRanks`, option)
    

    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据主键获取IndustrialAllianceEnterpriseRank
* * 若无，返回null
*
* @iaerId {string} iaerId
*/
export const getIndustrialAllianceEnterpriseRanks = (option) => request.get(`/industrialAllianceEnterpriseRanks/${option["iaerId"]}`, option)
    
/**
* * 概览-产业联盟企业专利TOP5接口
* * 根据主键删除
* * 根据主键删除
*
* @iaerId {string} 主键
*/
export const deleteIndustrialAllianceEnterpriseRanks = (option) => request.delete(`/industrialAllianceEnterpriseRanks/${option["iaerId"]}`, option)
    


    
/**
* * 概览-代理服务机构专利量排名接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @agencyRanking {} agencyRanking
*/
export const postAgencyRankingsAgencyRanking = (option) => request.post(`/agencyRankings/agencyRanking`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 添加
* * 添加
*
* @agencyRanking {} agencyRanking
*/
export const putAgencyRankingsAgencyRanking = (option) => request.put(`/agencyRankings/agencyRanking`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @agencyRanking {} agencyRanking
*/
export const postAgencyRankingsAgencyRankingSelective = (option) => request.post(`/agencyRankings/agencyRankingSelective`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @agencyRanking {} agencyRanking
*/
export const putAgencyRankingsAgencyRankingSelective = (option) => request.put(`/agencyRankings/agencyRankingSelective`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postAgencyRankingsAgencyRankings = (option) => request.post(`/agencyRankings/agencyRankings`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 批量添加
* * 批量添加
*
* @agencyRankings {} agencyRankings
*/
export const putAgencyRankingsAgencyRankings = (option) => request.put(`/agencyRankings/agencyRankings`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @arId {string} 
* @arIdLike {string} 
* @arIdOrderByAsc {boolean} 
* @arIdOrderByDesc {boolean} 
* @agencyId {string} 
* @agencyIdLike {string} 
* @agencyIdOrderByAsc {boolean} 
* @agencyIdOrderByDesc {boolean} 
* @agencyName {string} 
* @agencyNameLike {string} 
* @agencyNameOrderByAsc {boolean} 
* @agencyNameOrderByDesc {boolean} 
* @patentQuantity {integer} 
* @patentQuantityOrderByAsc {boolean} 
* @patentQuantityOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postAgencyRankingsConditions = (option) => request.post(`/agencyRankings/conditions`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据条件获取分页信息
* * 
*
* @agencyRankingRequest {} agencyRankingRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postAgencyRankingsConditionsPage = (option) => request.post(`/agencyRankings/conditionsPage`, option)
    

    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据主键获取AgencyRanking
* * 若无，返回null
*
* @arId {string} arId
*/
export const getAgencyRankings = (option) => request.get(`/agencyRankings/${option["arId"]}`, option)
    
/**
* * 概览-代理服务机构专利量排名接口
* * 根据主键删除
* * 根据主键删除
*
* @arId {string} 主键
*/
export const deleteAgencyRankings = (option) => request.delete(`/agencyRankings/${option["arId"]}`, option)
    


    
/**
* * 概览-全球专利信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @gpiId {string} 
* @gpiIdLike {string} 
* @gpiIdOrderByAsc {boolean} 
* @gpiIdOrderByDesc {boolean} 
* @patentApplication {string} 
* @patentApplicationLike {string} 
* @patentApplicationOrderByAsc {boolean} 
* @patentApplicationOrderByDesc {boolean} 
* @patentAuthorization {string} 
* @patentAuthorizationLike {string} 
* @patentAuthorizationOrderByAsc {boolean} 
* @patentAuthorizationOrderByDesc {boolean} 
* @validPatent {string} 
* @validPatentLike {string} 
* @validPatentOrderByAsc {boolean} 
* @validPatentOrderByDesc {boolean} 
* @effectiveInvention {string} 
* @effectiveInventionLike {string} 
* @effectiveInventionOrderByAsc {boolean} 
* @effectiveInventionOrderByDesc {boolean} 
* @countryId {string} 
* @countryIdLike {string} 
* @countryIdOrderByAsc {boolean} 
* @countryIdOrderByDesc {boolean} 
* @countryName {string} 
* @countryNameLike {string} 
* @countryNameOrderByAsc {boolean} 
* @countryNameOrderByDesc {boolean} 
* @applicationChange {string} 
* @applicationChangeLike {string} 
* @applicationChangeOrderByAsc {boolean} 
* @applicationChangeOrderByDesc {boolean} 
*/
export const postGlobalPatentInfosConditions = (option) => request.post(`/globalPatentInfos/conditions`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 根据条件获取分页信息
* * 
*
* @globalPatentInfoRequest {} globalPatentInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postGlobalPatentInfosConditionsPage = (option) => request.post(`/globalPatentInfos/conditionsPage`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @globalPatentInfo {} globalPatentInfo
*/
export const postGlobalPatentInfosGlobalPatentInfo = (option) => request.post(`/globalPatentInfos/globalPatentInfo`, option)
    
/**
* * 概览-全球专利信息接口
* * 添加
* * 添加
*
* @globalPatentInfo {} globalPatentInfo
*/
export const putGlobalPatentInfosGlobalPatentInfo = (option) => request.put(`/globalPatentInfos/globalPatentInfo`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @globalPatentInfo {} globalPatentInfo
*/
export const postGlobalPatentInfosGlobalPatentInfoSelective = (option) => request.post(`/globalPatentInfos/globalPatentInfoSelective`, option)
    
/**
* * 概览-全球专利信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @globalPatentInfo {} globalPatentInfo
*/
export const putGlobalPatentInfosGlobalPatentInfoSelective = (option) => request.put(`/globalPatentInfos/globalPatentInfoSelective`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postGlobalPatentInfosGlobalPatentInfos = (option) => request.post(`/globalPatentInfos/globalPatentInfos`, option)
    
/**
* * 概览-全球专利信息接口
* * 批量添加
* * 批量添加
*
* @globalPatentInfos {} globalPatentInfos
*/
export const putGlobalPatentInfosGlobalPatentInfos = (option) => request.put(`/globalPatentInfos/globalPatentInfos`, option)
    

    
/**
* * 概览-全球专利信息接口
* * 根据主键获取GlobalPatentInfo
* * 若无，返回null
*
* @gpiId {string} gpiId
*/
export const getGlobalPatentInfos = (option) => request.get(`/globalPatentInfos/${option["gpiId"]}`, option)
    
/**
* * 概览-全球专利信息接口
* * 根据主键删除
* * 根据主键删除
*
* @gpiId {string} 主键
*/
export const deleteGlobalPatentInfos = (option) => request.delete(`/globalPatentInfos/${option["gpiId"]}`, option)
    


    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @chinaEuropeComparison {} chinaEuropeComparison
*/
export const postChinaEuropeComparisonsChinaEuropeComparison = (option) => request.post(`/chinaEuropeComparisons/chinaEuropeComparison`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 添加
* * 添加
*
* @chinaEuropeComparison {} chinaEuropeComparison
*/
export const putChinaEuropeComparisonsChinaEuropeComparison = (option) => request.put(`/chinaEuropeComparisons/chinaEuropeComparison`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @chinaEuropeComparison {} chinaEuropeComparison
*/
export const postChinaEuropeComparisonsChinaEuropeComparisonSelective = (option) => request.post(`/chinaEuropeComparisons/chinaEuropeComparisonSelective`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @chinaEuropeComparison {} chinaEuropeComparison
*/
export const putChinaEuropeComparisonsChinaEuropeComparisonSelective = (option) => request.put(`/chinaEuropeComparisons/chinaEuropeComparisonSelective`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postChinaEuropeComparisonsChinaEuropeComparisons = (option) => request.post(`/chinaEuropeComparisons/chinaEuropeComparisons`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 批量添加
* * 批量添加
*
* @chinaEuropeComparisons {} chinaEuropeComparisons
*/
export const putChinaEuropeComparisonsChinaEuropeComparisons = (option) => request.put(`/chinaEuropeComparisons/chinaEuropeComparisons`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @cecId {string} 
* @cecIdLike {string} 
* @cecIdOrderByAsc {boolean} 
* @cecIdOrderByDesc {boolean} 
* @chinesePatent {string} 
* @chinesePatentLike {string} 
* @chinesePatentOrderByAsc {boolean} 
* @chinesePatentOrderByDesc {boolean} 
* @europePatent {string} 
* @europePatentLike {string} 
* @europePatentOrderByAsc {boolean} 
* @europePatentOrderByDesc {boolean} 
* @cecYear {integer} 
* @cecYearOrderByAsc {boolean} 
* @cecYearOrderByDesc {boolean} 
*/
export const postChinaEuropeComparisonsConditions = (option) => request.post(`/chinaEuropeComparisons/conditions`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据条件获取分页信息
* * 
*
* @chinaEuropeComparisonRequest {} chinaEuropeComparisonRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postChinaEuropeComparisonsConditionsPage = (option) => request.post(`/chinaEuropeComparisons/conditionsPage`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 查询近十年中-欧美专利情况信息
* * 查询近十年中-欧美专利情况信息
*

export const postChinaEuropeComparisonsQueryDecade = (option) => request.post(`/chinaEuropeComparisons/queryDecade`, option)
    

    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据主键获取ChinaEuropeComparison
* * 若无，返回null
*
* @cecId {string} cecId
*/
export const getChinaEuropeComparisons = (option) => request.get(`/chinaEuropeComparisons/${option["cecId"]}`, option)
    
/**
* * 概览-近十年中-欧美专利情况对比接口
* * 根据主键删除
* * 根据主键删除
*
* @cecId {string} 主键
*/
export const deleteChinaEuropeComparisons = (option) => request.delete(`/chinaEuropeComparisons/${option["cecId"]}`, option)
    


    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @paiId {string} 
* @paiIdLike {string} 
* @paiIdOrderByAsc {boolean} 
* @paiIdOrderByDesc {boolean} 
* @inventionPatent {string} 
* @inventionPatentLike {string} 
* @inventionPatentOrderByAsc {boolean} 
* @inventionPatentOrderByDesc {boolean} 
* @utilityModel {string} 
* @utilityModelLike {string} 
* @utilityModelOrderByAsc {boolean} 
* @utilityModelOrderByDesc {boolean} 
* @appearancePatent {string} 
* @appearancePatentLike {string} 
* @appearancePatentOrderByAsc {boolean} 
* @appearancePatentOrderByDesc {boolean} 
* @applicationVolume {string} 
* @applicationVolumeLike {string} 
* @applicationVolumeOrderByAsc {boolean} 
* @applicationVolumeOrderByDesc {boolean} 
* @authorizedQuantity {string} 
* @authorizedQuantityLike {string} 
* @authorizedQuantityOrderByAsc {boolean} 
* @authorizedQuantityOrderByDesc {boolean} 
* @paiYear {integer} 
* @paiYearOrderByAsc {boolean} 
* @paiYearOrderByDesc {boolean} 
* @paiMonth {integer} 
* @paiMonthOrderByAsc {boolean} 
* @paiMonthOrderByDesc {boolean} 
* @paiDay {integer} 
* @paiDayOrderByAsc {boolean} 
* @paiDayOrderByDesc {boolean} 
* @paiDateStart {string} 
* @paiDateEnd {string} 
* @paiDateOrderByAsc {boolean} 
* @paiDateOrderByDesc {boolean} 
* @region {string} 
* @regionLike {string} 
* @regionOrderByAsc {boolean} 
* @regionOrderByDesc {boolean} 
*/
export const postPatentApplicationInfosConditions = (option) => request.post(`/patentApplicationInfos/conditions`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据条件获取分页信息
* * 
*
* @patentApplicationInfoRequest {} patentApplicationInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPatentApplicationInfosConditionsPage = (option) => request.post(`/patentApplicationInfos/conditionsPage`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @patentApplicationInfo {} patentApplicationInfo
*/
export const postPatentApplicationInfosPatentApplicationInfo = (option) => request.post(`/patentApplicationInfos/patentApplicationInfo`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 添加
* * 添加
*
* @patentApplicationInfo {} patentApplicationInfo
*/
export const putPatentApplicationInfosPatentApplicationInfo = (option) => request.put(`/patentApplicationInfos/patentApplicationInfo`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @patentApplicationInfo {} patentApplicationInfo
*/
export const postPatentApplicationInfosPatentApplicationInfoSelective = (option) => request.post(`/patentApplicationInfos/patentApplicationInfoSelective`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @patentApplicationInfo {} patentApplicationInfo
*/
export const putPatentApplicationInfosPatentApplicationInfoSelective = (option) => request.put(`/patentApplicationInfos/patentApplicationInfoSelective`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPatentApplicationInfosPatentApplicationInfos = (option) => request.post(`/patentApplicationInfos/patentApplicationInfos`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 批量添加
* * 批量添加
*
* @patentApplicationInfos {} patentApplicationInfos
*/
export const putPatentApplicationInfosPatentApplicationInfos = (option) => request.put(`/patentApplicationInfos/patentApplicationInfos`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据地区获取近十年专利信息
* * 若无，返回null
*
* @region {string} region
*/
export const getPatentApplicationInfosQueryDecade = (option) => request.get(`/patentApplicationInfos/queryDecade/${option["region"]}`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据地区获取近半年申请专利信息
* * 若无，返回null
*
* @region {string} region
*/
export const getPatentApplicationInfosQueryHalfYear = (option) => request.get(`/patentApplicationInfos/queryHalfYear/${option["region"]}`, option)
    

    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据主键获取PatentApplicationInfo
* * 若无，返回null
*
* @paiId {string} paiId
*/
export const getPatentApplicationInfos = (option) => request.get(`/patentApplicationInfos/${option["paiId"]}`, option)
    
/**
* * 概览-近半年申请专利、近十年申请授权专利信息接口
* * 根据主键删除
* * 根据主键删除
*
* @paiId {string} 主键
*/
export const deletePatentApplicationInfos = (option) => request.delete(`/patentApplicationInfos/${option["paiId"]}`, option)
    


    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @netId {string} 
* @netIdLike {string} 
* @netIdOrderByAsc {boolean} 
* @netIdOrderByDesc {boolean} 
* @newEnergyNum {integer} 
* @newEnergyNumOrderByAsc {boolean} 
* @newEnergyNumOrderByDesc {boolean} 
* @electricityNum {integer} 
* @electricityNumOrderByAsc {boolean} 
* @electricityNumOrderByDesc {boolean} 
*/
export const postNewEnergyTransactionsConditions = (option) => request.post(`/newEnergyTransactions/conditions`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据条件获取分页信息
* * 
*
* @newEnergyTransactionRequest {} newEnergyTransactionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postNewEnergyTransactionsConditionsPage = (option) => request.post(`/newEnergyTransactions/conditionsPage`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @newEnergyTransaction {} newEnergyTransaction
*/
export const postNewEnergyTransactionsNewEnergyTransaction = (option) => request.post(`/newEnergyTransactions/newEnergyTransaction`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 添加
* * 添加
*
* @newEnergyTransaction {} newEnergyTransaction
*/
export const putNewEnergyTransactionsNewEnergyTransaction = (option) => request.put(`/newEnergyTransactions/newEnergyTransaction`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @newEnergyTransaction {} newEnergyTransaction
*/
export const postNewEnergyTransactionsNewEnergyTransactionSelective = (option) => request.post(`/newEnergyTransactions/newEnergyTransactionSelective`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @newEnergyTransaction {} newEnergyTransaction
*/
export const putNewEnergyTransactionsNewEnergyTransactionSelective = (option) => request.put(`/newEnergyTransactions/newEnergyTransactionSelective`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postNewEnergyTransactionsNewEnergyTransactions = (option) => request.post(`/newEnergyTransactions/newEnergyTransactions`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 批量添加
* * 批量添加
*
* @newEnergyTransactions {} newEnergyTransactions
*/
export const putNewEnergyTransactionsNewEnergyTransactions = (option) => request.put(`/newEnergyTransactions/newEnergyTransactions`, option)
    

    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据主键获取NewEnergyTransaction
* * 若无，返回null
*
* @netId {string} netId
*/
export const getNewEnergyTransactions = (option) => request.get(`/newEnergyTransactions/${option["netId"]}`, option)
    
/**
* * 运营-新能源知识产权交易分布接口
* * 根据主键删除
* * 根据主键删除
*
* @netId {string} 主键
*/
export const deleteNewEnergyTransactions = (option) => request.delete(`/newEnergyTransactions/${option["netId"]}`, option)
    


    
/**
* * 运营-知识产权交易分类分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @ptcId {string} 
* @ptcIdLike {string} 
* @ptcIdOrderByAsc {boolean} 
* @ptcIdOrderByDesc {boolean} 
* @propertyType {string} 
* @propertyTypeLike {string} 
* @propertyTypeOrderByAsc {boolean} 
* @propertyTypeOrderByDesc {boolean} 
* @transferVolume {integer} 
* @transferVolumeOrderByAsc {boolean} 
* @transferVolumeOrderByDesc {boolean} 
* @openingQuantity {integer} 
* @openingQuantityOrderByAsc {boolean} 
* @openingQuantityOrderByDesc {boolean} 
* @otherQuantity {integer} 
* @otherQuantityOrderByAsc {boolean} 
* @otherQuantityOrderByDesc {boolean} 
* @exclusiveQuantity {integer} 
* @exclusiveQuantityOrderByAsc {boolean} 
* @exclusiveQuantityOrderByDesc {boolean} 
* @allowableQuantity {integer} 
* @allowableQuantityOrderByAsc {boolean} 
* @allowableQuantityOrderByDesc {boolean} 
* @crossQuantity {integer} 
* @crossQuantityOrderByAsc {boolean} 
* @crossQuantityOrderByDesc {boolean} 
* @selfImplement {integer} 
* @selfImplementOrderByAsc {boolean} 
* @selfImplementOrderByDesc {boolean} 
* @cooperativeImplement {integer} 
* @cooperativeImplementOrderByAsc {boolean} 
* @cooperativeImplementOrderByDesc {boolean} 
*/
export const postPropertyTransactionClassificationsConditions = (option) => request.post(`/propertyTransactionClassifications/conditions`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 根据条件获取分页信息
* * 
*
* @propertyTransactionClassificationRequest {} propertyTransactionClassificationRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPropertyTransactionClassificationsConditionsPage = (option) => request.post(`/propertyTransactionClassifications/conditionsPage`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @propertyTransactionClassification {} propertyTransactionClassification
*/
export const postPropertyTransactionClassificationsPropertyTransactionClassification = (option) => request.post(`/propertyTransactionClassifications/propertyTransactionClassification`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 添加
* * 添加
*
* @propertyTransactionClassification {} propertyTransactionClassification
*/
export const putPropertyTransactionClassificationsPropertyTransactionClassification = (option) => request.put(`/propertyTransactionClassifications/propertyTransactionClassification`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @propertyTransactionClassification {} propertyTransactionClassification
*/
export const postPropertyTransactionClassificationsPropertyTransactionClassificationSelective = (option) => request.post(`/propertyTransactionClassifications/propertyTransactionClassificationSelective`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @propertyTransactionClassification {} propertyTransactionClassification
*/
export const putPropertyTransactionClassificationsPropertyTransactionClassificationSelective = (option) => request.put(`/propertyTransactionClassifications/propertyTransactionClassificationSelective`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPropertyTransactionClassificationsPropertyTransactionClassifications = (option) => request.post(`/propertyTransactionClassifications/propertyTransactionClassifications`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 批量添加
* * 批量添加
*
* @propertyTransactionClassifications {} propertyTransactionClassifications
*/
export const putPropertyTransactionClassificationsPropertyTransactionClassifications = (option) => request.put(`/propertyTransactionClassifications/propertyTransactionClassifications`, option)
    

    
/**
* * 运营-知识产权交易分类分布接口
* * 根据主键获取PropertyTransactionClassification
* * 若无，返回null
*
* @ptcId {string} ptcId
*/
export const getPropertyTransactionClassifications = (option) => request.get(`/propertyTransactionClassifications/${option["ptcId"]}`, option)
    
/**
* * 运营-知识产权交易分类分布接口
* * 根据主键删除
* * 根据主键删除
*
* @ptcId {string} 主键
*/
export const deletePropertyTransactionClassifications = (option) => request.delete(`/propertyTransactionClassifications/${option["ptcId"]}`, option)
    


    
/**
* * 运营-知识产权交易情况接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @iptId {string} 
* @iptIdLike {string} 
* @iptIdOrderByAsc {boolean} 
* @iptIdOrderByDesc {boolean} 
* @ageLimit {string} 
* @ageLimitLike {string} 
* @ageLimitOrderByAsc {boolean} 
* @ageLimitOrderByDesc {boolean} 
* @tradingVolume {string} 
* @tradingVolumeLike {string} 
* @tradingVolumeOrderByAsc {boolean} 
* @tradingVolumeOrderByDesc {boolean} 
* @patentNum {string} 
* @patentNumLike {string} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postIntellectualPropertyTransactionsConditions = (option) => request.post(`/intellectualPropertyTransactions/conditions`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 根据条件获取分页信息
* * 
*
* @intellectualPropertyTransactionRequest {} intellectualPropertyTransactionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postIntellectualPropertyTransactionsConditionsPage = (option) => request.post(`/intellectualPropertyTransactions/conditionsPage`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @intellectualPropertyTransaction {} intellectualPropertyTransaction
*/
export const postIntellectualPropertyTransactionsIntellectualPropertyTransaction = (option) => request.post(`/intellectualPropertyTransactions/intellectualPropertyTransaction`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 添加
* * 添加
*
* @intellectualPropertyTransaction {} intellectualPropertyTransaction
*/
export const putIntellectualPropertyTransactionsIntellectualPropertyTransaction = (option) => request.put(`/intellectualPropertyTransactions/intellectualPropertyTransaction`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @intellectualPropertyTransaction {} intellectualPropertyTransaction
*/
export const postIntellectualPropertyTransactionsIntellectualPropertyTransactionSelective = (option) => request.post(`/intellectualPropertyTransactions/intellectualPropertyTransactionSelective`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @intellectualPropertyTransaction {} intellectualPropertyTransaction
*/
export const putIntellectualPropertyTransactionsIntellectualPropertyTransactionSelective = (option) => request.put(`/intellectualPropertyTransactions/intellectualPropertyTransactionSelective`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postIntellectualPropertyTransactionsIntellectualPropertyTransactions = (option) => request.post(`/intellectualPropertyTransactions/intellectualPropertyTransactions`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 批量添加
* * 批量添加
*
* @intellectualPropertyTransactions {} intellectualPropertyTransactions
*/
export const putIntellectualPropertyTransactionsIntellectualPropertyTransactions = (option) => request.put(`/intellectualPropertyTransactions/intellectualPropertyTransactions`, option)
    

    
/**
* * 运营-知识产权交易情况接口
* * 根据主键获取IntellectualPropertyTransaction
* * 若无，返回null
*
* @iptId {string} iptId
*/
export const getIntellectualPropertyTransactions = (option) => request.get(`/intellectualPropertyTransactions/${option["iptId"]}`, option)
    
/**
* * 运营-知识产权交易情况接口
* * 根据主键删除
* * 根据主键删除
*
* @iptId {string} 主键
*/
export const deleteIntellectualPropertyTransactions = (option) => request.delete(`/intellectualPropertyTransactions/${option["iptId"]}`, option)
    


    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @trdId {string} 
* @trdIdLike {string} 
* @trdIdOrderByAsc {boolean} 
* @trdIdOrderByDesc {boolean} 
* @region {string} 
* @regionLike {string} 
* @regionOrderByAsc {boolean} 
* @regionOrderByDesc {boolean} 
* @province {string} 
* @provinceLike {string} 
* @provinceOrderByAsc {boolean} 
* @provinceOrderByDesc {boolean} 
* @assigneeNum {integer} 
* @assigneeNumOrderByAsc {boolean} 
* @assigneeNumOrderByDesc {boolean} 
*/
export const postTransfereeRegionalDistributionsConditions = (option) => request.post(`/transfereeRegionalDistributions/conditions`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据条件获取分页信息
* * 
*
* @transfereeRegionalDistributionRequest {} transfereeRegionalDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postTransfereeRegionalDistributionsConditionsPage = (option) => request.post(`/transfereeRegionalDistributions/conditionsPage`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @transfereeRegionalDistribution {} transfereeRegionalDistribution
*/
export const postTransfereeRegionalDistributionsTransfereeRegionalDistribution = (option) => request.post(`/transfereeRegionalDistributions/transfereeRegionalDistribution`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 添加
* * 添加
*
* @transfereeRegionalDistribution {} transfereeRegionalDistribution
*/
export const putTransfereeRegionalDistributionsTransfereeRegionalDistribution = (option) => request.put(`/transfereeRegionalDistributions/transfereeRegionalDistribution`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @transfereeRegionalDistribution {} transfereeRegionalDistribution
*/
export const postTransfereeRegionalDistributionsTransfereeRegionalDistributionSelective = (option) => request.post(`/transfereeRegionalDistributions/transfereeRegionalDistributionSelective`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @transfereeRegionalDistribution {} transfereeRegionalDistribution
*/
export const putTransfereeRegionalDistributionsTransfereeRegionalDistributionSelective = (option) => request.put(`/transfereeRegionalDistributions/transfereeRegionalDistributionSelective`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postTransfereeRegionalDistributionsTransfereeRegionalDistributions = (option) => request.post(`/transfereeRegionalDistributions/transfereeRegionalDistributions`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 批量添加
* * 批量添加
*
* @transfereeRegionalDistributions {} transfereeRegionalDistributions
*/
export const putTransfereeRegionalDistributionsTransfereeRegionalDistributions = (option) => request.put(`/transfereeRegionalDistributions/transfereeRegionalDistributions`, option)
    

    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据主键获取TransfereeRegionalDistribution
* * 若无，返回null
*
* @trdId {string} trdId
*/
export const getTransfereeRegionalDistributions = (option) => request.get(`/transfereeRegionalDistributions/${option["trdId"]}`, option)
    
/**
* * 运营-知识产权受让单位地区分布接口
* * 根据主键删除
* * 根据主键删除
*
* @trdId {string} 主键
*/
export const deleteTransfereeRegionalDistributions = (option) => request.delete(`/transfereeRegionalDistributions/${option["trdId"]}`, option)
    


    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @eptrId {string} 
* @eptrIdLike {string} 
* @eptrIdOrderByAsc {boolean} 
* @eptrIdOrderByDesc {boolean} 
* @enterpriseName {string} 
* @enterpriseNameLike {string} 
* @enterpriseNameOrderByAsc {boolean} 
* @enterpriseNameOrderByDesc {boolean} 
* @tradingVolume {integer} 
* @tradingVolumeOrderByAsc {boolean} 
* @tradingVolumeOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
*/
export const postEnterprisePropertyTransactionRanksConditions = (option) => request.post(`/enterprisePropertyTransactionRanks/conditions`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据条件获取分页信息
* * 
*
* @enterprisePropertyTransactionRankRequest {} enterprisePropertyTransactionRankRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postEnterprisePropertyTransactionRanksConditionsPage = (option) => request.post(`/enterprisePropertyTransactionRanks/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @enterprisePropertyTransactionRank {} enterprisePropertyTransactionRank
*/
export const postEnterprisePropertyTransactionRanksEnterprisePropertyTransactionRank = (option) => request.post(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRank`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 添加
* * 添加
*
* @enterprisePropertyTransactionRank {} enterprisePropertyTransactionRank
*/
export const putEnterprisePropertyTransactionRanksEnterprisePropertyTransactionRank = (option) => request.put(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRank`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @enterprisePropertyTransactionRank {} enterprisePropertyTransactionRank
*/
export const postEnterprisePropertyTransactionRanksEnterprisePropertyTransactionRankSelective = (option) => request.post(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRankSelective`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @enterprisePropertyTransactionRank {} enterprisePropertyTransactionRank
*/
export const putEnterprisePropertyTransactionRanksEnterprisePropertyTransactionRankSelective = (option) => request.put(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRankSelective`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postEnterprisePropertyTransactionRanksEnterprisePropertyTransactionRanks = (option) => request.post(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRanks`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 批量添加
* * 批量添加
*
* @enterprisePropertyTransactionRanks {} enterprisePropertyTransactionRanks
*/
export const putEnterprisePropertyTransactionRanksEnterprisePropertyTransactionRanks = (option) => request.put(`/enterprisePropertyTransactionRanks/enterprisePropertyTransactionRanks`, option)
    

    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据主键获取EnterprisePropertyTransactionRank
* * 若无，返回null
*
* @eptrId {string} eptrId
*/
export const getEnterprisePropertyTransactionRanks = (option) => request.get(`/enterprisePropertyTransactionRanks/${option["eptrId"]}`, option)
    
/**
* * 运营和重点项目-企业知识产权交易排名接口
* * 根据主键删除
* * 根据主键删除
*
* @eptrId {string} 主键
*/
export const deleteEnterprisePropertyTransactionRanks = (option) => request.delete(`/enterprisePropertyTransactionRanks/${option["eptrId"]}`, option)
    


    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @ramId {string} 
* @ramIdLike {string} 
* @ramIdOrderByAsc {boolean} 
* @ramIdOrderByDesc {boolean} 
* @intentionRegistration {integer} 
* @intentionRegistrationOrderByAsc {boolean} 
* @intentionRegistrationOrderByDesc {boolean} 
* @matchingNum {integer} 
* @matchingNumOrderByAsc {boolean} 
* @matchingNumOrderByDesc {boolean} 
* @type {string} 
* @typeLike {string} 
* @typeOrderByAsc {boolean} 
* @typeOrderByDesc {boolean} 
*/
export const postRegisterAndMatchsConditions = (option) => request.post(`/registerAndMatchs/conditions`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 根据条件获取分页信息
* * 
*
* @registerAndMatchRequest {} registerAndMatchRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postRegisterAndMatchsConditionsPage = (option) => request.post(`/registerAndMatchs/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @registerAndMatch {} registerAndMatch
*/
export const postRegisterAndMatchsRegisterAndMatch = (option) => request.post(`/registerAndMatchs/registerAndMatch`, option)
    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 添加
* * 添加
*
* @registerAndMatch {} registerAndMatch
*/
export const putRegisterAndMatchsRegisterAndMatch = (option) => request.put(`/registerAndMatchs/registerAndMatch`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @registerAndMatch {} registerAndMatch
*/
export const postRegisterAndMatchsRegisterAndMatchSelective = (option) => request.post(`/registerAndMatchs/registerAndMatchSelective`, option)
    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @registerAndMatch {} registerAndMatch
*/
export const putRegisterAndMatchsRegisterAndMatchSelective = (option) => request.put(`/registerAndMatchs/registerAndMatchSelective`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postRegisterAndMatchsRegisterAndMatchs = (option) => request.post(`/registerAndMatchs/registerAndMatchs`, option)
    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 批量添加
* * 批量添加
*
* @registerAndMatchs {} registerAndMatchs
*/
export const putRegisterAndMatchsRegisterAndMatchs = (option) => request.put(`/registerAndMatchs/registerAndMatchs`, option)
    

    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 根据主键获取RegisterAndMatch
* * 若无，返回null
*
* @ramId {string} ramId
*/
export const getRegisterAndMatchs = (option) => request.get(`/registerAndMatchs/${option["ramId"]}`, option)
    
/**
* * 运营和重点项目-意向登记及撮合量汇总接口
* * 根据主键删除
* * 根据主键删除
*
* @ramId {string} 主键
*/
export const deleteRegisterAndMatchs = (option) => request.delete(`/registerAndMatchs/${option["ramId"]}`, option)
    


    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @otfdId {string} 
* @otfdIdLike {string} 
* @otfdIdOrderByAsc {boolean} 
* @otfdIdOrderByDesc {boolean} 
* @technicalClassification2 {string} 
* @technicalClassification2Like {string} 
* @technicalClassification2OrderByAsc {boolean} 
* @technicalClassification2OrderByDesc {boolean} 
* @obligee {string} 
* @obligeeLike {string} 
* @obligeeOrderByAsc {boolean} 
* @obligeeOrderByDesc {boolean} 
* @patentQuantity {string} 
* @patentQuantityLike {string} 
* @patentQuantityOrderByAsc {boolean} 
* @patentQuantityOrderByDesc {boolean} 
* @technicalClassification1 {string} 
* @technicalClassification1Like {string} 
* @technicalClassification1OrderByAsc {boolean} 
* @technicalClassification1OrderByDesc {boolean} 
*/
export const postObligeeTechnicalFieldDistributionsConditions = (option) => request.post(`/obligeeTechnicalFieldDistributions/conditions`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据条件获取分页信息
* * 
*
* @obligeeTechnicalFieldDistributionRequest {} obligeeTechnicalFieldDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postObligeeTechnicalFieldDistributionsConditionsPage = (option) => request.post(`/obligeeTechnicalFieldDistributions/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @obligeeTechnicalFieldDistribution {} obligeeTechnicalFieldDistribution
*/
export const postObligeeTechnicalFieldDistributionsObligeeTechnicalFieldDistribution = (option) => request.post(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistribution`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 添加
* * 添加
*
* @obligeeTechnicalFieldDistribution {} obligeeTechnicalFieldDistribution
*/
export const putObligeeTechnicalFieldDistributionsObligeeTechnicalFieldDistribution = (option) => request.put(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistribution`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @obligeeTechnicalFieldDistribution {} obligeeTechnicalFieldDistribution
*/
export const postObligeeTechnicalFieldDistributionsObligeeTechnicalFieldDistributionSelective = (option) => request.post(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributionSelective`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @obligeeTechnicalFieldDistribution {} obligeeTechnicalFieldDistribution
*/
export const putObligeeTechnicalFieldDistributionsObligeeTechnicalFieldDistributionSelective = (option) => request.put(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributionSelective`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postObligeeTechnicalFieldDistributionsObligeeTechnicalFieldDistributions = (option) => request.post(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributions`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 批量添加
* * 批量添加
*
* @obligeeTechnicalFieldDistributions {} obligeeTechnicalFieldDistributions
*/
export const putObligeeTechnicalFieldDistributionsObligeeTechnicalFieldDistributions = (option) => request.put(`/obligeeTechnicalFieldDistributions/obligeeTechnicalFieldDistributions`, option)
    

    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据主键获取ObligeeTechnicalFieldDistribution
* * 若无，返回null
*
* @otfdId {string} otfdId
*/
export const getObligeeTechnicalFieldDistributions = (option) => request.get(`/obligeeTechnicalFieldDistributions/${option["otfdId"]}`, option)
    
/**
* * 运营和重点项目-权利人技术领域分布接口
* * 根据主键删除
* * 根据主键删除
*
* @otfdId {string} 主键
*/
export const deleteObligeeTechnicalFieldDistributions = (option) => request.delete(`/obligeeTechnicalFieldDistributions/${option["otfdId"]}`, option)
    


    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @ootdId {string} 
* @ootdIdLike {string} 
* @ootdIdOrderByAsc {boolean} 
* @ootdIdOrderByDesc {boolean} 
* @organType {string} 
* @organTypeLike {string} 
* @organTypeOrderByAsc {boolean} 
* @organTypeOrderByDesc {boolean} 
* @patenteeNum {integer} 
* @patenteeNumOrderByAsc {boolean} 
* @patenteeNumOrderByDesc {boolean} 
* @patentOwnership {integer} 
* @patentOwnershipOrderByAsc {boolean} 
* @patentOwnershipOrderByDesc {boolean} 
*/
export const postObligeeOrganTypeDistributionsConditions = (option) => request.post(`/obligeeOrganTypeDistributions/conditions`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据条件获取分页信息
* * 
*
* @obligeeOrganTypeDistributionRequest {} obligeeOrganTypeDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postObligeeOrganTypeDistributionsConditionsPage = (option) => request.post(`/obligeeOrganTypeDistributions/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @obligeeOrganTypeDistribution {} obligeeOrganTypeDistribution
*/
export const postObligeeOrganTypeDistributionsObligeeOrganTypeDistribution = (option) => request.post(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistribution`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 添加
* * 添加
*
* @obligeeOrganTypeDistribution {} obligeeOrganTypeDistribution
*/
export const putObligeeOrganTypeDistributionsObligeeOrganTypeDistribution = (option) => request.put(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistribution`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @obligeeOrganTypeDistribution {} obligeeOrganTypeDistribution
*/
export const postObligeeOrganTypeDistributionsObligeeOrganTypeDistributionSelective = (option) => request.post(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributionSelective`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @obligeeOrganTypeDistribution {} obligeeOrganTypeDistribution
*/
export const putObligeeOrganTypeDistributionsObligeeOrganTypeDistributionSelective = (option) => request.put(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributionSelective`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postObligeeOrganTypeDistributionsObligeeOrganTypeDistributions = (option) => request.post(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributions`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 批量添加
* * 批量添加
*
* @obligeeOrganTypeDistributions {} obligeeOrganTypeDistributions
*/
export const putObligeeOrganTypeDistributionsObligeeOrganTypeDistributions = (option) => request.put(`/obligeeOrganTypeDistributions/obligeeOrganTypeDistributions`, option)
    

    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据主键获取ObligeeOrganTypeDistribution
* * 若无，返回null
*
* @ootdId {string} ootdId
*/
export const getObligeeOrganTypeDistributions = (option) => request.get(`/obligeeOrganTypeDistributions/${option["ootdId"]}`, option)
    
/**
* * 运营和重点项目-权利人机构类型分布接口
* * 根据主键删除
* * 根据主键删除
*
* @ootdId {string} 主键
*/
export const deleteObligeeOrganTypeDistributions = (option) => request.delete(`/obligeeOrganTypeDistributions/${option["ootdId"]}`, option)
    


    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @ptdtId {string} 
* @ptdtIdLike {string} 
* @ptdtIdOrderByAsc {boolean} 
* @ptdtIdOrderByDesc {boolean} 
* @tradingVolume {integer} 
* @tradingVolumeOrderByAsc {boolean} 
* @tradingVolumeOrderByDesc {boolean} 
* @ptdtYear {integer} 
* @ptdtYearOrderByAsc {boolean} 
* @ptdtYearOrderByDesc {boolean} 
* @ptdtMonth {integer} 
* @ptdtMonthOrderByAsc {boolean} 
* @ptdtMonthOrderByDesc {boolean} 
* @ptdtDay {integer} 
* @ptdtDayOrderByAsc {boolean} 
* @ptdtDayOrderByDesc {boolean} 
* @ptdtDateStart {string} 
* @ptdtDateEnd {string} 
* @ptdtDateOrderByAsc {boolean} 
* @ptdtDateOrderByDesc {boolean} 
*/
export const postPropertyTransactionDevelopmentTrendsConditions = (option) => request.post(`/propertyTransactionDevelopmentTrends/conditions`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据条件获取分页信息
* * 
*
* @propertyTransactionDevelopmentTrendRequest {} propertyTransactionDevelopmentTrendRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPropertyTransactionDevelopmentTrendsConditionsPage = (option) => request.post(`/propertyTransactionDevelopmentTrends/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @propertyTransactionDevelopmentTrend {} propertyTransactionDevelopmentTrend
*/
export const postPropertyTransactionDevelopmentTrendsPropertyTransactionDevelopmentTrend = (option) => request.post(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrend`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 添加
* * 添加
*
* @propertyTransactionDevelopmentTrend {} propertyTransactionDevelopmentTrend
*/
export const putPropertyTransactionDevelopmentTrendsPropertyTransactionDevelopmentTrend = (option) => request.put(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrend`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @propertyTransactionDevelopmentTrend {} propertyTransactionDevelopmentTrend
*/
export const postPropertyTransactionDevelopmentTrendsPropertyTransactionDevelopmentTrendSelective = (option) => request.post(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrendSelective`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @propertyTransactionDevelopmentTrend {} propertyTransactionDevelopmentTrend
*/
export const putPropertyTransactionDevelopmentTrendsPropertyTransactionDevelopmentTrendSelective = (option) => request.put(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrendSelective`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPropertyTransactionDevelopmentTrendsPropertyTransactionDevelopmentTrends = (option) => request.post(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrends`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 批量添加
* * 批量添加
*
* @propertyTransactionDevelopmentTrends {} propertyTransactionDevelopmentTrends
*/
export const putPropertyTransactionDevelopmentTrendsPropertyTransactionDevelopmentTrends = (option) => request.put(`/propertyTransactionDevelopmentTrends/propertyTransactionDevelopmentTrends`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 获取年度知识产权交易量
* * 获取年度知识产权交易量
*

export const postPropertyTransactionDevelopmentTrendsQuery = (option) => request.post(`/propertyTransactionDevelopmentTrends/query`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 获取月度知识产权交易量
* * 获取月度知识产权交易量
*

export const postPropertyTransactionDevelopmentTrendsQueryMonth = (option) => request.post(`/propertyTransactionDevelopmentTrends/queryMonth`, option)
    

    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据主键获取PropertyTransactionDevelopmentTrend
* * 若无，返回null
*
* @ptdtId {string} ptdtId
*/
export const getPropertyTransactionDevelopmentTrends = (option) => request.get(`/propertyTransactionDevelopmentTrends/${option["ptdtId"]}`, option)
    
/**
* * 运营和重点项目-知识产权交易发展趋势接口
* * 根据主键删除
* * 根据主键删除
*
* @ptdtId {string} 主键
*/
export const deletePropertyTransactionDevelopmentTrends = (option) => request.delete(`/propertyTransactionDevelopmentTrends/${option["ptdtId"]}`, option)
    


    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @kppiId {string} 
* @kppiIdLike {string} 
* @kppiIdOrderByAsc {boolean} 
* @kppiIdOrderByDesc {boolean} 
* @regionalType {string} 
* @regionalTypeLike {string} 
* @regionalTypeOrderByAsc {boolean} 
* @regionalTypeOrderByDesc {boolean} 
* @applicationInvention {integer} 
* @applicationInventionOrderByAsc {boolean} 
* @applicationInventionOrderByDesc {boolean} 
* @applicationUtilityModel {integer} 
* @applicationUtilityModelOrderByAsc {boolean} 
* @applicationUtilityModelOrderByDesc {boolean} 
* @authorizedInvention {integer} 
* @authorizedInventionOrderByAsc {boolean} 
* @authorizedInventionOrderByDesc {boolean} 
* @authorizedUtilityModel {integer} 
* @authorizedUtilityModelOrderByAsc {boolean} 
* @authorizedUtilityModelOrderByDesc {boolean} 
*/
export const postKeyProjectsPatentInfosConditions = (option) => request.post(`/keyProjectsPatentInfos/conditions`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据条件获取分页信息
* * 
*
* @keyProjectsPatentInfoRequest {} keyProjectsPatentInfoRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postKeyProjectsPatentInfosConditionsPage = (option) => request.post(`/keyProjectsPatentInfos/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @keyProjectsPatentInfo {} keyProjectsPatentInfo
*/
export const postKeyProjectsPatentInfosKeyProjectsPatentInfo = (option) => request.post(`/keyProjectsPatentInfos/keyProjectsPatentInfo`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 添加
* * 添加
*
* @keyProjectsPatentInfo {} keyProjectsPatentInfo
*/
export const putKeyProjectsPatentInfosKeyProjectsPatentInfo = (option) => request.put(`/keyProjectsPatentInfos/keyProjectsPatentInfo`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @keyProjectsPatentInfo {} keyProjectsPatentInfo
*/
export const postKeyProjectsPatentInfosKeyProjectsPatentInfoSelective = (option) => request.post(`/keyProjectsPatentInfos/keyProjectsPatentInfoSelective`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @keyProjectsPatentInfo {} keyProjectsPatentInfo
*/
export const putKeyProjectsPatentInfosKeyProjectsPatentInfoSelective = (option) => request.put(`/keyProjectsPatentInfos/keyProjectsPatentInfoSelective`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postKeyProjectsPatentInfosKeyProjectsPatentInfos = (option) => request.post(`/keyProjectsPatentInfos/keyProjectsPatentInfos`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 批量添加
* * 批量添加
*
* @keyProjectsPatentInfos {} keyProjectsPatentInfos
*/
export const putKeyProjectsPatentInfosKeyProjectsPatentInfos = (option) => request.put(`/keyProjectsPatentInfos/keyProjectsPatentInfos`, option)
    

    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据主键获取KeyProjectsPatentInfo
* * 若无，返回null
*
* @kppiId {string} kppiId
*/
export const getKeyProjectsPatentInfos = (option) => request.get(`/keyProjectsPatentInfos/${option["kppiId"]}`, option)
    
/**
* * 运营和重点项目-重点项目专利情况接口
* * 根据主键删除
* * 根据主键删除
*
* @kppiId {string} 主键
*/
export const deleteKeyProjectsPatentInfos = (option) => request.delete(`/keyProjectsPatentInfos/${option["kppiId"]}`, option)
    


    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @ptId {string} 
* @ptIdLike {string} 
* @ptIdOrderByAsc {boolean} 
* @ptIdOrderByDesc {boolean} 
* @patentTechnologyName {string} 
* @patentTechnologyNameLike {string} 
* @patentTechnologyNameOrderByAsc {boolean} 
* @patentTechnologyNameOrderByDesc {boolean} 
* @keyProjectsNum {integer} 
* @keyProjectsNumOrderByAsc {boolean} 
* @keyProjectsNumOrderByDesc {boolean} 
* @patentNum {integer} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
*/
export const postPatentTechnologysConditions = (option) => request.post(`/patentTechnologys/conditions`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据条件获取分页信息
* * 
*
* @patentTechnologyRequest {} patentTechnologyRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPatentTechnologysConditionsPage = (option) => request.post(`/patentTechnologys/conditionsPage`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @patentTechnology {} patentTechnology
*/
export const postPatentTechnologysPatentTechnology = (option) => request.post(`/patentTechnologys/patentTechnology`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 添加
* * 添加
*
* @patentTechnology {} patentTechnology
*/
export const putPatentTechnologysPatentTechnology = (option) => request.put(`/patentTechnologys/patentTechnology`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @patentTechnology {} patentTechnology
*/
export const postPatentTechnologysPatentTechnologySelective = (option) => request.post(`/patentTechnologys/patentTechnologySelective`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @patentTechnology {} patentTechnology
*/
export const putPatentTechnologysPatentTechnologySelective = (option) => request.put(`/patentTechnologys/patentTechnologySelective`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPatentTechnologysPatentTechnologys = (option) => request.post(`/patentTechnologys/patentTechnologys`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 批量添加
* * 批量添加
*
* @patentTechnologys {} patentTechnologys
*/
export const putPatentTechnologysPatentTechnologys = (option) => request.put(`/patentTechnologys/patentTechnologys`, option)
    

    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据主键获取PatentTechnology
* * 若无，返回null
*
* @ptId {string} ptId
*/
export const getPatentTechnologys = (option) => request.get(`/patentTechnologys/${option["ptId"]}`, option)
    
/**
* * 运营和重点项目-重点项目专利技术情况接口
* * 根据主键删除
* * 根据主键删除
*
* @ptId {string} 主键
*/
export const deletePatentTechnologys = (option) => request.delete(`/patentTechnologys/${option["ptId"]}`, option)
    


    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @porId {string} 
* @porIdLike {string} 
* @porIdOrderByAsc {boolean} 
* @porIdOrderByDesc {boolean} 
* @patentName {string} 
* @patentNameLike {string} 
* @patentNameOrderByAsc {boolean} 
* @patentNameOrderByDesc {boolean} 
* @num {integer} 
* @numOrderByAsc {boolean} 
* @numOrderByDesc {boolean} 
* @sort {integer} 
* @sortOrderByAsc {boolean} 
* @sortOrderByDesc {boolean} 
* @newEnergyNum {integer} 
* @newEnergyNumOrderByAsc {boolean} 
* @newEnergyNumOrderByDesc {boolean} 
*/
export const postPatentOutputRanksConditions = (option) => request.post(`/patentOutputRanks/conditions`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据条件获取分页信息
* * 
*
* @patentOutputRankRequest {} patentOutputRankRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPatentOutputRanksConditionsPage = (option) => request.post(`/patentOutputRanks/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @patentOutputRank {} patentOutputRank
*/
export const postPatentOutputRanksPatentOutputRank = (option) => request.post(`/patentOutputRanks/patentOutputRank`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 添加
* * 添加
*
* @patentOutputRank {} patentOutputRank
*/
export const putPatentOutputRanksPatentOutputRank = (option) => request.put(`/patentOutputRanks/patentOutputRank`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @patentOutputRank {} patentOutputRank
*/
export const postPatentOutputRanksPatentOutputRankSelective = (option) => request.post(`/patentOutputRanks/patentOutputRankSelective`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @patentOutputRank {} patentOutputRank
*/
export const putPatentOutputRanksPatentOutputRankSelective = (option) => request.put(`/patentOutputRanks/patentOutputRankSelective`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPatentOutputRanksPatentOutputRanks = (option) => request.post(`/patentOutputRanks/patentOutputRanks`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 批量添加
* * 批量添加
*
* @patentOutputRanks {} patentOutputRanks
*/
export const putPatentOutputRanksPatentOutputRanks = (option) => request.put(`/patentOutputRanks/patentOutputRanks`, option)
    

    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据主键获取PatentOutputRank
* * 若无，返回null
*
* @porId {string} porId
*/
export const getPatentOutputRanks = (option) => request.get(`/patentOutputRanks/${option["porId"]}`, option)
    
/**
* * 重点项目-重点项目专利产出数量排行接口
* * 根据主键删除
* * 根据主键删除
*
* @porId {string} 主键
*/
export const deletePatentOutputRanks = (option) => request.delete(`/patentOutputRanks/${option["porId"]}`, option)
    


    
/**
* * 重点项目-重点项目专利分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @pdId {string} 
* @pdIdLike {string} 
* @pdIdOrderByAsc {boolean} 
* @pdIdOrderByDesc {boolean} 
* @provinceName {string} 
* @provinceNameLike {string} 
* @provinceNameOrderByAsc {boolean} 
* @provinceNameOrderByDesc {boolean} 
* @projectNum {string} 
* @projectNumLike {string} 
* @projectNumOrderByAsc {boolean} 
* @projectNumOrderByDesc {boolean} 
* @patentNum {string} 
* @patentNumLike {string} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
* @increaseAmount {string} 
* @increaseAmountLike {string} 
* @increaseAmountOrderByAsc {boolean} 
* @increaseAmountOrderByDesc {boolean} 
* @inventionPatent {string} 
* @inventionPatentLike {string} 
* @inventionPatentOrderByAsc {boolean} 
* @inventionPatentOrderByDesc {boolean} 
* @utilityModel {string} 
* @utilityModelLike {string} 
* @utilityModelOrderByAsc {boolean} 
* @utilityModelOrderByDesc {boolean} 
* @appearancePatent {string} 
* @appearancePatentLike {string} 
* @appearancePatentOrderByAsc {boolean} 
* @appearancePatentOrderByDesc {boolean} 
* @newInvention {string} 
* @newInventionLike {string} 
* @newInventionOrderByAsc {boolean} 
* @newInventionOrderByDesc {boolean} 
* @newUtility {string} 
* @newUtilityLike {string} 
* @newUtilityOrderByAsc {boolean} 
* @newUtilityOrderByDesc {boolean} 
* @newAppearance {string} 
* @newAppearanceLike {string} 
* @newAppearanceOrderByAsc {boolean} 
* @newAppearanceOrderByDesc {boolean} 
*/
export const postPatentDistributionsConditions = (option) => request.post(`/patentDistributions/conditions`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 根据条件获取分页信息
* * 
*
* @patentDistributionRequest {} patentDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postPatentDistributionsConditionsPage = (option) => request.post(`/patentDistributions/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @patentDistribution {} patentDistribution
*/
export const postPatentDistributionsPatentDistribution = (option) => request.post(`/patentDistributions/patentDistribution`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 添加
* * 添加
*
* @patentDistribution {} patentDistribution
*/
export const putPatentDistributionsPatentDistribution = (option) => request.put(`/patentDistributions/patentDistribution`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @patentDistribution {} patentDistribution
*/
export const postPatentDistributionsPatentDistributionSelective = (option) => request.post(`/patentDistributions/patentDistributionSelective`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @patentDistribution {} patentDistribution
*/
export const putPatentDistributionsPatentDistributionSelective = (option) => request.put(`/patentDistributions/patentDistributionSelective`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postPatentDistributionsPatentDistributions = (option) => request.post(`/patentDistributions/patentDistributions`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 批量添加
* * 批量添加
*
* @patentDistributions {} patentDistributions
*/
export const putPatentDistributionsPatentDistributions = (option) => request.put(`/patentDistributions/patentDistributions`, option)
    

    
/**
* * 重点项目-重点项目专利分布接口
* * 根据主键获取PatentDistribution
* * 若无，返回null
*
* @pdId {string} pdId
*/
export const getPatentDistributions = (option) => request.get(`/patentDistributions/${option["pdId"]}`, option)
    
/**
* * 重点项目-重点项目专利分布接口
* * 根据主键删除
* * 根据主键删除
*
* @pdId {string} 主键
*/
export const deletePatentDistributions = (option) => request.delete(`/patentDistributions/${option["pdId"]}`, option)
    


    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @kppoId {string} 
* @kppoIdLike {string} 
* @kppoIdOrderByAsc {boolean} 
* @kppoIdOrderByDesc {boolean} 
* @projectInterval {string} 
* @projectIntervalLike {string} 
* @projectIntervalOrderByAsc {boolean} 
* @projectIntervalOrderByDesc {boolean} 
* @patentNum {integer} 
* @patentNumOrderByAsc {boolean} 
* @patentNumOrderByDesc {boolean} 
*/
export const postKeyProjectsPatentOutputsConditions = (option) => request.post(`/keyProjectsPatentOutputs/conditions`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据条件获取分页信息
* * 
*
* @keyProjectsPatentOutputRequest {} keyProjectsPatentOutputRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postKeyProjectsPatentOutputsConditionsPage = (option) => request.post(`/keyProjectsPatentOutputs/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @keyProjectsPatentOutput {} keyProjectsPatentOutput
*/
export const postKeyProjectsPatentOutputsKeyProjectsPatentOutput = (option) => request.post(`/keyProjectsPatentOutputs/keyProjectsPatentOutput`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 添加
* * 添加
*
* @keyProjectsPatentOutput {} keyProjectsPatentOutput
*/
export const putKeyProjectsPatentOutputsKeyProjectsPatentOutput = (option) => request.put(`/keyProjectsPatentOutputs/keyProjectsPatentOutput`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @keyProjectsPatentOutput {} keyProjectsPatentOutput
*/
export const postKeyProjectsPatentOutputsKeyProjectsPatentOutputSelective = (option) => request.post(`/keyProjectsPatentOutputs/keyProjectsPatentOutputSelective`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @keyProjectsPatentOutput {} keyProjectsPatentOutput
*/
export const putKeyProjectsPatentOutputsKeyProjectsPatentOutputSelective = (option) => request.put(`/keyProjectsPatentOutputs/keyProjectsPatentOutputSelective`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postKeyProjectsPatentOutputsKeyProjectsPatentOutputs = (option) => request.post(`/keyProjectsPatentOutputs/keyProjectsPatentOutputs`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 批量添加
* * 批量添加
*
* @keyProjectsPatentOutputs {} keyProjectsPatentOutputs
*/
export const putKeyProjectsPatentOutputsKeyProjectsPatentOutputs = (option) => request.put(`/keyProjectsPatentOutputs/keyProjectsPatentOutputs`, option)
    

    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据主键获取KeyProjectsPatentOutput
* * 若无，返回null
*
* @kppoId {string} kppoId
*/
export const getKeyProjectsPatentOutputs = (option) => request.get(`/keyProjectsPatentOutputs/${option["kppoId"]}`, option)
    
/**
* * 重点项目-重点项目产出专利分布接口
* * 根据主键删除
* * 根据主键删除
*
* @kppoId {string} 主键
*/
export const deleteKeyProjectsPatentOutputs = (option) => request.delete(`/keyProjectsPatentOutputs/${option["kppoId"]}`, option)
    


    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据条件获取信息
* * 若不填，则返回全部信息
*
* @nepdId {string} 
* @nepdIdLike {string} 
* @nepdIdOrderByAsc {boolean} 
* @nepdIdOrderByDesc {boolean} 
* @newEnergyNum {integer} 
* @newEnergyNumOrderByAsc {boolean} 
* @newEnergyNumOrderByDesc {boolean} 
* @electricityNum {integer} 
* @electricityNumOrderByAsc {boolean} 
* @electricityNumOrderByDesc {boolean} 
*/
export const postNewEnergyPatentDistributionsConditions = (option) => request.post(`/newEnergyPatentDistributions/conditions`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据条件获取分页信息
* * 
*
* @newEnergyPatentDistributionRequest {} newEnergyPatentDistributionRequest
* @offset {integer} offset
* @limit {integer} limit
*/
export const postNewEnergyPatentDistributionsConditionsPage = (option) => request.post(`/newEnergyPatentDistributions/conditionsPage`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 更新
* * 根据主键进行更新，主键不能为null
*
* @newEnergyPatentDistribution {} newEnergyPatentDistribution
*/
export const postNewEnergyPatentDistributionsNewEnergyPatentDistribution = (option) => request.post(`/newEnergyPatentDistributions/newEnergyPatentDistribution`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 添加
* * 添加
*
* @newEnergyPatentDistribution {} newEnergyPatentDistribution
*/
export const putNewEnergyPatentDistributionsNewEnergyPatentDistribution = (option) => request.put(`/newEnergyPatentDistributions/newEnergyPatentDistribution`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 有选择性地更新
* * 根据主键进行更新，主键不能为null
*
* @newEnergyPatentDistribution {} newEnergyPatentDistribution
*/
export const postNewEnergyPatentDistributionsNewEnergyPatentDistributionSelective = (option) => request.post(`/newEnergyPatentDistributions/newEnergyPatentDistributionSelective`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 有选择地添加
* * 若值为null，不进行插入
*
* @newEnergyPatentDistribution {} newEnergyPatentDistribution
*/
export const putNewEnergyPatentDistributionsNewEnergyPatentDistributionSelective = (option) => request.put(`/newEnergyPatentDistributions/newEnergyPatentDistributionSelective`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 批量删除
* * 通过主键列表批量删除
*
* @ids {} ids
*/
export const postNewEnergyPatentDistributionsNewEnergyPatentDistributions = (option) => request.post(`/newEnergyPatentDistributions/newEnergyPatentDistributions`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 批量添加
* * 批量添加
*
* @newEnergyPatentDistributions {} newEnergyPatentDistributions
*/
export const putNewEnergyPatentDistributionsNewEnergyPatentDistributions = (option) => request.put(`/newEnergyPatentDistributions/newEnergyPatentDistributions`, option)
    

    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据主键获取NewEnergyPatentDistribution
* * 若无，返回null
*
* @nepdId {string} nepdId
*/
export const getNewEnergyPatentDistributions = (option) => request.get(`/newEnergyPatentDistributions/${option["nepdId"]}`, option)
    
/**
* * 重点项目-重点项目新能源专利分布接口
* * 根据主键删除
* * 根据主键删除
*
* @nepdId {string} 主键
*/
export const deleteNewEnergyPatentDistributions = (option) => request.delete(`/newEnergyPatentDistributions/${option["nepdId"]}`, option)
    

