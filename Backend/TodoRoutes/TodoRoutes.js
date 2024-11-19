const express = require('express')
const { getText, getAllData, createTodo, updateTodo, deleteTodo } = require('../TodoController/TodoController')

const router = express.Router()


router.get('/', getText)

router.get('/todo', getAllData)

router.post('/create', createTodo)
router.put('/update',updateTodo)
router.delete('/delete', deleteTodo)
module.exports = router