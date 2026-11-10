(function () {

    var wishes = [
        "નવું વર્ષ તમારા માટે ખુશીઓ લઈને આવે!",
        "તમારા બધા સપનાં સાકાર થાય!",
        "સુખ, સ્વાસ્થ્ય અને સફળતા તમારી સાથે રહે!",
        "નવા વર્ષમાં નવી તકો અને નવો ઉત્સાહ મળે!"
    ];

    document.getElementById("go").onclick = function () {

        var n = document.getElementById("name").value.trim() || "મિત્ર";

        var w = wishes[Math.floor(Math.random() * wishes.length)];

        var el = document.getElementById("wish");

        el.textContent = "🎊 પ્રિય " + n + ", નવા વર્ષની શુભકામનાઓ! " + w;

        burst();
    };

    var c = document.getElementById("c");
    var x = c.getContext("2d");
    var p = [];

    function size() {
        c.width = innerWidth;
        c.height = innerHeight;
    }

    size();
    addEventListener("resize", size);

    var cols = [
        "#e4572e",
        "#f4a300",
        "#ffd166",
        "#06a77d",
        "#d62839"
    ];

    function add(n, fast) {

        for (var i = 0; i < n; i++) {

            p.push({
                x: Math.random() * c.width,
                y: fast ? c.height / 2 : -10,
                vx: (Math.random() - 0.5) * (fast ? 10 : 1),
                vy: fast ? -Math.random() * 10 : 1 + Math.random() * 2,
                r: 3 + Math.random() * 4,
                c: cols[Math.floor(Math.random() * 5)]
            });
        }
    }

    function burst() {
        add(80, true);
    }

    add(40, false);

    function loop() {

        x.clearRect(0, 0, c.width, c.height);

        for (var i = p.length - 1; i >= 0; i--) {

            var a = p[i];

            a.x += a.vx;
            a.y += a.vy;
            a.vy += 0.04;

            x.fillStyle = a.c;
            x.fillRect(a.x, a.y, a.r, a.r * 1.6);

            if (a.y > c.height + 20) {
                p.splice(i, 1);
            }
        }

        if (p.length < 40) {
            add(1, false);
        }

        requestAnimationFrame(loop);
    }

    loop();

})();