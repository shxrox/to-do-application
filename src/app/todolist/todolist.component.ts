import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {


  taskArray = [{taskaname: 'Brush teeth' , isCompleted: false}]
       constructor(){}

       ngOnInit(): void {
           
       }

       onSubmit(form: NgForm) {
                   console.log(form);

                   this.taskArray.push({
                    taskaname: form.controls['task'].value,
                    isCompleted: false 
                   })
       
       form.reset();
      }

      onDelete(index: number){
        console.log(index);

        this.taskArray.splice(index, 1)
      }

      onCheck(index: number){
        console.log(this.taskArray);
         this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
      
      }
          

      

    }