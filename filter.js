const cashList = [
  {
    id: 1,
    person: "khuong",
    title: "buy paper ",
    date: 1 - 3 - 2000,
    cash: 90000,
  },
  {
    id: 2,
    person: "truong",
    title: "buy rice",
    date: 1 - 3 - 2000,
    cash: 45000,
  },
  {
    id: 1,
    person: "khuong",
    title: "buy cloth",
    date: 1 - 3 - 2000,
    cash: 120000,
  },
  {
    id: 1,
    person: "khuong",
    title: "buy cake",
    date: 1 - 3 - 2000,
    cash: 80000,
  },
  {
    id: 2,
    person: "truong",
    title: "buy paper",
    date: 1 - 3 - 2000,
    cash: 80000,
  },
  {
    id: 2,
    person: "truong",
    title: "buy rice",
    date: 1 - 3 - 2000,
    cash: 76000,
  },
  {
    id: 2,
    person: "truong",
    title: "buy cloth",
    date: 1 - 3 - 2000,
    cash: 110000,
  },
  {
    id: 1,
    person: "khuong",
    title: "buy cake",
    date: 1 - 3 - 2000,
    cash: 70000,
  },
  {
    id: 2,
    person: "truong",
    title: "buy paper ",
    date: 1 - 3 - 2000,
    cash: 76000,
  },
  {
    id: 2,
    person: "truong",
    title: "buy rice",
    date: 1 - 3 - 2000,
    cash: 67000,
  },
  {
    id: 1,
    person: "khuong",
    title: "buy cloth",
    date: 1 - 3 - 2000,
    cash: 95000,
  },
  {
    id: 1,
    person: "khuong",
    title: "buy cake",
    date: 1 - 3 - 2000,
    cash: 34000,
  },
];

const members = [
  { idt: 1, name: "khuong" },
  { idt: 2, name: "truong" },
];

function totalCash(conditions) {
  const array = cashList.filter((item) => {
    if (conditions.idt) {
      if (conditions.idt !== item.id) {
        return false;
      }
    }
    return true;
  });
  return array.reduce((acc, cur) => acc + cur.cash, 0);
}

// hàm tính tổng tất cả
function total() {
  return cashList.reduce((acc, cur) => acc + cur.cash, 0);
}

// hàm tính ra các đều kiện
function result() {
  return members.map((item) => {
    return {
      idt: item.idt,
      name: item.name,
      total: totalCash(item),
      average: total() / members.length,
      receive: totalCash(item) - total() / members.length,
    };
  });
}
console.log(result());
