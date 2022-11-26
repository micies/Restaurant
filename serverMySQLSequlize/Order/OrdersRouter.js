import express from 'express';

import {createOrder, getAllOrder, updateOrder, getByIdOrder, deleteOrder, postReservation, calculateSumOrder} from "./OrderModel.js"

const routerOrder  = express.Router();

routerOrder.post("/orders", createOrder)
routerOrder.get("/orders", getAllOrder)
routerOrder.put('/orders/:id', updateOrder)
routerOrder.get("/diners/getreservation/:id", getByIdOrder)
routerOrder.delete('/orders/:id', deleteOrder)
routerOrder.get('/diners/calculate/:id', calculateSumOrder) 
routerOrder.post('/diners/reservation/:id', postReservation)

export default routerOrder;