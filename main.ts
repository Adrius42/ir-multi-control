function car_back () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, Speed)
}
function SelectAction () {
    if (IRval_fixed == 74) {
        if (Activity == 0) {
            // 
            // 
            // 
            Activity = 1
            basic.showLeds(`
                . . . . .
                # # . # #
                . # . # .
                # # . # #
                . . . . .
                `)
            basic.pause(2000)
        } else if (Activity == 1) {
            // Follow LIne
            Activity = 2
            basic.showLeds(`
                . . . # #
                . . # # #
                . # # # .
                . # # . .
                . # # . .
                `)
            basic.pause(2000)
        } else {
            // IR Control
            Activity = 0
            basic.showLeds(`
                # . # # .
                # . # . #
                # . # # .
                # . # # .
                # . # . #
                `)
            basic.pause(2000)
        }
    }
}
function car_move_RF () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 0)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 0)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, Speed)
}
function drift_left () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 0)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 0)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, Speed)
}
function car_left () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, Turn_Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, Turn_Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, Turn_Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, Turn_Speed)
}
function car_move_LB () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 0)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 0)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, Speed)
}
function car_move_RB () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 0)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 0)
}
function car_right_move () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, Speed)
}
function drift_right () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 0)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 0)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, Speed)
}
function car_move_LF () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 0)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 0)
}
function car_forward () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, Speed)
}
function Set_Up_IR () {
    IR_UP = 70
    IR_OK = 64
    IR_Right = 67
    IR_Left = 68
    IR_Down = 21
    IR_0 = 82
    IR_1 = 22
    IR_2 = 25
    IR_3 = 13
    IR_4 = 12
    IR_5 = 24
    IR_6 = 94
    IR_7 = 8
    IR_8 = 28
    IR_9 = 90
    IR_ = 66
    IR_10 = 74
}
function car_left_move () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, Speed)
}
function car_right () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, Turn_Speed)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, Turn_Speed)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, Turn_Speed)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, Turn_Speed)
}
let IR_10 = 0
let IR_ = 0
let IR_9 = 0
let IR_8 = 0
let IR_7 = 0
let IR_6 = 0
let IR_5 = 0
let IR_4 = 0
let IR_3 = 0
let IR_2 = 0
let IR_1 = 0
let IR_0 = 0
let IR_Down = 0
let IR_Left = 0
let IR_Right = 0
let IR_OK = 0
let IR_UP = 0
let Turn_Speed = 0
let Speed = 0
let IRval_fixed = 0
let Activity = 0
basic.showString("LTS")
irRemote.connectInfrared(DigitalPin.P0)
let strip = neopixel.create(DigitalPin.P7, 4, NeoPixelMode.RGB)
Activity = 0
let IRval_live = 0
IRval_fixed = 0
Speed = 30
led.enable(false)
let LL = 0
let CC = 0
let RR = 0
Turn_Speed = 20
basic.forever(function () {
    IRval_live = irRemote.returnIrButton()
    if (IRval_live != 0) {
        IRval_fixed = IRval_live
        SelectAction()
    }
    LL = mecanumRobotV2.LineTracking(LT.Left)
    CC = mecanumRobotV2.LineTracking(LT.Center)
    RR = 0
})
control.inBackground(function () {
    while (false) {
        // Line Tracking
        while (Activity == 2) {
            if (LL == 0 && (CC == 0 && RR == 0)) {
                mecanumRobotV2.state()
            } else if (LL == 0 && (CC == 0 && RR == 1)) {
                car_right()
            } else if (LL == 0 && (CC == 1 && RR == 0)) {
                car_forward()
            } else if (LL == 0 && (CC == 1 && RR == 1)) {
                car_right()
            } else if (LL == 1 && (CC == 0 && RR == 0)) {
                car_left()
            } else if (LL == 1 && (CC == 0 && RR == 1)) {
                car_forward()
            } else if (LL == 1 && (CC == 1 && RR == 0)) {
                car_left()
            } else if (LL == 1 && (CC == 1 && RR == 1)) {
                car_forward()
            }
        }
        basic.pause(100)
        // Infrared Control
        while (Activity == 0) {
            if (IRval_fixed == IR_Left) {
                car_left()
            } else if (IRval_fixed == IR_Right) {
                car_right()
            } else if (IRval_fixed == IR_2) {
                car_forward()
            } else if (IRval_fixed == IR_8) {
                car_back()
            } else if (IRval_fixed == IR_0) {
                mecanumRobotV2.state()
            } else if (IRval_fixed == IR_1) {
                car_move_LF()
            } else if (IRval_fixed == IR_3) {
                car_move_RF()
            } else if (IRval_fixed == IR_4) {
                drift_left()
            } else if (IRval_fixed == IR_6) {
                drift_right()
            } else if (IRval_fixed == IR_7) {
                car_move_LB()
            } else if (IRval_fixed == IR_9) {
                car_move_RB()
            } else if (IRval_fixed == IR_Left) {
                car_left_move()
            } else if (IRval_fixed == IR_Right) {
                car_right_move()
            } else if (IRval_fixed == IR_UP) {
                while (IRval_live == IR_UP && Speed < 100) {
                    Speed += 1
                    basic.pause(100)
                    basic.showNumber(Speed)
                }
            } else if (IRval_fixed == IR_Down) {
                while (IRval_live == IR_Down && Speed > 0) {
                    Speed += -1
                    basic.pause(100)
                    basic.showNumber(Speed)
                }
            }
            basic.pause(100)
            // Light Control
            while (Activity == 1) {
                if (IRval_fixed == IR_Left) {
                    strip.showColor(neopixel.colors(NeoPixelColors.Red))
                } else if (IRval_fixed == IR_Right) {
                    car_right()
                } else if (IRval_fixed == IR_2) {
                    car_forward()
                } else if (IRval_fixed == IR_8) {
                    car_back()
                } else if (IRval_fixed == IR_0) {
                    mecanumRobotV2.state()
                } else if (IRval_fixed == IR_1) {
                    car_move_LF()
                } else if (IRval_fixed == IR_3) {
                    car_move_RF()
                } else if (IRval_fixed == IR_4) {
                    drift_left()
                } else if (IRval_fixed == IR_6) {
                    drift_right()
                } else if (IRval_fixed == IR_7) {
                    car_move_LB()
                } else if (IRval_fixed == IR_9) {
                    car_move_RB()
                } else if (IRval_fixed == IR_Left) {
                    car_left_move()
                } else if (IRval_fixed == IR_Right) {
                    car_right_move()
                } else if (IRval_fixed == IR_UP) {
                    while (IRval_live == IR_UP && Speed < 100) {
                        Speed += 1
                        basic.pause(100)
                        basic.showNumber(Speed)
                    }
                } else if (IRval_fixed == IR_Down) {
                    while (IRval_live == IR_Down && Speed > 0) {
                        Speed += -1
                        basic.pause(100)
                        basic.showNumber(Speed)
                    }
                }
                basic.pause(100)
            }
        }
    }
})
