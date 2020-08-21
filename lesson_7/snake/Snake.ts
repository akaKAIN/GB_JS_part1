class Snake extends SnakeMove{
    body: Point[]
    len: number;
    element: string;

    constructor(body: Point[]) {
        super()
        this.body = body
        this.len = body.length
        this.element = 'snake'
    }

    doMove() {
        this.doStepIteration(this.body)
        this.calculateLength()
    }

    private calculateLength() {
        this.len = this.body.length
    }
}
