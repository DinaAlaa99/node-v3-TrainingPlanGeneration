
function WeeksCount(planDate, raceDate) {
    console.log('planDate ' + planDate)
    console.log('raceDate ' + raceDate)
    
    if (planDate == raceDate) {
        return 0;
    }
    //number of milliseconds in one week 
    var oneWeek = 1000 * 60 * 60 * 24 * 7

    //convert two date into milliseconds
    var planDate_ms = new Date(planDate).getTime()
    var raceDate_ms = new Date(raceDate).getTime()

    //calculate diff in millisecond 
    var diff_ms = Math.abs(planDate_ms - raceDate_ms)

    //convert back to weeks
    return  Math.floor(diff_ms/oneWeek)
     
}

module.exports = WeeksCount