/*
    项目名称 FOF系统
    开发者 高晓松<gaoxiaosong@croot.com,704041637@qq.com>
    私募事业部
    生成日期 2020-12-01 15:29:33
*/

import request from '@/request.js'

/**
* 00公用
* 2019-03-04T06:30:38.133Z
*/
/**
* 产品信息列表查询  /product/product-info
* /product/product-info
*/
export const productProductinfo = (option) => request.get(`/product/product-info`, option)

/**
* 产品筛选信息 /product/product-select-info
* /product/product-select-info
*/
export const productProductselectinfo = (option) => request.get(`/product/product-select-info`, option)

/**
* 用户登陆菜单/operator/operator_menu/{module_id}
* /operator/operator_menu/{module_id}
*/
export const operatorOperator_menu = (option) => request.get(`/operator/operator_menu/${option["module_id"]}`, option)

/**
* 行业分类 industry-types
* industry-types
*/
export const ndustrytypes = (option) => request.get(`/industry-types`, option)


/**
* 01基金产品报告
* 2019-02-27T01:54:04.842Z
*/
/**
* 业绩表现-关键指标排名 /product-report/key-indicator-rankings/product/{product-num}
* /product-report/key-indicator-rankings/product/{product-num}
*/
export const productreportKeyindicatorrankingsProduct = (option) => request.get(`/product-report/key-indicator-rankings/product/${option["product-num"]}`, option)

/**
* 业绩表现-净值表现-收益率统计表 /product-report/period-perf-summary/product/{product-num}
* /product-report/period-perf-summary/product/{product-num}
*/
export const productreportPeriodperfsummaryProduct = (option) => request.post(`/product-report/period-perf-summary/product/${option["product-num"]}`, option)

/**
* 业绩表现-净值表现/情景分析  /product-report/scenarios/product/{product-num}
* /product-report/scenarios/product/{product-num}
*/
export const productreportScenariosProduct = (option) => request.post(`/product-report/scenarios/product/${option["product-num"]}`, option)

/**
* 业绩表现-收益分布 /product-report/return-dist/product/{product-num}
* /product-report/return-dists/product/{product-num}
*/
export const productreportReturndistsProduct = (option) => request.post(`/product-report/return-dists/product/${option["product-num"]}`, option)

/**
* 业绩表现-月度表现 /product-report/monthly-perf/product/{product-num}
* /product-report/monthly-perf/product/{product-num}
*/
export const productreportMonthlyperfProduct = (option) => request.post(`/product-report/monthly-perf/product/${option["product-num"]}`, option)

/**
* 业绩表现-综合能力 /product-report/overall-perf/product/{product-num}
* /product-report/overall-perf/product/{product-num}
*/
export const productreportOverallperfProduct = (option) => request.get(`/product-report/overall-perf/product/${option["product-num"]}`, option)

/**
* 交易分析-交易分析 /product-report/turnover-summary/product/{product-num}
* /product-report/turnover-summary/product/{product-num}
*/
export const productreportTurnoversummaryProduct = (option) => request.get(`/product-report/turnover-summary/product/${option["product-num"]}`, option)

/**
* 基本信息-基本信息 /product-report/detailed-info/product/{product-num}
* /product-report/detailed-info/product/{product-num}
*/
export const productreportDetailedinfoProduct = (option) => request.get(`/product-report/detailed-info/product/${option["product-num"]}`, option)

/**
* 盈亏分析-A股行业盈亏前十 /product-report/top-industry-pnl/product/{id}
* /product-report/top-industry-pnl/product/{id}
*/
export const productreportTopindustrypnlProduct = (option) => request.post(`/product-report/top-industry-pnl/product/${option["id"]}`, option)

/**
* 盈亏分析-Brinson归因-沪深300 /product-report/brinson/index/product/{id}
* /product-report/brinson/index/product/{id}
*/
export const productreportBrinsonIndexProduct = (option) => request.post(`/product-report/brinson/index/product/${option["id"]}`, option)

/**
* 盈亏分析-Brinson归因-行业 /product-report/brinson/industry/product/{id}
* /product-report/brinson/industry/product/{id}
*/
export const productreportBrinsonIndustryProduct = (option) => request.post(`/product-report/brinson/industry/product/${option["id"]}`, option)

/**
* 盈亏分析-多因子 /product-report/multi-factors/product/{id}
* /product-report/multi-factors/product/{id}
*/
export const productreportMultifactorsProduct = (option) => request.post(`/product-report/multi-factors/product/${option["id"]}`, option)

/**
* 盈亏分析-大类资产盈亏 /product-report/asset-pnl-series/product/{id}
* /product-report/asset-pnl-series/product/{id}
*/
export const productreportAssetpnlseriesProduct = (option) => request.post(`/product-report/asset-pnl-series/product/${option["id"]}`, option)

/**
* 盈亏分析-持仓盈亏前十 /product-report/top-position-pnls/product/{id}
* /product-report/top-position-pnls/product/{id}
*/
export const productreportToppositionpnlsProduct = (option) => request.post(`/product-report/top-position-pnls/product/${option["id"]}`, option)

/**
* 资产配置-A股持仓PE/PB/ROE /product-report/valuations/product/{id}
* /product-report/valuations/product/{id}
*/
export const productreportValuationsProduct = (option) => request.post(`/product-report/valuations/product/${option["id"]}`, option)

/**
* 资产配置-A股持仓风格(价值成长) /product-report/value-style/product/{id}
* /product-report/value-style/product/{id}
*/
export const productreportValuestyleProduct = (option) => request.post(`/product-report/value-style/product/${option["id"]}`, option)

/**
* 资产配置-A股持仓风格(大中小盘) /product-report/size-style/product/{id}
* /product-report/size-style/product/{id}
*/
export const productreportSizestyleProduct = (option) => request.post(`/product-report/size-style/product/${option["id"]}`, option)

/**
* 资产配置-A股行业持仓配置 /product-report/industry-allocs/product/{product-num}
* /product-report/industry-allocs/product/{product-num}
*/
export const productreportIndustryallocsProduct = (option) => request.post(`/product-report/industry-allocs/product/${option["product-num"]}`, option)

/**
* 资产配置-仓位占比(排名) /product-report/top-position-series/rank/product/{id}
* /product-report/top-position-series/rank/product/{id}
*/
export const productreportToppositionseriesRankProduct = (option) => request.post(`/product-report/top-position-series/rank/product/${option["id"]}`, option)

/**
* 资产配置-仓位占比(百分位) /product-report/top-position-series/percentile/product/{id}
* /product-report/top-position-series/percentile/product/{id}
*/
export const productreportToppositionseriesPercentileProduct = (option) => request.post(`/product-report/top-position-series/percentile/product/${option["id"]}`, option)

/**
* 资产配置-市值分配 /product-report/mkt-value-allocs/product/{id}
* /product-report/mkt-value-allocs/product/{id}
*/
export const productreportMktvalueallocsProduct = (option) => request.get(`/product-report/mkt-value-allocs/product/${option["id"]}`, option)

/**
* 资产配置-持仓分配 /product-report/asset-wgts/product/{id}
* /product-report/asset-wgts/product/{id}
*/
export const productreportAssetwgtsProduct = (option) => request.post(`/product-report/asset-wgts/product/${option["id"]}`, option)

/**
* 资产配置-资产配置走势 /product-report/asset-allocs/product/{id}
* /product-report/asset-allocs/product/{id}
*/
export const productreportAssetallocsProduct = (option) => request.post(`/product-report/asset-allocs/product/${option["id"]}`, option)


/**
* 02基金产品比较
* 2019-02-27T01:54:13.942Z
*/

/**
* 03大类资产配置
* 2019-03-01T08:10:15.594Z
*/
/**
* 01模型-波动率倒数模型 /asset-allocs/models/inverse-vol
* /asset-allocs/models/inverse-vol
*/
export const assetallocsModelsInversevol = (option) => request.post(`/asset-allocs/models/inverse-vol`, option)

/**
* 02模型-风险平价模型 /asset-allocs/models/risk-parity
* /asset-allocs/models/risk-parity
*/
export const assetallocsModelsRiskparity = (option) => request.post(`/asset-allocs/models/risk-parity`, option)

/**
* 03模型-均值方差模型 /asset-allocs/models/mean-var
* /asset-allocs/models/mean-var
*/
export const assetallocsModelsMeanvar = (option) => request.post(`/asset-allocs/models/mean-var`, option)

/**
* 04模型-BlackLitterman模型 /asset-allocs/models/black-litterman
* /asset-allocs/models/black-litterman
*/
export const assetallocsModelsBlacklitterman = (option) => request.post(`/asset-allocs/models/black-litterman`, option)

/**
* 06大类资产年化波动率 /asset-allocs/asset-vols
* /asset-allocs/asset-vols
*/
export const assetallocsAssetvols = (option) => request.post(`/asset-allocs/asset-vols`, option)

/**
* 07大类资产相关性矩阵 /asset-allocs/asset-corr
* /asset-allocs/asset-corr
*/
export const assetallocsAssetcorr = (option) => request.post(`/asset-allocs/asset-corr`, option)

/**
* 08大类资产年化收益率 /asset-allocs/asset-annualized-rets
* /asset-allocs/asset-annualized-rets
*/
export const assetallocsAssetannualizedrets = (option) => request.post(`/asset-allocs/asset-annualized-rets`, option)

/**
* 09我的资产配置 /my-allocs
* /my-allocs
*/
export const myallocs = (option) => request.get(`/my-allocs`, option)

/**
* 10我的资产配置模拟组合 /asset-allocs/assets-sim
* /asset-allocs/assets-sim
*/
export const assetallocsAssetssim = (option) => request.post(`/asset-allocs/assets-sim`, option)

/**
* 删除我的配置 /my-allocs/{id}
* /my-allocs/{id}
*/
export const myallocs = (option) => request.delete(`/my-allocs/${option["id"]}`, option)

/**
* 配置模型类型 /asset-allocs/model-types
* /asset-allocs/model-types
*/
export const assetallocsModeltypes = (option) => request.get(`/asset-allocs/model-types`, option)

/**
* 配置类别 /asset-allocs/alloc-types
* /asset-allocs/alloc-types
*/
export const assetallocsAlloctypes = (option) => request.get(`/asset-allocs/alloc-types`, option)


/**
* 04基金筛选
* 2019-03-04T06:32:58.430Z
*/
/**
* 01获取公共比较基准 /benchmarks/benchmarks
* /benchmarks/benchmarks
*/
export const benchmarksBenchmarks = (option) => request.get(`/benchmarks/benchmarks`, option)

/**
* 02获取我的比较基准类型 /my-benchmark-types
* /my-benchmark-types
*/
export const mybenchmarktypes = (option) => request.get(`/my-benchmark-types`, option)

/**
* 03获取我的比较基准 /benchmarks/my-benchmarks
* /benchmarks/my-benchmarks
*/
export const benchmarksMybenchmarks = (option) => request.get(`/benchmarks/my-benchmarks`, option)

/**
* 04删除我的比较基准 /benchmarks/my-benchmarks/{id}
* /benchmarks/my-benchmarks/{id}
*/
export const benchmarksMybenchmarks = (option) => request.delete(`/benchmarks/my-benchmarks/${option["id"]}`, option)

/**
* 05修改我的比较基准 /benchmarks/my-benchmarks/{id}
* /benchmarks/my-benchmarks/{id}
*/
export const benchmarksMybenchmarks = (option) => request.put(`/benchmarks/my-benchmarks/${option["id"]}`, option)

/**
* 06新增我的比较基准 /benchmarks/my-benchmarks
* /benchmarks/my-benchmarks
*/
export const benchmarksMybenchmarks = (option) => request.post(`/benchmarks/my-benchmarks`, option)

