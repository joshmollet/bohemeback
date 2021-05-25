var projet_web = require('../Connections/projet_web_db');

exports.getAll = async () => 
{
    const conn = await projet_web;
    return await conn.query('SELECT * FROM product');
}

exports.getByID = async (id) => 
{
    const conn = await projet_web;
    return await conn.query('SELECT * FROM product WHERE id=?', id);
}

exports.getByType = async (id) => 
{
    const conn = await projet_web;
    return await conn.query('SELECT * FROM product WHERE type_id=?', id);
}

exports.insertProduit = async (produit) => 
{
    const conn = await projet_web;
    return await conn.query('INSERT INTO product (id, name, stock, price, image_url, type_id) VALUES(?, ?, ?, ?, ?, ?)', 
                            [produit.id, produit.name, produit.stock, produit.price, produit.image_url, produit.type_id]);
}

exports.deleteProduitByID = async (id) => 
{
    const conn = await projet_web;
    return await conn.query('DELETE FROM product WHERE id=?', id);
}

exports.updateProduitByID = async (id, produit) => 
{
    const conn = await projet_web;
    return await conn.query('UPDATE product SET id=?, name=?, description=?, stock=?, price=?, image_url=?, type_id=? WHERE id=?', 
                            [produit.id, produit.name, produit.description, produit.stock, produit.price, produit.image_url, produit.type_id, id]);
}