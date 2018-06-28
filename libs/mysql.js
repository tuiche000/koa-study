const mysql = require('koa-mysql')

let db = mysql.createPool({
  host: 'localhost',
  port: '3309',
  user: 'root',
  password: '123456',
  database: 'an_ju_ke'
})

let _q = db.query.bind(db);
db.query = sql => {
  return new Promise((resolve, reject) => {
    let fn = _sql(sql);

    fn((err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = db;