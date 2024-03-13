import { initMixin } from './init.js';
import { stateMixin } from './state.js';
import { renderMixin } from './render.js';
import { eventsMixin } from './events.js';
import { lifecycleMixin } from './lifecycle.js';

/** Vue 构造函数 */
function Vue(options) {
  this._init(options);
}

// 在原型 Vue.prototype 上定义各方法，使代码层次分明
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

export default Vue;
