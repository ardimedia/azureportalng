
console.log('app.config.ts');

//#region angular-ui-router

// There is no need of using $inject like I did in here, there is a Webpack loader for ng-annotate
// that you can use to let webpack annotate for you.Personally I prefer the $inject syntax.
// The loader is not installed on my workflow, but it is a 1 minute change.
routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

//#endregion
