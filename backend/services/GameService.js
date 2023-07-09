const { UserGame } = require("../models");
const { Game } = require("../models");

const join = async (game_id, user_id) => {
  try {
    const initial_position = 1;
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
      msg = "the player joined the game";
    } else if (status === "start") {
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
  } else if (game.game_cap === count - 1) {
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
  await Game.update({ status: "running" }, { where: { game_id } });

  return;
};

module.exports.join = join;
