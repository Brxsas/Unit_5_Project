namespace SpriteKind {
    export const star = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 . . . . . . . 
        . . . . 9 1 1 d 1 9 8 . . . . . 
        . . . 9 d 1 1 d d d 9 . . . . . 
        . . . 9 3 d d d d 3 9 . . . . . 
        . . . 9 3 3 3 3 3 3 9 . . . . . 
        . . . . 9 9 3 3 3 8 . . . . . . 
        . . . . . . 9 9 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, iceCream, 200, 0)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 500)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeLifeBy(-1)
    scene.cameraShake(2, 500)
})
let star: Sprite = null
let Redshinystar: Sprite = null
let projectile: Sprite = null
let iceCream: Sprite = null
iceCream = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............9988..............
    .............966678.............
    ............99996699............
    ...........911d198229...........
    ..........9d11ddd92229..........
    ..........93dddd392229..........
    ..........933333392229..........
    ...........9933382288...........
    ...........9199888848...........
    ...........9111554448...........
    ............91154548............
    ............95555448............
    ............95554548............
    .............945548.............
    .............944448.............
    ..............9448..............
    ..............9ee8..............
    ...............88...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
controller.moveSprite(iceCream, 100, 200)
iceCream.setStayInScreen(true)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d33333333333333333333333333333333333d111d3333333333333333333333333
    33333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d3333333333333333333333333333333d1111111d33333333333333333333333
    3333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d33333333333333333333333333333d111111111d3333333333333333333333
    3333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d33333333333333333333333111111111113d111d3333333333333333
    333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333333333d11111111111d111111333333333333333
    33333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d333333333dd111111111111111111d33d111111d3333
    33d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d3333d11ddd11111111111111111dd1111111111d33
    3111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d33111111d11111111111111111d111111111111d3
    11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d11111111d111111111113111111111111111111d
    1111111111111111111a5a111111111e111111111111111111111111111a5a111111111e111111111111111111111111111a5a111111111e111111111111111111111111111a5a111111111e11111111
    111111111111111133a353a3311111eee1111111111111111111111133a353a3311111eee1111111111111111111111133a353a3311111eee1111111111111111111111133a353a3311111eee1111111
    3111111111111111a3555553a111111e1111113a3111111111111111a3555553a111111e1111113a3111111111111111a3555553a111111e1111113a3111111111111111a3555553a111111e1111113a
    a1111111e11111111a55555a11111111111111a5a1111111e11111111a55555a11111111111111a5a1111111e11111111a55555a11111111111111a5a1111111e11111111a55555a11111111111111a5
    3a31111eee11111111a555a11111111111113a353a31111eee11111111a555a11111111111113a353a31111eee11111111a555a11111111111113a353a31111eee11111111a555a11111111111113a35
    55a11111e111111111a535a1111111111111a55555a11111e111111111a535a1111111111111a55555a11111e111111111a535a1111111111111a55555a11111e111111111a535a1111111111111a555
    5a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a555a11111111111111113a3a311111111111111a55
    5a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a535a11111111111111111111111111111111111a53
    a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3a31111111111111111111111aaaa1111111113a3
    1111111111aa11111111111a322aa111111111111111111111aa11111111111a355aa111111111111111111111aa11111111111a322aa111111111111111111111aa11111111111a322aa11111111111
    111111111a35a11111e1111a2222aa11aaaaa111111111111a32a11111e1111a5555aa11aaaaa111111111111a32a11111e1111a2222aa11aaaaa111111111111a35a11111e1111a2222aa11aaaaa111
    11111111a555a1111eee111a22222aaa32222a1111111111a222a1111eee111a55555aaa35555a1111111111a222a1111eee111a22222aaa32222a1111111111a555a1111eee111a22222aaa32222a11
    111aaaaaa555a11111e1111a2222233222222a11111aaaaaa222a11111e1111a5555533555555a11111aaaaaa222a11111e1111a2222233222222a11111aaaaaa555a31111e1111a2222233222222a11
    11a555533955a1111111111a3222222992222a1111a222233922a1111111111a3555555995555a1111a222233922a1111111111a3222222992222a1111a555533955a3111111111a3222222992222a11
    11a5555555553a111111111aa22222299222aa1111a2222222223a311111111aa55555599555aa1111a2222222223a311111111aa22222299222aa1111a5555555553a311111111aa22222299222aa11
    11aa5555555553a11111111aa22222222223a31111aa2222222223a11111111aa55555555553a11111aa2222222223a31111111aa22222222223a11111aa5555555553a11111111aa22222222223a111
    111aa5555555555a111111aa322222222223aa11113aa2222222222a111111aa355555555553aa11111aa2222222222a111111aa322222222223aa11111aa5555555555a111111aa322222222223aa11
    111aa5555555555581111aa22222222222223aa1113aa2222222222281111aa55555555555553aa1111aa2222222222281111aa22222222222223aa1111aa5555555555581111aa22222222222223aa1
    11aa5555555555588811a32222222222222222a313aa2222222222288811a35555555555555555a111aa2222222222288811a32222222222222222a111aa5555555555588811a32222222222222222a1
    11a555555555553838883222222222222222223399a222222222223838883555555555555555553399a222222222223838883222222222222222223311a5555555555538388832222222222222222233
    31a555555555388888382222222222222222239939a222222222388888385555555555555555539939a222222222388888382222222222222222239939a5555555553888883822222222222222222399
    3333555335553338888832222222222222223399333322233222333888883555555555555555339933332223322233388888322222222222222233993333555335553338888832222222222222223399
    9333aaaa355533355888333888322222222239999333aaaa322233355888333888355555555539999333aaaa322233355888333888322222222239999333aaaa35553335588833388832222222223999
    9333388aa55888855883888888822222333339999333388aa22888855883888888855555333339999333388aa22888855883888888822222333339999333388aa5588885588388888882222233333999
    99999388aa58888888888888888222229999999999999388aa28888888888888888555559999999999999388aa28888888888888888222229999999999999388aa5888888888888888822222a9999999
    999933888aa38888888888838382222393999999999933888aa38888888888838385555393999999999933888aa38888888888838382222393999999999933888aa388888888888383822223a3999999
    9993338888833888888888838332222a333999999993338888833888888888838335555a333999999993338888833888888888838332222a333999999993338888833888888888838332222a33399999
    9933388888833888888883338333223388339999993338888883388888888333833355338833999999333888888338888888833383332233883399999933388888833888888883338333223388339999
    9933888888838888888883388833333888339999993388888883888888888338883333388833999999338888888388888888833888333338883399999933888888838888888883388833333888339999
    9993888888838883388883888888338888399933999388888883888338888388888833888839993399938888888388833888838888883388883999339993888888838883388883888888338888399933
    3993888888838833338883888888888888399333399388888883883333888388888888888839933339938888888388333388838888888888883993333993888888838833338883888888888888399333
    3333888888833333333883888888888888333388333388888883333333388388888888888833338833338888888333333338838888888888883333883333888888833333333883888888888888333388
    3333888888833388833333888888888888333888333388888883338883333388888888888833388833338888888333888333338888888888883338883333888888833388833333888888888888333888
    8888888888888888883338888888888888888888888888888888888888333888888888888888888888888888888888888833388888888888888888888888888888888888883338888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888ddd88888888888888888888888888888888888888dd888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888ddddd888888888888888888888888888888888888dddd8888888888888888888888888888888888888dddd88888888888888888888888888888888888ddddd888888888
    888888888888888888888888ddd111ddd8888888888888888888888888888888ddd111ddd88888888888888888888888888888888dd111dd88888888888888888888888888888888ddd111ddd8888888
    88888888888888888888888dd1111111dd88888888888888888888888888888dd1111111dd88ddd888888888888888888888888dd1111111dd88888888888888888888888888888dd1111111dd888888
    d8888888888888888888888d111111111ddddddd88888888888888888888888d111111111ddddddd88888888888888888888888d111111111dd8dddd8888888888888888888888dd111111111ddddddd
    ddd88dddddd8888888888dd11111111111dd111dd888888888888888888888d11111111111dd111ddd888ddddd888888888888d11111111111dd111ddd88888888888888888888d11111111111dd111d
    1dddddddddddd888888dddd11111111111d111111d8dddddddd888888888d8d11111111111d111111d88dddddddd8888888888d11111111111d111111d88dddddddd8888888888d11111111111d11111
    1dddd111111ddd888dddddd111111111111111111dddd111111dddd88dddddd111111111111111111dddd111111ddd88888dd8d111111111111111111dddd111111ddd8888ddddd11111111111111111
    1dd1111111111dd8ddd11ddd11111111111111111dd1111111111dd8ddd11ddd11111111111111111dd1111111111d8dddd11ddd11111111111111111dd1111111111dd8ddd11ddd1111111111111111
    1d111111111111ddd111111811111111111111111d111111111111ddd111111d11111111111111111d111111111111ddd111111d11111111111111111d111111111111ddd111111d1111111111111111
    111111111111111d111111111111111111111111111111111111111d111111118111111111111111111111111111111d111111118111111111111111111111111111111d111111118111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
info.setLife(5)
music.play(music.createSong(hex`00a0000408010205001c000f0a006400f4010a0000040000000000000000000000000000000002240000000400012208000c0001250c001000012714001800012018001c0001241c002000012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80012000800090001000c000d000100100011000100`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1000, function () {
    Redshinystar = sprites.create(img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `, SpriteKind.Enemy)
    Redshinystar.setFlag(SpriteFlag.AutoDestroy, true)
    Redshinystar.setVelocity(-100, 0)
    Redshinystar.setPosition(160, randint(0, 120))
    star = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . 6 5 8 . . . . . . 
        . . . . . 6 6 5 1 1 8 8 . . . . 
        . . . . 6 4 4 4 5 1 5 1 8 . . . 
        . . . . . 6 5 4 4 5 5 8 . . . . 
        . . . . . . 6 5 4 5 8 . . . . . 
        . . . . . . 6 5 8 5 8 . . . . . 
        . . . . . . . 8 . 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star)
    Redshinystar.setFlag(SpriteFlag.AutoDestroy, true)
    star.setVelocity(-50, 0)
    star.setPosition(160, randint(0, 120))
})
