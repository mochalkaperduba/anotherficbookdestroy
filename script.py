import undetected_chromedriver as chr
from selenium.webdriver.chrome.options import Options
import sys
import time
import base64

def loadarr(path):
  res = '['
  names = open('names.txt',mode='r',encoding="utf8")
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

js+='\n'
js+="spam(\""+sys.argv[1]+"\",\""+sys.argv[2]+"\","+loadarr('names.txt')+", "+loadarr('desc.txt')+", "+loadarr('to.txt')+", "+loadarr('stops.txt')+")"

print(js)

#d.execute_script(js)

time.sleep(2*60)
