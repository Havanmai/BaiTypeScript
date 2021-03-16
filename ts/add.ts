 
import {ManageCustomer} from "../mjs/ManageCustomer.js"
import { Customer } from "./Customer.js";



var listmember= new ManageCustomer();
console.log(listmember);
var members : Customer[] = listmember.getCustomer();
for (var i=0 ; i<members.length;i++){
    console.log(members[i]);
}
function  insertCustomer(){

    // lấy dự liệu nguoi dung nhap
    let username :string = (<HTMLInputElement> document.getElementById('txtusername')).value;
    let password :string = (<HTMLInputElement> document.getElementById('txtpassword')).value;
    let fullname :string = (<HTMLInputElement> document.getElementById('txtfullname')).value;
    let dateofbirth: string=(<HTMLInputElement> document.getElementById('txtdateofbirth')).value;
    let email:string=(<HTMLInputElement> document.getElementById('txtemail')).value;
    let phonenumber: string=(<HTMLInputElement> document.getElementById('txtphonenumber')).value;
    let linkfacebook :string =(<HTMLInputElement> document.getElementById('txtlinkfb')).value;
    let city :string=City[(<HTMLSelectElement> document.getElementById('txtcity')).value];
   
    let id:number;
     let district:string;
    if(members.length==null ){
          id=1;
     }
     else {
          id = members.length +1;
     }
     if((<HTMLSelectElement> document.getElementById('txtcity')).value==='1'){
         district=District1[(<HTMLSelectElement> document.getElementById('txtdistrict')).value];
     }
     else if((<HTMLSelectElement> document.getElementById('txtcity')).value==='2'){
        district=District2[(<HTMLSelectElement> document.getElementById('txtdistrict')).value];
     }
   
     //Khoi tao 1 doi tương customer mới
     let customer = new Customer(id,username,password,fullname,dateofbirth,email,phonenumber,linkfacebook,city,district);
    //them customer vaof danh sach customer
     listmember.insertCustomer(customer);
     showListCustomer();
}
function showListCustomer()
{
    //dom den list cutomer
    let tblListCustomer= document.getElementById("listcustomer");
    // clear
    tblListCustomer.innerHTML='';

    for(let cust of listmember.member){
         let tdid:any = CreateTD('id',cust.id);
         let tdusername:any = CreateTD('username',cust.username);
         let tdpassword :any= CreateTD('password',cust.password);
         let tdfullname:any = CreateTD('fullname',cust.fullname);
         let tddateofbirth:any = CreateTD('dateofbirth',cust.dateofbirth);
         let tdemail:any = CreateTD('email',cust.email);
         let tdphonenumber:any = CreateTD('phonenumber',cust.phonenumber);
         let tdlinkfacebook:any = CreateTD('linkfacebook',cust.linkfacebook);
         let tdcity:any= CreateTD('city',cust.city);
         let tddistrict:any=CreateTD('district',cust.district);
            //tao tr
         let trCustomer= document.createElement('tr');
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
function CreateTD(className, value ) 
{
 let td =document.createElement('td');
 td.className=className;
 td.innerHTML=value;
 return td;
        
}
/* function Update(className, value ) 
{
 let td =document.createElement('button');
 td.className=className;
 td.innerHTML=value;
 return td;
        
} */

enum City{'Hà Nội', 'TP Hồ Chí Minh'};
enum District1{'Ba Đình', 'Thanh Trì', 'Đống Đa', 'Cầu Giấy', 'Mê Linh', 'Thanh Xuân', 'Hà Đông', 'Hoàng Mai', 'Thường Tín'}
enum District2{'Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Tân Bình', 'Bình Chánh', 'Tân Sơn Nhất'}
//them su kien cho nut button
document.getElementById('button-submit').addEventListener('click',insertCustomer);
function getCustomer(){
    let idsel:number;
    var cust_select :Customer= listmember.getCustomerId(idsel);
     document.getElementById('txtusername').innerText=cust_select.username;
     document.getElementById('txtpassword').innerText=cust_select.password;
     document.getElementById('txtfullname').innerText=cust_select.fullname;
     document.getElementById('txtdateofbirth').innerText=cust_select.dateofbirth;
     document.getElementById('txtemail').innerText=cust_select.email;
     document.getElementById('txtphonenumber').innerText=cust_select.phonenumber;
     document.getElementById('txtlinkfb').innerText=cust_select.linkfacebook;
    
}