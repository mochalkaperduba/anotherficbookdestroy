import undetected_chromedriver as chr
from selenium.webdriver.chrome.options import Options
import sys
import time
import base64

def loadarr(path):
  res = '['
  names = open(path, mode='r',encoding="utf-8")
  rln = names.readlines()
  for w in rln:
    res+='\"'
    res+=w.replace("\n", "")
    res+='\",'
  res += '\"й и ц\"'
  res += ']'
  return res

chrome_options = Options()
chrome_options.add_argument("--disable-web-security")
d = chr.Chrome(version_main = 109, options = chrome_options)
d.get("https://ficbook.net")

f = open("1.js", "r", encoding='utf-8')
js = f.read()
f.close()

file = open('logins.txt',mode='r',encoding="utf8")
r = file.readlines()

js+='\n'
js+="await spam(\""+r[int(sys.argv[1])].split(':')[0]+"\",\""+r[int(sys.argv[1])].split(':')[1]+"\","+loadarr('names.txt')+", "+loadarr('desc.txt')+", "+loadarr('to.txt')+", "+loadarr('stops.txt')+")"

message_bytes = js.encode('utf-8')
base64_bytes = base64.b64encode(message_bytes)
base64_message = base64_bytes.decode('ascii')

print(base64_message)

d.set_script_timeout(6*1000*60)
d.execute_script(js)

#time.sleep(2*60)
