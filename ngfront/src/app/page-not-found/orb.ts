export class Orb {
    private x: number;
    private y: number;
    private scale: number;
    private fill: string;
    private radius: number;
    private xOff: number;
    private yOff: number;
    private inc: number;
    private canvasWidth: number = 0;
    private canvasHeight: number = 0;
  
    constructor(private ctx: CanvasRenderingContext2D, fill: string = '#000000') {
      this.x = 0;
      this.y = 0;
      this.scale = 1;
      this.fill = fill;
      this.radius = 0;
      this.xOff = Math.random() * 1000;
      this.yOff = Math.random() * 1000;
      this.inc = 0.002;
    }
  
    setBounds(width: number, height: number): void {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.x = Math.random() * this.canvasWidth;
      this.y = Math.random() * this.canvasHeight;
      this.radius = Math.random() * (this.canvasHeight / 3 - this.canvasHeight / 6) + this.canvasHeight / 6;
    }
  
    update(): void {
      const xNoise = this.simplexNoise(this.xOff, this.xOff);
      const yNoise = this.simplexNoise(this.yOff, this.yOff);
      const scaleNoise = this.simplexNoise(this.xOff, this.yOff);
  
      this.x = this.map(xNoise, -1, 1, 0, this.canvasWidth);
      this.y = this.map(yNoise, -1, 1, 0, this.canvasHeight);
      this.scale = this.map(scaleNoise, -1, 1, 0.5, 1);
  
      this.xOff += this.inc;
      this.yOff += this.inc;
    }
  
    render(): void {
      this.ctx.save();
      this.ctx.translate(this.x, this.y);
      this.ctx.scale(this.scale, this.scale);
  
      this.ctx.beginPath();
      this.ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
      this.ctx.fillStyle = this.fill;
      this.ctx.fill();
      this.ctx.closePath();
  
      this.ctx.restore();
    }

    private simplexNoise(x: number, y: number): number {
        const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
        const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
      
        const s = (x + y) * F2;
        const i = Math.floor(x + s);
        const j = Math.floor(y + s);
      
        const t = (i + j) * G2;
        const X0 = i - t;
        const Y0 = j - t;
        const x0 = x - X0;
        const y0 = y - Y0;
      
        let i1, j1;
        if (x0 > y0) {
          i1 = 1;
          j1 = 0;
        } else {
          i1 = 0;
          j1 = 1;
        }
      
        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1.0 + 2.0 * G2;
        const y2 = y0 - 1.0 + 2.0 * G2;
      
        const ii = i & 255;
        const jj = j & 255;
      
        const n0 = this.calcGradient(ii + this.calcGradient(jj)) * 2.0 - 1.0;
        const n1 = this.calcGradient(ii + i1 + this.calcGradient(jj + j1)) * 2.0 - 1.0;
        const n2 = this.calcGradient(ii + 1 + this.calcGradient(jj + 1)) * 2.0 - 1.0;
      
        const t0 = 0.5 - x0 * x0 - y0 * y0;
        const t1 = 0.5 - x1 * x1 - y1 * y1;
        const t2 = 0.5 - x2 * x2 - y2 * y2;
      
        let n = 0.0;
        if (t0 >= 0) {
          n += t0 * t0 * t0 * t0 * (n0 * x0 + n0 * y0);
        }
        if (t1 >= 0) {
          n += t1 * t1 * t1 * t1 * (n1 * x1 + n1 * y1);
        }
        if (t2 >= 0) {
          n += t2 * t2 * t2 * t2 * (n2 * x2 + n2 * y2);
        }
      
        return n;
    }
      
    private calcGradient(hash: number): number {
        const gradients = [
            [1, 1],
            [-1, 1],
            [1, -1],
            [-1, -1],
            [1, 0],
            [-1, 0],
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [0, 1],
            [0, -1],
            [0, 1],
            [0, -1],
            [0, 1],
            [0, -1]
            ];
        
        return gradients[hash & 15][0];
    }

    private dot2(g: number[], x: number, y: number): number {
        return g[0] * x + g[1] * y;
    }

    private perm = [
        247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,
        74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54,
        65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64,
        52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213,
        119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104,
        218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106,
        157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156,
        180
    ];

    private map(n: number, start1: number, end1: number, start2: number, end2: number): number {
        return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }
}