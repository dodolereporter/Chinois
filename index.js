const Discord = require("discord-user-bots");
const client = new Discord.Client(process.env.TOKEN);

client.on.ready = function () {
    console.log("Client online!");
    function fn60sec() {
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")
        client.send("JE SUIS UN CHINOIS, MON MAITRE EST DODO LE TOUT PUISSANT", "922409709603024927")     
    }
    fn60sec();
    setInterval(fn60sec, 35*1000);
    function loop() {
        var now = new Date();
        if (now.getHours() === 1 && now.getMinutes() === 00) {
            client.send("t!daily", "922409709603024927");
        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
    };
    loop();
};
