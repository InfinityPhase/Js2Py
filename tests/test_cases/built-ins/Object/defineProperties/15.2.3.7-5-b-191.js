// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-191
description: >
    Object.defineProperties - 'get' property of 'descObj' is present
    (8.10.5 step 7)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var getter = function () {
            return "present";
        };

        Object.defineProperties(obj, {
            property: {
                get: getter
            }
        });

        return obj.property === "present";
    }
runTestCase(testcase);