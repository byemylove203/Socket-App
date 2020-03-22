function SV(name,MSSV,classs,phone,email,address) {
    this.name=name;
    this.MSSV=MSSV;
    this.classs=classs;
    this.phone=phone;
    this.email=email;
    this.address=address
}

var list = [
    new SV(
    "Vu Quoc Khanh",
    "17021275", 
    "K62CACLC2", 
    "0832886616",
    "quockhanhtnvn@gmail.com", 
    'Thai Nguyen'
    ),
    new SV({
      name: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
      MSSV: "Iphone XS Max",
      class: "iPhone XR Max International - Productform : RankA - Backed up to 12 months warranty with a premium package",
      phone: 1099,
      email: "InStock",
      address: "iphone",
    }),
    new SV({
      name: "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/50823174.jpeg",
      MSSV: "iPhone XS",
      class: "iPhone XS International - Productform : RankA - Backed up to 12 months warranty with a premium package",
      phone:
        999,
      email: "InStock",
      address: "iphone",
    }),
    new SV({
      name: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-64gb-2-sim.jpg",
      MSSV: "iphone 11",
      class: "iPhone 11 International - Productform : RankA - Backed up to 12 months warranty with a premium package",
      phone: 709,
      email: "InStock",
      address: "iphone",
    }),
    new SV({
      name: "https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-400x460.png",
      MSSV: "Samsung Galaxy Note 10+",
      class: "Mainboard 12 months.Power, touchscreen and 3-month camera.30-day test case",
      phone: 949,
      email: "InStock",
      address: "android",
    })
];

exports.Findsinhvien = function (id) {
    for (var i=0; i < list.length; i++) {
        if (list[i].MSSV ==id) return list[i];
    }
    return 0;
};