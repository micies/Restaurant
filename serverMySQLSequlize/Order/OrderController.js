import {Orders} from "./OrderTypes.js"



export let OrederFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
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
    let newGig = new Orders(gig);
    return newGig.save();
}

function updateItem(gig, whereId) {
    return Orders.update(gig, { where: whereId });
}





