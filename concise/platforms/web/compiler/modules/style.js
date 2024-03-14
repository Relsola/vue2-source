import { parseStyleText } from 'web/util/style';
import { getAndRemoveAttr, getBindingAttr, baseWarn } from 'compiler/helpers';

function transformNode(el, options) {
  const warn = options.warn || baseWarn;
  const staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  const styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData(el) {
  let data = '';
  if (el.staticStyle) {
    data += `staticStyle:${el.staticStyle},`;
  }
  if (el.styleBinding) {
    data += `style:(${el.styleBinding}),`;
  }
  return data;
}

export default {
  staticKeys: ['staticStyle'],
  transformNode,
  genData
};
