import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	todos = [
	{
		name:"Learn Ionic",
		description:"Learn Multiple page",
		place:"Level 6  VSQ",
		completed:true
	},
	{
		name:"Do Freecodecamp",
		description:"Finish Javascript Exercise",
		place:"Home",
		completed:false
	},
	{
		name:"Watch movies",
		description:"Joker",
		place:"TGV",
		completed:false
	}]

  constructor() {}
  markdone(todo){

  }
  delete(todo){
  	
  }

}
