const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', (req, res) => {
  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
    res.json({ id: result.insertId });
  });
});

// router.put('/api/cats/:id', (req, res) => {
//   const condition = `id = ${req.params.id}`;

//   console.log('condition', condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy,
//     },
//     condition,
//     (result) => {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });

// router.delete('/', (req, res) => {
//   const condition = `id = ${req.params.id}`;

//   cat.delete(condition, (result) => {
//     if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });

module.exports = router;
