import { Component, OnInit, ViewChild } from '@angular/core';
import {Product} from '../../../../models/product'
import * as d3 from 'd3';
import { ProductsComponent } from 'src/app/products/products.component';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],

})
export class BarComponent implements OnInit {

  electronic=0
  cameras=0
  laptop=0
  accessories=0
  phones=0
  allproducts : Product[] = [];  
  private data = [];
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  sum=0
  constructor(private sharedService:SharedService){}

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
private getData(): void {
   this.allproducts=this.sharedService.getClickEvent();  
  this.allproducts.forEach( e =>{    
    switch(e.category) { 
      case "Electronics": {         
         this.electronic=this.electronic+1;
         break; 
      } 
      case "Phones": { 
         this.phones++;
         break; 
      } 
      case "Cameras": { 
        this.cameras++;
        break; 
     } 
      case "Laptop": { 
      this.laptop++;
      break; 
   } 
   case "Accessories": { 
    this.accessories++;
    break; 
 } 
      default: { 
         break; 
      } 
   }   
  })
  this.data=[
       {"Framework": "electronic", "Stars": this.electronic},
       {"Framework": "accessories", "Stars": this.accessories},
       {"Framework": "laptop", "Stars": this.laptop},
       {"Framework": "phones", "Stars": this.phones},
       {"Framework": "cameras", "Stars": this.cameras}
  ]  
  this.sum=this.electronic+this.accessories+this.laptop+this.phones+this.cameras
}
private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.Framework))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, this.sum])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.Framework))
  .attr("y", d => y(d.Stars))
  .attr("width", x.bandwidth())
  .attr("height", (d) => this.height - y(d.Stars))
  .attr("fill", "#d04a35");
}

ngOnInit(): void {
  this.getData();
  this.createSvg();
  this.drawBars(this.data);
}
}
