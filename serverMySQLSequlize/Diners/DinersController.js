import {Diners} from "./DinersTypes.js"



export let DinersFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
}

function findAll() {
    return Diners.findAll();
}

function findById(id) {
    return Diners.findByPk(id);
}

function deleteById(id) {
    return Diners.destroy({ where: { id: id } });
}

function create(gig) {
    let newGig = new Diners(gig);
    return newGig.save();
}

function updateItem(gig, id) {
    const updateGig = {
        name:gig.name,
        size:gig.size,

    };
    return Diners.update(updateGig, { where: { id: id } });
}





