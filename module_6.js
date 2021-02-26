class User {
  email;
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  blacklistedEmails;
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  accessLevel;

  constructor({email, accessLevel, blacklistedEmails = []}) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = blacklistedEmails
  }
  blacklist(email){
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email){
    if (this.blacklistedEmails.includes(email)){
      return true
    }
    return false;
  }
  // Пиши код выше этой строкиQ
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 