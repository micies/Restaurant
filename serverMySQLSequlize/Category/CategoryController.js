import {Category} from "./CategoryModel.js"



export let CategoryFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem,
}

function findAll() {
    return Category.findAll();
}

function findById(id) {
    return Category.findByPk(id);
}

function deleteById(id) {
    return Category.destroy({ where: { id_category: id } });
}

function create(gig) {
    let newGig = new Category(gig);
    return newGig.save();
}

function updateItem(gig, id) {
    const updateGig = {
    category: gig.name
  }
    return Category.update(updateGig, { where: { id: id } });
}





