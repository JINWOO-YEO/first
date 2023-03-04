let chk = 0
input.onButtonPressed(Button.A, function () {
    chk = 1
    while (chk == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    chk = 0
    music.stopAllSounds()
})
basic.forever(function () {
	
})
