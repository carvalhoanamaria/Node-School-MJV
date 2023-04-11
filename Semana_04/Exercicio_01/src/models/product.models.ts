// Representacao de algo/objeto - Nesse caso Produto

import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IProduct {
    id : number;
    description : string;
    img : string;
    price : number;
    quantity : number;
    createAt: string | Date;
 }

 export const productShema = new Schema <IProduct>({
    id: { 
        type: Number 
    },
    description: {
         type: String
         },
    img: { 
        type: String
     },
    price: {
         type: Number 
        },
    quantity: { 
        type: Number 
    } ,
    createAt:{
         type: Date, default: new Date()
         }
 });


 export const Product = mongoose.model<IProduct>('Product',productShema);