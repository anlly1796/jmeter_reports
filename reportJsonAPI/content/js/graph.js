/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 68.0, "minX": 0.0, "maxY": 779.0, "series": [{"data": [[0.0, 68.0], [0.1, 71.0], [0.2, 71.0], [0.3, 71.0], [0.4, 71.0], [0.5, 71.0], [0.6, 71.0], [0.7, 71.0], [0.8, 71.0], [0.9, 71.0], [1.0, 71.0], [1.1, 71.0], [1.2, 71.0], [1.3, 71.0], [1.4, 71.0], [1.5, 71.0], [1.6, 71.0], [1.7, 71.0], [1.8, 71.0], [1.9, 71.0], [2.0, 71.0], [2.1, 71.0], [2.2, 71.0], [2.3, 71.0], [2.4, 71.0], [2.5, 71.0], [2.6, 71.0], [2.7, 71.0], [2.8, 71.0], [2.9, 71.0], [3.0, 71.0], [3.1, 71.0], [3.2, 71.0], [3.3, 71.0], [3.4, 71.0], [3.5, 71.0], [3.6, 71.0], [3.7, 71.0], [3.8, 71.0], [3.9, 71.0], [4.0, 71.0], [4.1, 71.0], [4.2, 71.0], [4.3, 71.0], [4.4, 71.0], [4.5, 71.0], [4.6, 71.0], [4.7, 71.0], [4.8, 71.0], [4.9, 71.0], [5.0, 71.0], [5.1, 71.0], [5.2, 71.0], [5.3, 71.0], [5.4, 71.0], [5.5, 71.0], [5.6, 71.0], [5.7, 71.0], [5.8, 71.0], [5.9, 71.0], [6.0, 71.0], [6.1, 71.0], [6.2, 72.0], [6.3, 72.0], [6.4, 72.0], [6.5, 72.0], [6.6, 72.0], [6.7, 72.0], [6.8, 72.0], [6.9, 72.0], [7.0, 72.0], [7.1, 72.0], [7.2, 72.0], [7.3, 72.0], [7.4, 72.0], [7.5, 72.0], [7.6, 72.0], [7.7, 72.0], [7.8, 72.0], [7.9, 72.0], [8.0, 72.0], [8.1, 72.0], [8.2, 72.0], [8.3, 72.0], [8.4, 72.0], [8.5, 72.0], [8.6, 72.0], [8.7, 72.0], [8.8, 72.0], [8.9, 72.0], [9.0, 72.0], [9.1, 72.0], [9.2, 72.0], [9.3, 72.0], [9.4, 72.0], [9.5, 72.0], [9.6, 72.0], [9.7, 72.0], [9.8, 72.0], [9.9, 72.0], [10.0, 72.0], [10.1, 72.0], [10.2, 72.0], [10.3, 72.0], [10.4, 72.0], [10.5, 72.0], [10.6, 72.0], [10.7, 72.0], [10.8, 72.0], [10.9, 72.0], [11.0, 72.0], [11.1, 72.0], [11.2, 72.0], [11.3, 72.0], [11.4, 72.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 72.0], [12.1, 72.0], [12.2, 72.0], [12.3, 72.0], [12.4, 72.0], [12.5, 72.0], [12.6, 72.0], [12.7, 72.0], [12.8, 72.0], [12.9, 72.0], [13.0, 72.0], [13.1, 72.0], [13.2, 72.0], [13.3, 72.0], [13.4, 72.0], [13.5, 72.0], [13.6, 72.0], [13.7, 72.0], [13.8, 72.0], [13.9, 72.0], [14.0, 72.0], [14.1, 72.0], [14.2, 72.0], [14.3, 72.0], [14.4, 72.0], [14.5, 72.0], [14.6, 72.0], [14.7, 72.0], [14.8, 72.0], [14.9, 72.0], [15.0, 72.0], [15.1, 72.0], [15.2, 72.0], [15.3, 72.0], [15.4, 72.0], [15.5, 72.0], [15.6, 72.0], [15.7, 72.0], [15.8, 72.0], [15.9, 72.0], [16.0, 72.0], [16.1, 72.0], [16.2, 72.0], [16.3, 72.0], [16.4, 72.0], [16.5, 72.0], [16.6, 72.0], [16.7, 72.0], [16.8, 72.0], [16.9, 72.0], [17.0, 72.0], [17.1, 72.0], [17.2, 72.0], [17.3, 72.0], [17.4, 72.0], [17.5, 72.0], [17.6, 72.0], [17.7, 72.0], [17.8, 72.0], [17.9, 72.0], [18.0, 72.0], [18.1, 72.0], [18.2, 72.0], [18.3, 72.0], [18.4, 72.0], [18.5, 72.0], [18.6, 72.0], [18.7, 72.0], [18.8, 72.0], [18.9, 72.0], [19.0, 72.0], [19.1, 72.0], [19.2, 72.0], [19.3, 72.0], [19.4, 72.0], [19.5, 72.0], [19.6, 72.0], [19.7, 72.0], [19.8, 72.0], [19.9, 72.0], [20.0, 72.0], [20.1, 72.0], [20.2, 72.0], [20.3, 72.0], [20.4, 72.0], [20.5, 72.0], [20.6, 72.0], [20.7, 72.0], [20.8, 72.0], [20.9, 72.0], [21.0, 72.0], [21.1, 72.0], [21.2, 72.0], [21.3, 72.0], [21.4, 72.0], [21.5, 72.0], [21.6, 72.0], [21.7, 72.0], [21.8, 72.0], [21.9, 72.0], [22.0, 72.0], [22.1, 72.0], [22.2, 72.0], [22.3, 72.0], [22.4, 72.0], [22.5, 72.0], [22.6, 72.0], [22.7, 72.0], [22.8, 72.0], [22.9, 72.0], [23.0, 72.0], [23.1, 72.0], [23.2, 72.0], [23.3, 72.0], [23.4, 72.0], [23.5, 72.0], [23.6, 72.0], [23.7, 72.0], [23.8, 72.0], [23.9, 72.0], [24.0, 72.0], [24.1, 72.0], [24.2, 72.0], [24.3, 72.0], [24.4, 72.0], [24.5, 72.0], [24.6, 72.0], [24.7, 72.0], [24.8, 72.0], [24.9, 72.0], [25.0, 72.0], [25.1, 72.0], [25.2, 72.0], [25.3, 72.0], [25.4, 72.0], [25.5, 72.0], [25.6, 72.0], [25.7, 72.0], [25.8, 72.0], [25.9, 72.0], [26.0, 72.0], [26.1, 72.0], [26.2, 72.0], [26.3, 72.0], [26.4, 72.0], [26.5, 72.0], [26.6, 72.0], [26.7, 72.0], [26.8, 72.0], [26.9, 72.0], [27.0, 72.0], [27.1, 72.0], [27.2, 72.0], [27.3, 72.0], [27.4, 72.0], [27.5, 72.0], [27.6, 72.0], [27.7, 72.0], [27.8, 72.0], [27.9, 72.0], [28.0, 72.0], [28.1, 72.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 72.0], [28.7, 72.0], [28.8, 72.0], [28.9, 72.0], [29.0, 72.0], [29.1, 72.0], [29.2, 72.0], [29.3, 72.0], [29.4, 72.0], [29.5, 72.0], [29.6, 72.0], [29.7, 72.0], [29.8, 72.0], [29.9, 72.0], [30.0, 72.0], [30.1, 72.0], [30.2, 72.0], [30.3, 72.0], [30.4, 72.0], [30.5, 72.0], [30.6, 72.0], [30.7, 72.0], [30.8, 72.0], [30.9, 72.0], [31.0, 72.0], [31.1, 72.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 72.0], [31.6, 72.0], [31.7, 72.0], [31.8, 72.0], [31.9, 73.0], [32.0, 73.0], [32.1, 73.0], [32.2, 73.0], [32.3, 73.0], [32.4, 73.0], [32.5, 73.0], [32.6, 73.0], [32.7, 73.0], [32.8, 73.0], [32.9, 73.0], [33.0, 73.0], [33.1, 73.0], [33.2, 73.0], [33.3, 73.0], [33.4, 73.0], [33.5, 73.0], [33.6, 73.0], [33.7, 73.0], [33.8, 73.0], [33.9, 73.0], [34.0, 73.0], [34.1, 73.0], [34.2, 73.0], [34.3, 73.0], [34.4, 73.0], [34.5, 73.0], [34.6, 73.0], [34.7, 73.0], [34.8, 73.0], [34.9, 73.0], [35.0, 73.0], [35.1, 73.0], [35.2, 73.0], [35.3, 73.0], [35.4, 73.0], [35.5, 73.0], [35.6, 73.0], [35.7, 73.0], [35.8, 73.0], [35.9, 73.0], [36.0, 73.0], [36.1, 73.0], [36.2, 73.0], [36.3, 73.0], [36.4, 73.0], [36.5, 73.0], [36.6, 73.0], [36.7, 73.0], [36.8, 73.0], [36.9, 73.0], [37.0, 73.0], [37.1, 73.0], [37.2, 73.0], [37.3, 73.0], [37.4, 73.0], [37.5, 73.0], [37.6, 73.0], [37.7, 73.0], [37.8, 73.0], [37.9, 73.0], [38.0, 73.0], [38.1, 73.0], [38.2, 73.0], [38.3, 73.0], [38.4, 73.0], [38.5, 73.0], [38.6, 73.0], [38.7, 73.0], [38.8, 73.0], [38.9, 73.0], [39.0, 73.0], [39.1, 73.0], [39.2, 73.0], [39.3, 73.0], [39.4, 73.0], [39.5, 73.0], [39.6, 73.0], [39.7, 73.0], [39.8, 73.0], [39.9, 73.0], [40.0, 73.0], [40.1, 73.0], [40.2, 73.0], [40.3, 73.0], [40.4, 73.0], [40.5, 73.0], [40.6, 73.0], [40.7, 73.0], [40.8, 73.0], [40.9, 73.0], [41.0, 73.0], [41.1, 73.0], [41.2, 73.0], [41.3, 73.0], [41.4, 73.0], [41.5, 73.0], [41.6, 73.0], [41.7, 73.0], [41.8, 73.0], [41.9, 73.0], [42.0, 73.0], [42.1, 73.0], [42.2, 73.0], [42.3, 73.0], [42.4, 73.0], [42.5, 73.0], [42.6, 73.0], [42.7, 73.0], [42.8, 73.0], [42.9, 73.0], [43.0, 73.0], [43.1, 73.0], [43.2, 73.0], [43.3, 73.0], [43.4, 73.0], [43.5, 73.0], [43.6, 73.0], [43.7, 73.0], [43.8, 73.0], [43.9, 73.0], [44.0, 73.0], [44.1, 73.0], [44.2, 73.0], [44.3, 73.0], [44.4, 73.0], [44.5, 73.0], [44.6, 73.0], [44.7, 73.0], [44.8, 73.0], [44.9, 73.0], [45.0, 73.0], [45.1, 73.0], [45.2, 73.0], [45.3, 73.0], [45.4, 73.0], [45.5, 73.0], [45.6, 73.0], [45.7, 73.0], [45.8, 73.0], [45.9, 73.0], [46.0, 73.0], [46.1, 73.0], [46.2, 73.0], [46.3, 73.0], [46.4, 73.0], [46.5, 73.0], [46.6, 73.0], [46.7, 73.0], [46.8, 73.0], [46.9, 73.0], [47.0, 73.0], [47.1, 73.0], [47.2, 73.0], [47.3, 73.0], [47.4, 73.0], [47.5, 73.0], [47.6, 73.0], [47.7, 73.0], [47.8, 73.0], [47.9, 73.0], [48.0, 73.0], [48.1, 73.0], [48.2, 73.0], [48.3, 73.0], [48.4, 73.0], [48.5, 73.0], [48.6, 73.0], [48.7, 73.0], [48.8, 73.0], [48.9, 73.0], [49.0, 73.0], [49.1, 73.0], [49.2, 73.0], [49.3, 73.0], [49.4, 73.0], [49.5, 73.0], [49.6, 73.0], [49.7, 73.0], [49.8, 73.0], [49.9, 73.0], [50.0, 73.0], [50.1, 73.0], [50.2, 73.0], [50.3, 73.0], [50.4, 73.0], [50.5, 73.0], [50.6, 73.0], [50.7, 73.0], [50.8, 73.0], [50.9, 73.0], [51.0, 73.0], [51.1, 73.0], [51.2, 73.0], [51.3, 73.0], [51.4, 73.0], [51.5, 73.0], [51.6, 73.0], [51.7, 73.0], [51.8, 73.0], [51.9, 73.0], [52.0, 73.0], [52.1, 73.0], [52.2, 73.0], [52.3, 73.0], [52.4, 73.0], [52.5, 73.0], [52.6, 73.0], [52.7, 73.0], [52.8, 73.0], [52.9, 73.0], [53.0, 73.0], [53.1, 73.0], [53.2, 73.0], [53.3, 73.0], [53.4, 73.0], [53.5, 73.0], [53.6, 73.0], [53.7, 73.0], [53.8, 73.0], [53.9, 73.0], [54.0, 73.0], [54.1, 73.0], [54.2, 73.0], [54.3, 73.0], [54.4, 73.0], [54.5, 73.0], [54.6, 73.0], [54.7, 73.0], [54.8, 73.0], [54.9, 73.0], [55.0, 73.0], [55.1, 73.0], [55.2, 73.0], [55.3, 73.0], [55.4, 73.0], [55.5, 73.0], [55.6, 73.0], [55.7, 73.0], [55.8, 73.0], [55.9, 73.0], [56.0, 73.0], [56.1, 73.0], [56.2, 73.0], [56.3, 74.0], [56.4, 74.0], [56.5, 74.0], [56.6, 74.0], [56.7, 74.0], [56.8, 74.0], [56.9, 74.0], [57.0, 74.0], [57.1, 74.0], [57.2, 74.0], [57.3, 74.0], [57.4, 74.0], [57.5, 74.0], [57.6, 74.0], [57.7, 74.0], [57.8, 74.0], [57.9, 74.0], [58.0, 74.0], [58.1, 74.0], [58.2, 74.0], [58.3, 74.0], [58.4, 74.0], [58.5, 74.0], [58.6, 74.0], [58.7, 74.0], [58.8, 74.0], [58.9, 74.0], [59.0, 74.0], [59.1, 74.0], [59.2, 74.0], [59.3, 74.0], [59.4, 74.0], [59.5, 74.0], [59.6, 74.0], [59.7, 74.0], [59.8, 74.0], [59.9, 74.0], [60.0, 74.0], [60.1, 74.0], [60.2, 74.0], [60.3, 74.0], [60.4, 74.0], [60.5, 74.0], [60.6, 74.0], [60.7, 74.0], [60.8, 74.0], [60.9, 74.0], [61.0, 74.0], [61.1, 74.0], [61.2, 74.0], [61.3, 74.0], [61.4, 74.0], [61.5, 74.0], [61.6, 74.0], [61.7, 74.0], [61.8, 74.0], [61.9, 74.0], [62.0, 74.0], [62.1, 74.0], [62.2, 74.0], [62.3, 74.0], [62.4, 74.0], [62.5, 74.0], [62.6, 74.0], [62.7, 74.0], [62.8, 74.0], [62.9, 74.0], [63.0, 74.0], [63.1, 74.0], [63.2, 74.0], [63.3, 74.0], [63.4, 74.0], [63.5, 74.0], [63.6, 74.0], [63.7, 74.0], [63.8, 74.0], [63.9, 74.0], [64.0, 74.0], [64.1, 74.0], [64.2, 74.0], [64.3, 74.0], [64.4, 74.0], [64.5, 74.0], [64.6, 74.0], [64.7, 74.0], [64.8, 74.0], [64.9, 74.0], [65.0, 74.0], [65.1, 74.0], [65.2, 74.0], [65.3, 74.0], [65.4, 74.0], [65.5, 74.0], [65.6, 74.0], [65.7, 74.0], [65.8, 74.0], [65.9, 74.0], [66.0, 74.0], [66.1, 74.0], [66.2, 74.0], [66.3, 74.0], [66.4, 74.0], [66.5, 74.0], [66.6, 74.0], [66.7, 74.0], [66.8, 74.0], [66.9, 74.0], [67.0, 74.0], [67.1, 74.0], [67.2, 74.0], [67.3, 74.0], [67.4, 74.0], [67.5, 74.0], [67.6, 74.0], [67.7, 74.0], [67.8, 74.0], [67.9, 74.0], [68.0, 74.0], [68.1, 74.0], [68.2, 74.0], [68.3, 74.0], [68.4, 74.0], [68.5, 74.0], [68.6, 74.0], [68.7, 74.0], [68.8, 74.0], [68.9, 74.0], [69.0, 74.0], [69.1, 74.0], [69.2, 74.0], [69.3, 74.0], [69.4, 74.0], [69.5, 74.0], [69.6, 74.0], [69.7, 74.0], [69.8, 74.0], [69.9, 74.0], [70.0, 74.0], [70.1, 74.0], [70.2, 74.0], [70.3, 74.0], [70.4, 74.0], [70.5, 74.0], [70.6, 75.0], [70.7, 75.0], [70.8, 75.0], [70.9, 75.0], [71.0, 75.0], [71.1, 75.0], [71.2, 75.0], [71.3, 75.0], [71.4, 75.0], [71.5, 75.0], [71.6, 75.0], [71.7, 75.0], [71.8, 75.0], [71.9, 75.0], [72.0, 75.0], [72.1, 75.0], [72.2, 75.0], [72.3, 75.0], [72.4, 75.0], [72.5, 75.0], [72.6, 75.0], [72.7, 75.0], [72.8, 75.0], [72.9, 75.0], [73.0, 75.0], [73.1, 75.0], [73.2, 75.0], [73.3, 75.0], [73.4, 75.0], [73.5, 75.0], [73.6, 75.0], [73.7, 75.0], [73.8, 75.0], [73.9, 75.0], [74.0, 75.0], [74.1, 75.0], [74.2, 75.0], [74.3, 75.0], [74.4, 75.0], [74.5, 75.0], [74.6, 75.0], [74.7, 75.0], [74.8, 75.0], [74.9, 75.0], [75.0, 75.0], [75.1, 75.0], [75.2, 75.0], [75.3, 75.0], [75.4, 75.0], [75.5, 75.0], [75.6, 75.0], [75.7, 75.0], [75.8, 75.0], [75.9, 75.0], [76.0, 75.0], [76.1, 75.0], [76.2, 76.0], [76.3, 76.0], [76.4, 76.0], [76.5, 76.0], [76.6, 76.0], [76.7, 76.0], [76.8, 76.0], [76.9, 76.0], [77.0, 76.0], [77.1, 76.0], [77.2, 76.0], [77.3, 76.0], [77.4, 76.0], [77.5, 76.0], [77.6, 76.0], [77.7, 76.0], [77.8, 76.0], [77.9, 76.0], [78.0, 76.0], [78.1, 76.0], [78.2, 76.0], [78.3, 76.0], [78.4, 76.0], [78.5, 76.0], [78.6, 76.0], [78.7, 76.0], [78.8, 76.0], [78.9, 76.0], [79.0, 76.0], [79.1, 76.0], [79.2, 76.0], [79.3, 77.0], [79.4, 77.0], [79.5, 77.0], [79.6, 77.0], [79.7, 77.0], [79.8, 77.0], [79.9, 77.0], [80.0, 77.0], [80.1, 77.0], [80.2, 77.0], [80.3, 77.0], [80.4, 77.0], [80.5, 77.0], [80.6, 77.0], [80.7, 77.0], [80.8, 77.0], [80.9, 77.0], [81.0, 77.0], [81.1, 77.0], [81.2, 77.0], [81.3, 77.0], [81.4, 77.0], [81.5, 77.0], [81.6, 78.0], [81.7, 78.0], [81.8, 78.0], [81.9, 78.0], [82.0, 78.0], [82.1, 78.0], [82.2, 78.0], [82.3, 78.0], [82.4, 78.0], [82.5, 78.0], [82.6, 78.0], [82.7, 78.0], [82.8, 78.0], [82.9, 78.0], [83.0, 78.0], [83.1, 78.0], [83.2, 78.0], [83.3, 78.0], [83.4, 78.0], [83.5, 78.0], [83.6, 78.0], [83.7, 78.0], [83.8, 78.0], [83.9, 78.0], [84.0, 78.0], [84.1, 78.0], [84.2, 78.0], [84.3, 78.0], [84.4, 79.0], [84.5, 79.0], [84.6, 79.0], [84.7, 79.0], [84.8, 79.0], [84.9, 79.0], [85.0, 79.0], [85.1, 79.0], [85.2, 79.0], [85.3, 79.0], [85.4, 79.0], [85.5, 79.0], [85.6, 79.0], [85.7, 79.0], [85.8, 79.0], [85.9, 79.0], [86.0, 79.0], [86.1, 79.0], [86.2, 79.0], [86.3, 79.0], [86.4, 79.0], [86.5, 79.0], [86.6, 79.0], [86.7, 79.0], [86.8, 79.0], [86.9, 79.0], [87.0, 79.0], [87.1, 79.0], [87.2, 79.0], [87.3, 79.0], [87.4, 80.0], [87.5, 80.0], [87.6, 80.0], [87.7, 80.0], [87.8, 80.0], [87.9, 80.0], [88.0, 80.0], [88.1, 80.0], [88.2, 80.0], [88.3, 80.0], [88.4, 80.0], [88.5, 80.0], [88.6, 80.0], [88.7, 80.0], [88.8, 80.0], [88.9, 81.0], [89.0, 81.0], [89.1, 81.0], [89.2, 81.0], [89.3, 81.0], [89.4, 81.0], [89.5, 81.0], [89.6, 81.0], [89.7, 81.0], [89.8, 81.0], [89.9, 81.0], [90.0, 81.0], [90.1, 82.0], [90.2, 82.0], [90.3, 82.0], [90.4, 82.0], [90.5, 82.0], [90.6, 82.0], [90.7, 82.0], [90.8, 82.0], [90.9, 82.0], [91.0, 82.0], [91.1, 82.0], [91.2, 83.0], [91.3, 83.0], [91.4, 83.0], [91.5, 83.0], [91.6, 83.0], [91.7, 83.0], [91.8, 83.0], [91.9, 83.0], [92.0, 83.0], [92.1, 83.0], [92.2, 83.0], [92.3, 83.0], [92.4, 84.0], [92.5, 84.0], [92.6, 84.0], [92.7, 84.0], [92.8, 84.0], [92.9, 84.0], [93.0, 84.0], [93.1, 84.0], [93.2, 84.0], [93.3, 84.0], [93.4, 84.0], [93.5, 84.0], [93.6, 84.0], [93.7, 85.0], [93.8, 85.0], [93.9, 85.0], [94.0, 85.0], [94.1, 85.0], [94.2, 85.0], [94.3, 85.0], [94.4, 85.0], [94.5, 85.0], [94.6, 85.0], [94.7, 85.0], [94.8, 86.0], [94.9, 86.0], [95.0, 86.0], [95.1, 86.0], [95.2, 86.0], [95.3, 86.0], [95.4, 86.0], [95.5, 86.0], [95.6, 86.0], [95.7, 87.0], [95.8, 87.0], [95.9, 87.0], [96.0, 87.0], [96.1, 87.0], [96.2, 87.0], [96.3, 87.0], [96.4, 88.0], [96.5, 88.0], [96.6, 88.0], [96.7, 88.0], [96.8, 89.0], [96.9, 89.0], [97.0, 90.0], [97.1, 90.0], [97.2, 92.0], [97.3, 93.0], [97.4, 94.0], [97.5, 98.0], [97.6, 101.0], [97.7, 102.0], [97.8, 106.0], [97.9, 111.0], [98.0, 119.0], [98.1, 126.0], [98.2, 134.0], [98.3, 140.0], [98.4, 145.0], [98.5, 149.0], [98.6, 155.0], [98.7, 159.0], [98.8, 165.0], [98.9, 170.0], [99.0, 177.0], [99.1, 183.0], [99.2, 191.0], [99.3, 202.0], [99.4, 216.0], [99.5, 232.0], [99.6, 258.0], [99.7, 274.0], [99.8, 293.0], [99.9, 331.0]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 108805.0, "series": [{"data": [[0.0, 108805.0], [300.0, 175.0], [700.0, 2.0], [100.0, 1925.0], [200.0, 596.0], [400.0, 26.0], [500.0, 2.0]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 104649.0, "series": [{"data": [[0.0, 104649.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6880.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.73803188E12, "maxY": 5.0, "series": [{"data": [[1.73803284E12, 5.0], [1.73803254E12, 5.0], [1.73803344E12, 5.0], [1.73803314E12, 5.0], [1.73803356E12, 5.0], [1.73803326E12, 5.0], [1.73803224E12, 5.0], [1.73803194E12, 2.3935217091660888], [1.73803332E12, 5.0], [1.73803302E12, 5.0], [1.738032E12, 4.526455026455043], [1.73803362E12, 5.0], [1.73803212E12, 5.0], [1.73803272E12, 5.0], [1.73803242E12, 5.0], [1.73803188E12, 1.0], [1.7380335E12, 5.0], [1.73803248E12, 5.0], [1.73803218E12, 5.0], [1.7380326E12, 5.0], [1.7380323E12, 5.0], [1.7380332E12, 5.0], [1.7380329E12, 5.0], [1.73803236E12, 5.0], [1.73803206E12, 5.0], [1.73803296E12, 5.0], [1.73803266E12, 5.0], [1.73803308E12, 5.0], [1.73803278E12, 5.0], [1.73803338E12, 5.0], [1.73803368E12, 5.0]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73803368E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 77.05400454716924, "minX": 1.0, "maxY": 143.25903614457835, "series": [{"data": [[1.0, 143.25903614457835], [2.0, 78.94333333333326], [4.0, 77.56193601312545], [5.0, 77.05400454716924], [3.0, 77.93274531422263]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather", "isController": false}, {"data": [[4.950713254610827, 77.17540414772557]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 230.31666666666666, "minX": 1.73803188E12, "maxY": 54737.6, "series": [{"data": [[1.73803284E12, 53683.21666666667], [1.73803254E12, 54365.583333333336], [1.73803344E12, 53128.96666666667], [1.73803314E12, 54185.51666666667], [1.73803356E12, 53077.23333333333], [1.73803326E12, 53532.433333333334], [1.73803224E12, 54737.6], [1.73803194E12, 20200.45], [1.73803332E12, 53009.48333333333], [1.73803302E12, 54352.8], [1.738032E12, 47362.683333333334], [1.73803362E12, 31843.15], [1.73803212E12, 53665.78333333333], [1.73803272E12, 54282.51666666667], [1.73803242E12, 53603.45], [1.73803188E12, 361.6666666666667], [1.7380335E12, 52888.183333333334], [1.73803248E12, 54196.066666666666], [1.73803218E12, 54515.36666666667], [1.7380326E12, 53654.6], [1.7380323E12, 54473.0], [1.7380332E12, 53013.78333333333], [1.7380329E12, 52555.15], [1.73803236E12, 54278.333333333336], [1.73803206E12, 54013.76666666667], [1.73803296E12, 53535.76666666667], [1.73803266E12, 53821.53333333333], [1.73803308E12, 45265.316666666666], [1.73803278E12, 54084.51666666667], [1.73803338E12, 53546.95], [1.73803368E12, 29309.816666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73803284E12, 34112.95], [1.73803254E12, 34546.183333333334], [1.73803344E12, 33768.566666666666], [1.73803314E12, 34440.53333333333], [1.73803356E12, 33671.96666666667], [1.73803326E12, 34025.333333333336], [1.73803224E12, 34661.36666666667], [1.73803194E12, 12836.533333333333], [1.73803332E12, 33686.85], [1.73803302E12, 34545.683333333334], [1.738032E12, 30096.383333333335], [1.73803362E12, 31545.983333333334], [1.73803212E12, 34104.55], [1.73803272E12, 34493.71666666667], [1.73803242E12, 34060.25], [1.73803188E12, 230.31666666666666], [1.7380335E12, 33617.683333333334], [1.73803248E12, 34439.03333333333], [1.73803218E12, 34643.98333333333], [1.7380326E12, 34095.21666666667], [1.7380323E12, 34617.6], [1.7380332E12, 33697.3], [1.7380329E12, 33406.416666666664], [1.73803236E12, 34493.51666666667], [1.73803206E12, 34325.53333333333], [1.73803296E12, 34024.26666666667], [1.73803266E12, 34201.95], [1.73803308E12, 28769.583333333332], [1.73803278E12, 34369.23333333333], [1.73803338E12, 34033.316666666666], [1.73803368E12, 29036.316666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73803368E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 75.24751465715002, "minX": 1.73803188E12, "maxY": 257.69230769230774, "series": [{"data": [[1.73803284E12, 76.60529045643146], [1.73803254E12, 75.72599231754164], [1.73803344E12, 77.29106628242072], [1.73803314E12, 75.85255586950939], [1.73803356E12, 77.38283914982937], [1.73803326E12, 76.7311492459699], [1.73803224E12, 75.24751465715002], [1.73803194E12, 82.68711233631991], [1.73803332E12, 77.62841386554602], [1.73803302E12, 75.64148527528803], [1.738032E12, 76.9559082892417], [1.73803362E12, 79.5100953449244], [1.73803212E12, 76.62853437094677], [1.73803272E12, 75.9030520646317], [1.73803242E12, 76.71818181818182], [1.73803188E12, 257.69230769230774], [1.7380335E12, 77.70657894736856], [1.73803248E12, 76.02234780375022], [1.73803218E12, 75.41266598569959], [1.7380326E12, 76.7306694343538], [1.7380323E12, 75.72885254280594], [1.7380332E12, 77.79889734838545], [1.7380329E12, 77.9581567796609], [1.73803236E12, 75.74454988458604], [1.73803206E12, 76.24948453608249], [1.73803296E12, 76.78991159646381], [1.73803266E12, 76.60165545783765], [1.73803308E12, 91.21156211562122], [1.73803278E12, 76.30888030887998], [1.73803338E12, 76.96308812061342], [1.73803368E12, 76.16971358927466]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73803368E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 75.10808055059896, "minX": 1.73803188E12, "maxY": 257.65384615384613, "series": [{"data": [[1.73803284E12, 76.5980290456431], [1.73803254E12, 75.72087067861696], [1.73803344E12, 77.28373067854356], [1.73803314E12, 75.84921654251185], [1.73803356E12, 77.12385200734705], [1.73803326E12, 76.72672906916286], [1.73803224E12, 75.10808055059896], [1.73803194E12, 82.66368022053743], [1.73803332E12, 77.62289915966396], [1.73803302E12, 75.63303457106296], [1.738032E12, 76.94062316284537], [1.73803362E12, 79.50616937745383], [1.73803212E12, 76.62438391699075], [1.73803272E12, 75.9002308284173], [1.73803242E12, 76.71246753246723], [1.73803188E12, 257.65384615384613], [1.7380335E12, 77.69921052631572], [1.73803248E12, 76.01669663498552], [1.73803218E12, 75.40653728294154], [1.7380326E12, 76.72288531395985], [1.7380323E12, 75.72118579095326], [1.7380332E12, 77.79390916251003], [1.7380329E12, 77.95577330508479], [1.73803236E12, 75.73967684021542], [1.73803206E12, 76.24407216494849], [1.73803296E12, 76.78549141965698], [1.73803266E12, 76.59622348680814], [1.73803308E12, 91.20664206642064], [1.73803278E12, 76.30193050193041], [1.73803338E12, 76.95814920717446], [1.73803368E12, 76.1648385131016]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73803368E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.73803188E12, "maxY": 3.0769230769230766, "series": [{"data": [[1.73803284E12, 0.09699170124481342], [1.73803254E12, 0.10140845070422569], [1.73803344E12, 0.0998166099030658], [1.73803314E12, 0.09581299768815854], [1.73803356E12, 0.20152191025977467], [1.73803326E12, 0.09802392095683868], [1.73803224E12, 0.10170787662503196], [1.73803194E12, 0.23156443831840184], [1.73803332E12, 0.10110294117647069], [1.73803302E12, 0.09859154929577471], [1.738032E12, 0.11346266901822478], [1.73803362E12, 0.10768367919237241], [1.73803212E12, 0.10531776913099876], [1.73803272E12, 0.10053859964093326], [1.73803242E12, 0.10389610389610422], [1.73803188E12, 3.0769230769230766], [1.7380335E12, 0.10631578947368418], [1.73803248E12, 0.09735422553300806], [1.73803218E12, 0.0947395301327889], [1.7380326E12, 0.0991177996886353], [1.7380323E12, 0.09634551495016654], [1.7380332E12, 0.10002625360987194], [1.7380329E12, 0.10248940677966104], [1.73803236E12, 0.10387278789433176], [1.73803206E12, 0.09716494845360826], [1.73803296E12, 0.10218408736349407], [1.73803266E12, 0.09648215209518914], [1.73803308E12, 0.1143911439114395], [1.73803278E12, 0.09523809523809548], [1.73803338E12, 0.09643878346763697], [1.73803368E12, 0.0]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73803368E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 70.0, "minX": 1.73803188E12, "maxY": 513.0, "series": [{"data": [[1.73803284E12, 486.0], [1.73803254E12, 357.0], [1.73803344E12, 364.0], [1.73803314E12, 326.0], [1.73803356E12, 467.0], [1.73803326E12, 282.0], [1.73803224E12, 264.0], [1.73803194E12, 409.0], [1.73803332E12, 359.0], [1.73803302E12, 246.0], [1.738032E12, 340.0], [1.73803212E12, 249.0], [1.73803272E12, 272.0], [1.73803242E12, 513.0], [1.73803188E12, 377.0], [1.7380335E12, 421.0], [1.73803248E12, 193.0], [1.73803218E12, 443.0], [1.7380326E12, 399.0], [1.7380323E12, 274.0], [1.7380332E12, 387.0], [1.7380329E12, 439.0], [1.73803236E12, 378.0], [1.73803206E12, 382.0], [1.73803296E12, 355.0], [1.73803266E12, 326.0], [1.73803308E12, 431.0], [1.73803278E12, 328.0], [1.73803338E12, 268.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73803284E12, 81.0], [1.73803254E12, 80.0], [1.73803344E12, 81.0], [1.73803314E12, 79.0], [1.73803356E12, 80.0], [1.73803326E12, 81.0], [1.73803224E12, 81.0], [1.73803194E12, 101.0], [1.73803332E12, 81.0], [1.73803302E12, 81.0], [1.738032E12, 81.0], [1.73803212E12, 82.0], [1.73803272E12, 80.0], [1.73803242E12, 82.0], [1.73803188E12, 371.2], [1.7380335E12, 83.0], [1.73803248E12, 81.0], [1.73803218E12, 80.0], [1.7380326E12, 81.0], [1.7380323E12, 80.0], [1.7380332E12, 83.0], [1.7380329E12, 83.0], [1.73803236E12, 81.0], [1.73803206E12, 80.90000000000009], [1.73803296E12, 82.0], [1.73803266E12, 80.0], [1.73803308E12, 86.0], [1.73803278E12, 80.0], [1.73803338E12, 82.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73803284E12, 168.0], [1.73803254E12, 136.94000000000005], [1.73803344E12, 191.64000000000033], [1.73803314E12, 157.0], [1.73803356E12, 179.1500000000001], [1.73803326E12, 174.58999999999924], [1.73803224E12, 123.42999999999984], [1.73803194E12, 266.48], [1.73803332E12, 198.0], [1.73803302E12, 134.8800000000001], [1.738032E12, 182.0], [1.73803212E12, 167.0], [1.73803272E12, 165.0], [1.73803242E12, 151.0], [1.73803188E12, 377.0], [1.7380335E12, 175.0], [1.73803248E12, 154.05999999999995], [1.73803218E12, 130.65999999999985], [1.7380326E12, 156.89999999999964], [1.7380323E12, 148.72000000000025], [1.7380332E12, 197.80000000000018], [1.7380329E12, 171.0], [1.73803236E12, 140.0], [1.73803206E12, 157.0], [1.73803296E12, 154.0], [1.73803266E12, 187.0], [1.73803308E12, 331.0], [1.73803278E12, 182.0], [1.73803338E12, 158.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73803284E12, 85.0], [1.73803254E12, 84.69999999999982], [1.73803344E12, 85.0], [1.73803314E12, 84.0], [1.73803356E12, 85.0], [1.73803326E12, 86.0], [1.73803224E12, 85.0], [1.73803194E12, 103.0], [1.73803332E12, 86.0], [1.73803302E12, 85.0], [1.738032E12, 85.0], [1.73803212E12, 86.0], [1.73803272E12, 85.0], [1.73803242E12, 86.0], [1.73803188E12, 375.95], [1.7380335E12, 87.0], [1.73803248E12, 85.0], [1.73803218E12, 84.0], [1.7380326E12, 85.0], [1.7380323E12, 85.0], [1.7380332E12, 87.0], [1.7380329E12, 87.0], [1.73803236E12, 85.0], [1.73803206E12, 85.0], [1.73803296E12, 85.0], [1.73803266E12, 85.0], [1.73803308E12, 278.3499999999999], [1.73803278E12, 85.0], [1.73803338E12, 86.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.73803284E12, 70.0], [1.73803254E12, 70.0], [1.73803344E12, 70.0], [1.73803314E12, 70.0], [1.73803356E12, 71.0], [1.73803326E12, 70.0], [1.73803224E12, 70.0], [1.73803194E12, 71.0], [1.73803332E12, 70.0], [1.73803302E12, 70.0], [1.738032E12, 70.0], [1.73803212E12, 71.0], [1.73803272E12, 70.0], [1.73803242E12, 70.0], [1.73803188E12, 72.0], [1.7380335E12, 71.0], [1.73803248E12, 71.0], [1.73803218E12, 70.0], [1.7380326E12, 71.0], [1.7380323E12, 70.0], [1.7380332E12, 70.0], [1.7380329E12, 70.0], [1.73803236E12, 70.0], [1.73803206E12, 70.0], [1.73803296E12, 71.0], [1.73803266E12, 70.0], [1.73803308E12, 70.0], [1.73803278E12, 70.0], [1.73803338E12, 70.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73803284E12, 73.0], [1.73803254E12, 73.0], [1.73803344E12, 73.0], [1.73803314E12, 73.0], [1.73803356E12, 74.0], [1.73803326E12, 73.0], [1.73803224E12, 73.0], [1.73803194E12, 75.0], [1.73803332E12, 74.0], [1.73803302E12, 73.0], [1.738032E12, 73.0], [1.73803212E12, 73.0], [1.73803272E12, 73.0], [1.73803242E12, 73.0], [1.73803188E12, 279.0], [1.7380335E12, 74.0], [1.73803248E12, 73.0], [1.73803218E12, 73.0], [1.7380326E12, 73.0], [1.7380323E12, 73.0], [1.7380332E12, 73.0], [1.7380329E12, 74.0], [1.73803236E12, 73.0], [1.73803206E12, 73.0], [1.73803296E12, 74.0], [1.73803266E12, 73.0], [1.73803308E12, 73.0], [1.73803278E12, 73.0], [1.73803338E12, 74.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73803356E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 72.0, "minX": 3.0, "maxY": 294.0, "series": [{"data": [[3.0, 294.0], [4.0, 280.0], [6.0, 82.0], [7.0, 102.0], [8.0, 102.0], [9.0, 102.0], [10.0, 102.0], [11.0, 79.0], [12.0, 82.0], [15.0, 288.0], [20.0, 281.0], [21.0, 80.0], [23.0, 78.0], [24.0, 79.0], [25.0, 78.0], [26.0, 73.0], [27.0, 72.0], [28.0, 73.0], [29.0, 76.0], [32.0, 74.5], [33.0, 114.0], [34.0, 74.0], [35.0, 75.0], [37.0, 73.0], [39.0, 73.0], [38.0, 75.5], [41.0, 73.0], [40.0, 74.0], [43.0, 76.0], [42.0, 75.5], [45.0, 76.0], [47.0, 76.0], [46.0, 74.0], [49.0, 74.0], [48.0, 76.0], [50.0, 74.0], [51.0, 74.0], [52.0, 74.0], [53.0, 74.0], [54.0, 74.0], [55.0, 74.0], [56.0, 74.0], [57.0, 73.0], [59.0, 74.0], [58.0, 74.0], [60.0, 73.0], [61.0, 74.0], [63.0, 73.0], [62.0, 74.0], [66.0, 73.0], [64.0, 73.0], [65.0, 73.0], [67.0, 73.0], [68.0, 73.0], [70.0, 73.0], [69.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[43.0, 75.0], [46.0, 76.0], [12.0, 74.0], [50.0, 74.0], [51.0, 75.0], [52.0, 78.0], [53.0, 78.0], [54.0, 75.0], [55.0, 74.0], [56.0, 73.0], [57.0, 73.0], [59.0, 73.0], [58.0, 73.0], [61.0, 73.0], [60.0, 74.0], [62.0, 73.0], [63.0, 73.0], [66.0, 73.0], [65.0, 73.0], [64.0, 73.0], [67.0, 73.0], [68.0, 73.0], [23.0, 78.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 72.0, "minX": 3.0, "maxY": 294.0, "series": [{"data": [[3.0, 294.0], [4.0, 280.0], [6.0, 82.0], [7.0, 102.0], [8.0, 102.0], [9.0, 102.0], [10.0, 102.0], [11.0, 79.0], [12.0, 82.0], [15.0, 288.0], [20.0, 281.0], [21.0, 80.0], [23.0, 78.0], [24.0, 79.0], [25.0, 78.0], [26.0, 73.0], [27.0, 72.0], [28.0, 73.0], [29.0, 76.0], [32.0, 74.5], [33.0, 114.0], [34.0, 74.0], [35.0, 75.0], [37.0, 73.0], [39.0, 73.0], [38.0, 75.5], [41.0, 73.0], [40.0, 74.0], [43.0, 76.0], [42.0, 75.5], [45.0, 76.0], [47.0, 76.0], [46.0, 74.0], [49.0, 74.0], [48.0, 76.0], [50.0, 74.0], [51.0, 74.0], [52.0, 74.0], [53.0, 74.0], [54.0, 74.0], [55.0, 74.0], [56.0, 74.0], [57.0, 73.0], [59.0, 74.0], [58.0, 74.0], [60.0, 73.0], [61.0, 74.0], [63.0, 73.0], [62.0, 74.0], [66.0, 73.0], [64.0, 73.0], [65.0, 73.0], [67.0, 73.0], [68.0, 73.0], [70.0, 73.0], [69.0, 73.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[43.0, 75.0], [46.0, 76.0], [12.0, 74.0], [50.0, 74.0], [51.0, 75.0], [52.0, 76.0], [53.0, 78.0], [54.0, 75.0], [55.0, 74.0], [56.0, 73.0], [57.0, 73.0], [59.0, 73.0], [58.0, 73.0], [61.0, 73.0], [60.0, 74.0], [62.0, 73.0], [63.0, 73.0], [66.0, 73.0], [65.0, 73.0], [64.0, 73.0], [67.0, 73.0], [68.0, 73.0], [23.0, 78.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.73803188E12, "maxY": 65.38333333333334, "series": [{"data": [[1.73803284E12, 64.26666666666667], [1.73803254E12, 65.08333333333333], [1.73803344E12, 63.61666666666667], [1.73803314E12, 64.88333333333334], [1.73803356E12, 63.56666666666667], [1.73803326E12, 64.1], [1.73803224E12, 65.38333333333334], [1.73803194E12, 24.216666666666665], [1.73803332E12, 63.46666666666667], [1.73803302E12, 65.08333333333333], [1.738032E12, 56.733333333333334], [1.73803362E12, 59.43333333333333], [1.73803212E12, 64.25], [1.73803272E12, 64.98333333333333], [1.73803242E12, 64.16666666666667], [1.73803188E12, 0.45], [1.7380335E12, 63.28333333333333], [1.73803248E12, 64.88333333333334], [1.73803218E12, 65.26666666666667], [1.7380326E12, 64.23333333333333], [1.7380323E12, 65.21666666666667], [1.7380332E12, 63.483333333333334], [1.7380329E12, 62.93333333333333], [1.73803236E12, 64.98333333333333], [1.73803206E12, 64.66666666666667], [1.73803296E12, 64.1], [1.73803266E12, 64.43333333333334], [1.73803308E12, 54.2], [1.73803278E12, 64.75], [1.73803338E12, 64.11666666666666], [1.73803368E12, 54.61666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73803368E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.73803188E12, "maxY": 65.3, "series": [{"data": [[1.73803284E12, 64.26666666666667], [1.73803254E12, 65.08333333333333], [1.73803344E12, 63.61666666666667], [1.73803314E12, 64.88333333333334], [1.73803356E12, 63.06666666666667], [1.73803326E12, 64.1], [1.73803224E12, 65.3], [1.73803194E12, 24.183333333333334], [1.73803332E12, 63.46666666666667], [1.73803302E12, 65.08333333333333], [1.738032E12, 56.7], [1.73803212E12, 64.25], [1.73803272E12, 64.98333333333333], [1.73803242E12, 64.16666666666667], [1.73803188E12, 0.43333333333333335], [1.7380335E12, 63.333333333333336], [1.73803248E12, 64.88333333333334], [1.73803218E12, 65.26666666666667], [1.7380326E12, 64.23333333333333], [1.7380323E12, 65.21666666666667], [1.7380332E12, 63.483333333333334], [1.7380329E12, 62.93333333333333], [1.73803236E12, 64.98333333333333], [1.73803206E12, 64.66666666666667], [1.73803296E12, 64.1], [1.73803266E12, 64.43333333333334], [1.73803308E12, 54.2], [1.73803278E12, 64.75], [1.73803338E12, 64.11666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.73803224E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.73803362E12, 59.43333333333333], [1.73803356E12, 0.36666666666666664], [1.73803368E12, 54.7]], "isOverall": false, "label": "429", "isController": false}, {"data": [[1.73803356E12, 0.08333333333333333], [1.73803224E12, 0.05]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73803368E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.73803188E12, "maxY": 65.3, "series": [{"data": [[1.73803284E12, 64.26666666666667], [1.73803254E12, 65.08333333333333], [1.73803344E12, 63.61666666666667], [1.73803314E12, 64.88333333333334], [1.73803356E12, 63.06666666666667], [1.73803326E12, 64.1], [1.73803224E12, 65.3], [1.73803194E12, 24.183333333333334], [1.73803332E12, 63.46666666666667], [1.73803302E12, 65.08333333333333], [1.738032E12, 56.7], [1.73803212E12, 64.25], [1.73803272E12, 64.98333333333333], [1.73803242E12, 64.16666666666667], [1.73803188E12, 0.43333333333333335], [1.7380335E12, 63.333333333333336], [1.73803248E12, 64.88333333333334], [1.73803218E12, 65.26666666666667], [1.7380326E12, 64.23333333333333], [1.7380323E12, 65.21666666666667], [1.7380332E12, 63.483333333333334], [1.7380329E12, 62.93333333333333], [1.73803236E12, 64.98333333333333], [1.73803206E12, 64.66666666666667], [1.73803296E12, 64.1], [1.73803266E12, 64.43333333333334], [1.73803308E12, 54.2], [1.73803278E12, 64.75], [1.73803338E12, 64.11666666666666]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather-success", "isController": false}, {"data": [[1.73803362E12, 59.43333333333333], [1.73803356E12, 0.45], [1.73803224E12, 0.08333333333333333], [1.73803368E12, 54.7]], "isOverall": false, "label": "GET. api.openweathermap.org/data/2.5/weather-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73803368E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.73803188E12, "maxY": 65.3, "series": [{"data": [[1.73803284E12, 64.26666666666667], [1.73803254E12, 65.08333333333333], [1.73803344E12, 63.61666666666667], [1.73803314E12, 64.88333333333334], [1.73803356E12, 63.06666666666667], [1.73803326E12, 64.1], [1.73803224E12, 65.3], [1.73803194E12, 24.183333333333334], [1.73803332E12, 63.46666666666667], [1.73803302E12, 65.08333333333333], [1.738032E12, 56.7], [1.73803212E12, 64.25], [1.73803272E12, 64.98333333333333], [1.73803242E12, 64.16666666666667], [1.73803188E12, 0.43333333333333335], [1.7380335E12, 63.333333333333336], [1.73803248E12, 64.88333333333334], [1.73803218E12, 65.26666666666667], [1.7380326E12, 64.23333333333333], [1.7380323E12, 65.21666666666667], [1.7380332E12, 63.483333333333334], [1.7380329E12, 62.93333333333333], [1.73803236E12, 64.98333333333333], [1.73803206E12, 64.66666666666667], [1.73803296E12, 64.1], [1.73803266E12, 64.43333333333334], [1.73803308E12, 54.2], [1.73803278E12, 64.75], [1.73803338E12, 64.11666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.73803362E12, 59.43333333333333], [1.73803356E12, 0.45], [1.73803224E12, 0.08333333333333333], [1.73803368E12, 54.7]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73803368E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

