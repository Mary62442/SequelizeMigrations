const models = require('./models');
const Op = models.Sequelize.Op;

//models.Product.findAll().then(pr => console.log(pr));

let createCatWithProds = async(catObj, prodArr) => {
    let catId = await models.Category.create({
        name: catObj.name,
        description:catObj.description
    }).then(cat => cat.id).catch(err => console.log(err));
    await prodArr.map(pr => {
        return models.Product.create({
            sku: pr.sku,
            name: pr.name,
            description: pr.description,
            subTitle : pr.subTitle,
            unitPrice: pr.unitPrice,
            isOnOffer: pr.isOnOffer,
            quantityOnOffer: pr.quantityOnOffer,
            offerPrice: pr.offerPrice, 
            imageUrl: pr.imageUrl,
            notes: pr.notes,
            CategoryId:catId
        }).catch(err => console.log(err))
    })
}

let newCategory = {name: "IT", description:"IT category"};
let newProducts = [
    {   
        sku: "web1",
        name: "Presentation Website",
        description: "Website for representation with basic navigation and description.",
        subTitle : "Basic Website for representation.",
        unitPrice: 1000,
        isOnOffer: true,
        quantityOnOffer: 2,
        offerPrice: 1800, 
        imageUrl: "web1.com",
        notes: ""
    },
    { 
        sku: "web2",
        name: "Login Register Website",
        description: "Website with account login.",
        subTitle : "Website with account login.",
        unitPrice: 4000,
        isOnOffer: false,
        quantityOnOffer: null,
        offerPrice: null, 
        imageUrl: "web2.com",
        notes: ""
    }
];

createCatWithProds(newCategory, newProducts)

/* models.Category.create({
    name: "IT",
    description:"IT category"
}).then(cat => {
    return models.Product.create({
        sku: "web1",
        name: "Presentation Website",
        description: "Website for representation with basic navigation and description.",
        subTitle : "Basic Website for representation.",
        unitPrice: 1000,
        isOnOffer: true,
        quantityOnOffer: 2,
        offerPrice: 1800, 
        imageUrl: "web1.com",
        notes: "",
        CategoryId:cat.id
    })
}).then(pr => console.log(pr));
 */
