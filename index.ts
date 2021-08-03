const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 3 
const sizeFactor : number = 3.2 
const shrinkSizeFactor : number = 11.2 
const scGap : number = 0.03 / parts 
const delay : number = 20 
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#B71C1C",
    "#311B92",
    "#64DD17",
    "#C51162",
    "#E65100"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}
