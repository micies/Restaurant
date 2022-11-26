import { Menu } from "./MenuTypes.js"



export let MenuFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem
}


const findAll = () => {
    return Menu.findAll();
}


const findById = (id) => {
    return Menu.findByPk(id);
}

const deleteById = (id) => {
    return Menu.destroy({ where: { id: id } });
}

const create = (item) => {
    let newItem = new Menu(item);
    return newItem.save();
}

const updateItem = (gig, id) => {
    let updateItem = {
        category: gig.category,
        nameMenu: gig.name,
        price: gig.price
    }
    return Menu.update(updateItem, { where: { id: id } });
}





