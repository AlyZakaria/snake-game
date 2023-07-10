const { Game } = require("../models");
const socket = require('../services/socket')


const timeChekcer = async(game_id) => {
    setTimeout(async() => {
        const my_game = await Game.findOne({ where: { game_id: game_id } });
        if (new Date().getTime() - my_game.last_play.getTime()  >= 10000){
            socket.emit(`${game_id}`, 'Timeout', 'idk');
            console.log('time passed !!!!!!!');
        }
    }, 10000);
}

module.exports = timeChekcer;