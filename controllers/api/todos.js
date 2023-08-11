const Todo = require('../../models/todo')



module.exports = {
    create, 
    indexComplete,
    indexNotComplete,
    show,
    update, 
    destroy,
    jsonTodos, 
    jsonTodo
}

function jsonTodo(_, res) {
    res.json(res.locals.data.todo)
}

function jsonTodos (_, res) {
    res.json(res.locals.data.todos)
}

// / ******* C - Create **********/

async function create(req, res, next) {
    try {
        const todo = await Todo.create(req.body)
        console.log(todo) // take out before launch
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
// / ******* R - Read - index, show **********/
async function indexComplete(req, res, next) {
    try {
        const todos = await Todo.find({ completed: true })
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function indexNotComplete(req, res, next) {
    try {
        const todos = await Todo.find({ completed: false })
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function show(req, res, next) {
    try {
        const todo = await Todo.findById(req.params.id)
        res.local.data.todo
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// / ******* U - update  **********/

async function update(_, res, next) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { next: true})
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// / ******* D - delete - destroy **********/

async function destroy(req, res, next) {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}