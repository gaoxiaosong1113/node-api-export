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

// 引入项目内工具包
import { formatDate } from '@/utils/utils'

// 引入公共工具包
import { FormLayoutDefine, OssPathUtils, PagesUtils, CodesUtils } from "@/utils/SkUtils";

import { SaleOrderRenderButton } from '../utils/utils'

const {confirm} = Modal;

export default {

    /**
     * * 审核通过订单请求
     */
    saleOrderApproval(orderCode?) {
        const { dispatch } = this.props;
        dispatch({
            type: 'jxcgOrderModel/saleOrderApproval',
            payload: {
                order: [{ orderCode }]
            }
        }).then(res => {
            if (!res) {
                return
            }
            // 刷新页面
            this.child.handleTableRefresh()
            message.success('操作成功')
        });
    },
}
