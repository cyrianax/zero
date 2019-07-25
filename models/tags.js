const {Schema, model} = require('mongoose');

const tagSchema = new Schema({
    name: {type: String, required: true}
});

module.exports = model('tag', tagSchema);
