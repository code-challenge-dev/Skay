var I,d,Q,re,x,q,X,H,B,$,R,T={},Y=[],le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function w(_,e){for(var t in e)_[t]=e[t];return _}function Z(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function ie(_,e,t){var r,o,l,f={};for(l in e)l=="key"?r=e[l]:l=="ref"?o=e[l]:f[l]=e[l];if(arguments.length>2&&(f.children=arguments.length>3?I.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(l in _.defaultProps)f[l]===void 0&&(f[l]=_.defaultProps[l]);return F(_,f,r,o,null)}function F(_,e,t,r,o){var l={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Q,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(l),l}function W(_){return _.children}function N(_,e){this.props=_,this.context=e}function P(_,e){if(e==null)return _.__?P(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?P(_):null}function ee(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return ee(_)}}function G(_){(!_.__d&&(_.__d=!0)&&x.push(_)&&!E.__r++||q!==d.debounceRendering)&&((q=d.debounceRendering)||X)(E)}function E(){var _,e,t,r,o,l,f,p;for(x.sort(H);_=x.shift();)_.__d&&(e=x.length,r=void 0,l=(o=(t=_).__v).__e,f=[],p=[],t.__P&&((r=w({},o)).__v=o.__v+1,d.vnode&&d.vnode(r),j(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[l]:null,f,l??P(o),!!(32&o.__u),p),r.__v=o.__v,r.__.__k[r.__i]=r,ne(f,r,p),r.__e!=l&&ee(r)),x.length>e&&x.sort(H));E.__r=0}function _e(_,e,t,r,o,l,f,p,u,i,c){var n,g,s,v,m,y=r&&r.__k||Y,a=e.length;for(t.__d=u,se(t,e,y),u=t.__d,n=0;n<a;n++)(s=t.__k[n])!=null&&(g=s.__i===-1?T:y[s.__i]||T,s.__i=n,j(_,s,g,o,l,f,p,u,i,c),v=s.__e,s.ref&&g.ref!=s.ref&&(g.ref&&z(g.ref,null,s),c.push(s.ref,s.__c||v,s)),m==null&&v!=null&&(m=v),65536&s.__u||g.__k===s.__k?u=te(s,u,_):typeof s.type=="function"&&s.__d!==void 0?u=s.__d:v&&(u=v.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=u,t.__e=m}function se(_,e,t){var r,o,l,f,p,u=e.length,i=t.length,c=i,n=0;for(_.__k=[],r=0;r<u;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(f=r+n,(o=_.__k[r]=typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?F(null,o,null,null,null):O(o)?F(W,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?F(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=_,o.__b=_.__b+1,l=null,(p=o.__i=fe(o,t,f,c))!==-1&&(c--,(l=t[p])&&(l.__u|=131072)),l==null||l.__v===null?(p==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):p!==f&&(p==f-1?n--:p==f+1?n++:(p>f?n--:n++,o.__u|=65536))):o=_.__k[r]=null;if(c)for(r=0;r<i;r++)(l=t[r])!=null&&!(131072&l.__u)&&(l.__e==_.__d&&(_.__d=P(l)),oe(l,l))}function te(_,e,t){var r,o;if(typeof _.type=="function"){for(r=_.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=_,e=te(r[o],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=P(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function fe(_,e,t,r){var o=_.key,l=_.type,f=t-1,p=t+1,u=e[t];if(u===null||u&&o==u.key&&l===u.type&&!(131072&u.__u))return t;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;f>=0||p<e.length;){if(f>=0){if((u=e[f])&&!(131072&u.__u)&&o==u.key&&l===u.type)return f;f--}if(p<e.length){if((u=e[p])&&!(131072&u.__u)&&o==u.key&&l===u.type)return p;p++}}return-1}function J(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||le.test(e)?t:t+"px"}function L(_,e,t,r,o){var l;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||J(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||J(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")l=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+l]=t,t?r?t.u=r.u:(t.u=B,_.addEventListener(e,l?R:$,l)):_.removeEventListener(e,l?R:$,l);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function K(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=B++;else if(e.t<t.u)return;return t(d.event?d.event(e):e)}}}function j(_,e,t,r,o,l,f,p,u,i){var c,n,g,s,v,m,y,a,h,S,b,M,C,V,D,A,k=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),l=[p=e.__e=t.__e]),(c=d.__b)&&c(e);e:if(typeof k=="function")try{if(a=e.props,h="prototype"in k&&k.prototype.render,S=(c=k.contextType)&&r[c.__c],b=c?S?S.props.value:c.__:r,t.__c?y=(n=e.__c=t.__c).__=n.__E:(h?e.__c=n=new k(a,b):(e.__c=n=new N(a,b),n.constructor=k,n.render=ue),S&&S.sub(n),n.props=a,n.state||(n.state={}),n.context=b,n.__n=r,g=n.__d=!0,n.__h=[],n._sb=[]),h&&n.__s==null&&(n.__s=n.state),h&&k.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,k.getDerivedStateFromProps(a,n.__s))),s=n.props,v=n.state,n.__v=e,g)h&&k.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),h&&n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(h&&k.getDerivedStateFromProps==null&&a!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,b)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=a,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(U){U&&(U.__=e)}),M=0;M<n._sb.length;M++)n.__h.push(n._sb[M]);n._sb=[],n.__h.length&&f.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,b),h&&n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,v,m)})}if(n.context=b,n.props=a,n.__P=_,n.__e=!1,C=d.__r,V=0,h){for(n.state=n.__s,n.__d=!1,C&&C(e),c=n.render(n.props,n.state,n.context),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[]}else do n.__d=!1,C&&C(e),c=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++V<25);n.state=n.__s,n.getChildContext!=null&&(r=w(w({},r),n.getChildContext())),h&&!g&&n.getSnapshotBeforeUpdate!=null&&(m=n.getSnapshotBeforeUpdate(s,v)),_e(_,O(A=c!=null&&c.type===W&&c.key==null?c.props.children:c)?A:[A],e,t,r,o,l,f,p,u,i),n.base=e.__e,e.__u&=-161,n.__h.length&&f.push(n),y&&(n.__E=n.__=null)}catch(U){if(e.__v=null,u||l!=null){for(e.__u|=u?160:32;p&&p.nodeType===8&&p.nextSibling;)p=p.nextSibling;l[l.indexOf(p)]=null,e.__e=p}else e.__e=t.__e,e.__k=t.__k;d.__e(U,e,t)}else l==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=pe(t.__e,e,t,r,o,l,f,u,i);(c=d.diffed)&&c(e)}function ne(_,e,t){e.__d=void 0;for(var r=0;r<t.length;r++)z(t[r],t[++r],t[++r]);d.__c&&d.__c(e,_),_.some(function(o){try{_=o.__h,o.__h=[],_.some(function(l){l.call(o)})}catch(l){d.__e(l,o.__v)}})}function pe(_,e,t,r,o,l,f,p,u){var i,c,n,g,s,v,m,y=t.props,a=e.props,h=e.type;if(h==="svg"?o="http://www.w3.org/2000/svg":h==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),l!=null){for(i=0;i<l.length;i++)if((s=l[i])&&"setAttribute"in s==!!h&&(h?s.localName===h:s.nodeType===3)){_=s,l[i]=null;break}}if(_==null){if(h===null)return document.createTextNode(a);_=document.createElementNS(o,h,a.is&&a),p&&(d.__m&&d.__m(e,l),p=!1),l=null}if(h===null)y===a||p&&_.data===a||(_.data=a);else{if(l=l&&I.call(_.childNodes),y=t.props||T,!p&&l!=null)for(y={},i=0;i<_.attributes.length;i++)y[(s=_.attributes[i]).name]=s.value;for(i in y)if(s=y[i],i!="children"){if(i=="dangerouslySetInnerHTML")n=s;else if(!(i in a)){if(i=="value"&&"defaultValue"in a||i=="checked"&&"defaultChecked"in a)continue;L(_,i,null,s,o)}}for(i in a)s=a[i],i=="children"?g=s:i=="dangerouslySetInnerHTML"?c=s:i=="value"?v=s:i=="checked"?m=s:p&&typeof s!="function"||y[i]===s||L(_,i,s,y[i],o);if(c)p||n&&(c.__html===n.__html||c.__html===_.innerHTML)||(_.innerHTML=c.__html),e.__k=[];else if(n&&(_.innerHTML=""),_e(_,O(g)?g:[g],e,t,r,h==="foreignObject"?"http://www.w3.org/1999/xhtml":o,l,f,l?l[0]:t.__k&&P(t,0),p,u),l!=null)for(i=l.length;i--;)Z(l[i]);p||(i="value",h==="progress"&&v==null?_.removeAttribute("value"):v!==void 0&&(v!==_[i]||h==="progress"&&!v||h==="option"&&v!==y[i])&&L(_,i,v,y[i],o),i="checked",m!==void 0&&m!==_[i]&&L(_,i,m,y[i],o))}return _}function z(_,e,t){try{if(typeof _=="function"){var r=typeof _.__u=="function";r&&_.__u(),r&&e==null||(_.__u=_(e))}else _.current=e}catch(o){d.__e(o,t)}}function oe(_,e,t){var r,o;if(d.unmount&&d.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||z(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){d.__e(l,e)}r.base=r.__P=null}if(r=_.__k)for(o=0;o<r.length;o++)r[o]&&oe(r[o],e,t||typeof _.type!="function");t||Z(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function ue(_,e,t){return this.constructor(_,t)}function ce(_,e,t){var r,o,l,f;d.__&&d.__(_,e),o=(r=typeof t=="function")?null:t&&t.__k||e.__k,l=[],f=[],j(e,_=(!r&&t||e).__k=ie(W,null,[_]),o||T,T,e.namespaceURI,!r&&t?[t]:o?null:e.firstChild?I.call(e.childNodes):null,l,!r&&t?t:o?o.__e:e.firstChild,r,f),ne(l,_,f)}function ae(_,e){ce(_,e,ae)}I=Y.slice,d={__e:function(_,e,t,r){for(var o,l,f;e=e.__;)if((o=e.__c)&&!o.__)try{if((l=o.constructor)&&l.getDerivedStateFromError!=null&&(o.setState(l.getDerivedStateFromError(_)),f=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(_,r||{}),f=o.__d),f)return o.__E=o}catch(p){_=p}throw _}},Q=0,re=function(_){return _!=null&&_.constructor==null},N.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof _=="function"&&(_=_(w({},t),this.props)),_&&w(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),G(this))},N.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),G(this))},N.prototype.render=W,x=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(_,e){return _.__v.__b-e.__v.__b},E.__r=0,B=0,$=K(!1),R=K(!0);export{ce as B,ae as D,ie as _,W as b,N as k,d as l,re as t};
