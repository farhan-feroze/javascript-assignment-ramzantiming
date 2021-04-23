var sehriTime = ["4:51 AM","4:50 AM","4:49 AM","4:48 AM","4:47 AM","4:46 AM","4:45 AM","4:44 AM","4:43 AM","4:42 AM","4:41 AM","4:40 AM","4:39 AM","4:38 AM","4:37 AM","4:36 AM","4:35 AM","4:34 AM","4:33 AM","4:32 AM","4:31 AM","4:30 AM","4:29 AM","4:28 AM","4:27 AM","4:26 AM","4:25 AM","4:24 AM"];
var iftarTime=["6:55 PM","6:55 PM","6:56 PM","6:56 PM","6:57 PM","6:57 PM","6:58 PM","6:58 PM","6:59 PM","6:59 PM","7:00 PM","7:00 PM","7:01 PM","7:01 PM","7:02 PM","7:02 PM","7:03 PM","7:03 PM","7:04 PM","7:04 PM","7:05 PM","7:05 PM","7:06 PM","7:06 PM","7:07 PM","7:07 PM","7:08 PM","7:08 PM","7:09 PM"]
var rozaDates=["April 14","April 15","April 16","April 17","April 18","April 19","April 20","April 21","April 22","April 23","April 24","April 25","April 26","April 27","April 28","April 29","April 30","May 1","May 2","May 3","May 4","May 5","May 6","May 7","May 8","May 9","May 10","May 11","May 12","May 13"]
var roza = +prompt("Enter roza name");

document.write("<h4>"+rozaDates[--roza]+"</h3><br><br><h3>Sehri Time </h3><p>"+sehriTime[roza]+"</p><br><br><h3>Iftar Time </h3><p>"+iftarTime[roza]+"</p>")
