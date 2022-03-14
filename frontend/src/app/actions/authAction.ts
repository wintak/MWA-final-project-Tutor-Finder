import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class authActions {

    loadedUsers(users:any) {
        console.log(users);
        return { type: ADDED_USER, payload:users};
    }
  
}
export const ADDED_USER = 'ADDED_USER';


