import { DeliverOrderApi, DeliveryPlanApi, ServiceOrderApi, MemberApi, DealerPurchaseOrderApi } from "@/services";
import { Request, PagesUtils } from '@/utils/SkUtils';

export default {
  namespace: 'templateModel',

  state: {

  },

  effects: {
    // * 以下为示例代码,生成完以后仅供参考,需要删除
    // POST /deliver/order/page
    // 获取分页请求
    *getDeliverOrderPage({ payload, callback }, { call, put }) {
      const response = yield Request.request(DeliverOrderApi["POST/deliver/order/page"], payload, 'page')
      yield PagesUtils.pushQueryToPath(payload, put)
      return Request.responsePromise(response)

    },
    // PUT /deliver/order/returnToWork
    // 复工请求
    *returnToWork({ payload, callback }, { call, put }) {
      return Request.responsePromise(yield Request.request(DeliverOrderApi["PUT/deliver/order/returnToWork"], payload));

    },
  },

  reducer: {
  },
};
