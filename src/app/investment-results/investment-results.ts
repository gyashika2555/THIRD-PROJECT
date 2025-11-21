import { Component ,inject , computed} from '@angular/core';
import { InvestmentServiceComponent } from '../investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  //  imports: [CurrencyPipe],
  standalone:false,
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResultsComponent {

 private investmentService=inject(InvestmentServiceComponent);

  results=computed (() => this.investmentService.resultData());
  // get results(){
  //   return this.investmentService.resultData;
  // }

  // results= input<{
  //     year:number,
  //           interest:number,
  //           valueEndOfYear:number,
  //           annualInvestment:number,
  //           totalInterest:number,
  //           totalAmountInvested:number,
  // } [] >()

  // @Input()  results?:{
  //           year:number,
  //           interest:number,
  //           valueEndOfYear:number,
  //           annualInvestment:number,
  //           totalInterest:number,
  //           totalAmountInvested:number,
  // }[]

}
