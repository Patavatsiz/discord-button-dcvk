const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const button = require('discord-buttons');
button(client);

client.eventRoles = {
  VK: "", // VK ROL ID
  DC: "" // DC ROL ID
};

client.botSettings = {
  botToken: "", // BOT TOKEN
  botVoice: "" // BOT SES KANAL ID
}

// BOT HAZIR OLDUGUNDA
client.on("ready", () => {
client.channels.cache.get(client.botSettings.botVoice).join(); // BOTU SESE SOKMA
console.log("Bot Ready For Use To It"); // BOTA MESAJ ATTIRMA
client.user.setPresence({ activity: { name: "", type: "" }, status: "" }) // "name"in yanındaki tırnaklara botun durumunu, "type"ın yanındaki tırnaklara : LISTENING/PLAYING/WATCHING, "status"e ise online/dnd/idle
});



client.on("message", async message => {
let args = message.content.split(" ");
if(args[0] !== "") return; // tırnakların içine işlem başlatma mesajını girin örnek: !kur
else 
{
  let button_1 = new button.MessageButton()
  .setStyle('green') // Buton Rengi
  .setLabel('🎭 Doğruluk - Cesaret') // Buton İsmi
  .setID('1') // Ellemeyin

  let button_2 = new button.MessageButton()
  .setStyle('green')  // Buton Rengi
  .setLabel('🧛‍♂️ Vampir - Köylü')  // Buton İsmi
  .setID('2') // Ellemeyin


// Embedlı mesaj istiyorsan ilk /* ve */ sil embedsız istiyorsan ikinci /* ve */ sil.
/*
let msgembed = new MessageEmbed()
.setColor("RANDOM")
.setDescription(`**Eğlence rollerini alt taraftaki butonlara basarak alabilirsin.**\n\n**__ROLLER__**\n\n\`>\` <@&${client.eventRoles.DC}>\n\`>\` <@&${client.eventRoles.VK}>`)
.setTimestamp()
.setFooter("Lucy was here")
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}));
message.channel.send({ buttons: [button_1, button_2], embed: msgembed });
*/

  await message.channel.send(`**Eğlence rollerini alt taraftaki butonlara basarak alabilirsin.**\n\n**__ROLLER__**\n\n\`>\` <@&${client.eventRoles.DC}>\n\`>\` <@&${client.eventRoles.VK}>`, { buttons: [button_1, button_2] })

  client.on("clickButton", async (button) => {
//                    D  C
    if(button.id === "1") {
      if(button.clicker.member.roles.cache.get(client.eventRoles.DC)) {
        await button.clicker.member.roles.remove(client.eventRoles.DC)
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.DC}> rolü başarıyla hesabınızdan kaldırıldı`)
      } else {
        await button.clicker.member.roles.add(client.eventRoles.DC)
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.DC}> rolü başarıyla hesabınıza tanımlandı`)
      }
    }
//                     V  K
    if(button.id === "2") {
      if(button.clicker.member.roles.cache.get(client.eventRoles.VK)) {
        await button.clicker.member.roles.remove(client.eventRoles.VK)
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.VK}> rolü başarıyla hesabınızdan kaldırıldı`)
      } else {
        await button.clicker.member.roles.add(client.eventRoles.VK)
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.VK}> rolü başarıyla hesabınıza tanımlandı`)
      }
    }


  });


};


});


client.login(client.botSettings.botToken)
