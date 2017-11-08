import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SongsComponent } from './songs.component';
import { SongIndexComponent } from './song-index/song-index.component';
import { SongNewComponent } from './song-new/song-new.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import { SongShowComponent } from './song-show/song-show.component';
import { SongsService } from './songs.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  	SongIndexComponent, 
  	SongsComponent,
  	SongNewComponent, 
  	SongEditComponent, 
  	SongShowComponent
  ],
  providers: [SongsService]
})
export class SongsModule { }
