const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequests = require(' _middleware/validate-request');
const Role = require(' _helpers/role');
const UserService = require (' ./user.service');
const userService = require('./user.service');


router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next){
    userService.getAll()
    .then(users => res.json(users))
    .catch(next);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function create(req, res, next) {
    userService.create(req.body)
    .then(() => res.json({ message: 'User created'}))
    .catch(next);
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
    .then(() => res.json({ message: 'User update'}))
    .catch(next);
}

function _delete(req, res, next) {
    userService._delete(req.params.id)
    .then(() => res.json({ message: 'User deleted'}))
    .catch(next);
}

