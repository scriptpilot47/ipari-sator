/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "number1520121038",
    "max": null,
    "min": null,
    "name": "price_net_huf",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number4263341101",
    "max": null,
    "min": null,
    "name": "vat_huf",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // remove field
  collection.fields.removeById("number1520121038")

  // remove field
  collection.fields.removeById("number4263341101")

  return app.save(collection)
})
