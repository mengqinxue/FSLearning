// initial state
const state = {
  user: {
    sexEnum: [{ key: 1, value: 'Male' }, { key: 2, value: 'Female' }],
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
    message: {
      readTag: [{ key: true, value: 'success' }, { key: false, value: 'warning' }],
      readText: [{ key: true, value: '已读' }, { key: false, value: '未读' }]
    }
  },
  exam: {
    examPaper: {
      paperTypeEnum: [{ key: 1, value: 'Practice' }, { key: 4, value: 'Mock Test' }]
    },
    examPaperAnswer: {
      statusEnum: [{ key: 1, value: '待批改' }, { key: 2, value: 'Completed' }],
      statusTag: [{ key: 1, value: 'warning' }, { key: 2, value: 'success' }]
    },
    question: {
      typeEnum: [{ key: 1, value: 'Single Choice' }, { key: 2, value: 'Multiple Choice' }, { key: 3, value: 'T/F Question' }, { key: 4, value: 'Completion Question' }, { key: 5, value: '简答题' }],
      answer: {
        doRightTag: [{ key: true, value: 'success' }, { key: false, value: 'danger' }, { key: null, value: 'warning' }],
        doRightEnum: [{ key: true, value: 'Correct' }, { key: false, value: 'Wrong' }, { key: null, value: '待批改' }],
        doCompletedTag: [{ key: false, value: 'info' }, { key: true, value: 'success' }]
      }
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
