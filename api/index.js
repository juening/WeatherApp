import express from 'express';

const router = express.Router();

router.get('/cities', (req, res) => {
  res.send({ cities: [
    {name: "Dallas"},
    {name: "Boston"},
    {name: "San Diego"}
  ]});
});

export default router;
