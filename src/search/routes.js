const routes = require('express').Router();
const User = require('../models/users')

/**
 *  API endpoint : /user/new
 *  HTTP Method  : POST
 *  Description  : To add new user 
 *  Parameters   : ID, NAME, ITEM, ADDRESS, PINCODE
 */
routes.post('/new', async (request, response) => {

    console.log(request.body.item)
    const id = request.body.id
    const name = request.body.name
    const item = request.body.item
    const address = request.body.address
    const pincode = request.body.pincode

    // => Writing up with User entry into Database
    var newUser = new User();
    newUser.id = id;
    newUser.name = name;
    newUser.item = item;
    newUser.address = address;
    newUser.pincode = pincode;

    newUser.save(function (err, user) {
        if (err) {
            console.log('erro..geting...')
            response.status(422).send({ status: false, message: "Something went wrong Please check User ID " })
        } else {
            console.log(user);
            response.status(200).send({ status: true, message: "User info saved" })
        }
    });
})


/**
 *  API endpoint : /search
 *  HTTP Method  : GET
 *  Description  : To get all data if match found 
 *  Parameters   : search-word
 */
routes.get('/search', async (request, response) => {
    const search_word = request.query.search_word;
    console.log(search_word, 'search word');
    
    // search data query
    await User.find({ $text: { $search: search_word} })
    .exec(function(err, data) {
        console.log(data);
        if (err){
            response.send({message:'No data found'})
        }else{
            response.send(data)
        }

    })
    
})

module.exports = routes