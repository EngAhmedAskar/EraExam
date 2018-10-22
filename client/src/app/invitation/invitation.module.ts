import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationComponent } from './invitation/invitation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvitationComponent]
})
export class InvitationModule { 
  onSubmit(form) {
    console.log(form.value);
  }
}
