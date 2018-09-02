export default function (options) {
  (function (w, d, o, r, a, m) {
    w.intercomSettings = {
      Page: w.location.href,
      hide_default_launcher: false,
      ...o
    }
    const ic=w.Intercom;
    if(typeof ic === 'function') {
      ic('reattach_activator');
      ic('update',w.intercomSettings);
    }
    else {
      const i= function () {
        i.c(arguments)
      };
      i.q=[];
      i.c=function (args){
        i.q.push(args)
      };
      w.Intercom=i;
      function l(){
        //adds widget script as script tag to webpage
        a = d.createElement('script'),
          m = d.getElementsByTagName('script')[0];
        a.type='text/javascript';
        a.async=1;
        a.src='https://widget.intercom.io/widget/' ;
        m.parentNode.insertBefore(a,m);
      }
      l();
    }
  })(window, document, options, 'ic');
}