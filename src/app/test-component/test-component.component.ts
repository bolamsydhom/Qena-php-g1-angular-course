import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable, Subscriber, Subscription, TeardownLogic } from 'rxjs';
import { ProductService } from '../_services/product.service';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit, AfterViewInit, OnDestroy {
  active = null;
  num!: number;
  @Input() v!: number;
  @ViewChild('testElRef') testEl!: ElementRef;
  @ViewChild('newElRef') newEl!: ElementRef;
  @ViewChildren('testClass') hamadaCollectionOfEl!: QueryList<ElementRef>;

  subscribtionArray: Subscription[] = [];

  constructor(private productService: ProductService) {
    // console.log(this.v);

    // if (this.v == 1) {
    //   console.log('hamada 2');
    // }
  }
  // myPromise(resolve: (value: unknown) => void, reject: (reason: any) => void) {
  //   //code logical operation
  //   console.log('inside the promise');

  //   const x = 4,
  //     y = 5;

  //   if (x + y == 10) {
  //     console.log('inside the if');
      
  //     resolve(x + y);
  //   } else {
  //     console.log('inside the else');
  //     reject('Unexpected Error');
  //   }
  // }

  myObservable(observer: Subscriber<number>) {

    console.log('inside the promise');

    const x = 4,
          y = 5;

    if (x + y == 10) {
      console.log('inside the if');
    
      observer.next(x+y);
    } else {
      console.log('inside the else');

      observer.error('Unexpected Error');
    }
    observer.complete();
  }
  ngOnInit(): void {

    setInterval(()=>{
      this.productService.testEmit({
        id: 1,
        name: 'Photo Camera',
        price: 100,
        discount: 10,
        imageUrl: 'https://picsum.photos/200/300',
        description: 'test',
      })
    }, 3000)









    const obser = new Observable(this.myObservable);
    this.subscribtionArray.push(obser.subscribe());
    obser.subscribe(
      (res)=>{console.log(res);
      },
      (err)=>{console.log(err);
      },
      ()=>{console.log('has been completed');
      }
    )







    // const promise = new Promise(this.myPromise);
    // promise.then((result)=>{console.log(result);
    // })
    // promise.catch((err)=> console.log(err));









    // this.num = 2;
    // if (this.v == 1) {
    //   console.log('hamada 2');
    // }
    // setTimeout(() => {
    //   this.num = 3;
    // }, 3000);
    // console.log('onInit', this.testEl);
  }

  ngAfterViewInit(): void {
    // console.log('AfterViewInit', this.testEl);
    // this.hamadaCollectionOfEl.forEach((item)=>{
    //   (item.nativeElement as HTMLDivElement).style.fontSize = '40px';
    // })
    // console.log(this.hamadaCollectionOfEl.get(1)?.nativeElement.innerHTML);
  }

  fun() {
    //async 
    // wait to fetch data from backend
    // const num
  }
  func2() {
    //await 
    // num + 5
  }

  ngOnDestroy(): void {
      this.subscribtionArray.forEach((s)=>{s.unsubscribe()})
  }


}
