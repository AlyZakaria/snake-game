const { Game } = require("../models");
const socket = require('../services/socket')



const timeChekcer = async(game_id, play) => {
    const timeoutId = setTimeout(async() => {
        const my_game = await Game.findOne({ where: { game_id: game_id } });
        if (new Date().getTime() - my_game.last_play.getTime()  >= 10000){
            await play(game_id); 
        }    
    }, 10000);
}

module.exports = timeChekcer;