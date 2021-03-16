System.register(["../mjs/ManageCustomer.js", "./Customer.js"], function (exports_1, context_1) {
    "use strict";
    var ManageCustomer_js_1, Customer_js_1, listmember, members, i, City, District1, District2;
    var __moduleName = context_1 && context_1.id;
    function insertCustomer() {
        // lấy dự liệu nguoi dung nhap
        let username = document.getElementById('txtusername').value;
        let password = document.getElementById('txtpassword').value;
        let fullname = document.getElementById('txtfullname').value;
        let dateofbirth = document.getElementById('txtdateofbirth').value;
        let email = document.getElementById('txtemail').value;
        let phonenumber = document.getElementById('txtphonenumber').value;
        let linkfacebook = document.getElementById('txtlinkfb').value;
        let city = City[document.getElementById('txtcity').value];
        let id;
        let district;
        if (members.length == null) {
            id = 1;
        }
        else {
            id = members.length + 1;
        }
        if (document.getElementById('txtcity').value === '1') {
            district = District1[document.getElementById('txtdistrict').value];
        }
        else if (document.getElementById('txtcity').value === '2') {
            district = District2[document.getElementById('txtdistrict').value];
        }
        //Khoi tao 1 doi tương customer mới
        let customer = new Customer_js_1.Customer(id, username, password, fullname, dateofbirth, email, phonenumber, linkfacebook, city, district);
        //them customer vaof danh sach customer
        listmember.insertCustomer(customer);
        showListCustomer();
    }
    function showListCustomer() {
        //dom den list cutomer
        let tblListCustomer = document.getElementById("listcustomer");
        // clear
        tblListCustomer.innerHTML = '';
        for (let cust of listmember.member) {
            let tdid = CreateTD('id', cust.id);
            let tdusername = CreateTD('username', cust.username);
            let tdpassword = CreateTD('password', cust.password);
            let tdfullname = CreateTD('fullname', cust.fullname);
            let tddateofbirth = CreateTD('dateofbirth', cust.dateofbirth);
            let tdemail = CreateTD('email', cust.email);
            let tdphonenumber = CreateTD('phonenumber', cust.phonenumber);
            let tdlinkfacebook = CreateTD('linkfacebook', cust.linkfacebook);
            let tdcity = CreateTD('city', cust.city);
            let tddistrict = CreateTD('district', cust.district);
            //tao tr
            let trCustomer = document.createElement('tr');
            trCustomer.appendChild(tdid);
            trCustomer.appendChild(tdusername);
            trCustomer.appendChild(tdpassword);
            trCustomer.appendChild(tdfullname);
            trCustomer.appendChild(tddateofbirth);
            trCustomer.appendChild(tdemail);
            trCustomer.appendChild(tdphonenumber);
            trCustomer.appendChild(tdlinkfacebook);
            trCustomer.appendChild(tdcity);
            trCustomer.appendChild(tddistrict);
            tblListCustomer.appendChild(trCustomer);
        }
    }
    function CreateTD(className, value) {
        let td = document.createElement('td');
        td.className = className;
        td.innerHTML = value;
        return td;
    }
    function getCustomer() {
        let idsel;
        var cust_select = listmember.getCustomerId(idsel);
        document.getElementById('txtusername').innerText = cust_select.username;
        document.getElementById('txtpassword').innerText = cust_select.password;
        document.getElementById('txtfullname').innerText = cust_select.fullname;
        document.getElementById('txtdateofbirth').innerText = cust_select.dateofbirth;
        document.getElementById('txtemail').innerText = cust_select.email;
        document.getElementById('txtphonenumber').innerText = cust_select.phonenumber;
        document.getElementById('txtlinkfb').innerText = cust_select.linkfacebook;
    }
    return {
        setters: [
            function (ManageCustomer_js_1_1) {
                ManageCustomer_js_1 = ManageCustomer_js_1_1;
            },
            function (Customer_js_1_1) {
                Customer_js_1 = Customer_js_1_1;
            }
        ],
        execute: function () {
            listmember = new ManageCustomer_js_1.ManageCustomer();
            console.log(listmember);
            members = listmember.getCustomer();
            for (i = 0; i < members.length; i++) {
                console.log(members[i]);
            }
            /* function Update(className, value )
            {
             let td =document.createElement('button');
             td.className=className;
             td.innerHTML=value;
             return td;
                    
            } */
            (function (City) {
                City[City["H\u00E0 N\u1ED9i"] = 0] = "H\u00E0 N\u1ED9i";
                City[City["TP H\u1ED3 Ch\u00ED Minh"] = 1] = "TP H\u1ED3 Ch\u00ED Minh";
            })(City || (City = {}));
            ;
            (function (District1) {
                District1[District1["Ba \u0110\u00ECnh"] = 0] = "Ba \u0110\u00ECnh";
                District1[District1["Thanh Tr\u00EC"] = 1] = "Thanh Tr\u00EC";
                District1[District1["\u0110\u1ED1ng \u0110a"] = 2] = "\u0110\u1ED1ng \u0110a";
                District1[District1["C\u1EA7u Gi\u1EA5y"] = 3] = "C\u1EA7u Gi\u1EA5y";
                District1[District1["M\u00EA Linh"] = 4] = "M\u00EA Linh";
                District1[District1["Thanh Xu\u00E2n"] = 5] = "Thanh Xu\u00E2n";
                District1[District1["H\u00E0 \u0110\u00F4ng"] = 6] = "H\u00E0 \u0110\u00F4ng";
                District1[District1["Ho\u00E0ng Mai"] = 7] = "Ho\u00E0ng Mai";
                District1[District1["Th\u01B0\u1EDDng T\u00EDn"] = 8] = "Th\u01B0\u1EDDng T\u00EDn";
            })(District1 || (District1 = {}));
            (function (District2) {
                District2[District2["Qu\u1EADn 1"] = 0] = "Qu\u1EADn 1";
                District2[District2["Qu\u1EADn 2"] = 1] = "Qu\u1EADn 2";
                District2[District2["Qu\u1EADn 3"] = 2] = "Qu\u1EADn 3";
                District2[District2["Qu\u1EADn 4"] = 3] = "Qu\u1EADn 4";
                District2[District2["Qu\u1EADn 5"] = 4] = "Qu\u1EADn 5";
                District2[District2["Qu\u1EADn 6"] = 5] = "Qu\u1EADn 6";
                District2[District2["Qu\u1EADn 7"] = 6] = "Qu\u1EADn 7";
                District2[District2["T\u00E2n B\u00ECnh"] = 7] = "T\u00E2n B\u00ECnh";
                District2[District2["B\u00ECnh Ch\u00E1nh"] = 8] = "B\u00ECnh Ch\u00E1nh";
                District2[District2["T\u00E2n S\u01A1n Nh\u1EA5t"] = 9] = "T\u00E2n S\u01A1n Nh\u1EA5t";
            })(District2 || (District2 = {}));
            //them su kien cho nut button
            document.getElementById('button-submit').addEventListener('click', insertCustomer);
        }
    };
});
//# sourceMappingURL=add.js.map