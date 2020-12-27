//creating generic classes

class DataStorage<T extends string | number | boolean> { //limitation is this only works for  primitives data types
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Carmela');
textStorage.addItem('Hanzo');
textStorage.removeItem('Carmela');
console.log(textStorage.getItems());


const flexiStorage = new DataStorage<number | string>();
flexiStorage.addItem(1);
flexiStorage.addItem('Hanzo');
console.log(flexiStorage.getItems());

