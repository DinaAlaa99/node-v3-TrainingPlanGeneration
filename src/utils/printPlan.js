
/** 
 function to print the plan based on how many extra weeks more than 8 (minmum number of weeks in the plan)
 @startDate the date of first day in the plan 
 @mainblock (how many repeated blocks) 
 @fillerWeek (1 or 0 based on how many extra weeks)
 @condition (number of extra weeks {0,1,2,3})
*/

function printPlan(startDate, mainblock, fillerWeek, condition) {
    var result = []
    var count = 1
    if (condition == 0 || condition == 1) // print plan for case 0 or 1 extra week
    {

        result.push('Week # ' + count + ' -Test- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Test- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        //console.log(fillerWeek)
        if (fillerWeek) {
            console.log('here')
            result.push('Week # ' + count + ' -Filler- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++
        }

        for (var i = 0; i < mainblock; i++) {

            result.push('Week #' + count + ' -Recovery- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Build1- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Build2- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Key- from ' + startDate + ' to' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++
        }

        result.push('Week # ' + count + ' -Taper- from ' + startDate + ' to' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Race- from ' + startDate + ' to' + calDate(startDate, 6))

    }
    if (condition == 2) // print plan for 2 extra weeks
    {

        result.push('Week # ' + count + ' -Test- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Test- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week #' + count + ' -Build2- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Key- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        for (i = 0; i < mainblock; i++) {


            result.push('Week # ' + count + ' -Recovery- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Build1- from ' + startDate + ' to' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Build2- from ' + startDate + ' to' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Key- from ' + startDate + ' to' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++
        }

        result.push('Week # ' + count + ' -Taper- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Race- from ' + startDate + ' to ' + calDate(startDate, 6))


    }
    if (condition == 3) // print plan for 3 extra weeks
    {

        result.push('Week # ' + count + ' -Test- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Test- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week #' + count + ' -Build1- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Build2- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Key- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++
        
        for (i = 0; i < mainblock; i++) {


            result.push('Week # ' + count + ' -Recovery- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Build1- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++

            result.push('Week # ' + count + ' -Build2- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++


            result.push('Week # ' + count + ' -Key- from ' + startDate + ' to ' + calDate(startDate, 6))
            startDate = calDate(startDate, 7)
            count++
        }

        result.push('Week # ' + count + ' -Taper- from ' + startDate + ' to ' + calDate(startDate, 6))
        startDate = calDate(startDate, 7)
        count++

        result.push('Week # ' + count + ' -Race- from ' + startDate + ' to ' + calDate(startDate, 6))


    }
    for (let i = 0; i < result.length; i++)
        console.log(result[i])
    return result
}
// calculate date of next week 
function calDate(date, days) {
    var newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    return newDate.toISOString().slice(0, 10)
}

module.exports = printPlan
