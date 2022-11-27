import { TablesFunctions } from "./TablesController.js"


export const createTable = (req, res) => {
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


export const getByIdTable = (req, res) => {
    TablesFunctions.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const deleteTable = (req, res) => {
    TablesFunctions.deleteById(req.params.id).
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


export const updateTable = (req, res) => {
    TablesFunctions.updateItem(req.body, req.params.id).
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


export const getAllTables = (req, res) => {
    TablesFunctions.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

