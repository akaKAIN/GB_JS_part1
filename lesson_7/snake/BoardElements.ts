class BoardElements extends BaseElement {
    boardObjects: Map<string, string> = new Map();

    constructor() {
        super()
        this.fillGameObjects()
    }

    protected get(key: string): string | undefined {
        return this.boardObjects.get(key)
    }

    private set(key: string, val: string): void {
        this.boardObjects.set(key, val)
    }

    private fillGameObjects() {
        this.set('snake', 'snake')
        this.set('food-fire', 'fire')
        this.set('food-water', 'water')
        this.set('food-wood', 'wood')
    }
}
