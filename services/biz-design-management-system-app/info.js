import { Request } from '@/utils/SkUtils'

export const CategoryApi = {
	// 请求树形3D展示类目请求
	"GET/category/getTree": {
		'url': '/category/getTree',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const CommunityApi = {
	// 获取list请求
	"POST/community/getList": {
		'url': '/community/getList',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const CommunityLayoutApi = {
	// 详情接口
	"GET/community/layout/getLayoutInfo": {
		'url': '/community/layout/getLayoutInfo',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取page请求
	"POST/community/layout/getPage": {
		'url': '/community/layout/getPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const CommunitySchemeApi = {
	// 新增请求
	"POST/community/scheme/addInfo": {
		'url': '/community/scheme/addInfo',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取请求
	"POST/community/scheme/getList": {
		'url': '/community/scheme/getList',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取page请求
	"POST/community/scheme/getPage": {
		'url': '/community/scheme/getPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新请求
	"POST/community/scheme/updateInfo": {
		'url': '/community/scheme/updateInfo',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const CommunitySchemePictureApi = {
	// 新增请求
	"POST/community/scheme/picture/addInfo": {
		'url': '/community/scheme/picture/addInfo',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 生成二维码
	"GET/community/scheme/picture/createQcode/{id}": {
		'url': '/community/scheme/picture/createQcode/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 通过设计软件所建方案关联漫游图列表获取请求
	"POST/community/scheme/picture/getList": {
		'url': '/community/scheme/picture/getList',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取请求
	"POST/community/scheme/picture/getPage": {
		'url': '/community/scheme/picture/getPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新请求
	"POST/community/scheme/picture/updateInfo": {
		'url': '/community/scheme/picture/updateInfo',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const DesignCommunitySchemeApi = {
	// 获取详情请求
	"GET/community/scheme/getInfo/{id}": {
		'url': '/community/scheme/getInfo/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const DesignComponentApi = {
	// 获取共通组件列表请求
	"GET/design/component/getCommonPartsList": {
		'url': '/design/component/getCommonPartsList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 查询获取设计组件list请求
	"GET/design/component/getDesignPartList": {
		'url': '/design/component/getDesignPartList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取空间部件列表请求
	"GET/design/component/getSpacePartsList": {
		'url': '/design/component/getSpacePartsList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const DesignMatchQuestionApi = {
	// 获取答案对应标签list请求
	"POST/design/match/question/getLabelList": {
		'url': '/design/match/question/getLabelList',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 根据空间类型编码获取需求问题列表请求
	"POST/design/match/question/getQuestionList": {
		'url': '/design/match/question/getQuestionList',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const DesignMerchandiseCollectApi = {
	// 分页请求
	"POST/design/merchandise/collect/getPage": {
		'url': '/design/merchandise/collect/getPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 新增商品收藏请求
	"POST/design/merchandise/collect/insert": {
		'url': '/design/merchandise/collect/insert',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 修改商品收藏请求
	"POST/design/merchandise/collect/update": {
		'url': '/design/merchandise/collect/update',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const DesignTemplateApi = {
	// 删除方案模板请求
	"DELETE/design/template/deleteTemplate/{id}": {
		'url': '/design/template/deleteTemplate/{id}',
		'methon': 'DELETE',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 通过标签获取模板相关数据请求
	"POST/design/template/getInfoFromTemplateAndLabel": {
		'url': '/design/template/getInfoFromTemplateAndLabel',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 根据标签内容查询商品请求
	"POST/design/template/getLabelRelMerchandise": {
		'url': '/design/template/getLabelRelMerchandise',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 精细化规则list
	"GET/design/template/getRefinementRuleList": {
		'url': '/design/template/getRefinementRuleList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取方案模板详情请求
	"GET/design/template/getTemplate/{id}": {
		'url': '/design/template/getTemplate/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 查询获取方案模板分页请求
	"POST/design/template/getTemplatePage": {
		'url': '/design/template/getTemplatePage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取方案模板管理商品请求
	"GET/design/template/getTemplateRelMerchandise": {
		'url': '/design/template/getTemplateRelMerchandise',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取方案模板关联商品请求
	"POST/design/template/getTemplateRelMerchandisePage/{id}": {
		'url': '/design/template/getTemplateRelMerchandisePage/{id}',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 方案模板测试结果请求
	"GET/design/template/getTemplateTestResult/{id}": {
		'url': '/design/template/getTemplateTestResult/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 模板新增关联商品请求
	"POST/design/template/insertRelMerchanandise": {
		'url': '/design/template/insertRelMerchanandise',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 新增方案模板请求
	"POST/design/template/insertTemplate": {
		'url': '/design/template/insertTemplate',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// json操作
	"POST/design/template/operateJson": {
		'url': '/design/template/operateJson',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 删除/设置默认关联商品请求 
	"PUT/design/template/updateRelMerchandise": {
		'url': '/design/template/updateRelMerchandise',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新设计模板请求
	"PUT/design/template/updateTemplate": {
		'url': '/design/template/updateTemplate',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新设计模板关联商品Json请求
	"PUT/design/template/updateTemplateJsonstr": {
		'url': '/design/template/updateTemplateJsonstr',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const DesignTemplateLayoutApi = {
	// 获取详情请求
	"GET/design/template/layout/getInfo/{id}": {
		'url': '/design/template/layout/getInfo/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 查询list请求
	"POST/design/template/layout/getList": {
		'url': '/design/template/layout/getList',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 查询分页请求
	"POST/design/template/layout/getPage": {
		'url': '/design/template/layout/getPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 新增请求
	"POST/design/template/layout/insertInfo": {
		'url': '/design/template/layout/insertInfo',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新请求
	"PUT/design/template/layout/updateInfo": {
		'url': '/design/template/layout/updateInfo',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const MerchandiseApi = {
	// 品牌获取请求
	"GET/merchandise/getBrandList": {
		'url': '/merchandise/getBrandList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 非卖商品sku分页请求
	"POST/merchandise/getIfNoSaleSkuPage": {
		'url': '/merchandise/getIfNoSaleSkuPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取商品详情接口
	"GET/merchandise/getMerchandise/{id}": {
		'url': '/merchandise/getMerchandise/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 分页查询部品关联sku商品数据请求
	"POST/merchandise/getPartsSkuPage": {
		'url': '/merchandise/getPartsSkuPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 通过产品规格ID获取sku信息以及相应3D类目
	"GET/merchandise/getSkuByProductSkuId": {
		'url': '/merchandise/getSkuByProductSkuId',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 商品sku分页请求
	"POST/merchandise/getSkuPage": {
		'url': '/merchandise/getSkuPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 根据3d类目获取sku属性list请求
	"GET/merchandise/getSkuPropertyList": {
		'url': '/merchandise/getSkuPropertyList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 替换商品sku分页请求
	"POST/merchandise/getSkuReplacePage": {
		'url': '/merchandise/getSkuReplacePage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 品牌商 商品 spu 分页请求
	"POST/merchandise/getSpuPage": {
		'url': '/merchandise/getSpuPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 分页查询商品数据请求
	"POST/merchandise/page": {
		'url': '/merchandise/page',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const SchemeExcellentApi = {
	// 获取检索条件请求
	"GET/scheme/excellent/getSearchCondition": {
		'url': '/scheme/excellent/getSearchCondition',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取分页请求
	"POST/scheme/excellent/page": {
		'url': '/scheme/excellent/page',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const SchemeHandleApi = {
	// 新建请求
	"POST/scheme/handle": {
		'url': '/scheme/handle',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 删除请求
	"PUT/scheme/handle/delete/{id}": {
		'url': '/scheme/handle/delete/{id}',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 导出方案清单请求
	"GET/scheme/handle/getExcel/{id}": {
		'url': '/scheme/handle/getExcel/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 分页查询方案
	"POST/scheme/handle/getPageRequest": {
		'url': '/scheme/handle/getPageRequest',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 分享请求
	"POST/scheme/handle/shareSchemeRequest": {
		'url': '/scheme/handle/shareSchemeRequest',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新丈量图请求
	"PUT/scheme/handle/updateMeasurePic": {
		'url': '/scheme/handle/updateMeasurePic',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取方案详情请求
	"GET/scheme/handle/{id}": {
		'url': '/scheme/handle/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新请求
	"PUT/scheme/handle/{id}": {
		'url': '/scheme/handle/{id}',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const SchemeQuotationApi = {
	// 报价清单page请求
	"POST/scheme/quotation/getPage": {
		'url': '/scheme/quotation/getPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取报价清单详情请求
	"GET/scheme/quotation/getQuotation/{id}": {
		'url': '/scheme/quotation/getQuotation/{id}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取清单列表请求
	"GET/scheme/quotation/getQuotationList": {
		'url': '/scheme/quotation/getQuotationList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取清单列表请求
	"GET/scheme/quotation/getQuotationTreeList": {
		'url': '/scheme/quotation/getQuotationTreeList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 新增请求
	"POST/scheme/quotation/insertQuotation": {
		'url': '/scheme/quotation/insertQuotation',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新请求
	"PUT/scheme/quotation/updateQuotation/{id}": {
		'url': '/scheme/quotation/updateQuotation/{id}',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 批量更新/新增方案清单列表请求
	"POST/scheme/quotation/updateQuotationList": {
		'url': '/scheme/quotation/updateQuotationList',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const SchemeResourceApi = {
	// 删除请求
	"DELETE/scheme/resource/deleteResource/{id}": {
		'url': '/scheme/resource/deleteResource/{id}',
		'methon': 'DELETE',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 获取渲染图请求
	"POST/scheme/resource/getPageResource": {
		'url': '/scheme/resource/getPageResource',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 新增请求
	"POST/scheme/resource/insertResource": {
		'url': '/scheme/resource/insertResource',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
	// 更新请求
	"PUT/scheme/resource/updateResource/{id}": {
		'url': '/scheme/resource/updateResource/{id}',
		'methon': 'PUT',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const SchemeServiceApi = {
	// 获取服务分页请求
	"POST/scheme/service/getServiceItemPage": {
		'url': '/scheme/service/getServiceItemPage',
		'methon': 'POST',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const SystemCodeApi = {
	// 根据类型编码获取列表请求
	"GET/system/code/getList/{code}": {
		'url': '/system/code/getList/{code}',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};
export const UserApi = {
	// 获取门店列表请求
	"GET/user/getStoreList": {
		'url': '/user/getStoreList',
		'methon': 'GET',
		'serviceId': 'BIZ-DESIGN-MANAGEMENT-SYSTEM-APP'
	},
};

export default Request.apiFormat({
	CategoryApi,
	CommunityApi,
	CommunityLayoutApi,
	CommunitySchemeApi,
	CommunitySchemePictureApi,
	DesignCommunitySchemeApi,
	DesignComponentApi,
	DesignMatchQuestionApi,
	DesignMerchandiseCollectApi,
	DesignTemplateApi,
	DesignTemplateLayoutApi,
	MerchandiseApi,
	SchemeExcellentApi,
	SchemeHandleApi,
	SchemeQuotationApi,
	SchemeResourceApi,
	SchemeServiceApi,
	SystemCodeApi,
	UserApi,
})