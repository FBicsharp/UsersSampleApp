import { Component, Input, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {



  constructor() { 
    
    console.debug('myCustomComponent');
  }

  ngOnInit(): void {
    console.debug('myCustomComponent');
  }

}
