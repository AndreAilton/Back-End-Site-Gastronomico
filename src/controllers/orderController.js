import Order from "../models/Order.js";
import Plates from "../models/Plates.js";

class OrderController {

    static async createPlate(req, res) {
        try {
            if (!req.body.Client) req.body.Client = "000000000000000000000000";
            const plates = await Order.create(req.body);

            return res.status(200).json(plates);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getAllOrder (req, res) {
        try {
            const plates = await Plates.find( );
            const orders = await Order.find( );
        
            // Adicionar os dados dos pratos aos pedidos
            const updatedOrders = orders.map(order => {

                return {
                  ...order._doc, // Dados do pedido
                  plates: order.plates.map(plateItem => {
                    // Encontrar o prato correspondente na tabela de pratos
                    const plateDetails = plates.find(plate => plate._id.toString() === plateItem.plate.toString());
                    return {
                      ...plateItem._doc,
                      name: plateDetails?.name || "Nome não encontrado",
                      description: plateDetails?.description || "Descrição não disponível",
                      ingredients: plateDetails?.ingredients || []
                    };
                  })
                };
              });
        
              return res.status(200).json(updatedOrders);
            } catch (error) {
              console.error(error);
              return res.status(500).json({ message: error.message });
            }
          }
        

    static async getAvailableOrder (req, res) {
        try {
            const plates = await Order.find({ finished: false });
            return res.status(200).json(plates);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async getOrderById(req, res) {
        try {
            const plate = await Order.findById(req.params.id);
            return res.status(200).json(plate);
        } catch (error) {
            returnres.status(500).json({ message: error.message });
        }
    }

    static async getOrderByClient(req, res) {
        try {
            const plate = await Order.find({ Client: req.params.id });
            return res.status(200).json(plate);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteOrder(req, res) {
        try {
            const plate = await Order.findByIdAndDelete(req.params.id);
            return res.status(200).json(plate);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateOrder(req, res) {
        try {
            const plate = await Order.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json(plate);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default OrderController