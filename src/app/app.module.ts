import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results";
import { FormsModule } from "@angular/forms";
import { UserInputModule } from "./user-input/user-input.module";
// import { CurrencyPipe } from "@angular/common";

@NgModule({
declarations:[
     AppComponent,
     HeaderComponent,
     InvestmentResultsComponent,
],
   imports:[FormsModule ,UserInputModule, BrowserModule],
   bootstrap:[AppComponent]
})

export class AppModule{

}