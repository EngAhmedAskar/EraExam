import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvitationComponent } from "./invitation.component";
import { InvitationRoutingModule } from "./invitation-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "@app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InvitationService } from "./invitation.service";

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MaterialModule, InvitationRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [InvitationComponent],
  providers: [InvitationService]
})
export class InvitationModule {}
