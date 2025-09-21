/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3877123827")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool1586340842",
    "name": "is_homepage",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3877123827")

  // remove field
  collection.fields.removeById("bool1586340842")

  return app.save(collection)
})
