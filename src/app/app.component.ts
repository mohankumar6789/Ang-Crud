import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from 'src/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angcrud';
  displayedColumns: string[] = ['productName', 'category', 'date', 'freshness', 'price', 'comment', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService){}
  ngOnInit(): void {
    this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(DialogComponent,{
      width:'45%'
    }).afterClosed().subscribe(val=> {
      if( val === 'save')
      this.getAllProducts();
    })
  }
  
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }

  deleteProduct(id:number){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert("Product Deleted Sucessfully")
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting the prdpuct!")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(row : any){
    this.dialog.open(DialogComponent,{
      width:'45%',
      data:row
    }).afterClosed().subscribe(val =>{
      if(val === "update")
      this.getAllProducts();
    })
  }
}

function afterClosed() {
  throw new Error('Function not implemented.');
}

