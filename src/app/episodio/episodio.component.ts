import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss']
})
export class EpisodioComponent implements OnInit{
  videoId: string = ''; // Armazena o ID do vídeo do YouTube

  constructor(private sanitizer: DomSanitizer) {}
  sanitizeVideoUrl(videoId: string): SafeResourceUrl {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
  

  ngOnInit(): void {
    
    const youtubeLink = 'https://www.youtube.com/watch?v=22R0j8UKRzY';
    this.videoId = this.extractVideoId(youtubeLink);
  }

  extractVideoId(url: string): string {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  }

  getVideoUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`;
  }

}
