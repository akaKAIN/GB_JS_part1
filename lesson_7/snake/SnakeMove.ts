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

    protected doStepIteration(snakeBody: Point[]): Point[] {
        const head = this.getHead(snakeBody)
        const nextCell = this.calculateNewPositionPoint(head)
        if (this.validateStep(nextCell)) {
            snakeBody = this.makeStep(snakeBody)
        }
        return snakeBody
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
        switch (this.currentDirection) {
            case 'up':
                point.y--
                break
            case 'right':
                point.x++
                break
            case 'down':
                point.y++
                break
            case 'left':
                point.x--
        }
        return point
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

    private addHead(snakeBody: Point[]): Point[] {
        const head = this.getHead(snakeBody)
        const newCell = this.calculateNewPositionPoint(head)
        snakeBody.push(newCell)
        return snakeBody
    }

    private delTail(snakeBody: Point[]): Point[] {
        snakeBody.shift()
        return snakeBody
    }

    private validateStep(nextPoint: Point): boolean {
        switch (this.getCellClass(nextPoint)) {
            case undefined:
            case null:
                return true
            case 'snake':
                return false
            default:
                return false
        }
    }

    private makeStep(snakeBody: Point[]): Point[] {
        return this.delTail(this.addHead(snakeBody))
    }

    // Одна из предполагаемых проверок
    // cellIsSnake(point: Point): boolean {
    //     return this.getCellClass(point) === 'snake'
    // }
}
