import { Tables } from "./TablesTypes.js"



export let TablesFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
}

const findAll = () => {
    return Tables.findAll();
}

const findById = (id) => {
    return Tables.findByPk(id);
}

const deleteById = (id) => {
    return Tables.destroy({ where: { id: id } });
}

const create = (gig) => {
    const newGig = new Tables(gig);
    return newGig.save();
}

const updateItem = (gig, id) => {
    const updateGig = {
        category: gig.capacity
    }
    return Tables.update(updateGig, { where: { id: id } });
}





