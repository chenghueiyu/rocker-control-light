led.enable(false)
basic.forever(function () {
    if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP0P1, ModuleWorld_Analog.enRocker.Left)) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Red)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP0P1, ModuleWorld_Analog.enRocker.Right)) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Green)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP0P1, ModuleWorld_Analog.enRocker.Down)) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.Blue)
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP0P1, ModuleWorld_Analog.enRocker.Up)) {
        ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.White)
    }
})
