const { userGame, Game } = require("../models");

const socket = require("./socket");
const timeChekcer = require("../public/TimeChecker");
const db = require("../models");

const play = async (room_id) => {
  try {
    // dice
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // console.log(diceVal);
    // need to get the current turn & the position and the order of the current user
    let result = await db.sequelize.query(
      `SELECT u.position, u.order , g.current_user, g.game_cap, g.board_id FROM usergames as u, games as g WHERE g.game_id = ${room_id} AND g.game_id = u.game_id and g.current_user = u.user_id`,
      { type: db.sequelize.QueryTypes.SELECT }
    );

    // update postion and the order of current user
    let newOrder =
      (result[0].order + 1) % (result[0].game_cap + 1) == 0
        ? 1
        : (result[0].order + 1) % (result[0].game_cap + 1);
    let newPosition =
      Number(result[0].position) + diceVal > 100
        ? Number(result[0].position)
        : Number(result[0].position) + diceVal;

    let newPos = newPosition;
    console.log(result);
    let special_element = false;
    let element = await db.sequelize.query(
      `SELECT e.from, e.to FROM board_elements as e where board_id = ${result[0].board_id}`
    );
    for (let i = 0; i < element[0].length; i++) {
      if (element[0][i].from === newPosition) {
        newPosition = element[0][i].to;
        special_element = true;
        break;
      }
    }

    // before update position, check if there is any user at the new position
    let noUser = await EmptyIndex(newPosition, room_id);
    if (!noUser) {
      // if there is, update the position of the user at the new position to 0
      console.log("not empty");
      await db.sequelize.query(
        `update usergames set usergames.position = 0 where usergames.game_id = ${room_id} and usergames.position = '${newPosition}'`,
        { type: db.sequelize.QueryTypes.UPDATE }
      );
    }

    // update current user
    await db.sequelize.query(
      `update usergames set usergames.position = '${newPosition}' where usergames.game_id = ${room_id} and usergames.user_id = ${result[0].current_user}`,
      { type: db.sequelize.QueryTypes.UPDATE }
    );

    await db.sequelize.query(
      `update games set games.current_user = (select usergames.user_id from usergames where usergames.order = ${newOrder} and usergames.game_id = ${room_id}) `,
      { type: db.sequelize.QueryTypes.UPDATE }
    );
    let result2 = await db.sequelize.query(
      `SELECT g.current_user FROM usergames as u, games as g WHERE g.game_id = ${room_id} AND g.game_id = u.game_id and g.current_user = u.user_id`,
      { type: db.sequelize.QueryTypes.SELECT }
    );

    let newCurrentUser = result2[0].current_user;
    // update position
    await Game.update(
      { last_play: new Date() },
      { where: { game_id: room_id } }
    );
    let userInfo = await db.sequelize.query(
      `select usergames.user_id, usergames.color, users.username from usergames, users where usergames.user_id = users.user_id`,
      { type: db.sequelize.QueryTypes.SELECT }
    );
    if (newPosition === 100) {
      socket.emit(`${room_id}`, "game ended", "message");
      await Game.UPDATE({ status: "done" }, { where: { game_cap: room_id } });
    } else {
      socket.emit(
        `${room_id}`,
        { diceVal, newPosition, newCurrentUser, userInfo },
        "message"
      );
      timeChekcer(room_id, play);
    }

    return { diceVal, newPosition, newCurrentUser, userInfo };
  } catch (err) {
    return err;
  }
};

const leaveGame = async (user_id, room_id) => {
  try {
    let result = await db.sequelize.query(
      `delete from usergames where usergames.user_id = ${user_id} and usergames.game_id = ${room_id}`,
      { type: db.sequelize.QueryTypes.DELETE }
    );
    socket.emit(`${room_id}`, "someone joined", "message");
    return true;
  } catch (err) {
    return new Error("Error in deleting user from game");
  }
};

const getPosition = async (room_id) => {
  try {
    let result = await db.sequelize.query(
      `select usergames.position , usergames.user_id, usergames.color from usergames where usergames.game_id = ${room_id}`,
      { type: db.sequelize.QueryTypes.SELECT }
    );
    return result;
  } catch (err) {
    return new Error("Error in getting position");
  }
};

const EmptyIndex = async (position, room_id) => {
  return db.sequelize
    .query(
      `select usergames.position from usergames where usergames.game_id = ${room_id} and usergames.position = '${position}'`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
    .then((result) => {
      console.log(result);
      if (result.length == 0) return true;
      else return false;
    })
    .catch((err) => {
      return false;
    });
};

const get_url = async (room_id) => {
  const board_id = await db.sequelize.query(
    `select board_id from games where game_id = ${room_id}`,
    { type: db.sequelize.QueryTypes.SELECT }
  );
  console.log(board_id[0].board_id);
  return db.sequelize.query(
    `select boards.style from boards where boards.board_id = ${board_id[0].board_id}`
  );
};

module.exports = {
  play,
  leaveGame,
  getPosition,
  get_url,
};
