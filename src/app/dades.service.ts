import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DadesService {

  constructor(public db: AngularFirestore) { }

  ItemRead() {
    return this.db.collection('items').snapshotChanges();
  }

  SingleItemRead(Id) {
    return this.db.collection('items').doc(Id).snapshotChanges();
  }

  ItemInsert(name) {
    this.db.collection('items').add({
      nom: name
    });
  }
  ItemUpdate(id, modname) {
    this.db.collection('items').doc(id).update(
      {
        nom: modname
      }
    );
  }
  ItemDelete(id) {
    this.db.collection('items').doc(id).delete();
  }

}
