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
  new SV(
  "Vu Trong Duong",
  "17021229",
  "K62CACLC2",
  "0945752146",
  "venom181999@gmail.com",
  "Ha Noi",
  ),
  new SV(
  "Nguyễn Việt Hoàng",
  "1702157",
  "K62CACLC2",
  "0912654879",
  "viethoang@gmail.com",
  "Ha Noi",
  ),
  new SV(
  "Nguyen Minh Duong",
  "17021227",
  "K62CACLC2",
  "0863092567",
  "DoubleW@gmail.com",
  "Bac Giang",
  ),
  new SV(
  "Pham Tuan Hiep",
  "17021242",
  "K62CACLC2",
"0982586868",
  "HiepPham@gmail.com",
  "Hai Duong",
  ),
new SV(
  "Nguyen Manh Hung",
  "17021259",
  "K62CACLC2",
"0958764153",
  "hungmanh@gmail.com",
  "Vinh Phuc",
  ),
new SV(
  "Nguyen Duc Lam",
  "17021280",
  "K62CACLC2",
"09312846975",
  "NguyenLam@gmail.com",
  "Hai Phong",
  ),
new SV(
  "Le Khanh Toan",
  "17021345",
  "K62CACLC1",
"0912633233",
  "Lekhanhtoan@gmail.com",
  "Ha Noi",
  ),
new SV(
  "Nguyen Phuong Hang",
  "17021240",
  "K62CACLC2",
"0395049961",
  "nguyenphuonghang@gmail.com",
  "Hai Duong",
  ),
new SV(
  "Nguyen Tuan Duy",
  "17021225",
  "K62CACLC3",
"0912081988",
  "tuanduy@gmail.com",
  "Ha Noi",
  )
];

exports.Findsinhvien = function (id) {
  for (var i=0; i < list.length; i++) {
      if (list[i].MSSV ==id) return list[i];
  }
  return 0;
};