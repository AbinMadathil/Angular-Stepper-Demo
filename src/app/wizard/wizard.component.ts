import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css'
})
export class WizardComponent implements AfterContentInit{
  currentIndex = 0;
  @ContentChildren(WizardStepComponent) steps : QueryList<WizardStepComponent> = new QueryList<WizardStepComponent>();
  ngAfterContentInit(): void {
    this.steps.toArray()[this.currentIndex].active = true;
  }
  public onPrev(){
    if(this.currentIndex > 0)
    {
      this.steps.toArray()[this.currentIndex].active = false;
      this.currentIndex--;
      this.steps.toArray()[this.currentIndex].active = true;
    }
  }
  public onNext(){
    if(this.currentIndex < this.steps.length-1){
      this.steps.toArray()[this.currentIndex].active = false;
      this.currentIndex++;
      this.steps.toArray()[this.currentIndex].active = true;
    }
  }
}
