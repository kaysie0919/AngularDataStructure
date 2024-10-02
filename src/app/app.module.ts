import { Component, NgModule } from "@angular/core"
import { AppComponent } from "./app.component"
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { StudentlistComponent } from "./components/studentlist/studentlist.component";
import { EmployeelistComponent } from "./components/employeelist/employeelist.component";
import { FruitlistComponent } from "./components/fruitlist/fruitlist.component";
import { CourselistComponent } from "./components/courselist/courselist.component";
import { BooklistComponent } from "./components/booklist/booklist.component";
import { CitylistComponent } from "./components/citylist/citylist.component";
import { MovielistComponent } from "./components/movielist/movielist.component";
import { CarmodellistComponent } from "./components/carmodellist/carmodellist.component";
import { ProductlistComponent } from "./components/productlist/productlist.component";
import { Subject } from "rxjs";
import { SubjectlistComponent } from "./components/subjectlist/subjectlist.component";
import { CountrylistComponent } from "./components/countrylist/countrylist.component";
import { SportslistComponent } from "./components/sportslist/sportslist.component";
import { VagetablelistComponent } from "./components/vagetablelist/vagetablelist.component";
import { AnimallistComponent } from "./components/animallist/animallist.component";
import { ToollistComponent } from "./components/toollist/toollist.component";
import { LanguagelsitComponent } from "./components/languagelsit/languagelsit.component";
import { GamelistComponent } from "./components/gamelist/gamelist.component";
import { SoftwarelistComponent } from "./components/softwarelist/softwarelist.component";




const routes: Routes = [
    {path: '', component: StudentlistComponent},
    {path: 'emplist', component: EmployeelistComponent},
    {path: 'frulist', component: FruitlistComponent},
    {path: 'coulist', component: CourselistComponent},
    {path: 'boolist', component: BooklistComponent},
    {path: 'citlist', component: CitylistComponent},
    {path: 'movlist', component: MovielistComponent},
    {path: 'carlist', component: CarmodellistComponent},
    {path: 'prolist', component: ProductlistComponent},
    {path: 'sublist', component: SubjectlistComponent},
    {path: 'counlist', component: CountrylistComponent},
    {path: 'spolist', component: SportslistComponent},
    {path: 'vaglist', component: VagetablelistComponent},
    {path: 'anilist', component: AnimallistComponent},
    {path: 'toolist', component: ToollistComponent},
    {path: 'lanlist', component: LanguagelsitComponent},
    {path: 'gamlist', component: GamelistComponent},
    {path: 'soflist', component: SoftwarelistComponent},
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
        StudentlistComponent,
        EmployeelistComponent,
        FruitlistComponent,
        CourselistComponent,
        BooklistComponent,
        CitylistComponent,
        MovielistComponent,
        CarmodellistComponent,
        ProductlistComponent,
        SubjectlistComponent,
        CountrylistComponent,
        SportslistComponent,
        VagetablelistComponent,
        AnimallistComponent,
        ToollistComponent,
        LanguagelsitComponent,
        GamelistComponent,
        SoftwarelistComponent,
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}