import { Component, computed, EventEmitter, input, output } from '@angular/core';

interface IUser {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // @Input({ required: true }) avatar!: string
  // @Input({ required: true }) name!: string
  user = input.required<IUser>()
  // @Output() select = new EventEmitter<string>();
  select = output<string>();

  imagePath = computed(() => {
    return 'users/' + this.user().avatar;
  });

  // get imagePath(){
  //   return  'users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
