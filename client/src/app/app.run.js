(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name angular-morris.run
     **/
    angular.module('angular-morris').run( /*@ngInject*/ function ($page, $utils, setting) {
        //extend applySEO to $page
        $page.applySEO = function applySEO() {
            //
            // SEO
            //
            $page.title(setting.name);
            $page.description($utils.stripHtmlTags(setting.description));
            $page.keywords(setting.keywords);
            //
            // OPEN GRAPH
            //
            $page.ogLocale(setting.ogLocale);
            $page.ogSiteName(setting.ogSiteName);
            $page.ogTitle(setting.ogTitle);
            $page.ogDescription($utils.stripHtmlTags(setting.ogDescription));
            $page.ogUrl(setting.ogUrl);
            $page.ogImage(setting.ogImage);
            $page.ogTag(setting.ogTag);
        }
        //apply the SEO
        $page.applySEO();
    });
})();