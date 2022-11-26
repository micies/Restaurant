import { CategoryFunctions } from "./CategoryController.js"
import { Category } from "./CategoryTypes.js";


export function createCategory(req, res) {
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

export function getByIdCategory(req, res) {
    CategoryFunctions.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function deleteCategory(req, res) {
    CategoryFunctions.deleteById(req.params.id).
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

export function updateCategory(req, res) {
    CategoryFunctions.updateGig(req.body, req.params.id).
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

