const { Router } = require('express');
const router = new Router();
const _ = require('underscore');

const tasks = require('../tasks.json');


router.get('/tasks', (req, res)=> {
   // res.send('Tareas');
    res.json(tasks);
});
// router.get('/tasks/:id', (req, res) => {
//     const {id} = req.params
//     _.each(tasks, (task, i) => {
//         if(task.id == id){
//             res.send(tasks.id);
//         }
//     });
//     res.json(tasks.id);
// });
router.post('/tasks', (req, res) => {
    const id = tasks.length + 1;
    const {title} = req.body;
    const newTask = {...req.body, id};
    if(title){        
         tasks.unshift(newTask);
         res.json(tasks);        
    }else{
        res.send('Tarea invalida');
    }
});
router.delete('/tasks/:id', (req, res) => {
    const {id} = req.params;
    if(id){
    _.each(tasks, (task, i) => {
        if(task.id == id){
            tasks.splice(i, 1);
        }
    });
    res.json('Eliminada');
    }
});

router.put('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    if(title){
        _.each(tasks, (task, i) => {
            if(task.id == id){
                task.title = title;
            }
        });
        res.json(tasks);
    }else{
        res.status(500);
    }


});

module.exports = router;