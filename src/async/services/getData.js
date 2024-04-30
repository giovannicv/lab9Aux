(async () => {
  
  const randomProductId = Math.floor(Math.random() * 100) + 1;
  
  const url = `https://dummyjson.com/products/${randomProductId}`;
  
  const response = await fetch(url);
  
  const data = await response.json();

  console.log(data); 
})();

//( async () => {

//  const response = await fetch('https://dummyjson.com/products/1');
  
//  const data = await response.json();

//  console.log(data); 
//})();