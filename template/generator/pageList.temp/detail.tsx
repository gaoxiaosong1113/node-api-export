// 引入 react 依赖
import React, { Fragment, Component, PureComponent } from 'react';

// 引入 antd-pro 依赖
import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';

// 引入第三方依赖
import moment from 'moment';

// 引入 antd 依赖
import { Form, Card, Tabs, Row, Col, Modal, Button, Radio, Checkbox, Input, Popconfirm, Steps, Icon, Select, DatePicker, List, Table, Divider, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;

// 引入 antd-pro 组件
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Authorized from '@/components/Authorized/Authorized';
import StandardTable from '@/components/StandardTable';
import Ellipsis from '@/components/Ellipsis';
import AvatarList from '@/components/AvatarList';
import DescriptionList from '@/components/DescriptionList';
const { Description } = DescriptionList;

// 引入自定义组件
import { FileUpload, RegionCascader } from '@/utils/SkComponents';

// 引入省市区请求模块
import { RegionCascaderHandle } from '@/pages/common/RegionCascaderHandle';

// 引入项目内工具包
import { formatDate, formattingDepartmentData } from '@/utils/utils'
import { ycyyList } from '../utils/utils'

// 引入模块内组件
import { OrderDetail, TotalOrderList, Approval, Listing } from '../components'

// 引入公共工具包
import { FormLayoutDefine, CodesUtils, OssPathUtils } from "@/utils/SkUtils";
const formLayout = FormLayoutDefine.formLayout;

// 引入样式包
import styles from '@/pages/common.less'
import styleCard from './Projects.less';

import SaleOrderRenderButton from './operation'

// 载入权限
import { AuthCodeConstants } from '@/common/constants/AuthCodeConstants';
// AuthCodeConstants.data.**  需要根据具体页面填写,根据[菜单管理.xlsx]配置
const permissions = AuthCodeConstants.data.dealers;


// 定义 props 类型
interface IDComponentProps {
    dispatch,
    orderModel,
    loading: boolean,
    match: any,
}

// 定义 state 类型
interface IDComponentState {
    // 进度条当前标记
    stepsCurrent: number,
    // 基本信息
    basicInfo,
    // 经销商采购订单
    orderlisting,
    // 物料清单列表
    orderMaterial,
    tuzhiVisible,
    // 附件列表
    schemeResourceList,
}

/**
 * 连接dva
 */
@connect(({ orderModel, jxcgOrderModel, loading }) => ({
    orderModel,
    jxcgOrderModel,
    loading: loading.models.jxcgOrderModel,
}))

class GysSaleOrderDetail extends React.Component<IDComponentProps, IDComponentState> {

    public columus = [{
        title: '空间',
        dataIndex: 'spaceName',
    },
    {
        title: '商品名称',
        dataIndex: 'skuName',
    },
    {
        title: '商品编号',
        dataIndex: 'skuCode',
    },
    {
        title: '商品类目',
        dataIndex: 'categoryName',
    },
    {
        title: '商品属性',
        dataIndex: 'skuAttribute',
    },
    {
        title: '交付尺寸',
        dataIndex: 'skuDeliverySize',
    },
    {
        title: '规格型号',
        dataIndex: 'skuModel',
    },
    {
        title: '应用位置',
        dataIndex: 'appliedPosition',
    },
    {
        title: '采购数量',
        dataIndex: 'number',
    },
    {
        title: '采购单位',
        dataIndex: 'unitCd',
        render: (t, r) => CodesUtils.getLable('MEASURE_UNIT', t)

    },
    {
        title: '采购单价',
        dataIndex: 'unitPrice',
    },
    {
        title: '金额',
        dataIndex: 'totalPrice',
    },
    {
        title: '商品状态',
        dataIndex: 'signStatus',
        render: (t, r) => {
            switch (r.signStatus) {
                case 12:
                    return '待签收'
                case 13:
                    return '已签收'
                case 14:
                    return '已拒收'
                case 15:
                    return '未到货'
            }
        }
    },
    {
        title: '商品图片',
        dataIndex: 'skuPicture',
        render: (t, r) => {
            return <img width="50" src={GLOBAL_CONFIG.OSS_PATH + r.skuPicture} />
        }
    },
    {
        title: '供应周期',
        dataIndex: 'stockingCycle',
    },

    {
        title: '加工信息',
        dataIndex: 'processInfo',
    },

    {
        title: '备注说明',
        dataIndex: 'remark',
    },

    {
        title: '图纸编号',
        dataIndex: 'drawingCode',
    },
    {
        title: '图纸中编号',
        dataIndex: 'drawingContentCode',
    },
        // {
        //     title: '包装号',
        //     dataIndex: 'packageCodes',
        // },
    ]

    public orderCode = this.props.orderCode || this.props.location.query.id;

    /**
     * * 基础构造方法
     * @param {IDComponentProps} props
     */
    constructor(props: IDComponentProps) {
        super(props);
        this.state = {
            stepsCurrent: 0,
            basicInfo: {},
            orderlisting: {},
            orderMaterial: { items: [] },
            tuzhiVisible: false,
            schemeResourceList: [],
            confirmOrderModalVisible: false,
            reviewRejectedVisible: false,
        };
        this.ycyyList = ycyyList.bind(this);
    }

    /**
     * *组织初始化
     */
    public componentDidMount() {
        if (this.orderCode) {
            this.initBaseData();
            this.saleOrderSkuTree(this.orderCode)
        }
    }

    public initBaseData() {
        const { dispatch } = this.props;
        // 获取订单详情请求    
        dispatch({
            type: 'jxcgOrderModel/saleOrderGetDetailed',
            payload: {
                orderCode: this.orderCode
            }
        }).then(response => {
            if (!response) { return }
            if (response) {
                this.setState({
                    basicInfo: response,
                }, () => {
                })
                this.saleOrderMaterial()
                this.saleOrderGetSchemeResource()
                switch (response.statusCd) {
                    case 17:
                        // 已驳回
                        break;
                    case 8:
                        // 待工艺审核
                        break;
                    case 16:
                        // 待验收
                        break;
                    case 90:
                        // 已完成
                        break;
                    case 5:
                        // 待订单审核
                        break;
                    case 15:
                        // 待发货
                        break;
                    case 13:
                        // 生产完成
                        break;
                    case 18:
                        // 已取消
                        break;
                    case 7:
                        // 待工厂接单
                        break;
                    case 9:
                        // 待整单确认
                        break;
                    case 12:
                        // 生产中
                        break;
                    case 99:
                        // 已关闭
                        break;
                    case 11:
                        // 待确认收款
                        break;
                    case 10:
                        // 待付款
                        break;
                    case 6:
                        // 待财务审核
                        break;
                    case 14:
                        // 已入库
                        break;

                }
            }
        })
    }


    /**
     * * 获取采购单树形请求
     */
    public saleOrderSkuTree = (orderCode) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'jxcgOrderModel/saleOrderSkuTree',
            payload: {
                orderCode
            }
        }).then(response => {
            if (!response) { return }
            if (response && response.children) {
                formattingDepartmentData(response.children)
                this.setState({
                    orderlisting: response
                })
            }
        })
    }

    /**
     * * 获取采购单树形请求
     */
    public saleOrderMaterial = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'jxcgOrderModel/saleOrderMaterial',
            payload: {
                orderCode: this.orderCode
            }
        }).then(response => {
            if (!response) { return }
            formattingDepartmentData(response.children)
            this.setState({
                orderMaterial: response
            })
        })
    }

    /**
     * * 获取家装订单方案附件请求
     */
    public saleOrderGetSchemeResource = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'jxcgOrderModel/saleOrderGetSchemeResource',
            payload: {
                orderCode: this.orderCode
            }
        }).then(response => {
            if (!response) { return }
            if (response) {
                this.setState({
                    schemeResourceList: response.drawingTypeList
                })
            }
        })
    }


    /**
     * * 表格操作 - 打开/关闭指定窗口
     * @param { flag: boolean } * 编辑属性窗口的开关
     * @param { record: {} } * 被操作表格项的数据
     */
    public handleModalVisible = (state, flag: boolean) => {
        this.state[state] = flag
        this.setState({})
    }


    public render() {
        const { form: { getFieldDecorator },loading } = this.props
        const { stepsCurrent, orderlisting, orderMaterial, basicInfo, schemeResourceList, confirmOrderModalVisible, reviewRejectedVisible } = this.state;
        let stepList = ["确认订单", "支付货款", "生产中", "已发货", "待验收", "已完成"]

        return (
            <PageHeaderWrapper title="订单详情">
                <Card className={styles.card} bordered={false}>
                    <div>
                        <a href="#Down" style={{ marginRight: 10 }}><Button type="primary" style={{ marginRight: 10 }} >下载图纸</Button></a>
                        <a href="#BOM" style={{ marginRight: 10 }}><Button type="primary" >查看BOM</Button></a>
                        {SaleOrderRenderButton.call(this, basicInfo, 'info')}
                    </div>
                    {/* <Steps progressDot={true} current={stepsCurrent} style={{ marginTop: 40 }}>
                        {stepList.map((item, index) => <Step title={item} key={index} />)}
                    </Steps> */}
                </Card>
                <Card className={styles.card} bordered={false}>
                    <h3 style={{ fontSize: 18 }}>基本信息</h3>
                    <DescriptionList size="large" col="3" title={`订单总金额：￥${basicInfo.amount}`} style={{ marginTop: 32 }}>
                        <Description term="自采订单单号">{basicInfo.orderCode}</Description>
                        <Description term="销售订单单号">{basicInfo.parentOrderCode}</Description>
                        <Description term="下单时间">{formatDate(basicInfo.createDate)}</Description>
                        <Description term="客户姓名">{basicInfo.customerName}</Description>
                        <Description term="订单状态">
                            {CodesUtils.getLable('DEALER_ORDER_STATUS', basicInfo.statusCd)}
                            {basicInfo.statusCd == 17 ? <a onClick={(e) => this.ycyyList(basicInfo.orderCode)} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 5 }}>查看</a> : null}
                        </Description>
                        <Description term="交货时间">{formatDate(basicInfo.expectFinishTime)}</Description>
                        <Description term="送货地址">{basicInfo.customerFullAddress}</Description>
                        <Description term="查看3D方案地址">
                            <a href={`${GLOBAL_CONFIG.DESIGN_URL}?business_scheme_id=${basicInfo.extensionValue2}`}>查看</a>
                        </Description>
                    </DescriptionList>
                </Card>
                {/* 2020-03-10  与松波沟通，松波回复暂时不做，放后面做 */}
                {/* <Card className={styles.card} bordered={false}>
                    <h3 style={{ fontSize: 18 }}>财务信息</h3>
                    <DescriptionList size="large" col="3" style={{ marginTop: 32 }}>
                        <Description term="平台服务费率">{basicInfo.orderCode}</Description>
                        <Description term="平台服务费">{basicInfo.orderCode}</Description>
                        <Description term="销售金额">{basicInfo.orderCode}</Description>
                        <Description term="款项状态">{basicInfo.homeOrderCode}</Description>
                        <Description term="待结算金额">{basicInfo.homeOrderCode}</Description>
                        <Description term="采购金额">{basicInfo.homeOrderCode}</Description>
                    </DescriptionList>
                </Card> */}
                <div id="BOM"></div>
                <Listing
                    loading={loading}
                    title="订单BOM明细"
                    data={orderlisting}
                    columus={this.columus}
                />
                <div id="Down"></div>
                <Card className={styles.card} bordered={false}>
                    <h3 style={{ fontSize: 18 }}>生产图纸</h3>
                    {schemeResourceList.map((item, index) => {
                        return (
                            <Row>
                                {item.drawingList && item.drawingList.map((drawingListItem, index) => {
                                    return (
                                        <Col span="8">
                                            <span style={{ lineHeight: '2em', marginRight: '20px' }}>{item.typeName}</span><a style={{ lineHeight: '2em' }} download="sb" href={drawingListItem.resourceValue}>下载</a>
                                        </Col>
                                    )
                                })}
                            </Row>
                        )
                    })}
                </Card>
                <Modal
                    title="查看图纸"
                    visible={this.state.tuzhiVisible}
                    width="960px"
                    footer={[]}
                    onCancel={() => {
                        this.setState({
                            tuzhiVisible: false
                        })
                    }}
                >
                    <img src={require('@/assets/pic.jpg')} style={{ width: '100%' }} alt="" />
                </Modal>
            </PageHeaderWrapper>
        );
    }
}
/**
 * 默认将查询表单暴露
 */
export default Form.create()(GysSaleOrderDetail);