/**
* 07获取公共指标 /indicators
* /indicators
*/
export const indicators = (option) => request.get(`/indicators`, option)

/**
* 08获取我的指标模型 /my-indicators-models
* /my-indicators-models
*/
export const myindicatorsmodels = (option) => request.get(`/my-indicators-models`, option)

/**
* 09获取我的指标 /my-indicators
* /my-indicators
*/
export const myindicators = (option) => request.get(`/my-indicators`, option)

/**
* 10新增我的指标 /my-indicator
* /my-indicator
*/
export const myindicator = (option) => request.post(`/my-indicator`, option)

/**
* 11删除我的指标 /my-indicators/{id}
* /my-indicators/{id}
*/
export const myindicators = (option) => request.delete(`/my-indicators/${option["id"]}`, option)

/**
* 12批量删除我的指标 /my-indicators/batch-delete
* /my-indicators/batch-delete
*/
export const myindicatorsBatchdelete = (option) => request.post(`/my-indicators/batch-delete`, option)

/**
* 13修改我的指标 /my-indicators/{id}
* /my-indicators/{id}
*/
export const myindicators = (option) => request.put(`/my-indicators/${option["id"]}`, option)

/**
* 14策略类型 /strategies
* /strategies
*/
export const strategies = (option) => request.get(`/strategies`, option)

/**
* 15获取我的产品池 /my-product-pools
* /my-product-pools
*/
export const myproductpools = (option) => request.get(`/my-product-pools`, option)

/**
* 16修改我的产品池 /my-product-pools/{id}
* /my-product-pools/{id}
*/
export const myproductpools = (option) => request.put(`/my-product-pools/${option["id"]}`, option)

/**
* 17删除我的产品池 /my-product-pools/{id}
* /my-product-pools/{id}
*/
export const myproductpools = (option) => request.delete(`/my-product-pools/${option["id"]}`, option)

/**
* 18获取产品信息/product/product-details
* /product/product-details
*/
export const productProductdetails = (option) => request.post(`/product/product-details`, option)


/**
* 05FOF监控
* 2019-03-06T08:06:18.325Z
*/
/**
* FOF监控视图1 /monitor/by-product
* /monitor/by-product
*/
export const monitorByproduct = (option) => request.get(`/monitor/by-product`, option)

/**
* FOF监控视图2 /monitor/by-strategy
* /monitor/by-strategy
*/
export const monitorBystrategy = (option) => request.get(`/monitor/by-strategy`, option)

/**
* 风险事件监控 /monitor/risk-event
* /monitor/risk-event
*/
export const monitorRiskevent = (option) => request.get(`/monitor/risk-event`, option)


/**
* 06FOF报告
* 2019-04-12T01:12:10.426Z
*/
/**
* 01产品信息 /fof-report/detailed-info/fof/{product-num}
* /fof-report/detailed-info/fof/{product-num}
*/
export const fofreportDetailedinfoFof = (option) => request.get(`/fof-report/detailed-info/fof/${option["product-num"]}`, option)

/**
* 02风险提示 /fof-report/risk-alert/fof/{product-num}
* /fof-report/risk-alert/fof/{product-num}
*/
export const fofreportRiskalertFof = (option) => request.get(`/fof-report/risk-alert/fof/${option["product-num"]}`, option)

/**
* 03开放日提示 /fof-report/openday/fof/{product-num}
* /fof-report/openday/fof/{product-num}
*/
export const fofreportOpendayFof = (option) => request.post(`/fof-report/openday/fof/${option["product-num"]}`, option)

/**
* 04策略配置 /fof-report/strategy-allocs/fof/{product-num}
* /fof-report/strategy-allocs/fof/{product-num}
*/
export const fofreportStrategyallocsFof = (option) => request.get(`/fof-report/strategy-allocs/fof/${option["product-num"]}`, option)

/**
* 05重仓前十 /fof-report/top-position-mkt-value/fof/{product-num}/{asset-type}
* /fof-report/top-position-mkt-value/fof/{product-num}/{asset-type}
*/
export const fofreportToppositionmktvalueFof = (option) => request.get(`/fof-report/top-position-mkt-value/fof/${option["product-num"]}/${option["asset-type"]}`, option)

/**
* 06持仓占比 /fof-report/asset-wgts/fof/{product-num}
* /fof-report/asset-wgts/fof/{product-num}
*/
export const fofreportAssetwgtsFof = (option) => request.get(`/fof-report/asset-wgts/fof/${option["product-num"]}`, option)

/**
* 07周期表现 /fof-report/period-perf/fof/{product-num}/{benchmark}/{period-type}
* /fof-report/period-perf/fof/{product-num}/{benchmark}/{period-type}
*/
export const fofreportPeriodperfFof = (option) => request.get(`/fof-report/period-perf/fof/${option["product-num"]}/${option["benchmark"]}/${option["period-type"]}`, option)


/**
* FMS
* 2020-10-19T07:56:24.691Z
*/
/**
* portfolioPerformance
* portfolioPerformance
*/
export const ortfolioPerformance = (option) => request.post(`/portfolioPerformance`, option)

/**
* portfolioPerformanceTimeSeries
* portfolioPerformanceTimeSeries
*/
export const ortfolioPerformanceTimeSeries = (option) => request.post(`/portfolioPerformanceTimeSeries`, option)

/**
* 组合分类汇总positionSummary
* positionSummary
*/
export const ositionSummary = (option) => request.post(`/positionSummary`, option)

/**
* 组合持仓时序generalPortfolioPosition
* generalPortfolioPosition
*/
export const eneralPortfolioPosition = (option) => request.post(`/generalPortfolioPosition`, option)

/**
* 组合持仓汇总统计positionStats
* positionStats
*/
export const ositionStats = (option) => request.post(`/positionStats`, option)


/**
* Mock 多维嵌套表
* 2019-06-12T05:41:17.559Z
*/
/**
* YTD净值 /monitor/navs
* /monitor/navs
*/
export const monitorNavs = (option) => request.get(`/monitor/navs`, option)

/**
* 嵌套表 - 业绩表现 /monitor/perf
* /monitor/perf
*/
export const monitorPerf = (option) => request.get(`/monitor/perf`, option)

/**
* 嵌套表 - 投资概览  /monitor/overview
* /monitor/overview
*/
export const monitorOverview = (option) => request.get(`/monitor/overview`, option)

/**
* 嵌套表 - 风险监控 /monitor/risk
* /monitor/risk
*/
export const monitorRisk = (option) => request.get(`/monitor/risk`, option)

/**
* 当日涨跌 /monitor/today-perf
* /monitor/today-perf
*/
export const monitorTodayperf = (option) => request.get(`/monitor/today-perf`, option)

/**
* 规模 /monitor/aum
* /monitor/aum
*/
export const monitorAum = (option) => request.get(`/monitor/aum`, option)


/**
* Mock 大F卡片监控
* 2019-05-31T01:03:17.043Z
*/
/**
* 01 大F卡片信息列表 /fof-monitor/parent-funds
* /fof-monitor/parent-funds
*/
export const fofmonitorParentfunds = (option) => request.get(`/fof-monitor/parent-funds`, option)

/**
* 02 （废弃）查询小F卡片信息 /fof-monitor/child-funds
* /fof-monitor/child-funds
*/
export const fofmonitorChildfunds = (option) => request.post(`/fof-monitor/child-funds`, option)

/**
* 03  大F和小F的卡片列表信息1
* /fof-monitor/parent-funds/1
*/
export const fofmonitorParentfunds1 = (option) => request.get(`/fof-monitor/parent-funds/1`, option)

/**
* 03 查询大F和小F的卡片信息列表2
* /fof-monitor/parent-funds/2
*/
export const fofmonitorParentfunds2 = (option) => request.get(`/fof-monitor/parent-funds/2`, option)

/**
* 03 查询大F和小F的卡片信息列表3
* /fof-monitor/parent-funds/3
*/
export const fofmonitorParentfunds3 = (option) => request.get(`/fof-monitor/parent-funds/3`, option)

/**
* 04 查询大F的交易信息1
* /fof-monitor/parent-fund-transactions/1
*/
export const fofmonitorParentfundtransactions1 = (option) => request.get(`/fof-monitor/parent-fund-transactions/1`, option)

/**
* 04 查询大F的交易信息2
* /fof-monitor/parent-fund-transactions/2
*/
export const fofmonitorParentfundtransactions2 = (option) => request.get(`/fof-monitor/parent-fund-transactions/2`, option)

/**
* 04 查询大F的交易信息3
* /fof-monitor/parent-fund-transactions/3
*/
export const fofmonitorParentfundtransactions3 = (option) => request.get(`/fof-monitor/parent-fund-transactions/3`, option)

/**
* 05 大F的基本信息1
* /fof-monitor/parent-fund-detailed-info/1
*/
export const fofmonitorParentfunddetailedinfo1 = (option) => request.get(`/fof-monitor/parent-fund-detailed-info/1`, option)

/**
* 05 大F的基本信息2
* /fof-monitor/parent-fund-detailed-info/2
*/
export const fofmonitorParentfunddetailedinfo2 = (option) => request.get(`/fof-monitor/parent-fund-detailed-info/2`, option)

/**
* 05 大F的基本信息3
* /fof-monitor/parent-fund-detailed-info/3
*/
export const fofmonitorParentfunddetailedinfo3 = (option) => request.get(`/fof-monitor/parent-fund-detailed-info/3`, option)

/**
* 06 大F风险提示1
* /fof-monitor/parent-fund-risk-alert/1
*/
export const fofmonitorParentfundriskalert1 = (option) => request.get(`/fof-monitor/parent-fund-risk-alert/1`, option)

/**
* 06 大F风险提示2
* /fof-monitor/parent-fund-risk-alert/2
*/
export const fofmonitorParentfundriskalert2 = (option) => request.get(`/fof-monitor/parent-fund-risk-alert/2`, option)

/**
* 06 大F风险提示3
* /fof-monitor/parent-fund-risk-alert/3
*/
export const fofmonitorParentfundriskalert3 = (option) => request.get(`/fof-monitor/parent-fund-risk-alert/3`, option)

/**
* 07 大F开放日1
* /fof-monitor/fund-open-day/1
*/
export const fofmonitorFundopenday1 = (option) => request.post(`/fof-monitor/fund-open-day/1`, option)

/**
* 07 大F开放日2
* /fof-monitor/fund-open-day/2
*/
export const fofmonitorFundopenday2 = (option) => request.post(`/fof-monitor/fund-open-day/2`, option)

/**
* 07 大F开放日3
* /fof-monitor/fund-open-day/3
*/
export const fofmonitorFundopenday3 = (option) => request.post(`/fof-monitor/fund-open-day/3`, option)

/**
* 08 fof策略配置1
* /fof-monitor/parent-fund-strategy-allocs/1
*/
export const fofmonitorParentfundstrategyallocs1 = (option) => request.get(`/fof-monitor/parent-fund-strategy-allocs/1`, option)

/**
* 08 fof策略配置2
* /fof-monitor/parent-fund-strategy-allocs/2
*/
export const fofmonitorParentfundstrategyallocs2 = (option) => request.get(`/fof-monitor/parent-fund-strategy-allocs/2`, option)

/**
* 08 大F策略配置3
* /fof-monitor/parent-fund-strategy-allocs/3
*/
export const fofmonitorParentfundstrategyallocs3 = (option) => request.get(`/fof-monitor/parent-fund-strategy-allocs/3`, option)

/**
* 09 大F重仓前十1
* /fof-monitor/top-pos-mkt-value/1/equity
*/
export const fofmonitorTopposmktvalue1Equity = (option) => request.get(`/fof-monitor/top-pos-mkt-value/1/equity`, option)

