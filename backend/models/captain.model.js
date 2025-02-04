const { select } = require('cjs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    lastname: {
        type: String,
        minlength: [3, 'Lastname must be at least 3 characters long']
    }
},
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 8 characters long'],
        select: false   // Hide password from select queries
    },

    soketid: {
        type: String,
        // required: true
    },

    status:{
        type: String,
        enum: ['online', 'offline'],
        default: 'offline'
    },

    vehicle: {
         color:{
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long']
         },
         plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 characters long']
         },
         capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
         },
         vehicleType: {
            type: String,
            enum: ['car', 'bike', 'auto'],
            required: true
         }
    },

    location: {
        lat : {
            type: Number,
            // required: true
        },
        lng : {
            type: Number,
            // required: true
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;