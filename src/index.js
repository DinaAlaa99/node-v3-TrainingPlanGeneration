const express = require("express");

require('dotenv').config()


const planGeneration = require('./utils/planGeneration');
const validateDate  = require('./utils/validateDate');
const weeksBetween = require('./utils/weeksBetween');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.post('/TrainingPlanGeneration', (req, res) => {
    console.log(req)
    if (!req.query.planDate) {
        res.statusCode = 400;
        res.send({ error: "Please Enter the start plan date: " });
    }
    if (!req.query.raceDate) {
        res.statusCode = 400;
        res.send({ error: "Please Enter the end race date" });
    }
    if (!validateDate(req.query.planDate)) {
        res.statusCode = 400;
        res.send({ error: "Please Enter a valid start plan date { yyyy-mm-dd }" });
    }
    if (!validateDate(req.query.raceDate)) {
        res.statusCode = 400;
        res.send({ error: "Please Enter a valid  end race {yyyy-mm-dd} " });
    }

    var weeks = weeksBetween(req.query.planDate, req.query.raceDate)
    weeks+=1
    //console.log(weeks);

    if(weeks < 8){
        res.statusCode = 400;
        res.send({
            error: "The minimum total number of weeks in a plan is 8"  });
    }
    
    var result = planGeneration(weeks, req.query.planDate)
    res.send({ result: result });
})

app.listen(port, () => {
    console.log('Server is up on port ' + port )
})