/**
* 09 大F重仓前十2
* /fof-monitor/top-pos-mkt-value/2/equity
*/
export const fofmonitorTopposmktvalue2Equity = (option) => request.get(`/fof-monitor/top-pos-mkt-value/2/equity`, option)

/**
* 09 大F重仓前十3
* /fof-monitor/top-pos-mkt-value/3/equity
*/
export const fofmonitorTopposmktvalue3Equity = (option) => request.get(`/fof-monitor/top-pos-mkt-value/3/equity`, option)

/**
* 10 大F周期表现1
* /fof-monitor/parent-fund-period-perf/1
*/
export const fofmonitorParentfundperiodperf1 = (option) => request.get(`/fof-monitor/parent-fund-period-perf/1`, option)

/**
* 10 大F周期表现2
* /fof-monitor/parent-fund-period-perf/2
*/
export const fofmonitorParentfundperiodperf2 = (option) => request.get(`/fof-monitor/parent-fund-period-perf/2`, option)

/**
* 10 大F周期表现3
* /fof-monitor/parent-fund-period-perf/3
*/
export const fofmonitorParentfundperiodperf3 = (option) => request.get(`/fof-monitor/parent-fund-period-perf/3`, option)

/**
* 11 子基金信息1
* /fof-monitor/child-fund/1
*/
export const fofmonitorChildfund1 = (option) => request.get(`/fof-monitor/child-fund/1`, option)

/**
* 11 子基金信息2
* /fof-monitor/child-fund/2
*/
export const fofmonitorChildfund2 = (option) => request.get(`/fof-monitor/child-fund/2`, option)

/**
* 11 子基金信息4
* /fof-monitor/child-fund/4
*/
export const fofmonitorChildfund4 = (option) => request.get(`/fof-monitor/child-fund/4`, option)

/**
* 11 子基金信息5
* /fof-monitor/child-fund/5
*/
export const fofmonitorChildfund5 = (option) => request.get(`/fof-monitor/child-fund/5`, option)

/**
* 11 子基金信息7
* /fof-monitor/child-fund/7
*/
export const fofmonitorChildfund7 = (option) => request.get(`/fof-monitor/child-fund/7`, option)

/**
* 11 子基金信息9
* /fof-monitor/child-fund/9
*/
export const fofmonitorChildfund9 = (option) => request.get(`/fof-monitor/child-fund/9`, option)

/**
* 11子基金信息6
* /fof-monitor/child-fund/6
*/
export const fofmonitorChildfund6 = (option) => request.get(`/fof-monitor/child-fund/6`, option)


/**
* Mock 小F估值表分析报告
* 2019-05-27T05:40:34.653Z
*/

/**
* 仓位占比
* 2019-06-04T08:49:29.175Z
*/
/**
* 10仓位占比（排名）1
* /valuation-stat-analysis/top-position-series/rank/1
*/
export const valuationstatanalysisToppositionseriesRank1 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/1`, option)

/**
* 10仓位占比（排名）2
* /valuation-stat-analysis/top-position-series/rank/2
*/
export const valuationstatanalysisToppositionseriesRank2 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/2`, option)

/**
* 10仓位占比（排名）3
* /valuation-stat-analysis/top-position-series/rank/3
*/
export const valuationstatanalysisToppositionseriesRank3 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/3`, option)

/**
* 10仓位占比（排名）4
* /valuation-stat-analysis/top-position-series/rank/4
*/
export const valuationstatanalysisToppositionseriesRank4 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/4`, option)

/**
* 10仓位占比（排名）5
* /valuation-stat-analysis/top-position-series/rank/5
*/
export const valuationstatanalysisToppositionseriesRank5 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/5`, option)

/**
* 10仓位占比（排名）6
* /valuation-stat-analysis/top-position-series/rank/6
*/
export const valuationstatanalysisToppositionseriesRank6 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/6`, option)

/**
* 10仓位占比（排名）7
* /valuation-stat-analysis/top-position-series/rank/7
*/
export const valuationstatanalysisToppositionseriesRank7 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/7`, option)

/**
* 10仓位占比（排名）8
* /valuation-stat-analysis/top-position-series/rank/8
*/
export const valuationstatanalysisToppositionseriesRank8 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/8`, option)

/**
* 10仓位占比（排名）9
* /valuation-stat-analysis/top-position-series/rank/9
*/
export const valuationstatanalysisToppositionseriesRank9 = (option) => request.post(`/valuation-stat-analysis/top-position-series/rank/9`, option)

/**
* 11仓位占比（百分位）1
* /valuation-stat-analysis/top-position-series/percentile/1
*/
export const valuationstatanalysisToppositionseriesPercentile1 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/1`, option)

/**
* 11仓位占比（百分位）2
* /valuation-stat-analysis/top-position-series/percentile/2
*/
export const valuationstatanalysisToppositionseriesPercentile2 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/2`, option)

/**
* 11仓位占比（百分位）3
* /valuation-stat-analysis/top-position-series/percentile/3
*/
export const valuationstatanalysisToppositionseriesPercentile3 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/3`, option)

/**
* 11仓位占比（百分位）4
* /valuation-stat-analysis/top-position-series/percentile/4
*/
export const valuationstatanalysisToppositionseriesPercentile4 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/4`, option)

/**
* 11仓位占比（百分位）5
* /valuation-stat-analysis/top-position-series/percentile/5
*/
export const valuationstatanalysisToppositionseriesPercentile5 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/5`, option)

/**
* 11仓位占比（百分位）6
* /valuation-stat-analysis/top-position-series/percentile/6
*/
export const valuationstatanalysisToppositionseriesPercentile6 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/6`, option)

/**
* 11仓位占比（百分位）7
* /valuation-stat-analysis/top-position-series/percentile/7
*/
export const valuationstatanalysisToppositionseriesPercentile7 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/7`, option)

/**
* 11仓位占比（百分位）8
* /valuation-stat-analysis/top-position-series/percentile/8
*/
export const valuationstatanalysisToppositionseriesPercentile8 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/8`, option)

/**
* 11仓位占比（百分位）9
* /valuation-stat-analysis/top-position-series/percentile/9
*/
export const valuationstatanalysisToppositionseriesPercentile9 = (option) => request.post(`/valuation-stat-analysis/top-position-series/percentile/9`, option)


/**
* 持股前十
* 2019-06-03T10:06:06.501Z
*/
/**
* 12持股前十1
* /valuation-stat-analysis/top-stock-mkt-value/1
*/
export const valuationstatanalysisTopstockmktvalue1 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/1`, option)

/**
* 12持股前十2
* /valuation-stat-analysis/top-stock-mkt-value/2
*/
export const valuationstatanalysisTopstockmktvalue2 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/2`, option)

/**
* 12持股前十3
* /valuation-stat-analysis/top-stock-mkt-value/3
*/
export const valuationstatanalysisTopstockmktvalue3 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/3`, option)

/**
* 12持股前十4
* /valuation-stat-analysis/top-stock-mkt-value/4
*/
export const valuationstatanalysisTopstockmktvalue4 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/4`, option)

/**
* 12持股前十5
* /valuation-stat-analysis/top-stock-mkt-value/5
*/
export const valuationstatanalysisTopstockmktvalue5 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/5`, option)

/**
* 12持股前十6
* /valuation-stat-analysis/top-stock-mkt-value/6
*/
export const valuationstatanalysisTopstockmktvalue6 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/6`, option)

/**
* 12持股前十7
* /valuation-stat-analysis/top-stock-mkt-value/7
*/
export const valuationstatanalysisTopstockmktvalue7 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/7`, option)

/**
* 12持股前十8
* /valuation-stat-analysis/top-stock-mkt-value/8
*/
export const valuationstatanalysisTopstockmktvalue8 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/8`, option)

/**
* 12持股前十9
* /valuation-stat-analysis/top-stock-mkt-value/9
*/
export const valuationstatanalysisTopstockmktvalue9 = (option) => request.get(`/valuation-stat-analysis/top-stock-mkt-value/9`, option)


/**
* 收益分布
* 2019-06-03T10:05:43.493Z
*/
/**
* 05收益分布1
* /valuation-stat-analysis/return-dists/1
*/
export const valuationstatanalysisReturndists1 = (option) => request.get(`/valuation-stat-analysis/return-dists/1`, option)

/**
* 05收益分布2
* /valuation-stat-analysis/return-dists/2
*/
export const valuationstatanalysisReturndists2 = (option) => request.get(`/valuation-stat-analysis/return-dists/2`, option)

/**
* 05收益分布3
* /valuation-stat-analysis/return-dists/3
*/
export const valuationstatanalysisReturndists3 = (option) => request.get(`/valuation-stat-analysis/return-dists/3`, option)

/**
* 05收益分布4
* /valuation-stat-analysis/return-dists/4
*/
export const valuationstatanalysisReturndists4 = (option) => request.get(`/valuation-stat-analysis/return-dists/4`, option)

/**
* 05收益分布5
* /valuation-stat-analysis/return-dists/5
*/
export const valuationstatanalysisReturndists5 = (option) => request.get(`/valuation-stat-analysis/return-dists/5`, option)

/**
* 05收益分布6
* /valuation-stat-analysis/return-dists/6
*/
export const valuationstatanalysisReturndists6 = (option) => request.get(`/valuation-stat-analysis/return-dists/6`, option)

/**
* 05收益分布7
* /valuation-stat-analysis/return-dists/7
*/
export const valuationstatanalysisReturndists7 = (option) => request.get(`/valuation-stat-analysis/return-dists/7`, option)

/**
* 05收益分布8
* /valuation-stat-analysis/return-dists/8
*/
export const valuationstatanalysisReturndists8 = (option) => request.get(`/valuation-stat-analysis/return-dists/8`, option)

/**
* 05收益分布9
* /valuation-stat-analysis/return-dists/9
*/
export const valuationstatanalysisReturndists9 = (option) => request.get(`/valuation-stat-analysis/return-dists/9`, option)


/**
* 相关性分析
* 2019-06-03T09:31:13.173Z
*/
/**
* 04相关性分析1
* /valuation-stat-analysis/corr/1
*/
export const valuationstatanalysisCorr1 = (option) => request.get(`/valuation-stat-analysis/corr/1`, option)

/**
* 04相关性分析2
* /valuation-stat-analysis/corr/2
*/
export const valuationstatanalysisCorr2 = (option) => request.get(`/valuation-stat-analysis/corr/2`, option)

/**
* 04相关性分析3
* /valuation-stat-analysis/corr/3
*/
export const valuationstatanalysisCorr3 = (option) => request.get(`/valuation-stat-analysis/corr/3`, option)

/**
* 04相关性分析4
* /valuation-stat-analysis/corr/4
*/
export const valuationstatanalysisCorr4 = (option) => request.get(`/valuation-stat-analysis/corr/4`, option)

/**
* 04相关性分析5
* /valuation-stat-analysis/corr/5
*/
export const valuationstatanalysisCorr5 = (option) => request.get(`/valuation-stat-analysis/corr/5`, option)

/**
* 04相关性分析6
* /valuation-stat-analysis/corr/6
*/
export const valuationstatanalysisCorr6 = (option) => request.get(`/valuation-stat-analysis/corr/6`, option)

/**
* 04相关性分析7
* /valuation-stat-analysis/corr/7
*/
export const valuationstatanalysisCorr7 = (option) => request.get(`/valuation-stat-analysis/corr/7`, option)

/**
* 04相关性分析8
* /valuation-stat-analysis/corr/8
*/
export const valuationstatanalysisCorr8 = (option) => request.get(`/valuation-stat-analysis/corr/8`, option)

/**
* 04相关性分析9
* /valuation-stat-analysis/corr/9
*/
export const valuationstatanalysisCorr9 = (option) => request.get(`/valuation-stat-analysis/corr/9`, option)


