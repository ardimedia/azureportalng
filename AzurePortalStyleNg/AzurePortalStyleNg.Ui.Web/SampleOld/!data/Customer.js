var SampleOld;
(function (SampleOld) {
    'use strict';
    //#region Class Definition
    var Customer = (function () {
        function Customer(customerPkId, firstName, lastName) {
            this.customerPkId = customerPkId;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        return Customer;
    })();
    SampleOld.Customer = Customer;
})(SampleOld || (SampleOld = {}));
//# sourceMappingURL=Customer.js.map