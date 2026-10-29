(function(){
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce)return;
  var set='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz0123456789#%&@';
  document.querySelectorAll('#name span').forEach(function(el,row){
    var t=el.dataset.t,start=null,dur=1100+row*300;
    el.setAttribute('aria-hidden','true');
    function f(ts){
      if(start===null)start=ts;
      var p=Math.min(1,(ts-start)/dur),n=Math.floor(p*t.length),o='';
      for(var i=0;i<t.length;i++)o+=i<n?t[i]:set[Math.floor(Math.random()*set.length)];
      el.textContent=o;
      if(p<1)requestAnimationFrame(f);else el.textContent=t;
    }
    el.textContent=t.replace(/./g,'·');
    requestAnimationFrame(f);
  });
})();
