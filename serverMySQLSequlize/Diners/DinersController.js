import { Diners } from "./DinersTypes.js"



export let DinersFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
}


const findAll = () => {
    return Diners.findAll();
}


const findById = (id) => {
    return Diners.findByPk(id);
}


const deleteById = (id) => {
    return Diners.destroy({ where: { id: id } });
}


const create = (gig) => {
    let newGig = new Diners(gig);
    return newGig.save();
}


const updateItem = (gig, id) => {
    const updateGig = {
        name: gig.name,
        size: gig.size
    };
    return Diners.update(updateGig, { where: { id: id } });
}





