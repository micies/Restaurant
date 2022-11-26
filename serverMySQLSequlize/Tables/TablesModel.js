import { TablesFunctions } from "./TablesController.js"


export function createTable(req, res) {
    const gig = {
        capacity: req.body.capacity
    };
    TablesFunctions.create(gig).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function getByIdTable(req, res) {
    TablesFunctions.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function deleteTable(req, res) {
    TablesFunctions.deleteById(req.params.id).
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

export function updateTable(req, res) {
    TablesFunctions.updateGig(req.body, req.params.id).
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

export const getAllTables = (req, res) => {
    TablesFunctions.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

