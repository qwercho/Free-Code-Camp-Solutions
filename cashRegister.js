function checkCashRegister(price, cash, cid) {
    let amtDue = cash - price;
    let customersChange = [];
    let values = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
    let reduction;
    let total = 0;

    for(let i = 0; i < cid.length; i++)
        total += cid[i][1];

    if (amtDue === total){
        return {
            status: 'CLOSED',
            change: cid
        }
    }

    for(let i = values.length - 1; i >= 0; i--){
        checkSlot(values[i], cid[i]);
    }

    function checkSlot(val, arr){
        if(arr[1] < amtDue && arr[1] !== 0){
            amtDue -= arr[1];
            customersChange.push(arr);
            return;
        }
        if(val <= amtDue && arr[1] > val){
            reduction = Math.trunc(amtDue / val);
            amtDue -= reduction * val;
            amtDue = amtDue.toFixed(2);
            arr[1] = reduction * val;
            customersChange.push(arr);
        }
    }

    if(total > cash){
        return {
            status: 'OPEN',
            change: customersChange
        }
    } else {
        return {
            status: 'INSUFFICIENT_FUNDS',
            change: []
        }
    }
}