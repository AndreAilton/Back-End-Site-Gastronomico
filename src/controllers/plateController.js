import Plates from "../models/Plates.js";


class PlatesController {

    static async createPlate(req, res) {
        try {
            const plate = await Plates.create(req.body);
            return res.status(200).json(plate);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getAllPlates (req, res) {
        try {
            const plates = await Plates.find( );
            return res.status(200).json(plates);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getAvailablePlates (req, res) {
        try {
            const plates = await Plates.find({ available: true });
            return res.status(200).json(plates);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getPlatesById(req, res) {
        try {
            const plate = await Plates.findById(req.params.id);
            return res.status(200).json(plate);
        } catch (error) {
            returnres.status(500).json({ message: error.message });
        }
    }

    static async deletePlates(req, res) {
        try {
            const plate = await Plates.findByIdAndDelete(req.params.id);
            return res.status(200).json(plate);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async updatePlates(req, res) {
        try {
            const plate = await Plates.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json(plate);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default PlatesController