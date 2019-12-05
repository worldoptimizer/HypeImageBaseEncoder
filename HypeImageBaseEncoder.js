/*! Hype ImageBaseEncoder.
copyright (c) 2018 Max Ziebell, (https://maxziebell.de). MIT-license
*/
/*
* Version-History
* 1.0   Initial release with simple example
* 1.1   Added .svg support, jpeg extension and outputOnce
*/
if("HypeImageBaseEncoder" in window === false) window['HypeImageBaseEncoder'] = (function () {
    var kExtensions = ['jpg', 'jpeg', 'svg', 'png'];
    var _localConsoleOutput = true;
    var _outputOnce = {};
 
    var resourceLoad = function(hypeDocument, element, event) {
        var file = event.url.toLowerCase().split('/').pop();
        var extension = file.split('.').pop();
        if (kExtensions.indexOf(extension)>-1){
            if (event.url.indexOf('http://127.0.0.1:')==0 && _localConsoleOutput && !_outputOnce[file]) {
                _outputOnce[file] = true;
                toDataURL(event.url, function(dataUrl) {
                    console.log('<!-- '+file+' -->'+"\n"+'<script>window["Inline-'+file+'"]="'+dataUrl+'";</'+'script>');
                });
            }
            if (window['Inline-'+file]){
                return window['Inline-'+file];
            }
        }
    };
    
    var toDataURL = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
    
    var localConsoleOutput = function(bool){
        _localConsoleOutput = Boolean(bool);
    }
    
    /* Setup and handlers */
    if("HYPE_eventListeners" in window === false) { window.HYPE_eventListeners = Array(); }
    window.HYPE_eventListeners.push({"type":"HypeResourceLoad", "callback": resourceLoad});
   
    /* Reveal Public interface to window['HypeImageBaseEncoder'] */
    return {
        localConsoleOutput : localConsoleOutput
    };
})();
