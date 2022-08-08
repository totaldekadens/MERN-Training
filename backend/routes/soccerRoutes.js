import { addNewPlayer, getPlayers, getPlayerWithID, updatePlayer, deletePlayer } from '../controllers/playerControllers';

const playerRoutes = (app) => {
    app.route('/players')
        // GET-endpoint
        .get(getPlayers)
        // POST-endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // GET specific player
        .get(getPlayerWithID) 
        // Update specific player
        .put(updatePlayer)
        // Delete specific player
        .delete(deletePlayer);
}

export default playerRoutes;