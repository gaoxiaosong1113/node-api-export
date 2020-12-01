// 引入 react 依赖
import React, { Fragment } from 'react';

// 引入 antd-pro 依赖
import Link from 'umi/link';

// 引入 antd 依赖
import { Form, Card, Row, Col, Modal, Button, Radio, Checkbox, Input, Popconfirm, Badge, Icon, Select, DatePicker, List, Table, message, Empty } from 'antd';

// 引入 antd-pro 组件
import Authorized from '@/components/Authorized/Authorized';

// 载入权限
import { AuthCodeConstants } from '@/common/constants/AuthCodeConstants';

// 引入模块内组件
// import { OrderDetail } from '../components'

// 引入自定义组件
import { TableOperationElement } from '@/utils/SkComponents';

// 引入样式包
import styles from '@/pages/common.less'

// 引入项目内工具包
import { PagesUtils } from "@/utils/SkUtils";

import requestModels from './request'

// AuthCodeConstants.data.**  需要根据具体页面填写,根据[菜单管理.xlsx]配置
const jxcgdPermissions = AuthCodeConstants.data.decoration_jxcgOrder;

const { confirm } = Modal
const { info } = Modal

const orderDetail = (record, type) => (
  // <Authorized authority={jxcgdPermissions.functionCodes.detail.code}>
    <TableOperationElement type={type} infoHide><Link to={`/decoration/jxcgOrder/detail?id=${record.orderCode}`}>详情</Link></TableOperationElement>
  {/* </Authorized> */}
)


export default function OrderRenderButton(record, type) {
  switch (record.statusCd) {
    case 12:
      // 待确认
      return (
        <Fragment>
          {orderDetail(record, type)}
        </Fragment>
      )
    case 13:
      // 待付款
      return (
        <Fragment>
          {/* <Authorized authority={[jxcgdPermissions.functionCodes.orderPay.code]}> */}
            <TableOperationElement
              type={type}
              onClick={() => {
                confirm({
                  title: '确认支付',
                  content: '是否确认支付？',
                  okText: '确认',
                  cancelText: '取消',
                  onOk: () => {
                    requestModels.saleOrderPay.call(this, record.orderCode)
                  },
                });
              }}
            >确认支付
            </TableOperationElement>
          {/* </Authorized> */}
          {orderDetail(record, type)}
        </Fragment>
      )
    case 14:
      // 待确认收款
      return (
        <Fragment>
          {orderDetail(record, type)}
        </Fragment>
      )
    case 15:
      // 待发货
      return (
        <Fragment>
          {orderDetail(record, type)}
        </Fragment>
      )
    case 16:
      // 待验收
      return (
        <Fragment>
          {/* ! 确认完成功能取消掉 ,原先用来解决订单没有逆向流程的问题 */}
          {/* <TableOperationElement type={type}><a onClick={() => dealerPurchaseOrderDone.call(this, record.orderCode, null, () => this.child.handleTableData(PagesUtils.getFirstPage()))}>确认完成</a></TableOperationElement> */}
          {orderDetail(record, type)}
        </Fragment>
      )
    case 90:
      // 已完成
      return (
        <Fragment>
          {orderDetail(record, type)}
        </Fragment>
      )
    case 99:
      // 已关闭
      return (
        <Fragment>
          {orderDetail(record, type)}
        </Fragment>
      )
    default:
      return (
        <Fragment>
          {orderDetail(record, type)}
        </Fragment>
      )
  }
}
