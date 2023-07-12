const express = require('express')
const router = express.Router()
const {board_element, Board} = require('../models')
const path = require('path');

router.get('/get_all_boards', async (req, res) => {
    try{
        const boards = await Board.findAll()
        res.json(boards)
    }
    catch(err){
        console.log(err);
        res.status(401).json({message: 'error'});
    }
})

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

router.get('/get_image/:board_id', async(req, res) => {
    const board_id = req.params.board_id;
    try{  
        const image_path = path.join(__dirname, "..", "public/", `${board_id}.webp`)
        console.log(image_path)
        res.sendFile(image_path)
    }
    catch(err){
        console.log(err)
        res.status(401).json({message: 'err'});
    }
})

module.exports = router