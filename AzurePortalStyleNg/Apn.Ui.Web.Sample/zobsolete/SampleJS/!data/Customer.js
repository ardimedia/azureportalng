var SampleJs;
(function (SampleJs) {
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
    SampleJs.Customer = Customer;
})(SampleJs || (SampleJs = {}));
//# sourceMappingURL=Customer.js.map