import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
      active: Bolean,
      modifiedOn: Date,
      product: [
        {
          quantity: String,
          name: String,
          price: number
        }
      ]
    },
    { timestamps: true }
  );
 const Products = mongoose.model("Products", productSchema);

export default Products;

