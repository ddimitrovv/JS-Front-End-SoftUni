function makeDictionary(inputArray) {
    let info = {};
    for (i = 0; i < inputArray.length; i++) {
        current = JSON.parse(inputArray[i]);
        for (const [key, value] of Object.entries(current)){
            info[key] = value;
        }
    }

    info = Object.keys(info).sort().reduce(
        (obj, key) => { 
          obj[key] = info[key]; 
          return obj;
        }, 
        {}
      );

    for (const [key, value] of Object.entries(info)){
        console.log(`Term: ${key} => Definition: ${value}`);
    }   
}