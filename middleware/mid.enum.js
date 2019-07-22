module.exports = () => {
  const enumerate = {
    vocation: [
      { key: 0, value: '计算机/互联网/通信/电子' },
      { key: 1, value: '会计/金融/银行/保险' },
      { key: 2, value: '贸易/消费/制造/营运' },
      { key: 3, value: '制药/医疗' },
      { key: 4, value: '广告/媒体' },
      { key: 5, value: '房地产/建筑' },
      { key: 6, value: '专业服务/教育/培训' },
      { key: 7, value: '服务业' },
      { key: 8, value: '物流/运输' },
      { key: 9, value: '能源/原材料' },
      { key: 10, value: '其他' }
    ],
    orderStatus: [
      { key: 1, value: '未接受' },
      { key: 2, value: '进行中' },
      { key: 3, value: '用户已确认' },
      { key: 4, value: '发布者已确认' },
      { key: 5, value: '已完成' },
      { key: 6, value: '已拒绝' },
      { key: 7, value: '已取消' }
    ]
  }

  return async (ctx, next) => {
    ctx.enum = enumerate
    await next()
  }
}
