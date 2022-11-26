import {Tables} from "./TablesTypes.js"



export let TablesFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
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
    var newGig = new Tables(gig);
    return newGig.save();
}

function updateGig(gig, id) {
    const updateGig = {
    category: gig.capacity
  }
    return Tables.update(updateGig, { where: { id: id } });
}





