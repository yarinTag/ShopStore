const faker = require('faker');
const fs = require('fs');

const user = {};
const userArray = [];

for (let i = 0; i < 180; i += 1) {
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.passwordConfirm = user.password;
  user.username = faker.internet.userName();
  userArray[i] = { ...user };
}


fs.writeFileSync(`./Userdata.json`, JSON.stringify(userArray), (err) => {
  if (err) throw err;
});
