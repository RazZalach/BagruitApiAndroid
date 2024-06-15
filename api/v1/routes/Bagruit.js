const router = require('express').Router();

const { getAllBagruit , getBagrutBySubject ,addNewBagrut, getBagrutByYear  } = require('../controllers/Bagruit');

router.get('/all', getAllBagruit);
router.post('/add', addNewBagrut);
router.post('/by_sub', getBagrutBySubject);
router.post('/by_year', getBagrutByYear);
module.exports = router;