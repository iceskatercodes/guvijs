class Bank {
    constructor() {
        this.code = code;
        this.address = address;
        this.customer = customers;
        this.accounts = accounts;
        this.atm = atms;
    }

    manages() { }

    maintains() { }
}


class Customer {
    constructor() {
        this.name = _name;
        this.address = address;
        this.dob = dob;
        this.cardNumber = number;
        this.pin = pin;
        this.account = account;
    }

    VerifyPassword() { }
}


class Account {
    constructor() {
        this.number = number;
        this.balance = balance;
        this.customer = customer;
        this.atmTransactions = atm_transactions;
    }

    Deposit() { }

    Withdraw() { }

    CreateTransaction() { }
}


class ATM {
    constructor() {
        this.location = _location;
        this.managedBy = managed_by;
        this.customer = customer;
        this.account = account;
    }

    Identifies() { }

    Transactions() { }
}


class ATM_Transactions {
    constructor() {
        this.transactionId = id;
        this.date = date;
        this.type = transactionType;
        this.amount = amount;
        this.postBalance = balance;
        this.account = account;
    }

    Modifies() { }
}


class CurrentAccount extends Account {
    constructor() {
        this.accountNumber = number;
        this.balance = balance;
    }

    Withdraw() { }
}


class SavingsAccount extends Account {
    constructor() {
        this.accountNumber = number;
        this.balance = balance;
    }
}