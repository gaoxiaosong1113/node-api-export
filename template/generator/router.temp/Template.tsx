// 引入 react 依赖
import React, { Fragment, Component, PureComponent } from 'react';

// 引入 antd-pro 依赖
import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';

// 引入第三方依赖
import moment from 'moment';

// 引入 antd 依赖
import { Form, Card, Row, Col, Modal, Button, Radio, Checkbox, Input, Popconfirm, Badge, Icon, Select, DatePicker, List, Table, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const confirm = Modal.confirm;

// 引入 antd-pro 组件
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Authorized from '@/components/Authorized/Authorized';
import StandardTable from '@/components/StandardTable';
import Ellipsis from '@/components/Ellipsis';
import AvatarList from '@/components/AvatarList';
import Result from '@/components/Result';

// 引入自定义组件
import { RegionCascader, FileUpload, TableList, EarlyWarning } from '@/utils/SkComponents';
const { FormTable } = TableList

// 引入项目内工具包
import { formatDate, formatQueryDate, formatQueryCustomer } from '@/utils/utils'
import { ycyyList } from '../utils/utils'

// 引入省市区请求模块
import { RegionCascaderHandle } from '@/pages/common/RegionCascaderHandle';

// 引入模块内组件
import { OrderDetail, HandleOrderList } from '../components'

// 引入公共工具包
import { CodeElementHandle, FormLayoutDefine, OssPathUtils, PagesUtils, CodesUtils } from "@/utils/SkUtils";
const formLayout = FormLayoutDefine.formLayout;

// 引入样式包
import styles from '@/pages/common.less'
import styleCard from './Projects.less';

import OrderRenderButton from './operation'
import requestModels from './requestModels'

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
    // TODO: 临时数据变量
    data: {},
    // 查询区域 - 是否展开
    expandForm: boolean,
    confirmOrderModalVisible,
    selectedRows: [],
}

/**
 *
 *
 * @class SaleOrder 供应商销售订单  
 * @extends {React.Component<IDComponentProps, IDComponentState>}
 */

@connect(({ templateModel, loading }) => ({
    templateModel,
    loading: loading.models.templateModel,
}))


class Template extends React.Component<IDComponentProps, IDComponentState> {

    public columns = [
        {
            title: '采购单号',
            dataIndex: 'orderCode',
        },
        {
            title: '销售单号',
            dataIndex: 'parentOrderCode',
        },
        {
            title: '客户姓名',
            dataIndex: 'customerName',
        },
        {
            title: '客户手机号',
            dataIndex: 'customerPhone',
        },
        {
            title: '交付时间',
            dataIndex: 'expectFinishTime',
            render: (text, record) => formatDate(text)
        },
        {
            title: '经销商',
            dataIndex: 'ownerOrgName',
        },

        {
            title: '送货地址',
            dataIndex: 'customerFullAddress',
        },
        {
            title: '订单状态',
            dataIndex: 'statusCd',
            render: (t, r) => CodesUtils.getLable('BRANDER_ORDER_STATUS', t)
        },
        {
            title: '预警',
            dataIndex: 'earlyWarningStatusCd',
            render: (text, record) => <EarlyWarning model="ppzgOrderModel/saleOrderGetReason" status={record.earlyWarningStatusCd} orderCode={record.orderCode} code="CG_ORDER_YJ_STATUS" />
        },
        {
            title: '金额',
            dataIndex: 'amount',
        },
        {
            title: '下单时间',
            dataIndex: 'createDate',
            render: (text, record) => formatDate(text)
        },
        {
            title: '操作人',
            dataIndex: 'updateUserName',
        },
        {
            title: '操作',
            fixed: 'right',
            dataIndex: 'handle',
            width: '130px',
            render: (text, record) => OrderRenderButton.call(this, record, 'table')
        },
    ];

    /**
     * * 基础构造方法
     * @param {IDComponentProps} props
     */
    constructor(props: IDComponentProps) {
        super(props);
        this.state = {
            storeList: []
        };
    }

    child = null

    /**
     * *组织初始化
     */
    public componentDidMount() {
        const { dispatch } = this.props
        requestModels.saleOrderStoreList.call(this)
    }

    public changeBrander = (e) => {

    }


    public onRef = (ref) => {
        this.child = ref
    }


    /**
     * * 查询模块 - 重置查询模块内容
     */
    public handleFormReset = () => {
        const { form } = this.props;
        form.resetFields();
        this.child.handleFormReset()
    };