/**
* 统计指标
* 2019-06-05T01:45:18.700Z
*/
/**
* 03统计指标1
* /valuation-stat-analysis/perf-indictors/1
*/
export const valuationstatanalysisPerfindictors1 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/1`, option)

/**
* 03统计指标2
* /valuation-stat-analysis/perf-indictors/2
*/
export const valuationstatanalysisPerfindictors2 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/2`, option)

/**
* 03统计指标3
* /valuation-stat-analysis/perf-indictors/3
*/
export const valuationstatanalysisPerfindictors3 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/3`, option)

/**
* 03统计指标4
* /valuation-stat-analysis/perf-indictors/4
*/
export const valuationstatanalysisPerfindictors4 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/4`, option)

/**
* 03统计指标5
* /valuation-stat-analysis/perf-indictors/5
*/
export const valuationstatanalysisPerfindictors5 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/5`, option)

/**
* 03统计指标6
* /valuation-stat-analysis/perf-indictors/6
*/
export const valuationstatanalysisPerfindictors6 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/6`, option)

/**
* 03统计指标7
* /valuation-stat-analysis/perf-indictors/7
*/
export const valuationstatanalysisPerfindictors7 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/7`, option)

/**
* 03统计指标8
* /valuation-stat-analysis/perf-indictors/8
*/
export const valuationstatanalysisPerfindictors8 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/8`, option)

/**
* 03统计指标9
* /valuation-stat-analysis/perf-indictors/9
*/
export const valuationstatanalysisPerfindictors9 = (option) => request.get(`/valuation-stat-analysis/perf-indictors/9`, option)

/**
* 00Brinson归因分析
* /valuation-stat-analysis/brinson-time-series/{id}
*/
export const valuationstatanalysisBrinsontimeseries = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/${option["id"]}`, option)

/**
* 00产品列表
* /valuation-stat-analysis-list
*/
export const valuationstatanalysislist = (option) => request.get(`/valuation-stat-analysis-list`, option)

/**
* 01产品信息1
* /valuation-stat-analysis/info/1
*/
export const valuationstatanalysisInfo1 = (option) => request.get(`/valuation-stat-analysis/info/1`, option)

/**
* 01产品信息2
* /valuation-stat-analysis/info/2
*/
export const valuationstatanalysisInfo2 = (option) => request.get(`/valuation-stat-analysis/info/2`, option)

/**
* 01产品信息3
* /valuation-stat-analysis/info/3
*/
export const valuationstatanalysisInfo3 = (option) => request.get(`/valuation-stat-analysis/info/3`, option)

/**
* 01产品信息4
* /valuation-stat-analysis/info/4
*/
export const valuationstatanalysisInfo4 = (option) => request.get(`/valuation-stat-analysis/info/4`, option)

/**
* 01产品信息5
* /valuation-stat-analysis/info/5
*/
export const valuationstatanalysisInfo5 = (option) => request.get(`/valuation-stat-analysis/info/5`, option)

/**
* 01产品信息6
* /valuation-stat-analysis/info/6
*/
export const valuationstatanalysisInfo6 = (option) => request.get(`/valuation-stat-analysis/info/6`, option)

/**
* 01产品信息7
* /valuation-stat-analysis/info/7
*/
export const valuationstatanalysisInfo7 = (option) => request.get(`/valuation-stat-analysis/info/7`, option)

/**
* 01产品信息8
* /valuation-stat-analysis/info/8
*/
export const valuationstatanalysisInfo8 = (option) => request.get(`/valuation-stat-analysis/info/8`, option)

/**
* 01产品信息9
* /valuation-stat-analysis/info/9
*/
export const valuationstatanalysisInfo9 = (option) => request.get(`/valuation-stat-analysis/info/9`, option)

/**
* 02周期表现1
* /valuation-table-analysis/period-perf/1
*/
export const valuationtableanalysisPeriodperf1 = (option) => request.get(`/valuation-table-analysis/period-perf/1`, option)

/**
* 02周期表现2
* /valuation-table-analysis/period-perf/2
*/
export const valuationtableanalysisPeriodperf2 = (option) => request.get(`/valuation-table-analysis/period-perf/2`, option)

/**
* 02周期表现3
* /valuation-table-analysis/period-perf/3
*/
export const valuationtableanalysisPeriodperf3 = (option) => request.get(`/valuation-table-analysis/period-perf/3`, option)

/**
* 02周期表现4
* /valuation-table-analysis/period-perf/4
*/
export const valuationtableanalysisPeriodperf4 = (option) => request.get(`/valuation-table-analysis/period-perf/4`, option)

/**
* 02周期表现5
* /valuation-table-analysis/period-perf/5
*/
export const valuationtableanalysisPeriodperf5 = (option) => request.get(`/valuation-table-analysis/period-perf/5`, option)

/**
* 02周期表现6
* /valuation-table-analysis/period-perf/6
*/
export const valuationtableanalysisPeriodperf6 = (option) => request.get(`/valuation-table-analysis/period-perf/6`, option)

/**
* 02周期表现7
* /valuation-table-analysis/period-perf/7
*/
export const valuationtableanalysisPeriodperf7 = (option) => request.get(`/valuation-table-analysis/period-perf/7`, option)

/**
* 02周期表现8
* /valuation-table-analysis/period-perf/8
*/
export const valuationtableanalysisPeriodperf8 = (option) => request.get(`/valuation-table-analysis/period-perf/8`, option)

/**
* 02周期表现9
* /valuation-table-analysis/period-perf/9
*/
export const valuationtableanalysisPeriodperf9 = (option) => request.get(`/valuation-table-analysis/period-perf/9`, option)

/**
* 06月度表现01
* valuation-stat-analysis/monthly-perf/1
*/
export const aluationstatanalysisMonthlyperf1 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/1`, option)

/**
* 06月度表现02
* valuation-stat-analysis/monthly-perf/2
*/
export const aluationstatanalysisMonthlyperf2 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/2`, option)

/**
* 06月度表现03
* valuation-stat-analysis/monthly-perf/3
*/
export const aluationstatanalysisMonthlyperf3 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/3`, option)

/**
* 06月度表现04
* valuation-stat-analysis/monthly-perf/4
*/
export const aluationstatanalysisMonthlyperf4 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/4`, option)

/**
* 06月度表现05
* valuation-stat-analysis/monthly-perf/5
*/
export const aluationstatanalysisMonthlyperf5 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/5`, option)

/**
* 06月度表现06
* valuation-stat-analysis/monthly-perf/6
*/
export const aluationstatanalysisMonthlyperf6 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/6`, option)

/**
* 06月度表现07
* valuation-stat-analysis/monthly-perf/7
*/
export const aluationstatanalysisMonthlyperf7 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/7`, option)

/**
* 06月度表现08
* valuation-stat-analysis/monthly-perf/8
*/
export const aluationstatanalysisMonthlyperf8 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/8`, option)

/**
* 06月度表现09
* valuation-stat-analysis/monthly-perf/9
*/
export const aluationstatanalysisMonthlyperf9 = (option) => request.post(`/valuation-stat-analysis/monthly-perf/9`, option)

/**
* 07大类资产配置1
* /valuation-stat-analysis/asset-allocs/1
*/
export const valuationstatanalysisAssetallocs1 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/1`, option)

/**
* 07大类资产配置2
* /valuation-stat-analysis/asset-allocs/2
*/
export const valuationstatanalysisAssetallocs2 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/2`, option)

/**
* 07大类资产配置3
* /valuation-stat-analysis/asset-allocs/3
*/
export const valuationstatanalysisAssetallocs3 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/3`, option)

/**
* 07大类资产配置4
* /valuation-stat-analysis/asset-allocs/4
*/
export const valuationstatanalysisAssetallocs4 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/4`, option)

/**
* 07大类资产配置5
* /valuation-stat-analysis/asset-allocs/5
*/
export const valuationstatanalysisAssetallocs5 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/5`, option)

/**
* 07大类资产配置6
* /valuation-stat-analysis/asset-allocs/6
*/
export const valuationstatanalysisAssetallocs6 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/6`, option)

/**
* 07大类资产配置7
* /valuation-stat-analysis/asset-allocs/7
*/
export const valuationstatanalysisAssetallocs7 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/7`, option)

/**
* 07大类资产配置8
* /valuation-stat-analysis/asset-allocs/8
*/
export const valuationstatanalysisAssetallocs8 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/8`, option)

/**
* 07大类资产配置9
* /valuation-stat-analysis/asset-allocs/9
*/
export const valuationstatanalysisAssetallocs9 = (option) => request.post(`/valuation-stat-analysis/asset-allocs/9`, option)

/**
* 08个股集中度1
* /valuation-stat-analysis/stock-concentrations/1
*/
export const valuationstatanalysisStockconcentrations1 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/1`, option)

/**
* 08个股集中度2
* /valuation-stat-analysis/stock-concentrations/2
*/
export const valuationstatanalysisStockconcentrations2 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/2`, option)

/**
* 08个股集中度3
* /valuation-stat-analysis/stock-concentrations/3
*/
export const valuationstatanalysisStockconcentrations3 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/3`, option)

/**
* 08个股集中度4
* /valuation-stat-analysis/stock-concentrations/4
*/
export const valuationstatanalysisStockconcentrations4 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/4`, option)

/**
* 08个股集中度5
* /valuation-stat-analysis/stock-concentrations/5
*/
export const valuationstatanalysisStockconcentrations5 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/5`, option)

/**
* 08个股集中度6
* /valuation-stat-analysis/stock-concentrations/6
*/
export const valuationstatanalysisStockconcentrations6 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/6`, option)

/**
* 08个股集中度7
* /valuation-stat-analysis/stock-concentrations/7
*/
export const valuationstatanalysisStockconcentrations7 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/7`, option)

/**
* 08个股集中度8
* /valuation-stat-analysis/stock-concentrations/8
*/
export const valuationstatanalysisStockconcentrations8 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/8`, option)

/**
* 08个股集中度9
* /valuation-stat-analysis/stock-concentrations/9
*/
export const valuationstatanalysisStockconcentrations9 = (option) => request.get(`/valuation-stat-analysis/stock-concentrations/9`, option)

/**
* 09持仓分析统计指标1
* /valuation-stat-analysis/position-analysis/1
*/
export const valuationstatanalysisPositionanalysis1 = (option) => request.get(`/valuation-stat-analysis/position-analysis/1`, option)

/**
* 09持仓分析统计指标2
* /valuation-stat-analysis/position-analysis/2
*/
export const valuationstatanalysisPositionanalysis2 = (option) => request.get(`/valuation-stat-analysis/position-analysis/2`, option)

/**
* 09持仓分析统计指标3
* /valuation-stat-analysis/position-analysis/3
*/
export const valuationstatanalysisPositionanalysis3 = (option) => request.get(`/valuation-stat-analysis/position-analysis/3`, option)

/**
* 09持仓分析统计指标4
* /valuation-stat-analysis/position-analysis/4
*/
export const valuationstatanalysisPositionanalysis4 = (option) => request.get(`/valuation-stat-analysis/position-analysis/4`, option)

/**
* 09持仓分析统计指标5
* /valuation-stat-analysis/position-analysis/5
*/
export const valuationstatanalysisPositionanalysis5 = (option) => request.get(`/valuation-stat-analysis/position-analysis/5`, option)

/**
* 09持仓分析统计指标6
* /valuation-stat-analysis/position-analysis/6
*/
export const valuationstatanalysisPositionanalysis6 = (option) => request.get(`/valuation-stat-analysis/position-analysis/6`, option)

/**
* 09持仓分析统计指标7
* /valuation-stat-analysis/position-analysis/7
*/
export const valuationstatanalysisPositionanalysis7 = (option) => request.get(`/valuation-stat-analysis/position-analysis/7`, option)

/**
* 09持仓分析统计指标8
* /valuation-stat-analysis/position-analysis/8
*/
export const valuationstatanalysisPositionanalysis8 = (option) => request.get(`/valuation-stat-analysis/position-analysis/8`, option)

/**
* 09持仓分析统计指标9
* /valuation-stat-analysis/position-analysis/9
*/
export const valuationstatanalysisPositionanalysis9 = (option) => request.get(`/valuation-stat-analysis/position-analysis/9`, option)

/**
* 13行业配置走势1
* /valuation-stat-analysis/industry-alloc-series/1
*/
export const valuationstatanalysisIndustryallocseries1 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/1`, option)

