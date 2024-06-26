let scoreboardImage = new Image();
scoreboardImage.src = "assets/scoreboard.png";
scoreboardImage.ready = false;
scoreboardImage.onload = function () {
    this.ready = true;
};

function renderScoreboard(playerSnake, scores) {
    if (scoreboardImage.ready) {
        MyGame.graphics.drawTexture(scoreboardImage, { x: 1070, y: 130 }, 0, {
            x: 250,
            y: 250,
        });
        MyGame.graphics.drawText(
            1070,
            25,
            "Score: " + playerSnake.score,
            "white",
        );

        if (scores.length > 0) {
            for (let i = 0; i < 5; i++) {
                if (!scores[i]) break;
                MyGame.graphics.rawDrawText(
                    980,
                    100 + i * 25,
                    (i + 1).toString() +
                        " - " +
                        scores[i].name +
                        " - " +
                        scores[i].score.toString(),
                    "white",
                    "15px",
                );
            }

            // update top position
            for (let i = 0; i < scores.length; i++) {
                if (scores[i].name === playerSnake.name) {
                    if (
                        i + 1 < playerSnake.topPos ||
                        playerSnake.topPos === 0
                    ) {
                        playerSnake.topPos = i + 1;
                    }
                }
            }
        } else {
            MyGame.graphics.drawText(1070, 100, "N/A", "white", "20px");
        }
    }
}
