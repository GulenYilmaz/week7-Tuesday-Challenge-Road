// Road Trip Time
// Difficulty
// Harder

// Concepts
// Math, Higher Order Functions


// You are planning a road trip (in a time before Google Maps) and want to know how long each segment of the trip is going to be. Given an array of objects like this:

// {
//     name: `Jake's Great Shakes`,
//     speedLimits: [
//         {
//             distance: 100,
//             speedLimit: 75
//         },
//         {
//             distance: 84,
//             speedLimit: 70
//         },
//         {
//             distance: 20,
//             speedLimit: 75
//         }
//     ],
//     traffic: 30
// }
// Update the given function so that the segmentTimes array in the result object contains the times for each segment of the trip in hours. You can round the times to whole numbers. Also update the totalTime property to be the total time of the trip.

// Additionally, because you like data, you want to know what the average speed limit for each segment of the trip of is.

// Since you are traveling different distances at each speed, you’ll need to weight the averages. For example, given a trip segment where you travel 10 miles at 50 MPH and for 20 miles at 35 MPH, the average weighted speed limit would be 39.9. If you just added 50 and 35 and divided by 2 for a typical average, you would get 42.5. The weighted average is lower since you traveled a longer distance at the lower speed.

// As you find these weighted averages, add them into the avgSpeedLimits array in the result object.

// Return the result object from the function.

// Hint: You can use the reduce method.

//solution from web
const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]

const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }

    let totalTime = arr.reduce((acc, curr) => {

        let segmentDistance = curr.speedLimits.reduce((speedAcc, obj) => {
            return speedAcc += obj.distance
        }, 0)

        let avgSpeedLimit = 0
        let segmentTime = 0

        curr.speedLimits.forEach(obj => {
            avgSpeedLimit += Math.round(obj.speedLimit * (obj.distance / segmentDistance))
            let objTime = Math.round((obj.distance * (obj.speedLimit / 60)) /60) + obj.traffic
            segmentTime += objTime
        })
        
        segmentTime = Math.round(segmentTime)
        result.segmentTimes.push(segmentTime)
        acc += segmentTime

        result.avgSpeedLimits.push(avgSpeedLimit)
        return acc
    }, 0)

    result.totalTime = totalTime

    return result
}

tripTime(stops)











const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }


    return result
}

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE


const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


// tripTime(stops)
