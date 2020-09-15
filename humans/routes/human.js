const {Router} = require ("express");
const  router = Router()
const db = require ("../models")

router.get('/', async (req, res) => {
    try {
        const humans = await db.human.findAll()
        const humanPK = await db.human.findByPk(1111)

        res.json({
            humanPK: humanPK,
            all: humans
        })
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }

})

router.post('/test', (req, res)=> {
    const {test} = req.body
    res.json({
        message: 'hey' + test

    })
})

module.exports = router



