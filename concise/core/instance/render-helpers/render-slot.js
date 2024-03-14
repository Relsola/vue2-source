/* @flow */

import { extend, warn, isObject } from 'core/util/index';

/**
 * Runtime helper for rendering <slot>
 */
export function renderSlot(name, fallbackRender, props, bindObject) {
  const scopedSlotFn = this.$scopedSlots[name];
  let nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function'
        ? fallbackRender()
        : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function'
        ? fallbackRender()
        : fallbackRender);
  }

  const target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes);
  } else {
    return nodes;
  }
}
