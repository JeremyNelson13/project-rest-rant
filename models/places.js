const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350' },
    cuisines: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    founded: { 
        type: Number,
        min: [1900, 'Surely not that old...'],
        max: [new Date().getFullYear(), 'In the far, far future.']
    }
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)