/**
* 13行业配置走势2
* /valuation-stat-analysis/industry-alloc-series/2
*/
export const valuationstatanalysisIndustryallocseries2 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/2`, option)

/**
* 13行业配置走势3
* /valuation-stat-analysis/industry-alloc-series/3
*/
export const valuationstatanalysisIndustryallocseries3 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/3`, option)

/**
* 13行业配置走势4
* /valuation-stat-analysis/industry-alloc-series/4
*/
export const valuationstatanalysisIndustryallocseries4 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/4`, option)

/**
* 13行业配置走势5
* /valuation-stat-analysis/industry-alloc-series/5
*/
export const valuationstatanalysisIndustryallocseries5 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/5`, option)

/**
* 13行业配置走势6
* /valuation-stat-analysis/industry-alloc-series/6
*/
export const valuationstatanalysisIndustryallocseries6 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/6`, option)

/**
* 13行业配置走势7
* /valuation-stat-analysis/industry-alloc-series/7
*/
export const valuationstatanalysisIndustryallocseries7 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/7`, option)

/**
* 13行业配置走势8
* /valuation-stat-analysis/industry-alloc-series/8
*/
export const valuationstatanalysisIndustryallocseries8 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/8`, option)

/**
* 13行业配置走势9
* /valuation-stat-analysis/industry-alloc-series/9
*/
export const valuationstatanalysisIndustryallocseries9 = (option) => request.post(`/valuation-stat-analysis/industry-alloc-series/9`, option)

/**
* 14相对中证500的绝对行业偏离度1
* /valuation-stat-analysis/absolute-deviation/1
*/
export const valuationstatanalysisAbsolutedeviation1 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/1`, option)

/**
* 14相对中证500的绝对行业偏离度2
* /valuation-stat-analysis/absolute-deviation/2
*/
export const valuationstatanalysisAbsolutedeviation2 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/2`, option)

/**
* 14相对中证500的绝对行业偏离度3
* /valuation-stat-analysis/absolute-deviation/3
*/
export const valuationstatanalysisAbsolutedeviation3 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/3`, option)

/**
* 14相对中证500的绝对行业偏离度4
* /valuation-stat-analysis/absolute-deviation/4
*/
export const valuationstatanalysisAbsolutedeviation4 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/4`, option)

/**
* 14相对中证500的绝对行业偏离度5
* /valuation-stat-analysis/absolute-deviation/5
*/
export const valuationstatanalysisAbsolutedeviation5 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/5`, option)

/**
* 14相对中证500的绝对行业偏离度6
* /valuation-stat-analysis/absolute-deviation/6
*/
export const valuationstatanalysisAbsolutedeviation6 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/6`, option)

/**
* 14相对中证500的绝对行业偏离度7
* /valuation-stat-analysis/absolute-deviation/7
*/
export const valuationstatanalysisAbsolutedeviation7 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/7`, option)

/**
* 14相对中证500的绝对行业偏离度8
* /valuation-stat-analysis/absolute-deviation/8
*/
export const valuationstatanalysisAbsolutedeviation8 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/8`, option)

/**
* 14相对中证500的绝对行业偏离度9
* /valuation-stat-analysis/absolute-deviation/9
*/
export const valuationstatanalysisAbsolutedeviation9 = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/9`, option)

/**
* 15相对中证500的相对行业偏离倍数1
* /valuation-stat-analysis/relative-deviation/1
*/
export const valuationstatanalysisRelativedeviation1 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/1`, option)

/**
* 15相对中证500的相对行业偏离倍数2
* /valuation-stat-analysis/relative-deviation/2
*/
export const valuationstatanalysisRelativedeviation2 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/2`, option)

/**
* 15相对中证500的相对行业偏离倍数3
* /valuation-stat-analysis/relative-deviation/3
*/
export const valuationstatanalysisRelativedeviation3 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/3`, option)

/**
* 15相对中证500的相对行业偏离倍数4
* /valuation-stat-analysis/relative-deviation/4
*/
export const valuationstatanalysisRelativedeviation4 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/4`, option)

/**
* 15相对中证500的相对行业偏离倍数5
* /valuation-stat-analysis/relative-deviation/5
*/
export const valuationstatanalysisRelativedeviation5 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/5`, option)

/**
* 15相对中证500的相对行业偏离倍数6
* /valuation-stat-analysis/relative-deviation/6
*/
export const valuationstatanalysisRelativedeviation6 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/6`, option)

/**
* 15相对中证500的相对行业偏离倍数7
* /valuation-stat-analysis/relative-deviation/7
*/
export const valuationstatanalysisRelativedeviation7 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/7`, option)

/**
* 15相对中证500的相对行业偏离倍数8
* /valuation-stat-analysis/relative-deviation/8
*/
export const valuationstatanalysisRelativedeviation8 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/8`, option)

/**
* 15相对中证500的相对行业偏离倍数9
* /valuation-stat-analysis/relative-deviation/9
*/
export const valuationstatanalysisRelativedeviation9 = (option) => request.get(`/valuation-stat-analysis/relative-deviation/9`, option)

/**
* 16行业分布前十0
* /valuation-stat-analysis/s
*/
export const valuationstatanalysisS = (option) => request.get(`/valuation-stat-analysis/s`, option)

/**
* 16行业分布前十1
* /valuation-stat-analysis/industry-alloc/1
*/
export const valuationstatanalysisIndustryalloc1 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/1`, option)

/**
* 16行业分布前十2
* /valuation-stat-analysis/industry-alloc/2
*/
export const valuationstatanalysisIndustryalloc2 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/2`, option)

/**
* 16行业分布前十3
* /valuation-stat-analysis/industry-alloc/3
*/
export const valuationstatanalysisIndustryalloc3 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/3`, option)

/**
* 16行业分布前十4
* /valuation-stat-analysis/industry-alloc/4
*/
export const valuationstatanalysisIndustryalloc4 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/4`, option)

/**
* 16行业分布前十5
* /valuation-stat-analysis/industry-alloc/5
*/
export const valuationstatanalysisIndustryalloc5 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/5`, option)

/**
* 16行业分布前十6
* /valuation-stat-analysis/industry-alloc/6
*/
export const valuationstatanalysisIndustryalloc6 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/6`, option)

/**
* 16行业分布前十7
* /valuation-stat-analysis/industry-alloc/7
*/
export const valuationstatanalysisIndustryalloc7 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/7`, option)

/**
* 16行业分布前十8
* /valuation-stat-analysis/industry-alloc/8
*/
export const valuationstatanalysisIndustryalloc8 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/8`, option)

/**
* 16行业分布前十9
* /valuation-stat-analysis/industry-alloc/9
*/
export const valuationstatanalysisIndustryalloc9 = (option) => request.get(`/valuation-stat-analysis/industry-alloc/9`, option)

/**
* 17最大偏离度1
* /valuation-stat-analysis/max-deviation/1
*/
export const valuationstatanalysisMaxdeviation1 = (option) => request.get(`/valuation-stat-analysis/max-deviation/1`, option)

/**
* 17最大偏离度2
* /valuation-stat-analysis/max-deviation/2
*/
export const valuationstatanalysisMaxdeviation2 = (option) => request.get(`/valuation-stat-analysis/max-deviation/2`, option)

/**
* 17最大偏离度3
* /valuation-stat-analysis/max-deviation/3
*/
export const valuationstatanalysisMaxdeviation3 = (option) => request.get(`/valuation-stat-analysis/max-deviation/3`, option)

/**
* 17最大偏离度4
* /valuation-stat-analysis/max-deviation/4
*/
export const valuationstatanalysisMaxdeviation4 = (option) => request.get(`/valuation-stat-analysis/max-deviation/4`, option)

/**
* 17最大偏离度5
* /valuation-stat-analysis/max-deviation/5
*/
export const valuationstatanalysisMaxdeviation5 = (option) => request.get(`/valuation-stat-analysis/max-deviation/5`, option)

/**
* 17最大偏离度6
* /valuation-stat-analysis/max-deviation/6
*/
export const valuationstatanalysisMaxdeviation6 = (option) => request.get(`/valuation-stat-analysis/max-deviation/6`, option)

/**
* 17最大偏离度7
* /valuation-stat-analysis/max-deviation/7
*/
export const valuationstatanalysisMaxdeviation7 = (option) => request.get(`/valuation-stat-analysis/max-deviation/7`, option)

/**
* 17最大偏离度8
* /valuation-stat-analysis/max-deviation/8
*/
export const valuationstatanalysisMaxdeviation8 = (option) => request.get(`/valuation-stat-analysis/max-deviation/8`, option)

/**
* 17最大偏离度9
* /valuation-stat-analysis/max-deviation/9
*/
export const valuationstatanalysisMaxdeviation9 = (option) => request.get(`/valuation-stat-analysis/max-deviation/9`, option)

/**
* 18主动投资比例1
* /valuation-stat-analysis/investment-ratio/1
*/
export const valuationstatanalysisInvestmentratio1 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/1`, option)

/**
* 18主动投资比例2
* /valuation-stat-analysis/investment-ratio/2
*/
export const valuationstatanalysisInvestmentratio2 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/2`, option)

/**
* 18主动投资比例3
* /valuation-stat-analysis/investment-ratio/3
*/
export const valuationstatanalysisInvestmentratio3 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/3`, option)

/**
* 18主动投资比例4
* /valuation-stat-analysis/investment-ratio/4
*/
export const valuationstatanalysisInvestmentratio4 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/4`, option)

/**
* 18主动投资比例5
* /valuation-stat-analysis/investment-ratio/5
*/
export const valuationstatanalysisInvestmentratio5 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/5`, option)

/**
* 18主动投资比例6
* /valuation-stat-analysis/investment-ratio/6
*/
export const valuationstatanalysisInvestmentratio6 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/6`, option)

/**
* 18主动投资比例7
* /valuation-stat-analysis/investment-ratio/7
*/
export const valuationstatanalysisInvestmentratio7 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/7`, option)

/**
* 18主动投资比例8
* /valuation-stat-analysis/investment-ratio/8
*/
export const valuationstatanalysisInvestmentratio8 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/8`, option)

/**
* 18主动投资比例9
* /valuation-stat-analysis/investment-ratio/9
*/
export const valuationstatanalysisInvestmentratio9 = (option) => request.get(`/valuation-stat-analysis/investment-ratio/9`, option)

/**
* 19涵德归因模型1
* /valuation-stat-analysis/Farra/1
*/
export const valuationstatanalysisFarra1 = (option) => request.get(`/valuation-stat-analysis/Farra/1`, option)

/**
* 19涵德归因模型2
* /valuation-stat-analysis/Farra/2
*/
export const valuationstatanalysisFarra2 = (option) => request.get(`/valuation-stat-analysis/Farra/2`, option)

/**
* 19涵德归因模型3
* /valuation-stat-analysis/Farra/3
*/
export const valuationstatanalysisFarra3 = (option) => request.get(`/valuation-stat-analysis/Farra/3`, option)

