import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit, AfterViewInit{

  active = null;
  num !:number; 
  @Input() v!: number;
  @ViewChild('testElRef') testEl!: ElementRef ;
  @ViewChild('newElRef') newEl!: ElementRef;
  @ViewChildren('testClass') hamadaCollectionOfEl!: QueryList<ElementRef>;

  constructor() {
    console.log(this.v);
    
    if(this.v ==1){
      console.log('hamada 2');
      
    }
  }

  ngOnInit(): void {
    // this.num = 2;
    if(this.v ==1){
      console.log('hamada 2');
      
    }
    setTimeout(()=>{
      this.num = 3;
    },3000);
    console.log('onInit', this.testEl);
  }
  
  ngAfterViewInit(): void {
    
    console.log('AfterViewInit', this.testEl);
    // this.hamadaCollectionOfEl.forEach((item)=>{
    //   (item.nativeElement as HTMLDivElement).style.fontSize = '40px';
    // })
    // console.log(this.hamadaCollectionOfEl.get(1)?.nativeElement.innerHTML);
    
      
  }

}

