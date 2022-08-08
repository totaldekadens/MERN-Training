import mongoose from 'mongoose'; 
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.json(Player)
        }
    })
}

export const getPlayers = (req, res) => {

    Player.find({},(err, Player) => {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.json(Player)
        }
    })
}

export const getPlayerWithID = (req, res) => {

    Player.findById(req.params.PlayerId,(err, Player) => {
        if (err) {
            res.status(500).send({ message: err });
            return
        } else if(!Player) {
            res.status(404).send({ message: "Player Not found." });
            return
        } else {
            res.json(Player)
        }
    })
}

export const updatePlayer = (req, res) => {
    // First find the Id and then with req.body update your values. {new: true} : Gives you the updated player
    Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, {new: true}, (err, Player) => {
        if (err) {
            res.status(500).send({ message: err });
            return
        } else if(!Player) {
            res.status(404).send({ message: "Player Not found."});
            return
        } 
        else {
            res.json(Player)
        }
    })
}

export const deletePlayer = (req, res) => {

    Player.remove({_id: req.params.PlayerId},(err, Player) => {
        if (err) {
            res.status(500).send({ message: err });
        } else {
            res.json({message: 'Succesfully deleted player'})
        }
    })
}