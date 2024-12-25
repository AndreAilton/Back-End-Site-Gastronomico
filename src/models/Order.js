import { Schema, model } from "mongoose";

const OrdersSchema = new Schema(
  {
    Client: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },

    finished: {
      type: String,
      required: true,
    },
    plates: {
      type: [
        {
          plate: { type: Schema.Types.ObjectId, ref: "Plates" , required: true},
          quantity: { type: Number }
        }
      ],
    },

    date: {
      type: Date,
      default: Date.now,
    }
  },
  { timestamps: true }
);





OrdersSchema.pre("save", async function (next) {
  const PlatesModel = model("Plates"); // Carregar o modelo de pratos
  for (const item of this.plates) {
    const plate = await PlatesModel.findById(item.plate).select("name");
    if (plate) {
      item.plate = plate.name; // Substituir o ID pelo nome
    } else {
      throw new Error(`Prato com ID ${item.plate} não encontrado.`);
    }
  }
  next();
});

export default model("Orders", OrdersSchema);
