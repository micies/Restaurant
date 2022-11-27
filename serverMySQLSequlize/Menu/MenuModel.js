import { CategoryFunctions } from "../Category/CategoryController.js";
import { QueryTypes } from "sequelize";
import { MenuFunctions } from "./MenuController.js"
import { db } from "../dbConnect.js";
import { Menu } from "./MenuTypes.js";
import { Category } from "../Category/CategoryTypes.js";


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
    const sql = "SELECT m.id, m.id_category, m.nameMenu, m.price, c.name FROM Menu as m INNER JOIN Category as c ON m.id_category=c.id_category";


    await db.query(
        sql,
        { type: QueryTypes.SELECT }).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

Menu.hasMany(Category);
Category.belongsTo(Menu);
export const ss = async(req, res)=>{

    const users = await Menu.findAll({
        include: { model: Category.category_id, required: true }
      }).catch((err)=>{console.log(err)});
      res.send(users)
} 