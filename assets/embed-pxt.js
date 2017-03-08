require(["gitbook", "jQuery"], function(gitbook, $) {

  var root = document.getElementsByTagName('body')[0];

  var initEmbed = function() {

    ksRunnerReady(function() {
        pxt.runner.renderAsync({
            snippetClass: 'lang-blocks',
            signatureClass: 'lang-sig',
            blocksClass:'lang-block',
            shuffleClass: 'lang-shuffle',
            simulatorClass:'lang-sim',
            linksClass: 'lang-links',
            projectClass: 'lang-project',
            namespacesClass: 'lang-namespaces',
            codeCardClass: 'lang-codecard',
            packageClass: 'lang-package',
            simulator: true,
            hex: true,
            hexName: 'test',
            snippetReplaceParent: true,
        }).done(function() {          
        });
    });

    var f = window.ksRunnerWhenLoaded
    if (typeof pxt != 'undefined' && f) f();
  };

  var loadEmbedScript = function() {
    var script = document.createElement('script');
    script.onload = initEmbed;
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'UTF-8';
    script.src = 'https:' + //document.location.protocol
      '//pxt.microbit.org/--embed';
    root.appendChild(script);
  };

  gitbook.events.bind("page.change", function(e) {
    if (!window.ksRunnerWhenLoaded) loadEmbedScript();
    else {
        pxt.runner.renderAsync({
            snippetClass: 'lang-blocks',
            signatureClass: 'lang-sig',
            blocksClass:'lang-block',
            shuffleClass: 'lang-shuffle',
            simulatorClass:'lang-sim',
            linksClass: 'lang-links',
            projectClass: 'lang-project',
            namespacesClass: 'lang-namespaces',
            codeCardClass: 'lang-codecard',
            packageClass: 'lang-package',
            simulator: true,
            hex: true,
            hexName: 'test',
            snippetReplaceParent: true,
        }).done(function() {          
        });
    }
  });
})