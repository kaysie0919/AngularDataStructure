import { Component, NgModule } from "@angular/core"
import { AppComponent } from "./app.component"
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";




const routes: Routes = [
    {path: '', component: AppComponent},
]

@NgModule ({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        FormsModule,
    ],

    declarations: [
        AppComponent,
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}