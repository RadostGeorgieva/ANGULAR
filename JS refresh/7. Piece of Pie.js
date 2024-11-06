function piecesOfPie(arr, start, end) {
    console.log(start);
    console.log(end);
    let result = []

    result = arr.slice(arr.indexOf(start), arr.indexOf(end)+1);
    return result;

}

console.log(piecesOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'));