/**
* 19涵德归因模型4
* /valuation-stat-analysis/Farra/4
*/
export const valuationstatanalysisFarra4 = (option) => request.get(`/valuation-stat-analysis/Farra/4`, option)

/**
* 19涵德归因模型5
* /valuation-stat-analysis/Farra/5
*/
export const valuationstatanalysisFarra5 = (option) => request.get(`/valuation-stat-analysis/Farra/5`, option)

/**
* 19涵德归因模型6
* /valuation-stat-analysis/Farra/6
*/
export const valuationstatanalysisFarra6 = (option) => request.get(`/valuation-stat-analysis/Farra/6`, option)

/**
* 19涵德归因模型7
* /valuation-stat-analysis/Farra/7
*/
export const valuationstatanalysisFarra7 = (option) => request.get(`/valuation-stat-analysis/Farra/7`, option)

/**
* 19涵德归因模型8
* /valuation-stat-analysis/Farra/8
*/
export const valuationstatanalysisFarra8 = (option) => request.get(`/valuation-stat-analysis/Farra/8`, option)

/**
* 19涵德归因模型9
* /valuation-stat-analysis/Farra/9
*/
export const valuationstatanalysisFarra9 = (option) => request.get(`/valuation-stat-analysis/Farra/9`, option)

/**
* 20Brinson归因曲线1
* /valuation-stat-analysis/brinson-time-series/1
*/
export const valuationstatanalysisBrinsontimeseries1 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/1`, option)

/**
* 20Brinson归因曲线2
* /valuation-stat-analysis/brinson-time-series/2
*/
export const valuationstatanalysisBrinsontimeseries2 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/2`, option)

/**
* 20Brinson归因曲线3
* /valuation-stat-analysis/brinson-time-series/3
*/
export const valuationstatanalysisBrinsontimeseries3 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/3`, option)

/**
* 20Brinson归因曲线4
* /valuation-stat-analysis/brinson-time-series/4
*/
export const valuationstatanalysisBrinsontimeseries4 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/4`, option)

/**
* 20Brinson归因曲线5
* /valuation-stat-analysis/brinson-time-series/5
*/
export const valuationstatanalysisBrinsontimeseries5 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/5`, option)

/**
* 20Brinson归因曲线6
* /valuation-stat-analysis/brinson-time-series/6
*/
export const valuationstatanalysisBrinsontimeseries6 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/6`, option)

/**
* 20Brinson归因曲线7
* /valuation-stat-analysis/brinson-time-series/7
*/
export const valuationstatanalysisBrinsontimeseries7 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/7`, option)

/**
* 20Brinson归因曲线8
* /valuation-stat-analysis/brinson-time-series/8
*/
export const valuationstatanalysisBrinsontimeseries8 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/8`, option)

/**
* 20Brinson归因曲线9
* /valuation-stat-analysis/brinson-time-series/9
*/
export const valuationstatanalysisBrinsontimeseries9 = (option) => request.get(`/valuation-stat-analysis/brinson-time-series/9`, option)

/**
* 21Brinson归因指标1
* /valuation-stat-analysis/brinson/1
*/
export const valuationstatanalysisBrinson1 = (option) => request.get(`/valuation-stat-analysis/brinson/1`, option)

/**
* 21Brinson归因指标2
* /valuation-stat-analysis/brinson/2
*/
export const valuationstatanalysisBrinson2 = (option) => request.get(`/valuation-stat-analysis/brinson/2`, option)

/**
* 21Brinson归因指标3
* /valuation-stat-analysis/brinson/3
*/
export const valuationstatanalysisBrinson3 = (option) => request.get(`/valuation-stat-analysis/brinson/3`, option)

/**
* 21Brinson归因指标4
* /valuation-stat-analysis/brinson/4
*/
export const valuationstatanalysisBrinson4 = (option) => request.get(`/valuation-stat-analysis/brinson/4`, option)

/**
* 21Brinson归因指标5
* /valuation-stat-analysis/brinson/5
*/
export const valuationstatanalysisBrinson5 = (option) => request.get(`/valuation-stat-analysis/brinson/5`, option)

/**
* 21Brinson归因指标6
* /valuation-stat-analysis/brinson/6
*/
export const valuationstatanalysisBrinson6 = (option) => request.get(`/valuation-stat-analysis/brinson/6`, option)

/**
* 21Brinson归因指标7
* /valuation-stat-analysis/brinson/7
*/
export const valuationstatanalysisBrinson7 = (option) => request.get(`/valuation-stat-analysis/brinson/7`, option)

/**
* 21Brinson归因指标8
* /valuation-stat-analysis/brinson/8
*/
export const valuationstatanalysisBrinson8 = (option) => request.get(`/valuation-stat-analysis/brinson/8`, option)

/**
* 21Brinson归因指标9
* /valuation-stat-analysis/brinson/9
*/
export const valuationstatanalysisBrinson9 = (option) => request.get(`/valuation-stat-analysis/brinson/9`, option)

/**
* 22行业配置归因1
* /valuation-stat-analysis/sector-contribution/1
*/
export const valuationstatanalysisSectorcontribution1 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/1`, option)

/**
* 22行业配置归因2
* /valuation-stat-analysis/sector-contribution/2
*/
export const valuationstatanalysisSectorcontribution2 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/2`, option)

/**
* 22行业配置归因3
* /valuation-stat-analysis/sector-contribution/3
*/
export const valuationstatanalysisSectorcontribution3 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/3`, option)

/**
* 22行业配置归因4
* /valuation-stat-analysis/sector-contribution/4
*/
export const valuationstatanalysisSectorcontribution4 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/4`, option)

/**
* 22行业配置归因5
* /valuation-stat-analysis/sector-contribution/5
*/
export const valuationstatanalysisSectorcontribution5 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/5`, option)

/**
* 22行业配置归因6
* /valuation-stat-analysis/sector-contribution/6
*/
export const valuationstatanalysisSectorcontribution6 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/6`, option)

/**
* 22行业配置归因7
* /valuation-stat-analysis/sector-contribution/7
*/
export const valuationstatanalysisSectorcontribution7 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/7`, option)

/**
* 22行业配置归因8
* /valuation-stat-analysis/sector-contribution/8
*/
export const valuationstatanalysisSectorcontribution8 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/8`, option)

/**
* 22行业配置归因9
* /valuation-stat-analysis/sector-contribution/9
*/
export const valuationstatanalysisSectorcontribution9 = (option) => request.get(`/valuation-stat-analysis/sector-contribution/9`, option)

/**
* 23 Brinson行业归因 /valuation-stat-analysis/brinson-sector/{id}
* /valuation-stat-analysis/brinson-sector/{id}
*/
export const valuationstatanalysisBrinsonsector = (option) => request.get(`/valuation-stat-analysis/brinson-sector/${option["id"]}`, option)

/**
* 行业偏离度主动投资分析
* /valuation-stat-analysis/absolute-deviation/{id}
*/
export const valuationstatanalysisAbsolutedeviation = (option) => request.get(`/valuation-stat-analysis/absolute-deviation/${option["id"]}`, option)


/**
* e
* 2020-03-19T05:46:14.292Z
*/

/**
* 产品及估值表管理
* 2019-07-01T08:35:01.584Z
*/

/**
* Dashboard
* 2020-04-14T03:50:58.829Z
*/
/**
* 产品策略分布（按产品数量） /valuation-mgt/dashboard/strategy-pct-product
* /valuation-mgt/dashboard/strategy-pct-product
*/
export const valuationmgtDashboardStrategypctproduct = (option) => request.get(`/valuation-mgt/dashboard/strategy-pct-product`, option)

/**
* 产品策略分布（按资产规模） /valuation-mgt/dashboard/strategy-pct-aum
* /valuation-mgt/dashboard/strategy-pct-aum
*/
export const valuationmgtDashboardStrategypctaum = (option) => request.get(`/valuation-mgt/dashboard/strategy-pct-aum`, option)

/**
* 机构下产品数量 /valuation-mgt/dashboard/product-quantity
* /valuation-mgt/dashboard/product-quantity
*/
export const valuationmgtDashboardProductquantity = (option) => request.get(`/valuation-mgt/dashboard/product-quantity`, option)

/**
* 机构下平仓线产品提示 /valuation-mgt/dashboard/stoploss-alert
* /valuation-mgt/dashboard/stoploss-alert
*/
export const valuationmgtDashboardStoplossalert = (option) => request.get(`/valuation-mgt/dashboard/stoploss-alert`, option)

/**
* 机构下预警线产品提示 /valuation-mgt/dashboard/nav-alert
* /valuation-mgt/dashboard/nav-alert
*/
export const valuationmgtDashboardNavalert = (option) => request.get(`/valuation-mgt/dashboard/nav-alert`, option)

/**
* 机构资管规模 /valuation-mgt/dashboard/institution-aum
* /valuation-mgt/dashboard/institution-aum
*/
export const valuationmgtDashboardInstitutionaum = (option) => request.get(`/valuation-mgt/dashboard/institution-aum`, option)

/**
* 机构资管规模走势 /valuation-mgt/dashboard/institution-aum-timeseries
* /valuation-mgt/dashboard/institution-aum-timeseries
*/
export const valuationmgtDashboardInstitutionaumtimeseries = (option) => request.get(`/valuation-mgt/dashboard/institution-aum-timeseries`, option)


/**
* OTC
* 2020-02-20T06:13:40.044Z
*/
/**
* 【暂时不用】场外未分类标的统计 /valuation-mgt/otc/unclas-instruments
* /valuation-mgt/otc/unclas-instruments
*/
export const valuationmgtOtcUnclasinstruments = (option) => request.get(`/valuation-mgt/otc/unclas-instruments`, option)

/**
* 交易所下拉菜单加载项 /valuation-mgt/exchanges
* /valuation-mgt/exchanges
*/
export const valuationmgtExchanges = (option) => request.get(`/valuation-mgt/exchanges`, option)

/**
* 机构下场外标的列表 /valuation-mgt/otc-instrument-list
* /valuation-mgt/otc-instrument-list
*/
export const valuationmgtOtcinstrumentlist = (option) => request.get(`/valuation-mgt/otc-instrument-list`, option)

/**
* 编辑删除场外标的 /valuation-mgt/otc-instrument
* /valuation-mgt/otc-instrument
*/
export const valuationmgtOtcinstrument = (option) => request.post(`/valuation-mgt/otc-instrument`, option)

/**
* 编辑场内标的 /valuation-mgt/listed-instrument
* /valuation-mgt/listed-instrument
*/
export const valuationmgtListedinstrument = (option) => request.post(`/valuation-mgt/listed-instrument`, option)


/**
* T0预估
* 2020-06-03T03:18:28.112Z
*/
/**
* T0持仓明细 /realtime-product-monitor/realtime-position-detail/{product-num}
* /realtime-product-monitor/realtime-position-detail/{product-num}
*/
export const realtimeproductmonitorRealtimepositiondetail = (option) => request.get(`/realtime-product-monitor/realtime-position-detail/${option["product-num"]}`, option)

/**
* T0监控概览 /realtime-product-monitor/products
* realtime-product-monitor/products
*/
export const ealtimeproductmonitorProducts = (option) => request.get(`/realtime-product-monitor/products`, option)


/**
* v1 v2
* 2019-10-09T09:24:40.282Z
*/

/**
* pa
* 2020-08-17T10:25:20.748Z
*/
/**
* /valuation-mgt/pnl-dists/{period-type}
* /valuation-mgt/pnl-dists/{period-type}
*/
export const valuationmgtPnldists = (option) => request.get(`/valuation-mgt/pnl-dists/${option["period-type"]}`, option)


/**
* 操作员及基金经理
* 2020-08-17T10:25:20.758Z
*/
/**
* 修改基金经理/portfolio-manager/do-edit
* /portfolio-manager/do-edit/{pmId}
*/
export const portfoliomanagerDoedit = (option) => request.post(`/portfolio-manager/do-edit/${option["pmId"]}`, option)

