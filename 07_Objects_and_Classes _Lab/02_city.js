function cityInfo(cityObject) {
    for (const [key, value] of Object.entries(cityObject)) {
        console.log(`${key} -> ${value}`);
      }
}