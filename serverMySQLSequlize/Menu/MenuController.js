import { Category } from "../Category/CategoryModel.js";
import { Menu } from "./MenuModel.js"



export let MenuFunctions = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateItem: updateItem,
    findAllCatt:findAllCatt
}

function findAll() {
    return Menu.findAll();
}

function findAllCatt() {
        
    Category.hasMany(Menu, {targetKey:'id_category', foreignKey: 'id_category'})
    Menu.belongsTo(Category, {foreignKey: 'id_category'})
    return Menu.findAll(({
        include: { model: Category, required: true }
      }));
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





