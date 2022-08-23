import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({

    selector:'event-thumbnail',

    templateUrl: './event-thumbnail.component.html',

    styles: [`

   

    .green {color: blue !important }

    .thumbnail {min-height : 210px;}

    .bold { font-weight : bold; }

.pad-left{margin-left:10px;}

.well div{color: blue;}

    `]

})

export class EventThumbnailComponent{

    @Input() event:any

    @Output() eventClicked=new EventEmitter(); // to pass data from parent to child

   

    getStartTimeStyle():any {

        if (this.event && this.event.time === '8:00 am')

          return {color: 'red', 'font-weight': 'bold'}

        return {}

      }



}


   



