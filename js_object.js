const data = {
  name: 'Iqbal',
  age: 29,
  print() {
    console.log(this.name);
  },
  address: {
    location: 'cxb',
    district: 'ctg',
    thana: {
      thana: 'cxb sadar thana',
    },
  },
};

data.print();
