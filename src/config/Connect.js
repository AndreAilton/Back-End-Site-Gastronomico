import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅  Conectado ao Banco de Dados");
    } catch (error) {
        console.log("Erro ao conectar ao Banco de Dados");
    }
};

export default connectDB;