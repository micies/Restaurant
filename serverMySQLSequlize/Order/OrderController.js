import { Orders } from "./OrderTypes.js"



export let OrederFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
}

const findAll = () => {
    return Orders.findAll();
}

const findById = (id) => {
    return Orders.findByPk(id);
}

const deleteById = (id) => {
    return Orders.destroy({ where: { idTable: id } });
}

const create = (gig) => {
    const newGig = new Orders(gig);
    return newGig.save();
}

const updateItem = (gig, whereId) => {

    return Orders.update(gig, { where: whereId });
}





