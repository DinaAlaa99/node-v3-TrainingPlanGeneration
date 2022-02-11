const printPlan = require('./printPlan')

function generatePlane(WeeksCount, startDate) {
    
    var extraWeeks = calExtraWeek(WeeksCount) // calculat how many weeks more than 8
    mainblock = 1 // first main block {there is at least one main block}

    if (extraWeeks < 4)
    {
       return checkWhichCase(extraWeeks,startDate,mainblock)
    }
    else
    {
          while (extraWeeks >= 4) // while loop to know how many main block repeated in the plan
          {
              extraWeeks -= 4;
              mainblock++;
        }
        return checkWhichCase (extraWeeks,startDate,mainblock)
    }
  
}

function checkWhichCase(extraWeeks,startDate,mainblock)
{
    var fillerWeek = 0 // flag to know if there is filler week or not
   
    switch (extraWeeks) {
        case 0:
            {
                fillerWeek = 0
                return printPlan(startDate, mainblock, fillerWeek, 0)
            }
        case 1:
            {
                fillerWeek = 1
                return printPlan(startDate, mainblock, fillerWeek, 1)
            }

        case 2:
            { 
                fillerWeek = 0
                return printPlan(startDate, mainblock, fillerWeek, 2)
            }
        case 3:
            {
                fillerWeek = 0
                return printPlan(startDate, mainblock, fillerWeek, 3)
            }
    }

}

function calExtraWeek(WeeksCount) {
    return WeeksCount - 8;

}


module.exports = generatePlane