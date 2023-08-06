const massList = [
  { brandId: 2, name: "huy", title: "xay", price: 65000 },
  { brandId: 1, name: "hung", title: "trat", price: 89000 },
  { brandId: 3, name: "chien", title: "cp", price: 45000 },
  { brandId: 2, name: "huy", title: "xay", price: 87000 },
  { brandId: 1, name: "hung", title: "trat", price: 43000 },
  { brandId: 3, name: "chien", title: "cp", price: 66000 },
  { brandId: 2, name: "huy", title: "xay", price: 67000 },
  { brandId: 1, name: "hung", title: "trat", price: 39000 },
  { brandId: 3, name: "chien", title: "cp", price: 45000 },
  { brandId: 2, name: "huy", title: "xay", price: 51000 },
  { brandId: 1, name: "hung", title: "trat", price: 89000 },
  { brandId: 3, name: "chien", title: "cp", price: 32000 },
  { brandId: 3, name: "chien", title: "cp", price: 45000 },
  { brandId: 2, name: "huy", title: "xay", price: 51000 },
  { brandId: 1, name: "hung", title: "trat", price: 89000 },
  { brandId: 3, name: "chien", title: "cp", price: 32000 },
];

const memberList = [
  { id: 2, name: "huy", cyId: 1 },
  { id: 1, name: "hung", cyId: 2 },
  { id: 3, name: "chien", cyId: 3 },
];

function totalPrice(element) {
  const arrayNew = massList.filter((item) => {
    if (element.id) {
      if (element.id !== item.brandId) {
        return false;
      }
    }
    return true;
  });
  return arrayNew.reduce((acc, cur) => acc + cur.price, 0);
}

function result() {
  return memberList.map((item) => {
    return {
      name: item.name,
      total: totalPrice(item),
    };
  });
}
console.log(result());
