import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "../app.component";

@NgModule({
    declarations:[UserInputComponent],
    imports:[FormsModule],
    bootstrap:[AppComponent],
    exports:[UserInputComponent],
})

export class UserInputModule{}