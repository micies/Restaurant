import { MenuFunctions } from "../Menu/MenuController.js";
import { OrederFunctions } from "./OrderController.js"
import { Orders } from "./OrderTypes.js";

export const createOrder=(req, res) =>{
    const gig = req.body;
    OrederFunctions.create(gig).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getByIdOrder=(req, res)=> {
    Orders.removeAttribute("id");

    Orders.findAll({
        where: {
            idTable: req.params.id  
        }
      }).then((data) => {
                let dishes = {}
    for (let element of data){
      dishes[element['idDish']]= element['quantity']
    }
    console.log(dishes)
            res.send(dishes);
        })
        .catch((error) => {
            console.log(error);
        });
}

export const deleteOrder=(req, res) =>{
    OrederFunctions.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: `${req.params.id} deleted successfully`,
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

export const updateOrder=(req, res) =>{
    OrederFunctions.updateItem(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: `${req.params.id} updated successfully`,
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getAllOrder = (req, res) => {
    OrederFunctions.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const calculateSumOrder = async (req, res, next) => {
    Orders.removeAttribute("id");

    let sumPrice = 0;
    let orders = await Orders.findAll({
        where: {
            idTable: req.params.id  
        }
      }).catch((err)=>{console.log(err)})

    for (const property of orders) {
        let calculate = await MenuFunctions.findById(property["idDish"]).catch((err)=>{console.log(err)});

      sumPrice = sumPrice + calculate.price * property["quantity"]
      console.log(calculate.price * property["quantity"])
    }
    res.send({sum:`${sumPrice}`})
}


export const postReservation = async(req, res, next) => {

    for (const [key, value] of Object.entries(req.body.reservations)) {

           const foundItem = await Orders.findByPk({idTable: req.params.id, idDish:key}).catch((err)=>{console.log(err)});
           if (!foundItem) {
                newItem = {
                    idTable:id,
                    idDish:key,
                    quantity:value
                }
                const item = await OrederFunctions.create(newItem).catch((err)=>{console.log(err)})
                return res.send ({item, created: true});
            }
            const item = await OrederFunctions.updateItem(newItem, {where:{idTable: req.params.id, idDish:key}}).catch((err)=>{console.log(err)});
            return res.send ({item, created: false});
        }

    }