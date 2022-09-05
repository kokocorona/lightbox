class TrClass{
  constructor(_parent,_item){
    this.parent = _parent;
    this.email = _item.email;
    this.phone = _item.phone;
    // מייצר מאפיין שמאחד 2 מאפיינים שמגיעים מהאייטים
    this.name = `${_item.name.firstname} ${_item.name.lastname}`
  }

  render(){
    let tr = document.createElement("tr");
    document.querySelector(this.parent).append(tr);
    tr.innerHTML += `
      <td>${this.name}</td>
      <td>${this.email}</td>
      <td>${this.phone}</td>
    `
  }
}