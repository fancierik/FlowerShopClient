import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import axios from "axios";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MAT_DATE_LOCALE} from "@angular/material/core";



export interface PeriodicElement { //для корзины
  name: string;
  price: number;
  // kol: number;
}
const ELEMENT_DATA: PeriodicElement[] = [];//для корзины элементы
@Component({
  selector: 'app-patient-page',
  templateUrl: './clientpage.component.html',
  styleUrls: ['./clientpage.component.css']
})


export class ClientpageComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'price'];
  dataSource = [...ELEMENT_DATA];//для корзины массив из элемент
  namee:any="";
  summ:any = 0;

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;


  constructor(public dialog: MatDialog) { }
saveloc(){
  localStorage.setItem('id', JSON.stringify(this.dataSource))
  localStorage.setItem('name', JSON.stringify(this.namee))
  localStorage.setItem('price', JSON.stringify(this.summ))
  // // @ts-ignore
  // // this.dataSource=JSON.parse(localStorage.getItem('id'))
  // // // @ts-ignore
  // // this.namee=JSON.parse(localStorage.getItem('name'))
  // // // @ts-ignore
  // // this.summ=JSON.parse(localStorage.getItem('price'))
}

  ngOnInit(): void {
  }
  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogContentExampleDialog, {
  //     data:{dataSource:this.dataSource, summ:this.summ, namee:this.namee},
  //     height:'600px',
  //     width: '450px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
  openDialogCart(enterAnimationDuration: string, exitAnimationDuration: string): void {
    //@ts-ignore
    // this.dataSource=
    // // @ts-ignore
    // this.namee=
    // // @ts-ignore
    // this.summ=

    this.dialog.open(DialogContentCartDialog, {
      // @ts-ignore
      data:{dataSource:JSON.parse(localStorage.getItem('id')), summ:JSON.parse(localStorage.getItem('price')), namee:JSON.parse(localStorage.getItem('name'))},
      height:'600px',
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDialogInfo(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogContentInfoDialog, {
      height:'600px',
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  Thing1Btn() {

    var num=1
    this.summ +=2730*num
    var nam=" - Авторский букет Нежный"
    this.namee+= nam
    this.dataSource.push({name: "Авторский букет Нежный" , price: 2730})
  }

  Thing2Btn() {
    var num=1
    this.summ +=3000*num
    var nam=" - Пудровые розы"
    this.namee+= nam
    this.dataSource.push({name: "Пудровые розы", price:3000})
  }

  Thing3Btn() {
    var num=1
    this.summ +=2000*num
    var nam = " - Ромашки"
    this.namee+= nam
    this.dataSource.push({name: "Ромашки", price: 2000})

  }

  Thing4Btn() {
    var num=1
    this.summ +=200*num
    var nam=" - Эвкалипт"
    this.namee+= nam
    this.dataSource.push({name: "Эвкалипт", price: 200})

  }

  Thing5Btn() {
    var num=1
    this.summ +=3320*num
    var nam=" - Букет с гортензией"
    this.namee+= nam
    this.dataSource.push({name: "Букет с гортензией", price: 3320})

  }

  Thing6Btn() {
    var num=1
    this.summ +=4000*num
    var nam=" - Авторский букет пудровый"
    this.namee+=  nam
    this.dataSource.push({name: "Авторский букет пудровый", price: 4000})

  }
  Thing9Btn() {
    var num=1
    this.summ +=1000*num
    var nam="  - Тюльпаны"
    this.namee+=  nam
    this.dataSource.push({name: "Тюльпаны", price: 1000})

  }
  Thing7Btn() {
    var num=1
    this.summ +=3500*num
    var nam=" - Солнечный"
    this.namee+=  nam
    this.dataSource.push({name: "Солнечный", price: 3500})

  }
  Thing8Btn() {
    var num=1
    this.summ +=2260*num
    var nam = " - Облако"
    this.namee += nam
    this.dataSource.push({name: "Облако", price: 2260})

  }

  RemoveFromCart() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})
export class DialogContentExampleDialog implements OnInit{
  summ:any = this.data.summ
  nameee: any = this.data.namee
  statuslist: string[] = ['Самовывоз', 'Доставка'];
  status: any;
  LoginField: any;
  PasswordField: any;
  AdressField: any;
  CardNumberField: any;
  CVVField: any;
  dateOfRecive: any;
  email: any;
  // data: any=this.dataSource;


  constructor(@Inject(MAT_DIALOG_DATA) public data: ClientpageComponent){}


  CreateOrder() {
    const ToSS :HTMLInputElement = document.getElementById('ToSS') as HTMLInputElement;
    const config = {
      url: 'http://localhost:8081/user/order',
    };
    const data = {
      namee: this.nameee,
      summ: this.summ,
      PasswordField: this.PasswordField,
      LoginField:this.LoginField,
      status:this.status,
      AdressField:this.AdressField,
      DateOrder:ToSS.value,
      data:this.data.dataSource,
      email:this.email,
      // data1: this.data.dataSource
    }
    axios.post(config.url, data, { headers: { 'x-mock-match-request-body': true } })
      .then((response) => {
        console.log(response);
        alert(response.data.message)
      })
      .catch((error) => {
        console.log(error);
        alert('Не удалось оформить заказ, проверьте введенные данные или попробуйте позже');
      });
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'dialog-content-cart-dialog',
  templateUrl: 'dialog-content-cart-dialog.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})

export class DialogContentCartDialog implements OnInit{
  namee:any=this.data.namee
  summ:any = this.data.summ
  dataSourse: any=this.data.dataSource
  displayedColumns: string[] = [ 'name', 'price'];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ClientpageComponent, public dialog: MatDialog){}

  ngOnInit(): void {
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogContentExampleDialog, {
      data:{dataSource:this.dataSourse, summ:this.summ, namee:this.namee},
      height:'620px',
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  // Thing1Btn() {
  //   var num = document.getElementById("num1") as HTMLInputElement
  //   this.summ +=1000*num.valueAsNumber
  //   this.data.dataSource.push({name: "Букет мама наготовила", price: 1000*num.valueAsNumber, kol: num.valueAsNumber})
  //   this.table.renderRows();
  // }
  //
  // Thing2Btn() {
  //   var num = document.getElementById("num2") as HTMLInputElement
  //   this.summ +=300*num.valueAsNumber
  //   this.data.dataSource.push({name: "Розы", price: 300*num.valueAsNumber, kol: num.valueAsNumber})
  //   this.table.renderRows();
  // }
  //
  // Thing3Btn() {
  //   var num = document.getElementById("num3") as HTMLInputElement
  //   this.summ +=120*num.valueAsNumber
  //   this.data.dataSource.push({name: "Пионы", price: 120*num.valueAsNumber, kol: num.valueAsNumber})
  //   this.table.renderRows();
  // }
  //
  // Thing4Btn() {
  //   var num = document.getElementById("num4") as HTMLInputElement
  //   this.summ +=10000*num.valueAsNumber
  //   this.data.dataSource.push({name: "Букет мамин", price: 10000*num.valueAsNumber, kol: num.valueAsNumber})
  //   this.table.renderRows();
  // }
  //
  // Thing5Btn() {
  //   var num = document.getElementById("num5") as HTMLInputElement
  //   this.summ +=300*num.valueAsNumber
  //   this.data.dataSource.push({name: "Мимозы", price: 300*num.valueAsNumber, kol: num.valueAsNumber})
  //   this.table.renderRows();
  // }
  //
  // Thing6Btn() {
  //   var num = document.getElementById("num6") as HTMLInputElement
  //   this.summ +=120*num.valueAsNumber
  //   this.data.dataSource.push({name: "Лилии", price: 120*num.valueAsNumber, kol: num.valueAsNumber})
  //   this.table.renderRows();
  // }

    RemoveFromCart() {
      this.data.dataSource.pop();
      this.table.renderRows();
  }


  // openDialogCart(enterAnimationDuration: string, exitAnimationDuration: string): void {}
  //
  // openDialogInfo(enterAnimationDuration: string, exitAnimationDuration: string): void {}

}

@Component({
  selector: 'dialog-content-info-dialog',
  templateUrl: 'dialog-content-info-dialog.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})

export class DialogContentInfoDialog{
  constructor(@Inject(MAT_DIALOG_DATA) public data: ClientpageComponent){}
}


