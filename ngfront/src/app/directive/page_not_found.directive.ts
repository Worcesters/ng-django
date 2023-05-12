import { Directive, ElementRef, Input, OnChanges, OnDestroy } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Directive({
  selector: '[appPageNotFound],[anime]'
})
export class PageNotFoundDirective implements OnChanges, OnDestroy {

  @Input() anime?: anime.AnimeParams | null = null;
  private animeInstance?: anime.AnimeInstance;

  constructor(private elRef: ElementRef) {}

  ngOnDestroy(): void {
    this.dispose();
  }

  ngOnChanges(): void {
    this.dispose();
    if (this.anime) {
      this.animeInstance = anime({
        targets: this.elRef.nativeElement,
        ...this.anime
      });
    }
  }

  private dispose(): void {
    if (this.animeInstance) {
      this.animeInstance.pause();
      this.animeInstance = undefined;
    }
  }
}
