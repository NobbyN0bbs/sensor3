def on_forever():
    SCD40.start_continuous_measurement()
    basic.show_string("CO2")
    basic.show_string("" + str(Math.round(SCD40.get_co2())))
    basic.show_string("TEMP")
    basic.show_string("" + str(Math.round(SCD40.get_temperature(SCD40.SCD40_T_UNIT.C))))
    basic.show_string("HUM")
    basic.show_string("" + str(Math.round(SCD40.get_relative_humidity())))
basic.forever(on_forever)
