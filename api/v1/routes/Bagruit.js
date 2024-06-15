const router = require('express').Router();

const { getAllBagruit , getBagrutBySubject , getBagrutByYear  } = require('../controllers/Bagruit');

router.get('/all', getAllBagruit);
router.post('/by_sub', getBagrutBySubject);
router.post('/by_year', getBagrutByYear);
module.exports = router;