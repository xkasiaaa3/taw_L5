import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  public newPost = {
   title: '',
    image: '',
    text: '',
    };

  ngOnInit(): void {
    
  }

  constructor(private dataService: DataService, public router: Router) {
  }

  create() {
    this.dataService.createNewPost(this.newPost).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
      }

}
