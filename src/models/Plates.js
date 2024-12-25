import {Schema, model} from "mongoose";

const PlatesSchema = new Schema({
    name: {
        type: String,
        required: true,},
    description: {
        type: String,
        required: true,},
    price: {
        type: Number,
        required: true,},
    available: {
        type: Boolean,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true
    },
    image: {
        type: String
    },
},
{timestamps: true}
);

export default model("Plates", PlatesSchema);