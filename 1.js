async function editrole(ficid, authorid, authorid1, authorid2){return await fetch("https://ficbook.net/ajax/save_role", {
    "headers": {
      "accept": "*/*",
      "accept-language": "be-BY,be;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ficbook.net/home/myfics/"+ficid,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "fanficId="+ficid+"&coauthorIds%5B%5D="+authorid+"&coauthorIds%5B%5D="+authorid1+"&coauthorIds%5B%5D="+authorid2,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then((x)=>x.json()).then((w)=>{return w});}
async function createfic(name,desc,ded,ac){return await fetch("https://ficbook.net/home/addfic_save", {
    "headers": {
      "accept": "*/*",
      "accept-language": "be-BY,be;q=0.9",
      "cache-control": "no-cache",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryoP3M7lWKGeoqcUes",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ficbook.net/home/addfic?confirmed=1",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"fic_type\"\r\n\r\nauthor_fic\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"title\"\r\n\r\n"+name+"\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"real_author\"\r\n\r\n\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"original_link\"\r\n\r\n\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"fandom_type\"\r\n\r\noriginal\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"fandom_ids[]\"\r\n\r\n140839\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"pairings[0][chars][]\"\r\n\r\n-1\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"pairings[0][pairing]\"\r\n\r\nПИДОРЫ/КОСТИК/GJDFH\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"pairing\"\r\n\r\n\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"rating\"\r\n\r\n5\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"direction\"\r\n\r\n1\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"tags[]\"\r\n\r\n1664\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"description\"\r\n\r\n"+desc+"\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"author_comment\"\r\n\r\n"+ac+"\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"dedication\"\r\n\r\n"+ded+"\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"publication\"\r\n\r\n3\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"enable_marks\"\r\n\r\n1\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"enable_comments\"\r\n\r\n1\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"public_beta\"\r\n\r\n1\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"continue_enable\"\r\n\r\n1\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"continue_required_votes\"\r\n\r\n228\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"size\"\r\n\r\n2\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes\r\nContent-Disposition: form-data; name=\"agree\"\r\n\r\n1\r\n------WebKitFormBoundaryoP3M7lWKGeoqcUes--\r\n",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then((x)=>x.json()).then((w)=>{return w});}
async function Login(login,password){return await fetch("https://ficbook.net/login_check", {
    "headers": {
      "accept": "*/*",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ficbook.net/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "login="+login+"&password="+password+"&remember=on",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });}
function randel(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
class Fic{
    targetid = 0;
    async create(name, decs, to, comm){
        let soruce = await createfic(name, decs, to, comm);
        this.targetid = soruce.data.redirect.split('/')[3];
    }
    async setsoauthor(authorid){
        await editrole(this.targetid, authorid);
    }
}
async function spam(login, pass, names, descs, tos, comms){
    await Login(login, pass);
    fics = [];
    for(let i = 0; i<names.length; i++){
        try{
        let w = new Fic();
        await w.create(names[i], randel(descs), randel(tos), randel(comms));
        fics.push(w);
        await sleep(2000);}catch{await sleep(rnd(20000,100000));}
    }
    let i = 0;
    while (true){
        try{
        let fic = fics[i%fics.length];
        await fic.setsoauthor(7147019,7680187,8082334);
        i++;
        }
        catch{await sleep(5000);}
    }
}
