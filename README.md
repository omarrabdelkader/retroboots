## RETRO BOOTS' API

This project is a RESTful API of a footwear store web application, Retro Boots. Retro Boots web application offers our clients numerous features which helps our clients to maximize their enjoyment.

1. Clients can purchase multitudinous products from Retro Boots web application.

2. Only authorized clients can upload images for their desired footwear and we will be seeking it out.

# Technical Side

Retro Boots' RESTful API has been implemented in Node, Express, and MongoDB. Over and above that, there are four different layers in the backend side which are:

1. Routes

2. Models

3. Controllers

4. Database

Moreover, many dependencies has been npm installed in this project, such as:

1. express
2. dotenv
3. express-async-handler
4. colors
5. multer
6. nodemon
7. mongoose

## Database (DB)

MongoDB, a noSQL database, has been used as the database in this project. We have used the mongoose dependency in order to connect to the database, as well as we used the dotenv dependency for protection.

## Models

# bootModel

We have used the mongoose dependency in order to construct the boot's schema which a description of how the boot's data. Here is a brief description of how the boot data:

1. Title (or the name of the footwear)

2. Price (of the footwear)

3. Type (of the footwear)

4. Image (of the footwear)

## Controllers

# apiController

In apiController, we have used both the express-async-handler dependency and the Boot model.

1.  // @desc Get boots
    // @route GET api/boots
    // @acess Public

The getBoots function is used to get all boots. We use the find() method in order to get them all.

2.  // @desc Post boots
    // @route POST api/boot
    // @acess Public

The postBoot function is used to post a new footwear product to the RESTful API. We use the create() method to create a new footwear product in the bootModel schema.

3.  // @desc Put boots
    // @route PUT api/boot/:id
    // @acess Private

The putBoot function is used to update a certain footwear product. First, we validate the existence of this product. Then, we use the findByIdAndUpdate method to update the product. Only authorized users can perform this action. 4. // @desc Delete boots
// @route DELETE api/boot/:id
// @acess Private

The deleteBoot function is used to delete a certain footwear product. First, we validate the existence of this product. Then, we use the findByIdAndDelete() method to delete the product. This action is performed only by authorized users.

## Route

# apiRoute

We have used two different depenedencies in the api Route which are, express and multer. Multer is used to allow clients to upload an image,
