import { OrederFunctions } from "../Order/OrderController.js";
import { TablesFunctions } from "../Tables/TablesController.js";
import { Tables } from "../Tables/TablesTypes.js";
import {DinersFunctions} from "./DinersController.js"



export function createDiner(req, res) {
    const gig = {
        name:req.body.name,
        size:req.body.size,
        queue:"tobesited",
        reservations: {},
        sum: 0  }

    DinersFunctions.create(gig).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function getByIdDiner(req, res) {
    DinersFunctions.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function deleteDiner (req, res) {

    await OrederFunctions.deleteById(req.params.id).catch((err)=>{console.log(err)});
    var updateGig = {
        statos: null
      }
    await Tables.update(updateGig, { where: { id: id } }).catch((err)=>{console.log(err)})

    DinersFunctions.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig deleted successfully",
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

export function updateDiner(req, res) {
    DinersFunctions.updateGig(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig updated successfully",
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

export const getAllDiners = (req, res) =>{
    DinersFunctions.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const sitByPeriority = async (req, res, next) => {

    let diners = await DinersFunctions.findAll( {order: [["size", "DESC"],["lastUpdated", "ASC"]]}).catch((err)=>{console.log(err)})
    let tables = await TablesFunctions.findAll({order:["lastUpdated", "ASC"]}).catch((err)=>{console.log(err)})
  
  chunkLoop: for (let diner of diners) {
     for (let table of tables) {

      if (diner.queue != "sit" && table.status == null) {
        if (diner.size <= table.capacity) {
          await SQL([`UPDATE Diners SET queue ="sit", table1 = ? WHERE id = ?`,[table.id, diner.id ]]).catch((err)=>{console.log(err)});
          await SQL([`UPDATE TablesFood SET status = ? WHERE id = ? `,[diner.id, table.id]]).catch((err)=>{console.log(err)});
          break chunkLoop
          
        }
      }
    }
  }
  res.send("success");
}