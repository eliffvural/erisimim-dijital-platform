const Resource = require('../models/Resource');
const { Op } = require('sequelize');

exports.getResources = async (req, res) => {
    try {
        const { search } = req.query;
        let where = {};
        
        if (search) {
            where = {
                [Op.or]: [
                    { title: { [Op.iLike]: `%${search}%` } },
                    { description: { [Op.iLike]: `%${search}%` } }
                ]
            };
        }

        const resources = await Resource.findAll({ where });
        res.json(resources);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createResource = async (req, res) => {
    try {
        const resource = await Resource.create(req.body);
        res.status(201).json(resource);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};