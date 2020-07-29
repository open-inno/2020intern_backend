const mysql_abc = require('../config/db_connection')();
const connection = mysql_abc.init();
mysql_abc.connect(connection);

module.exports = {
    get: function(usn, callback) {
        let query = `SELECT * FROM USER WHERE usn = ?`;
        let params = [];
        if(usn != null) {
            params = [usn];
        } 
        connection.query(query, params, callback)
    }
}