// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-5-13
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is -Infinity)
includes: [runTestCase.js]
---*/

function testcase() {

        return [true].lastIndexOf(true, -Infinity) === -1;
    }
runTestCase(testcase);
