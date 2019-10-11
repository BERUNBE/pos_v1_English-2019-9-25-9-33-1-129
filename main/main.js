'use strict';

function isAllBarcodesInProductInventory(purchaseList, inventory) {
    const inventoryBarcodes = inventory.map(item => item.barcode);
    console.log(purchaseList);
    console.log(inventoryBarcodes);
    for(let barcode of purchaseList) {
        if (!inventoryBarcodes.includes(barcode)) {
            return false;
        }
    }
    return true;
}

function getItemCountAccordingToCount(itemBarcode, purchaseList) {
    return purchaseList.filter(barcode => barcode == itemBarcode).length;
}