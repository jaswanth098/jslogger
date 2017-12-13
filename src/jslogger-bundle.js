!function(){"use strict";function e(e){function t(e){D=e.user,delete e.user,y=e}function n(e){var t=new Date,n=window.location.host,o={UUID:uuidv1(),timestamp:t.getTime(),message:e.message,level:e.type,url:e.url,host_url:n,misc:e.misc};if(null!=D&&(o.user=D),null!=y)for(var i in y)o[i]=y[i];s(o)}function s(e){_+=1,window.localStorage.setItem("logging_"+e.UUID,JSON.stringify(e)),_>T&&(v(),_=0)}function o(e,t,s,o){var i={type:e,message:t,url:s,misc:o};n(i)}function i(){o("info",arguments[0],window.location.href,arguments[1]),console.info(arguments[0])}function r(){o("exception",arguments[0],window.location.href,arguments[1]),console.error(arguments[0])}function a(){o("debug",arguments[0],window.location.href,arguments[1]),console.debug(arguments[0])}function u(){o("log",arguments[0],window.location.href,arguments[1]),console.log(arguments[0])}function c(){o("warn",arguments[0],window.location.href,arguments[1]),console.warn(arguments[0])}function g(){o("msg",arguments[0],window.location.href,arguments[1])}function l(){o("exception",arguments[0],window.location.href,arguments[1]),console.error(arguments[0])}function m(e,t,s,o,i){try{var r=(new Date).getTime(),a={status:s.status,ready_state:s.readyState,status_message:s.statusText,url:t,start_time_ms:o,end_time_ms:r,request_time_ms:r-o,response_length:s.responseText.length};return i||(a.response=s.responseText.substring(0,2e3)),void n({message:e,misc:a})}catch(u){}}function f(e){var t=(new Date).getTime(),n=$.ajax(e);return n.done(function(){m("ajax success",e.url,n,t,!0)}),n.fail(function(){m("ajax success",e.url,n,t,!1)}),n}function w(e,t){var n=(new Date).getTime(),s=$.getJSON(e,t);return s.done(function(){m("getJSON success",e,s,n,!0)}),s.fail(function(){m("getJSON failed",e,s,n,!1)}),s}function d(e,t){var n=(new Date).getTime(),s=$.get(e,t);return s.done(function(){m("get request success",e,s,n,!0)}),s.fail(function(){m("get request failed",e,s,n,!1)}),s}function h(e,t){var n=(new Date).getTime(),s=$.post(e,t);return s.done(function(){m("post request success",e,s,n,!0)}),s.fail(function(){m("post request failed",e,s,n,!1)}),s}function v(){O&&p()}function p(){_=0,O=!1;var e=0,t=[],n=[];for(var s in window.localStorage)e=s.startsWith("logging")?e+1:e;if(0==e)return void(O=!0);for(var o in window.localStorage)o.startsWith("logging")&&t.length<1e3&&(t.push(JSON.parse(window.localStorage.getItem(o))),n.push(o));var i={logs:t},r=$.ajax({url:S,type:"POST",data:JSON.stringify(i),timeout:6e5,success:function(){for(var e in n)delete window.localStorage[n[e]]}});r.always(function(n){e-=t.length,e>0&&p(),O=!0})}this.ajax=f,this.getJSON=w,this.get=d,this.post=h,this.exception=l,this.info=i,this.error=r,this.debug=a,this.log=u,this.warn=c,this.message=g,this.bind=t;var _=0,S=e.url,x=e.time_ms?e.time_ms:5e3,T=e.max_logs?e.max_logs:1e3,v=v,n=n,s=s,D=null,y=null,O=!0;setInterval(function(){v()},x),window.onerror=function(e,t,n,o,i){var r=new Date,a={UUID:uuidv1(),timestamp:r.getTime(),message:e,url:t,lineno:n,colno:o,error:i,level:"javascript",host_url:window.location.host};s(a)},v()}window.jslogger=e}();
