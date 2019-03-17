import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  data = new Array(50);
  fabTop: FAB[] = [
    { color: 'facebook', logo: 'logo-facebook' },
    { color: 'twitter', logo: 'logo-facebook' },
    { color: 'youtube', logo: 'logo-facebook' }
  ];

  fabStart: FAB[] = [
    { color: 'vimeo', logo: 'logo-vimeo' },
    { color: 'google', logo: 'logo-google' },
    { color: 'github', logo: 'logo-github' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface FAB {
  color: string;
  logo: string;
}
