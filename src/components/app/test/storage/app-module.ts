import { Component, NgModule } from '@angular/core';
import { IonicApp, IonicModule, Storage, LocalStorage, SqlStorage } from '../../../..';


@Component({
  templateUrl: 'main.html',
  providers: [Storage]
})
class E2EApp {
  constructor(public storage: Storage) {
  }

  getItem() {
    this.storage.get('name').then(value => {
      alert('Your name is: ' + value);
    });
  }

  setItem() {
    let name = prompt('Your name?');

    this.storage.set('name', name);
  }

  removeItem() {
    this.storage.remove('name');
  }
  keys() {
    this.storage.keys().then(keys => {
      console.log('KEYS', keys);
    });
  }
  length() {
    this.storage.length().then(len => {
      console.log('KEYS', len);
    })
  }
  forEach() {
    this.storage.forEach((value, key, index) => {
      console.log('ITER', value, key, index);
    })
  }
}

@NgModule({
  declarations: [
    E2EApp
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
