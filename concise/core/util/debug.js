import { noop } from 'shared/util';

export let warn = noop;
export let tip = noop;
export let generateComponentTrace = noop; // work around flow check
export let formatComponentName = noop;
