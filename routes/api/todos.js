const express = require('express')
const router = express.Router()
const todoCtl = require('../../controllers/api/todos')



// Index incomplete
router.get('/', todoCtl.indexNotComplete, todoCtl.jsonTodos)
// Index complete
router.get('/complete', todoCtl.indexComplete, todoCtl.jsonTodos)
// Delete and show the deleted todo
router.delete('/:id', todoCtl.destroy, todoCtl.jsonTodo)
// delete and show 204 message
// router.delete('/:id', todoctl.index.destroy, (r)eq, res) => {} send error (204))
// Update
router.put('/:id', todoCtl.update, todoCtl.jsonTodo)
// Create
router.post('/', todoCtl.create, todoCtl.jsonTodo)
// Show
router.get('/:id', todoCtl.show, todoCtl.jsonTodo)


module.exports = router

