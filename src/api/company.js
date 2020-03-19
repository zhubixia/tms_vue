import request from '@/utils/request'

// 获取渠道商列表
export function getCompanyList(params) {
  return request({
    url: '/company',
    method: 'get',
    params
  })
}

// 新增渠道商
export function addCompany(data) {
  return request({
    url: '/company',
    method: 'post',
    data
  })
}

// 渠道商详情
export function getCompanyDetails(companyId) {
  return request({
    url: `/company/${companyId}`,
    method: 'get',
  })
}

// 编辑渠道商
export function updateCompany(companyId, data) {
  return request({
    url: `/company/${companyId}`,
    method: 'put',
    data
  })
}

// 冻结渠道商
export function freezeCompany(companyId) {
  return request({
    url: `/company/${companyId}/disable`,
    method: 'put',
  })
}

// 冻结渠道商
export function activateCompany(companyId) {
  return request({
    url: `/company/${companyId}/enable`,
    method: 'put',
  })
}

// 查看渠道商层级
export function viewLevel(companyId) {
  return request({
    url: `/company/${companyId}/viewLevel`,
    method: 'get',
  })
}
