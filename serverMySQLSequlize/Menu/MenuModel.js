// import { HasMany } from "sequelize";
import { Association } from "sequelize";
import { CategoryFunctions } from "../Category/CategoryController.js";
import { Category } from "../Category/CategoryTypes.js";
import { Menu } from "../Menu/MenuTypes.js";
import { MenuFunctions } from "./MenuController.js"
// import { Gig } from "../Category/CategoryTypes.js";


export function createMenu(req, res) {
    const gig = {
        category: req.body.category,
        nameMenu: req.body.name,
        price: req.body.price
    };
    MenuFunctions.create(gig).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


export const getByIdMenu = async(req, res, next) => {
  
    let menu = await MenuFunctions.findById(req.params.id).catch((err)=>{console.log(err)});
    let category = await CategoryFunctions.findById(menu.id_category).catch((err)=>{console.log(err)});
    // console.log(category[0].name)
    menu.id_category = category.name
    console.log(menu)
    res.send(menu)
  }


export function deleteMenu(req, res) {
    MenuFunctions.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig deleted successfully",
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

export function updateMenu(req, res) {
    MenuFunctions.updateGig(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig updated successfully",
                gig: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    export const getAllMenu = (req, res) => {
        MenuFunctions.findAll().
            then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    // export const getAllMenu = async(req, res) => {
    // Menu.findAll({ include: [{ model: Category, where: ["id_category = id_category"] }] }).then(function(users) {
    //     console.log(JSON.stringify(users))})}
    // export const getAllMenu = (req, res) => {
    //     Category.findAll({
    //         include: [{
    //           model: Menu,
    //           where: ["year_birth = post_year"]
    //          }]
    //       }).
    //         then((data) => {
    //             res.send(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    
    // const tasks = await MenuFunctions.findAll({
    //     include: {
    //       model: Tool,
    //       as: 'Category',

    //     }
    //   })
      
    // const tasks = await MenuFunctions.findAll({ include: CategoryFunctions });
    // res.send(tasks)
    // Menu.hasMany(Category, {
    //     as: 'admin',
    //     foreignKey: 'userid',
    //     sourceKey: 'userid'
    // });
    

        // MenuFunctions.hasMany(CategoryFunctions,{ foreignKey: 'Id_category', as: 'id_category' }).then((data) => {res.send(data)}).catch((error)=>{console.log(error)})

//         Menu.findAll({
//             include: [{
//               model: Category,
//               where: ["id_category = id_category"]
//             }]
//           }).then((data) => {
//                             res.send(data);
//                         })
//                         .catch((error) => {
//                             console.log(error);
//                         })
// }
//     Menu.belongsTo(Category, { foreignKey: 'id_category', as: 'id_category', onDelete: 'CASCADE',
// }).
//             then((data) => {
//                 res.send(data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//    let a = await 
//    res.send(a)
// }


//     MenuFunctions.findAll({
//         include: [{
//           model: Gig,
//           where: ["id_category=id_category"]
//          }]
//       }).then((data) => {
//         res.send(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// }
      

    // const sql = "SELECT m.id, m.id_category, m.nameMenu, m.price, c.name FROM Menu as m INNER JOIN Category as c ON m.id_category=c.id_category";
    
    // db.query(sql, function (err, result) {
    //   if (err) throw err;
    //   res.send(result);
    // });
    // }

