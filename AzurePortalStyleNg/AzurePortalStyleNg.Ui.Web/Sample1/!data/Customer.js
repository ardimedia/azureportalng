var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var Customer = (function () {
        function Customer(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        return Customer;
    })();
    Sample1.Customer = Customer;
})(Sample1 || (Sample1 = {}));
//# sourceMappingURL=Customer.js.map