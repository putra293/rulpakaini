const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "*⳹ ❋ཻུ۪۪⸙Putrabotz-MD2⳹ ❋ཻུ۪۪*" //namabot kalian
global.zifa = "*⳹ ❋ཻུ۪۪⸙Putrabotz-MD2⳹ ❋ཻུ۪۪*" //kontol kalian
global.ownername= "*⳹ ❋ཻུ۪۪⸙Putrabotz-MD2⳹ ❋ཻུ۪۪*" //nama kalian
global.myweb ="https://instagram.com/Putra Nich" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCSScI6NnXE0dQ1HCnPUUSKQ" //bebas asal jan hapus
global.github = "https/github.com/Botynyakamu/" //bebas
global.email = "selenagemes023@gmail.com" //bebas
global.region = "putraganteng" //bebas
global.ownernomer = "6283840600765" // nomor wa kalian
global.ownernomerr = "+6283840600765" //nmr wa kalian
global.thumbnail = "./image/rozi.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/zifa.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/f19193f43448cbbeb5e7d.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6283840600765","6283840600765","6283840600765"] //ganti agar fitur owner bisa di gunakan
global.packname = 'Putrabotz-MD2' //sticker wm ubah
global.author = 'Di Buat Oleh putra' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Rozi !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ putrabotz Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
