const router = require("express").Router();
let Farmer = require("../models/farmer");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const cors = require('cors');
const bodyParser = require('body-parser');

http://Localhost:8080/farmer/add

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;

    if (!name || !email || !password || !confirm_password) {
        return res.status(400).json({ error: "All fields are required." });
    }

    if (password !== confirm_password) {
        return res.status(400).json({ error: "Passwords do not match." });
    }

    // Hash the password before saving
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error while hashing the password." });
        }

        const newFarmer = new Farmer({
            name,
            email,
            password: hash, // Save the hashed password
        });

        newFarmer.save()
            .then(() => {
                res.json("Farmer Added");
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({ error: "An error occurred while adding the farmer." });
            });
    });
});


// http://Localhost:8070/farmer

// router.route("/").get((req,res) => {

//     Farmer.find().then((farmers) => {

//         res.json(farmers)
//     }).catch((error) => {

//         console.log(error)
//     })

// })


http://Localhost:8080/farmer/update/

router.route("/update/:id").put(async(req,res) => {

    let userId = req.params.id;
    //const name = req.body.name;
    const {name,email,password,confirm_password} = req.body;  // D-Structure

    const updateFarmer = {
        name,
        email,
        password,
        confirm_password
    }

    const update = await Farmer.findByIdAndUpdate(userId,updateFarmer).then(() => {

        res.status(200).send({status:"User update"})


    }).catch(err => {

        console.log(err);
        res.status(500).send({status: "Error with update data"});

    })  

})



http://Localhost:8080/farmer/delete

router.route("/delete/:id").delete(async(req,res) => {
    
    let userId = req.params.id;
    
    await Farmer.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "User Deleted"});

    }).catch((err) => {

        console.log(err.message)
        res.status(500).send({status:"Error with delete" ,error: err.message})
    })

})


http://Localhost:8080/farmer/get

router.route("/get/:id").get(async(req,res) => {

    let userId = req.params.id;
    const user = await Farmer.findById(userId).then ((farmer) => {

        res.status(200).send({status:"User Fetched" , farmer})

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })

})



  
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the farmer by email
    const farmer = await Farmer.findOne({ email });

    if (!farmer) {
      return res.status(401).json({ authenticated: false, message: 'User not found' });
    }

    // Compare the hashed password
    const match = await bcrypt.compare(password, farmer.password);

    if (match) {
      return res.status(200).json({ authenticated: true, user: { id: farmer._id, email: farmer.email } });
    } else {
      return res.status(401).json({ authenticated: false, message: 'Invalid password' });
    }
});



module.exports  = router;