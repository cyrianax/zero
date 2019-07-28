const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    "__v": { type: String, select: false },
    name: { type: String, required: true }
});

module.exports = model('Tag', tagSchema);
