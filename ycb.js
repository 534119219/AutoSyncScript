/*
2021.7.12   

软件名：永晨宝（安卓） 秒到！！！！！！

手机号注册   绑定支付宝提现    提现密码设为：666666   才可以自动提现

下载地址：http://www.yongchenbao.com/home/index?uucode=TR00EFTL00

获取CK ： 主界面点随机奖励获取CK

/////////////////////////////////////////////////////////////////////////////

撸了不一定有，不撸肯定没有！
TG频道 https://t.me/tom_ww     
 
/////////////////////////////////////////////////////////////////////////////

CRON自行设置
v2p配置如下：
【REWRITE】
匹配链接（正则表达式） http://api.yongchenbao.com/api//Member
对应重写目标   https://raw.githubusercontent.com/xl2101200/-/main/ycb.js
【MITM】  
api.yongchenbao.com

/////////////////////////////////////////////////////////////////////////////
*/

const _0x2815=['5Rc45PMO5A6D','C3vIC3rY','DGKGiSo0ua','DGmG','W73dQqJdMa','qSkQxSkCW73cTSokt8okWPG','W6LvDmoCWQ8hWRtdN8oD','W6xdOXZdNW','xYu0Cq','zMv0y2G','WPyOmSkCqSkxwq','zxHLyW','k1NdH8kk','o0ldNmkntrzqWPJcTq','gwJcUXHBWQy','z2v0','W41CjZ4nW4NcLq','z2v0vgLTzxPVBMvpzMzZzxq','EgNcS+obNUIoUow/KUMfK+w7PEodKo+9Qq','44o+56+p5yI76Akz6ys25BUf44kC77YL5Bsu56YL5yM5eq','W7/cOCoqbmopW7RdVSo3iZa','mZa0mMnYwg1cEG','Bg9NCW','gmkFW5RdJa','vSkcW5pdIq4nfSoEWPbwW545BcOUi8kfr8oYhSo1EmkqCCk1WOjOW59MW51tnrreWRxcUmoR','ACkKr8km','CMvKDwnL','WPiIna','qgnOyxz5x2jVEgPZx3vZzxjdzMDZlMH0DhbHCgLFDgLTzw91Da','W4nYW68','Ahr0CdOVl2fWAs55B25Ny2HLBMjHBY5JB20VyxbPlY9nzw1IzxiVywrKt3jKzxi','D2fPDa','lcdLVidLP4SH','WPiInmkl','W5SaWRm','BxnN','D3jPDgvKyxrH','zsWirW','W6NdReO','W77cS0iiCq','pcJdPY8','z2v0qwrwAwrLB1jLD2fYza','C3rHDhvZ','bXxdLeKQWPmT','zmkgW6K','WPWQ5BY75AEc44kD5Rgk5PUT5AYa','Fb8Z','W5RdMYhdMmk0W5q','z2v0zgf0yq','nCkFW43dI05Y','CMvWBgfJzq','Cg9ZDa','hSkEpCk6W4y','44g+56sq5yMj5yAy5O+b44gn776I','WP7dH8kuEqlcOqO','W6NcRN4s','C2v0DMfS','AxnoB2rL','Aa82pmoX','mtGXotqYnvflweDNCG','lCoxWOqIW7mshSopW7eKW7dcQSo6','aSkqka','oSo/qG','W7FcTSoxeSoc','WOXXrLO','WP/dTUE4JoADUwxWROEl','ihhcUxzrzG','m05gDhjgrW','eCkiW5JdNa','zgf0yq','WP51tfVcIW','ysOwvHBcV8od','WPKOj8kCrSkrsW','oMFcGx1FFhG','bCknW4ldMaCWf8oAWOC','WQCUctSuyCoP','CbxdVSo6emkGW5flpGW','44cq562+5yIW6Akg6yEr5BIb44cr77YA5BEY562+5yIWcG','z2v0sg91CNm','BSk5xCkmySo2sXzVwcNcMum','W54CWPRcJSk5WPObl1fIW64bba','Dg9tDhjPBMC','WPKIjW','FtCpq0pdPCkyESonwSodgCorpCkzW6FdUCk/zSomWOlcL8oHW7KOsHnVW7ZdRXXIwmkyW5nlW6b/xWRcKYNcL8oPWQW','l3yXl3nJCMLWDgLUzY9LDMfSDwf0zq','jLFdG8kb','gCkiW5hdIG','t0JdGwuovZm','FSkUqmk1AmoEvHi','C2v0zgf0yq','zmkuW74','Ahr0CdOVl2fWAs55B25Ny2HLBMjHBY5JB21ODhrWoI8VyxbPlNLVBMDJAgvUyMfVlMnVBs9HCgKVl01LBwjLCI9KzwfSDgfZAW','kCogW7ucW5T0W6/dTfq','W79tAhZdVXxdOa','Bg9N','WRbtfmoKWPdcKCky','C2v0lwnVB2TPzq','kcJdOt1Q','jCoSmmkpWOlcKqVdNq0u','qJCN','WOpdLg92WOBcKCo/uW','id09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09pt09cG','C3rHy2S','c8khp8kMW5eOW4S','Bw9UzxK9','C3rYAw5N','xdaYChVcVmo/WRZdLq','z2v0twLUDxrLCW','DYiUWR/dHSorDa','jwFcM35kya','vf3dJgGF','DgvZDa','hCkAo8oKW4aZW5FdPWKm','sSkiW7DOWPddVLyAWOZdKKKs','BwvKAweTDxjS','zJCArWZcUq','yJesrXZcJmoED8oyymkudSoD','WQLzk8o4WPlcL8kruI1bWQmNWQWG','W4hdTZ8ya1K','xseKCgFcVSo1WQ4','C2vUza','ymkuW5DZWPhdTq','y2TQyxi','jfNdICkx','WOT4bcao','ESkdW5P0WRu','DgfZA2v0Awq9mYzWBgf0zM9YBt1HBMrYB2LKjNv1y29Kzt0','aSkqk8kOW5a0W6FdVWuD','W6NcVmonnmouW6BdHSoNkabsWOFcJq','WQpdJSoByCojv3e','nSkybKa','ASkmW7n9WOC','EwnIAgq','CgXHDgzVCM09yw5KCM9Pzcz1DwnVzgu9','EwnIy291BNq','WOFdN2jRWQdcQ8o5ESkilq','fHpdL1G9WO0','bWtdGv11W45Xeezfcv7cNCkEtSoTW7xcSdpcLWefWPZdHSkbcH/cUauMDSk0W58aW6VdOHJdGCohec9tWQTUrCoeWQNdMLVcJSosgxhdNCkL','W7jtsCo6WR4sWRG','Bwf0y2G','yGK6ma','CYGO','EwnIC3rHDhvZ','mCo9jCkFWPBcLIK','lcBdNYfSjmoUWOhcJrW9sKpcR3vTW5u','EwnIDxjS','B3bLBI11CMW','W5JdPqeecq','z2v0vgLTzq','WOhdJCkyEGhcQqO','kSohW7qd','BwvZC2fNzq','W4tdMmkBxq','zxHPC3rZu3LUyW','Bg9NrxjY','Dw5KzwzPBMvK','gCknjSk9W4y4W5NdUae','kMpcM0zjyw3dRxhdSG53BMxdQCo7WPlcKG','W53dJSkp','AxnbCNjHEq','bGpdUuiGWO8','FqmZ','y8kPftdcThxdRuBcHmo8W4C','B3b0CW','jmo1vMFdQuxdIq','DxjS','bmkvcCkqWR8txbRdIa','WQS1csC','y13dTmkqgmk9','BgvUz3rO','ASkiW7bY','kCoxW6Kp','44cq6zQp5PY657QI5yYf44cr77YA5BEY6l6+5lIk6zMqcG','AM9PBG','ntKWodfgqvHeBfq','BZi8WRm','BMfTzq','kcxdSJPPkSoWWONdVbiKs0pcG316WPBdUSkQzX7dG8kwta','W7BdT0ZcKXTK','CgfYC2u','mtCXndG1vhnAz3ft','jfpdGmkdvXK','cSo9W5q/','44cq546W5PYj5l2z6AkD44cr77YA','Dq0Gnq','E8kkW4f/WQzusG','W4hcS8k+qG','EmkoW4f6','y2fSBa','Ahr0CdOVl2fWAs55B25Ny2HLBMjHBY5JB20VyxbPlY9nzw1IzxiVy29PBLrVtw9UzxK','Bg9Nu2vWyxjHDg9Y','gwJcPajEWQ3cMq','WOTTuv3cL8oe','Bg9KyxnOx2DLDa','WO3dMMf+WPu','Eci7WQ3dGSop','tcuSDq','lcdPLjNOR68H','W6JdPL7cLa9Wxa','W6pcSNuzEW','W4FdNmkbxq','zw52','C2v0ANnVBG','z2v0DMfS','ow3cHM0','5Q2o6Ao25y2J6zQI5P2157Md5y2B772W','DSk7uCkwuSoctG','C2XPy2u','44cz6zMO5P6J57Q+5y+W44kb77Y45BEf6l2M5lQH6zMPFq','BCkgW619','EZxcSu9MzxtdHG','DgHLBG','44cq55sZ6k+35O+q546W44cr77YA','WOH4uuFcNa','W6HfBSo5WQ0z','CCkkW4zOWQzhtG','W5ddMYhdVCk0W57cNM0','B3bLBLvYBa','WPz4tLe','WOhdK2f6WOtcSa','W4/dOqCbdvS','W54CWOFcNSkUWPK2','CIypwqRcPCoz','q29VA2LLsMfY','tL7dRg4esW','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','W43dQGu','D3jPDgvgAwXLu3LUyW','W6HuE8o9WRGHWRtdGSom','WPVdJ8kurXNcPaFcGZtdSIP8smoXWRGPWOu/','W6xdOXW','DMfSDwvgB3jlzxK','jSo/vNW','y2fUx3DPDgHKCMf3x21VBMv5','W4FdNYFdG8k+','C3bSAxq','mJi4mdC0suXJwu1o','Fda1xb3cRW','ChvZAa','WQRcMvG','kNxcKq','Ahr0CdOGlY8','EwnIyM9KEq','WQJcKLO','yxnZAwDU','W5uxt2tdSxW','zgf0yuzPBgu','kSkFaSksWRDB','wCkOW4Pi','WO4SiCklqG','W7BdTK/cLbPL','AxnmB29U','gCkqW6VdIbu8','WQRcMvGcWOSvW4W','jNr5Cgu9mszIyw5RBMfTzt0MyMfUA251BwjLCJ0MB3v0ChDKpty2nJy2nIzWBgf0zM9YBt1HBMrYB2LKjNv1y29Kzt0','lfFdMSkf','mCo1uuZdPeFdIq','amkdpSkmWQXzta','jw3cKLXmEG','BuVdJSkSgCk7qH7dVW4','W5FdMmkCFwG/aa','W4xdK8kmtgC7c8kIDa','zg9Uzq','gSkcW4VdU2uBCW','Eci7WR/dGSoxzG','AxntAgfKB3DYB2nRzxq','EJldGsTDEKhdQfFdUG','ErhdP8om','cxJcLX9B','WORcUxG','t8oqW7VdUvqBE8or','C3rHDhvZq29Kzq','AxnozwvKuMv3CML0zq','WPf3r1hcGq','aN7cHHHtWRxcPa','Bg9HzgrHDge','FW05mq','W6VcVMi','ndq0mZC1uxrVwg9W','gSkcW4VdQ20cCW','cbxdGq','q29UDgvUDc1uExbL','mvxdJmkgtbva','C3rYAw5NAwz5','W7xdOL/cLaS','y29VA2LLsMfY','CMvZB2X2zq','WQKGdICayCoK','y2f0y2G','WQpdIwFJG4pOJPBLVPxPHj3LU6/JGPBVVii','WQhcMuibWP4j','Bwv0Ag9K','hCkllSk7W5CiW5hdOqu','nJC0nJG1EeH3suP6','DhjPBq','WPrVddaoW7hcTW','pCoxW7mJW5PMW7tdOq','W4dcOSk+uJe2','AxnrDwfUwa','DgLTzq','tSkHzSkAW6JcQ8ob','jSo5jCkt','q29UDgvUDc1mzw5NDgG','gCkgW4VdJG','WOHoWQrS','yM9KEq','oSo3nSk+WOxcKa','AxntDxjNzq','CtiJWRC','W7NdRq/dHa','W6zbt2e','Bg9KyxnOx3nLDa','WO9+hZ0fW6tcRCo2W5q','f37cGtPwWQ/cRubjxa/dGSoEW4XG','Cgf0Aa','jfNdIq','z290','W6pcUSoBh8oF','dSkvgCkpWR9s','AgvHzgvYCW','gCkqW6RdKG43','WPC+amknvCkctW','db/dM04UWPu'];const _0x3f4728=_0x3cae,_0x73b9b8=_0x2ed8;(function(_0x5c9f62,_0x55c89b){const _0x4a5d46=_0x2ed8,_0x5abe36=_0x3cae;while(!![]){try{const _0x599804=-parseInt(_0x5abe36(0x1f4))+-parseInt(_0x5abe36(0x203))+parseInt(_0x5abe36(0x1ca))+parseInt(_0x4a5d46(0x1e8,'%C8e'))*-parseInt(_0x4a5d46(0x1b0,'%C8e'))+parseInt(_0x4a5d46(0x231,'yi[y'))*parseInt(_0x5abe36(0x18c))+parseInt(_0x5abe36(0x192))*-parseInt(_0x5abe36(0x121))+parseInt(_0x5abe36(0x119));if(_0x599804===_0x55c89b)break;else _0x5c9f62['push'](_0x5c9f62['shift']());}catch(_0x59682d){_0x5c9f62['push'](_0x5c9f62['shift']());}}}(_0x2815,0x5f713));const $=new Env('永晨宝');let status;status=(status=$[_0x73b9b8(0x10f,'ryC^')](_0x3f4728(0x16c))||'1')>0x1?''+status:'';const ycburlArr=[],ycbhdArr=[],ycbbodyArr=[],ycbcount='';let ycburl=$[_0x3f4728(0x10e)]('ycburl'),ycbhd=$['getdata']('ycbhd'),ycbbody=$[_0x3f4728(0x10e)](_0x73b9b8(0x1f8,'jW*D')),b=Math['round'](new Date()[_0x73b9b8(0x1e2,'6%K1')]()/0x3e8)['toString'](),DD=RT(0x6d60,0x88b8),tz=$[_0x73b9b8(0x21c,'Sr1U')]('tz')||'1',id='',txid='';$[_0x3f4728(0x175)]='',!(async()=>{const _0x5022dc=_0x73b9b8,_0x3b2eb3=_0x3f4728;if(typeof $request!==_0x3b2eb3(0x179))await ycbck();else{ycburlArr[_0x3b2eb3(0x1cc)]($['getdata']('ycburl')),ycbhdArr[_0x3b2eb3(0x1cc)]($[_0x5022dc(0x16d,'f#mP')]('ycbhd')),ycbbodyArr[_0x5022dc(0x18d,'([dz')]($[_0x5022dc(0x126,'#ck1')](_0x5022dc(0x173,'VpU6')));let _0x45da17=$[_0x5022dc(0x1ba,'vsfy')](_0x3b2eb3(0x164))||'1';for(let _0x3ff463=0x2;_0x3ff463<=_0x45da17;_0x3ff463++){ycburlArr[_0x5022dc(0x174,'@FPC')]($[_0x5022dc(0x1e6,'([dz')](_0x5022dc(0x166,'3Tm&')+_0x3ff463)),ycbhdArr['push']($['getdata'](_0x5022dc(0x1ea,'KaiT')+_0x3ff463)),ycbbodyArr['push']($[_0x3b2eb3(0x10e)]('ycbbody'+_0x3ff463));}console[_0x3b2eb3(0x13c)]('\x0a\x0a===============================================\x20脚本执行\x20-\x20北京时间(UTC+8)：'+new Date(new Date()[_0x5022dc(0x1e5,'Iwz[')]()+new Date()[_0x3b2eb3(0x232)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5022dc(0x153,'S*f7')]()+_0x3b2eb3(0x143));for(let _0x7f673=0x0;_0x7f673<ycbhdArr['length'];_0x7f673++){ycbhdArr[_0x7f673]&&(ycburl=ycburlArr[_0x7f673],ycbhd=ycbhdArr[_0x7f673],ycbbody=ycbbodyArr[_0x7f673],$[_0x5022dc(0x1ef,']R6*')]=_0x7f673+0x1,console['log'](_0x5022dc(0x10b,'4us&')+$[_0x5022dc(0x1ef,']R6*')]+'】')),await hqcf(),await $[_0x3b2eb3(0xfd)](0xbb8),await ycbqd(),await $[_0x3b2eb3(0xfd)](0x1388),await grxx(),await $[_0x5022dc(0x1a6,'6%K1')](0xbb8),message();}}})()[_0x3f4728(0x1fe)](_0x19cedf=>$[_0x73b9b8(0x1e0,'%C8e')](_0x19cedf))[_0x73b9b8(0x114,'VpU6')](()=>$[_0x3f4728(0x1e4)]());function ycbck(){const _0x193594=_0x73b9b8,_0x17dab3=_0x3f4728;if($request[_0x17dab3(0x183)]['indexOf'](_0x17dab3(0x107))>-0x1){const _0x383b7c=$request[_0x17dab3(0x183)];if(_0x383b7c)$[_0x17dab3(0x137)](_0x383b7c,_0x17dab3(0x16f)+status);$[_0x193594(0x1c4,'nefV')](_0x383b7c);const _0x713cd5=JSON[_0x193594(0x216,'yi[y')]($request[_0x17dab3(0x21d)]);if(_0x713cd5)$['setdata'](_0x713cd5,_0x193594(0x21b,'@P]c')+status);$[_0x193594(0x11c,'[)U%')](_0x713cd5);const _0x4c725d=$request[_0x17dab3(0x20f)];if(_0x4c725d)$[_0x193594(0x127,'%C8e')](_0x4c725d,_0x17dab3(0x1d0)+status);$[_0x193594(0xf9,'#ck1')](_0x4c725d),$[_0x17dab3(0x101)]($['name'],'',_0x17dab3(0x221)+status+'获取headers成功');}}function sjhb(_0x30c763=0x0){return new Promise(_0x2dd0f5=>{const _0xb43234=_0x3cae,_0x1ce804=_0x2ed8;let _0x36b47a={'url':_0x1ce804(0x167,'3Tm&'),'headers':JSON['parse']($[_0x1ce804(0x1db,'2B7G')](_0x1ce804(0x118,'p4bJ'))),'body':_0xb43234(0x163)};$[_0xb43234(0x111)](_0x36b47a,async(_0x3c07e2,_0x1ad955,_0x566f61)=>{const _0x2cfa8b=_0xb43234,_0x2a892c=_0x1ce804;try{const _0x5e4ddb=JSON[_0x2a892c(0x1b3,']R6*')](_0x566f61);_0x5e4ddb[_0x2cfa8b(0x108)]==0xc8?(console[_0x2a892c(0x17f,'p4bJ')]('【随机红包】：'+_0x5e4ddb['msg']+'\x0a'),$[_0x2cfa8b(0x175)]+='【随机红包】：'+_0x5e4ddb[_0x2cfa8b(0x101)]+'\x0a'):(console[_0x2cfa8b(0x13c)](_0x2cfa8b(0x18a)),$['message']+=_0x2a892c(0x1ae,'4m)4'));}catch(_0x8f17c5){}finally{_0x2dd0f5();}},_0x30c763);});}function hqcf(_0x25dc05=0x0){return new Promise(_0x47baf8=>{const _0x571543=_0x3cae,_0x9ea92d=_0x2ed8;let _0x20f74f={'url':'http://api.yongchenbao.com/api/Member/getCoin','headers':JSON[_0x9ea92d(0x1b3,']R6*')]($['getdata']('ycbhd')),'body':_0x9ea92d(0x18f,'jaaW')};$[_0x571543(0x111)](_0x20f74f,async(_0x245fb9,_0x26e343,_0x4de092)=>{const _0x1ceb7c=_0x571543,_0x2d207a=_0x9ea92d;try{const _0x15593c=JSON['parse'](_0x4de092);_0x15593c[_0x2d207a(0x151,'AI3H')]==0xc8?(console[_0x2d207a(0x16b,'([dz')]('【换取财富】：'+_0x15593c[_0x1ceb7c(0x101)]+_0x2d207a(0x233,'jaaW')+_0x15593c[_0x2d207a(0x188,'4m)4')]+'\x0a'),$[_0x1ceb7c(0x175)]+='【换取财富】：'+_0x15593c[_0x2d207a(0x17c,'6%K1')]+_0x2d207a(0x1ff,'B@oL')+_0x15593c[_0x2d207a(0x22d,'jW*D')]+'\x0a'):(console[_0x2d207a(0x219,'jW*D')]('【换取财富】：'+_0x15593c[_0x2d207a(0x141,'$gEn')]+'\x0a'),$[_0x2d207a(0x1fd,'%H([')]+='【换取财富】：'+_0x15593c[_0x2d207a(0x138,'4m)4')]+'\x0a');}catch(_0x36332d){}finally{_0x47baf8();}},_0x25dc05);});}function ycbqd(_0x56f9b6=0x0){return new Promise(_0x1fd976=>{const _0x42a344=_0x3cae;let _0x46e5f3={'url':_0x42a344(0x139),'headers':JSON[_0x42a344(0x191)]($[_0x42a344(0x10e)](_0x42a344(0x162))),'body':_0x42a344(0x15c)};$[_0x42a344(0x111)](_0x46e5f3,async(_0x1b67ae,_0x3a6751,_0x188947)=>{const _0x4f3ba7=_0x42a344,_0x265e38=_0x2ed8;try{const _0x4efdcc=JSON[_0x265e38(0x13f,'jaaW')](_0x188947);if(_0x4efdcc[_0x265e38(0x207,'W19p')]==0xc8){console[_0x265e38(0x11b,'y!lb')]('【签到领金币】：'+_0x4efdcc[_0x4f3ba7(0x101)]+'\x0a'),$[_0x265e38(0x13d,'S*f7')]+='【签到领金币】：'+_0x4efdcc[_0x4f3ba7(0x101)]+'\x0a';for(let _0x35ca90=0x0;_0x35ca90<0x14;_0x35ca90++){$[_0x265e38(0x1a5,'ZvHD')]=_0x35ca90+0x1,console[_0x265e38(0x1c4,'nefV')]('\x0a第'+(_0x35ca90+0x1)+_0x265e38(0x1ab,'3Tm&')),await sjhb(),await $[_0x4f3ba7(0xfd)](DD);}}else console['log'](_0x265e38(0x234,'FINc')),$[_0x4f3ba7(0x175)]+=_0x4f3ba7(0x12b);}catch(_0x28760f){}finally{_0x1fd976();}},_0x56f9b6);});}function grxx(_0x1bb4e7=0x0){return new Promise(_0x1d0e57=>{const _0xfef7c3=_0x3cae,_0x3eeb53=_0x2ed8;let _0x5961a2={'url':_0x3eeb53(0x131,'AI3H'),'headers':JSON[_0xfef7c3(0x191)]($[_0xfef7c3(0x10e)](_0xfef7c3(0x162))),'body':_0xfef7c3(0x163)};$[_0xfef7c3(0x111)](_0x5961a2,async(_0x321b35,_0x2e79e3,_0xb42f8c)=>{const _0x2361c4=_0x3eeb53,_0x29dbb7=_0xfef7c3;try{const _0x2f035a=JSON['parse'](_0xb42f8c);_0x2f035a[_0x29dbb7(0x108)]==0xc8?(console[_0x29dbb7(0x13c)](_0x29dbb7(0x195)+_0x2f035a[_0x2361c4(0x20d,'Iwz[')]['can_withdraw_money']+'\x0a'),$[_0x2361c4(0x1b5,'rF$d')]+=_0x29dbb7(0x195)+_0x2f035a['data'][_0x2361c4(0x17b,'%C8e')]+'\x0a',yue=_0x2f035a['data'][_0x2361c4(0x11d,'@P]c')],jf=_0x2f035a[_0x29dbb7(0x123)][_0x2361c4(0x1c3,'VpU6')],console[_0x29dbb7(0x13c)](''+jf),await jfdh(),await $[_0x29dbb7(0xfd)](0xbb8)):(console['log'](_0x29dbb7(0x195)+_0x2f035a[_0x2361c4(0x1dd,'jW*D')][_0x29dbb7(0x1c7)]+'\x0a'),$[_0x2361c4(0x1a4,'Tg2I')]+='【现有余额】：'+_0x2f035a[_0x2361c4(0x199,'rF$d')]['can_withdraw_money']+'\x0a');}catch(_0x2782b0){}finally{_0x1d0e57();}},_0x1bb4e7);});}function jfdh(_0x4cddc1=0x0){return new Promise(_0x1bbcd1=>{const _0xd36b87=_0x2ed8,_0x4fcbc1=_0x3cae;let _0x43086e={'url':_0x4fcbc1(0x19b),'headers':JSON[_0xd36b87(0x1d7,'#ck1')]($[_0xd36b87(0x197,'rF$d')](_0x4fcbc1(0x162))),'body':'money='+jf+_0xd36b87(0xf6,'M2I)')};$[_0xd36b87(0xf7,'LIgT')](_0x43086e,async(_0x28d192,_0x215c30,_0x519766)=>{const _0x4b667d=_0xd36b87,_0x32a346=_0x4fcbc1;try{const _0x286b16=JSON[_0x32a346(0x191)](_0x519766);_0x286b16['status']==0xc8?(console[_0x32a346(0x13c)](_0x4b667d(0x113,'y!lb')+_0x286b16[_0x32a346(0x101)]+'\x0a'),$[_0x32a346(0x175)]+='【积分兑换】：'+_0x286b16[_0x32a346(0x101)]+'\x0a',await grxx()):await sqtx();}catch(_0x1f2992){}finally{_0x1bbcd1();}},_0x4cddc1);});}function sqtx(_0x1f7c3d=0x0){return new Promise(_0x392952=>{const _0x57e15f=_0x3cae;let _0x11db1d={'url':_0x57e15f(0xfc),'headers':JSON[_0x57e15f(0x191)]($[_0x57e15f(0x10e)]('ycbhd')),'body':_0x57e15f(0x146)+yue+_0x57e15f(0x1dc)};$['post'](_0x11db1d,async(_0x3cf316,_0x1865ec,_0x43b6b5)=>{const _0x57c085=_0x57e15f,_0x280c12=_0x2ed8;try{const _0x1954c7=JSON[_0x280c12(0x171,'vsfy')](_0x43b6b5);_0x1954c7[_0x57c085(0x108)]==0xc8?(console[_0x57c085(0x13c)]('【申请提现】：'+_0x1954c7[_0x57c085(0x101)]+'\x0a'),$['message']+=_0x57c085(0x1b2)+_0x1954c7[_0x57c085(0x101)]+'\x0a',await sqtx()):(console[_0x57c085(0x13c)](_0x57c085(0x1b2)+_0x1954c7[_0x280c12(0x10c,'p4bJ')]+'\x0a'),$['message']+='【申请提现】：'+_0x1954c7[_0x280c12(0xfb,'cXTY')]+'\x0a');}catch(_0x483583){}finally{_0x392952();}},_0x1f7c3d);});}function message(){const _0x5f1a57=_0x73b9b8,_0x3173b9=_0x3f4728;tz==0x1&&$[_0x3173b9(0x101)]($[_0x5f1a57(0x133,'jW*D')],'',$[_0x3173b9(0x175)]);}function RT(_0x46bd82,_0x68fd54){const _0x2ee561=_0x73b9b8;do rt=Math[_0x2ee561(0x124,']R6*')](Math['random']()*_0x68fd54);while(rt<_0x46bd82);return rt;}function getCurrentDate(){const _0x34b83a=_0x3f4728,_0x29d546=_0x73b9b8;var _0x6fcdcd=new Date(),_0x336569='-',_0x203d9e=':',_0x564408=_0x6fcdcd[_0x29d546(0x1b6,'@FK!')]()+0x1,_0x418857=_0x6fcdcd[_0x29d546(0x1f5,'Iwz[')]();_0x564408>=0x1&&_0x564408<=0x9&&(_0x564408='0'+_0x564408);_0x418857>=0x0&&_0x418857<=0x9&&(_0x418857='0'+_0x418857);var _0xa40eb5=_0x6fcdcd['getFullYear']()+_0x336569+_0x564408+_0x336569+_0x418857+'\x20'+_0x6fcdcd[_0x34b83a(0x12c)]()+_0x203d9e+_0x6fcdcd[_0x34b83a(0x149)]()+_0x203d9e+_0x6fcdcd[_0x29d546(0x12a,'Q(6&')]();return _0xa40eb5;}function _0x3cae(_0x2113b9,_0x4024b4){return _0x3cae=function(_0x281549,_0x3caeae){_0x281549=_0x281549-0xf6;let _0x4fca8b=_0x2815[_0x281549];if(_0x3cae['YDmdja']===undefined){var _0x19b1f7=function(_0x5c9416){const _0x2ed8e2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x389a5c='',_0x85e93a='';for(let _0x1339a6=0x0,_0x4e87c5,_0xb0a117,_0x360b71=0x0;_0xb0a117=_0x5c9416['charAt'](_0x360b71++);~_0xb0a117&&(_0x4e87c5=_0x1339a6%0x4?_0x4e87c5*0x40+_0xb0a117:_0xb0a117,_0x1339a6++%0x4)?_0x389a5c+=String['fromCharCode'](0xff&_0x4e87c5>>(-0x2*_0x1339a6&0x6)):0x0){_0xb0a117=_0x2ed8e2['indexOf'](_0xb0a117);}for(let _0x45da17=0x0,_0x3ff463=_0x389a5c['length'];_0x45da17<_0x3ff463;_0x45da17++){_0x85e93a+='%'+('00'+_0x389a5c['charCodeAt'](_0x45da17)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x85e93a);};_0x3cae['WLKzRd']=_0x19b1f7,_0x2113b9=arguments,_0x3cae['YDmdja']=!![];}const _0x42b909=_0x2815[0x0],_0x4236eb=_0x281549+_0x42b909,_0x3868ea=_0x2113b9[_0x4236eb];return!_0x3868ea?(_0x4fca8b=_0x3cae['WLKzRd'](_0x4fca8b),_0x2113b9[_0x4236eb]=_0x4fca8b):_0x4fca8b=_0x3868ea,_0x4fca8b;},_0x3cae(_0x2113b9,_0x4024b4);}function _0x2ed8(_0x2113b9,_0x4024b4){return _0x2ed8=function(_0x281549,_0x3caeae){_0x281549=_0x281549-0xf6;let _0x4fca8b=_0x2815[_0x281549];if(_0x2ed8['oftwUg']===undefined){var _0x19b1f7=function(_0x2ed8e2){const _0x389a5c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x85e93a='',_0x1339a6='';for(let _0x4e87c5=0x0,_0xb0a117,_0x360b71,_0x45da17=0x0;_0x360b71=_0x2ed8e2['charAt'](_0x45da17++);~_0x360b71&&(_0xb0a117=_0x4e87c5%0x4?_0xb0a117*0x40+_0x360b71:_0x360b71,_0x4e87c5++%0x4)?_0x85e93a+=String['fromCharCode'](0xff&_0xb0a117>>(-0x2*_0x4e87c5&0x6)):0x0){_0x360b71=_0x389a5c['indexOf'](_0x360b71);}for(let _0x3ff463=0x0,_0x7f673=_0x85e93a['length'];_0x3ff463<_0x7f673;_0x3ff463++){_0x1339a6+='%'+('00'+_0x85e93a['charCodeAt'](_0x3ff463)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1339a6);};const _0x5c9416=function(_0x19cedf,_0x383b7c){let _0x713cd5=[],_0x4c725d=0x0,_0x30c763,_0x2dd0f5='';_0x19cedf=_0x19b1f7(_0x19cedf);let _0x36b47a;for(_0x36b47a=0x0;_0x36b47a<0x100;_0x36b47a++){_0x713cd5[_0x36b47a]=_0x36b47a;}for(_0x36b47a=0x0;_0x36b47a<0x100;_0x36b47a++){_0x4c725d=(_0x4c725d+_0x713cd5[_0x36b47a]+_0x383b7c['charCodeAt'](_0x36b47a%_0x383b7c['length']))%0x100,_0x30c763=_0x713cd5[_0x36b47a],_0x713cd5[_0x36b47a]=_0x713cd5[_0x4c725d],_0x713cd5[_0x4c725d]=_0x30c763;}_0x36b47a=0x0,_0x4c725d=0x0;for(let _0x3c07e2=0x0;_0x3c07e2<_0x19cedf['length'];_0x3c07e2++){_0x36b47a=(_0x36b47a+0x1)%0x100,_0x4c725d=(_0x4c725d+_0x713cd5[_0x36b47a])%0x100,_0x30c763=_0x713cd5[_0x36b47a],_0x713cd5[_0x36b47a]=_0x713cd5[_0x4c725d],_0x713cd5[_0x4c725d]=_0x30c763,_0x2dd0f5+=String['fromCharCode'](_0x19cedf['charCodeAt'](_0x3c07e2)^_0x713cd5[(_0x713cd5[_0x36b47a]+_0x713cd5[_0x4c725d])%0x100]);}return _0x2dd0f5;};_0x2ed8['qVawzO']=_0x5c9416,_0x2113b9=arguments,_0x2ed8['oftwUg']=!![];}const _0x42b909=_0x2815[0x0],_0x4236eb=_0x281549+_0x42b909,_0x3868ea=_0x2113b9[_0x4236eb];return!_0x3868ea?(_0x2ed8['SsaWCA']===undefined&&(_0x2ed8['SsaWCA']=!![]),_0x4fca8b=_0x2ed8['qVawzO'](_0x4fca8b,_0x3caeae),_0x2113b9[_0x4236eb]=_0x4fca8b):_0x4fca8b=_0x3868ea,_0x4fca8b;},_0x2ed8(_0x2113b9,_0x4024b4);}function Env(_0x50813b,_0x3d91ce){const _0x134ace=_0x73b9b8,_0x235a35=_0x3f4728;class _0x43fbfe{constructor(_0xf32785){const _0x368d5c=_0x3cae;this[_0x368d5c(0x1a7)]=_0xf32785;}[_0x235a35(0x156)](_0x17b29e,_0x4b4d1a=_0x134ace(0x1eb,'2B7G')){const _0x3ac39e=_0x134ace,_0x5d2227=_0x235a35;_0x17b29e=typeof _0x17b29e===_0x5d2227(0x147)?{'url':_0x17b29e}:_0x17b29e;let _0x481778=this[_0x5d2227(0x230)];return _0x4b4d1a===_0x3ac39e(0x194,'@FPC')&&(_0x481778=this[_0x5d2227(0x111)]),new Promise((_0x320536,_0x46f0e2)=>{const _0x34be54=_0x5d2227;_0x481778[_0x34be54(0x19a)](this,_0x17b29e,(_0x19b78e,_0x2ce385,_0x29bf7a)=>{if(_0x19b78e)_0x46f0e2(_0x19b78e);else _0x320536(_0x2ce385);});});}['get'](_0x2e3378){const _0x3c4a88=_0x134ace;return this[_0x3c4a88(0x16a,'p4bJ')]['call'](this[_0x3c4a88(0x1c0,'vsfy')],_0x2e3378);}['post'](_0x463578){const _0x5264c0=_0x134ace;return this[_0x5264c0(0x189,'@FPC')][_0x5264c0(0x1a2,'$gEn')](this[_0x5264c0(0x1d1,'2B7G')],_0x463578,_0x5264c0(0x1d6,'4m)4'));}}return new class{constructor(_0x1512d7,_0x493bcd){const _0x146855=_0x235a35,_0x5839b3=_0x134ace;this[_0x5839b3(0x1e9,'Q(6&')]=_0x1512d7,this['http']=new _0x43fbfe(this),this[_0x5839b3(0x196,'p4bJ')]=null,this['dataFile']='box.dat',this[_0x146855(0x237)]=[],this['isMute']=![],this[_0x5839b3(0x12e,'n5bi')]=![],this['logSeparator']='\x0a',this[_0x5839b3(0x202,'y!lb')]=new Date()['getTime'](),Object[_0x146855(0x1d2)](this,_0x493bcd),this[_0x146855(0x13c)]('','🔔'+this[_0x5839b3(0x1f2,'p4bJ')]+_0x146855(0xfe));}['isNode'](){const _0x2c8e20=_0x134ace;return _0x2c8e20(0x1e3,'6%K1')!==typeof module&&!!module[_0x2c8e20(0x145,'y!lb')];}[_0x134ace(0x20a,'j36k')](){return'undefined'!==typeof $task;}[_0x235a35(0x211)](){const _0x579bb4=_0x235a35;return _0x579bb4(0x179)!==typeof $httpClient&&_0x579bb4(0x179)===typeof $loon;}[_0x235a35(0x1d9)](){const _0x39ca21=_0x134ace;return _0x39ca21(0x128,'M2I)')!==typeof $loon;}[_0x235a35(0x1e7)](){const _0x578adb=_0x235a35;return _0x578adb(0x179)!==typeof $rocket;}['toObj'](_0x191ffd,_0x49f693=null){try{return JSON['parse'](_0x191ffd);}catch{return _0x49f693;}}[_0x134ace(0x105,'ZvHD')](_0xe98727,_0x102751=null){const _0x5d64e4=_0x134ace;try{return JSON[_0x5d64e4(0x148,'$gEn')](_0xe98727);}catch{return _0x102751;}}[_0x134ace(0x1bc,'AI3H')](_0x1f0711,_0x55d0e0){const _0x501060=_0x235a35,_0x29d412=_0x134ace;let _0x3ea77b=_0x55d0e0;const _0x2ffa01=this['getdata'](_0x1f0711);if(_0x2ffa01)try{_0x3ea77b=JSON[_0x29d412(0x1c8,'@FK!')](this[_0x501060(0x10e)](_0x1f0711));}catch{}return _0x3ea77b;}[_0x235a35(0x1a8)](_0x520a1d,_0x851cc8){const _0x451de5=_0x134ace,_0x41e82c=_0x235a35;try{return this[_0x41e82c(0x137)](JSON[_0x451de5(0x13a,'@FPC')](_0x520a1d),_0x851cc8);}catch{return![];}}['getScript'](_0x3a33a1){return new Promise(_0x493d06=>{const _0x5b6e5a=_0x2ed8;this[_0x5b6e5a(0x1cd,'2B7G')]({'url':_0x3a33a1},(_0x120fae,_0x38f720,_0x51e1e3)=>_0x493d06(_0x51e1e3));});}[_0x134ace(0x227,'XYIG')](_0x4a244a,_0x4b3b9f){const _0x247974=_0x235a35;return new Promise(_0x366089=>{const _0x588117=_0x2ed8,_0x30ff93=_0x3cae;let _0x57e552=this[_0x30ff93(0x10e)]('@chavy_boxjs_userCfgs.httpapi');_0x57e552=_0x57e552?_0x57e552[_0x30ff93(0x110)](/\n/g,'')[_0x30ff93(0x204)]():_0x57e552;let _0x5eef7f=this[_0x30ff93(0x10e)](_0x30ff93(0xfa));_0x5eef7f=_0x5eef7f?_0x5eef7f*0x1:0x14,_0x5eef7f=_0x4b3b9f&&_0x4b3b9f[_0x588117(0x125,'AI3H')]?_0x4b3b9f['timeout']:_0x5eef7f;const [_0x58cb2c,_0x5449a8]=_0x57e552[_0x588117(0x14c,'^K8g')]('@'),_0x381313={'url':_0x30ff93(0x1cf)+_0x5449a8+_0x30ff93(0x132),'body':{'script_text':_0x4a244a,'mock_type':_0x588117(0x115,'ZvHD'),'timeout':_0x5eef7f},'headers':{'X-Key':_0x58cb2c,'Accept':'*/*'}};this[_0x30ff93(0x111)](_0x381313,(_0x3b8e95,_0x18b711,_0x5f0b2b)=>_0x366089(_0x5f0b2b));})[_0x247974(0x1fe)](_0x477e4d=>this['logErr'](_0x477e4d));}[_0x235a35(0x1f1)](){const _0x37f351=_0x134ace,_0x222714=_0x235a35;if(this[_0x222714(0x117)]()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x222714(0x218)]?this[_0x222714(0x218)]:require(_0x37f351(0x20b,'f#mP'));const _0x2f4104=this[_0x222714(0x218)]['resolve'](this[_0x222714(0x1d4)]),_0x5434fe=this['path'][_0x37f351(0x1f0,'KaiT')](process[_0x37f351(0x1ce,'%C8e')](),this['dataFile']),_0x1d5a68=this['fs'][_0x222714(0x177)](_0x2f4104),_0x424f6b=!_0x1d5a68&&this['fs'][_0x37f351(0x235,'@P]c')](_0x5434fe);if(_0x1d5a68||_0x424f6b){const _0xbbd68e=_0x1d5a68?_0x2f4104:_0x5434fe;try{return JSON[_0x37f351(0x1fa,'Tg2I')](this['fs']['readFileSync'](_0xbbd68e));}catch(_0x1d7222){return{};}}else return{};}else return{};}[_0x134ace(0x17a,'y!lb')](){const _0xb7e58d=_0x235a35,_0x309aac=_0x134ace;if(this[_0x309aac(0x22f,'KaiT')]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0xb7e58d(0x218)]=this[_0x309aac(0x214,'4us&')]?this[_0x309aac(0x213,'nefV')]:require('path');const _0x5b7de7=this[_0x309aac(0x229,'$gEn')][_0x309aac(0x182,'[)U%')](this[_0xb7e58d(0x1d4)]),_0xe6d5b8=this[_0xb7e58d(0x218)][_0xb7e58d(0x1fc)](process['cwd'](),this['dataFile']),_0x1d8e93=this['fs'][_0xb7e58d(0x177)](_0x5b7de7),_0x37ef0a=!_0x1d8e93&&this['fs'][_0x309aac(0x226,'j36k')](_0xe6d5b8),_0x46d061=JSON[_0x309aac(0x22e,'jW*D')](this['data']);if(_0x1d8e93)this['fs'][_0x309aac(0x152,'AI3H')](_0x5b7de7,_0x46d061);else _0x37ef0a?this['fs'][_0xb7e58d(0x1c1)](_0xe6d5b8,_0x46d061):this['fs'][_0x309aac(0x12d,'LIgT')](_0x5b7de7,_0x46d061);}}[_0x235a35(0x19f)](_0x46d391,_0x3d1e3e,_0x3ee61d=undefined){const _0x943628=_0x235a35,_0x172a4a=_0x3d1e3e['replace'](/[(d+)]/g,'.$1')[_0x943628(0x1c9)]('.');let _0x58206a=_0x46d391;for(const _0x30acef of _0x172a4a){_0x58206a=Object(_0x58206a)[_0x30acef];if(_0x58206a===undefined)return _0x3ee61d;}return _0x58206a;}[_0x235a35(0x215)](_0x5b2c1e,_0x3d69b8,_0x4008a4){const _0x5d8432=_0x134ace,_0x2977f2=_0x235a35;if(Object(_0x5b2c1e)!==_0x5b2c1e)return _0x5b2c1e;if(!Array[_0x2977f2(0x17d)](_0x3d69b8))_0x3d69b8=_0x3d69b8['toString']()[_0x2977f2(0x169)](/[^.[]]+/g)||[];return _0x3d69b8[_0x2977f2(0x1ad)](0x0,-0x1)[_0x2977f2(0xf8)]((_0x53fa49,_0x19714f,_0x6d014f)=>Object(_0x53fa49[_0x19714f])===_0x53fa49[_0x19714f]?_0x53fa49[_0x19714f]:_0x53fa49[_0x19714f]=Math[_0x5d8432(0x1f3,'ZvHD')](_0x3d69b8[_0x6d014f+0x1])>>0x0===+_0x3d69b8[_0x6d014f+0x1]?[]:{},_0x5b2c1e)[_0x3d69b8[_0x3d69b8[_0x5d8432(0x200,'2B7G')]-0x1]]=_0x4008a4,_0x5b2c1e;}['getdata'](_0x410234){const _0xdae320=_0x134ace,_0x408d7a=_0x235a35;let _0x22419a=this[_0x408d7a(0x1a9)](_0x410234);if(/^@/[_0x408d7a(0x14d)](_0x410234)){const [,_0x2b999b,_0x68826b]=/^@(.*?).(.*?)$/[_0xdae320(0x238,'Iwz[')](_0x410234),_0x4be0d9=_0x2b999b?this[_0x408d7a(0x1a9)](_0x2b999b):'';if(_0x4be0d9)try{const _0x17523d=JSON['parse'](_0x4be0d9);_0x22419a=_0x17523d?this[_0x408d7a(0x19f)](_0x17523d,_0x68826b,''):_0x22419a;}catch(_0x2a8929){_0x22419a='';}}return _0x22419a;}['setdata'](_0x339105,_0xe454c6){const _0x5a201f=_0x235a35,_0x6bf70b=_0x134ace;let _0x1970c7=![];if(/^@/[_0x6bf70b(0x225,'nefV')](_0xe454c6)){const [,_0x1f5802,_0x1efb7f]=/^@(.*?).(.*?)$/[_0x5a201f(0x22c)](_0xe454c6),_0x1dd7d3=this[_0x6bf70b(0x223,'p4bJ')](_0x1f5802),_0x3546ef=_0x1f5802?_0x1dd7d3===_0x6bf70b(0x212,'([dz')?null:_0x1dd7d3||'{}':'{}';try{const _0x3fa830=JSON[_0x5a201f(0x191)](_0x3546ef);this[_0x6bf70b(0x15d,'y!lb')](_0x3fa830,_0x1efb7f,_0x339105),_0x1970c7=this[_0x6bf70b(0x1b4,'XYIG')](JSON[_0x5a201f(0x1f9)](_0x3fa830),_0x1f5802);}catch(_0x5b28c4){const _0x508924={};this['lodash_set'](_0x508924,_0x1efb7f,_0x339105),_0x1970c7=this[_0x5a201f(0x116)](JSON['stringify'](_0x508924),_0x1f5802);}}else _0x1970c7=this[_0x5a201f(0x116)](_0x339105,_0xe454c6);return _0x1970c7;}[_0x134ace(0x1a1,'([dz')](_0x54daaa){const _0x4217ea=_0x134ace,_0xb0d4b2=_0x235a35;if(this[_0xb0d4b2(0x211)]()||this[_0x4217ea(0x21e,'M2I)')]())return $persistentStore[_0x4217ea(0x198,'W19p')](_0x54daaa);else{if(this[_0xb0d4b2(0x208)]())return $prefs[_0xb0d4b2(0x1c5)](_0x54daaa);else return this[_0x4217ea(0x1cb,'AI3H')]()?(this[_0x4217ea(0x1af,'4m)4')]=this['loaddata'](),this[_0xb0d4b2(0x123)][_0x54daaa]):this[_0xb0d4b2(0x123)]&&this[_0x4217ea(0x106,'jaaW')][_0x54daaa]||null;}}['setval'](_0x1bfa62,_0x3db874){const _0x4d2be5=_0x235a35,_0x282699=_0x134ace;if(this['isSurge']()||this[_0x282699(0x1be,'^K8g')]())return $persistentStore[_0x282699(0x15a,'yi[y')](_0x1bfa62,_0x3db874);else{if(this[_0x4d2be5(0x208)]())return $prefs['setValueForKey'](_0x1bfa62,_0x3db874);else return this[_0x282699(0x1d3,'W[5E')]()?(this[_0x4d2be5(0x123)]=this[_0x4d2be5(0x1f1)](),this[_0x4d2be5(0x123)][_0x3db874]=_0x1bfa62,this[_0x4d2be5(0x102)](),!![]):this[_0x4d2be5(0x123)]&&this[_0x4d2be5(0x123)][_0x3db874]||null;}}['initGotEnv'](_0x570c10){const _0x1039fc=_0x235a35,_0x3d9dc7=_0x134ace;this['got']=this['got']?this[_0x3d9dc7(0x130,'#ck1')]:require(_0x3d9dc7(0x224,'p4bJ')),this['cktough']=this['cktough']?this['cktough']:require('tough-cookie'),this[_0x1039fc(0x158)]=this[_0x3d9dc7(0x161,'4m)4')]?this['ckjar']:new this['cktough'][(_0x1039fc(0x1bd))](),_0x570c10&&(_0x570c10[_0x3d9dc7(0x205,'yi[y')]=_0x570c10[_0x1039fc(0x21d)]?_0x570c10[_0x3d9dc7(0x22b,'#ck1')]:{},undefined===_0x570c10['headers'][_0x3d9dc7(0x1d5,'Sr1U')]&&undefined===_0x570c10[_0x1039fc(0x1fb)]&&(_0x570c10[_0x1039fc(0x1fb)]=this[_0x1039fc(0x158)]));}[_0x134ace(0x1f6,'3Tm&')](_0x1e5717,_0x34905a=()=>{}){const _0x207ccb=_0x134ace,_0x2c3b63=_0x235a35;_0x1e5717['headers']&&(delete _0x1e5717[_0x2c3b63(0x21d)]['Content-Type'],delete _0x1e5717[_0x2c3b63(0x21d)][_0x2c3b63(0x20c)]);if(this[_0x2c3b63(0x211)]()||this[_0x2c3b63(0x1d9)]())this[_0x2c3b63(0x211)]()&&this[_0x2c3b63(0x1ee)]&&(_0x1e5717[_0x2c3b63(0x21d)]=_0x1e5717[_0x207ccb(0x14a,'([dz')]||{},Object[_0x2c3b63(0x1d2)](_0x1e5717[_0x207ccb(0x15f,'Iy0d')],{'X-Surge-Skip-Scripting':![]})),$httpClient[_0x2c3b63(0x230)](_0x1e5717,(_0x321b79,_0x2182a4,_0x62655a)=>{const _0x4dc500=_0x2c3b63;!_0x321b79&&_0x2182a4&&(_0x2182a4[_0x4dc500(0x20f)]=_0x62655a,_0x2182a4[_0x4dc500(0x1ed)]=_0x2182a4[_0x4dc500(0x108)]),_0x34905a(_0x321b79,_0x2182a4,_0x62655a);});else{if(this[_0x2c3b63(0x208)]())this[_0x2c3b63(0x1ee)]&&(_0x1e5717['opts']=_0x1e5717[_0x2c3b63(0x181)]||{},Object[_0x2c3b63(0x1d2)](_0x1e5717['opts'],{'hints':![]})),$task[_0x2c3b63(0x22a)](_0x1e5717)['then'](_0x2a2297=>{const {statusCode:_0x22049d,statusCode:_0x2dbd4c,headers:_0x48acfb,body:_0x3f1ebc}=_0x2a2297;_0x34905a(null,{'status':_0x22049d,'statusCode':_0x2dbd4c,'headers':_0x48acfb,'body':_0x3f1ebc},_0x3f1ebc);},_0xd486d1=>_0x34905a(_0xd486d1));else this[_0x207ccb(0x157,'4m)4')]()&&(this['initGotEnv'](_0x1e5717),this[_0x2c3b63(0x21a)](_0x1e5717)['on'](_0x207ccb(0x155,'$gEn'),(_0x434904,_0x5c402b)=>{const _0x2225b1=_0x207ccb,_0x60aa2a=_0x2c3b63;try{if(_0x434904[_0x60aa2a(0x21d)][_0x2225b1(0x14e,'y!lb')]){const _0xb21a04=_0x434904[_0x60aa2a(0x21d)][_0x60aa2a(0x13e)][_0x2225b1(0x10a,'4m)4')](this[_0x2225b1(0x129,'%H([')]['Cookie'][_0x2225b1(0x112,'y!lb')])[_0x60aa2a(0x12f)]();_0xb21a04&&this[_0x2225b1(0x1a0,'FINc')][_0x2225b1(0x15e,'@P]c')](_0xb21a04,null),_0x5c402b[_0x60aa2a(0x1fb)]=this[_0x60aa2a(0x158)];}}catch(_0xf227a){this[_0x2225b1(0x210,'f#mP')](_0xf227a);}})[_0x207ccb(0x11e,']R6*')](_0x2f2a84=>{const {statusCode:_0x5cc090,statusCode:_0x30f855,headers:_0x21ca0a,body:_0x477939}=_0x2f2a84;_0x34905a(null,{'status':_0x5cc090,'statusCode':_0x30f855,'headers':_0x21ca0a,'body':_0x477939},_0x477939);},_0x4381cd=>{const _0x1a8594=_0x2c3b63,{message:_0x2414f1,response:_0x4b570e}=_0x4381cd;_0x34905a(_0x2414f1,_0x4b570e,_0x4b570e&&_0x4b570e[_0x1a8594(0x20f)]);}));}}[_0x134ace(0x103,'AI3H')](_0x15704b,_0x5d82c3=()=>{}){const _0x4b6e15=_0x235a35,_0x3e52d0=_0x134ace,_0x334f53=_0x15704b['method']?_0x15704b[_0x3e52d0(0x10d,'@FK!')][_0x3e52d0(0x16e,'jaaW')]():_0x3e52d0(0x1c6,'[)U%');_0x15704b[_0x3e52d0(0x20e,'11av')]&&_0x15704b['headers']&&!_0x15704b['headers'][_0x3e52d0(0x14f,'4m)4')]&&(_0x15704b[_0x4b6e15(0x21d)][_0x4b6e15(0x1f7)]=_0x4b6e15(0x1bf));if(_0x15704b[_0x3e52d0(0x135,'^K8g')])delete _0x15704b['headers'][_0x4b6e15(0x20c)];if(this[_0x3e52d0(0x168,'XYIG')]()||this[_0x3e52d0(0x154,'vsfy')]())this[_0x3e52d0(0x1df,'Sr1U')]()&&this[_0x4b6e15(0x1ee)]&&(_0x15704b[_0x3e52d0(0x109,'3Tm&')]=_0x15704b[_0x4b6e15(0x21d)]||{},Object['assign'](_0x15704b['headers'],{'X-Surge-Skip-Scripting':![]})),$httpClient[_0x334f53](_0x15704b,(_0x266c74,_0x4e1d10,_0x561551)=>{const _0x23d111=_0x3e52d0;!_0x266c74&&_0x4e1d10&&(_0x4e1d10['body']=_0x561551,_0x4e1d10[_0x23d111(0x140,'f#mP')]=_0x4e1d10[_0x23d111(0x190,'Tg2I')]),_0x5d82c3(_0x266c74,_0x4e1d10,_0x561551);});else{if(this[_0x4b6e15(0x208)]())_0x15704b[_0x4b6e15(0x201)]=_0x334f53,this[_0x4b6e15(0x1ee)]&&(_0x15704b[_0x3e52d0(0x185,'%H([')]=_0x15704b['opts']||{},Object['assign'](_0x15704b[_0x4b6e15(0x181)],{'hints':![]})),$task['fetch'](_0x15704b)['then'](_0x6a174c=>{const {statusCode:_0x56876f,statusCode:_0x13dc7e,headers:_0x1245ad,body:_0x10a36c}=_0x6a174c;_0x5d82c3(null,{'status':_0x56876f,'statusCode':_0x13dc7e,'headers':_0x1245ad,'body':_0x10a36c},_0x10a36c);},_0x3c9cc7=>_0x5d82c3(_0x3c9cc7));else{if(this[_0x3e52d0(0x186,'hue1')]()){this[_0x3e52d0(0x165,'FINc')](_0x15704b);const {url:_0x2e0689,..._0x4ac2e3}=_0x15704b;this[_0x4b6e15(0x21a)][_0x334f53](_0x2e0689,_0x4ac2e3)[_0x4b6e15(0x1b1)](_0x4251d7=>{const {statusCode:_0x4205bd,statusCode:_0x35d4ee,headers:_0x5959a1,body:_0x541fc3}=_0x4251d7;_0x5d82c3(null,{'status':_0x4205bd,'statusCode':_0x35d4ee,'headers':_0x5959a1,'body':_0x541fc3},_0x541fc3);},_0x58d2d0=>{const _0x26c740=_0x4b6e15,{message:_0x1efd81,response:_0x525278}=_0x58d2d0;_0x5d82c3(_0x1efd81,_0x525278,_0x525278&&_0x525278[_0x26c740(0x20f)]);});}}}}[_0x235a35(0x209)](_0x1d4769,_0x1feed0=null){const _0x921f68=_0x235a35,_0x4d2569=_0x134ace,_0x3f7be9=_0x1feed0?new Date(_0x1feed0):new Date();let _0x39f6ce={'M+':_0x3f7be9['getMonth']()+0x1,'d+':_0x3f7be9[_0x4d2569(0x1de,'[)U%')](),'H+':_0x3f7be9[_0x4d2569(0x206,'@FPC')](),'m+':_0x3f7be9['getMinutes'](),'s+':_0x3f7be9[_0x4d2569(0x1e1,'hue1')](),'q+':Math[_0x4d2569(0x15b,'rF$d')]((_0x3f7be9[_0x4d2569(0x136,'LIgT')]()+0x3)/0x3),'S':_0x3f7be9[_0x4d2569(0x217,'KaiT')]()};if(/(y+)/[_0x4d2569(0x176,'6%K1')](_0x1d4769))_0x1d4769=_0x1d4769[_0x921f68(0x110)](RegExp['$1'],(_0x3f7be9['getFullYear']()+'')[_0x921f68(0x222)](0x4-RegExp['$1']['length']));for(let _0x4e375e in _0x39f6ce)if(new RegExp('('+_0x4e375e+')')[_0x921f68(0x14d)](_0x1d4769))_0x1d4769=_0x1d4769['replace'](RegExp['$1'],RegExp['$1'][_0x921f68(0x187)]==0x1?_0x39f6ce[_0x4e375e]:('00'+_0x39f6ce[_0x4e375e])[_0x4d2569(0x1d8,'Tg2I')]((''+_0x39f6ce[_0x4e375e])[_0x4d2569(0x14b,'%C8e')]));return _0x1d4769;}['msg'](_0x42af01=_0x50813b,_0x886cf9='',_0x1c0b73='',_0x306fd7){const _0x2fba78=_0x235a35,_0x48fe86=_0x134ace,_0x21a12a=_0x22b540=>{const _0x174074=_0x3cae,_0x5a150d=_0x2ed8;if(!_0x22b540)return _0x22b540;if(typeof _0x22b540===_0x5a150d(0x19e,']R6*')){if(this['isLoon']())return _0x22b540;else{if(this[_0x5a150d(0x19d,'KaiT')]())return{'open-url':_0x22b540};else{if(this[_0x5a150d(0x21f,'#ck1')]())return{'url':_0x22b540};else return undefined;}}}else{if(typeof _0x22b540===_0x5a150d(0x1b9,'FINc')){if(this[_0x5a150d(0x120,'%C8e')]()){let _0x2286fc=_0x22b540[_0x5a150d(0x1ac,'LIgT')]||_0x22b540[_0x174074(0x183)]||_0x22b540[_0x174074(0x170)],_0x1a83cd=_0x22b540[_0x5a150d(0x142,'FINc')]||_0x22b540[_0x174074(0x150)];return{'openUrl':_0x2286fc,'mediaUrl':_0x1a83cd};}else{if(this[_0x174074(0x208)]()){let _0x1be591=_0x22b540[_0x174074(0x170)]||_0x22b540['url']||_0x22b540['openUrl'],_0x3adadd=_0x22b540[_0x5a150d(0x184,'Sr1U')]||_0x22b540['mediaUrl'];return{'open-url':_0x1be591,'media-url':_0x3adadd};}else{if(this[_0x5a150d(0x13b,'4us&')]()){let _0x47f1a1=_0x22b540['url']||_0x22b540[_0x174074(0x1b7)]||_0x22b540['open-url'];return{'url':_0x47f1a1};}}}}else return undefined;}};if(!this[_0x48fe86(0x1da,'M2I)')]){if(this[_0x2fba78(0x211)]()||this[_0x48fe86(0x17e,'3Tm&')]())$notification[_0x48fe86(0x1aa,'%C8e')](_0x42af01,_0x886cf9,_0x1c0b73,_0x21a12a(_0x306fd7));else this[_0x2fba78(0x208)]()&&$notify(_0x42af01,_0x886cf9,_0x1c0b73,_0x21a12a(_0x306fd7));}if(!this['isMuteLog']){let _0x419c8e=['','==============📣系统通知📣=============='];_0x419c8e['push'](_0x42af01),_0x886cf9?_0x419c8e[_0x2fba78(0x1cc)](_0x886cf9):'',_0x1c0b73?_0x419c8e[_0x48fe86(0x160,'WAyD')](_0x1c0b73):'',console[_0x2fba78(0x13c)](_0x419c8e[_0x2fba78(0x18b)]('\x0a')),this[_0x48fe86(0x122,'Iwz[')]=this[_0x48fe86(0x228,'nefV')][_0x48fe86(0x220,'3Tm&')](_0x419c8e);}}[_0x235a35(0x13c)](..._0x4f0c0c){const _0x16d838=_0x235a35,_0x431836=_0x134ace;_0x4f0c0c[_0x431836(0x193,'jW*D')]>0x0&&(this[_0x431836(0x159,'jW*D')]=[...this[_0x431836(0xff,'#ck1')],..._0x4f0c0c]),console[_0x16d838(0x13c)](_0x4f0c0c[_0x16d838(0x18b)](this[_0x16d838(0x19c)]));}[_0x235a35(0x178)](_0x26c2af,_0x454445){const _0x115cff=_0x134ace,_0x3a40e0=_0x235a35,_0x110e41=!this[_0x3a40e0(0x211)]()&&!this[_0x3a40e0(0x208)]()&&!this['isLoon']();!_0x110e41?this[_0x115cff(0x104,'Tg2I')]('','❗️'+this['name']+_0x3a40e0(0x1a3),_0x26c2af):this[_0x115cff(0x100,'n5bi')]('','❗️'+this[_0x3a40e0(0x18e)]+',\x20错误!',_0x26c2af[_0x3a40e0(0x144)]);}[_0x235a35(0xfd)](_0x355b16){return new Promise(_0x327d14=>setTimeout(_0x327d14,_0x355b16));}[_0x134ace(0x134,'Iwz[')](_0x2427d0={}){const _0x114366=_0x134ace,_0x1cc4b7=_0x235a35,_0x29ecd1=new Date()[_0x1cc4b7(0x172)](),_0x2dc6f1=(_0x29ecd1-this[_0x114366(0x1c2,'XYIG')])/0x3e8;this[_0x1cc4b7(0x13c)]('','🔔'+this[_0x114366(0x1b8,']R6*')]+_0x114366(0x11f,'W19p')+_0x2dc6f1+'秒'),this[_0x114366(0x1c4,'nefV')](),(this[_0x114366(0x1bb,'n5bi')]()||this['isQuanX']()||this['isLoon']())&&$done(_0x2427d0);}}(_0x50813b,_0x3d91ce);}
