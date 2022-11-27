import { CategoryFunctions } from "./CategoryController.js"
import { Category } from "./CategoryModel.js";



export const createCategory = (req, res) => {
    const gig = {
        category: req.body.name
    };
    CategoryFunctions.create(gig).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const getByIdCategory = (req, res) => {
    CategoryFunctions.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const deleteCategory = (req, res) => {
    CategoryFunctions.deleteById(req.params.id).
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


export const updateCategory = (req, res) => {
    CategoryFunctions.updateItem(req.body, req.params.id).
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


export const getAllCategory = (req, res) => {
    Category.removeAttribute("id");
    Category.removeAttribute("lastUpdated");


    Category.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

