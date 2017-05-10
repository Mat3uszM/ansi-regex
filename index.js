'use strict';

// eslint-disable-next-line no-control-regex
module.exports = () => /[\u001b\u009b][[\]()#;?]*(?:(?:(?:[a-zA-Z0-9]*(?:;[a-zA-Z0-9]*)*)?\x07)|(?:(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-ntqry=><~]))/g;
