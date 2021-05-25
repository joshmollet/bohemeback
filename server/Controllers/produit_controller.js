var produits = require('../Models/produit.model');

class Produit{
    id;
    name; 
    description;
    stock;
    price;
    image_url;
    type_id;

    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.stock = data.stock;
        this.price = data.price;
        this.image_url = data.image_url;
        this.type_id = data.type_id;
    }
}

exports.getAll = (req, res) => 
{
    produits.getAll().then((results) => 
    {
        res.json(results);
    });
}

exports.getByID = (req, res) => 
{
    produits.getByID(req.params.id).then((results) => 
    {
        res.json(results);
    });
}

exports.getByType = (req, res) => 
{
    produits.getByType(req.params.id).then((results) => 
    {
        res.json(results);
    });
}

exports.updateProduit = (req, res) =>
{
    try
    {
        var produit = new Produit(req.body);
        console.log(req.body);
        console.log(produit);
        produits.updateProduitByID(req.params.id, produit);
        produits.getAll().then((results) => 
        {
            res.json(results);
        });
    } catch(err)
    {
        res.status(500).send(err);
    }
}

exports.createProduit = (req, res) => 
{
    try
    {
        var produit = new Produit(req.body);
        produits.insertProduit(produit);
        produits.getAll().then((results) => 
        {
            res.json(results);
        });
    } catch (err)
    {
        res.status(500).send(err);
    }
}

exports.deleteProduit = (req, res) => 
{
    try
    {
        produits.deleteProduitByID(req.params.id);
        produits.getAll().then((results) => 
        {
            res.json(results);
        });
    } catch(err)
    {
        res.status(500).send(err);
    }
}
