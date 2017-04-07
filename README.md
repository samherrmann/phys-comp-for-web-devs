# Physical Computing for Web Devs


## Dev Env
* Ubuntu 16.04


## Problems
* No text to voice
* Arduino IDE: No permission to upload to board
** Resolution: `sudo usermod -a -G dialout sam`
* Arduino IDE: error when uploading to board
```
Arduino: 1.8.1 (Linux), Board: "Arduino/Genuino Uno"

StandardFirmataPlus:1: error: 'roup' does not name a type
 roup/*
 ^
In file included from /opt/arduino/libraries/Servo/src/Servo.h:63:0,
                 from /tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:47:
/opt/arduino/libraries/Servo/src/avr/ServoTimers.h:57:41: error: 'timer16_Sequence_t' does not name a type
 typedef enum { _timer1, _Nbr_16timers } timer16_Sequence_t;
                                         ^
In file included from /tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:47:0:
/opt/arduino/libraries/Servo/src/Servo.h:80:23: error: '_Nbr_16timers' was not declared in this scope
 #define MAX_SERVOS   (_Nbr_16timers  * SERVOS_PER_TIMER)
                       ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:111:14: note: in expansion of macro 'MAX_SERVOS'
 Servo servos[MAX_SERVOS];
              ^
/opt/arduino/libraries/Servo/src/Servo.h:80:23: error: '_Nbr_16timers' was not declared in this scope
 #define MAX_SERVOS   (_Nbr_16timers  * SERVOS_PER_TIMER)
                       ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:113:21: note: in expansion of macro 'MAX_SERVOS'
 byte detachedServos[MAX_SERVOS];
                     ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino: In function 'void attachServo(byte, int, int)':
/opt/arduino/libraries/Servo/src/Servo.h:80:23: error: '_Nbr_16timers' was not declared in this scope
 #define MAX_SERVOS   (_Nbr_16timers  * SERVOS_PER_TIMER)
                       ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:150:20: note: in expansion of macro 'MAX_SERVOS'
   if (servoCount < MAX_SERVOS) {
                    ^
StandardFirmataPlus:153: error: 'detachedServos' was not declared in this scope
       servoPinMap[pin] = detachedServos[detachedServoCount - 1];
                          ^
StandardFirmataPlus:160: error: 'servos' was not declared in this scope
       servos[servoPinMap[pin]].attach(PIN_TO_DIGITAL(pin), minPulse, maxPulse);
       ^
StandardFirmataPlus:162: error: 'servos' was not declared in this scope
       servos[servoPinMap[pin]].attach(PIN_TO_DIGITAL(pin));
       ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino: In function 'void detachServo(byte)':
StandardFirmataPlus:171: error: 'servos' was not declared in this scope
   servos[servoPinMap[pin]].detach();
   ^
StandardFirmataPlus:180: error: 'detachedServos' was not declared in this scope
     detachedServos[detachedServoCount - 1] = servoPinMap[pin];
     ^
In file included from /tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:47:0:
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino: In function 'void setPinModeCallback(byte, int)':
/opt/arduino/libraries/Servo/src/Servo.h:80:23: error: '_Nbr_16timers' was not declared in this scope
 #define MAX_SERVOS   (_Nbr_16timers  * SERVOS_PER_TIMER)
                       ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:299:28: note: in expansion of macro 'MAX_SERVOS'
     if (servoPinMap[pin] < MAX_SERVOS && servos[servoPinMap[pin]].attached()) {
                            ^
StandardFirmataPlus:299: error: 'servos' was not declared in this scope
     if (servoPinMap[pin] < MAX_SERVOS && servos[servoPinMap[pin]].attached()) {
                                          ^
StandardFirmataPlus:364: error: 'servos' was not declared in this scope
         if (servoPinMap[pin] == 255 || !servos[servoPinMap[pin]].attached()) {
                                         ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino: In function 'void analogWriteCallback(byte, int)':
StandardFirmataPlus:411: error: 'servos' was not declared in this scope
           servos[servoPinMap[pin]].write(value);
           ^
In file included from /tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:47:0:
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino: In function 'void sysexCallback(byte, byte, byte*)':
/opt/arduino/libraries/Servo/src/Servo.h:80:23: error: '_Nbr_16timers' was not declared in this scope
 #define MAX_SERVOS   (_Nbr_16timers  * SERVOS_PER_TIMER)
                       ^
/tmp/arduino_modified_sketch_150057/StandardFirmataPlus.ino:631:34: note: in expansion of macro 'MAX_SERVOS'
           if (servoPinMap[pin] < MAX_SERVOS && servos[servoPinMap[pin]].attached()) {
                                  ^
StandardFirmataPlus:631: error: 'servos' was not declared in this scope
           if (servoPinMap[pin] < MAX_SERVOS && servos[servoPinMap[pin]].attached()) {
                                                ^
exit status 1
'roup' does not name a type

This report would have more information with
"Show verbose output during compilation"
option enabled in File -> Preferences.

```