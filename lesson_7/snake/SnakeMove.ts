class SnakeMove {
    readonly directionSets: string[] = ['up', 'right', 'down', 'left', 'up', 'right', 'down', 'left'];
    readonly directions: string[] = ['up', 'right', 'down', 'left'];
    readonly keyBoards: string[] = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    directionMap: Map<string, string>;
    currentDirection: string = 'down';

    constructor() {
        this.directionMap = this.fillDirectionMap()
        this.init()
    }

    protected doStepIteration(snakeBody: Point[]): void{
        const head = this.getHead(snakeBody)
        const nextCell = this.calculateNewPositionPoint(head)
        if (this.validateStep(nextCell)) {
            this.makeStep(snakeBody)
        } // else { TODO: false result logic
    }

    private init() {
        this.initKeyDirectionEventListener()
    }

    private initKeyDirectionEventListener(): void {
        document.addEventListener('keydown', this.directionHandler.bind(this))
    }

    private fillDirectionMap(): Map<string, string> {
        const map = new Map()
        for (let i = 0; i < 4; i++) {
            map.set(this.keyBoards[i], this.directions[i])
        }
        return map
    }

    private directionHandler(e: KeyboardEvent) {
        if (this.keyBoards.includes(e.key)) {
            e.preventDefault()
            const direction = this.directionMap.get(e.key)

            if (direction !== undefined && this.validDirections(direction).includes(this.currentDirection)) {
                this.currentDirection = direction
            }
        }
    }

    private validDirections(newDirection: string) {
        let forwardInd = this.directionSets.indexOf(newDirection)
        if (forwardInd === 0) {
            forwardInd = 4
        }
        return this.directionSets.slice(forwardInd - 1, forwardInd + 2)
    }

    // TODO: Добавлить проверку, для избежания выхода за пределы поля
    protected calculateNewPositionPoint(point: Point): Point {
        let x = point.x
        let y = point.y
        switch (this.currentDirection) {
            case 'up':
                y--
                break
            case 'right':
                x++
                break
            case 'down':
                y++
                break
            case 'left':
                x--
        }
        return new Point(x, y)
    }

    private getCellClass(point: Point): string | null {
        const forwardCellEl = this.calculateNewPositionPoint(point).getPointElement()
        if (forwardCellEl) {
            return forwardCellEl.getAttribute('class')
        }
        return null
    }

    private getHead(snakeBody: Point[]): Point {
        return snakeBody.slice(-1)[0]
    }

    private addHead(snakeBody: Point[]): void{
        const head = this.getHead(snakeBody)
        const newHead = this.calculateNewPositionPoint(head)
        snakeBody.push(newHead)
    }

    delTail(snakeBody: Point[], isTotal: boolean = false): void{
        if (isTotal) {
            snakeBody.forEach(partOfTail => partOfTail.cleanPointElement())
            snakeBody = []
        }
        const tail = snakeBody.shift()
        tail?.cleanPointElement()
    }

    private validateStep(nextPoint: Point): boolean {
        switch (this.getCellClass(nextPoint)) {
            case undefined:
            case null:
                return true
            case 'food-fire' || 'food-water' || 'food-wood':
                return true
            case 'snake':
                return false
            default:
                return false
        }
    }

    private makeStep(snakeBody: Point[]):void {
        this.addHead(snakeBody)
        this.delTail(snakeBody)
    }

    eatFood() {

    }

    // Одна из предполагаемых проверок
    // cellIsSnake(point: Point): boolean {
    //     return this.getCellClass(point) === 'snake'
    // }
}
