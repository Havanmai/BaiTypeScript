System.register([], function (exports_1, context_1) {
    "use strict";
    var Customer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Customer = class Customer {
                //hàm khởi tạo giá trị
                constructor(id, username, password, fullname, dateofbirth, email, phonenumber, linkfacebook, city, district) {
                    this.id = id;
                    this.username = username;
                    this.password = password;
                    this.fullname = fullname;
                    this.dateofbirth = dateofbirth;
                    this.email = email;
                    this.phonenumber = phonenumber;
                    this.linkfacebook = linkfacebook;
                    this.city = city;
                    this.district = district;
                }
                //cac ham lay gia tri va dat gia tri
                //id
                get id() {
                    return this._id;
                }
                set id(v) {
                    this._id = v;
                }
                //username
                get username() {
                    return this._username;
                }
                set username(v) {
                    this._username = v;
                }
                //password
                get password() {
                    return this._password;
                }
                set password(v) {
                    this._password = v;
                }
                //fullname
                get fullname() {
                    return this._fullname;
                }
                set fullname(v) {
                    this._fullname = v;
                }
                //dateofbirth
                get dateofbirth() {
                    return this._dateofbirth;
                }
                set dateofbirth(v) {
                    this._dateofbirth = v;
                }
                //email
                get email() {
                    return this._email;
                }
                set email(v) {
                    this._email = v;
                }
                //phonenumber
                get phonenumber() {
                    return this._phonenumber;
                }
                set phonenumber(v) {
                    this._phonenumber = v;
                }
                //linkfacebook
                get linkfacebook() {
                    return this._linkfacebook;
                }
                set linkfacebook(v) {
                    this._linkfacebook = v;
                }
                //city
                get city() {
                    return this._city;
                }
                set city(v) {
                    this._city = v;
                }
                //district
                get district() {
                    return this._district;
                }
                set district(v) {
                    this._district = v;
                }
            };
            exports_1("Customer", Customer);
        }
    };
});
//# sourceMappingURL=Customer.js.map