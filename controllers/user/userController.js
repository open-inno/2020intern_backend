const userDAO = require('../../models/user/userDAO');
const paramsCheck = require('../../lib/paramsCheck');

const getUserController = async (req, res, next) => {
  let usn = parseInt(req.params.usn);

  if(paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  } 
  else if(paramsCheck.omissionCheck([usn])){
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let userBindValue = [usn];
    try {
      let users = await userDAO.getUserDAO(userBindValue);
      return res.status(200).send(users[0][0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

const updateUserController = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  let email = req.body.email;
  let name = req.body.name;
  let image_url = req.body.image_url;
  let description = req.body.description;
  let company = req.body.company;

  if(paramsCheck.numberCheck([usn]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 정수가 아닌 파라미터` })
  } 
  else if(paramsCheck.omissionCheck([usn, email, name, image_url, description]) === false) {
    return res.status(500).json({ statusCode: 500, message: `Cotroller: 파라미터 누락` })
  }
  else {
    let userBindValue = [name, email, image_url, description, company, usn];
    try {
      let userResult = await userDAO.updateUserDAO(userBindValue);
      return res.status(201).send(userResult);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

// exports.deleteUser = async (req, res, next) => {
//     let { boardId, commentId } = req.params
//     try {
//         let del = await BoardService.deleteComment(boardId, commentId)
//         return res.json(del)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }

module.exports = {
  getUserController,
  updateUserController,
}
