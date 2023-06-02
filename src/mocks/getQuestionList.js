const mock = require("mockjs");
const Random = mock.Random;

const getQuestionList = (len = 10, isDeleted = false) => {
  const questionList = [];
  for (let i = 0; i < len; i++) {
    questionList.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      isStar: Random.boolean(),
      answerCount: Random.natural(1, 1000),
      createAt: Random.time(),
      isDeleted,
    });
  }

  return questionList;
};

module.exports = getQuestionList;
