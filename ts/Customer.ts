export class Customer{
    // khai báo các thuộc tính
  private  _id: number;
  private _username: string;
  private  _password: string;
  private  _fullname: string;
  private  _dateofbirth: string;
  private _email: string;
  private  _phonenumber: string;
  private  _linkfacebook: string;
  private  _city: string;
  private  _district:string;
 
 //cac ham lay gia tri va dat gia tri
  //id
  
  public get id() : number {
      return this._id;
  }
  
  public set id(v : number) {
      this._id = v;
  }
  //username
  
  public get username() : string {
      return this._username;

  }
  
  public set username(v : string) {
      this._username = v;
  }
  //password
  
  public get password() : string {
      return this._password;
  }
  
  public set password(v : string) {
      this._password = v;
  }
  //fullname
  
  public get fullname() : string {
      return this._fullname;
  }
  
  public set fullname(v : string) {
      this._fullname = v;
  } 
  //dateofbirth

  public get dateofbirth() : string {
      return this._dateofbirth;
  }
  
  public set dateofbirth(v : string) {
      this._dateofbirth= v;
  }
  
  
  //email
  
  public get email() : string {
      return this._email;
  }
  
  public set email(v : string) {
      this._email = v;
  }

  //phonenumber
  
  public get phonenumber() : string {
      return this._phonenumber;
  }
  
  public set phonenumber(v : string) {
      this._phonenumber = v;
  }
  
  //linkfacebook
  
  public get linkfacebook() : string {
      return this._linkfacebook;
  }
  public set linkfacebook(v:string){
      this._linkfacebook=v;
  }
  
  //city
  
  public get city() : string {
      return this._city; 
  }
  
  public set city(v : string) {
      this._city = v;
  }
  
  //district
  
  public get district() : string {
      return this._district;
  }
  
  
  public set district(v : string) {
      this._district = v;
  }
  
   //hàm khởi tạo giá trị
 constructor(id: number, username: string,password: string,fullname: string,dateofbirth: string,email: string,phonenumber: string,linkfacebook: string,city: string,district:string)
 {
     this.id= id;
     this.username= username;
     this.password= password;
     this.fullname= fullname;
     this.dateofbirth=dateofbirth;
     this.email=email;
     this.phonenumber=phonenumber;
     this.linkfacebook=linkfacebook;
     this.city=city;
     this.district=district;
 }
 //cac ham tuong tac voi doi tuong
 ////Ham lay ra ca doi tuong: getdki
 ///ham lay doi tuong: getdkiid
 ///ham chinh them doi tuong: insertdki
 /// ham hien thi doi tuong: showdki

  
  
  
  
  
  

}