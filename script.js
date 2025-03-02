// loop over inventoryto fetch products on UI
// Inside loop for each object one item div will be created
// one actions dib will be there inside item contaiining -, count, +
// add events on - & +
/* Event logic : On each click - or +
    Check first if count is <=0 ...... simple return
     or not
    If not then only add item to right div
{Create a new div from the object and push that to right div}

display Function Logic : 
innerHtml = ""
filter : if count > 0 return those objects
fetch those
*/
let inventory = [
    {
      name: "Product-1",
      price: 100,
      quantity: 0,
    },
    {
      name: "Product-2",
      price: 200,
      quantity: 0,
    },
    {
      name: "Product-3",
      price: 300,
      quantity: 0,
    },
    {
      name: "Product-4",
      price: 400,
      quantity: 0,
    },
  ];
  
  let cartInventory = [];
  
  let productsDiv = document.querySelector(".products");
  
  let cartItemContainer = document.querySelector(".cart-item-container");
  
  let cartTotal = document.querySelector(".cart-total");
  let totalPrice = document.querySelector("#total-price");
  
  displayAllProducts();
  
  function displayAllProducts() {
    let fragment = document.createDocumentFragment();
    inventory.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item-div");
  
      const productName = document.createElement("span");
      const price = document.createElement("span");
      const actions = document.createElement("div");
      actions.classList.add("actions");
      const count = document.createElement("span");
      const increment = document.createElement("span");
      const decrement = document.createElement("span");
  
      productName.innerText = item.name;
      price.innerText = item.price;
  
      count.innerText = item.quantity;
      increment.innerText = "+";
      increment.addEventListener("click", () => action("+", item, count));
      decrement.innerText = "-";
      decrement.addEventListener("click", () => action("-", item, count));
      actions.append(decrement, count, increment);
  
      itemDiv.append(productName, price, actions);
      fragment.append(itemDiv);
    });
    productsDiv.append(fragment);
  }
  
  function action(sign, obj, count) {
  
    if (sign === "+") {
      obj.quantity = obj.quantity + 1;
      count.innerText = obj.quantity;
  
    } else if (sign === "-") {
      if (obj.quantity > 0) {
        obj.quantity = obj.quantity - 1;
        count.innerText = obj.quantity;
      }
    }
    
    let cartInventory = inventory.filter((obj)=>{
      return obj.quantity > 0;
    })
    console.log(cartInventory);
  // ! working space
    displayCartItems(cartInventory);
    totalPrice.innerText = "Rs." + cartInventory.reduce((acc,curr)=>{
      return acc + Number(curr.price) * Number(curr.quantity);
   },0)
   console.log(totalPrice.innerText);
   
  
  }
  
  function displayCartItems (arr) {
      cartItemContainer.innerHTML =  "";
      let fragment = document.createDocumentFragment();
      arr.forEach((obj)=>{
          const cartItemDiv = document.createElement("div");
          cartItemDiv.classList.add("item-div");
  
          let cartProduct = document.createElement("span");
          cartProduct.innerText = obj.name;
  
          let cartItemDetail = document.createElement("span");
          cartItemDetail.innerText = `${obj.quantity} X ${obj.price}`
  
          // console.log(cartProduct.innerText, cartItemDetail.innerText);
          
  
          cartItemDiv.append(cartProduct, cartItemDetail);
          fragment.append(cartItemDiv);
  
      })
      cartItemContainer.append(fragment);
  }
  
  
  
  
  
  /*
  "2 X 200"
  [2,200]
  arr[0] * arr[1] = 400
  */