const express = require("express")
const mysql = require("mysql")
const sequelizePackage = require("sequelize")
const {DataTypes, Model, Sequelize} = sequelizePackage

const sqlize = new Sequelize('todolist', 'root', 'sam998525', {host:'104.199.210.137',dialect: 'mysql'})

try{
    sqlize.authenticate()
    console.log('Connect to mysql server sccueefully')
}catch(err){
    console.log('Cannot connect to mysql server')
}

class Todo extends Model{}

Todo.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        title: {type: DataTypes.STRING}
    }, 
    {sequelize: sqlize, createdAt: false, updatedAt: false, modelName: 'Todo', tableName: 'Todo'}
)

Todo.sync()

// const pool = mysql.createPool({
//     host: 'localhost',x
//     user: 'root',
//     password: 'samraber998525',
//     database: 'TodoList'
// })


const app = express()
app.use(express.json())

const port = 3000

const results = []
// function getConnection() {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, conn) => {
//             if(err) reject(err)
//             else resolve(conn)
//         })
//     })
// }

// function exectueQuery(conn, query, data){
//     return new Promise((resolve, reject) => {
//         conn.query(query, data, (err, results, fields) => {
//             if(err) reject(err)
//             else resolve({results, fields})
//         })
//     })
// }

app.post('/', async (req, res) => {
    // const conn = await getConnection()
    // const {results, fields} = await exectueQuery
    // (conn, 'INSERT INTO Todo VALUES (?, ?)', 
    // [req.body.id, req.body.title])

    const newTodo = await Todo.create({id: req.body.id, title: req.body.title})

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(newTodo.toJSON()))
    res.end()
})

app.get('/', async (req, res) => {
    // const conn = await getConnection()
    // const {results, fields} = await exectueQuery
    // (conn, 'SELECT * FROM Todo')

    const allTodo = await Todo.findAll()

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(allTodo))
    res.end()
})

app.get('/:id', async (req, res) => {
    // const conn = await getConnection()
    // let {results, fields} = await exectueQuery
    // (conn, 'SELECT * FROM Todo WHERE id=?', 
    // [req.params.id])

    const thisTodo = await Todo.findByPk(req.params.id)

    // if(results.length > 0) results = results[0]
    // else {
    //     res.status(404)
    //     res.write('Not found')
    //     res.end()
    //     return
    // }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(thisTodo))
    res.end()
})

app.put('/:id', async (req, res) => {
    // const conn = await getConnection()
    // const {results, fields} = await exectueQuery
    // (conn, 'UPDATE Todo SET title = ? WHERE id = ?', 
    // [req.body.title, req.params.id])

    const thisTodo = await Todo.findByPk(req.params.id)
    thisTodo.set('title', req.body.title)
    await thisTodo.save()

    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(thisTodo.toJSON()))
    res.end()
})

app.delete('/:id', async (req, res) => {
    // const conn = await getConnection()
    // const {results, fields} = await exectueQuery
    // (conn, 'DELETE FROM Todo WHERE id = ?', 
    // [req.params.id])

    await Todo.destroy({where: {id: req.params.id}})

    res.write('OK')
    res.end()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

