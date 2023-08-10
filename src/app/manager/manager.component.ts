import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import axios from "axios";
import {MatTable} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

export interface OrderElement {
  numberofUser: string
  // name: string
  secondname: string
  login: string
  email: string
  numberofOrder: string
  numberofPay: string
  dateofOrder: string
  dateofArrive: string
  fio: string
  comment: string
  statuss: string
  namee:string

}

let ELEMENT_DATA: OrderElement[] = [];

@Component({
  selector: 'app-patient-page',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  numberOrder: any;
  displayedColumns: string[] = ['numberofOrder','comment', 'dateofArrive', 'dateofOrder', 'fio', 'numberofPay', 'statuss','adress', 'namee'];
  dataSource = ELEMENT_DATA;
  statuslist: string[] = ['В пути', 'Доставлен', 'Оплачен', 'Ожидает оплаты', 'Обрабатывается'];
  status: any;

  constructor(public dialog: MatDialog) {

  }
  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogContentAddDialog, {
      // data:{dataSource:this.dataSource},
      height: '550px',
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }

  openDialogUser(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogContentUserlistDialog, {
      data:{dataSource:this.dataSource},
      height: '600px',
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }

  ngOnInit(): void {
    this.GetList()
  }

  SendStatusBtn() {
    const config = {
      url: 'http://localhost:8081/postUpdateOrderDate',

    };
    const ToSS: HTMLInputElement = document.getElementById('ToSS') as HTMLInputElement;
    const data = {
      id: this.numberOrder,
      // dateofRecive: ToSS.value,
      status: this.status,
    }

    axios.post(config.url, data, {headers: {'x-mock-match-request-body': true}})
      .then((response) => {
        alert(response.data.message)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
        alert('Не удалось изменить, проверьте номер заказа');
      });

  }
  SendStatusBtnelete() {
    const config = {
      url: 'http://localhost:8081/postdeleteOrderDate',

    };
    const data = {
      id: this.numberOrder,
    }

    axios.post(config.url, data, {headers: {'x-mock-match-request-body': true}})
      .then((response) => {
        alert(response.data.message)
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
        alert('Не удалось изменить, проверьте номер заказа');
      });

  }

  // SendStatusBtnelete() {
  //   const config = {
  //     url: 'http://localhost:8081/postdeleteOrderDate',
  //
  //   };
  //   const data = {
  //     id: this.numberOrder,
  //   }
  //
  //   axios.post(config.url, data, {headers: {'x-mock-match-request-body': true}})
  //     .then((response) => {
  //       alert(response.data.message)
  //       console.log(data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert('Не удалось изменить, проверьте номер заказа');
  //     });
  //
  // }

  async GetList() {

    const config = {
      url: 'http://localhost:8081/getOrder',
      list: []
    };
    await axios.get(config.url)
      .then((response) => {
        console.log(response.data);
        this.dataSource = response.data;

      })
      .catch((error) => {
        console.log(error);
      });

  }

}

@Component({
  selector: 'dialog-content-userlist-dialog',
  templateUrl: 'dialog-content-userlist-dialog.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})

export class DialogContentUserlistDialog implements OnInit{
  displayedColumns: string[] = ['numberofUser', 'name', 'secondname', 'login', 'email'];
  dataSource = ELEMENT_DATA;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ManagerComponent){
  }
  ngOnInit(): void {
    this.GetListUser()
  }
  async GetListUser() {

    const config = {
      url: 'http://localhost:8081/getUser',
      list: []
    };
    await axios.get(config.url)
      .then((response) => {
        console.log(response.data);
        this.dataSource = response.data;

      })
      .catch((error) => {
        console.log(error);
      });
  }
}

@Component({
  selector: 'dialog-content-add-dialog',
  templateUrl: 'dialog-content-add-dialog.html',
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})
export class DialogContentAddDialog {
  name: any;
  description: any;
  price: any;
  treeControl: any;
  hasChild: any;
  dataSource: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ManagerComponent){
  }

  Add() {
    const ToSS :HTMLInputElement = document.getElementById('ToSS') as HTMLInputElement;
    const config = {
      url: 'http://localhost:8081/addgood',

    };
    const data = {
      name: this.name,
      description:this.description,
      price:this.price
    }
    axios.post(config.url, data, { headers: { 'x-mock-match-request-body': true } })
      .then((response) => {
        console.log(response);
        alert(response.data.message)
      })
      .catch((error) => {
        console.log(error);
        alert('Не удалось добавить');
      });
  }
}





