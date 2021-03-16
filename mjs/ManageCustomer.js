System.register(["../mjs/Customer.js"], function (exports_1, context_1) {
    "use strict";
    var Customer_js_1, ManageCustomer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Customer_js_1_1) {
                Customer_js_1 = Customer_js_1_1;
            }
        ],
        execute: function () {
            ManageCustomer = class ManageCustomer {
                constructor() {
                    this.member = []; // khai baos mang customer troongs
                    console.log('hi');
                    var customer1 = new Customer_js_1.Customer(1, "adc", "", "", "", "", "", "", "", "");
                    this.insertCustomer(customer1);
                }
                getCustomerId(idnew) {
                    //lấy sản phẩm dựa vào id
                    for (var i = 0; i < this.member.length; i++) {
                        //kiểm tra
                        if (this.member[i].id = idnew) {
                            return this.member[i];
                        }
                    }
                    return 0;
                }
                insertCustomer(customer) {
                    //hung du lieu muon tao vao trong member
                    /*  this.member.push(customer);
                     console.log(this.member); */
                    this.member[this.member.length] = customer;
                }
                ;
                getCustomer() {
                    return this.member;
                }
                showCustomer() {
                    return '';
                }
                updateCustomer(customer) { }
                ;
            };
            exports_1("ManageCustomer", ManageCustomer);
        }
    };
});
//# sourceMappingURL=ManageCustomer.js.map