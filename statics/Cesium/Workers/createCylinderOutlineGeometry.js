define(["./when-7ef6387a","./Check-ed6a1804","./Math-c73e522c","./Cartesian2-51a0e5d9","./Transforms-5dbe1e69","./RuntimeError-5b606d78","./WebGLConstants-30fc6f5c","./ComponentDatatype-3593b1c2","./GeometryAttribute-09b6f80a","./GeometryAttributes-cb18da36","./IndexDatatype-62984545","./GeometryOffsetAttribute-e4fca9ed","./CylinderGeometryLibrary-c88583b0"],function(h,e,t,v,A,i,r,R,G,O,V,C,L){"use strict";var g=new v.Cartesian2;function f(e){var t=(e=h.defaultValue(e,h.defaultValue.EMPTY_OBJECT)).length,i=e.topRadius,r=e.bottomRadius,a=h.defaultValue(e.slices,128),n=Math.max(h.defaultValue(e.numberOfVerticalLines,16),0);this._length=t,this._topRadius=i,this._bottomRadius=r,this._slices=a,this._numberOfVerticalLines=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}f.packedLength=6,f.pack=function(e,t,i){return i=h.defaultValue(i,0),t[i++]=e._length,t[i++]=e._topRadius,t[i++]=e._bottomRadius,t[i++]=e._slices,t[i++]=e._numberOfVerticalLines,t[i]=h.defaultValue(e._offsetAttribute,-1),t};var d={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return f.unpack=function(e,t,i){t=h.defaultValue(t,0);var r=e[t++],a=e[t++],n=e[t++],o=e[t++],u=e[t++],s=e[t];return h.defined(i)?(i._length=r,i._topRadius=a,i._bottomRadius=n,i._slices=o,i._numberOfVerticalLines=u,i._offsetAttribute=-1===s?void 0:s,i):(d.length=r,d.topRadius=a,d.bottomRadius=n,d.slices=o,d.numberOfVerticalLines=u,d.offsetAttribute=-1===s?void 0:s,new f(d))},f.createGeometry=function(e){var t=e._length,i=e._topRadius,r=e._bottomRadius,a=e._slices,n=e._numberOfVerticalLines;if(!(t<=0||i<0||r<0||0===i&&0===r)){var o,u=2*a,s=L.CylinderGeometryLibrary.computePositions(t,i,r,a,!1),f=2*a;if(0<n){var d=Math.min(n,a);o=Math.round(a/d),f+=d}var l,b=V.IndexDatatype.createTypedArray(u,2*f),c=0;for(l=0;l<a-1;l++)b[c++]=l,b[c++]=l+1,b[c++]=l+a,b[c++]=l+1+a;if(b[c++]=a-1,b[c++]=0,b[c++]=a+a-1,b[c++]=a,0<n)for(l=0;l<a;l+=o)b[c++]=l,b[c++]=l+a;var m=new O.GeometryAttributes;m.position=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:s}),g.x=.5*t,g.y=Math.max(r,i);var p=new A.BoundingSphere(v.Cartesian3.ZERO,v.Cartesian2.magnitude(g));if(h.defined(e._offsetAttribute)){t=s.length;var y=new Uint8Array(t/3),_=e._offsetAttribute===C.GeometryOffsetAttribute.NONE?0:1;C.arrayFill(y,_),m.applyOffset=new G.GeometryAttribute({componentDatatype:R.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})}return new G.Geometry({attributes:m,indices:b,primitiveType:G.PrimitiveType.LINES,boundingSphere:p,offsetAttribute:e._offsetAttribute})}},function(e,t){return h.defined(t)&&(e=f.unpack(e,t)),f.createGeometry(e)}});