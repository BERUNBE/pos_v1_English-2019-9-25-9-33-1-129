'use strict';

describe('pos', () => {

  const inventory = loadAllItems();

  it('should return true when all purchases are valid', () => {
    const purchaseList = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000002',
      'ITEM000003'
    ];
    const result = isAllBarcodesInProductInventory(purchaseList, inventory);

    expect(result).toBe(true);
  });

  it('should return false when purchases includes invalid barcode', () => {
    const purchaseList = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000002',
      'ITEM999999'
    ];
    const result = isAllBarcodesInProductInventory(purchaseList, inventory);

    expect(result).toBe(false);
  });

  it('should get count of given item according to count in purchase list', () => {
    const itemBarcode = 'ITEM000001';
    const purchaseList = ['ITEM000001', 'ITEM000001', 'ITEM000003-2.5', 'ITEM000003'];

    const result = getItemCountAccordingToCount(itemBarcode, purchaseList);

    expect(result).toBe(2);
  });

//   it('should print text', () => {

//     const tags = [
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000001',
//       'ITEM000003-2.5',
//       'ITEM000005',
//       'ITEM000005-2',
//     ];

//     spyOn(console, 'log');

//     printReceipt(tags);

//     const expectText = `***<store earning no money>Receipt ***
// Name：Sprite，Quantity：5 bottles，Unit：3.00(yuan)，Subtotal：12.00(yuan)
// Name：Litchi，Quantity：2.5 pounds，Unit：15.00(yuan)，Subtotal：37.50(yuan)
// Name：Instant Noodles，Quantity：3 bags，Unit：4.50(yuan)，Subtotal：9.00(yuan)
// ----------------------
// Total：58.50(yuan)
// Discounted prices：7.50(yuan)
// **********************`;

//     expect(console.log).toHaveBeenCalledWith(expectText);
//   });
});
