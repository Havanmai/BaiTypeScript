import {Customer} from "../mjs/Customer.js"
export class ManageCustomer{
    private member : Customer[] =[];// khai baos mang customer troongs
    constructor(){
        console.log('hi')
        var customer1 = new Customer(1,"adc","","","","","","","","");
        this.insertCustomer(customer1);
    }
    
    getCustomerId(idnew:number):any{
       //lấy sản phẩm dựa vào id
       for (var i:number=0;i<this.member.length;i++){
           //kiểm tra
           if(this.member[i].id=idnew){
               return this.member[i];
           }
           
       }
       return 0;
        
    }
    insertCustomer(customer:Customer):void{
        //hung du lieu muon tao vao trong member
       /*  this.member.push(customer);
        console.log(this.member); */
        this.member[this.member.length]=customer;
    };
    getCustomer() :Customer[]{
        return this.member;
    }
    showCustomer(): string{
        return '';
    }
    updateCustomer (customer: Customer): void{};

}