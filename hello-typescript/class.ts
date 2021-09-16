// Interface -> paramètre
interface Option {
    autoplay: boolean
    x?: number
    success: (data: string) => void
}

class Demo {

    private _element
    private options : Option

    constructor (options: Option) {
        this.options = options
    }

    set element (value: string) {
        this._element = value
    }

    get element (): string {
        return this._element
    }

}

let d = new Demo({
    autoplay: true,
    x:2,
    success: function (data) {}
})

// Getters & setters are automatically called
d.element = 'Salut'
console.log(d.element);


// Heritage
class Demo2 extends Demo {

    public test () {

    }

}

// Interface class
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }
   
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) {}
  }

