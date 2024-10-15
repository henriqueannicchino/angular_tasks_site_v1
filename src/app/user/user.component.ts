import { Component, computed, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string
  // @Input({ required: true }) name!: string
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  // @Output() select = new EventEmitter();
  select = output<string>();

  imagePath = computed(() => {
    return 'users/' + this.avatar();
  });

  // get imagePath(){
  //   return  'users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.id());
  }
}
