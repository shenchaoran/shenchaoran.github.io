两者很容易弄混

# debounce
可以理解为用手指按着一个弹簧，只有手松开才会弹起。

是在事件的生产层次上降低触发频率，而且事件消费也会被延迟。

# throttle
可以理解为一个水龙头或机枪的流速或射速的控制，将原来的速度控制在指定的事件内只触发一次。

是在事件的监听/消费层次上降低触发频率。

# 参考
- [Rx 宝石图](http://rxmarbles.com/#throttle)
- [详解](https://jinlong.github.io/2016/04/24/Debouncing-and-Throttling-Explained-Through-Examples/)