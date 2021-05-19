import { Component, Input, OnInit } from '@angular/core';

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
  public person = {
    id: 1,
    name: 'Alex Green',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.E45HCyveqDL44p8lmvQL9AAAAA&pid=Api&P=0',
  } 

  constructor(){}

  ngOnInit(){
   
  }

  addComment(comment:CommentNode){
    comment.addAnwser(new CommentNode(this.text, this.comments[0].imgUrl));      
    comment.isOpen = false;
    this.text="";
  }

  openCommentText(comment:any){
    comment.isOpen = !comment.isOpen;
  }

  remove(comment:CommentNode){    
    let index = this.comments.indexOf(comment);
    this.comments = this.comments.splice(index,1);        
  }

}
