import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit {
 @Input('srvElement') element: {type: string, name: string, content: string}
 @Input() name: string
 @ContentChild('contentP', {static: true}) paragraph: ElementRef

 ngOnInit() {
  
 }

}
