import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/data-model';

export class CommentNode {
  text:string ='';
  imgUrl:string ='';
  anwsers:CommentNode[] = [];
  isOpen:boolean =false;

  
  
  constructor(text:string, imgUrl : string){
    this.text = text;
    this.imgUrl = imgUrl
  }

  addAnwser(newComment:CommentNode){
    if(newComment.text){
      this.anwsers.push(newComment);
    }
  }

  removeComment(newComment:CommentNode){
    let index = this.anwsers.indexOf(newComment);
    if(~index){
      this.anwsers.slice(index,1);
    }
  }
}

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input()
  comments:CommentNode[] = [];
  text:string = '';
  // image will be added from the user profile
  public person : Person = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
  } 

  constructor(){}

  ngOnInit(){
   
  }

  // Comment will be pushed into the comment vairable
  addComment(comment:CommentNode){
    comment.addAnwser(new CommentNode(this.text, this.comments[0].imgUrl));      
    comment.isOpen = false;
    this.text="";
  }

  openCommentText(comment:any){
    comment.isOpen = !comment.isOpen;
  }

  // comment will be reved based on index
  remove(comment:CommentNode){    
    let index = this.comments.indexOf(comment);
    this.comments = this.comments.splice(index,1);        
  }

}
