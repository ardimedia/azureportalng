var SampleTS;
(function (SampleTS) {
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
    SampleTS.Customer = Customer;
})(SampleTS || (SampleTS = {}));
//# sourceMappingURL=Customer.js.map