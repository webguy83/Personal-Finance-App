import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-finance-app';

  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in');
      } else {
        console.log('No user is signed in');
      }
    });
  }
}
