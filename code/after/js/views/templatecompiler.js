(function () {    
    var req = new XMLHttpRequest();
    req.open("GET", '/js/views/applicationview.txt', false); // 'false': synchronous.
    req.send(null);
    Ember.TEMPLATES['ApplicationView'] =
       Ember.Handlebars.compile(req.responseText);

    req = new XMLHttpRequest();
    req.open("GET", '/js/views/indexview.txt', false); // 'false': synchronous.
    req.send(null);
    Ember.TEMPLATES['IndexView'] =
       Ember.Handlebars.compile(req.responseText);
})();