Vue.use(VueMaterial);

new Vue({
    el: '#app',
    data: {
        message: 'Welcome!',
        steamid: '76561198091853591',
        games: [],
        selected: {}
    },
    methods: {
       fetchGameList: function () {
    this.games = [
        { appid: "990080", name: "Hogwarts Legacy" },
        { appid: "2878600", name: "Harry Potter: Quidditch Champions" }
    ];
},

        generateManifest: function () {
            result =
`"AppState"
{
    "AppID"  "${this.selected.appid}"
    "Universe" "1"
    "installdir" "${this.selected.name}"
    "StateFlags" "1026"
}`
            download(`appmanifest_${this.selected.appid}.acf`, result);
        }
    }
});

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}
