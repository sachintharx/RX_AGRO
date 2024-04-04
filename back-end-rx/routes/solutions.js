const router = require("express").Router();
let Solution = require("../models/solution");



http://Localhost:8080/solution/add

router.route("/addSolution").post((req, res) => {
    const ownerName = req.body.ownerName;
    const problemName = req.body.problemName;
    const problemDescription = req.body.problemDescription;
    const problemType = req.body.problemType;
    const timeRange = req.body.timeRange;
    const district = req.body.district;
    const solution = req.body.solution;

    if (!ownerName || !problemName || !problemDescription || !problemType || !timeRange || !district || !solution) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const newSolution = new Solution({
        ownerName,
        problemName,
        problemDescription,
        problemType,
        timeRange,
        district,
        solution,
    });

    newSolution.save()
        .then(() => {
            res.json("Solution Added");
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "An error occurred while adding the solution." });
        });
});


http://Localhost:8080/solution/updateSolution

router.route("/updateSolution/:id").put((req, res) => {
    const ownerId = req.params.id; 
    const { ownerName, problemName, problemDescription, problemType, timeRange, district, solution } = req.body;

    if (!ownerName || !problemName || !problemDescription || !problemType || !timeRange || !district || !solution) {
        return res.status(400).json({ error: "All fields are required." });
    }

    Solution.findByIdAndUpdate(ownerId, {
        ownerName,
        problemName,
        problemDescription,
        problemType,
        timeRange,
        district,
        solution,
    })
    .then(() => {
        res.json("Solution Updated");
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "An error occurred while updating the solution." });
    });
});



http://Localhost:8080/solution/deleteSolution

router.route("/deleteSolution/:id").delete((req, res) => {
    const ownerId = req.params.id; 

    Solution.findByIdAndRemove(ownerId)
    .then(() => {
        res.json("Solution Deleted");
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "An error occurred while deleting the solution." });
    });
});


http://Localhost:8080/solution/getAllSolutions

router.route("/getAllSolutions").get((req, res) => {
    Solution.find()
        .then((solutions) => {
            res.json(solutions);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "An error occurred while fetching solutions." });
        });
});


http://Localhost:8080/solution/getAllSolutions/:id


router.route("/getSolutions/:id").get(async(req,res) => {
    let ownerId = req.params.id;
    const solution = await Solution.findById(ownerId).then ((solution) => {
        res.status(200).send({status:"User Fetched" , solution})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

  


module.exports = router;
