Package.describe({
    summary: "Stealer UFRJ crawls data from UFRJ Intranet and SIGA"
});

Package.on_use(function(api) {

    api.add_files('stealer-ufrj.js', ['client', 'server']);

    api.use('http-more',['client', 'server']);
});


Package.on_test(function(api) {
    api.use(['tinytest', 'stealer-ufrj']);

    api.add_files(['stealer-ufrj-tests.js'], ['client', 'server']);
});
