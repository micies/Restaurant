import {Tables} from "./TablesModel.js"



export let TablesFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
}

function findAll() {
    return Tables.findAll();
}

function findById(id) {
    return Tables.findByPk(id);
}

function deleteById(id) {
    return Tables.destroy({ where: { id: id } });
}

function create(gig) {
    let newGig = new Tables(gig);
    return newGig.save();
}

function updateItem(gig, id) {
    const updateGig = {
    category: gig.capacity
  }
    return Tables.update(updateGig, { where: { id: id } });
}





