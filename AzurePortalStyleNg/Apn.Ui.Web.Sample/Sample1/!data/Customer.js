var Sample1;
(function (Sample1) {
    'use strict';
    //#region Class Definition
    var Customer = (function () {
        function Customer(customerPkId, firstName, lastName) {
            this.customerPkId = customerPkId;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        return Customer;
    }());
    Sample1.Customer = Customer;
})(Sample1 || (Sample1 = {}));
