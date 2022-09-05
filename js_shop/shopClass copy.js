class ShopClass{
  constructor(_parent,_item){
    this.parent = _parent;
    this.name = _item.name;
    this.cat = _item.cat;
    this.price = _item.price;
  }

  render(){
    let div = document.createElement("div");
    div.className = "col-md-6 border p-2";
    document.querySelector(this.parent).append(div);
    
    div.innerHTML = `
      <h2>${this.name}</h2>
      <div>Price: ${this.price} nis, category: ${this.cat}</div>
      <button class="usd-btn">Price in usd</button>
    `

    let usdBtn = div.querySelector(".usd-btn");
    usdBtn.addEventListener("click",function(){
      alert((this.price / 3.5).toLocaleString() + " EURO");
    }.bind(this))
  }
}