
const {userGame, Game} = require('../models')

const play =  (room_id) => {
    try{
        // dice
        let diceVal = Math.floor(( Math.random()* 6)) + 1;
        // need to get the current turn & update the position
        let  currentUser = Game.findOne(
            
            {where: {room_id: room_id},
            attributes: ['current_user']
            }
            )
        console.log(currentUser);
        return diceVal;
    }
    catch(err){
        return err;
    }
}




module.exports = {
    play
};
