// initial state
const state = {
  user: {
    sexEnum: [{ key: 1, value: '男' }, { key: 2, value: '女' }],
    statusEnum: [{ key: 1, value: '启用' }, { key: 2, value: '禁用' }],
    levelEnum: [
       { key: 1,  value: 'OCExam' }
      // ,{ key: 2,  value: 'Preschool' }
      // ,{ key: 3,  value: 'Foundation' }
      ,{ key: 4,  value: 'Year 1' }
      ,{ key: 5,  value: 'Year 2' }
      ,{ key: 6,  value: 'Year 3' }
      ,{ key: 7,  value: 'Year 4' }
      ,{ key: 8,  value: 'Year 5' }
      ,{ key: 9,  value: 'Year 6' }
      // ,{ key: 10, value: 'Year 7' }
      // ,{ key: 11, value: 'Year 8' }
      // ,{ key: 12, value: 'Year 9' }
      // ,{ key: 13, value: 'Year 10' }
      // ,{ key: 14, value: 'Year 11' }
      // ,{ key: 15, value: 'Year 12' }
      ,{ key: 16, value: 'Music Theory' }
      ],
    roleEnum: [{ key: 1, value: '学生' }, { key: 2, value: '教师' }, { key: 3, value: '管理员' }],
    statusTag: [{ key: 1, value: 'success' }, { key: 2, value: 'danger' }],
    statusBtn: [{ key: 1, value: '禁用' }, { key: 2, value: '启用' }]
  },
  exam: {
    examPaper: {
      paperTypeEnum: [{ key: 1, value: '固定试卷' }, { key: 4, value: '时段试卷' }, { key: 6, value: '任务试卷' }]
    },
    question: {
      typeEnum: [{ key: 1, value: '单选题' }, { key: 2, value: '多选题' }, { key: 3, value: '判断题' }, { key: 4, value: '填空题' }, { key: 5, value: '简答题' }],
      editUrlEnum: [{ key: 1, value: '/exam/question/edit/singleChoice', name: '单选题' },
        { key: 2, value: '/exam/question/edit/multipleChoice', name: '多选题' },
        { key: 3, value: '/exam/question/edit/trueFalse', name: '判断题' },
        { key: 4, value: '/exam/question/edit/gapFilling', name: '填空题' },
        { key: 5, value: '/exam/question/edit/shortAnswer', name: '简答题' }]
    }
  }
}

// getters
const getters = {
  enumFormat: (state) => (arrary, key) => {
    return format(arrary, key)
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

const format = function (array, key) {
  for (let item of array) {
    if (item.key === key) {
      return item.value
    }
  }
  return null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
