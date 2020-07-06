const standard = new Item('pizza', 4, 9)
const beer = new Item('beer', 1, 7)
const agedBrie = new Item('Aged Brie', 30, 49)
const backstage = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 23)
const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 7, 19)
const conjured = new Item('Conjured', 13, 41)
const items = [standard, beer, agedBrie, backstage, sulfuras, conjured]
const shop = new Shop(items)

shop.updateQuality()

shop.items.forEach(item => {
  console.log(item)
})

original:
original.js: Item {name: "pizza", sellIn: 3, quality: 8}
original.js: Item {name: "beer", sellIn: 0, quality: 6}
original.js: Item {name: "Aged Brie", sellIn: 29, quality: 50}
original.js: Item {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 8, quality: 25}
original.js: Item {name: "Sulfuras, Hand of Ragnaros", sellIn: 7, quality: 19}
original.js: Item {name: "Conjured", sellIn: 12, quality: 40}

refactored:
refactored.js: Item {name: "pizza", sellIn: 3, quality: 8}
refactored.js: Item {name: "beer", sellIn: 0, quality: 6}
refactored.js: Item {name: "Aged Brie", sellIn: 29, quality: 50}
refactored.js: Item {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 8, quality: 25}
refactored.js: Item {name: "Sulfuras, Hand of Ragnaros", sellIn: 7, quality: 19}
refactored.js: Item {name: "Conjured", sellIn: 12, quality: 40}
