











// import { url } from "inspector";

angular.module('app', ['cfp.hotkeys', 'ngAnimate'])
    .controller('MainController', function ($scope, hotkeys) {

        // functions
        $scope.active = 0;

        $scope.previous = function () {
            if ($scope.active != 0) $scope.active -= 1;
        }

        $scope.next = function () {
            if ($scope.active + 1 < $scope.profiles.length) $scope.active += 1;
        }

        $scope.setActive = function (i) {
            $scope.active = i;
        }

        $scope.profiles = [
            {
                'rank': 1,
                'name': '舟見 朋夜',
                'desc': '法政大学 経営学部 中退からの富山短期大学 栄養学科へ。フィーリングとノリで今日も笑って過ごします。',
                'location': '',
                'img': './assets/img/profile.jpg',
            },
            {
                'rank': 2,
                'name': '千葉県船橋市生まれ市川市育ちからの富山県',
                'desc': '知らない人が多すぎる富山県は、地震も台風もなぜか逸れて震災と無縁の県です。',
                'location': '「君の名は」の糸守湖のモデルになったみくりが池（立山）',
                'img': './assets/img/mikurigaike.JPG'
            },
            {
                'rank': 3,
                'name': '趣味',
                'desc': 'ロックフェス、ライブ。 漫画とアニメで世界は平和になると思う。',
                'location': '2019年最後の夏フェス。Auguest 10 ROCK IN JAPN FES.',
                'img': './assets/img/rockinjapan.jpeg'
            },
            {
                'rank': 4,
                'name': 'キャリア',
                'desc': '病院メインの栄養士。ときどき狩りガール',
                'location': 'NST会議中',
                'img': './assets/img/nst.JPG'
            },
            {
                'rank': 5,
                'name': 'github,netlify',
                'desc': '',
                'location': '',
                'img': './assets/img/github.png'
            }
        ];


        // hot keys
        hotkeys.add({
            combo: 'right',
            description: 'Next slide',
            callback: function () {
                $scope.next();
            }
        });
        hotkeys.add({
            combo: 'left',
            description: 'Previous slide',
            callback: function () {
                $scope.previous();
            }
        });
    });


