/**
* 修改密码/operator/new-password/{optId}
* /operator/new-password/{optId}
*/
export const operatorNewpassword = (option) => request.post(`/operator/new-password/${option["optId"]}`, option)

/**
* 修改操作员/operator/do-edit
* /operator/do-edit/{optId}
*/
export const operatorDoedit = (option) => request.post(`/operator/do-edit/${option["optId"]}`, option)

/**
* 删除基金经理/portfolio-manager/do-delete/{pmId}
* /portfolio-manager/do-delete/{pmId}
*/
export const portfoliomanagerDodelete = (option) => request.post(`/portfolio-manager/do-delete/${option["pmId"]}`, option)

/**
* 基金经理列表 /portfolio-manager/list
* /portfolio-manager/list
*/
export const portfoliomanagerList = (option) => request.get(`/portfolio-manager/list`, option)

/**
* 操作员列表 /operator/list
* /operator/list
*/
export const operatorList = (option) => request.get(`/operator/list`, option)

/**
* 操作员前缀/operator-prefix
* /operator-prefix/{institutionId}
*/
export const operatorprefix = (option) => request.get(`/operator-prefix/${option["institutionId"]}`, option)

/**
* 新建基金经理/portfolio-manager/do-add
* /portfolio-manager/do-add
*/
export const portfoliomanagerDoadd = (option) => request.post(`/portfolio-manager/do-add`, option)

/**
* 新建操作员/operator/do-add
* /operator/do-add
*/
export const operatorDoadd = (option) => request.post(`/operator/do-add`, option)

/**
* 下载估值数据列表 /valuation-mgt/single-product-nav/list
* /valuation-mgt/single-product-nav/list/{productNum}
*/
export const valuationmgtSingleproductnavList = (option) => request.get(`/valuation-mgt/single-product-nav/list/${option["productNum"]}`, option)

/**
* 下载估值表原文件 valuatoin-mgt/download/valuation-report
* valuation-mgt/download/valuation-report
*/
export const aluationmgtDownloadValuationreport = (option) => request.post(`/valuation-mgt/download/valuation-report`, option)

/**
* 下载每日净值表 /valuation-mgt/navs-file/{tradeDate}/{productStatus}adeDate}
* /valuation-mgt/navs-file/{tradeDate}/{productStatus}
*/
export const valuationmgtNavsfile = (option) => request.get(`/valuation-mgt/navs-file/${option["tradeDate"]}/${option["productStatus"]}`, option)

/**
* 下载科目统计表 /valuation-mgt/subject-stat-file/{productNum}
* /valuation-mgt/subject-stat-file/{productNum}
*/
export const valuationmgtSubjectstatfile = (option) => request.get(`/valuation-mgt/subject-stat-file/${option["productNum"]}`, option)

/**
* 产品下拉列表 /valuation-mgt/products
* /valuation-mgt/products
*/
export const valuationmgtProducts = (option) => request.get(`/valuation-mgt/products`, option)

/**
* 产品估值起始终止日列表 /valuation-mgt/products-period
* /valuation-mgt/products-period
*/
export const valuationmgtProductsperiod = (option) => request.get(`/valuation-mgt/products-period`, option)

/**
* 估值数据列表 valuation-mgt/valuation-list-full
* /valuation-mgt/valuation-list-full/{productNum}
*/
export const valuationmgtValuationlistfull = (option) => request.get(`/valuation-mgt/valuation-list-full/${option["productNum"]}`, option)

/**
* 估值表解析日志查询 /valuation-mgt/task-log/list
* /valuation-mgt/task-log/list
*/
export const valuationmgtTasklogList = (option) => request.post(`/valuation-mgt/task-log/list`, option)

/**
* 估值表预览 valuation-mgt/valuation-report-preview/{productNum}/{tradeDate}
* /valuation-mgt/valuation-report-preview/{productNum}/{tradeDate}
*/
export const valuationmgtValuationreportpreview = (option) => request.get(`/valuation-mgt/valuation-report-preview/${option["productNum"]}/${option["tradeDate"]}`, option)

/**
* 修改产品信息 valuation-mgt/product-info-edit
* /valuation-mgt/product-info-edit/{prodcutNum}
*/
export const valuationmgtProductinfoedit = (option) => request.post(`/valuation-mgt/product-info-edit/${option["prodcutNum"]}`, option)

/**
* 修改产品信息2 valuation-mgt/product-info-edit/v2
* /valuation-mgt/product-info-edit/v2/{prodcutNum}
*/
export const valuationmgtProductinfoeditV2 = (option) => request.post(`/valuation-mgt/product-info-edit/v2/${option["prodcutNum"]}`, option)

/**
* 删除估值数据 valuation-mgt/delete/valuation-report
* /valuation-mgt/delete/valuation-report
*/
export const valuationmgtDeleteValuationreport = (option) => request.post(`/valuation-mgt/delete/valuation-report`, option)

/**
* 外包机构下拉菜单加载项 /valuation-mgt/fundAdmin/get-list
* /valuation-mgt/fundAdmin/list
*/
export const valuationmgtFundAdminList = (option) => request.get(`/valuation-mgt/fundAdmin/list`, option)

/**
* 托管机构下拉菜单加载项 /valuation-mgt/custodian/get-list
* /valuation-mgt/custodian/list
*/
export const valuationmgtCustodianList = (option) => request.get(`/valuation-mgt/custodian/list`, option)

/**
* 投资策略下拉菜单加载项 /valuation-mgt/invest-strategy/get-list
* /valuation-mgt/invest-strategy/list
*/
export const valuationmgtInveststrategyList = (option) => request.get(`/valuation-mgt/invest-strategy/list`, option)

/**
* 报告查询产品信息 valuation-mgt/report/product-info-detail
* valuation-mgt/report/product-info-detail/{product-num}
*/
export const aluationmgtReportProductinfodetail = (option) => request.get(`/valuation-mgt/report/product-info-detail/${option["product-num"]}`, option)

/**
* 新建产品信息 valuation-mgt/product-info-add
* /valuation-mgt/product-info-add
*/
export const valuationmgtProductinfoadd = (option) => request.post(`/valuation-mgt/product-info-add`, option)

/**
* 新建产品信息2 valuation-mgt/product-info-add-new
* /valuation-mgt/product-info-add/v2
*/
export const valuationmgtProductinfoaddV2 = (option) => request.post(`/valuation-mgt/product-info-add/v2`, option)

/**
* 查询产品信息 valuation-mgt/product-info-detail
* /valuation-mgt/product-info-detail/{productNum}
*/
export const valuationmgtProductinfodetail = (option) => request.get(`/valuation-mgt/product-info-detail/${option["productNum"]}`, option)

/**
* 查询产品信息2 valuation-mgt/product-info-detail/v2
* /valuation-mgt/product-info-detail/v2/{product-num}
*/
export const valuationmgtProductinfodetailV2 = (option) => request.get(`/valuation-mgt/product-info-detail/v2/${option["product-num"]}`, option)

/**
* 每日净值表 /valuation-mgt/navs/{tradeDate}/{productStatus}
* /valuation-mgt/navs/{tradeDate}/{productStatus}
*/
export const valuationmgtNavs = (option) => request.get(`/valuation-mgt/navs/${option["tradeDate"]}/${option["productStatus"]}`, option)

/**
* 科目统计 valuation-mgt/subject-stat-list/{productNum}
* /valuation-mgt/subject-stat-list/{productNum}
*/
export const valuationmgtSubjectstatlist = (option) => request.get(`/valuation-mgt/subject-stat-list/${option["productNum"]}`, option)

/**
* 管理机构下拉菜单加载项/valuation-mgt/gp/list
* /valuation-mgt/pm/list
*/
export const valuationmgtPmList = (option) => request.get(`/valuation-mgt/pm/list`, option)

/**
* 管理机构基金经理下拉菜单加载项/valuation-mgt/gp-pm/list
* /valuation-mgt/gp-pm/list
*/
export const valuationmgtGppmList = (option) => request.get(`/valuation-mgt/gp-pm/list`, option)

/**
* 解析估值表 valuation-mgt/upload/valuation-report
* valuation-mgt/upload/valuation-report
*/
export const aluationmgtUploadValuationreport = (option) => request.post(`/valuation-mgt/upload/valuation-report`, option)


/**
* v3
* 2019-10-09T09:26:51.537Z
*/
/**
* 下载每日净值表v3 /valuation-mgt/navs-file-v3
* /valuation-mgt/navs-file-v3
*/
export const valuationmgtNavsfilev3 = (option) => request.post(`/valuation-mgt/navs-file-v3`, option)

/**
* 产品净值走势 valuation-mgt/product-report/unit-net-value
* /valuation-mgt/product-report/unit-net-value/{id}/{startDate}/{endDate}
*/
export const valuationmgtProductreportUnitnetvalue = (option) => request.get(`/valuation-mgt/product-report/unit-net-value/${option["id"]}/${option["startDate"]}/${option["endDate"]}`, option)

/**
* 产品列表 v3 /valuation-stat-analysis-list/v3
* /valuation-stat-analysis-list/v3
*/
export const valuationstatanalysislistV3 = (option) => request.get(`/valuation-stat-analysis-list/v3`, option)

/**
* 产品规模走势 valuation-mgt/product-report/asset-value
* /valuation-mgt/product-report/asset-value/{id}/{startDate}/{endDate}
*/
export const valuationmgtProductreportAssetvalue = (option) => request.get(`/valuation-mgt/product-report/asset-value/${option["id"]}/${option["startDate"]}/${option["endDate"]}`, option)

/**
* 估值表产品自动匹配 valuation-mgt/mapping-report
* valuation-mgt/mapping-report
*/
export const aluationmgtMappingreport = (option) => request.post(`/valuation-mgt/mapping-report`, option)

/**
* 估值表预览3 valuation-mgt/valuation-report-preview-v3/{product-num}/{tradeDate}
* /valuation-mgt/valuation-report-preview-v3/{product-num}/{tradeDate}
*/
export const valuationmgtValuationreportpreviewv3 = (option) => request.get(`/valuation-mgt/valuation-report-preview-v3/${option["product-num"]}/${option["tradeDate"]}`, option)

/**
* 修改产品信息3 valuation-mgt/product-info-edit/v3
* /valuation-mgt/product-info-edit/v3/{prodcutNum}
*/
export const valuationmgtProductinfoeditV3 = (option) => request.post(`/valuation-mgt/product-info-edit/v3/${option["prodcutNum"]}`, option)

/**
* 修改情景/valuation-mgt/edit-scenario/{sceneId}
* /valuation-mgt/edit-scenario/{sceneId}
*/
export const valuationmgtEditscenario = (option) => request.post(`/valuation-mgt/edit-scenario/${option["sceneId"]}`, option)

/**
* 删除产品 valuation-mgt/product-info-drop/{product-num}
* /valuation-mgt/product-info-drop/{product-num}
*/
export const valuationmgtProductinfodrop = (option) => request.post(`/valuation-mgt/product-info-drop/${option["product-num"]}`, option)

/**
* 删除估值表临时文件/valuation-mgt/upload/valuation-report/temp/single
* /valuation-mgt/upload/valuation-report/temp
*/
export const valuationmgtUploadValuationreportTemp = (option) => request.post(`/valuation-mgt/upload/valuation-report/temp`, option)

/**
* 删除估值表所有临时文件/valuation-mgt/upload/valuation-report/temp/all
* /valuation-mgt/upload/valuation-report/temp/all
*/
export const valuationmgtUploadValuationreportTempAll = (option) => request.get(`/valuation-mgt/upload/valuation-report/temp/all`, option)

