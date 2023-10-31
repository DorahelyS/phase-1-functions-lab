// Code your solution in this file!

const HQ = 42
// declare function
function distanceFromHqInBlocks(pickupLocation){
    //let blocks = pickupLocation - HQ
    return Math.abs(HQ - pickupLocation)
// can write as an arrow function as well
//passenger pickup location
//returns number of blocks from HQ - 42 street 
//have to use Math.abs to get post int because some value are negative 50-42
//For example, if the pickup location is `50` (i.e., 50th Street), the return value should be `8`.
}


function distanceFromHqInFeet(blockNumber){
//number of blocks - can use equation from above 
let blocks = distanceFromHqInBlocks(blockNumber)*264
// translate blocks to feet which each block is 254 feet
return blocks
}

function distanceTravelledInFeet(start, destination) {
    //calculate number of feet customer travels from start to finish and multiple by 264
    return Math.abs(start - destination)*264
  }

  function calculatesFarePrice(starting, endDestination) {
    // find starting and ending travelled (already did)
    let distance = distanceTravelledInFeet(starting,endDestination)
    //return fare note that first 400 feet are free
    if (distance <= 400){
    return 0
    //.2 cents per foot if distance is 400 to 2000
    //and then $25 for  2000 feet and under 2500 feet
    } else if (distance >= 400 && distance <= 2000){
        return .02 * (distance - 400)
    }else if (distance > 2000 && distance < 2500){
    return 25
    // over 2500 feet
    }else {
    return 'cannot travel that far'
  }
}

// ------------- end of lab------------
