import { CategoryFunctions } from "../Category/CategoryController.js";
import { MenuFunctions } from "./MenuController.js"


export const createMenu = (req, res) => {

    MenuFunctions.create(req.body).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const getByIdMenu = async (req, res, next) => {

    let menu = await MenuFunctions.findById(req.params.id).catch((err) => { console.log(err) });
    let category = await CategoryFunctions.findById(menu.id_category).catch((err) => { console.log(err) });
    menu.id_category = category.name
    console.log(menu)
    res.send(menu)
}


export const deleteMenu = (req, res) => {
    MenuFunctions.deleteById(req.params.id).
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


export const updateMenu = (req, res) => {
    MenuFunctions.updateItem(req.body, req.params.id).
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


export const getAllMenu = async (req, res) => {

    let users = await MenuFunctions.findAllByCattegory().catch((err)=>{console.log(err)});

    res.send(users)
}



