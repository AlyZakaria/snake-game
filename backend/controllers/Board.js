const express = require('express')
const router = express.Router()
const {board_element} = require('../models')



router.get('/get_board', async (req, res) => {
    const {board_id} = req.body;
    try{
        const board = await board_element.findAll({where: {board_id: board_id}});
        res.status(200).json(board)
    }
    catch(err){
        res.status(401).json({message: 'err'});
    }
    
})



