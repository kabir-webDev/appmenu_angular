import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
})
export class HeaderComponent implements OnInit {
  setRole(role: string) {
    localStorage.setItem("role", role);
  }
  removeRole() {
    localStorage.removeItem("role");
  }
  constructor() {}

  ngOnInit(): void {}
}
