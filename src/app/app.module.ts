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
import { PhonecontactlistComponent } from "./components/phonecontactlist/phonecontactlist.component";
import { MusicplaylistComponent } from "./components/musicplaylist/musicplaylist.component";
import { FoodmenuComponent } from "./components/foodmenu/foodmenu.component";
import { GrocerylistComponent } from "./components/grocerylist/grocerylist.component";
import { ClassroomlistComponent } from "./components/classroomlist/classroomlist.component";
import { InventorylistComponent } from "./components/inventorylist/inventorylist.component";
import { LecturelistComponent } from "./components/lecturelist/lecturelist.component";
import { StationerylistComponent } from "./components/stationerylist/stationerylist.component";
import { FlowerlistComponent } from "./components/flowerlist/flowerlist.component";
import { DestinationlistComponent } from "./components/destinationlist/destinationlist.component";
import { LaptoplistComponent } from "./components/laptoplist/laptoplist.component";
import { LaptopspeclistComponent } from "./components/laptopspeclist/laptopspeclist.component";
import { ComputerhardwarelistComponent } from "./components/computerhardwarelist/computerhardwarelist.component";
import { MobileapplistComponent } from "./components/mobileapplist/mobileapplist.component";
import { VideolistComponent } from "./components/videolist/videolist.component";
import { TvshowlistComponent } from "./components/tvshowlist/tvshowlist.component";
import { FurniturelistComponent } from "./components/furniturelist/furniturelist.component";
import { AccessorylistComponent } from "./components/accessorylist/accessorylist.component";
import { BuildinglistComponent } from "./components/buildinglist/buildinglist.component";
import { PaintinglistComponent } from "./components/paintinglist/paintinglist.component";
import { ArtistlistComponent } from "./components/artistlist/artistlist.component";





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
    {path: 'pholist', component: PhonecontactlistComponent},
    {path: 'muslist', component: MusicplaylistComponent},
    {path: 'foomenu', component: FoodmenuComponent},
    {path: 'grolist', component: GrocerylistComponent},
    {path: 'clalist', component: ClassroomlistComponent},
    {path: 'invlist', component: InventorylistComponent},
    {path: 'leclist', component: LecturelistComponent},
    {path: 'stalist', component: StationerylistComponent},
    {path: 'flolist', component: FlowerlistComponent},
    {path: 'deslist', component: DestinationlistComponent},
    {path: 'laplist', component: LaptoplistComponent},
    {path: 'spelist', component: LaptopspeclistComponent},
    {path: 'comlist', component: ComputerhardwarelistComponent},
    {path: 'moblist', component: MobileapplistComponent},
    {path: 'vidlist', component: VideolistComponent},
    {path: 'tvslist', component: TvshowlistComponent},
    {path: 'furlist', component: FurniturelistComponent},
    {path: 'acclist', component: AccessorylistComponent},
    {path: 'builist', component: BuildinglistComponent},
    {path: 'pailist', component: PaintinglistComponent},
    {path: 'artlist', component: ArtistlistComponent},
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
        PhonecontactlistComponent,
        MusicplaylistComponent,
        FoodmenuComponent,
        GrocerylistComponent,
        ClassroomlistComponent,
        InventorylistComponent,
        LecturelistComponent,
        StationerylistComponent,
        FlowerlistComponent,
        DestinationlistComponent,
        LaptoplistComponent,
        LaptopspeclistComponent,
        ComputerhardwarelistComponent,
        MobileapplistComponent,
        VideolistComponent,
        TvshowlistComponent,
        FurniturelistComponent,
        AccessorylistComponent,
        BuildinglistComponent,
        PaintinglistComponent,
        ArtistlistComponent,
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}