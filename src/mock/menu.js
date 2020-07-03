export default [
  {
    "redirect": "/organic/list",
    "path": "/organic",
    "component": "Layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/organic/list",
        "component": "organic/OrganicList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "机构组织"
        },
        "name": "organic-list",
        "id": "8r915b2769fc80648e92d04e84ca059d"
      },
      {
        "path": "/organic/depart",
        "component": "organic/OrganicDepart",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "机构部门",
        },
        "name": "organic-depart",
        "id": "33915b2769fc80648e92d04e84ca059d"
      }
    ],
    "meta": {
      "keepAlive": false,
      "icon": "setting",
      "title": "机构管理"
    },
    "name": "organic",
    "id": "87d6e2e4e2934f2c9385a623fd98c6f3"
  },
  {
    "redirect": null,
    "path": "/service",
    "component": "Layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/service/list",
        "component": "service/ServiceList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "服务内容"
        },
        "name": "service-list",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
      {
        "path": "/service/order",
        "component": "service/ServiceOrder",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "服务订单"
        },
        "name": "service-order",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
      {
        "path": "/service/order/detail",
        "component": "service/modules/ServiceOrderDetailModal",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "服务订单详情"
        },
        "hidden": true,
        "name": "service-order-detail",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      }
    ],
    "meta": {
      "keepAlive": false,
      "icon": "setting",
      "title": "服务管理"
    },
    "name": "service",
    "id": "o7d6e2e4e2934f2c9385a623fd98c6f3"
  },
  {
    "redirect": null,
    "path": "/finace",
    "component": "Layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/finace/revenue",
        "component": "finance/FinanceRevenue",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "营收总额"
        },
        "name": "finace-revenue",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
      {
        "path": "/finance/record",
        "component": "finance/FinanceRecord",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "营收记录"
        },
        "name": "finance-record",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
      {
        "path": "/finance/arrears",
        "component": "finance/FinanceArrears",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "欠费记录"
        },
        "name": "finance-arrears",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      }
    ],
    "meta": {
      "keepAlive": false,
      "icon": "setting",
      "title": "财务管理"
    },
    "name": "finace",
    "id": "o7d6e2e4e2934f2c9385a623fd98c6f3"
  },
  {
    "redirect": null,
    "path": "/report",
    "component": "Layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/report/revenue",
        "component": "report/ReportRevenue",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "营收报表"
        },
        "hidden": true,
        "name": "report-revenue",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
      {
        "path": "/report/fiance",
        "component": "report/ReportFinance",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "财务明细"
        },
        "name": "report-fiance",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
      {
        "path": "/report/fiancesum",
        "component": "report/ReportFinanceSummary",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "财务汇总"
        },
        "hidden": true,
        "name": "report-fiancesum",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      }
    ],
    "meta": {
      "keepAlive": false,
      "icon": "setting",
      "title": "报表管理"
    },
    "name": "report",
    "id": "o7d6e2e4e2934f2c9385a623fd98c6f3"
  },
  {
    "redirect": null,
    "path": "/device",
    "component": "Layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/device/list",
        "component": "device/DeviceList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "设备列表"
        },
        "name": "device-list",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
    ],
    "meta": {
      "keepAlive": false,
      "icon": "setting",
      "title": "设备管理"
    },
    "name": "device",
    "id": "o7d6e2e4e2934f2c9385a623fd98c6f3"
  },
  {
    "redirect": null,
    "path": "/order",
    "component": "Layouts/RouteView",
    "route": "1",
    "children": [
      {
        "path": "/order/list",
        "component": "order/OrderList",
        "route": "1",
        "meta": {
          "keepAlive": false,
          "title": "工单列表"
        },
        "name": "order-list",
        "id": "4r915b2769fc80648e92d04e84ca059d"
      },
    ],
    "meta": {
      "keepAlive": false,
      "icon": "setting",
      "title": "工单管理"
    },
    "name": "order",
    "id": "o7d6e2e4e2934f2c9385a623fd98c6f3"
  },
]
