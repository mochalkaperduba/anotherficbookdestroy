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
async function findusers(letters, page){return await fetch("https://ficbook.net/search/user", {
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
  "referrer": "https://ficbook.net/home/myfics",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "term="+letters+"&page="+page,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((x)=>x.json()).then((w)=>{return w});}
async function parsefics(){
 
    let response = await fetch('https://ficbook.net/home/myfics');
    document.body.innerHTML = await response.text();
let ficid = [];
let ch = document.getElementsByClassName("js-myfics-empty-container")[0].children;
for(let i = 0; i<ch.length;i++){
    ficid.push(ch[i].className.split("-").reverse()[0]);
}
return ficid;
}
async function pf(){
  try{
      return await parsefics();
  }
  catch{
      return await parsefics();
  }
}
async function gettargets(){
    const fkb = ""
}
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
    async create(name, decs, to, comm, id=-1){
        if(id===-1){
        let soruce = await createfic(name, decs, to, comm);
        if(source.result==false){return -1;}
        this.targetid = soruce.data.redirect.split('/')[3];
            return 1;
        }
        else{this.targetid=id;}
    }
    async setsoauthor(authorid,authorid1,authorid2){
        await editrole(this.targetid, authorid,authorid1,authorid2);
    }
}
async function spam(login, pass, names, descs, tos, comms){
    await Login(login, pass);
    fics = [];
      let raw = await parsefics();
      for(let i = 0;i<raw.length;i++){
        let q = new Fic();
        await q.create(0,0,0,0,raw[i]);
        fics.push(q);
      }
    for(let i = 0; i<names.length; i++){
        try{
        let w = new Fic();
        let flag = await w.create(names[i], randel(descs), randel(tos), randel(comms));
            if(flag==-1){console.log("need pass a captcha! we force leave and start spam...  I hope that you created a many fics with hands to spaming!");break;}
        fics.push(w);
        await sleep(2000);
        }
        catch{await sleep(10000);}
    }

    console.log("fic list builded! total items: "+fics.length);
    let i = 0;
    let qww = [7147019, 8109029]
    while (true){
        try{
        let fic = fics[i%fics.length];
        await fic.setsoauthor(randel(qww),7680187,8082334);
        i++;
        }
        catch{await sleep(10000);}
    }
}
