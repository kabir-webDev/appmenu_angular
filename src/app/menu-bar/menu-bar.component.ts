import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.less"],
})

// localsetItem: string | null;
// constructor() {
// this.localsetItem=localStorage.getItem("todos")
// if(this.localsetItem == null)
// {
//   this.todos  = [];
// }
// else
//     {
//   this.todos=JSON.parse(this.localsetItem);
//     }
//  }
export class MenuBarComponent implements OnInit {
  @Output() appFunction: EventEmitter<any> = new EventEmitter();

  displayElement: boolean = true;
  localsetItem: string | null = "";
  role: any = "";
  saved = "";
  items: any[] = [];

  item1 = ["Activity", "Calls", "Files", "Chat", "Calender", "Shifts", "Time"];
  item2 = ["Activity", "Files", "Calls", "Files", "Calls"];
  item3 = ["Files", "Files", "Calls"];

  constructor() {}

  showHide() {
    this.displayElement = !this.displayElement;
  }

  ngOnInit(): void {
    this.appFunction.emit();
    this.dataCall();
  }
  dataCall() {
    if (this.role === "developer") {
      this.items = this.item2;
    } else if (this.role === "designer") {
      this.items = this.item3;
    } else if (this.role === "admin") {
      this.items = this.item1;
    } else {
      this.items = this.item2;
    }
  }
}
