import { Component } from '@angular/core';

class Game {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BowlingKata-OO';

  public newGame() {
    const game = new Game();
  }
}
