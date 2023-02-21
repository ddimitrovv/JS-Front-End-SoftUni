function circleArea(argument){
    if (typeof argument != "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    }
    else{
        result = argument ** 2 * Math.PI;
        console.log(result.toFixed(2));
    }
}