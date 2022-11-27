import { OrederFunctions } from "../Order/OrdersController.js";
import { DinersFunctions } from "./DinersController.js"
import { Tables } from "../Tables/TablesModel.js";
import { Diners } from "./DinersModel.js";



export const createDiner = (req, res) => {
    const gig = {
        name: req.body.name,
        size: req.body.size,
        queue: "tobesited",
        reservations: {},
        sum: 0
    }

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


export async function deleteDiner(req, res) {

    await OrederFunctions.deleteById(req.params.id).catch((err) => { console.log(err) });
    const updateGig = {
        status: null
    }
    await Tables.update(updateGig, { where: { status: req.params.id } }).catch((err) => { console.log(err) })

    DinersFunctions.deleteById(req.params.id).
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


export const updateDiner = (req, res) => {
    DinersFunctions.updateItem(req.body, req.params.id).
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

export const getAllDiners = (req, res) => {
    DinersFunctions.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const sitByPeriority = async (req, res, next) => {

    let diners = await Diners.findAll({ order: [["size", "DESC"], ["lastUpdated", "ASC"]] }).catch((err) => { console.log(err) })
    let tables = await Tables.findAll({ order: ["capacity"] }).catch((err) => { console.log(err) })
    chunkLoop: for (let diner of diners) {
        for (let table of tables) {
            console.log(diner.queue)
            if (diner.queue != "sit" && table.status == null) {
                if (diner.size <= table.capacity) {
                    await Diners.update({ queue: "sit", table1: table.id }, { where: { id: diner.id } }).catch((err) => { console.log(err) })
                    await Tables.update({ status: diner.id }, { where: { id: table.id } }).catch((err) => { console.log(err) })

                    break chunkLoop

                }
            }
        }
    }
    res.send("success");
}