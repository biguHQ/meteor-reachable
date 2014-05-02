Package.describe({
    summary: "Reachable test simple connectivity against any server domain"
});

Package.on_use(function(api) {

    api.use(['underscore', 'npm' ], ['client', 'server']);
    api.add_files('reachable.js', ['client', 'server']);
  
    api.export("isReachable");
});


Package.on_test(function(api) {
    api.use(['tinytest','npm', 'reachable'], ['client', 'server']);
    api.add_files(['reachable-tests.js'], ['client', 'server']);
});
