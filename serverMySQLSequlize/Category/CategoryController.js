import {Category} from "./CategoryTypes.js"



export let CategoryFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
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
    var newGig = new Category(gig);
    return newGig.save();
}

function updateGig(gig, id) {
    var updateGig = {
    category: gig.name
  }
    return Category.update(updateGig, { where: { id: id } });
}





