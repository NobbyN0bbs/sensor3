basic.forever(function () {
    SCD40.start_continuous_measurement()
    basic.showString("CO2")
    basic.showString("" + Math.round(SCD40.get_co2()))
    basic.showString("ppm")
    basic.showString("TEMP")
    basic.showString("" + Math.round(SCD40.get_temperature(SCD40.SCD40_T_UNIT.C) * 10) / 10)
    images.createBigImage(`
        . # # # . . # # . .
        . # . # . # . . . .
        . # # # . # . . . .
        . . . . . # . . . .
        . . . . . . # # . .
        `).scrollImage(1, 200)
    basic.showString("HUM")
    basic.showString("" + Math.round(SCD40.get_relative_humidity()))
    basic.showString("%")
})
