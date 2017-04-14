
"use strict";
/*jslint browser: true, nomen: true*/
/*global define*/

define([], function () {
    return function (frame) {
        var player = frame.player(),
            layout = frame.layout();

        frame.after(1, function() {
            frame.model().clear();
            layout.invalidate();
        })

        .after(500, function () {
            frame.model().title = '<h1 style="visibility:visible">谢谢</h1>'
                        + '<br/>' + frame.model().controls.html();
            layout.invalidate();
        })
        .after(500, function () {
            frame.model().controls.show();
        })

        .after(500, function () {
            frame.model().title = '<h2 style="visibility:visible">获取更多信息</h2>'
                        + '<h3 style="visibility:visible"><a href="https://ramcloud.stanford.edu/wiki/download/attachments/11370504/raft.pdf">Raft论文</a></h3>'
                        + '<h3 style="visibility:visible"><a href="http://raftconsensus.github.io/">Raft网站</a></h3>'
                        + '<br/>' + frame.model().controls.html();
            layout.invalidate();
        })
        
        player.play();
    };
});
