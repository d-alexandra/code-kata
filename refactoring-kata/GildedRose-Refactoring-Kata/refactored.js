class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    this.items.forEach(item => {
      const modifiedItem = this.createModifiedItem(item)
      modifiedItem.updateValue()
    })
  }

  createModifiedItem (item) {
    if (item.name === 'Aged Brie') return new AgedBrieItem(item)
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') return new BackstageItem(item)
    if (item.name === 'Sulfuras, Hand of Ragnaros') return new SulfurasItem(item)
    if (item.name === 'Conjured') return new ConjuredItem(item)
    return new StandardItem(item)
  }
}

class ModifiedItem {
  constructor (item) {
    this.item = item
  }
}

class StandardItem extends ModifiedItem {
  super (item) {}
  updateValue () {
    if (this.item === null) {
      return
    }
    if (this.item.sellIn <= 0) {
      this.item.sellIn = 0
    } else {
      this.item.sellIn -= 1
    }
    this.item.quality -= 1
  }
}

class AgedBrieItem extends ModifiedItem {
  super (item) {}
  updateValue () {
    if (this.item.quality < 50) this.item.quality += 1
    this.item.sellIn -= 1
  }
}

class BackstageItem extends ModifiedItem {
  super (item) {}
  updateValue () {
    this.item.sellIn -= 1
    if (this.item.sellIn > 10) {
      this.item.quality += 1
    } else if (this.item.sellIn > 5) {
      this.item.quality += 2
    } else if (this.item.sellIn > 0) {
      this.item.quality += 3
    } else {
      this.item.quality = 0
    }
  }
}

class SulfurasItem extends ModifiedItem {
  super (item) {}
  updateValue () {}
}

class ConjuredItem extends ModifiedItem {
  super (item) {}
  updateValue () {
    this.item.sellIn -= 1
    this.item.quality -= 1
  }
}
