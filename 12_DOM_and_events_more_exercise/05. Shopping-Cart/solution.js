function solve() {
   const currentDiv = Array.from(document.getElementsByClassName('product'));
   let products = {};
   const textArea = document.querySelector('body > div > textarea');

   currentDiv.forEach(element => {
      let button = element.querySelector('div > div.product-add > button');
      button.addEventListener('click', () => {
         let productName = element.querySelector('div > div.product-details > div').textContent;
         let productPrice = Number(element.querySelector('div > div.product-line-price').textContent);
         if (!(productName in products)) {
            products[productName] = 0;
         }
         products[productName] += productPrice;
         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      });
   });

   const checkout = document.querySelector('body > div > button');
   checkout.addEventListener('click', () => {
      let boughtProducts = [];
      let totalPrice = 0;
      for (const product in products) {
         boughtProducts.push(product);
         totalPrice += products[product];
      }
      textArea.textContent += `You bought ${boughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
      currentDiv.forEach(element => {
         let button = element.querySelector('div > div.product-add > button');
         button.disabled = true;
      })
      checkout.disabled = true;
   });
}