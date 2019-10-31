app.config(function ($mdThemingProvider) {
    var accentPalette = localStorage.getItem("accentPalette");
    var primaryPalette = localStorage.getItem("primaryPalette");

    if (primaryPalette == null)
        primaryPalette = 'teal';

    if (accentPalette == null)
        accentPalette = 'orange';

    $mdThemingProvider.theme('default').primaryPalette(primaryPalette).accentPalette(accentPalette);
    $mdThemingProvider.alwaysWatchTheme(true);
});
