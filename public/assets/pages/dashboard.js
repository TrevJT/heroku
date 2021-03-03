/*
 Template Name: Admiria - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Dashboard Init
*/


!function($) {
    "use strict";

    var Dashboard = function() {};

    Dashboard.prototype.init = function () {

        // Peity line
        $('.peity-line').each(function() {
            $(this).peity("line", $(this).data());
        });

        //Knob chart
        $(".knob").knob();

        //C3 combined chart
        c3.generate({
            bindto: '#combine-chart',
            data: {
                columns: [
                    ['Email_Opened', 530, 420, 550, 540, 560, 550],
                    ['Friend_Opt_In', 200, 130, 90, 240, 130, 220],
                    ['Accounts_Opened', 30, 20, 50, 40, 60, 50],

                ],
                types: {
                    Email_Opened: 'bar',
                    Friend_Opt_In: 'bar',
                    Accounts_Opened: 'bar',
                    gav1: 'bar',
                    iMacs1: 'bar',
                    Macbooks1: 'bar'
                },
                colors: {
                    gav: '#5468da',
                    iMacs: '#4ac18e',
                    Tablets: '#ffbb44',
                    iPhones: '#ea553d',
                    Macbooks: '#6d60b0',
                    gav1: '#5468da',
                    iMacs1: '#4ac18e',
                    Tablets1: '#ffbb44',
                    iPhones1: '#ea553d',
                    Macbooks1: '#6d60b0'
                },
                groups: [
                    ['SonyVaio','iMacs']
                ]
            },
            axis: {
                x: {
                    type: 'categorized'
                }
            }
        });

        //C3 Donut Chart
        c3.generate({
            bindto: '#donut-chart',
            data: {
                columns: [
                    ['Desktops', 78],
                    ['Mobiles', 40],
                    ['Tablets', 25]
                ],
                type : 'donut'
            },
            donut: {
                title: "Sales Analytics",
                width: 30,
                label: {
                    show:false
                }
            },
            color: {
                pattern: ["#5468da", "#4ac18e","#6d60b0"]
            }
        });

    },
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard

}(window.jQuery),

//initializing
    function($) {
        "use strict";
        $.Dashboard.init()
    }(window.jQuery);
