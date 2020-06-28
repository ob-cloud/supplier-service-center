import { getAction, postAction, deleteAction } from '@/utils/ajax'

const _PREFIX = '/ssc'

////// 机构管理

// 获取机构部门列表
const queryDepartTreeList = (params) => getAction(_PREFIX + '/depart/getDepartList', params)

// 获取下拉树
const queryIdTree = (params) => getAction(_PREFIX + '/depart/queryIdTree', params)

// 关键字查询部门
const searchByKeywords = (id) => getAction(_PREFIX + '/mp/getConsumerDetail', {id})

// 添加
const addDepart = (params) => postAction(_PREFIX + '', params)

// 编辑
const editDepart = (params) => postAction(_PREFIX + '', params)

// 删除部门
const deleteByDepartId = (params) => deleteAction(_PREFIX + '/mp/editConsumerInfo', params)

// 权限树
const queryTreeListForRole = (params) => getAction(_PREFIX + '/depart/role/queryTreeList', params)

const queryDepartPermission = (params) => getAction(_PREFIX + '/depart/queryDepartPermission', params)

const saveDepartPermission = (params) => getAction(_PREFIX + '', params)


export {
  queryDepartTreeList,
  queryIdTree,
  searchByKeywords,
  addDepart,
  editDepart,
  deleteByDepartId,
  queryTreeListForRole,
  queryDepartPermission,
  saveDepartPermission
}
