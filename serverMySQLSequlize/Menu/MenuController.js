import {Menu} from "./MenuTypes.js"



export let MenuFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
}

function findAll() {
    return Menu.findAll();
}


function findById(id) {
    return Menu.findByPk(id);
}

function deleteById(id) {
    return Menu.destroy({ where: { id: id } });
}

function create(gig) {
    var newGig = new Menu(gig);
    return newGig.save();
}

function updateGig(gig, id) {
    var updateGig = {
    category: gig.category,
    nameMenu: gig.name,
    price: gig.price
  }
    return Menu.update(updateGig, { where: { id: id } });
}





