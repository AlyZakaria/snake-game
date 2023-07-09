const {Game, UserGame, sequelize} = require('../models')


const create = async(game) => {

    try{
        const created = await Game.create(game);   
        const userGame = {};
        userGame.user_id = game.created_by
        userGame.game_id = created.game_id
        userGame.position = 0
        userGame.order = 1
        userGame.color = 'red'
        const addUserGame = await UserGame.create(userGame);
        return created;
    }
    catch(err){
        console.log(err)
        return "err";
    }

}




module.exports.create = create