    /**
     * * 查询模块 - 表单-查询
     */
    public handleSearch = (e) => {
        e.preventDefault();
        const { form: { getFieldValue } } = this.props;
        // 合并分页信息及查询条件
        // 
        const customer = getFieldValue('customer_Search') instanceof Array ? getFieldValue('customer_Search') : [undefined, undefined, undefined]

        this.child.handleSearch({
            // 下单时间开始 string($date-time)
            createDateCge: formatQueryDate(getFieldValue('createDate_Search'))[0],
            // 下单时间结束 string($date-time)
            createDateCle: formatQueryDate(getFieldValue('createDate_Search'))[1],
            // 送货地址-市编码 string
            customerCityCodeCeq: formatQueryCustomer(getFieldValue('customer_Search'))[1],
            // 送货地址-区编码 string
            customerDistrictCodeCeq: formatQueryCustomer(getFieldValue('customer_Search'))[2],
            // 客户姓名 string
            customerNameClike: getFieldValue('customerNameClike_Search'),
            // 送货地址-省编码 string
            customerProvinceCodeCeq: formatQueryCustomer(getFieldValue('customer_Search'))[0],
            // 交货时间开始 string($date-time)
            expectFinishTimeCge: formatQueryDate(getFieldValue('expectFinishTime_Search'))[0],
            // 交货时间结束 string($date-time)
            expectFinishTimeCle: formatQueryDate(getFieldValue('expectFinishTime_Search'))[1],
            // 家装订单号 string
            homeOrderCodeCeq: getFieldValue('homeOrderCodeCeq_Search'),
            // 查询单号 string
            orderCodeCeq: getFieldValue('orderCodeCeq_Search'),
            // 拥有者编码（经销采购单：门店编码 品牌采购单：经销商编码 供应链供应单：经销商编码） string
            ownerIdCeq: null,
            // 经销商组织编码（品牌商供应订单：经销商编码 供应链供应单：品牌商编码） string
            ownerOrgCodeCeq: getFieldValue('ownerOrgCodeCeq_Search'),
            // 父订单编码 string
            parentOrderCodeCeq: getFieldValue('parentOrderCodeCeq_Search'),
            // 采购单状态 11:待确认 12:待付款 13:待发货 14:待验收 90:已完成 99:已关闭  integer($int32)
            statusCdCeq: getFieldValue('statusCdCeq_Search'),
            // 承接者组织编码（供应链采购单：供应商编码） string
            takerOrgCodeCeq: null,
            // 订单类型集合 integer($int32)
            //  typeCds: [{
            //      typeCd: 1,
            //  }]
        })
    };

    public render() {
        const { form: { getFieldDecorator, resetFields }, location, loading, dispatch } = this.props;
        const { storeList, branderList } = this.state;
        console.log(storeList)
        return (
            <FormTable
                title="品牌自购单"
                table={{
                    models: 'ppzgOrderModel/saleOrderPage',
                    loading: loading,
                    columns: this.columns,
                    rowKey: 'orderCode',
                    scroll: true
                }}
                query={{ origin: 2 }}
                onRef={this.onRef}
                location={location}
                loading={loading}
                searchElement={
                    <Form onSubmit={this.handleSearch}  >
                        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="品牌采购单号">
                                    {getFieldDecorator('orderCodeCeq_Search')(<Input placeholder="请输入" />)}
                                </FormItem>
                            </Col>
                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="订单状态">
                                    {getFieldDecorator('statusCdCeq_Search')(
                                        <Select placeholder="请选择订单状态">
                                            <Option value={''}>全部</Option>
                                            {CodeElementHandle.getSelectItem('BRANDER_ORDER_STATUS')}
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="经销商">
                                    {getFieldDecorator('ownerOrgCodeCeq_Search')(
                                        <Select placeholder="请选择经销商">
                                            <Option value={''}>全部</Option>
                                            {storeList.map((item, index) => <Option key={index} value={item.code}>{item.fullName}</Option>)}
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="销售单号">
                                    {getFieldDecorator('parentOrderCodeCeq_Search')(<Input placeholder="请输入销售单号" />)}
                                </FormItem>
                            </Col>

                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="客户姓名">
                                    {getFieldDecorator('customerNameClike_Search')(<Input placeholder="请输入客户姓名" />)}
                                </FormItem>
                            </Col>
                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="下单时间">
                                    {getFieldDecorator('createDate_Search')(<RangePicker />)}
                                </FormItem>
                            </Col>
                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="送货地址">
                                    {getFieldDecorator('customer_Search')(<RegionCascader dispatch={dispatch} {...RegionCascaderHandle.getRegionCascader()} />)}
                                </FormItem>
                            </Col>
                            <Col md={6} sm={12}>
                                <FormItem labelCol={{ span: formLayout.labelCol.span }} label="交货时间">
                                    {getFieldDecorator('expectFinishTime_Search')(<RangePicker />)}
                                </FormItem>
                            </Col>
                            <Col md={6} sm={12}>
                                <span className={styles.submitButtons}>
                                    <Button type="primary" htmlType="submit">查询</Button>
                                    <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                                </span>
                            </Col>
                        </Row>
                    </Form>
                }
                buttonElement={[
                    // <Button icon="plus" onClick={() => {
                    //     this.setState({
                    //         editData: {}
                    //     }, () => {
                    //         this.handleModalVisible('addModalVisible', true)
                    //     })
                    // }} type="primary">新增变更单</Button>
                ]}
            >

            </FormTable>
        );
    }
}


/**
 * 默认将查询表单暴露
 */
export default Form.create()(Template);

