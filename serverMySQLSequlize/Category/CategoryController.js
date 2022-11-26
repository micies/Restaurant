import { Category } from "./CategoryTypes.js"



export let CategoryFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
}


const findAll = () => {
    return Category.findAll();
}


const findById = (id) => {
    return Category.findByPk(id);
}


const deleteById = (id) => {
    return Category.destroy({ where: { id_category: id } });
}


const create = (gig) => {
    let newGig = new Category(gig);
    return newGig.save();
}


const updateItem = (gig, id) => {
    const updateGig = {
        category: gig.name
    }
    return Category.update(updateGig, { where: { id: id } });
}





