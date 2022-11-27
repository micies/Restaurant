import {Menu} from "./MenuTypes.js"



export let MenuFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
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

function create(item) {
    let newItem = new Menu(item);
    return newItem.save();
}

function updateItem(gig, id) {
    let updateItem = {
    category: gig.category,
    nameMenu: gig.name,
    price: gig.price
  }
    return Menu.update(updateItem, { where: { id: id } });
}





