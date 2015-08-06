var sut = new AzurePortalNg.BladeList(null, null, null, null, null);
//// --- One target, one expected
//// TEST 1
//var result1 = sut.onFilter('Harry', 'h');
//if (result1 !== true) { console.log('> Test 1: Should be true'); } else { console.log('> Test 1 sucessfull'); }
//// TEST 2
//var result2 = sut.onFilter('Harry', 'b');
//if (result2 !== false) { console.log('> Test 2: Should be false'); } else { console.log('> Test 2 sucessfull'); }
//// TEST 3
//var result3 = sut.onFilter(1001, '1');
//if (result3 !== true) { console.log('> Test 3: Should be true'); } else { console.log('> Test 3 sucessfull'); }
//// TEST 4
//var result4 = sut.onFilter(1001, '2');
//if (result4 !== false) { console.log('> Test 4: Should be false'); } else { console.log('> Test 4 sucessfull'); }
//// --- Two target, one expected
//// TEST 11
//var result11 = sut.onFilter({ firstName: 'Harry', lastName: 'Sleeper' }, 'h');
//if (result11 !== true) { console.log('> Test 11: Should be true'); } else { console.log('> Test 11 sucessfull'); }
//// TEST 12
//var result12 = sut.onFilter({ firstName: 'Harry', lastName: 'Sleeper' }, 'b');
//if (result12 !== false) { console.log('> Test 12: Should be false'); } else { console.log('> Test 12 sucessfull'); }
//// --- One target, two expected
//// TEST 21
//var result21 = sut.onFilter('Harry', 'h x');
//if (result21 !== false) { console.log('> Test 21: Should be false'); } else { console.log('> Test 21 sucessfull'); }
//// TEST 22
//var result22 = sut.onFilter('Harry', 'h y');
//if (result22 !== true) { console.log('> Test 22: Should be true'); } else { console.log('> Test 22 sucessfull'); }
//// --- One target, tree expected
// TEST 31
var result31 = sut.onFilter('Harry', 'h s x');
if (result31 !== false) {
    console.log('> Test 31: Should be false');
}
else {
    console.log('> Test 31 sucessfull');
}
// TEST 32
var result32 = sut.onFilter('Harry', 'h y r');
if (result32 !== true) {
    console.log('> Test 32: Should be true');
}
else {
    console.log('> Test 32 sucessfull');
}
////// --- TEST - Two target, two expected
//// TEST 51
//var result51 = sut.onFilter({ firstName: 'Harry', lastName: 'Sleeper' }, 'h s');
//if (result51 !== true) { console.log('> Test 51: Should be true'); } else { console.log('> Test 51 sucessfull'); }
//// TEST 52
//var result52 = sut.onFilter({ firstName: 'Harry', lastName: 'Sleeper' }, 'h x');
//if (result52 !== false) { console.log('> Test 52: Should be false'); } else { console.log('> Test 52 sucessfull'); }
//# sourceMappingURL=BladeListTest.js.map