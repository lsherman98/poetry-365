const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const poemSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true},
    read_by: { type: String, required: false},
    poem: {type: String, required: true},
    audio: {type: String, required: true},
    day: {type: Number, required: true}
}, {
    timestamps: true,
});


const Poem = mongoose.model('Poem', poemSchema);


module.exports = Poem;
