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

class DrawingUtil {
    
    static drawBarCreateThenShrink(context : CanvasRenderingContext2D,  scale : number) {
        const size : number = Math.min(w, h) / sizeFactor
        const shrinkSize : number = Math.min(w, h) / shrinkSizeFactor
        const sc1 : number = ScaleUtil.divideScale(scale, 0, parts)
        const sc2 : number = ScaleUtil.divideScale(scale, 1, parts)
        const sc3 : number = ScaleUtil.divideScale(scale, 2, parts)
        context.save()
        context.fillRect(w * sc3, 0, w * (sc1 - sc3), size - (size - shrinkSize) * sc2)
        context.restore()
    }

    static drawBCTSNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.fillStyle = colors[i]
        DrawingUtil.drawBarCreateThenShrink(context, scale)
    }
}
