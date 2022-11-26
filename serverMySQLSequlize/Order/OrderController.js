import {Orders} from "./OrderTypes.js"



export let OrederFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
}

function findAll() {
    return Orders.findAll();
}

function findById(id) {
    return Orders.findByPk(id);
}

function deleteById(id) {
    return Orders.destroy({ where: { idTable: id } });
}

function create(gig) {
    var newGig = new Orders(gig);
    return newGig.save();
}

function updateGig(gig, whereId) {

    return Orders.update(gig, { where: whereId });
}





