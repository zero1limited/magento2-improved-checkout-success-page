define(['jquery'], function ($) {
    "use strict";
    var sortDiv = function (config) {
        var container = document.getElementById("zero1-advanced-success");
        var elements = container.childNodes;
        var sortMe = [];
        for (var i=0; i<elements.length; i++) {
            if (!elements[i].id) {
                continue;
            }
            var sortPart = elements[i].id.split("-");
            if (sortPart.length > 1) {
                sortMe.push([ 1 * sortPart[1] , elements[i] ]);
            }
        }
        sortMe.sort(function (x, y) {
            return x[0] - y[0];
        });
        for (var i=0; i<sortMe.length; i++) {
            container.appendChild(sortMe[i][1]);
        }
    };
    return sortDiv;
});