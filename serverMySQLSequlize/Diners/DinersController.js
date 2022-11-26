import {Diners} from "./DinersTypes.js"



export let DinersFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
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
    var newGig = new Diners(gig);
    return newGig.save();
}

function updateGig(gig, id) {
    var updateGig = {
        name:gig.name,
        size:gig.size,

    };
    return Diners.update(updateGig, { where: { id: id } });
}





