import { Component, OnInit } from '@angular/core';
import { DataFeedbackService } from './data-feedback.service';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
interface feedbackData {
  "name":string,"age":number,"gender":string,"mobile":string, "email": string, "response":[{"question":number,"answers":[number],"feedback":"test feedback"}]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  feedbackData:feedbackData;
  questionBank;
  submitted = false;


  constructor(private dataFeedService: DataFeedbackService,
    private formBuilder: FormBuilder) { }

 ngOnInit(){

this.onDataCall();

this.registerForm = this.formBuilder.group({
  firstName0: ['',Validators.required],
  firstName1: ['',Validators.required],
  firstName2: ['',Validators.required],
  firstName3: ['',Validators.required],
  firstName4: ['',Validators.required],
  firstName5: ['',Validators.required],
  firstName6: ['',Validators.required],
  firstName7: ['',Validators.required],
  firstName8: ['',Validators.required],
  firstName9: ['',Validators.required],
  firstName10: ['',Validators.required],
  firstName11: ['',Validators.required],
  firstName12: ['',Validators.required],
  firstName13: ['',Validators.required],
  firstName14: ['',Validators.required],
  firstName15: ['',Validators.required],
  firstName16: ['',Validators.required],
  firstName17: ['',Validators.required],
  firstName18: ['',Validators.required],
  firstName19: ['',Validators.required],
  firstName20: ['',Validators.required],
  firstName21: ['',Validators.required],
  firstName22: ['',Validators.required],
  firstName23: ['',Validators.required],
  firstName24: ['',Validators.required],
  firstName25: ['',Validators.required],
  firstName26: ['',Validators.required],
  firstName27: ['',Validators.required],
  firstName28: ['',Validators.required],
  firstName29: ['',Validators.required],
  firstName30: ['',Validators.required],
  firstName31: ['',Validators.required],
  firstName32: ['',Validators.required],
  firstName33: ['',Validators.required],
  firstName34: ['',Validators.required],
  firstName35: ['',Validators.required],
  firstName36: ['',Validators.required]
});
 }


 onDataCall(){
  this.dataFeedService.sendGetRequest().subscribe((data)=>{
    console.log(data['questions']);
    this.questionBank = data['questions'];

  });
}

onDataSubmit(feedbackData){
  console.log(feedbackData);
  this.dataFeedService.sendPostRequest(feedbackData);
}

get f() { return this.registerForm.controls; }
onSubmit() {
  this.feedbackData = {
    "name":'john',"age":23,"gender":"male","mobile":"8955455", "email": "tojp@gmail.com", "response":[{"question":45,"answers":[this.registerForm.value.firstName0],"feedback":"test feedback"}]
  }
  this.onDataSubmit(this.feedbackData);
 console.log(this.registerForm.value);

alert('sucessfully submit');
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

 
}



}
