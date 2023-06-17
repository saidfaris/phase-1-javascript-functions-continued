// code your solution here
function saturdayFun(activity = 'roller-skate') {
  console.log(`What do you want to do on Saturday? I suggest you ${activity}`);
}

function mondayWork(activity = 'go to the office') {
  console.log(`What do you want to do on Monday? I suggest you ${activity}`);
}

function wrapAdjective(visualFlair = '*', adjective = 'special') {
  return function(adjective) {
    return `You are ${visualFlair}${adjective}`;
  };
}