// 引入 react 依赖
import React, { Fragment, Component, PureComponent } from 'react';

// 引入 antd-pro 依赖
import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';

// 引入第三方依赖
import moment from 'moment';

// 引入 antd 依赖
import { Form, Card, Row, Col, Modal, Button, Radio, Checkbox, Input, Popconfirm, Badge, Icon, Select, DatePicker, List, Table, message, } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const confirm = Modal.confirm;
const RadioGroup = Radio.Group;


// 引入 antd-pro 组件
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Authorized from '@/components/Authorized/Authorized';
import StandardTable from '@/components/StandardTable';
import Ellipsis from '@/components/Ellipsis';
import AvatarList from '@/components/AvatarList';
import Result from '@/components/Result';

// 引入自定义组件
import { RegionCascader, FileUpload, TableList, EarlyWarning, SkFileUpload } from '@/utils/SkComponents';
const { FormTable } = TableList

// 引入项目内工具包
import { formatDate } from '@/utils/utils'

// 引入省市区请求模块
import { RegionCascaderHandle } from '@/pages/common/RegionCascaderHandle';

// 引入模块内组件
import { OrderDetail, HandleOrderList } from '../../components'

// 引入公共工具包
import { CodeElementHandle, FormLayoutDefine, OssPathUtils, PagesUtils, CodesUtils, EnumElementHandle, ValidatorUtils, EnumsUtils } from "@/utils/SkUtils";
const formLayout = FormLayoutDefine.formLayout;

// 引入样式包
import styles from '@/pages/common.less'
import styleCard from './Projects.less';


// 引入枚举
import { MemberStatusEnum } from '@/common/enums/MemberStatusEnum';

import OrderRenderButton from '../operation'
import requestModels from '../request'

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
 * @class   
 * @extends {React.Component<IDComponentProps, IDComponentState>}
 */

@connect(({ templateModel, loading }) => ({
    templateModel,
    loading: loading.models.templateModel,
}))


class CreateTemplate extends React.Component<IDComponentProps, IDComponentState> {

    /**
     * * 基础构造方法
     * @param {IDComponentProps} props
     */
    constructor(props: IDComponentProps) {
        super(props);
        this.state = {
            editData: {},
            visible: false,
            selectable: [],
        };
    }


    /**
     * *组织初始化
     */
    public componentDidMount() {
        const { dispatch, onRef } = this.props
        onRef ? onRef(this) : null
        // requestModels.getSelectableScheme.call(this)
    }

    public changeBrander = (e) => {

    }

    /**
    * * 表格操作 - 打开/关闭指定窗口
    * @param {flag: boolean } * 编辑属性窗口的开关
    * @param {record: {} } * 被操作表格项的数据
    */
    public handleModalVisible = (flag: boolean) => {
        this.setState({ visible: flag })
    }


    public resetFieldsForm() {
        const { form: { resetFields } } = this.props
        resetFields()
    }

    // 方案介绍弹窗
    public render() {
        const { form: { getFieldDecorator, getFieldValue, resetFields, setFieldsValue }, loading, } = this.props;
        const { selectable, editData, visible } = this.state;
        const reg = /([^\\/]+)\.([^\\/]+)/i;
        return (
            <Modal
                title={editData.id ? "编辑百科" : "添加百科"}
                visible={visible}
                // width={960}
                confirmLoading={loading}
                onOk={() => {
                    if (editData.id) {
                        requestModels.putArticle.call(this)
                    } else {
                        requestModels.add.call(this)
                    }
                }}
                onCancel={() => {
                    this.resetFieldsForm()
                    this.handleModalVisible(false)
                }}
            >
                <Form layout="horizontal">
                    <FormItem label="标题">
                        {getFieldDecorator('title', {
                            initialValue: editData.title,
                            rules: ValidatorUtils.required({ required: true, message: '请输入标题' })
                        })(
                            <Input placeholder="请输入" />
                        )}
                    </FormItem>
                    <FormItem label="摘要">
                        {getFieldDecorator('description', {
                            initialValue: editData.description,
                            rules: ValidatorUtils.required({ required: true, message: '请输入摘要' })
                        })(
                            <Input placeholder="请输入" />
                        )}
                    </FormItem>
                    <FormItem label="内容">
                        {getFieldDecorator('content', {
                            initialValue: editData.content,
                            rules: ValidatorUtils.required({ required: true, message: '请输入内容' })
                        })(
                            <TextArea placeholder="请输入" autosize={{ minRows: 2, maxRows: 6 }} />
                        )}
                    </FormItem>
                    <FormItem label="标签">
                        {getFieldDecorator('hotLabel', {
                            initialValue: editData.hotLabel,
                            rules: ValidatorUtils.required({ required: true, message: '请输入标签' })
                        })(
                            <Input placeholder="请输入" />
                        )}
                    </FormItem>
                    <FormItem label="来源">
                        {getFieldDecorator('origin', {
                            initialValue: editData.origin,
                            rules: ValidatorUtils.required({ required: true, message: '请输入来源' })
                        })(
                            <Input placeholder="请输入" />
                        )}
                    </FormItem>

                    <FormItem label="类型">
                        {getFieldDecorator('typeCd', {
                            initialValue: editData.typeCd,
                            rules: ValidatorUtils.required({ required: true, message: '请选择类型' })
                        })(
                            <Select placeholder="请选择类型">
                                <Option value={1}>百科</Option>
                                <Option value={2}>动态</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem label="封面图">
                        {getFieldDecorator(`imageUrl`, {
                            initialValue: editData.imageUrl ? [{
                                uid: editData.imageUrl,
                                name: editData.imageUrl ? editData.imageUrl.match(reg)[0] : '',
                                url: editData.imageUrl,
                            }] : [],
                            rules: ValidatorUtils.required({ required: true, message: '请选择封面图' })
                        })(
                            <SkFileUpload listType="picture" />
                        )}
                    </FormItem>

                    <FormItem label="是否推荐">
                        {getFieldDecorator('ifTop', {
                            initialValue: editData.ifTop,
                            rules: ValidatorUtils.required({ required: true, message: '请选择是否推荐' })
                        })(
                            <RadioGroup >
                                <Radio value={0}>否</Radio>
                                <Radio value={1}>是</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>


                </Form>
            </Modal>
        )
    }
}


/**
 * 默认将查询表单暴露
 */
export default Form.create()(CreateTemplate);

