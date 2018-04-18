'use strict'

const Product= require('../models/product')

//funcion get uno de los producto========================================
function getProduct(req, res)
{

  let productId=req.params.productId

  Product.findById(productId,(err,product) =>
  {
    if (err) return  res.status(500).send({message:`Error al realizar la Busqueda: ${err}`})
    if (!product) return  res.status(404).send({message:`El producto no existe`})

    res.status(200).send({product:product})
  })

}

//funcion get todos los producto========================================
function getProducts(req, res)
{
  Product.find({},(err,products) =>
  {
    if (err) return  res.status(500).send({message:`Error al realizar la Busqueda: ${err}`})
    if(!products) return res.status(404).send({message:'no existen productos'})
    res.send(200, {products:products })


  })
}

//funcion Actualizas un producto========================================
function updateProduct(req,res)
{

  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update,(err, productUpdated) =>
  {
  if (err) return  res.status(500).send({message:`Error al Actualizar El Producto: ${err}`})

  res.status(200).send({product:productUpdated})
  })

}

//funcion Guardar un producto========================================
function saveProduct(req,res)
{

  console.log('POST /api/product')
  console.log(req.body)

  let product = new Product()

  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err,productStored) =>
  {
  if (err) res.status(500).send({message: `Error al Salvar en la BD:${err}`})
  res.status(200).send({product: productStored})
  })
}

//funcion Delete un producto========================================
function deleteProduct(req, res)
{

  let productId=req.params.productId
  Product.findById(productId,(err,product) =>
  {
    if(err) res.status(500).send({message: `Error al Eliminar Item: ${err}`})

    product.remove(err =>
      {
        if(err) res.status(500).send({message: `Error al Eliminar Item: ${err}`})
        res.status(200).send({message:'El producto ha sido eliminado con exito'})
      })
  })

}

module.exports =
{
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
