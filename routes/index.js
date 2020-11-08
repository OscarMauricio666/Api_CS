const { Router } = require('express');
const router = Router();
const _ = require('underscore');


router.get('/', (req, res)=> {
    res.json(res.json(
      [
        { 
          "Mensaje": "hola"
        }
      ]
    )
  )
});

module.exports = router;