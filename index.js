// Code your solution in this file!
function distanceFromHqInBlocks (blok) {
  if(blok<=42){
  return (42-blok)}
  else{return blok-42}
}
 
function distanceFromHqInFeet (blok) {
  return (distanceFromHqInBlocks(blok)*264);
  
}

function distanceTravelledInFeet(a,b){
  if(a<b){return (b-a)*264}
  else{return (a-b)*264}
}
function calculatesFarePrice(a,b){
  if (distanceTravelledInFeet(a,b)<=400){return free}
  else if(distanceTravelledInFeet(a,b)<=2000){return 2*(distanceTravelledInFeet(a,b))}
  else if(distanceTravelledInFeet(a,b)<=2500){return}
  else {return 'cannot travel that far'}
  
}

