let axios = require('axios');
let cheerio = require('cheerio');
const userController = require('../controllers/userController');
const User = require("../models/user");
const scrape = async () => {
    const page = await axios.get('https://en.wikipedia.org/wiki/List_of_people_with_reduplicated_names')
    const $ = cheerio.load(page.data);
    $('div.div-col').each(function () {
        $('li a', this).each(function () {
            const row = $(this);
            let name = row.text();
            var firstName = name.split(" ")[0];
            var lastName = name.split(" ")[1];
            let d = row.nextAll().eq(2).text();
            d = d.substr(d.indexOf('(') + 1, 1)
            email = name + "@gmail.com"
            let password = 123456;
            console.log(email)
            console.log(firstName)
            console.log(lastName)
            console.log(password)
            const newUser = User.create({
                firstName,
                lastName,
                email,
                password,
                avatar: {
                    public_id: "#1",
                    url: "www.instgram.com",
                },
            });
        });
    });

}
module.exports = {
    scrape
};