import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Orb } from './orb';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  @ViewChild('orbCanvas', { static: true }) orbCanvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private orbs: Orb[] = [];

  ngOnInit(): void {
    this.initializeCanvas();
    this.createOrbs();
    this.animate();
  }

  private initializeCanvas(): void {
    const orbCanvasElement = this.orbCanvas.nativeElement;
    this.ctx = orbCanvasElement.getContext('2d')!;
    this.adjustCanvasSize();
    window.addEventListener('resize', () => this.adjustCanvasSize());
  }

  private adjustCanvasSize(): void {
    const orbCanvasElement = this.orbCanvas.nativeElement;
    orbCanvasElement.width = orbCanvasElement.offsetWidth;
    orbCanvasElement.height = orbCanvasElement.offsetHeight;
    this.orbs.forEach(orb => orb.setBounds(orbCanvasElement.width, orbCanvasElement.height));
  }

  private createOrbs(): void {
    const numOrbs = 10;
    for (let i = 0; i < numOrbs; i++) {
      const orb = new Orb(this.ctx, this.getRandomColor());
      orb.setBounds(this.orbCanvas.nativeElement.width, this.orbCanvas.nativeElement.height);
      this.orbs.push(orb);
    }
  }

  private getRandomColor(): string {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 95;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.orbCanvas.nativeElement.width, this.orbCanvas.nativeElement.height);
    this.orbs.forEach(orb => {
      orb.update();
      orb.render();
    });

    requestAnimationFrame(() => this.animate());
  }
}
