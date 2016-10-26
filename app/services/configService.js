angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Zamboanga',
        'id'            : '102615103919428587748',
        'googleApi'     : 'AIzaSyCRJdlQlS69iIRsjYaKC-AUj2Vii5RfsSA>',
        'pwaId'         : '', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdgzamboanga.org',
        'twitter'       : 'gdgzambo',
        'facebook'      : 'gdgzambo',
        'youtube'       : 'gdgzambo',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - h:mm a',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
