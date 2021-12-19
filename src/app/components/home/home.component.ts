import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {questionModel} from "../../models/questionModel.model";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {GetDataService} from "../../services/get-data.service";
import {MatStepper} from "@angular/material/stepper";
import {MatDialog , MatDialogConfig} from "@angular/material/dialog";
import {AlertComponent} from '../popups/alert/alert.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class HomeComponent implements OnInit {
  @ViewChild('stepper') public myStepper: MatStepper | undefined;
  public answer: string = "";
  public questions: Observable<questionModel[]> | undefined;
  public getQuestionsDataObserver: Subscription | undefined;
  public timerValue: number  | undefined;
  public timeleft: number  | undefined;
  public downloadTimerRef: number  | undefined;
  public allQuestions: any;
  private isCorrect: boolean = false;
  private invalidAnswers: boolean = false;
  private localWrongAnswers: number | undefined;

  constructor(
    public matDialog: MatDialog,
    private _formBuilder: FormBuilder,
    private store : Store<{questions : questionModel[]}>,
    private getDataService: GetDataService
  ){}

  ngOnInit() {
    this.initStepperData();
    this.loadData();
    this.questions =  this.store.select(data => data.questions);
  }

  goBack(){
    // @ts-ignore
    this.myStepper.previous();
  }

  goForward(){
    // @ts-ignore
    this.myStepper.next();
  }

  // @ts-ignore
  initStepperData(){
    this.localWrongAnswers= 0;
    this.timeleft = 0;
    this.downloadTimerRef = setInterval(() =>{
      // @ts-ignore
      if(this.timeleft  >= 20){
        // this.store.dispatch({type : 'ADD', payload : this.createQuestion(0)});
        this.timeleft = 0;
        this.invalidAnswers = true;
        this.goForward();
      }
      // @ts-ignore
      this.timerValue = 20 - this.timeleft;
      // @ts-ignore
      this.timeleft += 1;
    }, 1000);
  }

  initTimer(){
    this.timeleft = 0;
    this.timerValue = 20;
    this.invalidAnswers = false;
    this.localWrongAnswers = 0;
  }

  goToselectedIndex(index: number, stepper: MatStepper) {
    stepper.selectedIndex = index - 1;
    this.initTimer();
    let questionNum = new questionModel();
      questionNum.question = "";
      questionNum.answer = "Time Ended";
      questionNum.isCorrect = false;
      questionNum.invalidAnswers = true;
    this.store.dispatch({type : 'CLEAR', payload : []});
  }

  createQuestion(num: number){
    let questionNum = new questionModel();
    questionNum.question = this.allQuestions[num].question;
    questionNum.answer = this.answer;
    questionNum.isCorrect = this.isCorrect;
    questionNum.invalidAnswers = this.invalidAnswers;
    if(this.invalidAnswers){
      questionNum.invalidAnswers = this.invalidAnswers;
      this.invalidAnswers = false;
    }
    return questionNum
  }

  // @ts-ignore
  clickNextBTN(stepper) {
    const step = stepper.selectedIndex;
    switch (step) {

      case 0:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(0)});
        this.initTimer()
        stepper.next();
        break;

      case 1:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(1)});
        this.initTimer();
        stepper.next();
        break;

      case 2:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(2)});
        this.initTimer();
        stepper.next();
        break;

      case 3:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(3)});
        this.initTimer();
        stepper.next();
        break;

      case 4:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(4)});
        this.initTimer();
        stepper.next();
        break;

      case 5:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(5)});
        this.initTimer();
        stepper.next();
        break;

      case 6:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(6)});
        this.initTimer();
        stepper.next();
        break;

      case 7:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(7)});
        this.initTimer();
        stepper.next();
        break;

      case 8:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(8)});
        this.initTimer();
        stepper.next();
        break;

      case 9:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(9)});
        this.initTimer();
        stepper.next();
        break;

      case 10:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(10)});
        this.initTimer();
        stepper.next();
        break;

      case 11:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(11)});
        this.initTimer();
        stepper.next();
        break;

      case 12:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(12)});
        this.initTimer();
        stepper.next();
        break;

      case 13:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(13)});
        this.initTimer();
        stepper.next();
        break;

      case 14:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(14)});
        this.initTimer();
        stepper.next();
        break;

      case 15:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(15)});
        this.initTimer();
        stepper.next();
        break;

      case 16:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(16)});
        this.initTimer();
        stepper.next();
        break;

      case 17:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(17)});
        this.initTimer();
        stepper.next();
        break;

      case 18:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(18)});
        this.initTimer();
        stepper.next();
        break;

      case 19:
        this.store.dispatch({type : 'ADD', payload : this.createQuestion(19)});
        this.initTimer();
        stepper.next();
        break;

      case 20:
        this.localWrongAnswers= 0;
        // this.timeleft = 0;
        this.initTimer();
        // stepper.next();
        break;
    }
    // stepper.next();
  }


  ChosenAnswer(isCorrect: boolean,answer: any, stepper: any) {
      this.answer = answer;
      this.isCorrect = isCorrect;
      if(!this.isCorrect){
            // @ts-ignore
          this.localWrongAnswers  +=  1;
          // @ts-ignore
          if(this.localWrongAnswers >= 4){
            this.openAlertModal("  Too Many mistakes").then((response) => { });
            this.invalidAnswers = true;
            this.clickNextBTN(stepper)
          } else{
            this.openAlertModal("Wrong Answer").then((response) => { });
          }
      } else{
        this.clickNextBTN(stepper)
      }
  }

  loadData(){
    // this.fileCounter = this.files.length
    this.getQuestionsDataObserver = this.getDataService.getFilesData()
      .subscribe(
        (res: any)=>
        {
          this.allQuestions = res;
        }
      );
  }

  openAlertModal(data: any) {
    const promise = new Promise((resolve, reject) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.id = 'global-functions-modal-component-alert';
      dialogConfig.height = '349px';
      dialogConfig.maxHeight = '349px';
      dialogConfig.width = '55%';
      dialogConfig.maxWidth = '650px';
      dialogConfig.data = data ? data : "";
      const modalDialog = this.matDialog.open(AlertComponent, dialogConfig);
      modalDialog.afterClosed().subscribe(result => {
        // console.log('The dialog was closed ------>' + result);
        if (result) {
          resolve(result);
        } else {
          reject(null);
        }
      });
    });
    return promise;
  }

}


