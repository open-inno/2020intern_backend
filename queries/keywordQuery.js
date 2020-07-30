// total keyword
exports.gettotalkeyword = `select * from get_total_keyword where utk_USN = ?;`;

exports.updateUser = `UPDATE User SET
        email = ?, password = ?, userName = ?, image_url = ?, description = ? WHERE USN = ?;`;


// RECOMMEND KEYWORD
exports.getRecommendKeyword = `SELECT * FROM get_recommend_keyword WHERE rk_USN = ?;`


// ALL KEYWORD
exports.getKeyword = `SELECT * FROM User_total_keyword A
        LEFT OUTER JOIN Recommend_keyword B ON A.utk_USN = B.rk_USN WHERE B.rk_USN = ?;`