/**
* 删除情景/valuation-mgt/delete-scenario/{sceneId}
* /valuation-mgt/delete-scenario/{sceneId}
*/
export const valuationmgtDeletescenario = (option) => request.get(`/valuation-mgt/delete-scenario/${option["sceneId"]}`, option)

/**
* 单估值表解析
* valuation-mgt/upload/valuation-report/single
*/
export const aluationmgtUploadValuationreportSingle = (option) => request.post(`/valuation-mgt/upload/valuation-report/single`, option)

/**
* 情景分析查询/valuation-mgt/scenario-analysis/{product-num}
* /valuation-mgt/scenario-analysis-vpa/{product-num}
*/
export const valuationmgtScenarioanalysisvpa = (option) => request.get(`/valuation-mgt/scenario-analysis-vpa/${option["product-num"]}`, option)

/**
* 批量下载估值表 /valuation-mgt/download/valuation-report/batch/{product-num}
* /valuation-mgt/download/valuation-report/batch/{product-num}
*/
export const valuationmgtDownloadValuationreportBatch = (option) => request.get(`/valuation-mgt/download/valuation-report/batch/${option["product-num"]}`, option)

/**
* 批量下载估值表(old) /valuation-mgt/download/valuation-report/batch/{product-num}
* /valuation-mgt/download/valuation-report/batch/{product-num}
*/
export const valuationmgtDownloadValuationreportBatch = (option) => request.get(`/valuation-mgt/download/valuation-report/batch/${option["product-num"]}`, option)

/**
* 批量估值表解析valuation-mgt/upload/valuation-report/batch
* /upload/valuation-report/batch
*/
export const uploadValuationreportBatch = (option) => request.post(`/upload/valuation-report/batch`, option)

/**
* 批量新建产品 valuation-mgt/product-info-add/batch
* valuation-mgt/product-info-add/batch
*/
export const aluationmgtProductinfoaddBatch = (option) => request.post(`/valuation-mgt/product-info-add/batch`, option)

/**
* 报告查询产品信息 v3 valuation-mgt/report/product-info-detail/v3
* valuation-mgt/report/product-info-detail/v3/{product-num}
*/
export const aluationmgtReportProductinfodetailV3 = (option) => request.get(`/valuation-mgt/report/product-info-detail/v3/${option["product-num"]}`, option)

/**
* 新增情景 /valuation-mgt/new-scenario
* /valuation-mgt/new-scenario
*/
export const valuationmgtNewscenario = (option) => request.post(`/valuation-mgt/new-scenario`, option)

/**
* 新建产品信息3 /valuation-mgt/product-info-add/v3
* /valuation-mgt/product-info-add/v3
*/
export const valuationmgtProductinfoaddV3 = (option) => request.post(`/valuation-mgt/product-info-add/v3`, option)

/**
* 查询tradeSummay表更新状态 valuation-mgt/tradesummary-progress
* /valuation-mgt/tradesummary-progress
*/
export const valuationmgtTradesummaryprogress = (option) => request.post(`/valuation-mgt/tradesummary-progress`, option)

/**
* 查询产品信息3 valuation-mgt/product-info-detail/v3
* /valuation-mgt/product-info-detail/v3/{product-num}
*/
export const valuationmgtProductinfodetailV3 = (option) => request.get(`/valuation-mgt/product-info-detail/v3/${option["product-num"]}`, option)

/**
* 根据任务列表更新tradeSummay表盈亏统计 valuation-mgt/tradesummary-cal
* /valuation-mgt/tradesummary-cal
*/
export const valuationmgtTradesummarycal = (option) => request.post(`/valuation-mgt/tradesummary-cal`, option)

/**
* 每日净值表v3 /valuation-mgt/navs-v3
* /valuation-mgt/navs-v3
*/
export const valuationmgtNavsv3 = (option) => request.post(`/valuation-mgt/navs-v3`, option)

/**
* 获取批量下载估值表id /valuation-mgt/download/valuation-report/uuid/{product-num}
* /valuation-mgt/download/valuation-report/uuid/{product-num}
*/
export const valuationmgtDownloadValuationreportUuid = (option) => request.post(`/valuation-mgt/download/valuation-report/uuid/${option["product-num"]}`, option)


/**
* 产品组
* 2020-06-17T01:56:17.106Z
*/

/**
* FOF产品监控
* 2020-07-13T07:27:55.925Z
*/

/**
* 实时
* 2020-07-28T06:19:13.363Z
*/
/**
* YTD净值 valuation-mgt /fof/monitor/realtime/navs
* valuation-mgt /fof/monitor/navs/realtime
*/
export const aluationmgtFofMonitorNavsRealtime = (option) => request.get(`/valuation-mgt /fof/monitor/navs/realtime`, option)

/**
* 实时规模valuation-mgt /fof/monitor/realtime/aum
* valuation-mgt /fof/monitor/aum/realtime
*/
export const aluationmgtFofMonitorAumRealtime = (option) => request.get(`/valuation-mgt /fof/monitor/aum/realtime`, option)

/**
* 嵌套表 - 业绩表现实时 valuation-mgt/fof/monitor/realtime/perf
* valuation-mgt/fof/monitor/perf/realtime
*/
export const aluationmgtFofMonitorPerfRealtime = (option) => request.get(`/valuation-mgt/fof/monitor/perf/realtime`, option)

/**
* 嵌套表 - 投资概览实时 valuation-mgt/fof/monitor/realtime/overview
* valuation-mgt/fof/monitor/overview/realtime
*/
export const aluationmgtFofMonitorOverviewRealtime = (option) => request.get(`/valuation-mgt/fof/monitor/overview/realtime`, option)

/**
* 嵌套表 - 风险监控实时 valuation-mgt/fof/monitor/realtime/risk
* valuation-mgt/fof/monitor/risk/realtime
*/
export const aluationmgtFofMonitorRiskRealtime = (option) => request.get(`/valuation-mgt/fof/monitor/risk/realtime`, option)

/**
* 当日实时涨跌valuation-mgt /fof/monitor/realtime/today-perf
* valuation-mgt /fof/monitor/today-perf/realtime
*/
export const aluationmgtFofMonitorTodayperfRealtime = (option) => request.get(`/valuation-mgt /fof/monitor/today-perf/realtime`, option)


/**
* 已确认数据
* 2020-07-28T06:19:41.577Z
*/
/**
* YTD净值 valuation-mgt /fof/monitor/confirm/navs
* valuation-mgt /fof/monitor/navs/confirm
*/
export const aluationmgtFofMonitorNavsConfirm = (option) => request.get(`/valuation-mgt /fof/monitor/navs/confirm`, option)

/**
* 嵌套表 - 业绩表现已确认 valuation-mgt/fof/monitor/confirm/perf
* valuation-mgt/fof/monitor/perf/confirm
*/
export const aluationmgtFofMonitorPerfConfirm = (option) => request.get(`/valuation-mgt/fof/monitor/perf/confirm`, option)

/**
* 嵌套表 - 投资概览已确认 valuation-mgt/fof/monitor/confirm/overview
* valuation-mgt/fof/monitor/overview/confirm
*/
export const aluationmgtFofMonitorOverviewConfirm = (option) => request.get(`/valuation-mgt/fof/monitor/overview/confirm`, option)

/**
* 嵌套表 - 风险监控已确认 valuation-mgt/fof/monitor/confirm/risk
* valuation-mgt/fof/monitor/risk/confirm
*/
export const aluationmgtFofMonitorRiskConfirm = (option) => request.get(`/valuation-mgt/fof/monitor/risk/confirm`, option)

/**
* 已确认规模valuation-mgt /fof/monitor/confirm/aum
* valuation-mgt /fof/monitor/aum/confirm
*/
export const aluationmgtFofMonitorAumConfirm = (option) => request.get(`/valuation-mgt /fof/monitor/aum/confirm`, option)

/**
* 当日确认涨跌valuation-mgt /fof/monitor/confirm/today-perf
* valuation-mgt /fof/monitor/today-perf/confirm
*/
export const aluationmgtFofMonitorTodayperfConfirm = (option) => request.get(`/valuation-mgt /fof/monitor/today-perf/confirm`, option)


/**
* 产品组业绩
* 2020-07-01T05:19:54.387Z
*/
/**
* 产品组内产品级查询 valuation-mgt/basic-info/product/{id}
* valuation-mgt/basic-info/product/{id}
*/
export const aluationmgtBasicinfoProduct = (option) => request.post(`/valuation-mgt/basic-info/product/${option["id"]}`, option)


/**
* 产品组设置
* 2020-07-01T05:19:25.786Z
*/
/**
* 产品组内产品列表  /product-group/products/{id}
* /product-group/products/{id}
*/
export const productgroupProducts = (option) => request.get(`/product-group/products/${option["id"]}`, option)

/**
* 产品组列表/product-group/list
* /product-group/list
*/
export const productgroupList = (option) => request.get(`/product-group/list`, option)

/**
* 产品组基础信息/product-group/detail/{id}
* /product-group/detail/{id}
*/
export const productgroupDetail = (option) => request.get(`/product-group/detail/${option["id"]}`, option)

/**
* 修改or删除产品组内基金/product-group/products/edit/{id}
* /product-group/products/edit/{id}
*/
export const productgroupProductsEdit = (option) => request.post(`/product-group/products/edit/${option["id"]}`, option)

/**
* 修改产品组/product-group/edit/{id}
* /product-group/edit/{id}
*/
export const productgroupEdit = (option) => request.post(`/product-group/edit/${option["id"]}`, option)

/**
* 删除产品组/product-group/delete/{id}
* /product-group/delete/{id}
*/
export const productgroupDelete = (option) => request.post(`/product-group/delete/${option["id"]}`, option)

/**
* 新建产品组/product-group/define
* /product-group/define
*/
export const productgroupDefine = (option) => request.post(`/product-group/define`, option)


/**
* 查询
* 2020-03-11T08:57:54.526Z
*/
/**
* 单产品每日费用明细 /valuation-mgt/asset-info/fees-detail
* /valuation-mgt/asset-info/fees-detail/{product-num}/{start-date}/{end-date}
*/
export const valuationmgtAssetinfoFeesdetail = (option) => request.get(`/valuation-mgt/asset-info/fees-detail/${option["product-num"]}/${option["start-date"]}/${option["end-date"]}`, option)

/**
* 应付费用查询 /valuation-mgt/asset-info/payables
* /valuation-mgt/asset-info/payables
*/
export const valuationmgtAssetinfoPayables = (option) => request.post(`/valuation-mgt/asset-info/payables`, option)

/**
* 报告持仓明细/position-details/product-report/{product-num}/params
* /position-details/product-report/{product-num}/params
*/
export const positiondetailsProductreportParams = (option) => request.get(`/position-details/product-report/${option["product-num"]}/params`, option)

/**
* 资产费用查询 /valuation-mgt/asset-info/fees
* /valuation-mgt/asset-info/fees
*/
export const valuationmgtAssetinfoFees = (option) => request.post(`/valuation-mgt/asset-info/fees`, option)

/**
* stktype下拉菜单加载项 /valuation-mgt/stktypes
* /valuation-mgt/stktypes
*/
export const valuationmgtStktypes = (option) => request.get(`/valuation-mgt/stktypes`, option)


/**
* 购物车
* 2019-03-13T02:05:33.400Z
*/
/**
* 02获取购物车中的资产配置 /my-cart/allocs
* /my-cart/allocs
*/
export const mycartAllocs = (option) => request.get(`/my-cart/allocs`, option)

/**
* 03删除购物车中的资产配置 /my-cart/allocs/{id}
* /my-cart/allocs/{id}
*/
export const mycartAllocs = (option) => request.get(`/my-cart/allocs/${option["id"]}`, option)

