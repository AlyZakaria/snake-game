const { UserGame } = require("../models");
const { Game } = require("../models");
const db = require("../models");
const socket = require('./socket')

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

const join = async (game_id, user_id) => {
  try {
    const initial_position = 0;
    colors = [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Orange",
      "Pink",
      "Black",
      "White",
      "Gray",
    ];

    const count = await UserGame.count({
      where: {
        game_id: game_id,
      },
    });
    const status = await checkStatus({ count, game_id });

    let msg;
    if (status === "pending") {
      const createUserGame = await UserGame.create({
        game_id,
        user_id,
        position: initial_position,
      });
      socket.emit(`${game_id}`, "someone joined", "message");
      msg = "the player joined the game";
    } else if (status === "start") {
      const createUserGame = await UserGame.create({
        game_id,
        user_id,
        position: initial_position,
      });
      socket.emit(`${game_id}`, "start", "message");
      await startGame({ game_id, user_id, colors });
      msg = "start the game";
    } else if (status === "full") {
      msg = "the game is full the player  cannot join";
    }

    return { count, status, msg };
  } catch (error) {
    console.log(error);
    return { msg: "an error occuered", error };
  }
};

const checkStatus = async ({ count, game_id }) => {
  const game = await Game.findOne({ where: { game_id } });
  console.log(game);
  if (game.game_cap === count) {
    return "full";
  } else if (game.game_cap - 1 === count) {
    return "start";
  } else {
    return "pending";
  }
};

const startGame = async ({ game_id, user_id, colors }) => {
  let users = await UserGame.findAll({ where: { game_id } });

  for (let i = 0; i < users.length; i++) {
    users[i].order = i + 1;
    users[i].color = colors[i];
    await UserGame.update(
      { order: i + 1, color: colors[i] },
      { where: { user_id: users[i].user_id } }
    );
  }
  await Game.update({ status: "running", last_play: new Date() }, { where: { game_id } });
  
  return;
};

const getPlayers = async(game_id) => {
  let users = await db.sequelize.query(
    `SELECT u.username FROM users as u, UserGames as g WHERE g.game_id = ${game_id} AND g.user_id = u.user_id`,
    { type: db.sequelize.QueryTypes.SELECT }
  );
  return users;
}

const getAll = async() => {
  let games = await db.sequelize.query(
    `SELECT u.username, g.game_cap, g.game_id FROM users as u, games as g WHERE u.user_id = g.created_by`,
    { type: db.sequelize.QueryTypes.SELECT }
  );
  return games;
}

const getOrder = async (game_id) => {
  let order = await db.sequelize.query(
    `SELECT games.current_user FROM games WHERE games.game_id = ${game_id}`,
    { type: db.sequelize.QueryTypes.SELECT }
  );
  return order;
}

module.exports.join = join;
module.exports.create = create;
module.exports.getPlayers = getPlayers;
module.exports.getAll = getAll;
module.exports.getOrder = getOrder;
